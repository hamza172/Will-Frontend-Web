import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import ScrollToMount from "./ScrollToMount";
import FormContainer from "./FormContainer";
import { createForm, saveOtherDetails } from "../../../actions/formActions";

const OtherDetails = ({ history }) => {
  const form = useSelector((state) => state.form);

  const { otherDetails } = form;

  const [transferBeneficiary, setBeneficiary] = useState(
    otherDetails.transferBeneficiary
  );
  const [giftMadeTo, setGift] = useState(otherDetails.giftMadeTo);
  const [trusteeName, setTrusteeName] = useState(otherDetails.trusteeName);
  const [trusteeAdd, setTrusteeAdd] = useState(otherDetails.trusteeAdd);
  const [name, setName] = useState(otherDetails.name);
  const [relationship, setRelationship] = useState(otherDetails.relationship);
  const [address, setAddress] = useState(otherDetails.address);
  const [contest, setContest] = useState(otherDetails.contest);

  const [validated, setValidated] = useState(false);
  const [showFields, setShowFields] = useState(false);

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    console.log("submit");
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      e.preventDefault();
      dispatch(
        saveOtherDetails({
          transferBeneficiary,
          giftMadeTo,
          trusteeAdd,
          trusteeName,
          name,
          address,
          relationship,
          contest,
        })
      );
      window.location.href = "/willcreation/pet";
    }

    setValidated(true);
  };

  const handleChange = (e) => {
    setGift(e.target.value);

    if (e.target.value === "Name Trustee") {
      setShowFields(true);
    } else {
      setShowFields(false);
    }
  };

  return (
    <FormContainer>
      <ScrollToMount />

      <h3>Step 11: Other Matters</h3>

      <Form noValidate validated={validated} onSubmit={submitHandler}>
        <Form.Group controlId="transferBeneficiary">
          <Form.Label>
            Transfer if a Beneficiary does not survive after 60 days{" "}
          </Form.Label>
          <Form.Control
            required
            as="select"
            value={transferBeneficiary}
            onChange={(e) => setBeneficiary(e.target.value)}
          >
            <option disabled selected value="">
              [Please select one]
            </option>
            <option value="To their children (if any)">
              To their children (if any)
            </option>
            <option value="Added to estate">Added to estate</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="giftMadeTo">
          <Form.Label>Gift made to Minor </Form.Label>
          <Form.Control
            required
            as="select"
            value={giftMadeTo}
            onChange={handleChange}
          >
            <option disabled selected value="">
              [Please select one]
            </option>
            <option value="Pass on to their parents until 18">
              Pass on to their parents until 18
            </option>
            <option value="Name Trustee">Name Trustee</option>
          </Form.Control>
        </Form.Group>

        {showFields && (
          <>
            <Form.Group controlId="trusteeName">
              <Form.Label>Full Name </Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter Trustee Full Name"
                value={trusteeName}
                onChange={(e) => setTrusteeName(e.target.value)}
              ></Form.Control>
              <Form.Control.Feedback type="invalid">
                Please fill the required field.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="trusteeAdd">
              <Form.Label>Trustee Address</Form.Label>
              <Form.Control
                type="text"
                required
                placeholder="Enter Address"
                value={trusteeAdd}
                onChange={(e) => setTrusteeAdd(e.target.value)}
              ></Form.Control>
              <Form.Control.Feedback type="invalid">
                Please fill the required field.
              </Form.Control.Feedback>
            </Form.Group>
          </>
        )}

        <Form.Label>
          Transfer if no beneificary or their children survives you{" "}
        </Form.Label>

        <Form.Group controlId="name">
          <Form.Label>Name </Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
          <Form.Control.Feedback type="invalid">
            Please fill the required field.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="relationship">
          <Form.Label>Relationship </Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter Relationship"
            value={relationship}
            onChange={(e) => setRelationship(e.target.value)}
          ></Form.Control>
          <Form.Control.Feedback type="invalid">
            Please fill the required field.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="address">
          <Form.Label>Address </Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          ></Form.Control>
          <Form.Control.Feedback type="invalid">
            Please fill the required field.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="contest">
          <Form.Label>
            Restriction to contest - If any one contest what is given in the
            court, they should loose the will
          </Form.Label>
          <Form.Control
            required
            as="select"
            value={contest}
            onChange={(e) => setContest(e.target.value)}
          >
            <option disabled selected value="">
              [Please select one]
            </option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </Form.Control>
        </Form.Group>

        <Button type="submit" variant="primary">
          Continue
        </Button>
      </Form>
    </FormContainer>
  );
};

export default OtherDetails;
