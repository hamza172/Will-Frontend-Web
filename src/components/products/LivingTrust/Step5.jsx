import React from 'react';
import { Form } from 'react-bootstrap';

const Step5 = ({ nextStep, prevStep, handleChange, changeState, values }) => {

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
            <h1>Step 5</h1>
            <h1>Beneficiary Names</h1>

            <Form>

                <p>
                    Name of Beneficiaries (Family, Friends, Charity) who will receive the trust property you pass away. Gift can be (1) General -This are percentage of gift 
                    left to beneficiaries after any specific and charitable gifts are given) (2) Specific – gifts assigned to a specific or friend) (3) Charitable – Cash gifts 
                    or other items given to charities you would like to make.
                </p>

                {[...Array(values.beneficiariesCount)].map((e, i) => <div>
                    <Form.Group key={i}>
                        <Form.Label>Beneficiarie Name</Form.Label>
                        <Form.Control value={values.beneficiariesNames[i]} type="text" onChange={(e) => {
                            values.beneficiariesNames[i] = e.target.value;
                            changeState(values.beneficiariesNames[i]);
                        }}></Form.Control>
                    </Form.Group>
                </div>)}                

                <button className="btn btn-primary" onClick={(e) => {
                    e.preventDefault();
                    changeState("beneficiariesCount", values.beneficiariesCount + 1);
                    values.beneficiariesNames.push("");
                    changeState("beneficiariesNames", values.beneficiariesNames);
                }}>Add Another</button>

                <button className="btn btn-primary ml-4" onClick={(e) => {
                    e.preventDefault();
                    changeState("beneficiariesCount", values.beneficiariesCount - 1);
                    values.beneficiariesNames.splice(-1,1);
                    changeState("beneficiariesNames", values.beneficiariesNames);
                }}>Delete</button>

                <hr></hr>

                <p>Name Specific Gift you will like to make from the trust.</p>
                {/* Give the following Items */}
                <Form.Group>
                    <Form.Label>Give the following Items</Form.Label>
                    <Form.Control value={values.giveTheFollowingItems} type="text" onChange={(e) => {handleChange("giveTheFollowingItems", e)}}></Form.Control>
                </Form.Group>
                {/* To */}
                <Form.Group>
                    <Form.Label>To</Form.Label>
                    <Form.Control value={values.to} type="text" onChange={(e) => {handleChange("to", e)}}></Form.Control>
                </Form.Group>
                {/* Alternate Recipient */}
                <Form.Group>
                    <Form.Label>Alternate Recipient</Form.Label>
                    <Form.Control value={values.alternateRecipient} type="text" onChange={(e) => {handleChange("alternateRecipient", e)}}></Form.Control>
                </Form.Group>                                                

            </Form>

            <button className="btn btn-primary mt-4" onClick={Previous} >Prev</button>
            <button className="btn btn-primary ml-4 mt-4" onClick={Continue}>Next</button>
        </div>
    )
}

export default Step5
