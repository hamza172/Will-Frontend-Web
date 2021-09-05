import React, { useEffect } from 'react'
import { Form } from 'react-bootstrap';
import { v4 as uuidv4 } from "uuid";

const Step6 = ({ nextStep, prevStep, handleChange, changeState, values }) => {

    const Continue = e => {
        e.preventDefault();
        nextStep();
    }

    const Previous = e => {
        e.preventDefault();
        prevStep();
    }

    useEffect(() => {
        // let ben = values.beneficiariesNames;
        // let assets = values.step4Gifts;
        // let foo = []
        // changeState()
    }, [])

    return (
        <div style={{padding: 30}}>
            <h1>Step 6</h1>

            {[...Array(values.step6FormsCount)].map((e, i) => 
                <>
                    {[...Array(values.step6State[i].beneficieries.length)].map((e, j) => 
                        <Form.Group>
                            <Form.Label>Select Beneficiary</Form.Label>
                            <select className="form-control" value={values.step6State[i].beneficieries[j]} onChange={(e) => {                        
                                values.step6State[i].beneficieries[j] = e.target.value;
                                changeState("step6State", [...values.step6State]);
                            }}>
                                {[...Array(values.beneficiariesCount)].map((e, i) => 
                                    <option>{values.beneficiariesNames[i].name}</option>
                                )}           
                            </select>            
                        </Form.Group>    
                    )}           
        
                    <button className="btn btn-primary" onClick={(e) => {
                        e.preventDefault();
                        let allBens = values.beneficiariesNames;
                        values.step6State[i].beneficieries.push(allBens[0]);
                        changeState("step6State", [...values.step6State]);
                    }}>Add Another</button>

                    <button className="btn btn-primary ml-4" onClick={(e) => {
                        e.preventDefault();
                        values.step6State[i].beneficieries.pop();
                        changeState("step6State", [...values.step6State]);
                    }}>Delete</button>

                    <br></br>
                    {[...Array(values.step6State[i].assets.length)].map((e, j) => 
                        <Form.Group>
                            <Form.Label>Select Asset</Form.Label>
                            <select className="form-control" value={values.step6State[i].assets[j]} onChange={(e) => {
                                values.step6State[i].assets[j] = e.target.value;
                                changeState("step6State", [...values.step6State]);
                            }}>
                            {[...Array(values.step4GiftsCount)].map((e, i) => 
                                <option>{values.step4Gifts[i].assetType}</option>
                            )}           
                        </select>            
                        </Form.Group>    
                    )}                

                    <button className="mt-4 btn btn-primary" onClick={(e) => {
                        e.preventDefault();
                        let allAssets = values.step4Gifts;
                        values.step6State[i].assets.push(allAssets[0]);
                        changeState("step6State", [...values.step6State]);
                    }}>Add Another</button>

                    <button className="mt-4 btn btn-primary ml-4" onClick={(e) => {
                        e.preventDefault();
                        values.step6State[i].assets.pop();
                        changeState("step6State", [...values.step6State]);
                    }}>Delete</button>
                </>
            )}     

            <br></br>

            <button className="btn btn-danger mt-4" onClick={(e) => {
                e.preventDefault();
                values.step6State.push({
                    beneficieries: [],
                    assets: [],
                });
                changeState("step6State", values.step6State)
            }}>Add Another</button>
            

            <br></br>
            <button className="btn btn-primary mt-4" onClick={Previous}>Prev</button>
            <button className="btn btn-primary ml-4 mt-4" onClick={Continue}>Next</button>
        </div>
    )
}

export default Step6
