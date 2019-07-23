import React, { Component } from "react";
import AddTransfer from "./trnsfers/AddTransfer";
import Transfers from "./trnsfers/Transfers";
import Navbar from "../components/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";

class MainComponent extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Navbar} />
          <Route exact path="/transfers" component={Transfers} />
          <Route exact path="/transfers/new" component={AddTransfer} />
        </div>
      </Router>
    );
  }
}

export default MainComponent;