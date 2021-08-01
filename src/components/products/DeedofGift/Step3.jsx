import React from 'react'
import { Form } from 'react-bootstrap';

const Step3 = ({ nextStep, prevStep, handleChange, values }) => {

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
            <h1>Step 3</h1>

            <Form>

                {/* Type of Donee */}
                <Form.Group>
                    <Form.Label>Type of Donee</Form.Label>
                    <select className="form-control" value={values.typeOfDonee} onChange={(e) => {handleChange("typeOfDonee", e)}} >
                        <option value="Individual">Individual</option>
                        <option value="Company">Company</option>
                    </select>
                </Form.Group>


                {/* If Individual is Selected */}
                {values.typeOfDonee === "Individual" &&
                <div>
                    {/* Full Name of Donee */}
                    <Form.Group>
                        <Form.Label>Full Name of Donee</Form.Label>
                        <Form.Control value={values.doneeFullName} type="text" onChange={(e) => {handleChange("doneeFullName", e)}}></Form.Control>
                    </Form.Group>                

                    {/* Address of Donee */}
                    <Form.Group>
                        <Form.Label>Address of Donee</Form.Label>
                        <Form.Control value={values.doneeAddress} type="text" onChange={(e) => {handleChange("doneeAddress", e)}}></Form.Control>
                    </Form.Group>   

                    {/* Relationship */}
                    <Form.Group>
                        <Form.Label>Relationship between Donor and Donee</Form.Label>
                        <Form.Control value={values.relationshipDonorDonee} type="text" onChange={(e) => {handleChange("relationshipDonorDonee", e)}}></Form.Control>
                    </Form.Group>                                
                </div>                
                }

                {/* If Company is Selected */}
                {values.typeOfDonee === "Company" &&
                <div>
                    {/* Full Name of Company */}
                    <Form.Group>
                        <Form.Label>Full Name of Company</Form.Label>
                        <Form.Control value={values.doneeFullName} type="text" onChange={(e) => {handleChange("doneeFullName", e)}}></Form.Control>
                    </Form.Group>                

                    {/* Address of Company */}
                    <Form.Group>
                        <Form.Label>Address of Company</Form.Label>
                        <Form.Control value={values.doneeAddress} type="text" onChange={(e) => {handleChange("doneeAddress", e)}}></Form.Control>
                    </Form.Group>  
                    
                    {/* Is Donee a Minor */}
                    <Form.Group>
                        <Form.Label>Is Donee a Minor</Form.Label>
                        <select value={values.isDoneeMinor} onChange={(e) => {handleChange("isDoneeMinor", e)}}>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </Form.Group>       

                    {values.isDoneeMinor === "Yes" &&
                    <div>
                        {/* Full Name of Guardian */}
                        <Form.Group>
                            <Form.Label>Full Name of Guardian</Form.Label>
                            <Form.Control value={values.doneeGuardianName} type="text" onChange={(e) => {handleChange("doneeGuardianName", e)}}></Form.Control>
                        </Form.Group>           

                        {/* Address of Guardian */}
                        <Form.Group>
                            <Form.Label>Address of Guardian</Form.Label>
                            <Form.Control value={values.doneeGuardianAddress} type="text" onChange={(e) => {handleChange("doneeGuardianAddress", e)}}></Form.Control>
                        </Form.Group>
                    </div>
                    }             
                </div>                
                }

            </Form>

            <button className="btn btn-primary" onClick={Previous} >Prev</button>
            <button className="btn btn-primary ml-4" onClick={Continue}>Next</button>
        </div>
    )
}

export default Step3
