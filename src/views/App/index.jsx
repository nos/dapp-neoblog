import React from "react";
import injectSheet from "react-jss";
import PropTypes from "prop-types";
import {
  str2hexstring,
  int2hex,
  hexstring2str
} from "@cityofzion/neon-js/src/utils";

import Header from "./../../components/Header";
import Reader from "./../../components/Reader";

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
  content: {
    fontSize: "1.6em"
  }
};

class App extends React.Component {
  static propTypes = {
    classes: PropTypes.objectOf(PropTypes.any).isRequired,
    nos: PropTypes.objectOf(PropTypes.any).isRequired,
    store: PropTypes.objectOf(PropTypes.any).isRequired
  };

  componentWillMount = async () => {
    const { NOS } = this.props.nos;
    if (NOS) {
      await this.handleLatest();
      await this.handleHash();
    }
  };

  handleLatest = async () => {
    const { getStorage } = this.props.nos;
    const { neoblogHash, domain } = this.props.store;

    const latest = parseInt(
      await getStorage(neoblogHash, "post.latest", { encode: true }),
      16
    );

    domain.setLatest(latest);
  };

  handleHash = async () => {
    const { getStorage } = this.props.nos;
    const { neoblogHash, domain, article } = this.props.store;

    article.setHash(
      hexstring2str(
        await getStorage(
          neoblogHash,
          `${str2hexstring("post.")}${int2hex(domain.latest)}`,
          { encode: false }
        )
      )
    );
  };

  render() {
    const { classes, store: { domain } } = this.props;

    return (
      <div className={classes.App}>
        <Header
          title="Welcome to NeoBlog!"
          subTitle="This is example an implementation of NeoBlog on nOs. You can instantly see&nbsp;
          the latest article, thanks to our nOs integration."
        />
        {!domain.latest ? (
          <p className={classes.content}>Fetching latest article...</p>
        ) : (
          <Reader />
        )}
      </div>
    );
  }
}

export default injectStore(injectNOS(injectSheet(styles)(App)));
