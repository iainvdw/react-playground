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

  var store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(Object(_reducers__WEBPACK_IMPORTED_MODULE_3__["default"])(history), initialState, composedEnhancers); // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3N0b3JlL2luZGV4LmpzIl0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsImVuaGFuY2VycyIsInByb2Nlc3MiLCJkZXZUb29sc0V4dGVuc2lvbiIsIndpbmRvdyIsInNldHVwU3RvcmUiLCJtaWRkbGV3YXJlIiwicm91dGVyTWlkZGxld2FyZSIsImNvbXBvc2VkRW5oYW5jZXJzIiwiY29tcG9zZSIsImFwcGx5TWlkZGxld2FyZSIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJjcmVhdGVSb290UmVkdWNlciIsIm1vZHVsZSIsImNyZWF0ZU5ld1Jvb3RSZWR1Y2VyIiwicmVxdWlyZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsWUFBWSxHQUFsQjtBQUNBLElBQU1DLFNBQVMsR0FBZjtBQUVBOztBQUNBOztBQUNBLElBQUlDLElBQUosRUFBNEM7QUFDMUMsTUFBTUMsaUJBQWlCLEdBQUdDLE1BQU0sQ0FBaEM7O0FBRUEsTUFBSSw2QkFBSixZQUE2QztBQUMzQ0gsYUFBUyxDQUFUQSxLQUFlRSxpQkFBZkY7QUFDRDtFQUdIOzs7QUFDQSxJQUFNSSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxVQUFhO0FBQzlCLE1BQU1DLFVBQVUsR0FBRyxzREFBUUMsK0VBQWdCLENBRGIsT0FDYSxDQUF4QixDQUFuQixDQUQ4QixDQUc5Qjs7QUFDQSxNQUFNQyxpQkFBaUIsR0FBR0MsNkNBQU8sQ0FBUEEsZUFDeEJDLHFEQUFlLENBQWZBLGNBRHdCRCxVQUN4QkMsQ0FEd0JELFNBSkksU0FJSkEsRUFBMUIsQ0FKOEIsQ0FTOUI7O0FBQ0EsTUFBTUUsS0FBSyxHQUFHQyx5REFBVyxDQUFDQyx5REFBaUIsQ0FBbEIsT0FBa0IsQ0FBbEIsZ0JBVkssaUJBVUwsQ0FBekIsQ0FWOEIsQ0FZOUI7O0FBQ0EsTUFBSUMsSUFBSixFQUFnQjtBQUNkQSxVQUFNLENBQU5BLGtFQUFnQztBQUFBLGFBQU07QUFDcEMsVUFBTUMsb0JBQW9CLEdBQUdDLG1CQUFPLENBQVBBLHFEQUFPLENBQVBBLENBQTdCOztBQUVBTCxXQUFLLENBQUxBLGVBQXFCSSxvQkFBb0IsQ0FBekNKLE9BQXlDLENBQXpDQTtBQUhGRztBQWQ0QixJQXFCOUI7OztBQUNBO0FBdEJGOztlQXlCZVQsVTtnQkFBZixRO0FBQWU7Ozs7Ozs7Ozs7OzswQkF2Q1RMLFk7MEJBQ0FDLFM7MEJBYUFJLFU7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQWRBTCxZOzBCQUNBQyxTOzBCQUtFRSxpQjswQkFRRkUsVSIsImZpbGUiOiJtYWluLmEwYzBjN2I2YzZiMWY2MzA0MDAxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlLCBjb21wb3NlIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgY29ubmVjdFJvdXRlciwgcm91dGVyTWlkZGxld2FyZSB9IGZyb20gJ2Nvbm5lY3RlZC1yZWFjdC1yb3V0ZXInO1xuaW1wb3J0IHRodW5rIGZyb20gJ3JlZHV4LXRodW5rJztcbmltcG9ydCBjcmVhdGVSb290UmVkdWNlciBmcm9tICcuL3JlZHVjZXJzJztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge307XG5jb25zdCBlbmhhbmNlcnMgPSBbXTtcblxuLyogZ2xvYmFsIHdpbmRvdyAqL1xuLyogZXNsaW50IG5vLXVuZGVyc2NvcmUtZGFuZ2xlOiBcIm9mZlwiICovXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgY29uc3QgZGV2VG9vbHNFeHRlbnNpb24gPSB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fXztcblxuICBpZiAodHlwZW9mIGRldlRvb2xzRXh0ZW5zaW9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZW5oYW5jZXJzLnB1c2goZGV2VG9vbHNFeHRlbnNpb24oKSk7XG4gIH1cbn1cblxuLy8gU2V0dXAgUmVkdXggc3RvcmUgd2l0aCByb3V0aW5nIGFuZCB0aHVua3NcbmNvbnN0IHNldHVwU3RvcmUgPSAoaGlzdG9yeSkgPT4ge1xuICBjb25zdCBtaWRkbGV3YXJlID0gW3RodW5rLCByb3V0ZXJNaWRkbGV3YXJlKGhpc3RvcnkpXTtcblxuICAvLyBNZXJnZSBlbmhhbmNlcnNcbiAgY29uc3QgY29tcG9zZWRFbmhhbmNlcnMgPSBjb21wb3NlKFxuICAgIGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlKSxcbiAgICAuLi5lbmhhbmNlcnMsXG4gICk7XG5cbiAgLy8gQnVpbGQgdGhlIHN0b3JlXG4gIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUoY3JlYXRlUm9vdFJlZHVjZXIoaGlzdG9yeSksIGluaXRpYWxTdGF0ZSwgY29tcG9zZWRFbmhhbmNlcnMpO1xuXG4gIC8vIEhvdCByZWxvYWQgcmVkdWNlcnMgKHJlcXVpcmVzIFdlYnBhY2sgb3IgQnJvd3NlcmlmeSBITVIgdG8gYmUgZW5hYmxlZClcbiAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgnLi9yZWR1Y2VycycsICgpID0+IHtcbiAgICAgIGNvbnN0IGNyZWF0ZU5ld1Jvb3RSZWR1Y2VyID0gcmVxdWlyZSgnLi9yZWR1Y2VycycpLmRlZmF1bHQ7XG5cbiAgICAgIHN0b3JlLnJlcGxhY2VSZWR1Y2VyKGNyZWF0ZU5ld1Jvb3RSZWR1Y2VyKGhpc3RvcnkpKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIENyZWF0ZSB0aGUgc3RvcmVcbiAgcmV0dXJuIHN0b3JlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc2V0dXBTdG9yZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=