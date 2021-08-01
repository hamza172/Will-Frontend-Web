import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
const B2BHome = () => {
  const p ="/editorguser?profile="+localStorage.getItem('id')
  return (
    <>
      <div className="row mb-5 ml-5">
        <Button
          component={Link}
          to="/voucherlisting"
          variant="contained"
          color="primary"
        >
          Generate Employee Voucher
        </Button>
      </div>
      <div className="row mb-5 ml-5">
        <Button
          component={Link}
          to="/transactionlist"
          variant="contained"
          color="primary"
        >
          View Transaction List
        </Button>
      </div>
   { /*  <div className="row mb-5 ml-5">
        <Button
          component={Link}
          to="/b2b/voucherslist"
          variant="contained"
          color="primary"
        >
          View List of individual vouchers
        </Button>
      </div>*/}
       <div className="row mb-5 ml-5">
        <Button
          component={Link}
          to={p}
          variant="contained"
          color="primary"
        >
          Update Profile
        </Button>
      </div>
    </>
  );
};

export default B2BHome;
