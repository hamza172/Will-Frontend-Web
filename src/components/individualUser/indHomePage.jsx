import React, { Component } from "react";
import { Link } from "react-router-dom";
const IUserHomePage = () => {
  return (
    <div className="container">
      <div className="row">
        <Button component={Link} to="/" variant="contained" color="primary">
          Create Basic Will
        </Button>
      </div>
      <br />
      <div className="row">
        <Button
          component={Link}
          to="/user/will-listing"
          variant="contained"
          color="primary"
        >
          Will Listing
        </Button>
      </div>
    </div>
  );
};

export default IUserHomePage;
