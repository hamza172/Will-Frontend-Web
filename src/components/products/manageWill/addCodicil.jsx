import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import ScrollToMount from "./../willcreation/ScrollToMount";
import FormContainer from "./../willcreation/FormContainer";
import { savePersonalDetails, removeLatestWillFromLocalStorage } from "../../../actions/formActions";
import { useEffect } from "react";
import axios from "axios";

const PersonalDetails = ({ history }) => {
const form = useSelector((state) => state.form);

const { personalDetails } = form;

const [prefix, setPrefix] = useState(personalDetails.prefix);
const [firstName, setFirstName] = useState(personalDetails.firstName);
const [lastName, setLastName] = useState(personalDetails.lastName);
const [middleName, setMiddleName] = useState(personalDetails.middleName);
const [suffix, setSuffix] = useState(personalDetails.suffix);
const [address, setAdd] = useState(personalDetails.address);
const [town, setTown] = useState(personalDetails.town);
const [county, setCounty] = useState(personalDetails.county);
const [country, setCountry] = useState(personalDetails.country);

const [telephone, setTel] = useState(personalDetails.telephone);
const [email, setEmail] = useState(personalDetails.email);
const [gender, setGender] = useState(personalDetails.gender);
const [maritalStatus, setMaritalStatus] = useState(personalDetails.maritalStatus);

const [validated, setValidated] = useState(false);

const dispatch = useDispatch();

const submitHandler = (e) => {
  const form = e.currentTarget;
  if (form.checkValidity() === false) {
	  e.preventDefault();
	  e.stopPropagation();
  }
  else {
	  e.preventDefault();
	  dispatch(
      savePersonalDetails({
        prefix,
        firstName,
        lastName,
        middleName,
        gender,
        address,
        town,
        county,
        telephone,
        email,
        suffix,
        country,
        maritalStatus,
      })
	  );
	window.location.href = "/managewill/wives?will_id=" + parseURLParams(window.location.href).will_id[0];
}
setValidated(true);
};

useEffect(() => {

    axios.post('/managewill/getWill', {
        willID: parseURLParams(window.location.href).will_id[0]
    })
    .then((response) => {

        // Set all the data in Local Storage
          // Set Personal Detail
          localStorage.setItem('personalDetails', JSON.stringify(
            response.data.will.personalDetails
          ))

          // Set Wives Details
          localStorage.setItem('wivesDetails', JSON.stringify(
            response.data.will.wivesDetails
          ))

          // Set Executor Details
          localStorage.setItem('executorDetails', JSON.stringify(
            response.data.will.executorDetails
          ))

          // Set Children Details
          localStorage.setItem('childrenDetails', JSON.stringify(
            response.data.will.childrenDetails
          ))

          // Set Guardian Details
          localStorage.setItem('guardianDetails', JSON.stringify(
            response.data.will.guardianDetails
          ))

          // Set Distribution Details
          localStorage.setItem('distributionDetails', JSON.stringify(
            response.data.will.distributionDetails
          ))

          // Set Remainder Details
          localStorage.setItem('remainderDetails', JSON.stringify(
            response.data.will.remainderDetails
          ))

          // Set Other's Details
          localStorage.setItem('otherDetails', JSON.stringify(
            response.data.will.otherDetails
          ))

          // Set Pet Details
          localStorage.setItem('petDetails', JSON.stringify(
            response.data.will.petDetails
          ))

          // Set Burial Details
          // localStorage.setItem('burialDetails', JSON.stringify(data))

          // Set Adiiditional Details
          localStorage.setItem('additionalDetails', JSON.stringify(
            response.data.will.additionalDetails
          ))

          // Set Signing Details
          localStorage.setItem('signingDetails', JSON.stringify(
            response.data.will.signingDetails
          ))

          setPrefix(response.data.will.personalDetails.prefix);
          setFirstName(response.data.will.personalDetails.firstName);
          setLastName(response.data.will.personalDetails.lastName);
          setMiddleName(response.data.will.personalDetails.middleName);
          setGender(response.data.will.personalDetails.gender);
          setAdd(response.data.will.personalDetails.address);
          setTown(response.data.will.personalDetails.town);
          setCounty(response.data.will.personalDetails.county);
          setCountry(response.data.will.personalDetails.country);
          setTel(response.data.will.personalDetails.telephone);
          setEmail(response.data.will.personalDetails.email);
          setSuffix(response.data.will.personalDetails.suffix);
          setMaritalStatus(response.data.will.personalDetails.maritalStatus);
          setValidated(true);
    })
    .catch((error) => {
        console.log(error);
    });
}, []);

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

  return (
    <FormContainer>
      <ScrollToMount />

      <h3>Step 2: Personal Details</h3>

      <Form noValidate validated={validated} onSubmit={submitHandler}>
        <Form.Group controlId="prefix">
          <Form.Label>Prefix </Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter Prefix"
            value={prefix}
            onChange={(e) => setPrefix(e.target.value)}
          ></Form.Control>
          <Form.Control.Feedback type="invalid">
            Please fill the required field.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="firstName">
          <Form.Label>First Name </Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          ></Form.Control>
          <Form.Control.Feedback type="invalid">
            Please fill the required field.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="middleName">
          <Form.Label>Middle Name </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Middle Name"
            value={middleName}
            onChange={(e) => setMiddleName(e.target.value)}
          ></Form.Control>
          <Form.Control.Feedback type="invalid">
            Please fill the required field.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="lastName">
          <Form.Label>Last Name </Form.Label>
          <Form.Control
            type="text"
            required
            placeholder="Enter Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          ></Form.Control>
          <Form.Control.Feedback type="invalid">
            Please fill the required field.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="suffix">
          <Form.Label>Suffix </Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter Suffix"
            value={suffix}
            onChange={(e) => setSuffix(e.target.value)}
          ></Form.Control>
          <Form.Control.Feedback type="invalid">
            Please fill the required field.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="gender">
          <Form.Label>Gender </Form.Label>
          <Form.Control
            as="select"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option>[Please select one]</option>
            <option value="Female">Female</option>
            <option value="Male">Male</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="address">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            required
            value={address}
            onChange={(e) => setAdd(e.target.value)}
          ></Form.Control>
          <Form.Control.Feedback type="invalid">
            Please fill the required field.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="town">
          <Form.Label>Town</Form.Label>
          <Form.Control
            type="text"
            required
            value={town}
            onChange={(e) => setTown(e.target.value)}
          ></Form.Control>
          <Form.Control.Feedback type="invalid">
            Please fill the required field.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="country">
          <Form.Label>Country</Form.Label>
          <Form.Control
            type="text"
            required
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          ></Form.Control>
          <Form.Control.Feedback type="invalid">
            Please fill the required field.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="county">
          <Form.Label>County</Form.Label>
          <Form.Control
            type="text"
            required
            value={county}
            onChange={(e) => setCounty(e.target.value)}
          ></Form.Control>
          <Form.Control.Feedback type="invalid">
            Please fill the required field.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="telephone">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="number"
            required
            value={telephone}
            onChange={(e) => setTel(e.target.value)}
          ></Form.Control>
          <Form.Control.Feedback type="invalid">
            Please fill the required field.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
          <Form.Control.Feedback type="invalid">
            Please fill the required field.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="maritalStatus">
          <Form.Label>Marital Status</Form.Label>
          <Form.Control
            as="select"
            required
            value={maritalStatus}
            onChange={(e) => setMaritalStatus(e.target.value)}
          >
            <option disabled selected value="">
              [Please Select One]
            </option>
            <option value="single">Single</option>
            <option value="married">Married</option>
            <option value="divorced">Divorced</option>
            <option value="widow">Widow</option>
          </Form.Control>
          <Form.Control.Feedback type="invalid">
            Please fill the required field.
          </Form.Control.Feedback>
        </Form.Group>

        <Button type="submit" variant="primary">
          Update & Continue
        </Button>

        <a className="btn btn-primary ml-4" onClick={() => {

          dispatch(
            savePersonalDetails({
              prefix,
              firstName,
              lastName,
              middleName,
              gender,
              address,
              town,
              county,
              telephone,
              email,
              suffix,
              country,
              maritalStatus,
            })
            );

          axios.post('/managewill/updateWill', {
            willID: parseURLParams(window.location.href).will_id[0],
            executorDetails : localStorage.getItem("executorDetails"),
            distributionDetails : localStorage.getItem("distributionDetails"),
            additionalDetails : localStorage.getItem("additionalDetails"),
            wivesDetails : localStorage.getItem("wivesDetails"),
            childrenDetails : localStorage.getItem("childrenDetails"),
            guardianDetails : localStorage.getItem("guardianDetails"),
            signingDetails : localStorage.getItem("signingDetails"),
            personalDetails : localStorage.getItem("personalDetails"),
            remainderDetails : localStorage.getItem("remainderDetails"),
            otherDetails : localStorage.getItem("otherDetails"),
            petDetails : localStorage.getItem("petDetails"),
            userID: localStorage.getItem("id"),
          })
          .then((response) => {
            removeLatestWillFromLocalStorage();
            window.location.href = "/products/managewill";
          })
          .catch((error) => {
            console.log(error);
          });
        }}>
          Update And Close
        </a>

      </Form>
    </FormContainer>
  );
};

export default PersonalDetails;
