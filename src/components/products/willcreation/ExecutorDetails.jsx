import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import { Form } from "react-bootstrap";
import { saveExecutorDetails } from "../../../actions/formActions";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import { makeStyles } from "@material-ui/core/styles";
import FormContainer from "./FormContainer";
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  button: {
    margin: theme.spacing(1),
  },
}));

const ExecutorDetails = () => {
  const dispatch = useDispatch();

  const classes = useStyles();
  const [inputFields, setInputFields] = useState([
    {
      id: uuidv4(),
      name: "",
      relationship: "",
      address: "",
      town: "",
      state: "",
      email: "",
      ph: "",
    },
  ]);
  const [isRenumerated, setIsRenumerated] = useState();
  const [addAltExec, setAddAltExec] = useState();
  const [execRenumeration, setExecRenumeration] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      saveExecutorDetails({
        inputFields,
        isRenumerated,
        addAltExec,
        execRenumeration,
      })
    );

    window.location = "/willcreation/children";
  };
  const handleChangeInput = (id, event) => {
    const newInputFields = inputFields.map((i) => {
      if (id === i.id) {
        i[event.target.name] = event.target.value;
      }
      return i;
    });

    setInputFields(newInputFields);
  };
  const handleAddFields = () => {
    setInputFields([
      ...inputFields,
      {
        id: uuidv4(),
        name: "",
        relationship: "",
        address: "",
        town: "",
        state: "",
        email: "",
        ph: "",
      },
    ]);
  };

  const handleRemoveFields = (id) => {
    const values = [...inputFields];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    setInputFields(values);
  };

  return (
    <FormContainer>
      <h4 className="mb-5"> Step4: Executor Details</h4>

      <Form.Label
        as="legend"
        className="text-center mb-5"
        style={{ backgroundColor: "beige" }}
      >
        Who would you like to manage your affairs when you die
      </Form.Label>
      <Form.Label>
        The people who you choose to manage the winding up your affairs after
        your death are known as executors. Executors work jointly together.
      </Form.Label>
      <Form.Label>
        We recommend that you appoint at least two people. The maximum number by
        law that can take up office is four.
      </Form.Label>
      <Form className={classes.root} onSubmit={handleSubmit}>
        {inputFields.map((inputField) => (
          <div key={inputField.id}>
            <Form.Group controlId="name">
              <Form.Label>Full Name of Executor</Form.Label>
              <Form.Control
                type="text"
                name="name"
                required
                value={inputField.name}
                onChange={(event) => handleChangeInput(inputField.id, event)}
              ></Form.Control>
              <Form.Control.Feedback type="invalid">
                Please fill the required field.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="relationship">
              <Form.Label>Relationship with Executor</Form.Label>
              <Form.Control
                as="select"
                name="relationship"
                required
                value={inputField.relationship}
                onChange={(event) => handleChangeInput(inputField.id, event)}
              >
                <option selected disabled value="">
                  [Please select one]
                </option>
                <option value="husband">Husband</option>
                <option value="Wife">Wife</option>
                <option value="Partner">Partner</option>
                <option value="Brother">Brother</option>
                <option value="Sister">Sister</option>
                <option value="Son">Son</option>
                <option value="Daughter">Daughter</option>
                <option value="Grandson">Grandson</option>
                <option value="Granddaughter">Granddaughter</option>
                <option value="Friend">Friend</option>
                <option value="Business Partner">Business Partner</option>
                <option value="Other">Other</option>
              </Form.Control>
              <Form.Control.Feedback type="invalid">
                Please fill the required field.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="address">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                name="address"
                required
                value={inputField.add}
                onChange={(event) => handleChangeInput(inputField.id, event)}
              ></Form.Control>
              <Form.Control.Feedback type="invalid">
                Please fill the required field.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="town">
              <Form.Label>Town</Form.Label>
              <Form.Control
                type="text"
                name="town"
                required
                value={inputField.add}
                onChange={(event) => handleChangeInput(inputField.id, event)}
              ></Form.Control>
              <Form.Control.Feedback type="invalid">
                Please fill the required field.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="state">
              <Form.Label>State</Form.Label>
              <Form.Control
                type="text"
                name="state"
                required
                value={inputField.state}
                onChange={(event) => handleChangeInput(inputField.id, event)}
              ></Form.Control>
              <Form.Control.Feedback type="invalid">
                Please fill the required field.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                name="email"
                required
                value={inputField.email}
                onChange={(event) => handleChangeInput(inputField.id, event)}
              ></Form.Control>
              <Form.Control.Feedback type="invalid">
                Please fill the required field.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="ph">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                name="ph"
                required
                value={inputField.ph}
                onChange={(event) => handleChangeInput(inputField.id, event)}
              ></Form.Control>
              <Form.Control.Feedback type="invalid">
                Please fill the required field.
              </Form.Control.Feedback>
            </Form.Group>

            <Button
              className="mr-3"
              color="primary"
              variant="contained"
              disabled={inputFields.length === 1}
              onClick={() => handleRemoveFields(inputField.id)}
            >
              Delete <RemoveIcon />
            </Button>
            <Button
              variant="contained"
              color="primary"
              disabled={inputFields.length === 4}
              onClick={handleAddFields}
            >
              Add More <AddIcon />
            </Button>
          </div>
        ))}
        <Form.Group controlId="addAltExec">
          <Form.Label>Do you want to add alternate executor? </Form.Label>
          <Form.Control
            as="select"
            name="addAltExec"
            required
            value={addAltExec}
            onChange={(event) => setAddAltExec(event.target.value)}
          >
            <option selected disabled value="">
              [Please select one]
            </option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="isRenumerated">
          <Form.Label>Will the executor be renumerated? </Form.Label>
          <Form.Control
            as="select"
            name="isRenumerated"
            required
            value={isRenumerated}
            onChange={(event) => setIsRenumerated(event.target.value)}
          >
            <option selected disabled value="">
              [Please select one]
            </option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="execRenumeration">
          <Form.Label>Executor Renumeration</Form.Label>
          <Form.Control
            type="text"
            name="execRenumeration"
            value={execRenumeration}
            onChange={(event) => setExecRenumeration(event.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button
          className="mt-5 mb-5 mr-5"
          variant="contained"
          color="primary"
          type="submit"
          onClick={() => (window.location = "/willcreation/wives")}
        >
          Back
        </Button>
        <Button
          className="mt-5 mb-5"
          variant="contained"
          color="primary"
          type="submit"
          onClick={handleSubmit}
        >
          Continue
        </Button>
      </Form>
    </FormContainer>
  );
};

export default ExecutorDetails;
