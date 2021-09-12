import React, { useState } from "react";
import FormContainer from "../../willcreation/FormContainer";
import { Form } from "react-bootstrap";

import Button from "@material-ui/core/Button";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";

const Step4MuslimCodicil = ({
  values,
  nextStep,
  prevStep,
  handleChange,
  changeState,
  updateAndClose,
  onFileChange,
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
      <h4 className="mb-5"> Step 4: Children</h4>

      <Form>
        {[...Array(values.children.length)].map((e, i) => (
          <div key={i + 1}>
            <Form.Group controlId="name">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={values.children[i].name}
                onChange={(e) => {
                  values.children[i].name = e.target.value;
                  changeState(values.children[i].name);
                }}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="dob">
              <Form.Label>Date Of Birth</Form.Label>
              <Form.Control
                type="date"
                name="dob"
                value={values.children[i].dob}
                onChange={(e) => {
                  values.children[i].dob = e.target.value;
                  changeState(values.children[i].dob);
                }}
              ></Form.Control>
            </Form.Group>

            <Button
              className="mr-3"
              color="primary"
              variant="contained"
              disabled={values.children.length === 1}
              onClick={(e) => {
                var temp = [...values.children];
                var foo = -1;
                for (var j = 0; j < values.children.length; j++) {
                  if (i + 1 === values.children[j].index) {
                    foo = i;
                    break;
                  }
                }
                temp.splice(foo, 1);
                changeState("children", temp);
              }}
            >
              Delete
              <RemoveIcon />
            </Button>

            <Button
              variant="contained"
              color="primary"
              onClick={(e) => {
                e.preventDefault();
                var temp = [...values.children];
                temp.push({
                  index: values.children.length + 1,
                  name: "",
                  dob: "",
                });
                changeState("children", temp);
              }}
            >
              Add More
              <AddIcon />
            </Button>

            <hr
              style={{
                marginBottom: "3rem",
                marginTop: "3rem",
                border: "1px solid #000",
              }}
            ></hr>
          </div>
        ))}

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
      </Form>
    </FormContainer>
  );
};

export default Step4MuslimCodicil;
