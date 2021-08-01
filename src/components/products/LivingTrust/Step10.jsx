import React from 'react';
import { Form } from 'react-bootstrap';

const Step10 = ({ nextStep, prevStep, handleChange, values }) => {

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

            <h1>Step 10</h1>
            <h1>Trustee Remuneration</h1>

            <Form>
                {/* Should the Trustee be renumirated for taking on the trust */}
                <Form.Group>
                    <Form.Label>Should the Trustee be renumirated for taking on the trust</Form.Label>
                    <select className="form-control" value={values.remunerationQuestion} onChange={(e) => {handleChange("remunerationQuestion", e)}}>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </Form.Group>      

                {values.remunerationQuestion === "Yes" &&
                <div>
                    {/* Instruction */}
                    <Form.Group>
                        <Form.Label>Remuneration Instructions</Form.Label>
                        <Form.Control value={values.remunerationInstruction} as="textarea" rows={3} onChange={(e) => {handleChange("remunerationInstruction", e)}} />
                    </Form.Group>

                    {/* Amount */}
                    <Form.Group>
                        <Form.Label>Amount</Form.Label>
                        <Form.Control value={values.remunerationAmount} type="number" onChange={(e) => {handleChange("remunerationAmount", e)}}></Form.Control>
                    </Form.Group>  

                    {/* Period */}
                    <Form.Group>
                        <Form.Label>Period</Form.Label>
                        <select className="form-control" value={values.remunerationPeriod} onChange={(e) => {handleChange("remunerationPeriod", e)}}>
                            <option value="Monthly">Monthly</option>
                            <option value="Yearly">Yearly</option>
                        </select>
                    </Form.Group>                                                          
                </div>
                }          
            </Form>

            <button className="btn btn-primary" onClick={Previous} >Prev</button>
            <button className="btn btn-primary ml-4" onClick={Continue}>Next</button>            
            
        </div>
    )
}

export default Step10
