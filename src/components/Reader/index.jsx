import React from "react";
import injectSheet from "react-jss";
import PropTypes from "prop-types";
import { create } from "axios";

import { injectStore } from "./../../store";

const styles = {
  content: {
    color: "#5c5c5c",
    fontSize: "1.6em",
    maxWidth: "770px",
    margin: "auto"
  }
};

class Reader extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    store: PropTypes.objectOf(PropTypes.any).isRequired
  };

  componentWillReceiveProps = async nextProps => {
    const { article } = nextProps.store;

    if (article.hash && !article.content) {
      await this.handleGateway(article.hash);
    }
  };

  handleGateway = async fileHash => {
    const { ipfs, article } = this.props.store;
    const req = create({});
    const { data } = await req.get(ipfs + fileHash);
    article.setContent(data);
  };

  render() {
    const { classes, store: { article: { content } } } = this.props;

    return !content ? (
      <p className={classes.content}>Loading article content...</p>
    ) : (
      <p className={classes.content}>{content}</p>
    );
  }
}

export default injectStore(injectSheet(styles)(Reader));
