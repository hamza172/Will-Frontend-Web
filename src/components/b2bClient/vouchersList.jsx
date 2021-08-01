import React, { useState } from "react";
import * as auth from "../../services/authService";
import { CButton, CDataTable, CCardBody, CCollapse } from "@coreui/react";
import Modal from "react-bootstrap/Modal";
import Button from "@material-ui/core/Button";
import { toast } from "react-toastify";
toast.configure();
const B2bIndividualVoucherList = ({ user }) => {
  const [vouchers, setVouchers] = useState();
  const [show, setShow] = useState();
  const [email, setEmail] = useState();
  const [item, setItem] = useState();
  const [details, setDetails] = useState([]);

  const toggleDetails = (index) => {
    const position = details.indexOf(index);
    let newDetails = details.slice();
    if (position !== -1) {
      newDetails.splice(position, 1);
    } else {
      newDetails = [...details, index];
    }
    setDetails(newDetails);
  };

  const getData = () => {
    auth
      .getVouchersList()
      .then((res) => {
        setVouchers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    return vouchers;
  };
  //getData();
  React.useEffect(getData, [vouchers]);
  if (!user || user.length == 0) return <p></p>;
  if (!vouchers || vouchers.length === 0) return <p>No vouchers to show</p>;
  const filtered = vouchers.data.filter(
    (voucher) => voucher.userID === user.id
  );

  const fields = [
    { key: "date", label: "Date Created" },
    { key: "voucherCode", label: "Voucher Code" },
    { key: "status", label: "Status" },
    { key: "paymentNumber", label: "Payment Number" },
    { key: "emailTo", label: "Emailed To" },

    {
      key: "email",
      label: "",
      _style: { width: "10%" },
      sorter: false,
      filter: false,
    },
    {
      key: "view_details",
      label: "",
      _style: { width: "10%" },
      sorter: false,
      filter: false,
    },
  ];
  const handleClose = () => setShow(false);
  const handleShow = (item) => {
    setShow(true);
    setItem(item);
  };

  const handleEmail = async () => {
    const id = item;
    console.log(id);
    const res = await auth.emailVoucher(id, email);
    if (res.status === 200) {
      toast.success("Email Sent");
    }
  };

  return (
    <div className="container">
      <h5 className="mb-5">Showing Individual Vouchers List </h5>
      <CDataTable
        items={filtered}
        fields={fields}
        columnFilter
        tableFilter
        itemsPerPageSelect
        itemsPerPage={5}
        hover
        sorter
        pagination
        scopedSlots={{
          email: (item, index) => {
            return (
              <td className="py-2">
                {item.status==='Used' && (
                  <CButton
                  color="secondary"
                  variant="outline"
                  shape="square"
                  size="sm"
                  disabled
                  onClick={() => handleShow(item._id)}
                >
                  Email
                </CButton>
                )}
                 {item.status==='Not Used' && (
                  <CButton
                  color="primary"
                  variant="outline"
                  shape="square"
                  size="sm"
                  onClick={() => handleShow(item._id)}
                >
                  Email
                </CButton>
                )}
              </td>
            );
          },
          view_details: (item, index) => {
            return (
              <div>
                <td className="py-2">
                  <CButton
                    color="primary"
                    variant="outline"
                    shape="square"
                    size="sm"
                    onClick={() => {
                      toggleDetails(index);
                    }}
                  >
                    {details.includes(index) ? "Hide" : "View Details"}
                  </CButton>
                </td>
              </div>
            );
          },
          details: (item, index) => {
            return (
              <CCollapse show={details.includes(index)}>
                <CCardBody>
                  <h6>Date: {item.date}</h6>
                  <p>Voucher Code: {item.voucherCode}</p>
                  <p>Status: {item.status}</p>
                  <p>Payment: {item.paymentNumber}</p>
                  <p>Emailed To: {item.emailTo}</p>

                </CCardBody>
              </CCollapse>
            );
          },
        }}
      />

      {show && (
        <>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Email to</Modal.Title>
            </Modal.Header>
            <br />
            <br />
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <label>Enter Email Address</label>
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    name="email"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
              </div>
              <br />
            </div>
            <Modal.Footer>
              <Button variant="contained" color="primary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="contained" color="primary" onClick={handleEmail}>
                Email
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      )}
    </div>
  );
};

export default B2bIndividualVoucherList;
