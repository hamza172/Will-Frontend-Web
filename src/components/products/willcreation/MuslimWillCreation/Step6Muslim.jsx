import React, { useState } from 'react';
import FormContainer from '../FormContainer';
import { Form } from 'react-bootstrap';

import Button from "@material-ui/core/Button";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";

const Step6Muslim = ({nextStep, prevStep, handleChange, changeState, values}) => {

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
            <h4 className="mb-5"> Step 6: Guardian Details</h4>

            <Form.Label as="legend" className="text-center mb-5" style={{ backgroundColor: "beige" }}>
                Guardians are the people who you would like to look after your young
                children if there is no one left with parental responsibility.
            </Form.Label>
            <Form.Label>You can nominate up to two people</Form.Label>

            <Form noValidate validated={validated} onSubmit={Continue}>
                {[...Array(values.guardianDetails.length)].map((e, i) => <div key={i + 1}>

                    <Form.Group controlId="name">
                        <Form.Label>Full Name of Guardian</Form.Label>
                        <Form.Control type="text" name="name" required value={values.guardianDetails[i].name} onChange={(e) => {
                            values.guardianDetails[i].name = e.target.value;
                            changeState(values.guardianDetails[i].name);                          
                        }}></Form.Control>
                        <Form.Control.Feedback type="invalid">Please fill the required field.</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="relationship">
                        <Form.Label>Relationship with Executor</Form.Label>
                        <Form.Control as="select" name="relationship" required value={values.guardianDetails[i].relationship} onChange={(e) => {
                            values.guardianDetails[i].relationship = e.target.value;
                            changeState(values.guardianDetails[i].relationship);
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
                        <Form.Control type="text" name="address" required value={values.guardianDetails[i].address} onChange={(e) => {
                            values.guardianDetails[i].address = e.target.value;
                            changeState(values.guardianDetails[i].address);
                        }}></Form.Control>
                        <Form.Control.Feedback type="invalid">Please fill the required field.</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="town">
                        <Form.Label>Town</Form.Label>
                        <Form.Control type="text" name="town" required value={values.guardianDetails[i].town} onChange={(e) => {
                            values.guardianDetails[i].town = e.target.value;
                            changeState(values.guardianDetails[i].town);
                        }}></Form.Control>
                        <Form.Control.Feedback type="invalid">Please fill the required field.</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="country">
                        <Form.Label>Country</Form.Label>
                        <Form.Control type="text" name="country" required value={values.guardianDetails[i].country} onChange={(e) => {
                            values.guardianDetails[i].country = e.target.value;
                            changeState(values.guardianDetails[i].country);
                        }}></Form.Control>
                        <Form.Control.Feedback type="invalid">Please fill the required field.</Form.Control.Feedback>
                    </Form.Group>

                    <Button className="mr-3" color="primary" variant="contained" disabled={values.guardianDetails.length === 1} onClick={(e) => {
                        var temp = [...values.guardianDetails];                    
                        var foo = -1;
                        for(var j = 0; j < values.guardianDetails.length; j++) {
                            if(i+1 === values.guardianDetails[j].index) {
                                foo = i;
                                break;
                            }
                        }
                        temp.splice(foo, 1)                
                        changeState("guardianDetails", temp);
                    }}>Delete<RemoveIcon /></Button>

                    <Button disabled={values.guardianDetails.length === 2} variant="contained" color="primary" onClick={(e) => {
                        e.preventDefault();
                        var temp = [...values.guardianDetails];
                        temp.push({
                            index: values.guardianDetails.length + 1,
                            name: "",
                        });
                        changeState("guardianDetails", temp);
                    }}>Add More<AddIcon /></Button> 

                </div>)}

                <Button className="mt-5 mb-5 mr-5" variant="contained" color="primary" onClick={Previous}>Back</Button>
                <Button className="mt-5 mb-5" variant="contained" color="primary" type="submit">Continue</Button>
            </Form>

            

        </FormContainer>
    );
}

export default Step6Muslim