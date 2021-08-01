import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import { Form, FormLabel } from "react-bootstrap";
import { saveSigningDetails } from "../../../actions/formActions";
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

const SigningDetails = () => {
  const dispatch = useDispatch();

  const classes = useStyles();
  const [inputFields, setInputFields] = useState([
    {
      id: uuidv4(),
      name: "",
    },
    {
      id: uuidv4(),
      name: "",
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(saveSigningDetails(inputFields));

    window.location = "/willcreation/validation";
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
      <h4 className="mb-5"> Signing Details</h4>

      <Form className={classes.root} onSubmit={handleSubmit}>
        {inputFields.map((inputField) => (
          <div key={inputField.id}>
            <Form.Group controlId="name">
              <Form.Label> Witness Name</Form.Label>
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

            <Button
              className="mr-3"
              color="primary"
              variant="contained"
              disabled={inputFields.length === 2}
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

export default SigningDetails;
