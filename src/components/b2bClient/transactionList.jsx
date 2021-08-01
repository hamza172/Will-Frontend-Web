import React from "react";
import * as auth from "../../services/adminService";
import { CButton, CDataTable } from "@coreui/react";

const TransactionList = ({ user }) => {
  const [vouchers, setVouchers] = React.useState();
  const getData = () => {
    auth.getTransactionList()
      .then((res) => {
        setVouchers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    return vouchers;
  };
  
  React.useEffect(getData, []);
  if (!user || user.length == 0) return <p></p>;
  if (!vouchers || vouchers.length === 0) return <p>No vouchers to show</p>;
  const filtered = vouchers.data.filter(
    (voucher) => voucher.userID === user.id
  );

  const fields = [
    { key: "date", label: "Date" },

    { key: "quantity", label: "Quantity" },
    { key: "paymentNumber", label: "Payment Number" },
    { key: "amount", label: "Amount Paid" },
    {
      key: "view",
      label: "",
      _style: { width: "30%" },
      sorter: false,
      filter: false,
    },
  ];
  return (
    <div className="container">
      <h5 className="mb-5">Showing Transaction List </h5>
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
          view: (item, index) => {
            return (
              <div>
                <td className="py-2">
                  <CButton
                    color="primary"
                    variant="outline"
                    shape="square"
                    size="sm"
                    href={"view_transaction_pdf?t_id=" + item._id}
                  >
                    View Invoice PDF
                  </CButton>
                </td>
              </div>
            );
          },
        }}
      />
    </div>
  );
};

export default TransactionList;
