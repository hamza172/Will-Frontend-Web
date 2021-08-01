import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import * as auth from "../../services/authService";
import * as admin from "../../services/adminService";
import { toast } from "react-toastify";
import { PaystackButton } from "react-paystack";
import SearchedWill from "../searchedwill";
toast.configure();

const SearchForm = () => {
  const [regNo, setRegNo] = React.useState();
  const [willOwnerName, setWillOwnerName] = React.useState();
  const [willOwnerPh, setWillOwnerPh] = React.useState();
  const [willOwnerDob, setWillOwnerDob] = React.useState();
  const [relationship, setRelationship] = React.useState();
  const [reasons, setReasons] = React.useState();
  const [reqTitle, setReqTitle] = React.useState();
  const [reqFname, setReqFname] = React.useState();
  const [reqMname, setReqMname] = React.useState();
  const [reqLname, setReqLname] = React.useState();
  const [reqAdd, setReqAdd] = React.useState();
  const [reqPhNo, setReqPhNo] = React.useState();
  const [reqEmail, setReqEmail] = React.useState();
  const [reqAddLine1, setReqAddLine1] = React.useState();
  const [reqAddLine2, setReqAddLine2] = React.useState();
  const [town, setTown] = React.useState();
  const [country, setCountry] = React.useState();
  const [reqPostCode, setReqPostcode] = React.useState();
  const [promoCode, setPromoCode] = React.useState();
  const [selfie, setSelfie] = React.useState();
  const [user, setUser] = useState([]);
  const [price, setPrice] = useState([]);
  const [discount, setDiscount] = useState([]);

  const [commissionEarned, setCommissionEarned] = useState();
  const [commissionBalance, setCommissionBalance] = useState();
  const [amount, setAmount] = useState();
  const [show, setShow] = useState();
  const [showFields, setShowField] = React.useState(null);
  const [searchedID, setSearchedID] = React.useState("");
  const [result, setResult] = React.useState(false);

  // get base price of product
  const getBasePrice = () => {
    auth
      .getProducts()
      .then((res) => {
        setPrice(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  React.useEffect(getBasePrice, []);
  // get discount
  const getDiscount = () => {
    admin
      .getDiscounts()
      .then((res) => {
        setDiscount(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //getData();
  React.useEffect(getDiscount, []);
  // get user data
  const getData = () => {
    admin
      .getUsersList()
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //getData();
  React.useEffect(getData, []);

  if (!user || user.length === 0) return <p></p>;
  if (!discount || discount.length === 0) return <p></p>;
  if (!price || price.length === 0) return <p></p>;
  //base price
  const product = price.data.filter((x) => x.name === "Basic Will Search");
  const willPrice = product[0].basePrice;

  const handleChange = (e) => {
    if (e.target.value === "Yes") {
      setShowField(e.target.value);
    } else {
      setShowField(null);
    }
  };
  const config = {
    reference: new Date().getTime(),
    email: reqEmail,
    amount: amount,
    currency: "ZAR",
    publicKey: "pk_test_6ad7daa084d40f22350038852006a020e49a4428",
  };

  const handlePaystackSuccessAction = async (response) => {
    // Implementation for whatever you want to do with email and after success call.
    try {
      const filtercode = user.data.filter((x) => x.code === promoCode);
      console.log(filtercode);
      var discountdetail = [];
      if (!filtercode || filtercode.length === 0) {
        discountdetail[0] = 0;
      } else {
        if (filtercode[0].type === "willAmbassador") {
          discountdetail = discount.data.filter(
            (x) => x.type === "Will Ambassador"
          );
        } else {
          discountdetail = discount.data.filter(
            (x) => x.type === "Organisation User B2B Discount"
          );
        }
      }

      if (response.status === "success") {
        const userID = "";
        const userName = "";
        const productName = product[0].name;
        if (discountdetail[0] !== 0) {
          const willAmbID = filtercode[0]._id;
          await admin.addCommission(
            userID,
            willAmbID,
            commissionEarned,
            commissionBalance,
            productName,
            userName
          );

          const discountApplied = discountdetail[0].discountPercentage;
          const amountPaid = Math.ceil(amount);

          const paymentStatus = "Paid";
          await auth.updateSearch(
            searchedID,
            response.reference,
            discountApplied,
            amountPaid,
            paymentStatus
          );

          await admin.addSale(
            product[0].name,
            amount,
            response.reference,
            filtercode[0].code
          );

          setResult(true);
        }
      } else {
        const discountApplied = 0;
        const amountPaid = Math.ceil(amount);
        const paymentStatus = "Paid";
        await auth.updateSearch(
          searchedID,
          response.reference,
          discountApplied,
          amountPaid,
          paymentStatus
        );
        await admin.addSale(
          product[0].name,
          amount,
          response.reference,
          filtercode[0].code
        );
      }
    } catch (error) {
      console.error(error);
    }
  };
  // you can call this function anything
  const handlePaystackCloseAction = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log("closed");
  };
  const componentProps = {
    ...config,
    text: "Payment",
    onSuccess: (email) => handlePaystackSuccessAction(email),
    onClose: handlePaystackCloseAction,
  };
  const handleSubmit = async () => {
    const data = new FormData();

    data.append("willRegNo", regNo);
    data.append("nameOfWillOwner", willOwnerName);
    data.append("willOwnerPh", willOwnerPh);
    data.append("willOwnerDob", willOwnerDob);
    data.append("reqTitle", reqTitle);
    data.append("reqFname", reqFname);
    data.append("reqMname", reqMname);
    data.append("reqLname", reqLname);
    data.append("reqAdd", reqAdd);
    data.append("reqAddLine1", reqAddLine1);
    data.append("reqAddLine2", reqAddLine2);
    data.append("reqEmail", reqEmail);
    data.append("reqTown", town);
    data.append("reqCountry", country);
    data.append("reqPhNo", reqPhNo);
    data.append("reqPostCode", reqPostCode);
    data.append("relationship", relationship);
    data.append("reasons", reasons);
    data.append("promotionCode", promoCode);
    data.append("reqSelfie", selfie);
    const res = await auth.searchForm(data);
    setSearchedID(res.data.data._id);
    if (res.status === 201) {
      toast.success("Will Owner will be notified of Your Search");
    }
  };

  const calculateAmount = () => {
    //check ambassador code matches or not
    const filtercode = user.data.filter((x) => x.code === promoCode);
    var discountdetail = [];
    if (!filtercode || filtercode.length === 0) {
      discountdetail[0] = 0;
    } else {
      if (filtercode[0].type === "willAmbassador") {
        discountdetail = discount.data.filter(
          (x) => x.type === "Will Ambassador"
        );
      } else {
        discountdetail = discount.data.filter(
          (x) => x.type === "Organisation User B2B Discount"
        );
      }
    }
    setShow(true);

    if (discountdetail[0] !== 0) {
      // calculate discounted price after promotion
      const d = willPrice * (discountdetail[0].discountPercentage / 100);
      const discountedPrice = willPrice - d;
      setAmount(Math.ceil(discountedPrice));
      // calculate comission earned
      // const com = willPrice * (discountdetail[0].commissionPercentage / 100);
      const com = discountdetail[0].commissionPercentage;
      setCommissionEarned(com);

      // set commisision balance
      // const comBal = willPrice - com;
      const commB = willPrice * (discountdetail[0].commissionPercentage / 100);
      const comBal = willPrice - commB;
      setCommissionBalance(comBal);
    } else {
      setAmount(Math.ceil(willPrice));
    }
  };
  return (
    <div className="container">
      {!result && (
        <div className="container">
          <h4>Basic Search Form</h4>
          <div className="row">
            <div className="col-md-6">
              <label>Do you have reg no?</label>
            </div>
            <div classname="col">
              <select onChange={handleChange}>
                <option>Please Select One</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
          </div>
          <br />
          {showFields && (
            <div className="row">
              <div className="col-md-6">
                <label>Will Registeration Number</label>
              </div>

              <input
                name="regNo"
                onChange={(e) => {
                  setRegNo(e.target.value);
                }}
              />
              <br />
            </div>
          )}

          {!showFields && (
            <div>
              <div className="row">
                <div className="col-md-6">
                  <label>Name of Will Owner</label>
                </div>
                <input
                  name="willOwnerName"
                  onChange={(e) => {
                    setWillOwnerName(e.target.value);
                  }}
                />
              </div>
              <br />
              <div className="row">
                <div className="col-md-6">
                  <label>Phone of Will Owner</label>
                </div>
                <input
                  name="willOwnerPh"
                  onChange={(e) => {
                    setWillOwnerPh(e.target.value);
                  }}
                />
              </div>
              <br />
              <div className="row">
                <div className="col-md-6">
                  <label>DOB of Will Owner</label>
                </div>
                <input
                  name="willOwnerDob"
                  type="date"
                  onChange={(e) => {
                    setWillOwnerDob(e.target.value);
                  }}
                />
              </div>
              <br />
            </div>
          )}
          <br />
          <div className="row">
            <div className="col-md-6">
              <label>Relationship with Will Owner</label>
            </div>
            <input
              name="relationship"
              onChange={(e) => {
                setRelationship(e.target.value);
              }}
            />
          </div>
          <br />
          <div className="row">
            <div className="col-md-6">
              <label>Reasons for Search</label>
            </div>
            <input
              name="reasons"
              onChange={(e) => {
                setReasons(e.target.value);
              }}
            />
          </div>
          <br />
          <div className="row">
            <div className="col-md-6">
              <label>Requester Title</label>
            </div>
            <input
              name="reqTitle"
              onChange={(e) => {
                setReqTitle(e.target.value);
              }}
            />
          </div>
          <br />
          <div className="row">
            <div className="col-md-6">
              <label>Requester First Name</label>
            </div>
            <input
              name="reqFname"
              onChange={(e) => {
                setReqFname(e.target.value);
              }}
            />
          </div>
          <br />
          <div className="row">
            <div className="col-md-6">
              <label>Requester Middle Name</label>
            </div>
            <input
              name="reqMname"
              onChange={(e) => {
                setReqMname(e.target.value);
              }}
            />
          </div>
          <br />
          <div className="row">
            <div className="col-md-6">
              <label>Requester Last Name</label>
            </div>
            <input
              name="reqLname"
              onChange={(e) => {
                setReqLname(e.target.value);
              }}
            />
          </div>
          <br />
          <div className="row">
            <div className="col-md-6">
              <label>Requester Address</label>
            </div>
            <input
              name="reqAdd"
              onChange={(e) => {
                setReqAdd(e.target.value);
              }}
            />
          </div>
          <br />
          <div className="row">
            <div className="col-md-6">
              <label>Requester Email</label>
            </div>
            <input
              name="reqEmail"
              onChange={(e) => {
                setReqEmail(e.target.value);
              }}
            />
          </div>
          <br />
          <div className="row">
            <div className="col-md-6">
              <label>Requester Phone Number</label>
            </div>
            <input
              name="reqPhNo"
              onChange={(e) => {
                setReqPhNo(e.target.value);
              }}
            />
          </div>
          <br />
          <div className="row">
            <div className="col-md-6">
              <label>Requester Address Line 1</label>
            </div>
            <input
              name="reqAddLine1"
              onChange={(e) => {
                setReqAddLine1(e.target.value);
              }}
            />
          </div>
          <br />
          <div className="row">
            <div className="col-md-6">
              <label>Requester Address Line 2</label>
            </div>
            <input
              name="reqAddLine2"
              onChange={(e) => {
                setReqAddLine2(e.target.value);
              }}
            />
          </div>
          <br />
          <div className="row">
            <div className="col-md-6">
              <label>Requester Town</label>
            </div>
            <input
              name="town"
              onChange={(e) => {
                setTown(e.target.value);
              }}
            />
          </div>
          <br />
          <div className="row">
            <div className="col-md-6">
              <label>Requester Country</label>
            </div>
            <input
              name="country"
              onChange={(e) => {
                setCountry(e.target.value);
              }}
            />
          </div>
          <br />
          <div className="row">
            <div className="col-md-6">
              <label>Requester Post Code</label>
            </div>
            <input
              name="reqPostcode"
              onChange={(e) => {
                setReqPostcode(e.target.value);
              }}
            />
          </div>
          <br />
          <div className="row">
            <div className="col-md-6">
              <label>Promotion Code</label>
            </div>
            <input
              name="promoCode"
              onChange={(e) => {
                setPromoCode(e.target.value);
              }}
            />
          </div>
          <br />
          <div className="row">
            <div className="col-md-6">
              <label>Requster Selfie Image</label>
            </div>
            <input
              type="file"
              onChange={(e) => {
                setSelfie(e.target.files[0]);
              }}
            />
          </div>
          <br />

          <Button
            className="mb-4"
            variant="contained"
            color="primary"
            onClick={handleSubmit}
          >
            Search
          </Button>
          <Button variant="contained" color="primary" onClick={calculateAmount}>
            Checkout
          </Button>
          {show && (
            <div>
              Your actual amount is: {willPrice}
              <br />
              <br />
              Total amount: {amount}
              <br />
              <PaystackButton {...componentProps} />
            </div>
          )}
        </div>
      )}
      {result && (
        <div>
          <SearchedWill reg={regNo} ph={willOwnerPh} />
        </div>
      )}
    </div>
  );
};

export default SearchForm;
