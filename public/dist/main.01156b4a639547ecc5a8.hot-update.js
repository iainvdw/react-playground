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

  var composedEnhancers = redux__WEBPACK_IMPORTED_MODULE_0__["compose"].apply(void 0, [redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"].apply(void 0, middleware)].concat(enhancers)); // Create the store

  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(Object(connected_react_router__WEBPACK_IMPORTED_MODULE_1__["connectRouter"])(history)(Object(_reducers__WEBPACK_IMPORTED_MODULE_3__["default"])(history)), initialState, composedEnhancers);
}; // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)


if (true) {
  module.hot.accept(!(function webpackMissingModule() { var e = new Error("Cannot find module '../reducers/rootReducer'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), function(__WEBPACK_OUTDATED_DEPENDENCIES__) { (function () {
    return store.replaceReducer(__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module '../reducers/rootReducer'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())).default);
  })(__WEBPACK_OUTDATED_DEPENDENCIES__); });
  module.hot.accept(!(function webpackMissingModule() { var e = new Error("Cannot find module '../sagas/SagaManager'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), function(__WEBPACK_OUTDATED_DEPENDENCIES__) { (function () {
    SagaManager.cancelSagas(store);

    __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module '../sagas/SagaManager'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())).default.startSagas(sagaMiddleware);
  })(__WEBPACK_OUTDATED_DEPENDENCIES__); });
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3N0b3JlL2luZGV4LmpzIl0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsImVuaGFuY2VycyIsInByb2Nlc3MiLCJkZXZUb29sc0V4dGVuc2lvbiIsIndpbmRvdyIsInNldHVwU3RvcmUiLCJtaWRkbGV3YXJlIiwicm91dGVyTWlkZGxld2FyZSIsImNvbXBvc2VkRW5oYW5jZXJzIiwiY29tcG9zZSIsImFwcGx5TWlkZGxld2FyZSIsImNyZWF0ZVN0b3JlIiwiY29ubmVjdFJvdXRlciIsImNyZWF0ZVJvb3RSZWR1Y2VyIiwibW9kdWxlIiwic3RvcmUiLCJyZXF1aXJlIiwiU2FnYU1hbmFnZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFlBQVksR0FBbEI7QUFDQSxJQUFNQyxTQUFTLEdBQWY7QUFFQTs7QUFDQTs7QUFDQSxJQUFJQyxJQUFKLEVBQTRDO0FBQzFDLE1BQU1DLGlCQUFpQixHQUFHQyxNQUFNLENBQWhDOztBQUVBLE1BQUksNkJBQUosWUFBNkM7QUFDM0NILGFBQVMsQ0FBVEEsS0FBZUUsaUJBQWZGO0FBQ0Q7RUFHSDs7O0FBQ0EsSUFBTUksVUFBVSxHQUFHLFNBQWJBLFVBQWEsVUFBYTtBQUM5QixNQUFNQyxVQUFVLEdBQUcsc0RBQVFDLCtFQUFnQixDQURiLE9BQ2EsQ0FBeEIsQ0FBbkIsQ0FEOEIsQ0FHOUI7O0FBQ0EsTUFBTUMsaUJBQWlCLEdBQUdDLDZDQUFPLENBQVBBLGVBQ3hCQyxxREFBZSxDQUFmQSxjQUR3QkQsVUFDeEJDLENBRHdCRCxTQUpJLFNBSUpBLEVBQTFCLENBSjhCLENBUzlCOztBQUNBLFNBQU9FLHlEQUFXLENBQ2hCQyw0RUFBYSxDQUFiQSxPQUFhLENBQWJBLENBQXVCQyx5REFBaUIsQ0FEeEIsT0FDd0IsQ0FBeENELENBRGdCLGdCQUFsQixpQkFBa0IsQ0FBbEI7QUFWRixFLENBaUJBOzs7QUFDQSxJQUFJRSxJQUFKLEVBQWdCO0FBQ2RBLFFBQU0sQ0FBTkEsOEpBQTZDO0FBQUEsV0FBTUMsS0FBSyxDQUFMQSxlQUFxQkMsbUJBQU8sQ0FBUEEsaUpBQU8sQ0FBUEEsQ0FBM0IsT0FBTUQsQ0FBTjtBQUE3Q0Q7QUFFQUEsUUFBTSxDQUFOQSwySkFBMEMsMkRBQU07QUFDOUNHLGVBQVcsQ0FBWEE7O0FBQ0FELHVCQUFPLENBQVBBLDhJQUFPLENBQVBBO0FBRkZGO0FBSUQ7O2VBRWNULFU7Z0JBQWYsUTtBQUFlOzs7Ozs7Ozs7Ozs7MEJBekNUTCxZOzBCQUNBQyxTOzBCQWFBSSxVOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFkQUwsWTswQkFDQUMsUzswQkFLRUUsaUI7MEJBUUZFLFUiLCJmaWxlIjoibWFpbi4wMTE1NmI0YTYzOTU0N2VjYzVhOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSwgY29tcG9zZSB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7IGNvbm5lY3RSb3V0ZXIsIHJvdXRlck1pZGRsZXdhcmUgfSBmcm9tICdjb25uZWN0ZWQtcmVhY3Qtcm91dGVyJztcbmltcG9ydCB0aHVuayBmcm9tICdyZWR1eC10aHVuayc7XG5pbXBvcnQgY3JlYXRlUm9vdFJlZHVjZXIgZnJvbSAnLi9yZWR1Y2Vycyc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHt9O1xuY29uc3QgZW5oYW5jZXJzID0gW107XG5cbi8qIGdsb2JhbCB3aW5kb3cgKi9cbi8qIGVzbGludCBuby11bmRlcnNjb3JlLWRhbmdsZTogXCJvZmZcIiAqL1xuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gIGNvbnN0IGRldlRvb2xzRXh0ZW5zaW9uID0gd2luZG93Ll9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX187XG5cbiAgaWYgKHR5cGVvZiBkZXZUb29sc0V4dGVuc2lvbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGVuaGFuY2Vycy5wdXNoKGRldlRvb2xzRXh0ZW5zaW9uKCkpO1xuICB9XG59XG5cbi8vIFNldHVwIFJlZHV4IHN0b3JlIHdpdGggcm91dGluZyBhbmQgdGh1bmtzXG5jb25zdCBzZXR1cFN0b3JlID0gKGhpc3RvcnkpID0+IHtcbiAgY29uc3QgbWlkZGxld2FyZSA9IFt0aHVuaywgcm91dGVyTWlkZGxld2FyZShoaXN0b3J5KV07XG5cbiAgLy8gTWVyZ2UgZW5oYW5jZXJzXG4gIGNvbnN0IGNvbXBvc2VkRW5oYW5jZXJzID0gY29tcG9zZShcbiAgICBhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZSksXG4gICAgLi4uZW5oYW5jZXJzLFxuICApO1xuXG4gIC8vIENyZWF0ZSB0aGUgc3RvcmVcbiAgcmV0dXJuIGNyZWF0ZVN0b3JlKFxuICAgIGNvbm5lY3RSb3V0ZXIoaGlzdG9yeSkoY3JlYXRlUm9vdFJlZHVjZXIoaGlzdG9yeSkpLFxuICAgIGluaXRpYWxTdGF0ZSxcbiAgICBjb21wb3NlZEVuaGFuY2VycyxcbiAgKTtcbn07XG5cbi8vIEhvdCByZWxvYWQgcmVkdWNlcnMgKHJlcXVpcmVzIFdlYnBhY2sgb3IgQnJvd3NlcmlmeSBITVIgdG8gYmUgZW5hYmxlZClcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KCcuLi9yZWR1Y2Vycy9yb290UmVkdWNlcicsICgpID0+IHN0b3JlLnJlcGxhY2VSZWR1Y2VyKHJlcXVpcmUoJy4uL3JlZHVjZXJzL3Jvb3RSZWR1Y2VyJykuZGVmYXVsdCkpO1xuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KCcuLi9zYWdhcy9TYWdhTWFuYWdlcicsICgpID0+IHtcbiAgICBTYWdhTWFuYWdlci5jYW5jZWxTYWdhcyhzdG9yZSk7XG4gICAgcmVxdWlyZSgnLi4vc2FnYXMvU2FnYU1hbmFnZXInKS5kZWZhdWx0LnN0YXJ0U2FnYXMoc2FnYU1pZGRsZXdhcmUpO1xuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc2V0dXBTdG9yZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=