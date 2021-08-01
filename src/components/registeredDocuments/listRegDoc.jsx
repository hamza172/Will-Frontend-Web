import React, { useState } from "react";
import * as auth from "../../services/authService";
import { CButton, CDataTable, CCollapse, CCardBody } from "@coreui/react";

const RegisteredDoc = () => {
  const querystring = window.location.search;
  const URLParams = new URLSearchParams(querystring);
  const id = URLParams.get("rd");

  const [regDocs, setRegDocs] = useState([]);
  const [details, setDetails] = useState([]);
  const getData = () => {
    auth
      .getRegDoc(id)
      .then((res) => {
        setRegDocs(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //getData();
  // eslint-disable-next-line
  React.useEffect(getData, []);

  if (!regDocs || regDocs.length === 0) return <p>Cannot find any posts</p>;

  //converting reg doc data into array
  const arr = [];
  const obj = Object.entries(regDocs);
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
    { key: "docDate", label: " Document Date" },
    { key: "docName", label: "Document Name" },
    { key: "docType", label: "Document Type" },
    { key: "docNo", label: "Document Number" },
    { key: "docDesc", label: "Document Description" },
    { key: "docLoc", label: "Document Location" },
    { key: "issuer", label: "Document Issuer" },

    {
      key: "create_new",
      label: "",
      _style: { width: "10%" },
      sorter: false,
      filter: false,
    },
    {
      key: "edit",
      label: "",
      _style: { width: "10%" },
      sorter: false,
      filter: false,
    },
    {
      key: "view",
      label: "",
      _style: { width: "10%" },
      sorter: false,
      filter: false,
    },
    {
      key: "remove",
      label: "",
      _style: { width: "10%" },
      sorter: false,
      filter: false,
    },
  ];

  return (
    <CDataTable
      items={arr[1]}
      fields={fields}
      columnFilter
      tableFilter
      footer
      itemsPerPageSelect
      itemsPerPage={5}
      hover
      sorter
      pagination
      scopedSlots={{
        create_new: (item, index) => {
          return (
            <td className="py-2">
              <CButton
                color="primary"
                variant="outline"
                shape="square"
                size="sm"
                onClick={(e) => {
                  window.location.href = "/registerdocument/?id=" + id;
                }}
              >
                Create New
              </CButton>
            </td>
          );
        },
        edit: (item, index) => {
          return (
            <div>
              <td className="py-2">
                <CButton
                  color="warning"
                  shape="square"
                  size="sm"
                  onClick={(e) => {
                    window.location.href = "/edit/?id=" + item._id;
                  }}
                >
                  Edit
                </CButton>
              </td>
            </div>
          );
        },
        view: (item, index) => {
          return (
            <td className="py-2">
              <CButton
                color="success"
                shape="square"
                size="sm"
                onClick={() => {
                  toggleDetails(index);
                }}
              >
                {details.includes(index) ? "Hide" : "View Details"}
              </CButton>
            </td>
          );
        },
        details: (item, index) => {
          return (
            <CCollapse show={details.includes(index)}>
              <CCardBody>
                <h6>Document Date: {item.docDate}</h6>
                <p>Document Name: {item.docName}</p>
                <p>Document Type: {item.docType}</p>
                <p>Document Number: {item.docNo}</p>
                <p>Document Description: {item.docDesc}</p>
                <p>Document Location: {item.docLoc}</p>
                <p>Document Issuer: {item.issuer}</p>
              </CCardBody>
            </CCollapse>
          );
        },
        remove: (item, index) => {
          return (
            <td className="py-2">
              <CButton
                color="danger"
                //variant="outline"
                shape="square"
                size="sm"
                onClick={(e) => {
                  auth.removeRegDoc(item._id);
                  window.location.reload();
                }}
              >
                Remove
              </CButton>
            </td>
          );
        },
      }}
    />
  );
};

export default RegisteredDoc;
