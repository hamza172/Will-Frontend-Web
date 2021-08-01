import React, { useState } from "react";
import { CButton, CDataTable } from "@coreui/react";
import * as auth from "../../services/authService";
import { toast } from "react-toastify";
toast.configure();

const CreatedWills = () => {
  const [willList, setWillList] = useState([]);

  const getData = () => {
    auth
      .getCreatedWill()
      .then((res) => {
        setWillList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //getData();
  React.useEffect(getData, []);

  if (!willList || willList.length === 0) return <p>Cannot find any posts</p>;
  const newWillList = willList.data.filter(
    (x) => x.userID === auth.getCurrentUser().id
  );
  if (newWillList == null) {
    toast.error("No Will registered");
  }
  if (!newWillList || newWillList.length === 0)
    return <p>Cannot find any posts</p>;
  const arr = [];
  //converting post data into array
  const obj = Object.entries(newWillList);
  obj.forEach(([key, value]) => arr.push(value));

  const fields = [
    { key: "userID" },

    {
      key: "add_doc",
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
      key: "view_will",
      label: "",
      _style: { width: "10%" },
      sorter: false,
      filter: false,
    },
    {
      key: "create_codicil",
      label: "",
      _style: { width: "10%" },
      sorter: false,
      filter: false,
    },
    {
      key: "registered_docs",
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
      footer
      itemsPerPageSelect
      itemsPerPage={5}
      hover
      sorter
      pagination
      scopedSlots={{
        add_doc: (item, index) => {
          return (
            <td className="py-2">
              <CButton
                color="primary"
                variant="outline"
                shape="square"
                size="sm"
                onClick={(e) => {
                  window.location.href = "/registerdocument?id=" + item._id;
                }}
              >
                Add Document
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
                  onClick={(e) => {
                    window.location.href = "/details?d=" + item._id;
                  }}
                >
                  View Detail
                </CButton>
              </td>
            </div>
          );
        },
        view_will: (item, index) => {
          return (
            <td className="py-2">
              <CButton
                color="primary"
                variant="outline"
                shape="square"
                size="sm"
              >
                View Will
              </CButton>
            </td>
          );
        },
        create_codicil: (item, index) => {
          return (
            <td className="py-2">
              <CButton
                color="primary"
                variant="outline"
                shape="square"
                size="sm"
              >
                Create Codicil
              </CButton>
            </td>
          );
        },
        registered_docs: (item, index) => {
          return (
            <td className="py-2">
              <CButton
                color="primary"
                variant="outline"
                shape="square"
                size="sm"
                onClick={(e) => {
                  window.location.href = "/listregisteredDoc/?rd=" + item._id;
                }}
              >
                View Registered Documents
              </CButton>
            </td>
          );
        },
      }}
    />
  );
};

export default CreatedWills;
