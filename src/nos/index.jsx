import React from "react";

const nos = window.NOS && window.NOS.V1 ? window.NOS.V1 : {};

const { Provider, Consumer } = React.createContext({
  NOS: !!window.NOS && !!window.NOS.V1,
  getAddress: () => nos.getAddress(),
  getStorage: (scriptHash, key, options = { encode: true }) =>
    nos.getStorage(scriptHash, key, options)
});

const injectNOS = Component => props => (
  <Consumer>{store => <Component nos={store} {...props} />}</Consumer>
);

export { Provider, Consumer, injectNOS };
