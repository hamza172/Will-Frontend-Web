import React, { useState } from 'react';
import FormContainer from '../FormContainer';
import { Form } from 'react-bootstrap';

import Button from "@material-ui/core/Button";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";

const Step8Muslim = ({nextStep, prevStep, handleChange, changeState, values}) => {

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

            <h3>Step 8: Charitable Giving and Distribution</h3>

            <Form noValidate validated={validated} onSubmit={Continue}>

                <Form.Group controlId="beneficiary">
                    <Form.Label>Beneficiary </Form.Label>
                    <Form.Control as="select" value={values.beneficiary} onChange={(e) => {handleChange("beneficiary", e)}}>
                        <option selected disabled value="">[Please select one]</option>
                        <option value="Wife">Wife</option>
                        <option value="Husband">Husband</option>
                        <option value="Child">Child</option>
                        <option value="Dad">Dad</option>
                        <option value="Mum">Mum</option>
                        <option value="Sister">Sister</option>
                        <option value="Brother">Brother</option>
                        <option value="Grandchild">Grandchild</option>
                        <option value="Friends">Friends</option>
                        <option value="Family">Family Member</option>
                        <option value="Others">Others</option>
                    </Form.Control>
                </Form.Group>

                {values.beneficiary === "Wife" && 
                    <div>                        
                        <Form.Group controlId="wife">
                            <Form.Label>Select Wife</Form.Label>
                            <Form.Control as="select" value={values.selectedWife} onChange={(e) => {handleChange("selectedWife", e)}}>
                                {values.wivesDetails.map((wife, index) => {
                                    return(
                                        <option>{wife.name}</option>
                                    );
                                })}    
                            </Form.Control>
                        </Form.Group>
                    </div>
                }

                {values.beneficiary === "Child" && 
                    <div>
                        <Form.Group controlId="wife">
                            <Form.Label>Select Child</Form.Label>
                            <Form.Control as="select" value={values.selectedChild} onChange={(e) => {handleChange("selectedChild", e)}}>
                                {values.children.map((child, index) => {
                                    return(
                                        <option>{child.name}</option>
                                    );
                                })}    
                            </Form.Control>
                        </Form.Group>
                    </div>
                } 


                <Form.Group controlId="name">
                    <Form.Label>Full Name of Beneficiary</Form.Label>
                    <Form.Control type="text" required value={values.beneficiaryName} onChange={(e) => {handleChange("beneficiaryName", e)}}></Form.Control>
                    <Form.Control.Feedback type="invalid">Please fill the required field.</Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="address">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" required value={values.beneficiaryAddress} onChange={(e) => {handleChange("beneficiaryAddress", e)}}></Form.Control>
                    <Form.Control.Feedback type="invalid">Please fill the required field.</Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" required value={values.beneficiaryEmail} onChange={(e) => {handleChange("beneficiaryEmail", e)}}></Form.Control>
                    <Form.Control.Feedback type="invalid">Please fill the required field.</Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="ph">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="number" name="ph" required value={values.beneficiaryPhone} onChange={(e) => {handleChange("beneficiaryPhone", e)}}></Form.Control>
                    <Form.Control.Feedback type="invalid">Please fill the required field.</Form.Control.Feedback>
                </Form.Group>

                {[...Array(values.beneficiaryAssets.length)].map((e, i) => 
                    <div key={i + 1}>

                        <Form.Group controlId="type">
                            <Form.Label>Asset Type</Form.Label>
                            <Form.Control as="select" name="type" required value={values.beneficiaryAssets[i].assetType} onChange={(e) => {
                                values.beneficiaryAssets[i].assetType = e.target.value;
                                changeState(values.beneficiaryAssets[i].assetType); 
                            }}>
                                <option selected disabled value="">[Please select one]</option>
                                <option value="Real estate">Real estate</option>
                                <option value="Cash">Cash</option>
                                <option value="Investment">Investment</option>
                                <option value="Personal Possession">Personal Possession</option>
                                <option value="Debt">Debt</option>
                                <option value="Insurance Policies">Insurance Policies</option>
                                <option value="Pension">Pension</option>
                                <option value="Life Tenant of a property">Life Tenant of a property</option>
                            </Form.Control>
                        </Form.Group>

                        {values.beneficiaryAssets[i].assetType === "Life Tenant of a property" && 
                            <Form.Group controlId="tenant">
                                <Form.Label>
                                    Who is the property due to after the death of life tenant?
                                </Form.Label>
                                <Form.Control required name="tenant" type="text" value={values.beneficiaryAssets[i].tenant} onChange={(e) => {
                                values.beneficiaryAssets[i].tenant = e.target.value;
                                changeState(values.beneficiaryAssets[i].tenant); 
                            }}></Form.Control>
                                <Form.Control.Feedback type="invalid">Please fill the required field.</Form.Control.Feedback>
                            </Form.Group>
                        }

                        <Form.Group controlId="description">
                            <Form.Label>Description</Form.Label>
                            <Form.Control required as="textarea" name="description" rows={10} value={values.beneficiaryAssets[i].desc} onChange={(e) => {
                                values.beneficiaryAssets[i].desc = e.target.value;
                                changeState(values.beneficiaryAssets[i].desc); 
                            }}></Form.Control>
                            <Form.Control.Feedback type="invalid">Please fill the required field.</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="amount">
                            <Form.Label>Value / Amount</Form.Label>
                            <Form.Control required name="amount" type="number" value={values.beneficiaryAssets[i].value} onChange={(e) => {
                                values.beneficiaryAssets[i].value = e.target.value;
                                changeState(values.beneficiaryAssets[i].value); 
                            }}></Form.Control>
                            <Form.Control.Feedback type="invalid">Please fill the required field.</Form.Control.Feedback>
                        </Form.Group>  

                        <Button className="mr-3" color="primary" variant="contained" disabled={values.beneficiaryAssets.length === 1} onClick={(e) => {
                            var temp = [...values.beneficiaryAssets];                    
                            var foo = -1;
                            for(var j = 0; j < values.beneficiaryAssets.length; j++) {
                                if(i+1 === values.beneficiaryAssets[j].index) {
                                    foo = i;
                                    break;
                                }
                            }
                            temp.splice(foo, 1)                
                            changeState("beneficiaryAssets", temp);
                        }}>Delete<RemoveIcon /></Button>

                        <Button disabled={values.beneficiaryAssets.length === 4} variant="contained" color="primary" onClick={(e) => {
                            console.log(values.beneficiaryAssets);
                            e.preventDefault();
                            var temp = [...values.beneficiaryAssets];
                            temp.push({
                                index: values.beneficiaryAssets.length + 1,
                                assetType: "",
                                desc: "",
                                value: "",
                                tenant: "",
                            });
                            changeState("beneficiaryAssets", temp);
                        }}>Add More<AddIcon /></Button>                          

                    </div>)
                }

                <Button className="mt-5 mb-5 mr-5" variant="contained" color="primary" onClick={Previous}>Back</Button>
                <Button className="mt-5 mb-5" variant="contained" color="primary" type="submit">Continue</Button>

            </Form>
        </FormContainer>
    );
}

export default Step8Muslim