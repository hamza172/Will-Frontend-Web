import React, { useState } from 'react';
import FormContainer from '../FormContainer';
import { Form } from 'react-bootstrap';

import Button from "@material-ui/core/Button";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

const Step11Muslim = ({nextStep, prevStep, handleChange, changeState, values}) => {

    const Continue = (e) => {        
        e.preventDefault();

        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.stopPropagation();
        }
        else {
            nextStep();
        }
        setValidated(true);        
    }

    const Previous = e => {
        e.preventDefault();
        prevStep();
    }

    const [validated, setValidated] = useState(false);

    return(
        <FormContainer>
            <h3>Step 11: Other Matters</h3>

            <Form noValidate validated={validated} onSubmit={Continue}>

                <Form.Group controlId="transferBeneficiary">
                    <Form.Label>Transfer if a Beneficiary does not survive after 60 days{" "}</Form.Label>
                    <Form.Control required as="select" value={values.otherTransferBeneficiary} onChange={(e) => {handleChange("otherTransferBeneficiary", e)}}>
                        <option disabled selected value="">[Please select one]</option>
                        <option value="To their children (if any)">To their children (if any)</option>
                        <option value="Added to estate">Added to estate</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="giftMadeTo">
                    <Form.Label>Gift made to Minor </Form.Label>
                    <Form.Control required as="select" value={values.otherGiftMadeTo} onChange={(e) => {handleChange("otherGiftMadeTo", e)}}>
                        <option disabled selected value="">[Please select one]</option>
                        <option value="Pass on to their parents until 18">Pass on to their parents until 18</option>
                        <option value="Name Trustee">Name Trustee</option>
                    </Form.Control>
                </Form.Group>

                {values.otherGiftMadeTo === "Name Trustee" &&
                    <div>
                        <Form.Group controlId="trusteeName">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control required type="text" placeholder="Enter Trustee Full Name" value={values.otherTrusteeName} onChange={(e) => {handleChange("otherTrusteeName", e)}}></Form.Control>
                            <Form.Control.Feedback type="invalid">Please fill the required field.</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="trusteeAdd">
                            <Form.Label>Trustee Address</Form.Label>
                            <Form.Control type="text" required placeholder="Enter Address" value={values.otherTrusteeAdd} onChange={(e) => {handleChange("otherTrusteeAdd", e)}}></Form.Control>
                            <Form.Control.Feedback type="invalid">Please fill the required field.</Form.Control.Feedback>
                        </Form.Group>
                    </div>
                }


                <Form.Label>Transfer if no beneificary or their children survives you{" "}</Form.Label>

                <Form.Group controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control required type="text" placeholder="Enter Name" value={values.otherName} onChange={(e) => {handleChange("otherName", e)}}></Form.Control>
                    <Form.Control.Feedback type="invalid">Please fill the required field.</Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="relationship">
                    <Form.Label>Relationship</Form.Label>
                    <Form.Control required type="text" placeholder="Enter Relationship" value={values.otherRelationship} onChange={(e) => {handleChange("otherRelationship", e)}}></Form.Control>
                    <Form.Control.Feedback type="invalid">Please fill the required field.</Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="address">
                    <Form.Label>Address</Form.Label>
                    <Form.Control required type="text" placeholder="Enter Address" value={values.otherAddress} onChange={(e) => {handleChange("otherAddress", e)}}></Form.Control>
                    <Form.Control.Feedback type="invalid">Please fill the required field.</Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="contest">
                    <Form.Label>Restriction to contest - If any one contest what is given in the court, they should loose the will</Form.Label>
                    <Form.Control required as="select" value={values.otherContest} onChange={(e) => {handleChange("otherContest", e)}}>
                        <option disabled selected value="">[Please select one]</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </Form.Control>
                </Form.Group>

                <Button className="mt-5 mb-5 mr-5" variant="contained" color="primary" onClick={Previous}>Back</Button>
                <Button className="mt-5 mb-5" variant="contained" color="primary" type="submit">Continue</Button>

            </Form>

        </FormContainer>
    )

}

export default Step11Muslim
