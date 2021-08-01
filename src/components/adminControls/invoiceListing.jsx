import React, { useState } from "react";
import { CButton, CDataTable, CCollapse, CCardBody } from "@coreui/react";
import * as auth from "../../services/authService";
import { toast } from "react-toastify";
toast.configure();

const InvoiceListing = () => {
  const [invoice, setInvoice] = useState([]);
  const [details, setDetails] = useState([]);
  const getData = () => {
    auth
      .getVouchersList()
      .then((res) => {
        setInvoice(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    return invoice;
  };
  //getData();
  React.useEffect(getData, []);

  if (!invoice || invoice.length === 0) return <p>Cannot find any posts</p>;
  const arr = [];
  //converting post data into array
  const obj = Object.entries(invoice.data);
  obj.forEach(([key, value]) => arr.push(value));

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

  const fields = [
    { key: "date", label: "Invoice Date" },
    { key: "invoiceID", label: "Invoice Number" },
    { key: "b2bClient", label: "B2B Client" },
    { key: "quantity", label: "No Of Voucher" },
    { key: "amount", label: "Amount" },
    { key: "processedBy", label: "Processed By" },
    { key: "status", label: "Status" },

    {
      key: "generate",
      label: "",
      _style: { width: "10%" },
      sorter: false,
      filter: false,
    },
    {
      key: "view_detail",
      label: "",
      _style: { width: "10%" },
      sorter: false,
      filter: false,
    },
    {
      key: "email",
      label: "",
      _style: { width: "10%" },
      sorter: false,
      filter: false,
    },
  ];

  return (
    <CDataTable
      items={arr}
      fields={fields}
      columnFilter
      tableFilter
      itemsPerPageSelect
      itemsPerPage={5}
      hover
      sorter
      pagination
      scopedSlots={{
        generate: (item, index) => {
          return (
            <td className="py-2">
              <CButton
                color="primary"
                variant="outline"
                shape="square"
                size="sm"
                onClick={(e) => {
                  window.location.href = "/invoice/?id=" + item.invoiceID;
                }}
              >
                Generate
              </CButton>
            </td>
          );
        },
        view_detail: (item, index) => {
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
                <h6>Invoice Date: {item.date}</h6>
                <p>Invoice Number: {item.number}</p>
                <p>B2B Client: {item.b2bClient}</p>
                <p>Amount: {item.amount}</p>
              </CCardBody>
            </CCollapse>
          );
        },
        email: (item, index) => {
          return (
            <td className="py-2">
              <CButton
                color="primary"
                variant="outline"
                shape="square"
                size="sm"
              >
                Email
              </CButton>
            </td>
          );
        },
      }}
    />
  );
};

export default InvoiceListing;
