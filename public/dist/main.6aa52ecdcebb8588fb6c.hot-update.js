webpackHotUpdate("main",{

/***/ "./src/app/store/index.js":
/*!********************************!*\
  !*** ./src/app/store/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! connected-react-router */ "./node_modules/connected-react-router/lib/index.js");
/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(connected_react_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducers */ "./src/app/store/reducers/index.js");
(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();





var initialState = {};
var enhancers = [];
/* global window */

/* eslint no-underscore-dangle: "off" */

if (true) {
  var devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
} // Setup Redux store with routing and thunks


var setupStore = function setupStore(history) {
  var middleware = [redux_thunk__WEBPACK_IMPORTED_MODULE_2__["default"], Object(connected_react_router__WEBPACK_IMPORTED_MODULE_1__["routerMiddleware"])(history)]; // Merge enhancers

  var composedEnhancers = redux__WEBPACK_IMPORTED_MODULE_0__["compose"].apply(void 0, [redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"].apply(void 0, middleware)].concat(enhancers));
  var store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(Object(connected_react_router__WEBPACK_IMPORTED_MODULE_1__["connectRouter"])(history)(Object(_reducers__WEBPACK_IMPORTED_MODULE_3__["default"])(history)), initialState, composedEnhancers); // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)

  if (true) {
    module.hot.accept(/*! ./reducers */ "./src/app/store/reducers/index.js", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducers */ "./src/app/store/reducers/index.js");
(function () {
      return store.replaceReducer(__webpack_require__(/*! ./reducers */ "./src/app/store/reducers/index.js").default);
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); });
  } // Create the store


  return stire;
};

var _default = setupStore;
var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(initialState, "initialState", "/Users/iain/Projects/react-ssr/src/app/store/index.js");
  reactHotLoader.register(enhancers, "enhancers", "/Users/iain/Projects/react-ssr/src/app/store/index.js");
  reactHotLoader.register(setupStore, "setupStore", "/Users/iain/Projects/react-ssr/src/app/store/index.js");
  reactHotLoader.register(_default, "default", "/Users/iain/Projects/react-ssr/src/app/store/index.js");
  leaveModule(module);
})();

;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(initialState, "initialState", "/Users/iain/Projects/react-ssr/src/app/store/index.js");
  reactHotLoader.register(enhancers, "enhancers", "/Users/iain/Projects/react-ssr/src/app/store/index.js");
  reactHotLoader.register(devToolsExtension, "devToolsExtension", "/Users/iain/Projects/react-ssr/src/app/store/index.js");
  reactHotLoader.register(setupStore, "setupStore", "/Users/iain/Projects/react-ssr/src/app/store/index.js");
  reactHotLoader.register(_default, "_default", "/Users/iain/Projects/react-ssr/src/app/store/index.js");
  reactHotLoader.register(_default2, "default", "/Users/iain/Projects/react-ssr/src/app/store/index.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3N0b3JlL2luZGV4LmpzIl0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsImVuaGFuY2VycyIsInByb2Nlc3MiLCJkZXZUb29sc0V4dGVuc2lvbiIsIndpbmRvdyIsInNldHVwU3RvcmUiLCJtaWRkbGV3YXJlIiwicm91dGVyTWlkZGxld2FyZSIsImNvbXBvc2VkRW5oYW5jZXJzIiwiY29tcG9zZSIsImFwcGx5TWlkZGxld2FyZSIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJjb25uZWN0Um91dGVyIiwiY3JlYXRlUm9vdFJlZHVjZXIiLCJtb2R1bGUiLCJyZXF1aXJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxZQUFZLEdBQWxCO0FBQ0EsSUFBTUMsU0FBUyxHQUFmO0FBRUE7O0FBQ0E7O0FBQ0EsSUFBSUMsSUFBSixFQUE0QztBQUMxQyxNQUFNQyxpQkFBaUIsR0FBR0MsTUFBTSxDQUFoQzs7QUFFQSxNQUFJLDZCQUFKLFlBQTZDO0FBQzNDSCxhQUFTLENBQVRBLEtBQWVFLGlCQUFmRjtBQUNEO0VBR0g7OztBQUNBLElBQU1JLFVBQVUsR0FBRyxTQUFiQSxVQUFhLFVBQWE7QUFDOUIsTUFBTUMsVUFBVSxHQUFHLHNEQUFRQywrRUFBZ0IsQ0FEYixPQUNhLENBQXhCLENBQW5CLENBRDhCLENBRzlCOztBQUNBLE1BQU1DLGlCQUFpQixHQUFHQyw2Q0FBTyxDQUFQQSxlQUN4QkMscURBQWUsQ0FBZkEsY0FEd0JELFVBQ3hCQyxDQUR3QkQsU0FBMUIsU0FBMEJBLEVBQTFCO0FBS0EsTUFBTUUsS0FBSyxHQUFHQyx5REFBVyxDQUN2QkMsNEVBQWEsQ0FBYkEsT0FBYSxDQUFiQSxDQUF1QkMseURBQWlCLENBRGpCLE9BQ2lCLENBQXhDRCxDQUR1QixnQkFUSyxpQkFTTCxDQUF6QixDQVQ4QixDQWU5Qjs7QUFDQSxNQUFJRSxJQUFKLEVBQWdCO0FBQ2RBLFVBQU0sQ0FBTkEsa0VBQWdDO0FBQUE7QUFBQSxhQUFNSixLQUFLLENBQUxBLGVBQXFCSyxtQkFBTyxDQUFQQSxxREFBTyxDQUFQQSxDQUEzQixPQUFNTCxDQUFOO0FBQWhDSTtBQWpCNEIsSUFvQjlCOzs7QUFDQTtBQXJCRjs7ZUF3QmVWLFU7Z0JBQWYsUTtBQUFlOzs7Ozs7Ozs7Ozs7MEJBdENUTCxZOzBCQUNBQyxTOzBCQWFBSSxVOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFkQUwsWTswQkFDQUMsUzswQkFLRUUsaUI7MEJBUUZFLFUiLCJmaWxlIjoibWFpbi42YWE1MmVjZGNlYmI4NTg4ZmI2Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSwgY29tcG9zZSB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7IGNvbm5lY3RSb3V0ZXIsIHJvdXRlck1pZGRsZXdhcmUgfSBmcm9tICdjb25uZWN0ZWQtcmVhY3Qtcm91dGVyJztcbmltcG9ydCB0aHVuayBmcm9tICdyZWR1eC10aHVuayc7XG5pbXBvcnQgY3JlYXRlUm9vdFJlZHVjZXIgZnJvbSAnLi9yZWR1Y2Vycyc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHt9O1xuY29uc3QgZW5oYW5jZXJzID0gW107XG5cbi8qIGdsb2JhbCB3aW5kb3cgKi9cbi8qIGVzbGludCBuby11bmRlcnNjb3JlLWRhbmdsZTogXCJvZmZcIiAqL1xuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gIGNvbnN0IGRldlRvb2xzRXh0ZW5zaW9uID0gd2luZG93Ll9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX187XG5cbiAgaWYgKHR5cGVvZiBkZXZUb29sc0V4dGVuc2lvbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGVuaGFuY2Vycy5wdXNoKGRldlRvb2xzRXh0ZW5zaW9uKCkpO1xuICB9XG59XG5cbi8vIFNldHVwIFJlZHV4IHN0b3JlIHdpdGggcm91dGluZyBhbmQgdGh1bmtzXG5jb25zdCBzZXR1cFN0b3JlID0gKGhpc3RvcnkpID0+IHtcbiAgY29uc3QgbWlkZGxld2FyZSA9IFt0aHVuaywgcm91dGVyTWlkZGxld2FyZShoaXN0b3J5KV07XG5cbiAgLy8gTWVyZ2UgZW5oYW5jZXJzXG4gIGNvbnN0IGNvbXBvc2VkRW5oYW5jZXJzID0gY29tcG9zZShcbiAgICBhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZSksXG4gICAgLi4uZW5oYW5jZXJzLFxuICApO1xuXG4gIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUoXG4gICAgY29ubmVjdFJvdXRlcihoaXN0b3J5KShjcmVhdGVSb290UmVkdWNlcihoaXN0b3J5KSksXG4gICAgaW5pdGlhbFN0YXRlLFxuICAgIGNvbXBvc2VkRW5oYW5jZXJzLFxuICApO1xuXG4gIC8vIEhvdCByZWxvYWQgcmVkdWNlcnMgKHJlcXVpcmVzIFdlYnBhY2sgb3IgQnJvd3NlcmlmeSBITVIgdG8gYmUgZW5hYmxlZClcbiAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgnLi9yZWR1Y2VycycsICgpID0+IHN0b3JlLnJlcGxhY2VSZWR1Y2VyKHJlcXVpcmUoJy4vcmVkdWNlcnMnKS5kZWZhdWx0KSk7XG4gIH1cblxuICAvLyBDcmVhdGUgdGhlIHN0b3JlXG4gIHJldHVybiBzdGlyZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNldHVwU3RvcmU7XG4iXSwic291cmNlUm9vdCI6IiJ9