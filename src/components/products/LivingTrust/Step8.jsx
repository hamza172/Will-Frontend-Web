import React from 'react';
import { Form } from 'react-bootstrap';

const Step8 = ({ nextStep, prevStep, handleChange, onFileChange, values }) => {

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
            <h1>Pour Over Will</h1>

            <Form>
                {/* Do you want to include Pour-Over Will */}
                <Form.Group>
                    <Form.Label>Do you want to include Pour-Over Will</Form.Label>
                    <select className="form-control" value={values.pourOverWillQuestion} onChange={(e) => {handleChange("pourOverWillQuestion", e)}}>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </Form.Group>  

                {values.pourOverWillQuestion === "Yes" &&
                <div>
                    <input type="file" onChange={(e) => {onFileChange("pourOverWillFile", e)}}></input>
                </div>
                }              
            </Form>

            <button className="btn btn-primary" onClick={Previous} >Prev</button>
            <button className="btn btn-primary ml-4" onClick={Continue}>Next</button>
            
        </div>
    )
}

export default Step8
