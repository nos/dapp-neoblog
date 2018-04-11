/**
 * IMPORTS:
 * react
 * react-jss
 * prop-types
 */
import React from "react";
import injectSheet from "react-jss";
import PropTypes from "prop-types";

/**
 * COMPONENTS:
 * Button
 * Message
 * Header
 */
import Button from "antd/lib/button";
import Message from "antd/lib/message";
import Header from "./../../components/Header";

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
  handleClick = () => {
    Message.info("You clicked the button!");
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.App}>
        <Header title="A React boilerplate, with Parcel!" />
        <p className={classes.intro}>
          To get started, edit <code>src/views/App/index.js</code> and save to
          reload.
        </p>
        <Button type="primary" onClick={this.handleClick}>
          Or click this button!
        </Button>
      </div>
    );
  }
}

/**
 * PROPTYPES:
 * classes: object
 */
App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default injectSheet(styles)(App);
