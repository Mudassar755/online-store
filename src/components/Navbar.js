import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";

class Navbar extends Component {
  render() {
    return (
      <div>
          <h1>Navbar is ....</h1>
        <Link to="/transfers">
          <Button>Transfers</Button>
        </Link>
        <Link to="/orders">
          <Button>Orders</Button>
        </Link>
      </div>
    );
  }
}

export default Navbar;
