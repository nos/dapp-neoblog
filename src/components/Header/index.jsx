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
 * SpinningLogo
 */
import SpinningLogo from "./../SpinningLogo";

const styles = {
  header: {
    backgroundColor: "#11242D",
    color: "white",
    padding: "24px",
    marginBottom: "32px"
  },
  title: {
    fontSize: "1.5em"
  }
};

const Header = ({ classes, title }) => (
  <header className={classes.header}>
    <h1 className={classes.title}>{title}</h1>
    <SpinningLogo />
  </header>
);

/**
 * PROPTYPES:
 * classes: object
 * title: string
 */
Header.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired
};

export default injectSheet(styles)(Header);
