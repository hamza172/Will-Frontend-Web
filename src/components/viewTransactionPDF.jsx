import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
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

const ViewTransactionPDF = ({ history }) => {

    const [data, setData] = useState({});

  useEffect(() => {

    axios.post("/users/get_single_transaction_detail_from_id", {
        tID: parseURLParams(window.location.href).t_id[0]
    })
    .then((response) => {
        setData(response.data.transactionData);
        window.print();
    })
    .catch((error) => {
        console.log(error);
    })

  }, []);

  return (
    <div>

        {/* Personal Details */}
        <div>
            <h2>Transaction Details</h2>
            <p>Date: {data.date}</p>
            <p>Quantity: {data.quantity}</p>
            <p>Payment Number: {data.paymentNumber}</p>
            <p>Amount Paid: {data.amount}</p>
            <p>Client Name: {data.b2bClient}</p>
        </div>                

    </div>
  );
};

export default ViewTransactionPDF;
