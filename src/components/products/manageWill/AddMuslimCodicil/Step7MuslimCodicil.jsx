import React, { useState } from 'react';
import FormContainer from '../../willcreation/FormContainer';
import { Form } from 'react-bootstrap';

import Button from "@material-ui/core/Button";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";

const Step7MuslimCodicil = ({updateAndClose, nextStep, prevStep, handleChange, changeState, values}) => {

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

            <h4 className="mb-5"> Step 7</h4>
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

                <Form.Group>
                    <Form.Label>Do you wish to leave gift for someone outside your family (Please note that maximum one-third of the total value of the estate can be shared outside of the Islamic law. Any Will now follow up normal Will probate process)</Form.Label>
                    <Form.Control as="select" value={values.step7Question} onChange={(e) => {
                            values.step7Question = e.target.value;
                            handleChange("step7Question", e);
                        }}>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </Form.Control>                    
                </Form.Group>

                {values.step7Question === "Yes" && 
                    <div>
                        <Form.Label>
                            The people who you choose to manage the winding up your affairs after
                            your death are known as executors. Executors work jointly together.
                        </Form.Label>
                        <Form.Label>
                            We recommend that you appoint at least two people. The maximum number by
                            law that can take up office is four.
                        </Form.Label>

                        {[...Array(values.executorDetails.length)].map((e, i) => <div key={i + 1}>

                            <Form.Group controlId="name">
                                <Form.Label>Full Name of Executor</Form.Label>
                                <Form.Control type="text" name="name" required value={values.executorDetails[i].name} onChange={(e) => {
                                    values.executorDetails[i].name = e.target.value;
                                    changeState(values.executorDetails[i].name);                          
                                }}></Form.Control>
                                <Form.Control.Feedback type="invalid">Please fill the required field.</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group controlId="relationship">
                                <Form.Label>Relationship with Executor</Form.Label>
                                <Form.Control as="select" name="relationship" required value={values.executorDetails[i].relationship} onChange={(e) => {
                                    values.executorDetails[i].relationship = e.target.value;
                                    changeState(values.executorDetails[i].relationship);                          
                                }}>
                                    <option selected disabled value="">[Please select one]</option>
                                    <option value="husband">Husband</option>
                                    <option value="Wife">Wife</option>
                                    <option value="Partner">Partner</option>
                                    <option value="Brother">Brother</option>
                                    <option value="Sister">Sister</option>
                                    <option value="Son">Son</option>
                                    <option value="Daughter">Daughter</option>
                                    <option value="Grandson">Grandson</option>
                                    <option value="Granddaughter">Granddaughter</option>
                                    <option value="Friend">Friend</option>
                                    <option value="Business Partner">Business Partner</option>
                                    <option value="Other">Other</option>
                                </Form.Control>
                                <Form.Control.Feedback type="invalid">Please fill the required field.</Form.Control.Feedback>
                            </Form.Group>   

                            <Form.Group controlId="address">
                                <Form.Label>Address</Form.Label>
                                <Form.Control type="text" name="address" required value={values.executorDetails[i].address} onChange={(e) => {
                                    values.executorDetails[i].address = e.target.value;
                                    changeState(values.executorDetails[i].address);                          
                                }}></Form.Control>
                                <Form.Control.Feedback type="invalid">Please fill the required field.</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group controlId="town">
                                <Form.Label>Town</Form.Label>
                                <Form.Control type="text" name="town" required value={values.executorDetails[i].town} onChange={(e) => {
                                    values.executorDetails[i].town = e.target.value;
                                    changeState(values.executorDetails[i].town);                          
                                }}></Form.Control>
                                <Form.Control.Feedback type="invalid">Please fill the required field.</Form.Control.Feedback>
                            </Form.Group>    


                            <Form.Group controlId="state">
                                <Form.Label>State</Form.Label>
                                <Form.Control type="text" name="state" required value={values.executorDetails[i].state} onChange={(e) => {
                                    values.executorDetails[i].state = e.target.value;
                                    changeState(values.executorDetails[i].state);                          
                                }}></Form.Control>
                                <Form.Control.Feedback type="invalid">Please fill the required field.</Form.Control.Feedback>
                            </Form.Group>                            

                            <Form.Group controlId="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="text" name="email" required value={values.executorDetails[i].email} onChange={(e) => {
                                    values.executorDetails[i].email = e.target.value;
                                    changeState(values.executorDetails[i].email);                          
                                }}></Form.Control>
                                <Form.Control.Feedback type="invalid">Please fill the required field.</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group controlId="ph">
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control type="text" name="ph" required value={values.executorDetails[i].phone} onChange={(e) => {
                                    values.executorDetails[i].phone = e.target.value;
                                    changeState(values.executorDetails[i].phone);                          
                                }}></Form.Control>
                                <Form.Control.Feedback type="invalid">Please fill the required field.</Form.Control.Feedback>
                            </Form.Group>

                            <Button className="mr-3" color="primary" variant="contained" disabled={values.executorDetails.length === 1} onClick={(e) => {
                                var temp = [...values.executorDetails];                    
                                var foo = -1;
                                for(var j = 0; j < values.executorDetails.length; j++) {
                                    if(i+1 === values.executorDetails[j].index) {
                                        foo = i;
                                        break;
                                    }
                                }
                                temp.splice(foo, 1)                
                                changeState("executorDetails", temp);
                            }}>Delete<RemoveIcon /></Button>

                            <Button disabled={values.executorDetails.length === 4} variant="contained" color="primary" onClick={(e) => {
                                console.log(values.executorDetails);
                                e.preventDefault();
                                var temp = [...values.executorDetails];
                                temp.push({
                                    index: values.executorDetails.length + 1,
                                    name: "",
                                    relationship: "",
                                    address: "",
                                    town: "",
                                    state: "",
                                    email: "",
                                    phone: "",
                                });
                                changeState("executorDetails", temp);
                            }}>Add More<AddIcon /></Button>                                                        

                        </div>)}

                        <Form.Group controlId="addAltExec">
                            <Form.Label>Do you want to add alternate executor? </Form.Label>
                            <Form.Control as="select" name="addAltExec" required value={values.addAltExec} onChange={(e) => {handleChange("addAltExec", e)}}>
                                <option selected disabled value="">[Please select one]</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="isRenumerated">
                            <Form.Label>Will the executor be renumerated? </Form.Label>
                            <Form.Control as="select" name="isRenumerated" required value={values.isRenumerated} onChange={(e) => {handleChange("isRenumerated", e)}}>
                                <option selected disabled value="">[Please select one]</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="execRenumeration">
                            <Form.Label>Executor Renumeration</Form.Label>
                            <Form.Control type="text" name="execRenumeration" value={values.execRenumeration} onChange={(e) => {handleChange("execRenumeration", e)}}></Form.Control>
                        </Form.Group>
                                                                                     
                    </div>
                }
                <Button className="mt-5 mb-5 mr-5" variant="contained" color="primary" onClick={Previous}>Back</Button>
                <Button name="Continue" value="Continue" className="mt-5 mb-5" variant="contained" color="primary" type="submit">Next</Button>
                <Button name="Update-Close" value="Update-Close" className="mt-5 mb-5 ml-5" variant="contained" color="primary" type="submit">Update & Close</Button>
            </Form>

        </FormContainer>
    )

}

export default Step7MuslimCodicil