import React from "react";

const BalanceRequest = () => {
  return (
    <div className="container">
      <h3>Manage Balance Request </h3>
      <br />
      <table className="table">
        <thead>
          <tr>
            <th>Balance Request Date</th>
            <th>User Name</th>
            <th>Commission Balance</th>
            <th>Request Status</th>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default BalanceRequest;
