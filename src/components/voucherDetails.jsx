import React, { useEffect } from "react";
import * as auth from "../services/authService";

const VoucherDetails = () => {
  const querystring = window.location.search;
  const URLParams = new URLSearchParams(querystring);
  const id = URLParams.get("code");
  console.log(id);
  const [details, setDetails] = React.useState([]);

  useEffect(() => {

    const getData = () => {
      auth.getVoucherDetail(id)
      .then((res) => {
        setDetails(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    };

    getData();
    setTimeout(() => {
      window.print();
    }, 1000)    
    
  }, []);

  if (!details || details.length === 0) return <p>Cannot find any posts</p>;

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">Voucher Date</div>
        <div className="col-md-6">{details.data.date}</div>
      </div>

      <div className="row">
        <div className="col-md-6">User ID</div>
        <div className="col-md-6">{details.data.userID}</div>
      </div>
      <div className="row">
        <div className="col-md-6">Voucher Code</div>
        <div className="col-md-6">{details.data.voucherCode}</div>
      </div>
      <div className="row">
        <div className="col-md-6">Voucher Status</div>
        <div className="col-md-6">{details.data.status}</div>
      </div>

      <div className="row">
        <div className="col-md-6">Payment Number</div>
        <div className="col-md-6">{details.data.paymentNumber}</div>
      </div>
    </div>
  );
};

export default VoucherDetails;
