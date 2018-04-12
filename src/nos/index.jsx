import React from "react";

const api = window.NOS && window.NOS.V1 ? window.NOS.V1 : {};

const { Provider, Consumer } = React.createContext({
  NOS: !!window.NOS && !!window.NOS.V1,
  getAddress: () => api.getAddress(),
  getStorage: ({ scriptHash, key, encode = true }) =>
    api.getStorage(scriptHash, key, { encode })
});

const injectNOS = Component => props => (
  <Consumer>{store => <Component nos={store} {...props} />}</Consumer>
);

export { Provider, Consumer, injectNOS };
