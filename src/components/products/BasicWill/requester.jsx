import React from "react";
import Button from "@material-ui/core/Button";
import ItemForm from "./ItemForm";

const Names = ({ setForm, formData, navigation, user }) => {
  const {
    requesterTitle,
    requesterFname,
    requesterMname,
    requesterLname,
    requesterAdd,
    requesterEmail,
    requesterPhNo,
    requesterAddLine1,
    requesterAddLine2,
    requesterTown,
    requesterCountry,
    requesterPostCode,
  } = formData;
  const { next } = navigation;
  return (
    <div>
      <h4 className="text-center mb-4">Requester Details</h4>
      <div className="col-xl-8 col-lg-6 col-md-8 col-sm-10 mx-auto  form p-4">
        <ItemForm
          label="Requester Title"
          name="requesterTitle"
          value={requesterTitle}
          onChange={setForm}
          type="text"
        />
        <ItemForm
          label="Requester First Name"
          name="requesterFname"
          value={requesterFname}
          onChange={setForm}
        />
        <ItemForm
          label="Requester Middle Name"
          name="requesterMname"
          value={requesterMname}
          onChange={setForm}
        />

        <ItemForm
          label="Reqester Last Name"
          name="requesterLname"
          value={requesterLname}
          onChange={setForm}
        />
        <ItemForm
          label="Reqester Address"
          name="requesterAdd"
          value={requesterAdd}
          onChange={setForm}
        />
        <ItemForm
          label="Reqester Email"
          name="requesterEmail"
          value={requesterEmail}
          onChange={setForm}
        />
        <ItemForm
          label="Reqester Phone Number"
          name="requesterPhNo"
          value={requesterPhNo}
          onChange={setForm}
        />
        <ItemForm
          label="Reqester Address Line 1"
          name="requesterAddLine1"
          value={requesterAddLine1}
          onChange={setForm}
        />
        <ItemForm
          label="Reqester Address Line 2"
          name="requesterAddLine2"
          value={requesterAddLine2}
          onChange={setForm}
        />
        <ItemForm
          label="Reqester Town"
          name="requesterTown"
          value={requesterTown}
          onChange={setForm}
        />
        <ItemForm
          label="Reqester Country"
          name="requesterCountry"
          value={requesterCountry}
          onChange={setForm}
        />

        <ItemForm
          label="Reqester PostCode"
          name="requesterPostCode"
          value={requesterPostCode}
          onChange={setForm}
        />

        <div>
          <Button variant="contained" color="primary" onClick={next}>
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Names;
