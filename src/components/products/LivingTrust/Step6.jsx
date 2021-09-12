import React, { useEffect } from "react";
import { Form } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

const Step6 = ({ nextStep, prevStep, handleChange, changeState, values }) => {
  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };

  const Previous = (e) => {
    e.preventDefault();
    prevStep();
  };

  return (
    <div style={{ padding: 30 }}>
      <h1>Step 6</h1>

      {[...Array(values.step6State.length)].map((e, i) => (
        <>
          {[...Array(values.step6State[i].beneficieries.length)].map((e, j) => (
            <Form.Group>
              <Form.Label>Select Beneficiary</Form.Label>
              <select
                className="form-control"
                value={values.step6State[i].beneficieries[j].name}
                onChange={(e) => {
                  var index = e.target.selectedIndex;
                  var optionElement = e.target.childNodes[index];
                  var personID = optionElement.getAttribute("data-id");
                  for (let k = 0; k < values.beneficiariesNames.length; k++) {
                    if (personID === values.beneficiariesNames[k].personID) {
                      values.step6State[i].beneficieries[j] =
                        values.beneficiariesNames[k];
                      changeState("step6State", [...values.step6State]);
                    }
                  }
                }}
              >
                {[...Array(values.beneficiariesCount)].map((e, i) => (
                  <option data-id={values.beneficiariesNames[i].personID}>
                    {values.beneficiariesNames[i].name}
                  </option>
                ))}
              </select>
              {/* <br></br> */}
            </Form.Group>
          ))}

          <h5>Click Here to Add or Delete Ben</h5>
          <button
            className="mt-2 btn btn-primary"
            onClick={(e) => {
              e.preventDefault();
              let allBens = values.beneficiariesNames;
              values.step6State[i].beneficieries.push(allBens[0]);
              changeState("step6State", [...values.step6State]);
            }}
          >
            Add Another
          </button>

          <button
            className="mt-2 btn btn-primary ml-4"
            onClick={(e) => {
              e.preventDefault();
              values.step6State[i].beneficieries.pop();
              changeState("step6State", [...values.step6State]);
            }}
          >
            Delete
          </button>

          {/* <br></br> */}
          {[...Array(values.step6State[i].assets.length)].map((e, j) => (
            <Form.Group>
              <Form.Label>Select Asset</Form.Label>
              <select
                className="form-control"
                value={values.step6State[i].assets[j].assetType}
                onChange={(e) => {
                  var index = e.target.selectedIndex;
                  var optionElement = e.target.childNodes[index];
                  var giftID = optionElement.getAttribute("data-id");
                  for (let k = 0; k < values.step4Gifts.length; k++) {
                    if (giftID === values.step4Gifts[k].giftID) {
                      values.step6State[i].assets[j] = values.step4Gifts[k];
                      changeState("step6State", [...values.step6State]);
                    }
                  }
                }}
              >
                {[...Array(values.step4GiftsCount)].map((e, i) => (
                  <option data-id={values.step4Gifts[i].giftID}>
                    {values.step4Gifts[i].assetType}
                  </option>
                ))}
              </select>
            </Form.Group>
          ))}

          <h5 className="mt-2">Click Here to Add or Delete Assets</h5>
          <button
            className="mt-2 btn btn-primary"
            onClick={(e) => {
              e.preventDefault();
              let allAssets = values.step4Gifts;
              values.step6State[i].assets.push(allAssets[0]);
              changeState("step6State", [...values.step6State]);
            }}
          >
            Add Another
          </button>

          <button
            className="mt-2 btn btn-primary ml-4"
            onClick={(e) => {
              e.preventDefault();
              values.step6State[i].assets.pop();
              changeState("step6State", [...values.step6State]);
            }}
          >
            Delete
          </button>
          <hr
            style={{
              marginBottom: "2rem",
              marginTop: "2rem",
              border: "1px solid #000",
            }}
          ></hr>
        </>
      ))}

      <h5>Click Here to add of Delete Forms</h5>
      <button
        className="btn btn-primary mt-4"
        onClick={(e) => {
          e.preventDefault();
          values.step6State.push({
            beneficieries: [],
            assets: [],
          });
          changeState("step6State", values.step6State);
        }}
      >
        Add Another
      </button>

      <button
        className="btn btn-primary mt-4"
        onClick={(e) => {
          e.preventDefault();
          values.step6State.pop();
          changeState("step6State", values.step6State);
        }}
      >
        Delete
      </button>

      <br></br>
      <button className="btn btn-primary mt-4" onClick={Previous}>
        Prev
      </button>
      <button className="btn btn-primary ml-4 mt-4" onClick={Continue}>
        Next
      </button>
    </div>
  );
};

export default Step6;
