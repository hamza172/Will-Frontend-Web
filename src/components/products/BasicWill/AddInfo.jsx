import React from "react";
import Button from "@material-ui/core/Button";
import ItemForm from "./ItemForm";
import * as auth from "../../../services/authService";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
const Contact = ({ setForm, formData, navigation, user }) => {
  const {
    storedWillAdd,
    additionalIns,
    //willReminderFr,
    willSource,
    createdBy,
    willRefNo,
    willStorageRefNo,
  } = formData;

  const { previous } = navigation;
  const [requesterSelfie, setSelfie] = React.useState();
  const [will, setWill] = React.useState();

  const handleSubmit = async () => {
    var form_data = new FormData();

    // Page 1 Data
    form_data.append("requesterTitle", formData.requesterTitle);
    form_data.append("requesterFname", formData.requesterFname);
    form_data.append("requesterMname", formData.requesterFname);
    form_data.append("requesterLname", formData.requesterFname);
    form_data.append("requesterAdd", formData.requesterAdd);
    form_data.append("requesterEmail", formData.requesterEmail);
    form_data.append("requesterPhNo", formData.requesterPhNo);
    form_data.append("requesterAddLine1", formData.requesterAddLine1);
    form_data.append("requesterAddLine2", formData.requesterAddLine2);
    form_data.append("requesterTown", formData.requesterTown);
    form_data.append("requesterCountry", formData.requesterCountry);
    form_data.append("requesterPostCode", formData.requesterPostCode);

    // Page 2 Data        
    form_data.append("willOwnerTitle", formData.willOwnerTitle);
    form_data.append("willOwnerFname", formData.willOwnerFname);
    form_data.append("willOwnerMname", formData.willOwnerMname);
    form_data.append("willOwnerSurname", formData.willOwnerSurname);
    form_data.append("willOwnerDob", formData.willOwnerDob);
    form_data.append("willOwnerGender", formData.willOwnerGender);
    form_data.append("willOwnerEmail", formData.willOwnerEmail);
    form_data.append("willOwnerAddLine1", formData.willOwnerAddLine1);
    form_data.append("willOwnerAddLine2", formData.willOwnerAddLine2);
    form_data.append("willOwnerCity", formData.willOwnerCity);
    form_data.append("willOwnerCountry", formData.willOwnerCountry);
    form_data.append("willOwnerPostcode", formData.willOwnerPostcode);
    form_data.append("willOwnerPhNo", formData.willOwnerPhNo);          

    // Page 3
    form_data.append("executorName", formData.executorName);
    form_data.append("executorEmailAdd", formData.executorEmail);
    form_data.append("executorPhoneNo", formData.executorPhone);
    form_data.append("executorAddLine1", formData.executorAddressLine1);
    form_data.append("executorAddLine2", formData.executorAddressLine2);
    form_data.append("executorCity", formData.executorCity);
    form_data.append("executorCountry", formData.executorCountry);


    // Page 4
    form_data.append("storedWillAdd", formData.storedWillAdd);
    form_data.append("additionalIns", formData.additionalIns);
    form_data.append("willSource", formData.willSource);
    form_data.append("willStorageRefNo", formData.willStorageRefNo);
    form_data.append("createdBy", formData.createdBy);
    form_data.append("willRefNo", formData.willRefNo);
    form_data.append("requesterSelfie", requesterSelfie);
    form_data.append("willPDF", will);

    form_data.append("userID", localStorage.getItem("id"));

    form_data.append("willReminderFr", "");
    form_data.append("lastRemDate", "");
    form_data.append("nextRemDate", "");
    form_data.append("createdWillPDF", "");
    form_data.append("discountCode", "");
    form_data.append("discountAmount", "");    
    

    const response = await auth.registerBasicWill(form_data);
    window.location.href = "/checkout/?id=" + formData.willRefNo;
    
    <Popup position="right center">
      <div>Popup content here !!</div>
    </Popup>;
  };
  return (
    <div className="col-xl-8 col-lg-6 col-md-8 col-sm-10 mx-auto  form p-4">
      <h3>Additional Information </h3>

      <ItemForm
        label="Address where will is stored"
        name="storedWillAdd"
        value={storedWillAdd}
        onChange={setForm}
      />
      <ItemForm
        label="Additional Instructions"
        name="additionalIns"
        value={additionalIns}
        onChange={setForm}
        type="textarea"
      />
      <div className="row">
        <div className="col-md-6">
          <label>Will Source (Internal/External)</label>
        </div>
        <div className="col-md-6">
          <select
            label="Will Source (Internal/External)"
            name="willSource"
            value={willSource}
            onChange={setForm}
          >
            <option>[Please select One]</option>
            <option>Internal</option>
            <option>External</option>
          </select>
        </div>
      </div>

      <ItemForm
        label="Will Storage Ref No"
        name="willStorageRefNo"
        value={willStorageRefNo}
        onChange={setForm}
        type="number"
      />
      <ItemForm
        label="Created By Firm"
        name="createdBy"
        value={createdBy}
        onChange={setForm}
        type="text"
      />
      <ItemForm
        label="Will  Ref No"
        name="willRefNo"
        value={willRefNo}
        onChange={setForm}
        type="number"
      />

      <div className="row">
        <div className="col-md-6">
          <label>Requester Selfie</label>
        </div>
        <div classname="col">
          <input
            type="file"
            name="requesterSelfie"
            onChange={(e) => {
              setSelfie(e.target.files[0]);
            }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={(e) => {
              formData["requesterSelfie"] = requesterSelfie;
            }}
          >
            Save
          </Button>
        </div>
      </div>



      <div className="row">
        <div className="col-md-6">
          <label>Upload Your Will PDF</label>
        </div>
        <div classname="col">
          <input
            type="file"
            name="willPDF"
            onChange={(e) => {
              setWill(e.target.files[0]);
            }}
          />
        </div>
      </div>



      <div>
        <Button
          className="m-3"
          variant="contained"
          color="primary"
          onClick={previous}
        >
          Previous
        </Button>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Contact;
