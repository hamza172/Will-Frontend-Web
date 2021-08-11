import React, { useState } from 'react';
import FormContainer from '../FormContainer';
import { Form } from 'react-bootstrap';

import Button from "@material-ui/core/Button";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";

const Step4Muslim = ({nextStep, prevStep, handleChange, changeState, values}) => {

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

            <h4 className="mb-5"> Step4: Children</h4>

            <Form noValidate validated={validated} onSubmit={Continue}>
                {[...Array(values.children.length)].map((e, i) => <div key={i + 1}>

                <Form.Group controlId="name">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" name="name" value={values.children[i].name} onChange={(e) => {
                        values.children[i].name = e.target.value;
                        changeState(values.children[i].name);                          
                    }}></Form.Control>
                    <Form.Control.Feedback type="invalid">Please fill the required field.</Form.Control.Feedback>
                </Form.Group>


                <Button className="mr-3" color="primary" variant="contained" disabled={values.children.length === 1} onClick={(e) => {
                    var temp = [...values.children];                    
                    var foo = -1;
                    for(var j = 0; j < values.children.length; j++) {
                        if(i+1 === values.children[j].index) {
                            foo = i;
                            break;
                        }
                    }
                    temp.splice(foo, 1)                
                    changeState("children", temp);
                }}>Delete<RemoveIcon /></Button>

                <Button variant="contained" color="primary" onClick={(e) => {
                    e.preventDefault();
                    var temp = [...values.children];
                    temp.push({
                        index: values.children.length + 1,
                        name: "",
                    });
                    changeState("children", temp);
                }}>Add More<AddIcon /></Button>

                </div>)}

                <Button className="mt-5 mb-5 mr-5" variant="contained" color="primary" onClick={Previous}>Back</Button>
                <Button className="mt-5 mb-5" variant="contained" color="primary" type="submit">Continue</Button>

            </Form>

        </FormContainer>
    );

}

export default Step4Muslim