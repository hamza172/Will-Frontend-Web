import React from "react";
import * as auth from "../services/authService";

const Details = () => {
  const querystring = window.location.search;
  const URLParams = new URLSearchParams(querystring);
  const id = URLParams.get("d");

  const [details, setDetails] = React.useState([]);

  const getData = () => {
    auth
      .getDetails(id)
      .then((res) => {
        setDetails(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //getData();
  React.useEffect(getData, [id]);

  if (!details || details.length === 0) return <p>Cannot find any posts</p>;
  console.log(details);
  return (
    <div className="container">
      <br />
      <h4 className="text-center">Requester Details</h4>
      <br />
      <br />
      <table className="table">
        <tbody>
          <tr>
            <td id="pBold">Requester Title</td>
            <td>{details.data.requesterTitle}</td>
            <td id="pBold">Requester First Name</td>
            <td>{details.data.requesterFname}</td>
            <td id="pBold">Requester Last Name</td>
            <td>{details.data.requesterLname}</td>
          </tr>
          <tr>
            <td id="pBold">Requester Middle Name</td>
            <td>{details.data.requesterMname}</td>
            <td id="pBold">Requester Address</td>
            <td>{details.data.requesterAdd}</td>
            <td id="pBold">Requester Email</td>
            <td>{details.data.requesterEmail}</td>
          </tr>
          <tr>
            <td id="pBold">Requester Phone Number</td>
            <td>{details.data.requesterPhNo}</td>
            <td id="pBold">Requester Address Line 1</td>
            <td>{details.data.requesterAddLine1}</td>
            <td id="pBold">Requester Address Line 2</td>
            <td>{details.data.requesterAddLine2}</td>
          </tr>
          <tr>
            <td id="pBold">Requester Town</td>
            <td>{details.data.requesterTown}</td>
            <td id="pBold">Requester Country</td>
            <td>{details.data.requesterCountry}</td>
            <td id="pBold">Requester Post Code</td>
            <td>{details.data.requesterPostCode}</td>
          </tr>
          <tr>
            <td id="pBold">Requester Promotion Code</td>
            <td>{details.data.promotionCode}</td>
            <td id="pBold">Requester Selfie</td>
            <td>
              <img src={details.data.requesterSelfie} alt="selfie" />
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      <br />
      <h4 className="text-center">Will Owner Details</h4>
      <br />
      <br />
      <table className="table">
        <tbody>
          <tr>
            <td id="pBold">Will Owner Title</td>
            <td>{details.data.willOwnerTitle}</td>
            <td id="pBold">Will Owner First Name</td>
            <td>{details.data.willOwnerFname}</td>
            <td id="pBold">Will Owner Middle Name</td>
            <td>{details.data.willOwnerMname}</td>
          </tr>
          <tr>
            <td id="pBold">Will Owner SurName</td>
            <td>{details.data.willOwnerSurname}</td>
            <td id="pBold">Will Owner DOB</td>
            <td>{details.data.willOwnerDob}</td>
            <td id="pBold">Will Owner Gender</td>
            <td>{details.data.willOwnerGender}</td>
          </tr>
          <tr>
            <td id="pBold">Will Owner Address Line 1</td>
            <td>{details.data.willOwnerAddLine1}</td>
            <td id="pBold">Will Owner Address Line 2</td>
            <td>{details.data.willOwnerAddLine2}</td>
            <td id="pBold">Will Owner City</td>
            <td>{details.data.willOwnerCity}</td>
          </tr>
          <tr>
            <td id="pBold">Will Owner Country</td>
            <td>{details.data.willOwnerCountry}</td>
            <td id="pBold">Will Owner United Kingdom</td>
            <td>{details.data.willOwnerUk}</td>
            <td id="pBold">Will Owner Post Code</td>
            <td>{details.data.willOwnerPostcode}</td>
          </tr>
        </tbody>
      </table>

      <br />
      <br />
      <h4 className="text-center">Additional Details</h4>
      <br />
      <br />
      <table className="table">
        <tbody>
          <tr>
            <td id="pBold">Date of Will</td>
            <td>{details.data.dateCreated}</td>
            <td id="pBold">Address where will is stored</td>
            <td>{details.data.storedWillAdd}</td>
            <td id="pBold">Additional Instructions</td>
            <td>{details.data.additionalIns}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Details;
