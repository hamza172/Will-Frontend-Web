import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
class LandingPage extends Component {
  state = {};
  render() {
    return (
      <div className="container" style={{ marginTop: "100px" }}>
        <div>
          <Button
            color="primary"
            variant="contained"
            component={Link}
            to="/search"
          >
            Basic Search
          </Button>
        </div>
        <br />
        <div>
          <Button
            color="primary"
            variant="contained"
            component={Link}
            to="/form"
          >
            Basic Will Registeration
          </Button>
        </div>
        <br />
        <div>
          <Button
            color="primary"
            variant="contained"
            component={Link}
            to="/execform"
          >
            Executor Will Copy Request Form
          </Button>
        </div>
        <br />
        <div>
          <Button
            color="primary"
            variant="contained"
            component={Link}
            to="/probateform"
          >
            Probate Registry Will Copy Request Form
          </Button>
        </div>
        <br />
        <div>
          <Button
            color="primary"
            variant="contained"
            component={Link}
            to="/products/willcreation"
          >
            Will Creation
          </Button>
        </div>
        <br />
        <div>
          <Button
            color="primary"
            variant="contained"
            component={Link}
            to="/managewill/adddeedofgift"
          >
            Add Deed of Gift
          </Button>
        </div>        
        <br />
        {/* <div>
          <Button
            color="primary"
            variant="contained"
            component={Link}
            to="/managewill/viewdeedofgift"
          >
            View Deed of Gifts
          </Button>
        </div> */}

        {/* <br /> */}
        <div>
          <Button
            color="primary"
            variant="contained"
            component={Link}
            to="/managewill/addlivingtrust"
          >
            Add Living Trust
          </Button>
        </div>        
        {/* <br /> */}
        {/* <div>
          <Button
            color="primary"
            variant="contained"
            component={Link}
            to="/managewill/viewlivingtrust"
          >
            View Living Trust
          </Button>
        </div>       */}
        
      </div>
    );
  }
}

export default LandingPage;
