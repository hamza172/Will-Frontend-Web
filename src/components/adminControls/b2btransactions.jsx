import React from "react";
import * as auth from "../../services/adminService";
import { CButton, CDataTable } from "@coreui/react";

const Transactions = ({ user }) => {
  const [vouchers, setVouchers] = React.useState();
  const getData = () => {
    auth
      .getTransactionList()
      .then((res) => {
        setVouchers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    return vouchers;
  };
  //getData();
  React.useEffect(getData, []);
  if (!vouchers || vouchers.length === 0) return <p>No vouchers to show</p>;

  const arr = [];
  const obj = Object.entries(vouchers);
  obj.forEach(([key, value]) => arr.push(value));
  const fields = [
    { key: "date", label: "Date" },
    { key: "b2bClient", label: "B2B Client Name" },
    { key: "paymentNumber", label: "Transaction ID" },
    { key: "quantity", label: "No of Vouchers" },
    { key: "amount", label: "Amount" },
  ];
  return (
    <div className="container">
      <h5 className="mb-5">Showing All B2B Vouchers Transactions</h5>
      <CDataTable
        items={arr[1]}
        fields={fields}
        columnFilter
        tableFilter
        itemsPerPageSelect
        itemsPerPage={5}
        hover
        sorter
        pagination
      />
    </div>
  );
};

export default Transactions;
