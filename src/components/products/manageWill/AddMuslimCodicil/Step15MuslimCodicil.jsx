import React, { useState } from "react";
import FormContainer from "../../willcreation/FormContainer";
import { Form } from "react-bootstrap";

import Button from "@material-ui/core/Button";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";

const Step15MuslimCodicil = ({
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
      <h4 className="mb-5">Step 15: Signing Details</h4>

      <Form>
        {[...Array(values.signingDetails.length)].map((e, i) => (
          <div key={i + 1}>
            <Form.Group controlId="name">
              <Form.Label> Witness Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={values.signingDetails[i].name}
                onChange={(e) => {
                  values.signingDetails[i].name = e.target.value;
                  changeState(values.signingDetails[i].name);
                }}
              ></Form.Control>
            </Form.Group>

            <Button
              className="mr-3"
              color="primary"
              variant="contained"
              disabled={values.signingDetails.length === 2}
              onClick={(e) => {
                var temp = [...values.signingDetails];
                var foo = -1;
                for (var j = 0; j < values.signingDetails.length; j++) {
                  if (i + 1 === values.signingDetails[j].index) {
                    foo = i;
                    break;
                  }
                }
                temp.splice(foo, 1);
                changeState("signingDetails", temp);
              }}
            >
              Delete
              <RemoveIcon />
            </Button>

            <Button
              disabled={values.signingDetails.length === 4}
              variant="contained"
              color="primary"
              onClick={(e) => {
                console.log(values.signingDetails);
                e.preventDefault();
                var temp = [...values.signingDetails];
                temp.push({
                  index: values.signingDetails.length + 1,
                  assetType: "",
                  desc: "",
                  value: "",
                  tenant: "",
                });
                changeState("signingDetails", temp);
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
      </Form>
      <button className="btn btn-primary" onClick={Previous}>
        Prev
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

export default Step15MuslimCodicil;
