import React from 'react';
import { Form } from 'react-bootstrap';

const Step4 = ({ nextStep, prevStep, handleChange, values }) => {

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
            <h1>Step 4</h1>
            <h1>Gift and Asset</h1>

            <Form>

                {/* What Type of Asset */}
                <Form.Group>
                    <Form.Label>What Type of Asset</Form.Label>
                    <select className="form-control" value={values.assetType} onChange={(e) => {handleChange("assetType", e)}}>
                        <option value="Real Estate">Real Estate</option>
                        <option value="Financial Account">Financial Account</option>
                        <option value="Stock and Bond Certificate">Stock and Bond Certificate</option>
                        <option value="Business Interest">Business Interest</option>
                        <option value="Contractual Interest">Contractual Interest</option>
                        <option value="Life Assurance Proceed">Life Assurance Proceed</option>
                        <option value="Retirement Proceed">Retirement Proceed</option>
                        <option value="Personal Property">Personal Property</option>                        
                    </select>
                </Form.Group>  

                {values.assetType === "Real Estate" &&
                <div>
                    {/* Address */}
                    <Form.Group>
                        <Form.Label>Address</Form.Label>
                        <Form.Control value={values.realEstateAddress} type="text" onChange={(e) => {handleChange("realEstateAddress", e)}}></Form.Control>
                    </Form.Group>                        
                    {/* Type */}
                    <Form.Group>
                        <Form.Label>Type</Form.Label>
                        <Form.Control value={values.realEstateType} type="text" onChange={(e) => {handleChange("realEstateType", e)}}></Form.Control>
                    </Form.Group>                    
                </div>
                }
                
                {values.assetType === "Financial Account" &&
                <div>
                    {/* Name */}
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control value={values.financialAccountName} type="text" onChange={(e) => {handleChange("financialAccountName", e)}}></Form.Control>
                    </Form.Group>
                    {/* Type of Account */}
                    <Form.Group>
                        <Form.Label>Type of Account</Form.Label>
                        <Form.Control value={values.financialAccountType} type="text" onChange={(e) => {handleChange("financialAccountType", e)}}></Form.Control>
                    </Form.Group>
                    {/* Account Number */}
                    <Form.Group>
                        <Form.Label>Account Number</Form.Label>
                        <Form.Control value={values.financialAccountNumber} type="text" onChange={(e) => {handleChange("financialAccountNumber", e)}}></Form.Control>
                    </Form.Group>                                                    
                </div>
                }

                {values.assetType === "Stock and Bond Certificate" &&
                <div>
                {/* Stock - Name of Issuer */}
                <Form.Group>
                    <Form.Label>Stock - Name of Issuer</Form.Label>
                    <Form.Control value={values.stockAndBondStockName} type="text" onChange={(e) => {handleChange("stockAndBondStockName", e)}}></Form.Control>
                </Form.Group>
                {/* Stock - Number of Shares */}
                <Form.Group>
                    <Form.Label>Stock - Number of Shares</Form.Label>
                    <Form.Control value={values.stockAndBondStockNumberOfShares} type="text" onChange={(e) => {handleChange("stockAndBondStockNumberOfShares", e)}}></Form.Control>
                </Form.Group>
                {/* Stock - Certificate Number */}
                <Form.Group>
                    <Form.Label>Stock - Certificate Number</Form.Label>
                    <Form.Control value={values.stockAndBondStockCertificateNumber} type="text" onChange={(e) => {handleChange("stockAndBondStockCertificateNumber", e)}}></Form.Control>
                </Form.Group>                                                    
                {/* Stock - Description */}
                <Form.Group>
                    <Form.Label>Stock - Description</Form.Label>
                    <Form.Control value={values.stockAndBondStockDescription} type="text" onChange={(e) => {handleChange("stockAndBondStockDescription", e)}}></Form.Control>
                </Form.Group>  

                {/* Bond - Name of Issuer */}
                <Form.Group>
                    <Form.Label>Bond - Name of Issuer</Form.Label>
                    <Form.Control value={values.stockAndBondBondName} type="text" onChange={(e) => {handleChange("stockAndBondBondName", e)}}></Form.Control>
                </Form.Group>
                {/* Bond - Face Value of Bond */}
                <Form.Group>
                    <Form.Label>Bond - Face Value of Bond</Form.Label>
                    <Form.Control value={values.stockAndBondBondValue} type="text" onChange={(e) => {handleChange("stockAndBondBondValue", e)}}></Form.Control>
                </Form.Group>
                {/* Bond - Certificate Number */}
                <Form.Group>
                    <Form.Label>Bond - Certificate Number</Form.Label>
                    <Form.Control value={values.stockAndBondBondCertificateNumber} type="text" onChange={(e) => {handleChange("stockAndBondBondCertificateNumber", e)}}></Form.Control>
                </Form.Group>                                                    
                {/* Bond - Description */}
                <Form.Group>
                    <Form.Label>Bond - Description</Form.Label>
                    <Form.Control value={values.stockAndBondBondDescription} type="text" onChange={(e) => {handleChange("stockAndBondBondDescription", e)}}></Form.Control>
                </Form.Group>                
                </div>
                }

                {values.assetType === "Business Interest" &&
                <div>
                    {/* Business Name */}
                    <Form.Group>
                        <Form.Label>Business Name</Form.Label>
                        <Form.Control value={values.businessName} type="text" onChange={(e) => {handleChange("businessName", e)}}></Form.Control>
                    </Form.Group>
                    {/* Description of Interest */}
                    <Form.Group>
                        <Form.Label>Description of Interest</Form.Label>
                        <Form.Control value={values.businessDescription} type="text" onChange={(e) => {handleChange("businessDescription", e)}}></Form.Control>
                    </Form.Group>                                    
                </div>
                }                

                {values.assetType === "Contractual Interest" &&
                <div>
                    {/* Title of Contract */}
                    <Form.Group>
                        <Form.Label>Title of Contract</Form.Label>
                        <Form.Control value={values.titleOfContract} type="text" onChange={(e) => {handleChange("titleOfContract", e)}}></Form.Control>
                    </Form.Group>
                    {/* Name of Other Party */}
                    <Form.Group>
                        <Form.Label>Name of Other Party</Form.Label>
                        <Form.Control value={values.nameOfOtherParty} type="text" onChange={(e) => {handleChange("nameOfOtherParty", e)}}></Form.Control>
                    </Form.Group>
                    {/* Date of Contract */}
                    <Form.Group>
                        <Form.Label>Date of Contract</Form.Label>
                        <Form.Control value={values.dateOfContract} type="text" onChange={(e) => {handleChange("dateOfContract", e)}}></Form.Control>
                    </Form.Group>
                    {/* Description */}
                    <Form.Group>
                        <Form.Label>Description</Form.Label>
                        <Form.Control value={values.contarctDescription} type="text" onChange={(e) => {handleChange("contarctDescription", e)}}></Form.Control>
                    </Form.Group>                                                                    
                </div>
                }                

                {values.assetType === "Life Assurance Proceed" &&
                <div>
                    {/* Name of Issuer */}
                    <Form.Group>
                        <Form.Label>Name of Issuer</Form.Label>
                        <Form.Control value={values.lifeAssuranceName} type="text" onChange={(e) => {handleChange("lifeAssuranceName", e)}}></Form.Control>
                    </Form.Group>
                    {/* Description of Policy */}
                    <Form.Group>
                        <Form.Label>Description of Policy</Form.Label>
                        <Form.Control value={values.lifeAssuranceDescription} type="text" onChange={(e) => {handleChange("lifeAssuranceDescription", e)}}></Form.Control>
                    </Form.Group>
                    {/* Policy Number */}
                    <Form.Group>
                        <Form.Label>Policy Number</Form.Label>
                        <Form.Control value={values.lifeAssuranceNumber} type="text" onChange={(e) => {handleChange("lifeAssuranceNumber", e)}}></Form.Control>
                    </Form.Group>                                                    
                </div>
                }       

                {values.assetType === "Retirement Proceed" &&
                <div>
                    {/* Name of Issuer */}
                    <Form.Group>
                        <Form.Label>Name of Issuer</Form.Label>
                        <Form.Control value={values.retirementProceedName} type="text" onChange={(e) => {handleChange("retirementProceedName", e)}}></Form.Control>
                    </Form.Group>
                    {/* Description of Policy */}
                    <Form.Group>
                        <Form.Label>Description of Policy</Form.Label>
                        <Form.Control value={values.retirementProceedDescription} type="text" onChange={(e) => {handleChange("retirementProceedDescription", e)}}></Form.Control>
                    </Form.Group>
                    {/* Policy Number */}
                    <Form.Group>
                        <Form.Label>Policy Number</Form.Label>
                        <Form.Control value={values.retirementProceedNumber} type="text" onChange={(e) => {handleChange("retirementProceedNumber", e)}}></Form.Control>
                    </Form.Group>                                                    
                </div>
                }                

                {values.assetType === "Personal Property" &&
                <div>
                    {/* Do you want to place all your personal property in the Trust */}
                    <Form.Group>
                        <Form.Label>Do you want to place all your personal property in the Trust ?</Form.Label>
                        <select className="form-control" value={values.personalPropertyQuestion} onChange={(e) => {handleChange("personalPropertyQuestion", e)}}>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </Form.Group> 
                    {values.personalPropertyQuestion === "No" &&
                    <Form.Group>
                        <Form.Label>Description of Property</Form.Label>
                        <Form.Control value={values.personalPropertyDescription} type="text" onChange={(e) => {handleChange("personalPropertyDescription", e)}}></Form.Control>
                    </Form.Group> 
                    }                   
                </div>
                }       

            </Form>

            <button className="btn btn-primary" onClick={Previous} >Prev</button>
            <button className="btn btn-primary ml-4" onClick={Continue}>Next</button>
        </div>
    )
}

export default Step4
