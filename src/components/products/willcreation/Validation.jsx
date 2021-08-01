import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import * as auth from "../../../services/authService";
import ScrollToMount from "./ScrollToMount";
import FormContainer from "./FormContainer";
import { createForm } from "../../../actions/formActions";
import axios from "axios";

const Validation = ({ history }) => {
  const form = useSelector((state) => state.form);

  const {
    personalDetails,
    wivesDetails,
    executorDetails,
    childrenDetails,
    distributionDetails,
    remainderDetails,
    otherDetails,
    petDetails,
    burialDetails,
    additionalDetails,
    signingDetails,
    guardianDetails,
  } = form;

  const [file1, setFile1] = useState();
  const [file2, setFile2] = useState();
  const [file3, setFile3] = useState();

  const dispatch = useDispatch();
  const formCreate = useSelector((state) => state.final);
  const { success } = formCreate;

  useEffect(() => {
    if (success) {
      history.push("/success");
    }
  }, [history, success]);

  const submitHandler = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("selfies", file1);
    data.append("selfies", file2);
    data.append("selfies", file3);
    data.append("personalDetails", JSON.stringify(personalDetails));
    data.append("executorDetails", JSON.stringify(executorDetails));
    data.append("wivesDetails", JSON.stringify(wivesDetails));
    data.append("childrenDetails", JSON.stringify(childrenDetails));
    data.append("distributionDetails", JSON.stringify(distributionDetails));
    data.append("remainderDetails", JSON.stringify(remainderDetails));
    data.append("otherDetails", JSON.stringify(otherDetails));
    data.append("petDetails", JSON.stringify(petDetails));
    data.append("burialDetails", JSON.stringify(burialDetails));
    data.append("signingDetails", JSON.stringify(signingDetails));
    data.append("guardianDetails", JSON.stringify(guardianDetails));
    data.append("additionalDetails", JSON.stringify(additionalDetails));
    data.append("userID", localStorage.getItem("id"));

    // await axios.post('/willcreation/createwill', data);

    // console.log(data.get("userID"));
    dispatch(createForm(data));
  };

  return (
    <FormContainer>
      <ScrollToMount />

      <h3>Validation</h3>

      <Form onSubmit={submitHandler}>
        <Form.Group controlId="file1">
          <Form.Label>Selfie of the person that prepared </Form.Label>
          <Form.Control
            type="file"
            onChange={(e) => setFile1(e.target.files[0])}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="file2">
          <Form.Label>Selfie of the person that read </Form.Label>
          <Form.Control
            type="file"
            onChange={(e) => setFile2(e.target.files[0])}
          ></Form.Control>
          <Form.Control.Feedback type="invalid">
            Please fill the required field.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="file3">
          <Form.Label>Selfie of Testator</Form.Label>
          <Form.Control
            type="file"
            onChange={(e) => setFile3(e.target.files[0])}
          ></Form.Control>
          <Form.Control.Feedback type="invalid">
            Please fill the required field.
          </Form.Control.Feedback>
        </Form.Group>

        <Button type="submit" variant="primary">
          Submit Form
        </Button>
      </Form>
    </FormContainer>
  );
};

export default Validation;
