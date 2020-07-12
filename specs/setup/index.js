require('babel-polyfill/dist/polyfill.min.js');

window.Promise = require('promise-polyfill');

require('./testUtils');

// instantiate Vue
window.Vue = require('vue');

Vue.config.productionTip = false;


// Csrf token to avoid laravel error message
window.Laravel = {}
let meta = document.createElement('meta');
meta.name = "csrf-token";
meta.content = "csrf-token";
document.getElementsByTagName('head')[0].appendChild(meta);

// require all test files (files that ends with .spec.js)
const testsContext = require.context('./../', true, /\.spec$/);
testsContext.keys().forEach(testsContext);

// require all src files except main.js for coverage.
// you can also change this to match only the subset of files that
// you want coverage for.
// const srcContext = require.context('../../resources/assets/js', true, /^\.\/(?!app(\.js)?$)/);
// srcContext.keys().forEach(srcContext);
