import React from "react";
import injectSheet from "react-jss";
import PropTypes from "prop-types";

import SpinningLogo from "./../SpinningLogo";

const styles = {
  header: {
    backgroundColor: "#11242D",
    padding: "24px",
    marginBottom: "32px"
  },
  title: {
    color: "white",
    fontSize: "1.5em"
  }
};

const Header = ({ classes, title }) => (
  <header className={classes.header}>
    <h1 className={classes.title}>{title}</h1>
    <SpinningLogo />
  </header>
);

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired
};

export default injectSheet(styles)(Header);
