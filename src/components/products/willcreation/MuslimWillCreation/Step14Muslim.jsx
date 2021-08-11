import React, { useState } from 'react';
import FormContainer from '../FormContainer';
import { Form } from 'react-bootstrap';

import Button from "@material-ui/core/Button";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

const Step14Muslim = ({nextStep, prevStep, handleChange, changeState, values}) => {

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

            <h4 className="mb-5"> Additional Instructions</h4>

            <Form noValidate validated={validated} onSubmit={Continue}>

                {[...Array(values.additionalInstructions.length)].map((e, i) => <div key={i + 1}>

                    <Form.Group controlId="description">
                        <Form.Label> Description</Form.Label>
                        <Form.Control type="text" name="description" as="textarea" row={8} description="description" required value={values.additionalInstructions[i].desc} onChange={(e) => {
                                values.additionalInstructions[i].desc = e.target.value;
                                changeState(values.additionalInstructions[i].desc); 
                            }}></Form.Control>
                        <Form.Control.Feedback type="invalid">Please fill the required field.</Form.Control.Feedback>
                    </Form.Group>

                    <Button className="mr-3" color="primary" variant="contained" disabled={values.additionalInstructions.length === 1} onClick={(e) => {
                        var temp = [...values.additionalInstructions];                    
                        var foo = -1;
                        for(var j = 0; j < values.additionalInstructions.length; j++) {
                            if(i+1 === values.additionalInstructions[j].index) {
                                foo = i;
                                break;
                            }
                        }
                        temp.splice(foo, 1)                
                        changeState("additionalInstructions", temp);
                    }}>Delete<RemoveIcon /></Button>

                    <Button disabled={values.additionalInstructions.length === 4} variant="contained" color="primary" onClick={(e) => {
                        console.log(values.additionalInstructions);
                        e.preventDefault();
                        var temp = [...values.additionalInstructions];
                        temp.push({
                            index: values.additionalInstructions.length + 1,
                            assetType: "",
                            desc: "",
                            value: "",
                            tenant: "",
                        });
                        changeState("additionalInstructions", temp);
                    }}>Add More<AddIcon /></Button>         

                </div>)}

                <Form.Group controlId="isLiterate">
                    <Form.Label>Is the Tester Literate? </Form.Label>
                    <Form.Control as="select" value={values.isLiterate} required onChange={(e) => {handleChange("isLiterate", e)}}>
                        <option selected disabled value="">[Please select one]</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </Form.Control>
                </Form.Group>

                {values.isLiterate === "No" &&
                    <div>
                        <Form.Group controlId="name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control required type="text" value={values.additionalName} onChange={(e) => {handleChange("additionalName", e)}}></Form.Control>
                            <Form.Control.Feedback type="invalid">Please fill the required field.</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group controlId="address">
                            <Form.Label>Address</Form.Label>
                            <Form.Control required type="text" value={values.additionalAddress} onChange={(e) => {handleChange("additionalAddress", e)}}></Form.Control>
                            <Form.Control.Feedback type="invalid">Please fill the required field.</Form.Control.Feedback>
                        </Form.Group>
                    </div>
                }

                <Button className="mt-5 mb-5 mr-5" variant="contained" color="primary" onClick={Previous}>Back</Button>
                <Button className="mt-5 mb-5" variant="contained" color="primary" type="submit">Continue</Button>
            </Form>
        </FormContainer>
    )

}

export default Step14Muslim