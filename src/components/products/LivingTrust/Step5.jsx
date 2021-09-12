import React from "react";
import { Form } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

const Step5 = ({ nextStep, prevStep, handleChange, changeState, values }) => {
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
      <h1>Step 5</h1>
      <h1>Beneficiary Names</h1>

      <Form>
        <p>
          Name of Beneficiaries (Family, Friends, Charity) who will receive the
          trust property you pass away. Gift can be (1) General -This are
          percentage of gift left to beneficiaries after any specific and
          charitable gifts are given) (2) Specific – gifts assigned to a
          specific or friend) (3) Charitable – Cash gifts or other items given
          to charities you would like to make.
        </p>

        {[...Array(values.beneficiariesCount)].map((e, i) => (
          <div>
            <Form.Group key={i}>
              <Form.Label>Beneficiarie Name</Form.Label>
              <Form.Control
                value={values.beneficiariesNames[i].name}
                type="text"
                onChange={(e) => {
                  values.beneficiariesNames[i].name = e.target.value;
                  changeState(values.beneficiariesNames[i].name);
                }}
              ></Form.Control>
            </Form.Group>
            <Form.Group key={i}>
              <Form.Label>Beneficiarie DOB</Form.Label>
              <Form.Control
                value={values.beneficiariesNames[i].dob}
                type="date"
                onChange={(e) => {
                  values.beneficiariesNames[i].dob = e.target.value;
                  changeState(values.beneficiariesNames[i].dob);
                }}
              ></Form.Control>
            </Form.Group>
            <hr
              style={{
                marginBottom: "3rem",
                marginTop: "3rem",
                border: "1px solid #000",
              }}
            ></hr>
          </div>
        ))}

        <button
          className="btn btn-primary"
          onClick={(e) => {
            e.preventDefault();
            changeState("beneficiariesCount", values.beneficiariesCount + 1);
            values.beneficiariesNames.push({
              personID: uuidv4(),
              name: "",
              dob: "",
            });
            changeState("beneficiariesNames", values.beneficiariesNames);
          }}
        >
          Add Another
        </button>

        <button
          className="btn btn-primary ml-4"
          onClick={(e) => {
            e.preventDefault();
            changeState("beneficiariesCount", values.beneficiariesCount - 1);
            values.beneficiariesNames.splice(-1, 1);
            changeState("beneficiariesNames", values.beneficiariesNames);
          }}
        >
          Delete
        </button>

        <hr></hr>

        {/* {[...Array(values.giveToAltCount)].map((e, i) => <div>

                    <p>Name Specific Gift you will like to make from the trust.</p>

                    <Form.Group>
                        <Form.Label>Give the following Items</Form.Label>
                        <select className="form-control" value={values.giveToAlt[i].giveTheFollowingItems} onChange={(e) => {
                            values.giveToAlt[i].giveTheFollowingItems = e.target.value;
                            changeState(values.giveToAlt[i].giveTheFollowingItems);
                        }}>
                            {values.step4Gifts.map((gift, index) => {
                                return(
                                    <option value={gift.assetType}>{gift.assetType}</option>
                                );
                            })}
                        </select>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>To</Form.Label>
                        <select className="form-control" value={values.giveToAlt[i].to} onChange={(e) => {
                            values.giveToAlt[i].to = e.target.value;
                            changeState(values.giveToAlt[i].to);                            
                        }} >
                            {values.beneficiariesNames.map((name, i) => {
                                return(
                                    <option key={i} value={name}>{name}</option>
                                );
                            })}
                        </select>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Alternate Recipient</Form.Label>
                        <Form.Control type="text" value={values.giveToAlt[i].alternateRecipient}  onChange={(e) => {
                            values.giveToAlt[i].alternateRecipient = e.target.value;
                            changeState(values.giveToAlt[i].alternateRecipient);
                        }}></Form.Control>
                    </Form.Group>

                </div>)}

                <button className="btn btn-primary" onClick={(e) => {
                    e.preventDefault();
                    changeState("giveToAltCount", values.giveToAltCount + 1);
                    values.giveToAlt.push({
                        giveTheFollowingItems: values.step4Gifts[0].assetType,
                        to: values.beneficiariesNames[0],
                        alternateRecipient: "",
                    });
                    changeState("giveToAlt", values.giveToAlt);
                }}>Add Another</button>

                <button className="btn btn-primary ml-4" onClick={(e) => {
                    e.preventDefault();
                    changeState("giveToAltCount", values.giveToAltCount - 1);
                    values.giveToAlt.splice(-1,1);
                    changeState("giveToAlt", values.giveToAlt);
                }}>Delete</button>                                                        */}
      </Form>

      <button className="btn btn-primary mt-4" onClick={Previous}>
        Prev
      </button>
      <button className="btn btn-primary ml-4 mt-4" onClick={Continue}>
        Next
      </button>
    </div>
  );
};

export default Step5;
