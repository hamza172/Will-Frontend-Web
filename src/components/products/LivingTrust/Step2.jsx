import React from 'react';
import { Form } from 'react-bootstrap';

const Step2 = ({ nextStep, prevStep, handleChange, values }) => {

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
            <h1>Step 2</h1>
            <h1>Personal Details</h1>

            <Form>
                
                {/* Name */}
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control value={values.name} type="text" onChange={(e) => {handleChange("name", e)}}></Form.Control>
                </Form.Group>

                {/* Address */}
                <Form.Group>
                    <Form.Label>Address</Form.Label>
                    <Form.Control value={values.address} type="text" onChange={(e) => {handleChange("address", e)}}></Form.Control>
                </Form.Group>

                {/* Phone */}
                <Form.Group>
                    <Form.Label>Phone</Form.Label>
                    <Form.Control value={values.phone} type="text" onChange={(e) => {handleChange("phone", e)}}></Form.Control>
                </Form.Group>

                {/* Email */}
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control value={values.email} type="text" onChange={(e) => {handleChange("email", e)}}></Form.Control>
                </Form.Group>                                                

            </Form>

            <button className="btn btn-primary" onClick={Previous} >Prev</button>
            <button className="btn btn-primary ml-4" onClick={Continue}>Next</button>
        </div>
    )
}

export default Step2
