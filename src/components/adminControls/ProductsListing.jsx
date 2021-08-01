import React from "react";
import * as auth from "../../services/authService";
import { CButton, CDataTable } from "@coreui/react";

const ProductsList = () => {
  const [products, setProducts] = React.useState();
  const getData = () => {
    auth
      .getProducts()
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    return products;
  };
  //getData();
  React.useEffect(getData, []);

  if (!products || products.length === 0) return <p>No products to show</p>;
  const arr = [];
  const obj = Object.entries(products);
  obj.forEach(([key, value]) => arr.push(value));

  const fields = [
    { key: "name", label: "Product" },

    { key: "basePrice", label: "Base Price" },
  ];
  return (
    <div className="container">
      <h5 className="mb-5">Showing Products Listing </h5>
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

export default ProductsList;
