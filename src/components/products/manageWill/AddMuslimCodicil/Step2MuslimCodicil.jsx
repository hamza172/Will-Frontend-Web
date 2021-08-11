import React, { useState } from 'react';
import FormContainer from '../../willcreation/FormContainer';
import { Form } from 'react-bootstrap';

import Button from "@material-ui/core/Button";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";

const Step2MuslimCodicil = ({updateAndClose, nextStep, prevStep, handleChange, changeState, values}) => {

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
            <button onClick={(e) => {
                console.log(values.wivesDetails)
            }}>Test</button>
            <h4 className="mb-5"> Step3: Wives</h4>

            <Form.Label as="legend" className="text-center mb-5" style={{ backgroundColor: "beige" }}>
                Add family members and your relationship with them. Family members must include Wife/Husband, Sons, Daughters, Sister, Brothers, Grand Father, 
                Grand Mother, Uncles that is entitled to your estate according to Islamic law. Please note Will be shared to your family according to Islamic right. 
                Please click the “Schedule A” to understand Islamic sharing formula.
            </Form.Label>            

            <Form noValidate validated={validated} onSubmit={(e) => {
                    e.preventDefault();
                    var btnName = e.nativeEvent.submitter.name;
                    if(btnName === "Continue") {
                        Continue(e);
                    }
                    else if(btnName === "Update-Close") {
                        updateAndClose(e, true);
                        setValidated(true);
                    }                    
                }}>

            {values.wivesDetails !== undefined &&
                <div>
                    {[...Array(values.wivesDetails.length)].map((e, i) => <div key={i + 1}>
                <Form.Group controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" required value={values.wivesDetails[i].name} onChange={(e) => {
                        values.wivesDetails[i].name = e.target.value;
                        changeState(values.wivesDetails[i].name);  
                    }}></Form.Control>
                    <Form.Control.Feedback type="invalid">Please fill the required field.</Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="dob">
                    <Form.Label>Date Of Birth</Form.Label>
                    <Form.Control type="text" name="dob" required value={values.wivesDetails[i].dob} onChange={(e) => {
                        values.wivesDetails[i].dob = e.target.value;
                        changeState(values.wivesDetails[i].dob);
                    }}></Form.Control>
                    <Form.Control.Feedback type="invalid">Please fill the required field.</Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="address">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" name="address" required value={values.wivesDetails[i].address} onChange={(e) => {
                        values.wivesDetails[i].address = e.target.value;
                        changeState(values.wivesDetails[i].address);
                    }}></Form.Control>
                    <Form.Control.Feedback type="invalid">Please fill the required field.</Form.Control.Feedback>
                </Form.Group>

                <Button className="mr-3" color="primary" variant="contained" disabled={values.wivesDetails.length === 1} onClick={(e) => {
                    var temp = [...values.wivesDetails];                    
                    var foo = -1;
                    for(var j = 0; j < values.wivesDetails.length; j++) {
                        if(i+1 === values.wivesDetails[j].index) {
                            foo = i;
                            break;
                        }
                    }
                    temp.splice(foo, 1)                
                    changeState("wivesDetails", temp);
                }}>Delete<RemoveIcon /></Button>

                <Button variant="contained" color="primary" onClick={(e) => {
                    e.preventDefault();
                    var temp = [...values.wivesDetails];
                    temp.push({
                        index: values.wivesDetails.length + 1,
                        name: "",
                        dob: "",
                        address: "",
                    });
                    changeState("wivesDetails", temp);
                }}>Add More<AddIcon /></Button>

            </div>)}
                </div>
            }            

            <Button className="mt-5 mb-5 mr-5" variant="contained" color="primary" onClick={Previous}>Back</Button>
            <Button name="Continue" value="Continue" className="mt-5 mb-5" variant="contained" color="primary" type="submit">Next</Button>
            <Button name="Update-Close" value="Update-Close" className="mt-5 mb-5 ml-5" variant="contained" color="primary" type="submit">Update & Close</Button>

            </Form>

        </FormContainer>
    )
}

export default Step2MuslimCodicil