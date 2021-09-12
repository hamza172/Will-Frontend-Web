import React, { useState } from "react";
import FormContainer from "../FormContainer";
import { Form } from "react-bootstrap";

const Step13Muslim = ({
  nextStep,
  prevStep,
  handleChange,
  changeState,
  values,
}) => {
  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };

  const Previous = (e) => {
    e.preventDefault();
    prevStep();
  };

  return (
    <FormContainer>
      <h3>Step 13: Burial Arrangements</h3>

      <Form>
        <Form.Group controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={10}
            value={values.burialDescription}
            onChange={(e) => handleChange("burialDescription", e)}
          ></Form.Control>
        </Form.Group>
      </Form>
      <button className="btn btn-primary" onClick={Previous}>
        Prev
      </button>
      <button className="btn btn-primary" onClick={Continue}>
        Next
      </button>
    </FormContainer>
  );
};

export default Step13Muslim;
