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

import { StoreProvider, defaultStore } from "./store";

const jss = createJss();
jss.use(vendorPrefixer(), camelCase(), globalStyles());

class NeoBlog extends React.Component {
  static propTypes = {
    children: PropTypes.objectOf(PropTypes.any).isRequired
  };

  /* eslint-disable react/no-unused-state */
  state = Object.assign(defaultStore, {
    domain: Object.assign(defaultStore.domain, {
      setLatest: latest => {
        this.setState({
          domain: Object.assign(this.state.domain, { latest })
        });
      }
    }),
    article: Object.assign(defaultStore.article, {
      setHash: hash => {
        this.setState({
          article: Object.assign(this.state.article, { hash })
        });
      },
      setContent: content => {
        this.setState({
          article: Object.assign(this.state.article, { content })
        });
      }
    })
  });
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
