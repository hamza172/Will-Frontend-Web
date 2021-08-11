import React, { useState } from 'react';
import FormContainer from '../../willcreation/FormContainer';
import { Form } from 'react-bootstrap';

import Button from "@material-ui/core/Button";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";

const Step5MuslimCodicil = ({updateAndClose, nextStep, prevStep, handleChange, changeState, values}) => {

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
            <h4 className="mb-5"> Step5: Other Family Members</h4>

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

                {[...Array(values.otherFamilyMembers.length)].map((e, i) => <div key={i + 1}>

                <Form.Group controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" value={values.otherFamilyMembers[i].name} onChange={(e) => {
                        values.otherFamilyMembers[i].name = e.target.value;
                        changeState(values.otherFamilyMembers[i].name);                          
                    }}></Form.Control>
                    <Form.Control.Feedback type="invalid">Please fill the required field.</Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="address">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" name="address" value={values.otherFamilyMembers[i].address} onChange={(e) => {
                        values.otherFamilyMembers[i].address = e.target.value;
                        changeState(values.otherFamilyMembers[i].address);                          
                    }}></Form.Control>
                    <Form.Control.Feedback type="invalid">Please fill the required field.</Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="relationship">
                    <Form.Label>Relationship</Form.Label>
                    <select className="form-control" value={values.otherFamilyMembers[i].relationship} onChange={(e) => {
                        values.otherFamilyMembers[i].relationship = e.target.value;
                        changeState(values.otherFamilyMembers[i].relationship);
                    }}>
                        <option selected disabled value="">[Please select one]</option>
                        <option value="Brother">Brother</option>
                        <option value="Sister">Sister</option>
                        <option value="Grand Father">Grand Father</option>
                        <option value="Grand Mother">Grand Mother</option>
                        <option value="Uncle">Uncle</option>
                        <option value="Other">Other</option>
                    </select>
                </Form.Group>  


                <Button className="mr-3" color="primary" variant="contained" disabled={values.otherFamilyMembers.length === 1} onClick={(e) => {
                    var temp = [...values.otherFamilyMembers];                    
                    var foo = -1;
                    for(var j = 0; j < values.otherFamilyMembers.length; j++) {
                        if(i+1 === values.otherFamilyMembers[j].index) {
                            foo = i;
                            break;
                        }
                    }
                    temp.splice(foo, 1)                
                    changeState("otherFamilyMembers", temp);
                }}>Delete<RemoveIcon /></Button>

                <Button variant="contained" color="primary" onClick={(e) => {
                    e.preventDefault();
                    var temp = [...values.otherFamilyMembers];
                    temp.push({
                        index: values.otherFamilyMembers.length + 1,
                        name: "",
                    });
                    changeState("otherFamilyMembers", temp);
                }}>Add More<AddIcon /></Button>                  

                </div>)}                

                <Button className="mt-5 mb-5 mr-5" variant="contained" color="primary" onClick={Previous}>Back</Button>
                <Button name="Continue" value="Continue" className="mt-5 mb-5" variant="contained" color="primary" type="submit">Next</Button>
                <Button name="Update-Close" value="Update-Close" className="mt-5 mb-5 ml-5" variant="contained" color="primary" type="submit">Update & Close</Button>

            </Form>
        </FormContainer>
    )

}

export default Step5MuslimCodicil