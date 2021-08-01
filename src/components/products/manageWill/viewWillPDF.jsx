import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import ScrollToMount from "../willcreation/ScrollToMount";
import FormContainer from "../willcreation/FormContainer";
import { savePersonalDetails } from "../../../actions/formActions";
import { useEffect } from "react";
import axios from "axios";

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

const ViewWillPDF = ({ history }) => {

  const [will, setWill] = useState({
    personalDetails: [],
    wivesDetails: [],
    executorDetails: {
      inputFields: []
    },
    childrenDetails: [],
    guardianDetails: [],
    distributionDetails: {
      inputFields: []
    },
    remainderDetails: {},
    otherDetails: {},
    petDetails: {},
    additionalDetails: {
      inputFields: []
    },
    signingDetails: [],
  });

  useEffect(() => {

    axios.post('/managewill/getWill', {
        willID: parseURLParams(window.location.href).will_id[0]
    })
    .then((response) => {
      setWill(response.data.will);
      window.print();
    })
    .catch((error) => {
        console.log(error);
    });
  }, []);

  return (
    <div>

        {/* Personal Details */}
        <div>
            <h2>Personal Details</h2>            
            <p>Prefix: {will.personalDetails.prefix}</p>
            <p>First Name: {will.personalDetails.firstName}</p>
            <p>Middle Name: {will.personalDetails.middleName}</p>
            <p>Last Name: {will.personalDetails.lastName}</p>
            <p>Suffix: {will.personalDetails.suffix}</p>
            <p>Gender: {will.personalDetails.gender}</p>
            <p>Address: {will.personalDetails.address}</p>
            <p>Town: {will.personalDetails.town}</p>
            <p>Country: {will.personalDetails.country}</p>
            <p>County: {will.personalDetails.county}</p>
            <p>Phone Number: {will.personalDetails.telephone}</p>
            <p>Email: {will.personalDetails.email}</p>
            <p>Marital Status: {will.personalDetails.maritalStatus}</p>
        </div>        
        
        {/* Wives Details */}
        <div>
          <h2>Wives Details</h2>
          {will.wivesDetails.map((wive, index) => {
            return(
              <div>
                <p>Wive Name: {wive.name}</p>
                <p>Wive DOB: {wive.dob}</p>
                <p>Wive Address: {wive.address}</p>
                <hr></hr>
              </div>              
            );
          })}
        </div>

        {/* Executor Details */}
        <div>
          <h2>Executor Details</h2>
          {will.executorDetails.inputFields.map((exec, index) => {
            return(
              <div>
                <p>Full Name of Executor: {exec.name}</p>
                <p>Relationship with Executor: {exec.relationship}</p>
                <p>Address: {exec.address}</p>
                <p>Town: {exec.town}</p>
                <p>State: {exec.state}</p>
                <p>Email: {exec.email}</p>
                <p>Phone Number: {exec.ph}</p>
                <hr></hr>
              </div>              
            );
          })}
          <p>Do you want to add alternate executor ? : {will.executorDetails.addAltExec}</p>
          <p>Will the executor be renumerated ? : {will.executorDetails.isRenumerated}</p>          
          <p>Executor Renumeration : {will.executorDetails.execRenumeration}</p>
        </div>

        {/* Children Details */}
        <div>
          <h2>Children Details</h2>
          {will.childrenDetails.map((child, index) => {
            return(
              <div>
                <p>Name: {child.name}</p>
                <hr></hr>
              </div>
            );
          })}
        </div>

        {/* Guardian Details */}
        <div>
          <h2>Guardian Details</h2>
          {will.guardianDetails.map((guardian, index) => {
            return(
              <div>
                <p>Full Name of Guardian: {guardian.name}</p>
                <p>Relationship with Executor: {guardian.relationship}</p>
                <p>Address: {guardian.address}</p>
                <p>Town: {guardian.town}</p>
                <p>Country: {guardian.country}</p>
                <hr></hr>
              </div>
            );
          })}
        </div>

        {/* Distribution Details */}
        <div>
          <h2>Distribution Details</h2>
          {will.distributionDetails.wife ? <p>Wife: {will.distributionDetails.wife}</p> : <p></p>}
          {will.distributionDetails.child ? <p>Child: {will.distributionDetails.child}</p> : <p></p>}
          <p>Beneficiary: {will.distributionDetails.beneficiary}</p>
          <p>Full Name of Beneficiary: {will.distributionDetails.name}</p>
          <p>Address: {will.distributionDetails.add}</p>
          <p>Email: {will.distributionDetails.email}</p>
          <p>Phone Number: {will.distributionDetails.ph}</p>  
          <h5>Assets</h5>
          {will.distributionDetails.inputFields.map((asset, index) => {
            return(
              <div>
                <p>Asset Type: {asset.type}</p>
                <p>Description: {asset.description}</p>
                <p>Value / Amount: {asset.amount}</p>
                <hr></hr>
              </div>
            );
          })}
        </div>

        {/* Remainder of the Estate */}
        <div>
          <h2>Remainder of the Estate</h2>
          <p>Distribute equally to: {will.remainderDetails.distribute}</p>
          <p>Leave to Specific Individual: {will.remainderDetails.leaveTo}</p>
          {will.remainderDetails.name ? <p>Full Name: {will.remainderDetails.name}</p> : <p></p>}
          {will.remainderDetails.address ? <p>Address: {will.remainderDetails.address}</p> : <p></p>}
          <hr></hr>
        </div>

        {/* Other Matters */}
        <div>
          <h2>Other Matters</h2>
          <p>ransfer if a Beneficiary does not survive after 60 days: {will.otherDetails.transferBeneficiary}</p>
          <p>Gift made to Minor: {will.otherDetails.giftMadeTo}</p>
          {will.otherDetails.trusteeName ? <p>Full Name: {will.otherDetails.trusteeName}</p> : <p></p>}
          {will.otherDetails.trusteeAdd ? <p>Trustee Address: {will.otherDetails.trusteeAdd}</p> : <p></p>}
          <p>Name: {will.otherDetails.name}</p>
          <p>Relationship: {will.otherDetails.address}</p>
          <p>Address: {will.otherDetails.relationship}</p>
          <p>Restriction to contest: {will.otherDetails.contest}</p>
          <hr></hr>
        </div>

        {/* Pet Details */}
        <div>
          <h2>Pets Details</h2>
          <p>Any gift to Pet ? : {will.petDetails.giftToPet}</p>
          {will.petDetails.name ? <p>{will.petDetails.name}</p> : <p></p>}
          {will.petDetails.description ? <p>{will.petDetails.description}</p> : <p></p>}
          {will.petDetails.amount ? <p>{will.petDetails.amount}</p> : <p></p>}
          <p>Do you want executor to appoint a pet caretaker ? : {will.petDetails.caretaker}</p>
          {will.petDetails.careTakerName ? <p>CareTaker Name : {will.petDetails.careTakerName}</p> : <p></p>}
          {will.petDetails.address ? <p>Address : {will.petDetails.address}</p> : <p></p>}
          <hr></hr>
        </div>

        {/* Additional Instructions */}
        <div>
          <h2>Additional Instructions</h2>
          {will.additionalDetails.inputFields.map((d, index) => {
            return(
              <div>
                <p>Description : {d.description}</p>
                <hr></hr>
              </div>
            );
          })}
          <p>Is the Tester Literate ? : {will.additionalDetails.isLiterate}</p>
          <hr></hr>
        </div>

        {/* Signing Details */}
        <div>
          <h2>Signing Details</h2>
          {will.signingDetails.map((witness, index) => {
            return(
              <div>
                <p>Witness Name : {witness.name}</p>
                <hr></hr>
              </div>
            );
          })}
        </div>

    </div>
  );
};

export default ViewWillPDF;
