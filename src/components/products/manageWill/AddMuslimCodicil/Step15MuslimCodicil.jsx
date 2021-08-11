import React, { useState } from 'react';
import FormContainer from '../../willcreation/FormContainer';
import { Form } from 'react-bootstrap';

import Button from "@material-ui/core/Button";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";

const Step15MuslimCodicil = ({updateAndClose, nextStep, prevStep, handleChange, changeState, values}) => {

    const Continue = (e) => {        
        e.preventDefault();

        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.stopPropagation();
        }
        else {
            nextStep();
        }
        setValidated(true);         
    }

    const Previous = e => {
        e.preventDefault();
        prevStep();
    }

    const [validated, setValidated] = useState(false);

    return(
        <FormContainer>
            <h4 className="mb-5"> Signing Details</h4>

            <Form noValidate validated={validated} onSubmit={(e) => {
                    e.preventDefault();
                    var btnName = e.nativeEvent.submitter.name;
                    if(btnName === "Continue") {
                        Continue(e);
                    }
                    else if(btnName === "Update-Close") {
                        updateAndClose(e);
                        setValidated(true);
                    }                    
                }}>

            {[...Array(values.signingDetails.length)].map((e, i) => 
                <div key={i + 1}>

                    <Form.Group controlId="name">
                        <Form.Label> Witness Name</Form.Label>
                        <Form.Control type="text" name="name" required value={values.signingDetails[i].name} onChange={(e) => {
                                values.signingDetails[i].name = e.target.value;
                                changeState(values.signingDetails[i].name); 
                            }}></Form.Control>
                        <Form.Control.Feedback type="invalid">Please fill the required field.</Form.Control.Feedback>
                    </Form.Group>

                    <Button className="mr-3" color="primary" variant="contained" disabled={values.signingDetails.length === 2} onClick={(e) => {
                        var temp = [...values.signingDetails];                    
                        var foo = -1;
                        for(var j = 0; j < values.signingDetails.length; j++) {
                            if(i+1 === values.signingDetails[j].index) {
                                foo = i;
                                break;
                            }
                        }
                        temp.splice(foo, 1)                
                        changeState("signingDetails", temp);
                    }}>Delete<RemoveIcon /></Button>

                    <Button disabled={values.signingDetails.length === 4} variant="contained" color="primary" onClick={(e) => {
                        console.log(values.signingDetails);
                        e.preventDefault();
                        var temp = [...values.signingDetails];
                        temp.push({
                            index: values.signingDetails.length + 1,
                            assetType: "",
                            desc: "",
                            value: "",
                            tenant: "",
                        });
                        changeState("signingDetails", temp);
                    }}>Add More<AddIcon /></Button>    

                </div>                
            )}

            
                <Button className="mt-5 mb-5 mr-5" variant="contained" color="primary" onClick={Previous}>Back</Button>
                <Button name="Update-Close" value="Update-Close" className="mt-5 mb-5 ml-5" variant="contained" color="primary" type="submit">Update & Close</Button>
            </Form>

        </FormContainer>
    )

}

export default Step15MuslimCodicil