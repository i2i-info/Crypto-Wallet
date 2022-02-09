/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from "react";
import autobind from "react-autobind";
import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import modules from "./modules";
import {
  LinkedinFilled,
  GithubFilled,
  FacebookFilled,
  TwitterSquareFilled,
  InstagramFilled,
} from "@ant-design/icons";

import Page404 from "./components/Page404";
import Layout from "./components/Layout";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    autobind(this);

    this._routes = null;
  }

  renderRoutes() {
    if (this._routes) {
      return this._routes;
    }

    this._routes = Object.keys(modules).map((item) => (
      <Route
        key={`route_${item}`}
        exact
        path={item}
        component={withRouter(modules[item])}
      />
    ));

    return this._routes;
  }

  render() {
    const routes = this.renderRoutes();

    return (
      <Provider store={store}>
        <div className="i2i-header position-fixed d-flex justify-content-between">
          <a href="http://www.i2i-info.com/" className="text-white p-2">
            Developed by : Idea to Implementation Infotech
          </a>
          <div className="follow align-self-center">
            <a
              href="https://github.com/i2i-info/Crypto-Wallet.git"
              target="_blank"
            >
              <GithubFilled width="2em" />
            </a>
            <a
              href="https://www.linkedin.com/company/i2i-infotech"
              target="_blank"
            >
              <LinkedinFilled />
            </a>
            <a
              href="https://www.facebook.com/Idea.to.implementation.infotech"
              target="_blank"
            >
              <FacebookFilled />
            </a>
            <a href="https://twitter.com/i2i_infotech" target="_blank">
              <TwitterSquareFilled />
            </a>
            <a href="https://www.instagram.com/i2i_infotech" target="_blank">
              <InstagramFilled />
            </a>

            {/* https://twitter.com/i2i_infotech
https://www.instagram.com/i2i_infotech
https://www.facebook.com/Idea.to.implementation.infotech */}

            {/* <LinkedinFilled />
            <FacebookFilled />
            <TwitterSquareFilled />
            <InstagramFilled /> */}
          </div>
        </div>
        <BrowserRouter basename="/portfolio">
          <Layout>
            <Switch>
              {routes}
              <Route component={Page404} />
            </Switch>
          </Layout>
        </BrowserRouter>
      </Provider>
    );
  }
}
