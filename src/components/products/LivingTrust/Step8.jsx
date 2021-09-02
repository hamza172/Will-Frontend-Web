import React from 'react';
import { Form } from 'react-bootstrap';

const Step8 = ({ nextStep, prevStep, handleChange, values }) => {

    const Continue = e => {
        e.preventDefault();
        nextStep();
    }

    const Previous = e => {
        e.preventDefault();
        prevStep();
    }

    return (
        <div style={{padding: 30}}>
            <h1>Step 8</h1>
            <h1>Subtrust</h1>

            <Form>

                {/* Do you want to create Subtrust for Beneficiaries that are young or cannot handle the gift  */}
                <Form.Group>
                    <Form.Label>Do you want to create Subtrust for Beneficiaries that are young or cannot handle the gift ?</Form.Label>
                    <select className="form-control" value={values.subtrustQuestion} onChange={(e) => {handleChange("subtrustQuestion", e)}}>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </Form.Group>

                {values.subtrustQuestion === "Yes" &&
                <div>
                    {/* Name */}
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control value={values.subtrustName} type="text" onChange={(e) => {handleChange("subtrustName", e)}}></Form.Control>
                    </Form.Group>
                    {/* Age */}
                    <Form.Group>
                        <Form.Label>Hold Till Age Limit</Form.Label>
                        <Form.Control value={values.subtrustAge} type="number" onChange={(e) => {handleChange("subtrustAge", e)}}></Form.Control>
                    </Form.Group>                                    
                </div>
                }

            </Form>

            <button className="btn btn-primary" onClick={Previous} >Prev</button>
            <button className="btn btn-primary ml-4" onClick={Continue}>Next</button>
        </div>
    )
}

export default Step8
