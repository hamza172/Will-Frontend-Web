import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const OrgUserHomePage = ({ user }) => {
  if (!user || user.length === 0) return <p></p>;
  const p="/editorguser?profile="+localStorage.getItem('id')
  return (
    <div className="container">
      <h6 className="text-right">Promotion Code to be used: {user.code}</h6>
      <br />
      <br />
      <div className="row">
        <Button
          component={Link}
          to="/will-ambassador/flyer-listing"
          variant="contained"
          color="primary"
        >
          Download Flyer
        </Button>
      </div>
      <br />
      <div className="row">
        <Button
          component={Link}
          to="/commission-listing"
          variant="contained"
          color="primary"
        >
          Generate Balance Request
        </Button>
      </div>
      <br />
      <div className="row">
        <Button
          color="primary"
          variant="contained"
          component={Link}
          to="/admin/flyer"
        >
          Manage PDF Flyer
        </Button>
      </div>
      <br />
      <div className="row">
        <Button
          color="primary"
          variant="contained"
          component={Link}
          to="/will/balance-request"
        >
          Manage Will Ambassador Balance Request
        </Button>
      </div>
      <br />
      <div className="row">
        <Button
          color="primary"
          variant="contained"
          component={Link}
          to="/admin/manageusers"
        >
          Manage B2B/Ambassador Account
        </Button>
      </div>

      <br />
      <div className="row mb-10">
        <Button
          color="primary"
          variant="contained"
          component={Link}
          // to="/admin/create-invoice"
          to="/viewallvoucherinvoices"
        >
          Generate B2B Employee Voucher Invoice
        </Button>
      </div>
      <br />
      <br />
      
      <div className="row mb-10">
        <Button
          color="primary"
          variant="contained"
          component={Link}
          to="/ambassador/sales"
        >
          View Sales
        </Button>
      </div>
      <br />

      <div className="row mb-10">
        <Button
          color="primary"
          variant="contained"
          component={Link}
          to={p}
        >
          Update profile
        </Button>
      </div>
      <br />
    </div>
  );
};

export default OrgUserHomePage;
