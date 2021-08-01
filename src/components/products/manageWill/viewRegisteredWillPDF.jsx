import React, { useState, useEffect } from "react";
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

const ViewRegisteredWillPDF = ({ history }) => {

    const[will, setWill] = useState({});

    useEffect(() => {
        axios.post('/managewill/get_registered_will', {
            willID: parseURLParams(window.location.href).will_id[0]
        })
        .then((response) => {
            console.log(response.data.will);
            setWill(response.data.will);
        //   console.log(will);
        //   window.print();
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);

  return (
    <div>
        <div>
            <h2>Requester Details</h2>
            <p>Requester Title : {will.requesterTitle}</p>
            <p>Requester FName : {will.requesterFname}</p>
            <p>Requester Mname : {will.requesterMname}</p>
            <p>Requester LName : {will.requesterLname}</p>
            <p>Requester Address : {will.requesterAdd}</p>
            <p>Requester Email : {will.requesterEmail}</p>
            <p>Requester Phone : {will.requesterPhNo}</p>
            <p>Requester Address Line 1{will.requesterAddLine1}</p>
            <p>Requester Address Line 2{will.requesterAddLine2}</p>
            <p>Requester Town : {will.requesterTown}</p>
            <p>Requester Country : {will.requesterCountry}</p>
            <p>Requester Post Code : {will.requesterPostCode}</p>

            <h2>Will Owner Details</h2>
            <p>Title : {will.willOwnerTitle}</p>
            <p>First Name : {will.willOwnerFname}</p>
            <p>Middle Name : {will.willOwnerMname}</p>
            <p>SurName : {will.willOwnerSurname}</p>
            <p>DOB : {will.willOwnerDob}</p>
            <p>Gender : {will.willOwnerGender}</p>
            <p>Email : {will.willOwnerEmail}</p>
            <p>Address Line 1 : {will.willOwnerAddLine1}</p>
            <p>Address Line 2{will.willOwnerAddLine2}</p>
            <p>City : {will.willOwnerCity}</p>
            <p>Country : {will.willOwnerCountry}</p>
            <p>Post Code : {will.willOwnerPostcode}</p>
            <p>Phone Number : {will.willOwnerPhNo}</p>

            <h2>Executor Details</h2>
            <p>Name : {will.executorName}</p>
            <p>Email : {will.executorEmailAdd}</p>
            <p>Phone : {will.executorPhoneNo}</p>
            <p>Address Line 1 : {will.executorAddLine1}</p>
            <p>Address Line 2 : {will.executorAddLine2}</p>
            <p>City : {will.executorCity}</p>
            <p>Country : {will.executorCountry}</p>

            <h2>Additional Information</h2>
        </div>
    </div>
  );
};

export default ViewRegisteredWillPDF;
