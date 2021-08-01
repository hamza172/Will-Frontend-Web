import React from "react";
import * as auth from "../../services/authService";
import { CButton, CDataTable } from "@coreui/react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
const B2BVouchers = ({ user }) => {
  const [vouchers, setVouchers] = React.useState();
  const getData = () => {
    auth
      .getVouchersList()
      .then((res) => {
        setVouchers(res.data);
      })
      .catch((err) => {
        console.log(err)
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
    { key: "voucherCode", label: "Voucher Code" },
    { key: "status", label: "Status" },

    { key: "b2bClient", label: "B2b Client Name" },
  ];
  return (
    <div className="container">
     {/* <Button component={Link} to="/admin/create-invoice" color="primary" variant="contained">Generate B2B voucher invoice</Button> */}
      <h5 className="mb-5 mt-5">Showing All B2B Vouchers </h5>
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

export default B2BVouchers;
