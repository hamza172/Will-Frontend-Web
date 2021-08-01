import React from 'react';
import { Form } from 'react-bootstrap';

const Step9 = ({ nextStep, prevStep, handleChange, values }) => {

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

            <h1>Step 9</h1>            
            <h1>Additional Instruction</h1>

            <Form>

                {/* Any additional instruction 1 */}
                <Form.Group>
                    <Form.Label>Any additional instruction for the Trust that you will like to be add for the time you are alive.</Form.Label>
                    <Form.Control value={values.additionalInstructionOne} as="textarea" rows={3} onChange={(e) => {handleChange("additionalInstructionOne", e)}} />
                </Form.Group>

                {/* Any additional instruction 2 */}
                <Form.Group>
                    <Form.Label>Any additional instruction for the Trust that you will like to add following you demise or the time you are incapacitated</Form.Label>
                    <Form.Control value={values.additionalInstructionTwo} as="textarea" rows={3} onChange={(e) => {handleChange("additionalInstructionTwo", e)}} />
                </Form.Group>

            </Form>

            <button className="btn btn-primary" onClick={Previous} >Prev</button>
            <button className="btn btn-primary ml-4" onClick={Continue}>Next</button>            
            
        </div>
    )
}

export default Step9
