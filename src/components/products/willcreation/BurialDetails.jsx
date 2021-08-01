import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import ScrollToMount from "./ScrollToMount";
import FormContainer from "./FormContainer";
import { saveBurialDetails } from "../../../actions/formActions";

const BurialDetails = ({ history }) => {
  const form = useSelector((state) => state.form);

  const { burialDetails } = form;

  const [description, setDescription] = useState(burialDetails.description);
  const [validated, setValidated] = useState();

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      e.preventDefault();
      dispatch(saveBurialDetails(description));
      window.location.href = "/willcreation/additional";
    }

    setValidated(true);
  };

  return (
    <FormContainer>
      <ScrollToMount />

      <h3>Burial Arrangements</h3>

      <Form noValidate validated={validated} onSubmit={submitHandler}>
        <Form.Group controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            required
            as="textarea"
            rows={10}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></Form.Control>
          <Form.Control.Feedback type="invalid">
            Please fill the required field.
          </Form.Control.Feedback>
        </Form.Group>

        <Button type="submit" variant="primary">
          Continue
        </Button>
      </Form>
    </FormContainer>
  );
};

export default BurialDetails;
