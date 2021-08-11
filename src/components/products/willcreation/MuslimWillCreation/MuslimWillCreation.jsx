import React, { Component } from 'react';
import Step1Muslim from './Step1Muslim';
import Step2Muslim from './Step2Muslim';
import Step4Muslim from './Step4Muslim';
import Step5Muslim from './Step5Muslim';
import Step6Muslim from './Step6Muslim';
import Step7Muslim from './Step7Muslim';
import Step8Muslim from './Step8Muslim';
import Step10Muslim from './Step10Muslim';
import Step11Muslim from './Step11Muslim';
import Step12Muslim from './Step12Muslim';
import Step13Muslim from './Step13Muslim';
import Step14Muslim from './Step14Muslim';
import Step15Muslim from './Step15Muslim';
import Step16Muslim from './Step16Muslim';

export default class MuslimWillCreation extends Component {

    state = {
        step: 1,

        // step 1
        prefix: "",
        firstName: "",
        middleName: "",
        lastName: "",
        suffix: "",
        gender: "",
        address: "",
        town: "",
        country: "",
        county: "",
        phoneNumber: "",
        email: "",
        maritalStatus: "",

        // step 2
        wivesDetails: [{
            index: 1,
            name: "",
            dob: "",
            address: "",
        }],

        // step 4
        children: [{
            index: 1,
            name: "",
        }],

        // step 5
        otherFamilyMembers: [{
            index: 1,
            name: "",
            address: "",
            relationship: "",
        }],

        // step 6
        guardianDetails: [{
            index: 1,
            name: "",
            relationship: "",
            address: "",
            town: "",
            country: "",
        }],

        // step 7        
        executorDetails: [{
            index: 1,
            name: "",
            relationship: "",
            address: "",
            town: "",
            state: "",
            email: "",
            phone: "",
        }],
        step7Question: "No",
        addAltExec: "",
        isRenumerated: "",
        execRenumeration: "",

        // step 8
        beneficiaryAssets: [{
            index: 1,
            assetType: "",
            desc: "",
            value: "",
            tenant: "",
        }],
        beneficiary: "",
        beneficiaryName: "",
        beneficiaryAddress: "",
        beneficiaryEmail: "",
        beneficiaryPhone: "",
        selectedChild: "",
        selectedWife: "",        

        // step 10
        priorityArray: [
            {index: 1, text: "I direct that my executor apply first, the assets of my estate to the payment the expenses associated with my burial, to my medical expenses, to the repayment of my debts, to legal and administrative expenses, including taxes, which are associated with my estate."},
            {index: 2, text: "I direct that my executor allocate and distribute from the residue of my estate, charitable contributions as outlined in Article 8, [Charitable Contributions and Testamentary Transfer]."},
            {index: 3, text: "I direct that my executor allocate and distribute from the balance of the residue of my estate, to my legitimate Muslim heirs, as outlined under Article 9, [Distribution of Residue of Estate to Muslim Heirs]."},
        ],

        // step 11
        otherTransferBeneficiary: "",
        otherGiftMadeTo: "",
        otherName: "",
        otherRelationship: "",
        otherAddress: "",
        otherContest: "",
        otherTrusteeName: "",
        otherTrusteeAdd: "",

        // step 12
        giftToPet: "",
        petName: "",
        petDescription: "",
        petAmount: "",
        petCaretaker: "",
        petCareTakerName: "",
        petAddress: "",

        // step 13
        burialDescription: "",

        // step 14
        additionalInstructions: [{
            index: 1,
            desc: "",
        }],
        isLiterate: "",
        additionalName: "",
        additionalAddress: "",

        // step 15
        signingDetails: [
            {
                index: 1,
                name: ""
            },
            {
                index: 2,
                name: ""
            }
        ],

        // step 16
        selfie1: null,
        selfie2: null,
        selfie3: null,

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

    onFileChange = event => {
        this.setState({ selectedFile: event.target.files[0] });      
    }

    render() {
        const { step } = this.state;

        const { prefix, firstName, middleName, lastName, suffix, gender, address, town, country, county, phoneNumber, email, maritalStatus,
            wivesDetails,
            children,
            otherFamilyMembers,
            guardianDetails,
            step7Question, executorDetails, addAltExec, isRenumerated, execRenumeration,
            beneficiary, beneficiaryName, beneficiaryAddress, beneficiaryEmail, beneficiaryPhone, selectedChild, selectedWife, beneficiaryAssets,
            priorityArray,
            otherTransferBeneficiary, otherGiftMadeTo, otherName, otherRelationship, otherAddress, otherContest, otherTrusteeName, otherTrusteeAdd,
            giftToPet, petName, petDescription, petAmount, petCaretaker, petCareTakerName, petAddress, 
            burialDescription, 
            additionalInstructions, isLiterate, additionalName, additionalAddress, 
            signingDetails,
            selfie1, selfie2, selfie3, } = this.state;

        const values = { prefix, firstName, middleName, lastName, suffix, gender, address, town, country, county, phoneNumber, email, maritalStatus,
            wivesDetails,
            children,
            otherFamilyMembers,
            guardianDetails,
            step7Question, executorDetails, addAltExec, isRenumerated, execRenumeration,
            beneficiary, beneficiaryName, beneficiaryAddress, beneficiaryEmail, beneficiaryPhone,selectedChild, selectedWife, beneficiaryAssets,
            priorityArray, 
            otherTransferBeneficiary, otherGiftMadeTo, otherName, otherRelationship, otherAddress, otherContest, otherTrusteeName, otherTrusteeAdd,
            giftToPet, petName, petDescription, petAmount, petCaretaker, petCareTakerName, petAddress, 
            burialDescription,
            additionalInstructions, isLiterate, additionalName, additionalAddress, 
            signingDetails,
            selfie1, selfie2, selfie3, };

        switch (step) {
            case 1:
                return(
                    <Step1Muslim nextStep={this.nextStep} prevStep={this.prevStep} handleChange={this.handleChange} changeState={this.changeState} values={values} />
                )
            case 2:
                return(
                    <Step2Muslim nextStep={this.nextStep} prevStep={this.prevStep} handleChange={this.handleChange} changeState={this.changeState} values={values} />
                )
            case 3:
                return(
                    <Step4Muslim nextStep={this.nextStep} prevStep={this.prevStep} handleChange={this.handleChange} changeState={this.changeState} values={values} />
                )
            case 4:
                return(
                    <Step5Muslim nextStep={this.nextStep} prevStep={this.prevStep} handleChange={this.handleChange} changeState={this.changeState} values={values} />
                )
            case 5:
                return(
                    <Step6Muslim nextStep={this.nextStep} prevStep={this.prevStep} handleChange={this.handleChange} changeState={this.changeState} values={values} />
                )
            case 6:
                return(
                    <Step7Muslim nextStep={this.nextStep} prevStep={this.prevStep} handleChange={this.handleChange} changeState={this.changeState} values={values} />
                );
            case 7:
                return(
                    <Step8Muslim nextStep={this.nextStep} prevStep={this.prevStep} handleChange={this.handleChange} changeState={this.changeState} values={values} />
                )
            case 8:
                return(
                    <Step10Muslim nextStep={this.nextStep} prevStep={this.prevStep} handleChange={this.handleChange} changeState={this.changeState} values={values} />
                )
            case 9:
                return(
                    <Step11Muslim nextStep={this.nextStep} prevStep={this.prevStep} handleChange={this.handleChange} changeState={this.changeState} values={values} />
                )
            case 10:
                return(
                    <Step12Muslim nextStep={this.nextStep} prevStep={this.prevStep} handleChange={this.handleChange} changeState={this.changeState} values={values} />
                )
            case 11:
                return(
                    <Step13Muslim nextStep={this.nextStep} prevStep={this.prevStep} handleChange={this.handleChange} changeState={this.changeState} values={values} />
                )
            case 12:
                return(
                    <Step14Muslim nextStep={this.nextStep} prevStep={this.prevStep} handleChange={this.handleChange} changeState={this.changeState} values={values} />
                )
            case 13:
                return(
                    <Step15Muslim nextStep={this.nextStep} prevStep={this.prevStep} handleChange={this.handleChange} changeState={this.changeState} values={values} />
                )
            case 14:
                return(
                    <Step16Muslim nextStep={this.nextStep} prevStep={this.prevStep} handleChange={this.handleChange} changeState={this.changeState} onFileChange={this.onFileChange} values={values} />
                )
                
        }
    }

}