import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home/home";
import Layout from "./hoc/layout/layout";
import Login from "./components/Auth/Login/login";
import Register from "./components/Auth/Register/register";

class Routes extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
        </Switch>
      </Layout>
    );
  }
}

export default Routes;
