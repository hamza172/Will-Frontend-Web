import React from "react";
import Button from "@material-ui/core/Button";
import * as auth from "../../services/authService";

const RegDocument = () => {
  const querystring = window.location.search;
  const URLParams = new URLSearchParams(querystring);
  const id = URLParams.get("id");

  const [docName, setDocName] = React.useState();
  const [docType, setDocType] = React.useState();
  const [docDate, setDocDate] = React.useState();
  const [docNo, setDocNo] = React.useState();
  const [docDesc, setDocDesc] = React.useState();
  const [docLoc, setDocLoc] = React.useState();
  const [issuer, setIssuer] = React.useState();

  const activeWillId = id;

  const handleSubmit = async () => {
    try {
      await auth.regDocument(
        docName,
        docType,
        docDate,
        docNo,
        docDesc,
        docLoc,
        activeWillId,
        issuer
      );
      window.location.href = "/listregisteredDoc/?rd=" + id;
    } catch (error) {}
  };

  return (
    <div className="container">
      <h3>Register Document</h3>
      <br />
      <form>
        <div className="row">
          <div className="col=md-6 ml-5 ">
            <label>Register Document Date</label>
            <input
              type="date"
              placeholder=""
              onChange={(e) => {
                setDocDate(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="row">
          <div className="col=md-6 ml-5 ">
            <label>Register Document Name</label>
            <input
              type="text"
              placeholder=""
              onChange={(e) => {
                setDocName(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="row">
          <div className="col=md-6 ml-5 ">
            <label>Register Document Type</label>
            <input
              type="text"
              placeholder=""
              onChange={(e) => {
                setDocType(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="row">
          <div className="col=md-6  ">
            <label>Register Document Number</label>
          </div>
          <div className="col-md-6">
            <input
              type="text"
              placeholder=""
              onChange={(e) => {
                setDocNo(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="row">
          <div className="col=md-6  ">
            <label>Register Document Issuer</label>
          </div>
          <div className="col-md-6">
            <input
              type="text"
              placeholder=""
              onChange={(e) => {
                setIssuer(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="row">
          <div className="col=md-6 ml-5 ">
            <label>Register Document Description</label>
            <input
              type="text"
              placeholder=""
              onChange={(e) => {
                setDocDesc(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="row">
          <div className="col=md-6 ml-5 ">
            <label>Register Document Location</label>
            <input
              type="text"
              placeholder=""
              onChange={(e) => {
                setDocLoc(e.target.value);
              }}
            />
          </div>
        </div>

        <div className="row">
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default RegDocument;
