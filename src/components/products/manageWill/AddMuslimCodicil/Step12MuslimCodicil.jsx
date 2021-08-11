import React, { useState } from 'react';
import FormContainer from '../../willcreation/FormContainer';
import { Form } from 'react-bootstrap';

import Button from "@material-ui/core/Button";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";

const Step12MuslimCodicil = ({updateAndClose, nextStep, prevStep, handleChange, changeState, values}) => {

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

            <h3>Step 12: Pets</h3>

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

                <Form.Group controlId="giftToPet">
                    <Form.Label>Any gift to Pet?</Form.Label>
                    <Form.Control required as="select" value={values.giftToPet} onChange={(e) => handleChange("giftToPet", e)}>
                        <option disabled selected value="">[Please select one]</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </Form.Control>
                </Form.Group>

                {values.giftToPet === "Yes" &&
                    <div>
                        <Form.Group controlId="name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control required type="text" placeholder="Enter  Name" value={values.petName} onChange={(e) => handleChange("petName", e)}></Form.Control>
                            <Form.Control.Feedback type="invalid">Please fill the required field.</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="description">
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" as="textarea" rows={5} required placeholder="Enter Description" value={values.petDescription} onChange={(e) => handleChange("petDescription", e)}></Form.Control>
                            <Form.Control.Feedback type="invalid">Please fill the required field.</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="amount">
                            <Form.Label>Amount</Form.Label>
                            <Form.Control type="number" required placeholder="Enter Amount" value={values.petAmount} onChange={(e) => handleChange("petAmount", e)}></Form.Control>
                            <Form.Control.Feedback type="invalid">Please fill the required field.</Form.Control.Feedback>
                        </Form.Group>
                    </div>
                }


                <Form.Group controlId="caretaker">
                    <Form.Label>
                        Do you want executor to appoint a pet caretaker?
                    </Form.Label>
                    <Form.Control required as="select" value={values.petCaretaker} onChange={(e) => handleChange("petCaretaker", e)}>
                        <option selected disabled value="">[Please select one]</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </Form.Control>
                </Form.Group>

                {values.petCaretaker === "Yes" &&
                    <div>
                        <Form.Group controlId="careTakerName">
                            <Form.Label>CareTaker Name </Form.Label>
                            <Form.Control required type="text" placeholder="Enter CareTaker Name" value={values.petCareTakerName} onChange={(e) => handleChange("petCareTakerName", e)}></Form.Control>
                            <Form.Control.Feedback type="invalid">Please fill the required field.</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="address">
                            <Form.Label>Address</Form.Label>
                            <Form.Control required type="text" placeholder="Enter Address" value={values.petAddress} onChange={(e) => handleChange("petAddress", e)}></Form.Control>
                            <Form.Control.Feedback type="invalid">Please fill the required field.</Form.Control.Feedback>
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

export default Step12MuslimCodicil