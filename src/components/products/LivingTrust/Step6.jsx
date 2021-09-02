import React from 'react'
import { Form } from 'react-bootstrap';

const Step6 = ({ nextStep, prevStep, handleChange, changeState, values }) => {

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

            <Form.Group>
                <Form.Label>Select Beneficiary</Form.Label>
                <select className="form-control" onChange={(e) => {
                    values.step6Mapper[0].personID = e.target.value;
                    changeState(values.step6Mapper[0].personID);
                }}>
                    {[...Array(values.beneficiariesCount)].map((e, i) => 
                        <option value={values.beneficiariesNames[i].personID}>{values.beneficiariesNames[i].name}</option>
                    )}           
                </select>            
            </Form.Group>

            <Form.Group>
                <Form.Label>Select Asset</Form.Label>
                <select className="form-control" onChange={(e) => {
                    values.step6Mapper[0].giftID = e.target.value;
                    changeState(values.step6Mapper[0].giftID);   
                }}>
                    {[...Array(values.step4GiftsCount)].map((e, i) => 
                        <option value={values.step4Gifts[i].giftID}>{values.step4Gifts[i].assetType}</option>
                    )}           
                </select>            
            </Form.Group>

            <button onClick={(e) => {
                console.log(values.step6Mapper)
            }}>Test</button>
            <button className="btn btn-primary mt-4" onClick={Previous}>Prev</button>
            <button className="btn btn-primary ml-4 mt-4" onClick={Continue}>Next</button>
        </div>
    )
}

export default Step6
