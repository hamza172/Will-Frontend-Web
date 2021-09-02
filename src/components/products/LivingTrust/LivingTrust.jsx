import React, { Component } from 'react';
import { v4 as uuidv4 } from "uuid";
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';
import Step6 from './Step6';
import Step7 from './Step7';
import Step8 from './Step8';
import Step9 from './Step9';
import Step10 from './Step10';
import Step11 from './Step11';
import Step12 from './Step12';


export default class LivingTrust extends Component {

    state = {
        step: 1,

        // Step 1
        areYouOver18: "Yes",
        areYouOfSaneMind: "Yes",
        doYouOwnThePropertyVested: "Yes",
        areYouCreatingARevocableOrIrrevocable: "Yes",

        // Step 2
        name: "",
        city: "",
        zipCode: "",
        state: "",
        address: "",
        phone: "",
        email: "",

        // Step 3
        isTheGrantorNotTheTrustee: "No",
        trusteeType: "Individual",
        organisationConfirmation: false,
        individuaConfirmation: false,
        trusteeName: "",
        trusteeCity: "",
        trusteeZipCode: "",
        trusteeState: "",
        trusteeAddress: "",
        doYouWantCotrustee: "No",
        CotrusteeName: "",
        CotrusteeCity: "",
        CotrusteeZipCode: "",
        CotrusteeState: "",
        CotrusteeAddress: "",
        wouldYouLikeToNameTheTrust : "No",
        trustName: "",

        // Step 4
        step4Gifts: [{
            giftID: uuidv4(),
            assetType: "Real Estate",
            realEstateAddress: "",
            realEstateType: "",
            financialAccountName: "",
            financialAccountType: "",
            financialAccountNumber: "",            
            stockAndBondStockName: "",
            stockAndBondStockNumberOfShares: "",
            stockAndBondStockCertificateNumber: "",
            stockAndBondStockDescription: "",
            stockAndBondBondName: "",
            stockAndBondBondValue: "",
            stockAndBondBondCertificateNumber: "",
            stockAndBondBondDescription: "",
            businessName: "",
            businessDescription: "",
            titleOfContract: "",
            nameOfOtherParty: "",
            dateOfContract: "",
            contarctDescription: "",
            lifeAssuranceName: "",
            lifeAssuranceDescription: "",
            lifeAssuranceNumber: "",
            retirementProceedName: "",
            retirementProceedDescription: "",
            retirementProceedNumber: "",
            personalPropertyQuestion: "Yes",
            personalPropertyDescription: "",
            documentLocation: "",
            assetFile: null,
        }],
        step4GiftsCount: 1,        

        // Step 5
        beneficiariesNames: [{
            personID: uuidv4(),
            name: "",
            dob: "",
        }],
        beneficiariesCount: 1,

        // Step 6
        step6Mapper: [{
            giftID: "",
            personID: ""
        }],

        // Step 7
        step5Charities: [{
            nameOfCharity: "",
            gift: "",
        }],
        step5CharityCount: 1,

        // Step 8
        subtrustQuestion: "No",
        subtrustName: "",
        subtrustAge: "",

        // Step 9
        pourOverWillQuestion: "No",
        
        // Step 10
        additionalInstructionOne: "",
        additionalInstructionTwo: "",

        // Step 11
        remunerationQuestion: "No",
        remunerationInstruction: "",
        remunerationAmount: null,
        remunerationPeriod: "Monthly",

        // Step 12
        signature: null,
        selfie: null,
        signatureGrantor: null,
        signatureTrustee: null,
        signatureSuccessor: null,
        date: "",
        place: "",
        time: "",

    }

    prevStep = () => {
        const { step } = this.state;
        this.setState({ step: step - 1 });
    }

    nextStep = () => {
        const { step } = this.state;
        this.setState({ step: step + 1 });
    }

    handleChange = (input, e) => {
        this.setState({ [input]: e.target.value });
    }

    changeState = (input, val) => {
        this.setState({ [input]: val });
    }

    // onFileChange = (input, event) => {
    //     this.setState({ [input]: event.target.files[0] });      
    // }
    onFileChange = (input, val) => {
        this.setState({ [input]: val });      
    }

    render() {                

        const { step } = this.state;

        const { areYouOver18, areYouOfSaneMind, doYouOwnThePropertyVested, areYouCreatingARevocableOrIrrevocable,
                name, city, zipCode, state, address, phone, email,
                isTheGrantorNotTheTrustee, trusteeType, organisationConfirmation, individuaConfirmation, trusteeName, trusteeCity, trusteeZipCode, trusteeState, trusteeAddress, doYouWantCotrustee, CotrusteeName, CotrusteeCity, CotrusteeZipCode, CotrusteeState, CotrusteeAddress, wouldYouLikeToNameTheTrust, trustName,
                step4Gifts, step4GiftsCount, assetType, realEstateAddress, realEstateType, financialAccountName, financialAccountType, financialAccountNumber, stockAndBondStockName, stockAndBondStockNumberOfShares, stockAndBondStockCertificateNumber, stockAndBondStockDescription, stockAndBondBondName, stockAndBondBondValue, stockAndBondBondCertificateNumber, stockAndBondBondDescription, businessName, businessDescription, titleOfContract, nameOfOtherParty, dateOfContract, contarctDescription, lifeAssuranceName, lifeAssuranceDescription, lifeAssuranceNumber, retirementProceedName, retirementProceedDescription, retirementProceedNumber, personalPropertyQuestion, personalPropertyDescription,
                beneficiariesNames, beneficiariesCount,
                step6Mapper,
                step5Charities, step5CharityCount,
                subtrustQuestion, subtrustName, subtrustAge,
                pourOverWillQuestion,
                additionalInstructionOne, additionalInstructionTwo,
                remunerationQuestion, remunerationInstruction, remunerationAmount, remunerationPeriod,
                signature, selfie, signatureGrantor, signatureTrustee, signatureSuccessor, date, place, time } = this.state;

        const values = { areYouOver18, areYouOfSaneMind, doYouOwnThePropertyVested, areYouCreatingARevocableOrIrrevocable,
                        name, city, zipCode, state, address, phone, email,
                        isTheGrantorNotTheTrustee, trusteeType, organisationConfirmation, individuaConfirmation, trusteeName, trusteeCity, trusteeZipCode, trusteeState, trusteeAddress, doYouWantCotrustee, CotrusteeName, CotrusteeCity, CotrusteeZipCode, CotrusteeState, CotrusteeAddress, wouldYouLikeToNameTheTrust, trustName,
                        step4Gifts, step4GiftsCount, assetType, realEstateAddress, realEstateType, financialAccountName, financialAccountType, financialAccountNumber, stockAndBondStockName, stockAndBondStockNumberOfShares, stockAndBondStockCertificateNumber, stockAndBondStockDescription, stockAndBondBondName, stockAndBondBondValue, stockAndBondBondCertificateNumber, stockAndBondBondDescription, businessName, businessDescription, titleOfContract, nameOfOtherParty, dateOfContract, contarctDescription, lifeAssuranceName, lifeAssuranceDescription, lifeAssuranceNumber, retirementProceedName, retirementProceedDescription, retirementProceedNumber, personalPropertyQuestion, personalPropertyDescription,
                        beneficiariesNames, beneficiariesCount,
                        step6Mapper,
                        step5Charities, step5CharityCount,
                        subtrustQuestion, subtrustName, subtrustAge,
                        pourOverWillQuestion,
                        additionalInstructionOne, additionalInstructionTwo,
                        remunerationQuestion, remunerationInstruction, remunerationAmount, remunerationPeriod,
                        signature, selfie, signatureGrantor, signatureTrustee, signatureSuccessor, date, place, time };

        switch (step) {
            case 1: 
                return (
                    <Step1 nextStep={this.nextStep} prevStep={this.prevStep} handleChange={this.handleChange} values={values} />
                )
            case 2: 
                return (
                    <Step2 nextStep={this.nextStep} prevStep={this.prevStep} handleChange={this.handleChange} values={values} />
                )
            case 3:
                return (
                    <Step3 nextStep={this.nextStep} prevStep={this.prevStep} handleChange={this.handleChange} changeState={this.changeState} values={values} />
                )
            case 4:
                return (
                    <Step4 nextStep={this.nextStep} prevStep={this.prevStep} handleChange={this.handleChange} onFileChange={this.onFileChange} changeState={this.changeState} values={values} />
                )    
            case 5:
                return (
                    <Step5 nextStep={this.nextStep} prevStep={this.prevStep} handleChange={this.handleChange} changeState={this.changeState} values={values} />
                )
            case 6:
                return (
                    <Step6 nextStep={this.nextStep} prevStep={this.prevStep} handleChange={this.handleChange} changeState={this.changeState} values={values} />
                )
            case 7:
                return (
                    <Step7 nextStep={this.nextStep} prevStep={this.prevStep} handleChange={this.handleChange} changeState={this.changeState} values={values} />
                )
            case 8:
                return (
                    <Step8 nextStep={this.nextStep} prevStep={this.prevStep} handleChange={this.handleChange} values={values} />
            )
            case 9:
                return (
                    <Step9 nextStep={this.nextStep} prevStep={this.prevStep} handleChange={this.handleChange} values={values} />
            )
            case 10:
                return (
                    <Step10 nextStep={this.nextStep} prevStep={this.prevStep} handleChange={this.handleChange} values={values} />
            )                        
            case 11:
                return (
                    <Step11 nextStep={this.nextStep} prevStep={this.prevStep} handleChange={this.handleChange} values={values} />
            )
            case 12:
                return(
                    <Step12 nextStep={this.nextStep} prevStep={this.prevStep} handleChange={this.handleChange} changeState={this.changeState} onFileChange={this.onFileChange} values={values} />
                )            

            default: 
               // do nothing
        }
    }
}
