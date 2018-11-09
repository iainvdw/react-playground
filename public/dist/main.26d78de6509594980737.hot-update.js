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
/* harmony import */ var connected_react_router_immutable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! connected-react-router/immutable */ "./node_modules/connected-react-router/immutable.js");
/* harmony import */ var connected_react_router_immutable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(connected_react_router_immutable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reducers */ "./src/app/store/reducers/index.js");
(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();






var initialState = immutable__WEBPACK_IMPORTED_MODULE_3__["default"].Map();
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
  var middleware = [redux_thunk__WEBPACK_IMPORTED_MODULE_2__["default"], Object(connected_react_router_immutable__WEBPACK_IMPORTED_MODULE_1__["routerMiddleware"])(history)]; // Merge enhancers

  var composedEnhancers = redux__WEBPACK_IMPORTED_MODULE_0__["compose"].apply(void 0, [redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"].apply(void 0, middleware)].concat(enhancers)); // Build the store

  var store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(Object(connected_react_router_immutable__WEBPACK_IMPORTED_MODULE_1__["connectRouter"])(history)(Object(_reducers__WEBPACK_IMPORTED_MODULE_4__["default"])(history)), initialState, composedEnhancers); // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)

  if (true) {
    module.hot.accept(/*! ./reducers */ "./src/app/store/reducers/index.js", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reducers */ "./src/app/store/reducers/index.js");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3N0b3JlL2luZGV4LmpzIl0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsIkltbXV0YWJsZSIsImVuaGFuY2VycyIsInByb2Nlc3MiLCJkZXZUb29sc0V4dGVuc2lvbiIsIndpbmRvdyIsInNldHVwU3RvcmUiLCJtaWRkbGV3YXJlIiwicm91dGVyTWlkZGxld2FyZSIsImNvbXBvc2VkRW5oYW5jZXJzIiwiY29tcG9zZSIsImFwcGx5TWlkZGxld2FyZSIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJjb25uZWN0Um91dGVyIiwiY3JlYXRlUm9vdFJlZHVjZXIiLCJtb2R1bGUiLCJjcmVhdGVOZXdSb290UmVkdWNlciIsInJlcXVpcmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBLElBQU1BLFlBQVksR0FBR0MsaURBQVMsQ0FBOUIsR0FBcUJBLEVBQXJCO0FBQ0EsSUFBTUMsU0FBUyxHQUFmO0FBRUE7O0FBQ0E7O0FBQ0EsSUFBSUMsSUFBSixFQUE0QztBQUMxQyxNQUFNQyxpQkFBaUIsR0FBR0MsTUFBTSxDQUFoQzs7QUFFQSxNQUFJLDZCQUFKLFlBQTZDO0FBQzNDSCxhQUFTLENBQVRBLEtBQWVFLGlCQUFmRjtBQUNEO0VBR0g7OztBQUNBLElBQU1JLFVBQVUsR0FBRyxTQUFiQSxVQUFhLFVBQWE7QUFDOUIsTUFBTUMsVUFBVSxHQUFHLHNEQUFRQyx5RkFBZ0IsQ0FEYixPQUNhLENBQXhCLENBQW5CLENBRDhCLENBRzlCOztBQUNBLE1BQU1DLGlCQUFpQixHQUFHQyw2Q0FBTyxDQUFQQSxlQUN4QkMscURBQWUsQ0FBZkEsY0FEd0JELFVBQ3hCQyxDQUR3QkQsU0FKSSxTQUlKQSxFQUExQixDQUo4QixDQVM5Qjs7QUFDQSxNQUFNRSxLQUFLLEdBQUdDLHlEQUFXLENBQ3ZCQyxzRkFBYSxDQUFiQSxPQUFhLENBQWJBLENBQXVCQyx5REFBaUIsQ0FEakIsT0FDaUIsQ0FBeENELENBRHVCLGdCQVZLLGlCQVVMLENBQXpCLENBVjhCLENBZ0I5Qjs7QUFDQSxNQUFJRSxJQUFKLEVBQWdCO0FBQ2RBLFVBQU0sQ0FBTkEsa0VBQWdDO0FBQUEsYUFBTTtBQUNwQyxVQUFNQyxvQkFBb0IsR0FBR0MsbUJBQU8sQ0FBUEEscURBQU8sQ0FBUEEsQ0FBN0I7O0FBRUFOLFdBQUssQ0FBTEEsZUFBcUJLLG9CQUFvQixDQUF6Q0wsT0FBeUMsQ0FBekNBO0FBSEZJO0FBbEI0QixJQXlCOUI7OztBQUNBO0FBMUJGOztlQTZCZVYsVTtnQkFBZixRO0FBQWU7Ozs7Ozs7Ozs7OzswQkEzQ1ROLFk7MEJBQ0FFLFM7MEJBYUFJLFU7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQWRBTixZOzBCQUNBRSxTOzBCQUtFRSxpQjswQkFRRkUsVSIsImZpbGUiOiJtYWluLjI2ZDc4ZGU2NTA5NTk0OTgwNzM3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlLCBjb21wb3NlIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgY29ubmVjdFJvdXRlciwgcm91dGVyTWlkZGxld2FyZSB9IGZyb20gJ2Nvbm5lY3RlZC1yZWFjdC1yb3V0ZXIvaW1tdXRhYmxlJztcbmltcG9ydCB0aHVuayBmcm9tICdyZWR1eC10aHVuayc7XG5pbXBvcnQgSW1tdXRhYmxlIGZyb20gJ2ltbXV0YWJsZSc7XG5cbmltcG9ydCBjcmVhdGVSb290UmVkdWNlciBmcm9tICcuL3JlZHVjZXJzJztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0gSW1tdXRhYmxlLk1hcCgpO1xuY29uc3QgZW5oYW5jZXJzID0gW107XG5cbi8qIGdsb2JhbCB3aW5kb3cgKi9cbi8qIGVzbGludCBuby11bmRlcnNjb3JlLWRhbmdsZTogXCJvZmZcIiAqL1xuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gIGNvbnN0IGRldlRvb2xzRXh0ZW5zaW9uID0gd2luZG93Ll9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX187XG5cbiAgaWYgKHR5cGVvZiBkZXZUb29sc0V4dGVuc2lvbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGVuaGFuY2Vycy5wdXNoKGRldlRvb2xzRXh0ZW5zaW9uKCkpO1xuICB9XG59XG5cbi8vIFNldHVwIFJlZHV4IHN0b3JlIHdpdGggcm91dGluZyBhbmQgdGh1bmtzXG5jb25zdCBzZXR1cFN0b3JlID0gKGhpc3RvcnkpID0+IHtcbiAgY29uc3QgbWlkZGxld2FyZSA9IFt0aHVuaywgcm91dGVyTWlkZGxld2FyZShoaXN0b3J5KV07XG5cbiAgLy8gTWVyZ2UgZW5oYW5jZXJzXG4gIGNvbnN0IGNvbXBvc2VkRW5oYW5jZXJzID0gY29tcG9zZShcbiAgICBhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZSksXG4gICAgLi4uZW5oYW5jZXJzLFxuICApO1xuXG4gIC8vIEJ1aWxkIHRoZSBzdG9yZVxuICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKFxuICAgIGNvbm5lY3RSb3V0ZXIoaGlzdG9yeSkoY3JlYXRlUm9vdFJlZHVjZXIoaGlzdG9yeSkpLFxuICAgIGluaXRpYWxTdGF0ZSxcbiAgICBjb21wb3NlZEVuaGFuY2VycyxcbiAgKTtcblxuICAvLyBIb3QgcmVsb2FkIHJlZHVjZXJzIChyZXF1aXJlcyBXZWJwYWNrIG9yIEJyb3dzZXJpZnkgSE1SIHRvIGJlIGVuYWJsZWQpXG4gIGlmIChtb2R1bGUuaG90KSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoJy4vcmVkdWNlcnMnLCAoKSA9PiB7XG4gICAgICBjb25zdCBjcmVhdGVOZXdSb290UmVkdWNlciA9IHJlcXVpcmUoJy4vcmVkdWNlcnMnKS5kZWZhdWx0O1xuXG4gICAgICBzdG9yZS5yZXBsYWNlUmVkdWNlcihjcmVhdGVOZXdSb290UmVkdWNlcihoaXN0b3J5KSk7XG4gICAgfSk7XG4gIH1cblxuICAvLyBDcmVhdGUgdGhlIHN0b3JlXG4gIHJldHVybiBzdG9yZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNldHVwU3RvcmU7XG4iXSwic291cmNlUm9vdCI6IiJ9