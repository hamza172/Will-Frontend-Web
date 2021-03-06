import React from "react";
import FormContainer from "../FormContainer";
import { Form, Button } from "react-bootstrap";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";

const Step8NonMuslim = ({
  values,
  nextStep,
  prevStep,
  handleChange,
  changeState,
}) => {
  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };

  const Previous = (e) => {
    e.preventDefault();
    prevStep();
  };
  return (
    <FormContainer>
      <h3>Step 8: Distribution Details</h3>

      <Form>
        {[...Array(values.step7AssetDetails?.length)].map((e, i) => (
          <div key={i + 1}>
            <h5>
              Add Beneficiaries For Asset:{" "}
              {values.step7AssetDetails[i].assetType}
              <br></br>
              Desc: {values.step7AssetDetails[i].desc}
            </h5>
            {[...Array(values.step7AssetDetails[i].beneficiaries.length)].map(
              (e, j) => (
                <div key={j + 1}>
                  <Form.Group controlId="beneficiary">
                    <Form.Label>Beneficiary</Form.Label>
                    <Form.Control
                      as="select"
                      value={values.step7AssetDetails[i].beneficiaries[j].type}
                      onChange={(e) => {
                        values.step7AssetDetails[i].beneficiaries[j].type =
                          e.target.value;
                        changeState(
                          values.step7AssetDetails[i].beneficiaries[j].type
                        );
                      }}
                    >
                      <option selected disabled value="">
                        [Please select one]
                      </option>
                      <option value="Wife">Wife</option>
                      <option value="Husband">Husband</option>
                      <option value="Child">Child</option>
                      <option value="Dad">Dad</option>
                      <option value="Mum">Mum</option>
                      <option value="Sister">Sister</option>
                      <option value="Brother">Brother</option>
                      <option value="Grandchild">Grandchild</option>
                      <option value="Friends">Friends</option>
                      <option value="Family">Family Member</option>
                      <option value="Pet">Pet</option>
                      <option value="Charity">Charity</option>
                      <option value="Others">Others</option>
                    </Form.Control>
                  </Form.Group>

                  {values.step7AssetDetails[i].beneficiaries[j].type ===
                    "Wife" && (
                    <select
                      className="form-control"
                      value={values.step7AssetDetails[i].beneficiaries[j].name}
                      onChange={(e) => {
                        values.step7AssetDetails[i].beneficiaries[j].name =
                          e.target.value;
                        changeState(
                          values.step7AssetDetails[i].beneficiaries[j].name
                        );
                      }}
                    >
                      {values.wivesDetails.map((wive) => {
                        return <option value={wive.name}>{wive.name}</option>;
                      })}
                    </select>
                  )}

                  {values.step7AssetDetails[i].beneficiaries[j].type ===
                    "Child" && (
                    <select
                      className="form-control"
                      value={values.step7AssetDetails[i].beneficiaries[j].name}
                      onChange={(e) => {
                        values.step7AssetDetails[i].beneficiaries[j].name =
                          e.target.value;
                        changeState(
                          values.step7AssetDetails[i].beneficiaries[j].name
                        );
                      }}
                    >
                      {values.step5Children.map((child) => {
                        return <option value={child.name}>{child.name}</option>;
                      })}
                    </select>
                  )}

                  {values.step7AssetDetails[i].beneficiaries[j].type !==
                    "Wife" &&
                    values.step7AssetDetails[i].beneficiaries[j].type !==
                      "Child" && (
                      <>
                        <Form.Group controlId="name">
                          <Form.Label>Full Name of Beneficiary</Form.Label>
                          <Form.Control
                            type="text"
                            required
                            value={
                              values.step7AssetDetails[i].beneficiaries[j].name
                            }
                            onChange={(e) => {
                              values.step7AssetDetails[i].beneficiaries[
                                j
                              ].name = e.target.value;
                              changeState(
                                values.step7AssetDetails[i].beneficiaries[j]
                                  .name
                              );
                            }}
                          ></Form.Control>
                        </Form.Group>

                        <Form.Group controlId="address">
                          <Form.Label>Address</Form.Label>
                          <Form.Control
                            type="text"
                            value={
                              values.step7AssetDetails[i].beneficiaries[j]
                                .address
                            }
                            onChange={(e) => {
                              values.step7AssetDetails[i].beneficiaries[
                                j
                              ].address = e.target.value;
                              changeState(
                                values.step7AssetDetails[i].beneficiaries[j]
                                  .address
                              );
                            }}
                          ></Form.Control>
                        </Form.Group>

                        <Form.Group controlId="email">
                          <Form.Label>Email</Form.Label>
                          <Form.Control
                            type="text"
                            value={
                              values.step7AssetDetails[i].beneficiaries[j].email
                            }
                            onChange={(e) => {
                              values.step7AssetDetails[i].beneficiaries[
                                j
                              ].email = e.target.value;
                              changeState(
                                values.step7AssetDetails[i].beneficiaries[j]
                                  .email
                              );
                            }}
                          ></Form.Control>
                        </Form.Group>

                        <Form.Group controlId="ph">
                          <Form.Label>Phone Number</Form.Label>
                          <Form.Control
                            type="number"
                            name="ph"
                            value={
                              values.step7AssetDetails[i].beneficiaries[j]
                                .phoneNumber
                            }
                            onChange={(e) => {
                              values.step7AssetDetails[i].beneficiaries[
                                j
                              ].phoneNumber = e.target.value;
                              changeState(
                                values.step7AssetDetails[i].beneficiaries[j]
                                  .phoneNumber
                              );
                            }}
                          ></Form.Control>
                        </Form.Group>

                        {values.step7AssetDetails[i].beneficiaries.length >
                          1 && (
                          <Form.Group>
                            <Form.Label>Percentage</Form.Label>
                            <Form.Control
                              value={
                                values.step7AssetDetails[i].beneficiaries[j]
                                  .percentage
                              }
                              type="number"
                              onChange={(e) => {
                                values.step7AssetDetails[i].beneficiaries[
                                  j
                                ].percentage = e.target.value;
                                changeState(
                                  values.step7AssetDetails[i].beneficiaries[j]
                                    .percentage
                                );
                              }}
                            ></Form.Control>
                          </Form.Group>
                        )}
                      </>
                    )}
                </div>
              )
            )}
            <Button
              className="mr-3"
              color="primary"
              variant="contained"
              disabled={values.step7AssetDetails[i].beneficiaries.length === 1}
              onClick={(e) => {
                e.preventDefault();
                values.step7AssetDetails[i].beneficiaries.pop();
                changeState(values.step7AssetDetails[i].beneficiaries);
              }}
            >
              Delete <RemoveIcon />
            </Button>

            <Button
              variant="contained"
              color="primary"
              onClick={(e) => {
                e.preventDefault();
                values.step7AssetDetails[i].beneficiaries.push({
                  type: "",
                  name: "",
                  address: "",
                  email: "",
                  phoneNumber: "",
                  percentage: "",
                });
                changeState(values.step7AssetDetails[i].beneficiaries);
              }}
            >
              Add More <AddIcon />
            </Button>

            <hr
              style={{
                marginBottom: "3rem",
                marginTop: "3rem",
                border: "1px solid #000",
              }}
            ></hr>
          </div>
        ))}
      </Form>
      <button className="btn btn-primary" onClick={Previous}>
        Prev
      </button>
      <button className="btn btn-primary" onClick={Continue}>
        Next
      </button>
    </FormContainer>
  );
};

export default Step8NonMuslim;
