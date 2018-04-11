/**
 * IMPORTS:
 * babel-polyfill
 * react
 * react-dom
 * jss
 * react-jss
 * jss-vendor-prefixer
 * jss-camel-case
 * antd
 */
import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";

import { create as createJss } from "jss";
import camelCase from "jss-camel-case";
import globalStyles from "jss-global";
import vendorPrefixer from "jss-vendor-prefixer";
import { JssProvider } from "react-jss";

import "antd/dist/antd.css";

/**
 * VIEWS:
 * App
 */
import App from "./views/App";

const jss = createJss();
jss.use(vendorPrefixer(), camelCase(), globalStyles());

ReactDOM.render(
  <JssProvider jss={jss}>
    <App />
  </JssProvider>,
  document.getElementById("root")
);
