import React, { useState } from 'react';
import FormContainer from '../FormContainer';
import { Form } from 'react-bootstrap';

import Button from "@material-ui/core/Button";
import axios from 'axios';

const Step16Muslim = ({nextStep, prevStep, handleChange, changeState, onFileChange, values}) => {

    const Continue = (e) => {        
        e.preventDefault();

        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.stopPropagation();
        }
        else {
            var formData = new FormData();

            // step 1
            formData.append("prefix", values.prefix);
            formData.append("firstName", values.firstName);
            formData.append("middleName", values.middleName);
            formData.append("lastName", values.lastName);
            formData.append("suffix", values.suffix);
            formData.append("gender", values.gender);
            formData.append("address", values.address);
            formData.append("town", values.town);
            formData.append("country", values.country);
            formData.append("county", values.county);
            formData.append("phoneNumber", values.phoneNumber);
            formData.append("email", values.email);
            formData.append("maritalStatus", values.maritalStatus);

            // step 2
            formData.append("wivesDetails", JSON.stringify(values.wivesDetails));
            
            // step 4
            formData.append("children", JSON.stringify(values.children));

            // step 5
            formData.append("otherFamilyMembers", JSON.stringify(values.otherFamilyMembers));

            // step 6
            formData.append("guardianDetails", JSON.stringify(values.guardianDetails));

            // step 7
            formData.append("executorDetails", JSON.stringify(values.executorDetails));
            formData.append("step7Question", values.step7Question);
            formData.append("addAltExec", values.addAltExec);
            formData.append("isRenumerated", values.isRenumerated);
            formData.append("execRenumeration", values.execRenumeration); 

            // step 8
            formData.append("beneficiaryAssets", JSON.stringify(values.beneficiaryAssets));
            formData.append("beneficiary", values.beneficiary);
            formData.append("beneficiaryName", values.beneficiaryName);
            formData.append("beneficiaryAddress", values.beneficiaryAddress);
            formData.append("beneficiaryEmail", values.beneficiaryEmail);
            formData.append("beneficiaryPhone", values.beneficiaryPhone);
            formData.append("selectedChild", values.selectedChild);
            formData.append("selectedWife", values.selectedWife);

            // step 10
            formData.append("priorityArray", JSON.stringify(values.priorityArray));

            // step 11
            formData.append("otherTransferBeneficiary", values.otherTransferBeneficiary);
            formData.append("otherGiftMadeTo", values.otherGiftMadeTo);
            formData.append("otherName", values.otherName);
            formData.append("otherRelationship", values.otherRelationship);
            formData.append("otherAddress", values.otherAddress);
            formData.append("otherContest", values.otherContest);
            formData.append("otherTrusteeName", values.otherTrusteeName);
            formData.append("otherTrusteeAdd", values.otherTrusteeAdd);
            
            // step 12
            formData.append("giftToPet", values.giftToPet);
            formData.append("petName", values.petName);
            formData.append("petDescription", values.petDescription);
            formData.append("petAmount", values.petAmount);
            formData.append("petCaretaker", values.petCaretaker);
            formData.append("petCareTakerName", values.petCareTakerName);
            formData.append("petAddress", values.petAddress);                        

            // step 13
            formData.append("burialDescription", values.burialDescription);   

            // step 14
            formData.append("additionalInstructions", JSON.stringify(values.additionalInstructions));
            formData.append("isLiterate", values.isLiterate);   
            formData.append("additionalName", values.additionalName);   
            formData.append("additionalAddress", values.additionalAddress);   
            
            // step 15
            formData.append("signingDetails", JSON.stringify(values.signingDetails));
            
            // step 16
            formData.append("selfie1", values.selfie1);   
            formData.append("selfie2", values.selfie2);
            formData.append("selfie2", values.selfie3); 
            
            formData.append("userID", localStorage.getItem("id")); 

            axios.post(process.env.REACT_APP_API_URL + "/willcreation/createwill/muslim", formData)
            .then((response) => {
                console.log("Form Submitted")
                console.log(response);
                window.location.href = "/success"
            })
            .catch((err) => {
                console.log(err);
            })            
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

            <h3>Validation</h3>

            <Form noValidate validated={validated} onSubmit={Continue}>

                <Form.Group controlId="file1">
                    <Form.Label>Selfie of the person that prepared </Form.Label>
                    <Form.Control type="file" onChange={(e) => {onFileChange("selfie1", e)}}></Form.Control>
                </Form.Group>

                <Form.Group controlId="file2">
                    <Form.Label>Selfie of the person that read </Form.Label>
                    <Form.Control type="file" onChange={(e) => {onFileChange("selfie2", e)}}></Form.Control>
                    <Form.Control.Feedback type="invalid">Please fill the required field.</Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="file3">
                    <Form.Label>Selfie of Testator</Form.Label>
                    <Form.Control type="file" onChange={(e) => {onFileChange("selfie3", e)}}></Form.Control>
                    <Form.Control.Feedback type="invalid">Please fill the required field.</Form.Control.Feedback>
                </Form.Group>

                <Button className="mt-5 mb-5 mr-5" variant="contained" color="primary" onClick={Previous}>Back</Button>
                <Button className="mt-5 mb-5" variant="contained" color="primary" type="submit">Submit Form</Button>

            </Form>

        </FormContainer>
    )

}

export default Step16Muslim