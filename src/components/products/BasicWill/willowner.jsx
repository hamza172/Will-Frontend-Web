import React from "react";
import Button from "@material-ui/core/Button";
import ItemForm from "./ItemForm";

const Address = ({ setForm, formData, navigation }) => {
  const {
    willOwnerTitle,
    willOwnerFname,
    willOwnerSurname,
    willOwnerEmail,
    willOwnerMname,
    willOwnerDob,
    willOwnerGender,
    willOwnerAddLine1,
    willOwnerAddLine2,
    willOwnerCity,
    willOwnerCountry,
    willOwnerUK,
    willOwnerPostcode,
    willOwnerPhNo,
  } = formData;

  const { previous, next } = navigation;

  return (
    <div className="col-xl-8 col-lg-6 col-md-8 col-sm-10 mx-auto  form p-4">
      <h3>Will Owner Details</h3>
      <ItemForm
        label="Title"
        name="willOwnerTitle"
        value={willOwnerTitle}
        onChange={setForm}
      />
      <ItemForm
        label="First Name"
        name="willOwnerFname"
        value={willOwnerFname}
        onChange={setForm}
      />

      <ItemForm
        label="Middle Name"
        name="willOwnerMname"
        value={willOwnerMname}
        onChange={setForm}
      />
      <ItemForm
        label="SurName"
        name="willOwnerSurname"
        value={willOwnerSurname}
        onChange={setForm}
      />
      <ItemForm
        label="Date of Birth"
        name="willOwnerDob"
        value={willOwnerDob}
        onChange={setForm}
        type="date"
      />
      <ItemForm
        label="Gender"
        name="willOwnerGender"
        value={willOwnerGender}
        onChange={setForm}
      />
      <ItemForm
        label="Email"
        name="willOwnerEmail"
        value={willOwnerEmail}
        onChange={setForm}
      />
      <ItemForm
        label="Address Line 1"
        name="willOwnerAddLine1"
        value={willOwnerAddLine1}
        onChange={setForm}
      />
      <ItemForm
        label="Address Line 2"
        name="willOwnerAddLine2"
        value={willOwnerAddLine2}
        onChange={setForm}
      />
      <ItemForm
        label="City"
        name="willOwnerCity"
        value={willOwnerCity}
        onChange={setForm}
      />
      <ItemForm
        label="Country"
        name="willOwnerCountry"
        value={willOwnerCountry}
        onChange={setForm}
      />
      <ItemForm
        label="Post code"
        name="willOwnerPostcode"
        value={willOwnerPostcode}
        onChange={setForm}
      />
      <ItemForm
        label="Phone Number"
        name="willOwnerPhNo"
        value={willOwnerPhNo}
        onChange={setForm}
      />
      <div>
        <Button
          className="m-3"
          variant="contained"
          color="primary"
          onClick={previous}
        >
          Previous
        </Button>
        <Button variant="contained" color="primary" onClick={next}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default Address;
