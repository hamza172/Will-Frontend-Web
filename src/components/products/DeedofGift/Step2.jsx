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
        <div  style={{padding: 30}}>
            <h1>Step 2</h1>
            
            <Form>

                {/* Type of Donor */}
                <Form.Group>
                    <Form.Label>Type of Donor</Form.Label>
                    <select className="form-control" value={values.typeOfDonor} onChange={(e) => {handleChange("typeOfDonor", e)}} >
                        <option value="Individual">Individual</option>
                        <option value="Company">Company</option>
                    </select>
                </Form.Group>

                {/* If Individual is Selected */}
                {values.typeOfDonor === "Individual" &&
                <div>
                    {/* Full Name of Donor */}
                    <Form.Group>
                        <Form.Label>Full Name of Donor</Form.Label>
                        <Form.Control value={values.donorFullName} type="text" onChange={(e) => {handleChange("donorFullName", e)}}></Form.Control>
                    </Form.Group>                

                    {/* Address of Donor */}
                    <Form.Group>
                        <Form.Label>Address of Donor</Form.Label>
                        <Form.Control value={values.donorAddress} type="text" onChange={(e) => {handleChange("donorAddress", e)}}></Form.Control>
                    </Form.Group>                                
                </div>                
                }

                {/* If Company is Selected */}
                {values.typeOfDonor === "Company" &&
                <div>
                    {/* Full Name of Company */}
                    <Form.Group>
                        <Form.Label>Full Name of Company</Form.Label>
                        <Form.Control value={values.donorFullName} type="text" onChange={(e) => {handleChange("donorFullName", e)}}></Form.Control>
                    </Form.Group>                

                    {/* Address of Company */}
                    <Form.Group>
                        <Form.Label>Address of Company</Form.Label>
                        <Form.Control value={values.donorAddress} type="text" onChange={(e) => {handleChange("donorAddress", e)}}></Form.Control>
                    </Form.Group>                                
                </div>                
                }


            </Form>

            <button className="btn btn-primary" onClick={Previous} >Prev</button>
            <button className="btn btn-primary ml-4" onClick={Continue}>Next</button>
            
        </div>
    )
}

export default Step2
