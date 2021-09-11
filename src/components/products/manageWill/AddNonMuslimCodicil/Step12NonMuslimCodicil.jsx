import React from "react";
import FormContainer from "../../willcreation/FormContainer";
import ScrollToMount from "./../../willcreation/ScrollToMount";
import { Form, Button } from "react-bootstrap";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";

const Step12NonMuslimCodicil = ({
  values,
  nextStep,
  prevStep,
  handleChange,
  changeState,
  updateAndClose,
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
      <h3>Step 12: Burial Arrangements</h3>

      <Form>
        <Form.Group controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={10}
            value={values.burialDesc}
            onChange={(e) => {
              handleChange("burialDesc", e);
            }}
          ></Form.Control>
        </Form.Group>
      </Form>
      <button className="btn btn-primary" onClick={Previous}>
        Prev
      </button>
      <button className="btn btn-primary" onClick={Continue}>
        Next
      </button>
      <br></br>
      <button
        className="btn btn-primary"
        onClick={(e) => {
          updateAndClose(e);
        }}
      >
        Update & Close
      </button>
    </FormContainer>
  );
};

export default Step12NonMuslimCodicil;
