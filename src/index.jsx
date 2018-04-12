import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

import { create as createJss } from "jss";
import camelCase from "jss-camel-case";
import globalStyles from "jss-global";
import vendorPrefixer from "jss-vendor-prefixer";
import { JssProvider } from "react-jss";

import "antd/dist/antd.css";

import App from "./views/App";

import { StoreProvider } from "./store";

const jss = createJss();
jss.use(vendorPrefixer(), camelCase(), globalStyles());

class NeoBlog extends React.Component {
  static propTypes = {
    children: PropTypes.objectOf(PropTypes.any).isRequired
  };

  /* eslint-disable react/no-unused-state */
  // Disable unused state because it's passed as store.
  state = {
    gavin: "dance"
  };
  /* eslint-enable */

  render() {
    const { children } = this.props;
    return <StoreProvider value={this.state}>{children}</StoreProvider>;
  }
}

ReactDOM.render(
  <NeoBlog>
    <JssProvider jss={jss}>
      <App />
    </JssProvider>
  </NeoBlog>,
  document.getElementById("root")
);
