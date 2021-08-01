import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import ScrollToMount from "./ScrollToMount";
import FormContainer from "./FormContainer";
import { savePersonalDetails } from "../../../actions/formActions";

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
const [maritalStatus, setMaritalStatus] = useState(
personalDetails.maritalStatus
);

const [validated, setValidated] = useState(false);

const dispatch = useDispatch();

const submitHandler = (e) => {
const form = e.currentTarget;
if (form.checkValidity() === false) {
	e.preventDefault();
	e.stopPropagation();
} else {
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
	window.location.href = "/willcreation/wives";
}

setValidated(true);
};

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
          Save Progress & Continue
        </Button>
      </Form>
    </FormContainer>
  );
};

export default PersonalDetails;
