import React, { Component } from "react";
import axios from "axios";
import Step1MuslimCodicil from "./Step1MuslimCodicil";
import Step2MuslimCodicil from "./Step2MuslimCodicil";
import Step4MuslimCodicil from "./Step4MuslimCodicil";
import Step5MuslimCodicil from "./Step5MuslimCodicil";
import Step6MuslimCodicil from "./Step6MuslimCodicil";
import Step7MuslimCodicil from "./Step7MuslimCodicil";
import Step8MuslimCodicil from "./Step8MuslimCodicil";
import Step10MuslimCodicil from "./Step10MuslimCodicil";
import Step11MuslimCodicil from "./Step11MuslimCodicil";
import Step12MuslimCodicil from "./Step12MuslimCodicil";
import Step13MuslimCodicil from "./Step13MuslimCodicil";
import Step14MuslimCodicil from "./Step14MuslimCodicil";
import Step15MuslimCodicil from "./Step15MuslimCodicil";

function parseURLParams(url) {
  var queryStart = url.indexOf("?") + 1,
    queryEnd = url.indexOf("#") + 1 || url.length + 1,
    query = url.slice(queryStart, queryEnd - 1),
    pairs = query.replace(/\+/g, " ").split("&"),
    parms = {},
    i,
    n,
    v,
    nv;

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

export default class MuslimCodicil extends Component {
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
    wivesDetails: [
      {
        index: 1,
        name: "",
        dob: "",
        address: "",
      },
    ],

    // step 4
    children: [
      {
        index: 1,
        name: "",
      },
    ],

    // step 5
    otherFamilyMembers: [
      {
        index: 1,
        name: "",
        address: "",
        relationship: "",
      },
    ],

    // step 6
    guardianDetails: [
      {
        index: 1,
        name: "",
        relationship: "",
        address: "",
        town: "",
        country: "",
      },
    ],

    // step 7
    executorDetails: [
      {
        index: 1,
        name: "",
        relationship: "",
        address: "",
        town: "",
        state: "",
        email: "",
        phone: "",
      },
    ],
    step7Question: "No",
    addAltExec: "",
    isRenumerated: "",
    execRenumeration: "",

    // step 8
    beneficiaryAssets: [
      {
        index: 1,
        assetType: "",
        desc: "",
        value: "",
        tenant: "",
      },
    ],
    beneficiary: "",
    beneficiaryName: "",
    beneficiaryAddress: "",
    beneficiaryEmail: "",
    beneficiaryPhone: "",
    selectedChild: "",
    selectedWife: "",

    // step 10
    priorityArray: [
      {
        index: 1,
        text: "I direct that my executor apply first, the assets of my estate to the payment the expenses associated with my burial, to my medical expenses, to the repayment of my debts, to legal and administrative expenses, including taxes, which are associated with my estate.",
      },
      {
        index: 2,
        text: "I direct that my executor allocate and distribute from the residue of my estate, charitable contributions as outlined in Article 8, [Charitable Contributions and Testamentary Transfer].",
      },
      {
        index: 3,
        text: "I direct that my executor allocate and distribute from the balance of the residue of my estate, to my legitimate Muslim heirs, as outlined under Article 9, [Distribution of Residue of Estate to Muslim Heirs].",
      },
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
    additionalInstructions: [
      {
        index: 1,
        desc: "",
      },
    ],
    isLiterate: "",
    additionalName: "",
    additionalAddress: "",

    // step 15
    signingDetails: [
      {
        index: 1,
        name: "",
      },
      {
        index: 2,
        name: "",
      },
    ],

    // step 16
    selfie1: null,
    selfie2: null,
    selfie3: null,
  };

  componentDidMount() {
    axios
      .post(process.env.REACT_APP_API_URL + "/managewill/getWill", {
        willID: parseURLParams(window.location.href).will_id[0],
      })
      .then((response) => {
        var will = response.data.will;

        // step 1
        this.setState({ prefix: will.prefix });
        this.setState({ firstName: will.firstName });
        this.setState({ middleName: will.middleName });
        this.setState({ lastName: will.lastName });
        this.setState({ suffix: will.suffix });
        this.setState({ gender: will.gender });
        this.setState({ address: will.address });
        this.setState({ town: will.town });
        this.setState({ country: will.country });
        this.setState({ county: will.county });
        this.setState({ phoneNumber: will.phoneNumber });
        this.setState({ email: will.email });
        this.setState({ maritalStatus: will.maritalStatus });

        // step 2
        this.setState({ wivesDetails: will.wivesDetails });

        // step 4
        this.setState({ children: will.children });

        // step 5
        this.setState({ otherFamilyMembers: will.otherFamilyMembers });

        // step 6
        this.setState({ guardianDetails: will.guardianDetails });

        // step 7
        this.setState({ executorDetails: will.executorDetails });
        this.setState({ step7Question: will.step7Question });
        this.setState({ addAltExec: will.addAltExec });
        this.setState({ isRenumerated: will.isRenumerated });
        this.setState({ execRenumeration: will.execRenumeration });

        // step 8
        this.setState({ beneficiaryAssets: will.beneficiaryAssets });
        this.setState({ beneficiary: will.beneficiary });
        this.setState({ beneficiaryName: will.beneficiaryName });
        this.setState({ beneficiaryAddress: will.beneficiaryAddress });
        this.setState({ beneficiaryEmail: will.beneficiaryEmail });
        this.setState({ beneficiaryPhone: will.beneficiaryPhone });
        this.setState({ selectedChild: will.selectedChild });
        this.setState({ selectedWife: will.selectedWife });

        // step 10
        this.setState({ priorityArray: will.priorityArray });
        // step 11
        this.setState({
          otherTransferBeneficiary: will.otherTransferBeneficiary,
        });
        this.setState({ otherGiftMadeTo: will.otherGiftMadeTo });
        this.setState({ otherName: will.otherName });
        this.setState({ otherRelationship: will.otherRelationship });
        this.setState({ otherAddress: will.otherAddress });
        this.setState({ otherContest: will.otherContest });
        this.setState({ otherTrusteeName: will.otherTrusteeName });
        this.setState({ otherTrusteeAdd: will.otherTrusteeAdd });

        // step 12
        this.setState({ giftToPet: will.giftToPet });
        this.setState({ petName: will.petName });
        this.setState({ petDescription: will.petDescription });
        this.setState({ petAmount: will.petAmount });
        this.setState({ petCaretaker: will.petCaretaker });
        this.setState({ petCareTakerName: will.petCareTakerName });
        this.setState({ petAddress: will.petAddress });

        // step 13
        this.setState({ burialDescription: will.burialDescription });

        // step 14
        this.setState({ additionalInstructions: will.additionalInstructions });
        this.setState({ isLiterate: will.isLiterate });
        this.setState({ additionalName: will.additionalName });
        this.setState({ additionalAddress: will.additionalAddress });

        // step 15
        this.setState({ signingDetails: will.signingDetails });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };

  handleChange = (input, e) => {
    this.setState({ [input]: e.target.value });
  };

  changeState = (input, val) => {
    this.setState({ [input]: val });
  };

  onFileChange = (event) => {
    this.setState({ selectedFile: event.target.files[0] });
  };

  updateAndClose = (e, postStatus) => {
    e.preventDefault();

    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      console.log("Updated and Closed");

      var formData = new FormData();

      // step 1
      formData.append("prefix", this.state.prefix);
      formData.append("firstName", this.state.firstName);
      formData.append("middleName", this.state.middleName);
      formData.append("lastName", this.state.lastName);
      formData.append("suffix", this.state.suffix);
      formData.append("gender", this.state.gender);
      formData.append("address", this.state.address);
      formData.append("town", this.state.town);
      formData.append("country", this.state.country);
      formData.append("county", this.state.county);
      formData.append("phoneNumber", this.state.phoneNumber);
      formData.append("email", this.state.email);
      formData.append("maritalStatus", this.state.maritalStatus);

      // step 2
      formData.append("wivesDetails", JSON.stringify(this.state.wivesDetails));

      // step 4
      formData.append("children", JSON.stringify(this.state.children));

      // step 5
      formData.append(
        "otherFamilyMembers",
        JSON.stringify(this.state.otherFamilyMembers)
      );

      // step 6
      formData.append(
        "guardianDetails",
        JSON.stringify(this.state.guardianDetails)
      );

      // step 7
      formData.append(
        "executorDetails",
        JSON.stringify(this.state.executorDetails)
      );
      formData.append("step7Question", this.state.step7Question);
      formData.append("addAltExec", this.state.addAltExec);
      formData.append("isRenumerated", this.state.isRenumerated);
      formData.append("execRenumeration", this.state.execRenumeration);

      // step 8
      formData.append(
        "beneficiaryAssets",
        JSON.stringify(this.state.beneficiaryAssets)
      );
      formData.append("beneficiary", this.state.beneficiary);
      formData.append("beneficiaryName", this.state.beneficiaryName);
      formData.append("beneficiaryAddress", this.state.beneficiaryAddress);
      formData.append("beneficiaryEmail", this.state.beneficiaryEmail);
      formData.append("beneficiaryPhone", this.state.beneficiaryPhone);
      formData.append("selectedChild", this.state.selectedChild);
      formData.append("selectedWife", this.state.selectedWife);

      // step 10
      formData.append(
        "priorityArray",
        JSON.stringify(this.state.priorityArray)
      );

      // step 11
      formData.append(
        "otherTransferBeneficiary",
        this.state.otherTransferBeneficiary
      );
      formData.append("otherGiftMadeTo", this.state.otherGiftMadeTo);
      formData.append("otherName", this.state.otherName);
      formData.append("otherRelationship", this.state.otherRelationship);
      formData.append("otherAddress", this.state.otherAddress);
      formData.append("otherContest", this.state.otherContest);
      formData.append("otherTrusteeName", this.state.otherTrusteeName);
      formData.append("otherTrusteeAdd", this.state.otherTrusteeAdd);

      // step 12
      formData.append("giftToPet", this.state.giftToPet);
      formData.append("petName", this.state.petName);
      formData.append("petDescription", this.state.petDescription);
      formData.append("petAmount", this.state.petAmount);
      formData.append("petCaretaker", this.state.petCaretaker);
      formData.append("petCareTakerName", this.state.petCareTakerName);
      formData.append("petAddress", this.state.petAddress);

      // step 13
      formData.append("burialDescription", this.state.burialDescription);

      // step 14
      formData.append(
        "additionalInstructions",
        JSON.stringify(this.state.additionalInstructions)
      );
      formData.append("isLiterate", this.state.isLiterate);
      formData.append("additionalName", this.state.additionalName);
      formData.append("additionalAddress", this.state.additionalAddress);

      // step 15
      formData.append(
        "signingDetails",
        JSON.stringify(this.state.signingDetails)
      );

      formData.append("userID", localStorage.getItem("id"));
      formData.append(
        "willID",
        parseURLParams(window.location.href).will_id[0]
      );

      axios
        .post(
          process.env.REACT_APP_API_URL + "/managewill/updateWill_muslim",
          formData
        )
        .then((response) => {
          if (response.data.msg === "Success") {
            if (postStatus === true) {
              window.location.href = "/products/managewill";
            }
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  render() {
    const { step } = this.state;
    const {
      prefix,
      firstName,
      middleName,
      lastName,
      suffix,
      gender,
      address,
      town,
      country,
      county,
      phoneNumber,
      email,
      maritalStatus,
      wivesDetails,
      children,
      otherFamilyMembers,
      guardianDetails,
      step7Question,
      executorDetails,
      addAltExec,
      isRenumerated,
      execRenumeration,
      beneficiary,
      beneficiaryName,
      beneficiaryAddress,
      beneficiaryEmail,
      beneficiaryPhone,
      selectedChild,
      selectedWife,
      beneficiaryAssets,
      priorityArray,
      otherTransferBeneficiary,
      otherGiftMadeTo,
      otherName,
      otherRelationship,
      otherAddress,
      otherContest,
      otherTrusteeName,
      otherTrusteeAdd,
      giftToPet,
      petName,
      petDescription,
      petAmount,
      petCaretaker,
      petCareTakerName,
      petAddress,
      burialDescription,
      additionalInstructions,
      isLiterate,
      additionalName,
      additionalAddress,
      signingDetails,
    } = this.state;

    const values = {
      prefix,
      firstName,
      middleName,
      lastName,
      suffix,
      gender,
      address,
      town,
      country,
      county,
      phoneNumber,
      email,
      maritalStatus,
      wivesDetails,
      children,
      otherFamilyMembers,
      guardianDetails,
      step7Question,
      executorDetails,
      addAltExec,
      isRenumerated,
      execRenumeration,
      beneficiary,
      beneficiaryName,
      beneficiaryAddress,
      beneficiaryEmail,
      beneficiaryPhone,
      selectedChild,
      selectedWife,
      beneficiaryAssets,
      priorityArray,
      otherTransferBeneficiary,
      otherGiftMadeTo,
      otherName,
      otherRelationship,
      otherAddress,
      otherContest,
      otherTrusteeName,
      otherTrusteeAdd,
      giftToPet,
      petName,
      petDescription,
      petAmount,
      petCaretaker,
      petCareTakerName,
      petAddress,
      burialDescription,
      additionalInstructions,
      isLiterate,
      additionalName,
      additionalAddress,
      signingDetails,
    };

    switch (step) {
      case 1:
        return (
          <Step1MuslimCodicil
            updateAndClose={this.updateAndClose}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            changeState={this.changeState}
            values={values}
          />
        );
      case 2:
        return (
          <Step2MuslimCodicil
            updateAndClose={this.updateAndClose}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            changeState={this.changeState}
            values={values}
          />
        );
      case 3:
        return (
          <Step4MuslimCodicil
            updateAndClose={this.updateAndClose}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            changeState={this.changeState}
            values={values}
          />
        );

      case 4:
        return (
          <Step5MuslimCodicil
            updateAndClose={this.updateAndClose}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            changeState={this.changeState}
            values={values}
          />
        );
      case 5:
        return (
          <Step6MuslimCodicil
            updateAndClose={this.updateAndClose}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            changeState={this.changeState}
            values={values}
          />
        );
      case 6:
        return (
          <Step7MuslimCodicil
            updateAndClose={this.updateAndClose}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            changeState={this.changeState}
            values={values}
          />
        );
      case 7:
        return (
          <Step8MuslimCodicil
            updateAndClose={this.updateAndClose}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            changeState={this.changeState}
            values={values}
          />
        );
      case 8:
        return (
          <Step10MuslimCodicil
            updateAndClose={this.updateAndClose}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            changeState={this.changeState}
            values={values}
          />
        );
      case 9:
        return (
          <Step11MuslimCodicil
            updateAndClose={this.updateAndClose}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            changeState={this.changeState}
            values={values}
          />
        );
      case 10:
        return (
          <Step12MuslimCodicil
            updateAndClose={this.updateAndClose}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            changeState={this.changeState}
            values={values}
          />
        );
      case 11:
        return (
          <Step13MuslimCodicil
            updateAndClose={this.updateAndClose}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            changeState={this.changeState}
            values={values}
          />
        );
      case 12:
        return (
          <Step14MuslimCodicil
            updateAndClose={this.updateAndClose}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            changeState={this.changeState}
            values={values}
          />
        );
      case 13:
        return (
          <Step15MuslimCodicil
            updateAndClose={this.updateAndClose}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            changeState={this.changeState}
            values={values}
          />
        );
    }
  }
}
