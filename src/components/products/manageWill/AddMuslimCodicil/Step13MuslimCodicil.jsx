import React, { useState } from 'react';
import FormContainer from '../../willcreation/FormContainer';
import { Form } from 'react-bootstrap';

import Button from "@material-ui/core/Button";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";

const Step13MuslimCodicil = ({updateAndClose, nextStep, prevStep, handleChange, changeState, values}) => {

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
            <h3>Burial Arrangements</h3>

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

            <Form.Group controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control required as="textarea" rows={10} value={values.burialDescription} onChange={(e) => handleChange("burialDescription", e)}></Form.Control>
                <Form.Control.Feedback type="invalid">Please fill the required field.</Form.Control.Feedback>
            </Form.Group>

                <Button className="mt-5 mb-5 mr-5" variant="contained" color="primary" onClick={Previous}>Back</Button>
                <Button name="Continue" value="Continue" className="mt-5 mb-5" variant="contained" color="primary" type="submit">Next</Button>
                <Button name="Update-Close" value="Update-Close" className="mt-5 mb-5 ml-5" variant="contained" color="primary" type="submit">Update & Close</Button>
            </Form>
        </FormContainer>
    )

}

export default Step13MuslimCodicil