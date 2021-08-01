import React from "react";
import Button from "@material-ui/core/Button";
import ItemForm from "./ItemForm";

const Address = ({ setForm, formData, navigation }) => {
  const {
    executorName,
    executorEmail,
    executorPhone,
    executorAddressLine1,
    executorAddressLine2,
    executorCity,
    executorCountry,
  } = formData;

  const { previous, next } = navigation;

  return (
    <div className="col-xl-8 col-lg-6 col-md-8 col-sm-10 mx-auto  form p-4">
      <h3>Executor Details</h3>
      <ItemForm
        label="Executor name"
        name="executorName"
        value={executorName}
        onChange={setForm}
      />
      <ItemForm
        label="Executor Email Address"
        name="executorEmail"
        value={executorEmail}
        onChange={setForm}
      />

      <ItemForm
        label="Executor Phone Number"
        name="executorPhone"
        value={executorPhone}
        onChange={setForm}
      />
      <ItemForm
        label="Executor Address Line 1"
        name="executorAddressLine1"
        value={executorAddressLine1}
        onChange={setForm}
      />
      <ItemForm
        label="Executor Address Line 2"
        name="executorAddressLine2"
        value={executorAddressLine2}
        onChange={setForm}
      />
      <ItemForm
        label="Executor City"
        name="executorCity"
        value={executorCity}
        onChange={setForm}
      />
      <ItemForm
        label="Executor Country"
        name="executorCountry"
        value={executorCountry}
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
