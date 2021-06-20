import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./Header";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import Users from "./Users";
// import Footer from "../components/footer";

export default function Master() {
  return (
    <Router>
      <Sidebar />
      <div class="main-content" id="panel">
        <Header />
        <Switch>
          <Route path="/users">
            {" "}
            <Users />
          </Route>
          <Route path="/">
            <Dashboard />
          </Route>
        </Switch>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}
