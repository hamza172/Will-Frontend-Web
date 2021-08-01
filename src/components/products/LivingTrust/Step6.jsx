import React from 'react';
import { Form } from 'react-bootstrap';

const Step6 = ({ nextStep, prevStep, handleChange, values }) => {

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

            <h1>Step 6</h1>
            <h1>Charity</h1>

            <Form>
                {/* Name of Charity */}
                <Form.Group>
                    <Form.Label>Name of Charity</Form.Label>
                    <Form.Control value={values.nameOfCharity} type="text" onChange={(e) => {handleChange("nameOfCharity", e)}}></Form.Control>
                </Form.Group>
                {/* Gift */}
                <Form.Group>
                    <Form.Label>Gift</Form.Label>
                    <Form.Control value={values.gift} type="text" onChange={(e) => {handleChange("gift", e)}}></Form.Control>
                </Form.Group>                            
            </Form>

            <button className="btn btn-primary" onClick={Previous} >Prev</button>
            <button className="btn btn-primary ml-4" onClick={Continue}>Next</button>
        </div>
    )
}

export default Step6
