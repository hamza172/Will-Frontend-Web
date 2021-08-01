import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import ScrollToMount from "./../willcreation/ScrollToMount";
import FormContainer from "./../willcreation/FormContainer";
import { createForm, savePetDetails, removeLatestWillFromLocalStorage } from "../../../actions/formActions";

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

const PetDetails = ({ history }) => {
  const form = useSelector((state) => state.form);

  const { petDetails } = form;

  const [giftToPet, setGift] = useState(petDetails.giftToPet);
  const [name, setName] = useState(petDetails.name);
  const [description, setDescription] = useState(petDetails.description);
  const [amount, setAmount] = useState(petDetails.amount);
  const [caretaker, setCaretaker] = useState(petDetails.caretaker);
  const [careTakerName, setCareTakerName] = useState();
  const [address, setAdd] = useState();

  const [validated, setValidated] = useState(false);
  const [showFields, setShowFields] = useState(false);
  const [showFields1, setShowFields1] = useState(false);

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      e.preventDefault();
      dispatch(
        savePetDetails({
          giftToPet,
          name,
          description,
          amount,          
          caretaker,
          careTakerName,
          address,
        })
      );
      window.location.href = "/managewill/burial?will_id=" + parseURLParams(window.location.href).will_id[0];
    }

    setValidated(true);
  };

  const handleChange = (e) => {
    setGift(e.target.value);

    if (e.target.value === "Yes") {
      setShowFields(true);
    } else {
      setShowFields(false);
    }
  };

  const handleChange1 = (e) => {
    setCaretaker(e.target.value);

    if (e.target.value === "Yes") {
      setShowFields1(true);
    } else {
      setShowFields1(false);
    }
  };

  useEffect(() => {
    axios.post('/managewill/getWill', {
        willID: parseURLParams(window.location.href).will_id[0]
    })
    .then((response) => {
        console.log(response.data.will.petDetails);
        setGift(response.data.will.petDetails.giftToPet);
        if(response.data.will.petDetails.giftToPet === "Yes") {
            setShowFields(true);
            setName(response.data.will.petDetails.name);
            setDescription(response.data.will.petDetails.description);
            setAmount(response.data.will.petDetails.amount);
        }
        else {
            setShowFields(false);
        }

        setCaretaker(response.data.will.petDetails.caretaker);
        if(response.data.will.petDetails.caretaker === "Yes") {
            setShowFields1(true);
            setCareTakerName(response.data.will.petDetails.careTakerName);
            setAdd(response.data.will.petDetails.address);
        }
        else {
            setShowFields1(false);
        }
    })
    .catch((error) => {
        console.log(error);
    });
    }, []);

  return (
    <FormContainer>
      <ScrollToMount />

      <h3>Step 12: Pets</h3>

      <Form noValidate validated={validated} onSubmit={submitHandler}>
        <Form.Group controlId="giftToPet">
          <Form.Label>Any gift to Pet?</Form.Label>
          <Form.Control
            required
            as="select"
            value={giftToPet}
            onChange={handleChange}
          >
            <option disabled selected value="">
              [Please select one]
            </option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </Form.Control>
        </Form.Group>

        {showFields && (
          <>
            <Form.Group controlId="name">
              <Form.Label>Name </Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter  Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
              <Form.Control.Feedback type="invalid">
                Please fill the required field.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                as="textarea"
                rows={5}
                required
                placeholder="Enter Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></Form.Control>
              <Form.Control.Feedback type="invalid">
                Please fill the required field.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="amount">
              <Form.Label>Amount</Form.Label>
              <Form.Control
                type="number"
                required
                placeholder="Enter Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              ></Form.Control>
              <Form.Control.Feedback type="invalid">
                Please fill the required field.
              </Form.Control.Feedback>
            </Form.Group>
          </>
        )}

        <Form.Group controlId="caretaker">
          <Form.Label>
            Do you want executor to appoint a pet caretaker?
          </Form.Label>
          <Form.Control
            required
            as="select"
            value={caretaker}
            onChange={handleChange1}
          >
            <option selected disabled value="">
              [Please select one]
            </option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </Form.Control>
        </Form.Group>

        {showFields1 && (
          <>
            <Form.Group controlId="careTakerName">
              <Form.Label>CareTaker Name </Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter CareTaker Name"
                value={careTakerName}
                onChange={(e) => setCareTakerName(e.target.value)}
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
                onChange={(e) => setAdd(e.target.value)}
              ></Form.Control>
              <Form.Control.Feedback type="invalid">
                Please fill the required field.
              </Form.Control.Feedback>
            </Form.Group>
          </>
        )}

          <Button
            className="mt-5 mb-5 mr-5"
            variant="contained"
            color="primary"
            onClick={() => {
              window.location.href = "/managewill/others?will_id=" + parseURLParams(window.location.href).will_id[0];
            }}
          >
          Back
        </Button>
        <Button type="submit" variant="primary">
          Update & Continue
        </Button>

        <a className="btn btn-primary ml-4" onClick={() => {
         dispatch(
          savePetDetails({
            giftToPet,
            name,
            description,
            amount,          
            caretaker,
            careTakerName,
            address,
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
        console.log("Success");
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

export default PetDetails;
