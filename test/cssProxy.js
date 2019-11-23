/*
  The advice from Jest is to use an ES6 proxy to define how css modules should be interpreted.
  https://jestjs.io/docs/en/webpack#mocking-css-modules

  Jest recommends something similar to: https://github.com/keyz/identity-obj-proxy

  This is required for rendering the correct classnames in snapshots,
  otherwise jest does not understand css modules.
*/

module.exports = new Proxy(
  {},
  {
    get: function getter(target, key) {
      if (key === '__esModule') {
        return false;
      }
      if (target[key]) {
        return target[key];
      }

      return key;
    }
  }
);
