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
 * Assets:
 * parcelBack: Parcel box backside
 * parcelFront: Parcel box frontside
 * parcelReact: React logo
 */
import parcelBack from "./../../assets/parcel-back.png";
import parcelFront from "./../../assets/parcel-front.png";
import parcelReact from "./../../assets/logo.svg";

const styles = {
  logoContainer: {
    display: "block",
    maxWidth: "450px",
    margin: "64px auto 0",
    position: "relative"
  },
  parcelBack: {
    width: "100%"
  },
  parcelReact: {
    animation: "React-logo-spin infinite 20s linear",
    width: "100%",
    position: "absolute",
    left: "4px",
    top: "0"
  },
  parcelFront: {
    width: "100%",
    position: "absolute",
    left: "0",
    top: "0"
  },
  "@keyframes React-logo-spin": {
    from: { transform: "rotate(0deg)" },
    to: { transform: "rotate(360deg)" }
  }
};

const logos = [{ parcelBack }, { parcelReact }, { parcelFront }];

const logoToProps = logo => Object.entries(logo)[0];

const mapToImg = (logoProps, classes) => (
  <img
    src={logoProps[1]}
    className={classes[logoProps[0]]}
    alt={logoProps[0]}
    key={logoProps[0]}
  />
);

const renderImg = (logo, classes) => {
  const logoProps = logoToProps(logo);
  return mapToImg(logoProps, classes);
};

const SpinningLogo = ({ classes }) => (
  <div className={classes.logoContainer}>
    {logos.map(logo => renderImg(logo, classes))}
  </div>
);

/**
 * PROPTYPES:
 * classes: object
 */
SpinningLogo.propTypes = {
  classes: PropTypes.object.isRequired
};

export default injectSheet(styles)(SpinningLogo);
