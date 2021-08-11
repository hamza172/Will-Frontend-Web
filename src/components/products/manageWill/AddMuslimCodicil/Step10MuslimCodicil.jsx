import React, { useState } from 'react';
import FormContainer from '../../willcreation/FormContainer';
import { Form } from 'react-bootstrap';

import Button from "@material-ui/core/Button";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

const Step10MuslimCodicil = ({updateAndClose, nextStep, prevStep, handleChange, changeState, values}) => {

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

    return (
        <FormContainer>

            <h3>Step 10: Allocation of Estate (In order of Priority)</h3>

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

                <Form.Label as="legend" className="text-center mt-5 mb-5" style={{ backgroundColor: "beige" }}>Please select of priority of this Will Allocation Group. The priority is defaulted as below but can be changed to suit your order of priority</Form.Label>

                {[...Array(values.priorityArray.length)].map((e, i) => 

                    <div key={i + 1} style={{display: "flex"}}>

                        <p>{i+1}. {values.priorityArray[i].text}</p>
                        
                        <Button
                        disabled={i === 0}
                        onClick={(e) => {
                            e.preventDefault();
                            var temp = [...values.priorityArray];
                            var foo = -1;
                            for(var j = 0; j < values.priorityArray.length; j++) {
                                if(i+1 === values.priorityArray[j].index) {
                                    foo = i;
                                    break;
                                }
                            }
                            [temp[foo], temp[foo - 1]] = [temp[foo - 1], temp[foo]];
                            changeState("priorityArray", temp);
                        }}><ArrowUpwardIcon /></Button>

                        <Button
                        disabled={i === values.priorityArray.length - 1}
                        onClick={(e) => {
                            e.preventDefault();
                            var temp = [...values.priorityArray];
                            var foo = -1;
                            for(var j = 0; j < values.priorityArray.length; j++) {
                                if(i+1 === values.priorityArray[j].index) {
                                    foo = i;
                                    break;
                                }
                            }
                            [temp[foo], temp[foo + 1]] = [temp[foo + 1], temp[foo]];
                            changeState("priorityArray", temp);
                        }}><ArrowDownwardIcon /></Button>
                    </div>)
                }

                <Button className="mt-5 mb-5 mr-5" variant="contained" color="primary" onClick={Previous}>Back</Button>
                <Button name="Continue" value="Continue" className="mt-5 mb-5" variant="contained" color="primary" type="submit">Next</Button>
                <Button name="Update-Close" value="Update-Close" className="mt-5 mb-5 ml-5" variant="contained" color="primary" type="submit">Update & Close</Button>
            </Form>

        </FormContainer>
    )

}

export default Step10MuslimCodicil