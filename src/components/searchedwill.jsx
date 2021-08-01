import React from "react";
import * as auth from "../services/authService";
const SearchedWill = ({ reg, ph }) => {
  const [result, setResult] = React.useState();

  const getData = () => {
    auth
      .getWill()
      .then((res) => {
        setResult(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    return result;
  };
  //getData();
  React.useEffect(getData, []);
  if (!result || result.length === 0) return <p>hello</p>;
  var filter = [];
  console.log(reg);
  if (reg) {
    filter = result.data.filter((will) => will.willRefNo === reg);
  }
  return (
    <div>
      This is from searched {reg}, {ph}
    </div>
  );
};

export default SearchedWill;
