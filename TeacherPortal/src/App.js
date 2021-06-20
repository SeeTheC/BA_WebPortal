import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./containers/Login";
import Master from "./containers/Master";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/dashboard">
            {" "}
            <Master />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Users() {
  return <h2>Users</h2>;
}
