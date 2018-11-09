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

  var composedEnhancers = redux__WEBPACK_IMPORTED_MODULE_0__["compose"].apply(void 0, [redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"].apply(void 0, middleware)].concat(enhancers)); // Build the store

  var store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(Object(connected_react_router__WEBPACK_IMPORTED_MODULE_1__["connectRouter"])(history)(Object(_reducers__WEBPACK_IMPORTED_MODULE_3__["default"])(history)), initialState, composedEnhancers); // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)

  if (true) {
    module.hot.accept(/*! ./reducers */ "./src/app/store/reducers/index.js", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducers */ "./src/app/store/reducers/index.js");
(function () {
      var createNewRootReducer = __webpack_require__(/*! ./reducers */ "./src/app/store/reducers/index.js").default;

      store.replaceReducer(createNewRootReducer(history));
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); });
  } // Create the store


  return store;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3N0b3JlL2luZGV4LmpzIl0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsImVuaGFuY2VycyIsInByb2Nlc3MiLCJkZXZUb29sc0V4dGVuc2lvbiIsIndpbmRvdyIsInNldHVwU3RvcmUiLCJtaWRkbGV3YXJlIiwicm91dGVyTWlkZGxld2FyZSIsImNvbXBvc2VkRW5oYW5jZXJzIiwiY29tcG9zZSIsImFwcGx5TWlkZGxld2FyZSIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJjb25uZWN0Um91dGVyIiwiY3JlYXRlUm9vdFJlZHVjZXIiLCJtb2R1bGUiLCJjcmVhdGVOZXdSb290UmVkdWNlciIsInJlcXVpcmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBLElBQU1BLFlBQVksR0FBbEI7QUFDQSxJQUFNQyxTQUFTLEdBQWY7QUFFQTs7QUFDQTs7QUFDQSxJQUFJQyxJQUFKLEVBQTRDO0FBQzFDLE1BQU1DLGlCQUFpQixHQUFHQyxNQUFNLENBQWhDOztBQUVBLE1BQUksNkJBQUosWUFBNkM7QUFDM0NILGFBQVMsQ0FBVEEsS0FBZUUsaUJBQWZGO0FBQ0Q7RUFHSDs7O0FBQ0EsSUFBTUksVUFBVSxHQUFHLFNBQWJBLFVBQWEsVUFBYTtBQUM5QixNQUFNQyxVQUFVLEdBQUcsc0RBQVFDLCtFQUFnQixDQURiLE9BQ2EsQ0FBeEIsQ0FBbkIsQ0FEOEIsQ0FHOUI7O0FBQ0EsTUFBTUMsaUJBQWlCLEdBQUdDLDZDQUFPLENBQVBBLGVBQ3hCQyxxREFBZSxDQUFmQSxjQUR3QkQsVUFDeEJDLENBRHdCRCxTQUpJLFNBSUpBLEVBQTFCLENBSjhCLENBUzlCOztBQUNBLE1BQU1FLEtBQUssR0FBR0MseURBQVcsQ0FDdkJDLDRFQUFhLENBQWJBLE9BQWEsQ0FBYkEsQ0FBdUJDLHlEQUFpQixDQURqQixPQUNpQixDQUF4Q0QsQ0FEdUIsZ0JBVkssaUJBVUwsQ0FBekIsQ0FWOEIsQ0FnQjlCOztBQUNBLE1BQUlFLElBQUosRUFBZ0I7QUFDZEEsVUFBTSxDQUFOQSxrRUFBZ0M7QUFBQSxhQUFNO0FBQ3BDLFVBQU1DLG9CQUFvQixHQUFHQyxtQkFBTyxDQUFQQSxxREFBTyxDQUFQQSxDQUE3Qjs7QUFFQU4sV0FBSyxDQUFMQSxlQUFxQkssb0JBQW9CLENBQXpDTCxPQUF5QyxDQUF6Q0E7QUFIRkk7QUFsQjRCLElBeUI5Qjs7O0FBQ0E7QUExQkY7O2VBNkJlVixVO2dCQUFmLFE7QUFBZTs7Ozs7Ozs7Ozs7OzBCQTNDVEwsWTswQkFDQUMsUzswQkFhQUksVTs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBZEFMLFk7MEJBQ0FDLFM7MEJBS0VFLGlCOzBCQVFGRSxVIiwiZmlsZSI6Im1haW4uNDc2NmY0OGNjYTYwMmUxNDg4NDMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUsIGNvbXBvc2UgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBjb25uZWN0Um91dGVyLCByb3V0ZXJNaWRkbGV3YXJlIH0gZnJvbSAnY29ubmVjdGVkLXJlYWN0LXJvdXRlcic7XG5pbXBvcnQgdGh1bmsgZnJvbSAncmVkdXgtdGh1bmsnO1xuXG5pbXBvcnQgY3JlYXRlUm9vdFJlZHVjZXIgZnJvbSAnLi9yZWR1Y2Vycyc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHt9O1xuY29uc3QgZW5oYW5jZXJzID0gW107XG5cbi8qIGdsb2JhbCB3aW5kb3cgKi9cbi8qIGVzbGludCBuby11bmRlcnNjb3JlLWRhbmdsZTogXCJvZmZcIiAqL1xuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gIGNvbnN0IGRldlRvb2xzRXh0ZW5zaW9uID0gd2luZG93Ll9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX187XG5cbiAgaWYgKHR5cGVvZiBkZXZUb29sc0V4dGVuc2lvbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGVuaGFuY2Vycy5wdXNoKGRldlRvb2xzRXh0ZW5zaW9uKCkpO1xuICB9XG59XG5cbi8vIFNldHVwIFJlZHV4IHN0b3JlIHdpdGggcm91dGluZyBhbmQgdGh1bmtzXG5jb25zdCBzZXR1cFN0b3JlID0gKGhpc3RvcnkpID0+IHtcbiAgY29uc3QgbWlkZGxld2FyZSA9IFt0aHVuaywgcm91dGVyTWlkZGxld2FyZShoaXN0b3J5KV07XG5cbiAgLy8gTWVyZ2UgZW5oYW5jZXJzXG4gIGNvbnN0IGNvbXBvc2VkRW5oYW5jZXJzID0gY29tcG9zZShcbiAgICBhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZSksXG4gICAgLi4uZW5oYW5jZXJzLFxuICApO1xuXG4gIC8vIEJ1aWxkIHRoZSBzdG9yZVxuICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKFxuICAgIGNvbm5lY3RSb3V0ZXIoaGlzdG9yeSkoY3JlYXRlUm9vdFJlZHVjZXIoaGlzdG9yeSkpLFxuICAgIGluaXRpYWxTdGF0ZSxcbiAgICBjb21wb3NlZEVuaGFuY2VycyxcbiAgKTtcblxuICAvLyBIb3QgcmVsb2FkIHJlZHVjZXJzIChyZXF1aXJlcyBXZWJwYWNrIG9yIEJyb3dzZXJpZnkgSE1SIHRvIGJlIGVuYWJsZWQpXG4gIGlmIChtb2R1bGUuaG90KSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoJy4vcmVkdWNlcnMnLCAoKSA9PiB7XG4gICAgICBjb25zdCBjcmVhdGVOZXdSb290UmVkdWNlciA9IHJlcXVpcmUoJy4vcmVkdWNlcnMnKS5kZWZhdWx0O1xuXG4gICAgICBzdG9yZS5yZXBsYWNlUmVkdWNlcihjcmVhdGVOZXdSb290UmVkdWNlcihoaXN0b3J5KSk7XG4gICAgfSk7XG4gIH1cblxuICAvLyBDcmVhdGUgdGhlIHN0b3JlXG4gIHJldHVybiBzdG9yZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNldHVwU3RvcmU7XG4iXSwic291cmNlUm9vdCI6IiJ9