import React, { Component } from "react";
import AddTransfer from "./trnsfers/AddTransfer";
import Transfers from "./trnsfers/Transfers";
import Navbar from "../components/Navbar";
import RecieveOrder from './trnsfers/RecieveOrder'
import ConfirmReceive from './trnsfers/ConfirmReceive'
import Orders from './orders/Orders'
import { BrowserRouter as Router, Route } from "react-router-dom";

class MainComponent extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={ Navbar } />
          <Route exact path="/transfers" component={ Transfers } />
          <Route exact path ="/transfer/:id" component = { RecieveOrder } />
          <Route exact path="/transfers/new" component={ AddTransfer } />
          <Route exact path = '/recieve/:id' component = { ConfirmReceive } />
          <Route path = '/orders' component = { Orders } />
        </div>
      </Router>
    );
  }
}

export default MainComponent;
