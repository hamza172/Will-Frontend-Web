import React, { useRef, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import { PaystackButton } from "react-paystack";
import { v4 as uuidv4 } from "uuid";
import SignatureCanvas from 'react-signature-canvas';
import * as auth from "../../../services/adminService";
import axios from 'axios';
import "./../../../App.css";

function parseURLParams(url) {
    var queryStart = url.indexOf("?") + 1,
        queryEnd   = url.indexOf("#") + 1 || url.length + 1,
        query = url.slice(queryStart, queryEnd - 1),
        pairs = query.replace(/\+/g, " ").split("&"),
        parms = {}, i, n, v, nv;

    if (query === url || query === "") return;

    for (i = 0; i < pairs.length; i++) {
        nv = pairs[i].split("=", 2);
        n = decodeURIComponent(nv[0]);
        v = decodeURIComponent(nv[1]);

        if (!parms.hasOwnProperty(n)) parms[n] = [];
        parms[n].push(nv.length === 2 ? v : null);
    }
    return parms;
}

const Step11 = ({ nextStep, prevStep, handleChange, changeState, onFileChange, values }) => {

    const sigCanvas = useRef({});

    const sigCanvasGrantor = useRef({});
    const sigCanvasTrustee = useRef({});
    const sigCanvasSuccessor = useRef({});

    const [willAMBID, setWillAMBID] = React.useState();
    const [promoCode, setPromoCode] = React.useState("");
    const [basePrice, setBasePrice] = React.useState();
    const [actualPrice, setActualPrice] = React.useState();
    const [finalPrice, setFinalPrice] = React.useState();
    const [discount, setDiscount] = React.useState();
    const [commision, setCommision] = React.useState();
    const [commisionEarned, setCommisionEarned] = React.useState();

    useEffect(() => {
        axios.post("/managewill/get_living_trust_base_price", {

        })
        .then((response) => {
            setBasePrice(response.data.basePrice);
        })
        .catch((err) => {
            console.log(err);
        })
    }, []);

    const Continue = e => {
        e.preventDefault();
        nextStep();
    }

    const Previous = e => {
        e.preventDefault();
        prevStep();
    }

    function save(canvas, stateName) {
        var imageURI = canvas.current.getTrimmedCanvas().toDataURL("image/png");
        var fileName = uuidv4() + ".png";
        urltoFile(imageURI, fileName,'image/png')
        .then(function(file) {
            changeState(stateName, file);    
        });
    }

    function clear(canvas) {
        canvas.current.clear();
    }

    function urltoFile(url, filename, mimeType){
        return (fetch(url)
            .then(function(res){return res.arrayBuffer();})
            .then(function(buf){return new File([buf], filename,{type:mimeType});})
        );
    }

    const config = {
        reference: new Date().getTime(),
        email: auth.getCurrentUser().email,
        amount: finalPrice,
        currency: "ZAR",
        publicKey: "pk_test_6ad7daa084d40f22350038852006a020e49a4428",
    };

    const componentProps = {
        ...config,
        text: "Checkout",
        onSuccess: (email) => handlePaystackSuccessAction(email),
    };

    const handlePaystackSuccessAction = async (response) => {
        if (response.status === "success") {
            var formData = new FormData();

            formData.append("areYouOver18", values.areYouOver18);
            formData.append("areYouOfSaneMind", values.areYouOfSaneMind);
            formData.append("doYouOwnThePropertyVested", values.doYouOwnThePropertyVested);
            formData.append("areYouCreatingARevocableOrIrrevocable", values.areYouCreatingARevocableOrIrrevocable);

            formData.append("name", values.name);
            formData.append("address", values.address);
            formData.append("phone", values.phone);
            formData.append("email", values.email);

            formData.append("isTheGrantorNotTheTrustee", values.isTheGrantorNotTheTrustee);
            formData.append("trusteeType", values.trusteeType);
            formData.append("organisationConfirmation", values.organisationConfirmation);
            formData.append("individuaConfirmation", values.individuaConfirmation);
            formData.append("trusteeName", values.trusteeName);
            formData.append("trusteeAddress", values.trusteeAddress);
            formData.append("doYouWantCotrustee", values.doYouWantCotrustee);
            formData.append("CotrusteeName", values.CotrusteeName);
            formData.append("CotrusteeAddress", values.CotrusteeAddress);
            formData.append("wouldYouLikeToNameTheTrust", values.wouldYouLikeToNameTheTrust);
            formData.append("trustName", values.trustName);

            formData.append("assetType", values.assetType);
            formData.append("realEstateAddress", values.realEstateAddress);
            formData.append("realEstateType", values.realEstateType);
            formData.append("financialAccountName", values.financialAccountName);
            formData.append("financialAccountType", values.financialAccountType);
            formData.append("financialAccountNumber", values.financialAccountNumber);
            formData.append("stockAndBondStockName", values.stockAndBondStockName);
            formData.append("stockAndBondStockNumberOfShares", values.stockAndBondStockNumberOfShares);
            formData.append("stockAndBondStockCertificateNumber", values.stockAndBondStockCertificateNumber);
            formData.append("stockAndBondStockDescription", values.stockAndBondStockDescription);
            formData.append("stockAndBondBondName", values.stockAndBondBondName);
            formData.append("stockAndBondBondValue", values.stockAndBondBondValue);
            formData.append("stockAndBondBondCertificateNumber", values.stockAndBondBondCertificateNumber);
            formData.append("stockAndBondBondDescription", values.stockAndBondBondDescription);
            formData.append("businessName", values.businessName);
            formData.append("businessDescription", values.businessDescription);
            formData.append("titleOfContract", values.titleOfContract);
            formData.append("nameOfOtherParty", values.nameOfOtherParty);
            formData.append("dateOfContract", values.dateOfContract);
            formData.append("contarctDescription", values.contarctDescription);
            formData.append("lifeAssuranceName", values.lifeAssuranceName);
            formData.append("lifeAssuranceDescription", values.lifeAssuranceDescription);
            formData.append("lifeAssuranceNumber", values.lifeAssuranceNumber);
            formData.append("retirementProceedName", values.retirementProceedName);
            formData.append("retirementProceedDescription", values.retirementProceedDescription);
            formData.append("retirementProceedNumber", values.retirementProceedNumber);
            formData.append("personalPropertyQuestion", values.personalPropertyQuestion);
            formData.append("personalPropertyDescription", values.personalPropertyDescription);

            formData.append("beneficiariesNames", JSON.stringify(values.beneficiariesNames));
            formData.append("beneficiariesCount", values.beneficiariesCount);
            formData.append("giveTheFollowingItems", values.giveTheFollowingItems);
            formData.append("to", values.to);
            formData.append("alternateRecipient", values.alternateRecipient);

            formData.append("nameOfCharity", values.nameOfCharity);
            formData.append("gift", values.gift);

            formData.append("subtrustQuestion", values.subtrustQuestion);
            formData.append("subtrustName", values.subtrustName);
            formData.append("subtrustAge", values.subtrustAge);

            formData.append("pourOverWillQuestion", values.pourOverWillQuestion);
            formData.append("pourOverWillFile", values.pourOverWillFile);

            formData.append("additionalInstructionOne", values.additionalInstructionOne);
            formData.append("additionalInstructionTwo", values.additionalInstructionTwo);

            formData.append("remunerationQuestion", values.remunerationQuestion);
            formData.append("remunerationInstruction", values.remunerationInstruction);
            formData.append("remunerationAmount", values.remunerationAmount);
            formData.append("remunerationPeriod", values.remunerationPeriod);

            formData.append("signature", values.signature);
            formData.append("selfie", values.selfie);
            formData.append("signatureGrantor", values.signatureGrantor);
            formData.append("signatureTrustee", values.signatureTrustee);
            formData.append("signatureSuccessor", values.signatureSuccessor);
            formData.append("affidavit", values.affidavit);
            formData.append("date", values.date);
            formData.append("place", values.place);
            formData.append("time", values.time);

            formData.append("userID", localStorage.getItem("id"));
            if(parseURLParams(window.location.href) === undefined) {
                formData.append("willID", "");
            }
            else {
                formData.append("willID", parseURLParams(window.location.href).will_id[0]);                
            }

            axios.post(process.env.REACT_APP_API_URL + "/managewill/add_living_trust_to_sale", {
                productName: "Living Trust",
                transactionID: response.reference,
                amount: actualPrice,
                userID: localStorage.getItem("id")
            })
            .then((response2) => {
                if(response2.data.msg === "success") {
                    var salesID = response2.data.salesID;

                    if(willAMBID !== "") {
                        axios.post(process.env.REACT_APP_API_URL + "/managewill/add_living_trust_commision", {
                            salesID: salesID,
                            willAmbID: willAMBID,
                            commissionEarned: commision,
                            commissionBalance: commisionEarned,
                            userID: localStorage.getItem("id"),
                            userName: localStorage.getItem("name")
                        })
                        .then((response) => {
                            if(response.data.msg === "success") {
                                axios.post(process.env.REACT_APP_API_URL + "/managewill/add_living_trust", formData)
                                .then((response3) => {
                                    if(parseURLParams(window.location.href) === undefined) {
                                        window.location.href = "/home";
                                    }
                                    else {
                                        window.location.href = "/products/managewill";
                                    }                                
                                })
                                .catch((err) => {
                                    console.log(err);
                                });
                            }
                        })
                        .catch((err) => {
                            console.log(err);
                        })
                    }
                    else {
                        axios.post(process.env.REACT_APP_API_URL + "/managewill/add_living_trust", formData)
                        .then((response3) => {
                            if(parseURLParams(window.location.href) === undefined) {
                                window.location.href = "/home";
                            }
                            else {
                                window.location.href = "/products/managewill";
                            }                                
                        })
                        .catch((err) => {
                            console.log(err);
                        });
                    }

                }
            })
            .catch((err) => {
                console.log(err);
            })

        }
    }

    const calAmount = () => {
        setWillAMBID("");
        setActualPrice(basePrice);
        if(promoCode === "") {            
            setFinalPrice(basePrice);
        }
        else {
            axios.post(process.env.REACT_APP_API_URL + "/users/match_promo_code", {
                promoCode: promoCode
            })
            .then((response) => {
                if(response.data.user) {
                    if(response.data.user.type === "willAmbassdor") {
                        setWillAMBID(response.data.user._id);
                        axios.post(process.env.REACT_APP_API_URL + "/managewill/get_discount_amount_by_type", {
                            type: "Will Ambassador"
                        })
                        .then((response) => {       
                            setDiscount(response.data.discount.discountPercentage);
                            setCommision(response.data.discount.commissionPercentage);
                            setCommisionEarned( (commision / 100) * basePrice );
                            let amountToMinus = (basePrice * response.data.discount.discountPercentage) / 100;
                            setFinalPrice(basePrice - amountToMinus);
                        })
                        .catch((err) => {
                            console.log(err);
                        })
                    }
                    else if(response.data.user.type === "organisationUser") {
                        setWillAMBID(response.data.user._id);
                        axios.post(process.env.REACT_APP_API_URL + "/managewill/get_discount_amount_by_type", {
                            type: "Organisation User"
                        })
                        .then((response) => {
                            setDiscount(response.data.discount.discountPercentage);
                            setCommision(response.data.discount.commissionPercentage);
                            setCommisionEarned( (commision / 100) * basePrice );
                            let amountToMinus = (basePrice * response.data.discount.discountPercentage) / 100;
                            setFinalPrice(basePrice - amountToMinus);
                        })
                        .catch((err) => {
                            console.log(err);
                        })                        
                    }
                }
                else{
                    alert("Incorrect Promo Code");
                }
            })
            .catch((err) => {
                console.log(err);
            })
        }
    }

    return (
        <div style={{padding: 30}}>

            <h1>Step 11</h1>
            <h1>Signature and Selfie</h1>

            <div style={{display: "flex", alignItems: "center"}}>
                <SignatureCanvas ref={sigCanvas} penColor='green' canvasProps={{width: 300, height: 100, className: 'sigCanvas'}} />
                <button className="btn btn-primary ml-2" style={{height: 50}} onClick={() => {clear(sigCanvas)}}>Clear</button>
                <button className="btn btn-primary ml-2" style={{height: 50}} onClick={() => {save(sigCanvas, "signature")}}>Save</button>
            </div>

            <h5>Selfie</h5>
            <input style={{display: "block", marginBottom: 15}} type="file" onChange={(e) => {onFileChange("selfie", e)}}></input>

            <h5>Signature of Grantor</h5>
            <div style={{display: "flex", alignItems: "center"}}>
                <SignatureCanvas ref={sigCanvasGrantor} penColor='green' canvasProps={{width: 300, height: 100, className: 'sigCanvas'}} />
                <button className="btn btn-primary ml-2" style={{height: 50}} onClick={() => {clear(sigCanvasGrantor)}}>Clear</button>
                <button className="btn btn-primary ml-2" style={{height: 50}} onClick={() => {save(sigCanvasGrantor, "signatureGrantor")}}>Save</button>
            </div>

            <h5>Signature of Trustee</h5>
            <div style={{display: "flex", alignItems: "center"}}>
                <SignatureCanvas ref={sigCanvasTrustee} penColor='green' canvasProps={{width: 300, height: 100, className: 'sigCanvas'}} />
                <button className="btn btn-primary ml-2" style={{height: 50}} onClick={() => {clear(sigCanvasTrustee)}}>Clear</button>
                <button className="btn btn-primary ml-2" style={{height: 50}} onClick={() => {save(sigCanvasTrustee, "signatureTrustee")}}>Save</button>
            </div>

            <h5>Signature of Successor</h5>
            <div style={{display: "flex", alignItems: "center"}}>
                <SignatureCanvas ref={sigCanvasSuccessor} penColor='green' canvasProps={{width: 300, height: 100, className: 'sigCanvas'}} />
                <button className="btn btn-primary ml-2" style={{height: 50}} onClick={() => {clear(sigCanvasSuccessor)}}>Clear</button>
                <button className="btn btn-primary ml-2" style={{height: 50}} onClick={() => {save(sigCanvasSuccessor, "signatureSuccessor")}}>Save</button>
            </div>
            
            <h5>Affidavit from Notary Public</h5>
            <input style={{display: "block", marginBottom: 15}} type="file" onChange={(e) => {onFileChange("affidavit", e)}}></input>

            <Form>
                {/* Date */}
                <Form.Group>
                    <Form.Label>Date</Form.Label>
                    <Form.Control value={values.date} type="text" onChange={(e) => {handleChange("date", e)}}></Form.Control>
                </Form.Group>
                {/* Place */}
                <Form.Group>
                    <Form.Label>Place</Form.Label>
                    <Form.Control value={values.place} type="text" onChange={(e) => {handleChange("place", e)}}></Form.Control>
                </Form.Group>
                {/* Time */}
                <Form.Group>
                    <Form.Label>Time</Form.Label>
                    <Form.Control value={values.time} type="text" onChange={(e) => {handleChange("time", e)}}></Form.Control>
                </Form.Group>                                                
            </Form>

            <div style={{display: "flex", alignItems: "baseline"}}>
                <p className="mr-2">Enter Promotion Code</p>
                <input value={promoCode} onChange={(e) => {setPromoCode(e.target.value)}}></input>
            </div>

            <div className="mb-2">                
                <button className="btn btn-primary" onClick={calAmount}>Calculate</button>
                <input type="numer" disabled className="ml-2" value={actualPrice}></input>
            </div>

            <div>
                <label>Your actual amount is: {actualPrice}</label>
                <br />
                <label>Discount % applied : {discount}</label>
                <br />
                <label>Final Amount : {finalPrice}</label>
                <br />
            </div>

            <button className="btn btn-primary" onClick={Previous} >Prev</button>
            <PaystackButton {...componentProps} />
        </div>
    )
}

export default Step11
