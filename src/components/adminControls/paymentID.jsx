import React from "react";
import Button from "@material-ui/core/Button";
import * as auth from "../../services/adminService";
const Payment = () => {
  const [paymentID, setPayment] = React.useState();
  const querystring = window.location.search;
  const URLParams = new URLSearchParams(querystring);
  const id = URLParams.get("id");

  const handleClick = async () => {
    await auth.updateInvoice(id, paymentID);
    window.location.href = "/admin/invoice-listing";
  };
  return (
    <div className="row container">
      <div classnam="col-md-6">Enter Payment ID</div>
      <div className="col-md-6">
        <input
          type="text"
          onChange={(e) => {
            setPayment(e.target.value);
          }}
        />
      </div>
      <Button onClick={handleClick}>Generate</Button>
    </div>
  );
};

export default Payment;
