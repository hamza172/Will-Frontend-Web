import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import { Form } from "react-bootstrap";
import { createForm, saveWivesDetails, removeLatestWillFromLocalStorage } from "../../../actions/formActions";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { makeStyles } from "@material-ui/core/styles";
import FormContainer from "./../willcreation/FormContainer";
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

const WivesDetails = () => {

  const dispatch = useDispatch();
  const form = useSelector((state) => state.form);
  const { wivesDetails } = form;
  const classes = useStyles();
  const [inputFields, setInputFields] = useState([
    {
      id: uuidv4(),
      name: wivesDetails.name,
      dob: wivesDetails.dob,
      address: wivesDetails.address,
    },
  ]);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(saveWivesDetails(inputFields));
        window.location = "/managewill/executor?will_id=" + parseURLParams(window.location.href).will_id[0];
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
        { id: uuidv4(), name: "", dob: "", address: "" },
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

  useEffect(() => {
    axios.post('/managewill/getWill', {
        willID: parseURLParams(window.location.href).will_id[0]
    })
    .then((response) => {
        console.log(response.data.will.wivesDetails);
        setInputFields(response.data.will.wivesDetails);
    })
    .catch((error) => {
        console.log(error);
    });
}, []);

  return (
    <FormContainer>
      <h4 className="mb-5"> Step3: Wives</h4>

      <Form.Label
        as="legend"
        className="text-center mb-5"
        style={{ backgroundColor: "beige" }}
      >
        Please enter the name/names of your wife/wives, and any mother of your
        children that you like to leave something for. Please note your
        possession transfer autpmatically to a legally married wife unless you
        distribute your estate to your other wives or mother of your children
      </Form.Label>

      <Form className={classes.root} onSubmit={handleSubmit}>
        {inputFields.map((inputField) => (
          <div key={inputField.id}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
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

            <Form.Group controlId="dob">
              <Form.Label>Date Of Birth</Form.Label>
              <Form.Control
                type="text"
                name="dob"
                required
                value={inputField.dob}
                onChange={(event) => handleChangeInput(inputField.id, event)}
              ></Form.Control>
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
                value={inputField.address}
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
              onClick={handleAddFields}
            >
              Add More <AddIcon />
            </Button>
          </div>
        ))}
        <Button
          className="mt-5 mb-5 mr-5"
          variant="contained"
          color="primary"
          onClick={() => {
            window.location = "/managewill/addcodicil?will_id=" + parseURLParams(window.location.href).will_id[0]
          }}
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
          Update & Continue
        </Button>

        <a className="btn btn-primary ml-4" onClick={() => {

            dispatch(saveWivesDetails(inputFields));
              
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

export default WivesDetails;
