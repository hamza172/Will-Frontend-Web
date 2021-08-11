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

const ViewCodicilPDF = ({ history }) => {

  const [codicil, setCodicil] = useState({
    type: "",
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

  const [muslimWill, setMuslimWill] = useState({});

  useEffect(() => {

    axios.post(process.env.REACT_APP_API_URL + '/managewill/getcodicil', {
        codicilID: parseURLParams(window.location.href).codicil_id[0]
    })
    .then((response) => {
      if(response.data.codicil.type === "Standard") {
        setCodicil(response.data.codicil);
      }
      else if(response.data.codicil.type === "Muslim") {
        setMuslimWill(response.data.codicil);
      }
        
      setTimeout(() => {
        window.print();
      }, 1000)
        
    })
    .catch((error) => {
        console.log(error);
    });

  }, []);

  return (
    <div>

        {codicil.type === "Standard" &&
          <>
            {/* Personal Details */}
            <div>
                <h2>Personal Details</h2>            
                <p>Prefix: {codicil.personalDetails.prefix}</p>
                <p>First Name: {codicil.personalDetails.firstName}</p>
                <p>Middle Name: {codicil.personalDetails.middleName}</p>
                <p>Last Name: {codicil.personalDetails.lastName}</p>
                <p>Suffix: {codicil.personalDetails.suffix}</p>
                <p>Gender: {codicil.personalDetails.gender}</p>
                <p>Address: {codicil.personalDetails.address}</p>
                <p>Town: {codicil.personalDetails.town}</p>
                <p>Country: {codicil.personalDetails.country}</p>
                <p>County: {codicil.personalDetails.county}</p>
                <p>Phone Number: {codicil.personalDetails.telephone}</p>
                <p>Email: {codicil.personalDetails.email}</p>
                <p>Marital Status: {codicil.personalDetails.maritalStatus}</p>
            </div>        
            
            {/* Wives Details */}
            <div>
              <h2>Wives Details</h2>
              {codicil.wivesDetails.map((wive, index) => {
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
              {codicil.executorDetails.inputFields.map((exec, index) => {
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
              <p>Do you want to add alternate executor ? : {codicil.executorDetails.addAltExec}</p>
              <p>Will the executor be renumerated ? : {codicil.executorDetails.isRenumerated}</p>          
              <p>Executor Renumeration : {codicil.executorDetails.execRenumeration}</p>
            </div>

            {/* Children Details */}
            <div>
              <h2>Children Details</h2>
              {codicil.childrenDetails.map((child, index) => {
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
              {codicil.guardianDetails.map((guardian, index) => {
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
              {codicil.distributionDetails.wife ? <p>Wife: {codicil.distributionDetails.wife}</p> : <p></p>}
              {codicil.distributionDetails.child ? <p>Child: {codicil.distributionDetails.child}</p> : <p></p>}
              <p>Beneficiary: {codicil.distributionDetails.beneficiary}</p>
              <p>Full Name of Beneficiary: {codicil.distributionDetails.name}</p>
              <p>Address: {codicil.distributionDetails.add}</p>
              <p>Email: {codicil.distributionDetails.email}</p>
              <p>Phone Number: {codicil.distributionDetails.ph}</p>  
              <h5>Assets</h5>
              {codicil.distributionDetails.inputFields.map((asset, index) => {
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
              <p>Distribute equally to: {codicil.remainderDetails.distribute}</p>
              <p>Leave to Specific Individual: {codicil.remainderDetails.leaveTo}</p>
              {codicil.remainderDetails.name ? <p>Full Name: {codicil.remainderDetails.name}</p> : <p></p>}
              {codicil.remainderDetails.address ? <p>Address: {codicil.remainderDetails.address}</p> : <p></p>}
              <hr></hr>
            </div>

            {/* Other Matters */}
            <div>
              <h2>Other Matters</h2>
              <p>ransfer if a Beneficiary does not survive after 60 days: {codicil.otherDetails.transferBeneficiary}</p>
              <p>Gift made to Minor: {codicil.otherDetails.giftMadeTo}</p>
              {codicil.otherDetails.trusteeName ? <p>Full Name: {codicil.otherDetails.trusteeName}</p> : <p></p>}
              {codicil.otherDetails.trusteeAdd ? <p>Trustee Address: {codicil.otherDetails.trusteeAdd}</p> : <p></p>}
              <p>Name: {codicil.otherDetails.name}</p>
              <p>Relationship: {codicil.otherDetails.address}</p>
              <p>Address: {codicil.otherDetails.relationship}</p>
              <p>Restriction to contest: {codicil.otherDetails.contest}</p>
              <hr></hr>
            </div>

            {/* Pet Details */}
            <div>
              <h2>Pets Details</h2>
              <p>Any gift to Pet ? : {codicil.petDetails.giftToPet}</p>
              {codicil.petDetails.name ? <p>{codicil.petDetails.name}</p> : <p></p>}
              {codicil.petDetails.description ? <p>{codicil.petDetails.description}</p> : <p></p>}
              {codicil.petDetails.amount ? <p>{codicil.petDetails.amount}</p> : <p></p>}
              <p>Do you want executor to appoint a pet caretaker ? : {codicil.petDetails.caretaker}</p>
              {codicil.petDetails.careTakerName ? <p>CareTaker Name : {codicil.petDetails.careTakerName}</p> : <p></p>}
              {codicil.petDetails.address ? <p>Address : {codicil.petDetails.address}</p> : <p></p>}
              <hr></hr>
            </div>

            {/* Additional Instructions */}
            <div>
              <h2>Additional Instructions</h2>
              {codicil.additionalDetails.inputFields.map((d, index) => {
                return(
                  <div>
                    <p>Description : {d.description}</p>
                    <hr></hr>
                  </div>
                );
              })}
              <p>Is the Tester Literate ? : {codicil.additionalDetails.isLiterate}</p>
              <hr></hr>
            </div>

            {/* Signing Details */}
            <div>
              <h2>Signing Details</h2>
              {codicil.signingDetails.map((witness, index) => {
                return(
                  <div>
                    <p>Witness Name : {witness.name}</p>
                    <hr></hr>
                  </div>
                );
              })}
            </div>    
          </>
        }      

        {muslimWill.type === "Muslim" && 
          <>
            {/* Personal Details */}
            <div>
              <h2>Personal Details</h2>            
              <p>Prefix: {muslimWill.prefix}</p>
              <p>First Name: {muslimWill.firstName}</p>
              <p>Middle Name: {muslimWill.middleName}</p>
              <p>Last Name: {muslimWill.lastName}</p>
              <p>Suffix: {muslimWill.suffix}</p>
              <p>Gender: {muslimWill.gender}</p>
              <p>Address: {muslimWill.address}</p>
              <p>Town: {muslimWill.town}</p>
              <p>Country: {muslimWill.country}</p>
              <p>County: {muslimWill.county}</p>
              <p>Phone Number: {muslimWill.telephone}</p>
              <p>Email: {muslimWill.email}</p>
              <p>Marital Status: {muslimWill.maritalStatus}</p>
            </div>      

            {/* Wives Details */}
            <div>
              <h2>Wives Details</h2>
              {muslimWill.wivesDetails.map((wive, index) => {
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

            {/* Children Details */}
            <div>
              <h2>Children Details</h2>
              {muslimWill.children.map((child, index) => {
                return(
                  <div>
                    <p>Name: {child.name}</p>
                    <hr></hr>
                  </div>
                );
              })}
            </div>

            {/* Other Family Members */}
            <div>
              <h2>Other Family Members</h2>
              {muslimWill.otherFamilyMembers.map((other, index) => {
                return(
                  <div>
                    <p>Name: {other.name}</p>
                    <p>Address: {other.address}</p>
                    <p>Relationship: {other.relationship}</p>
                  </div>
                )
              })}
            </div>

            {/* Guardian Details */}
            <div>
              <h2>Guardian Details</h2>
              {muslimWill.guardianDetails.map((guardian, index) => {
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

            {/* Executor Details */}
            <div>
              <h2>Executor Details</h2>
              <p>Do you wish to leave gift for someone outside your family (Please note that maximum one-third of the total value of the estate can be shared outside of the Islamic law. Any Will now follow up normal Will probate process): {muslimWill.step7Question}</p>
              {muslimWill.step7Question === "Yes" &&
              <>
                {muslimWill.executorDetails.map((executor, index) => {
                  return(
                    <div>
                      <p>Name: {muslimWill.executorDetails.name}</p>
                      <p>Relationship: {muslimWill.executorDetails.relationship}</p>
                      <p>Address: {muslimWill.executorDetails.address}</p>
                      <p>Town: {muslimWill.executorDetails.town}</p>
                      <p>State: {muslimWill.executorDetails.state}</p>
                      <p>Email: {muslimWill.executorDetails.email}</p>
                      <p>Phone: {muslimWill.executorDetails.phone}</p>
                    </div>
                  )
                })}
              </>
              }
              <p>Do you want to add alternate executor?: {muslimWill.addAltExec}</p>
              <p>Will the executor be renumerated?: {muslimWill.isRenumerated}</p>
              <p>Executor Renumeration: {muslimWill.execRenumeration}</p>
            </div>

            {/* Charitable Giving and Distribution */}
            <div>
              <h2>Charitable Giving and Distribution</h2>
              <p>Beneficiary: {muslimWill.beneficiary}</p>
              {muslimWill.beneficiary === "Wife" && <><p>{muslimWill.selectedWife}</p></>}
              {muslimWill.beneficiary === "Child" && <><p>{muslimWill.selectedChild}</p></>}
              <p>Full Name of Beneficiary: {muslimWill.beneficiaryName}</p>
              <p>Address: {muslimWill.beneficiaryAddress}</p>
              <p>Email: {muslimWill.beneficiaryEmail}</p>
              <p>Phone Number: {muslimWill.beneficiaryPhone}</p>
              {muslimWill.beneficiaryAssets.map((asset, index) => {
                return(
                  <div>
                    <p>Asset Type: {asset.assetType}</p>
                    {asset.assetType === "Life Tenant of a property" && <><p>Who is the property due to after the death of life tenant?: {asset.tenant}</p></>}
                    <p>Description: {asset.desc}</p>
                    <p>Value / Amount: {asset.value}</p>
                  </div>
                )
              })}
            </div>

            {/* Allocation of Estate (In order of Priority) */}
            <div>
              <h2>Allocation of Estate (In order of Priority)</h2>
              <p>Please select of priority of this Will Allocation Group. The priority is defaulted as below but can be changed to suit your order of priority</p>
              {muslimWill.priorityArray.map((text, index) => {
                return(
                  <p>{index + 1}: {text.text}</p>
                )
              })}
            </div>

            {/* Other Matters */}
            <div>
              <h2>Other Matters</h2>
              <p>Transfer if a Beneficiary does not survive after 60 days: {muslimWill.otherTransferBeneficiary}</p>
              <p>Gift made to Minor: {muslimWill.otherGiftMadeTo}</p>
              {muslimWill.otherGiftMadeTo === "" && 
                <>
                <p>Trustee Full Name: {muslimWill.otherTrusteeName}</p>
                <p>Trustee Address: {muslimWill.otherTrusteeAdd}</p>
                </>
              }

              <p>Name: {muslimWill.otherName}</p>
              <p>Relationship: {muslimWill.otherRelationship}</p>
              <p>Address: {muslimWill.otherAddress}</p>
              <p>Restriction to contest - If any one contest what is given in the court, they should loose the will: {muslimWill.otherContest}</p>
            </div>

            {/* Pets */}
            <div>
              <h1>Pets</h1>
              <p>Any gift to Pet?: {muslimWill.giftToPet}</p>
              {muslimWill.giftToPet === "Yes" &&
                <>
                <p>Name: {muslimWill.petName}</p>
                <p>Description: {muslimWill.petDescription}</p>
                <p>Amount: {muslimWill.petAmount}</p>
                </>
              }
              <p>Do you want executor to appoint a pet caretaker?: {muslimWill.petCaretaker}</p>
              {muslimWill.petCaretaker === "Yes" &&
                <>
                <p>CareTaker Name: {muslimWill.petCareTakerName}</p>
                <p>Address: {muslimWill.petAddress}</p>
                </>
              }
            </div>

            {/* Burial Arrangements */}
            <div>
              <h2>Burial Arrangements</h2>
              <p>Description: {muslimWill.burialDescription}</p>
            </div>

            {/* Additional Instructions */}
            <div>
              <h2>Additional Instructions</h2>
              {muslimWill.additionalInstructions.map((desc, index) => {
                return(
                  <p>Description: {desc.desc}</p>
                )
              })}
              <p>Is the Tester Literate?: {muslimWill.isLiterate}</p>
              {muslimWill.isLiterate === "No" &&
                <>
                  <div>
                    <p>Name: {muslimWill.additionalName}</p>
                    <p>Address: {muslimWill.additionalAddress}</p>
                  </div>
                </>
              }
            </div>

            {/* Signing Details */}
            <div>
              <h2>Signing Details</h2>
              {muslimWill.signingDetails.map((details, index) => {
                return(
                  <p>Witness Name: {details.name}</p>
                )
              })}
            </div>
          </>
        }  

    </div>
  );
};

export default ViewCodicilPDF;
