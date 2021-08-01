import React from "react";
import * as auth from "../../services/adminService";
import { CDataTable } from "@coreui/react";

const Sales = () => {
  const [sales, setSales] = React.useState();
  const getData = () => {
    auth
      .getSales()
      .then((res) => {
        setSales(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    return sales;
  };
  //getData();
  React.useEffect(getData, []);

  if (!sales || sales.length === 0) return <p>No sales to show</p>;
  const arr = [];
  const obj = Object.entries(sales);
  obj.forEach(([key, value]) => arr.push(value));

  const fields = [
    { key: "salesID", label: "ID" },
    { key: "date", label: "date" },
    { key: "productName", label: "Product" },
    { key: "amount", label: "Price" },
    { key: "transactionID", label: "Tran" },
  ];
  return (
    <div className="container">
      <h5 className="mb-5">Showing Sales </h5>
      <CDataTable
        items={arr[1]}
        fields={fields}
        columnFilter
        tableFilter
        itemsPerPage={6}
        hover
        sorter
        pagination
      />
    </div>
  );
};

export default Sales;
