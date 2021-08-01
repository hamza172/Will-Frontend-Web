import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

class AdminMainPage extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <div className="row">
          <Button
            color="primary"
            variant="contained"
            component={Link}
            to="/admin/flyer"
          >
            Manage PDF Flyer
          </Button>
        </div>
        <br />
        {/* <div className="row">
          <Button
            color="primary"
            variant="contained"
            component={Link}
            to="/admin/balance-request"
          >
            Manage Will Ambassador Balance Request
          </Button>
        </div>*/}
        <br />
        <div className="row">
          <Button
            color="primary"
            variant="contained"
            component={Link}
            to="/admin/manageusers"
          >
            Manage B2B/Ambassador Account
          </Button>
        </div>

        <br />
        <div className="row">
          <Button
            color="primary"
            variant="contained"
            component={Link}
            to="/admin/setup-discount"
          >
            Setup Discount
          </Button>
        </div>
        <br />
        <div className="row">
          <Button
            color="primary"
            variant="contained"
            component={Link}
            to="/viewallvoucherinvoices"
          >
            Generate B2B Employee Voucher Invoice
          </Button>
        </div>
        <br />
        <div className="row">
          <Button
            color="primary"
            variant="contained"
            component={Link}
            to="/admin/org-user-listing"
          >
            Manage Organisation Users
          </Button>
        </div>
        <br />
        <div className="row">
          <Button
            color="primary"
            variant="contained"
            component={Link}
            to="/b2bvouchers"
          >
            Show All B2B Vouchers
          </Button>
        </div>
        <br />
        <div className="row">
          <Button
            color="primary"
            variant="contained"
            component={Link}
            to="/productsprice"
          >
            Set up Products Price
          </Button>
        </div>
        <br />
       {/* <div className="row">
          <Button
            color="primary"
            variant="contained"
            component={Link}
            to="/admin/transactions"
          >
            Show b2b transactions list
          </Button>
        </div>
      <br />*/}
        <div className="row">
          <Button
            color="primary"
            variant="contained"
            component={Link}
            to="/admin/sales"
          >
            See all sales
          </Button>
        </div>
        <br />
        <div className="row">
          <Button
            color="primary"
            variant="contained"
            component={Link}
            to="/admin/managebalance"
          >
            Manage User Balance
          </Button>
        </div>
      </div>
    );
  }
}

export default AdminMainPage;
