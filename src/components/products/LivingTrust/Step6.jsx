import React from 'react';
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
            <h1>Charity</h1>

            <Form>
                {[...Array(values.step5CharityCount)].map((e, i) => <div>
                    <Form.Group>
                        <Form.Label>Name of Charity</Form.Label>
                        <Form.Control value={values.step5Charities[i].nameOfCharity} type="text" onChange={(e) => {
                            values.step5Charities[i].nameOfCharity = e.target.value;
                            changeState(values.step5Charities[i].nameOfCharity);
                        }}></Form.Control>                        
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Gift</Form.Label>
                        <Form.Control value={values.step5Charities[i].gift} type="text" onChange={(e) => {
                            values.step5Charities[i].gift = e.target.value;
                            changeState(values.step5Charities[i].gift);
                        }}></Form.Control>
                    </Form.Group>
                </div>)}
                {/* Name of Charity */}
                {/* <Form.Group>
                    <Form.Label>Name of Charity</Form.Label>
                    <Form.Control value={values.nameOfCharity} type="text" onChange={(e) => {handleChange("nameOfCharity", e)}}></Form.Control>
                </Form.Group> */}
                {/* Gift */}
                {/* <Form.Group>
                    <Form.Label>Gift</Form.Label>
                    <Form.Control value={values.gift} type="text" onChange={(e) => {handleChange("gift", e)}}></Form.Control>
                </Form.Group>                             */}
            </Form>
            
            <button className="btn btn-primary" onClick={(e) => {
                    e.preventDefault();
                    changeState("step5CharityCount", values.step5CharityCount + 1);
                    values.step5Charities.push({
                        nameOfCharity: "",
                        gift: "",
                    });
                    changeState("step5Charities", values.step5Charities);
                }}>Add Another</button>

                <button className="btn btn-primary ml-4" onClick={(e) => {
                    e.preventDefault();
                    changeState("step5CharityCount", values.step5CharityCount - 1);
                    values.step5Charities.splice(-1,1);
                    changeState("step5Charities", values.step5Charities);
                }}>Delete</button>

                <br></br>
            <button className="btn btn-primary mt-4" onClick={Previous} >Prev</button>
            <button className="btn btn-primary ml-4 mt-4" onClick={Continue}>Next</button>
        </div>
    )
}

export default Step6
