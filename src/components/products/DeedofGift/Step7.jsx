import React, { useRef, useEffect } from 'react';
import axios from 'axios';
import { PaystackButton } from "react-paystack";
import { Form } from 'react-bootstrap';
import * as auth from "../../../services/adminService";
import { v4 as uuidv4 } from "uuid";
import "./../../../App.css";

import SignatureCanvas from 'react-signature-canvas';

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

const Step7 = ({ nextStep, prevStep, handleChange, changeState, onFileChange, values }) => {

    const sigCanvas = useRef({});
    const [promoCode, setPromoCode] = React.useState("");
    const [basePrice, setBasePrice] = React.useState();
    const [actualPrice, setActualPrice] = React.useState();
    const [finalPrice, setFinalPrice] = React.useState();
    const [willAMBID, setWillAMBID] = React.useState();
    const [discount, setDiscount] = React.useState();
    const [commision, setCommision] = React.useState();
    const [commisionEarned, setCommisionEarned] = React.useState();

    useEffect(() => {
        axios.post(process.env.REACT_APP_API_URL + "/managewill/get_deed_of_gift_base_price", {

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

    function clear() {
        sigCanvas.current.clear();
    }

    function save() {
        var imageURI = sigCanvas.current.getTrimmedCanvas().toDataURL("image/png");
        var fileName = uuidv4() + ".png";
        urltoFile(imageURI, fileName,'image/png')
        .then(function(file) {
            changeState("signature", file);    
        });

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
        amount: Number(finalPrice),
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

            formData.append("countryOfGift", values.countryOfGift);
            formData.append("stateOfGift", values.stateOfGift);
            formData.append("revokeThisGift", values.revokeThisGift);
            formData.append("dateOfTransfer", values.dateOfTransfer);
    
            formData.append("typeOfDonor", values.typeOfDonor);
            formData.append("donorFullName", values.donorFullName);
            formData.append("donorCity", values.donorCity);
            formData.append("donorZipCode", values.donorZipCode);
            formData.append("donorState", values.donorState);
            formData.append("donorAddress", values.donorAddress);
    
            formData.append("typeOfDonee", values.typeOfDonee);
            formData.append("doneeFullName", values.doneeFullName);
            formData.append("doneeCity", values.doneeCity);
            formData.append("doneeZipCode", values.doneeZipCode);
            formData.append("doneeState", values.doneeState);
            formData.append("doneeAddress", values.doneeAddress);
            formData.append("relationshipDonorDonee", values.relationshipDonorDonee);
            formData.append("isDoneeMinor", values.isDoneeMinor);
            formData.append("doneeGuardianName", values.doneeGuardianName);
            formData.append("doneeGuardianAddress", values.doneeGuardianAddress);
    
            formData.append("typeOfGift", values.typeOfGift);
            formData.append("giftPossessionTime", values.giftPossessionTime);
            formData.append("descriptionOfGift", values.descriptionOfGift);
            formData.append("purposeOfGift", values.purposeOfGift);
            formData.append("specificDate", values.specificDate);
            formData.append("monetaryValue", values.monetaryValue);
    
            formData.append("additionalClauses", JSON.stringify(values.additionalClauses));
    
            formData.append("agentFullName", values.agentFullName);
            formData.append("agentAddress", values.agentAddress);
            formData.append("addAlternateAgent", values.addAlternateAgent);
            formData.append("alternateAgentFullName", values.alternateAgentFullName);
            formData.append("alternateAgentAddress", values.alternateAgentAddress);
    
            formData.append("selfie", values.selectedFile);
            formData.append("signature", values.signature);
    
            formData.append("userID", localStorage.getItem("id"));  
            if(parseURLParams(window.location.href) === undefined) {
                formData.append("willID", "");
            }
            else {
                formData.append("willID", parseURLParams(window.location.href).will_id[0]);                
            }
                    
                        
            axios.post(process.env.REACT_APP_API_URL + "/managewill/add_deed_of_gift_sale", {
                productName: "Deed of Gift",
                transactionID: response.reference,
                amount: actualPrice,
                userID: localStorage.getItem("id")
            })
            .then((response2) => {                
                if(response2.data.msg === "success") {
                    var salesID = response2.data.salesID;

                    if(willAMBID !== "") {
                        axios.post(process.env.REACT_APP_API_URL + "/managewill/add_deed_of_gift_commision", {
                            salesID: salesID,
                            willAmbID: willAMBID,
                            commissionEarned: commision,
                            commissionBalance: commisionEarned,
                            userID: localStorage.getItem("id"),
                            userName: localStorage.getItem("name")
                        })
                        .then((response) => {
                            if(response.data.msg === "success") {
                                axios.post(process.env.REACT_APP_API_URL + "/managewill/add_deed_of_gift", formData)
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
                        axios.post(process.env.REACT_APP_API_URL + "/managewill/add_deed_of_gift", formData)
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
        <div  style={{padding: 30}}>

            <h1>Step 7</h1>

            <h5>Signature</h5>
            <div style={{display: "flex", alignItems: "center"}}>
                <SignatureCanvas ref={sigCanvas} penColor='green' canvasProps={{width: 500, height: 200, className: 'sigCanvas'}} />
                <button className="btn btn-primary ml-2" style={{height: 50}} onClick={clear}>Clear</button>
                <button className="btn btn-primary ml-2" style={{height: 50}} onClick={save}>Save</button>
            </div>
            
            <h5>Selfie</h5>
            <input style={{display: "block", marginBottom: 15}} type="file" onChange={onFileChange}></input>

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
            
        
            <button className="btn btn-primary" onClick={Previous}>Prev</button>
            <PaystackButton {...componentProps} />
        </div>
    )
}

export default Step7
