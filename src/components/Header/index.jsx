import React from "react";
import injectSheet from "react-jss";
import PropTypes from "prop-types";

const styles = {
  header: {
    textAlign: "center",
    backgroundColor: "#fafafa",
    padding: "24px",
    marginBottom: "32px"
  },
  title: {
    color: "#8bc34a",
    fontSize: "2.4em"
  },
  subTitle: {
    color: "#5c5c5c",
    fontSize: "1.2em",
    maxWidth: "400px",
    margin: "auto"
  }
};

const Header = ({ classes, title, subTitle }) => (
  <header className={classes.header}>
    <h1 className={classes.title}>{title}</h1>
    <p className={classes.subTitle}>{subTitle}</p>
  </header>
);

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired
};

export default injectSheet(styles)(Header);
