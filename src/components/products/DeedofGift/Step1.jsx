import { process } from 'joi-browser';
import React, {useEffect} from 'react'
import { Form } from 'react-bootstrap';
import "./../../../App.css";

const Step1 = ({ nextStep, prevStep, handleChange, values }) => {

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
            <h1>Step 1</h1>
            
            <Form>

                {/* Country */}
                <Form.Group>
                    <Form.Label>Country of Gift</Form.Label>
                    <Form.Control value={values.countryOfGift} type="text" onChange={(e) => {handleChange("countryOfGift", e)}}></Form.Control>
                </Form.Group>

                {/* State */}
                <Form.Group>
                    <Form.Label>State of Gift</Form.Label>
                    <Form.Control value={values.stateOfGift} type="text" onChange={(e) => {handleChange("stateOfGift", e)}}></Form.Control>
                </Form.Group>

                {/* Do you want to be able to revoke this gift */}
                <Form.Group>
                    <Form.Label>Do you want to be able to revoke this Gift ?</Form.Label>
                    <select className="form-control" value={values.revokeThisGift} onChange={(e) => {handleChange("revokeThisGift", e)}}>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </Form.Group>

                {/* Date */}
                <Form.Group>
                    <Form.Label>Date of Transfer</Form.Label>
                    <Form.Control value={values.dateOfTransfer} type="text" onChange={(e) => {handleChange("dateOfTransfer", e)}}></Form.Control>
                </Form.Group>

            </Form>

            <button className="btn btn-primary" onClick={Continue}>Next</button>
        </div>
    )
}

export default Step1
