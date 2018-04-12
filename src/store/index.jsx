import React from "react";

const defaultStore = {
  ipfs: "https://ipfs.infura.io/ipfs/",
  neoblogHash: "85e9cc1f18fcebf9eb8211a128807e38d094542a",
  domain: { latest: false },
  article: { hash: false, content: false }
};

const {
  Provider: StoreProvider,
  Consumer: StoreConsumer
} = React.createContext({});

const injectStore = Component => props => (
  <StoreConsumer>
    {store => <Component store={store} {...props} />}
  </StoreConsumer>
);

export { StoreProvider, StoreConsumer, injectStore, defaultStore };
