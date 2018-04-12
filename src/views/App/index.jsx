import React from "react";
import injectSheet from "react-jss";
import PropTypes from "prop-types";

import Button from "antd/lib/button";
import Message from "antd/lib/message";
import Header from "./../../components/Header";

import { injectNOS } from "./../../nos";
import { injectStore } from "./../../store";

const styles = {
  "@import": "https://fonts.googleapis.com/css?family=Source+Sans+Pro",
  "@global html, body": {
    fontFamily: "Source Sans Pro",
    margin: 0,
    padding: 0
  },
  App: {
    textAlign: "center"
  },
  intro: {
    fontSize: "large"
  }
};

class App extends React.Component {
  static propTypes = {
    classes: PropTypes.objectOf(PropTypes.any).isRequired,
    nos: PropTypes.objectOf(PropTypes.any).isRequired,
    store: PropTypes.objectOf(PropTypes.any).isRequired
  };

  handleClick = async () => {
    const { NOS, getAddress } = this.props.nos;
    try {
      Message.info(
        NOS ? `Your address is ${await getAddress()}` : "nOs is not available!"
      );
    } catch (e) {
      Message.info(e);
    }
  };

  render() {
    const { classes } = this.props;
    console.log(this.props.store.gavin);
    return (
      <div className={classes.App}>
        <Header title="A React boilerplate, with Parcel!" />
        <p className={classes.intro}>
          To get started, edit <code>src/views/App/index.js</code> and&nbsp;
          save to reload.
        </p>
        <Button type="primary" onClick={this.handleClick}>
          Or click this button!
        </Button>
      </div>
    );
  }
}

export default injectStore(injectNOS(injectSheet(styles)(App)));
