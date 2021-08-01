import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

const Step5 = ({ nextStep, prevStep, handleChange, changeState, values }) => {

    const Continue = e => {
        e.preventDefault();
        nextStep();
    }

    const Previous = e => {
        e.preventDefault();
        prevStep();
    }

    return (
        <div  style={{padding: 30}}>
            <h1>Step 5</h1>

            <Form>

                {[...Array(values.clausesCount)].map((e, i) => <div>
                    <Form.Group key={i}>
                        <Form.Label>Additional Clause</Form.Label>
                        <Form.Control value={values.additionalClauses[i]} as="textarea" rows={3} onChange={(e) => {
                            values.additionalClauses[i] = e.target.value;
                            changeState(values.additionalClauses[i]);
                        }}></Form.Control>
                    </Form.Group>
                </div>)}

                <button className="btn btn-primary" onClick={(e) => {
                    e.preventDefault();
                    changeState("clausesCount", values.clausesCount + 1);
                    values.additionalClauses.push("");
                    changeState("additionalClauses", values.additionalClauses);
                }}>Add Another</button>

                <button className="btn btn-primary ml-4" onClick={(e) => {
                    e.preventDefault();
                    changeState("clausesCount", values.clausesCount - 1);
                    values.additionalClauses.splice(-1,1);
                    changeState("additionalClauses", values.additionalClauses);
                }}>Delete</button>

            </Form>

            <button className="btn btn-primary mt-4" onClick={Previous} >Prev</button>
            <button className="btn btn-primary ml-4 mt-4" onClick={Continue}>Next</button>            
        </div>
    )
}

export default Step5
