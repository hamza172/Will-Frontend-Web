import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const PersonalDetails = ({ history }) => {
  useEffect(() => {
    axios
      .post("/managewill/getWill", {
        willID: new URLSearchParams(history.location.search).get("will_id"),
      })
      .then((response) => {
        if (response.data.will.type === "Muslim") {
          history.push({
            pathname: "/managewill/addcodicil_muslim",
            search:
              "?will_id=" +
              new URLSearchParams(history.location.search).get("will_id"),
          });
        } else {
          history.push({
            pathname: "/managewill/addcodicil_nonmuslim",
            search:
              "?will_id=" +
              new URLSearchParams(history.location.search).get("will_id"),
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return <div></div>;
};

export default PersonalDetails;
