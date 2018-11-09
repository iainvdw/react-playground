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
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(Object(connected_react_router__WEBPACK_IMPORTED_MODULE_1__["connectRouter"])(history)(Object(_reducers__WEBPACK_IMPORTED_MODULE_3__["default"])(history)), initialState, composedEnhancers);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3N0b3JlL2luZGV4LmpzIl0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsImVuaGFuY2VycyIsInByb2Nlc3MiLCJkZXZUb29sc0V4dGVuc2lvbiIsIndpbmRvdyIsInNldHVwU3RvcmUiLCJtaWRkbGV3YXJlIiwicm91dGVyTWlkZGxld2FyZSIsImNvbXBvc2VkRW5oYW5jZXJzIiwiY29tcG9zZSIsImFwcGx5TWlkZGxld2FyZSIsImNyZWF0ZVN0b3JlIiwiY29ubmVjdFJvdXRlciIsImNyZWF0ZVJvb3RSZWR1Y2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxZQUFZLEdBQWxCO0FBQ0EsSUFBTUMsU0FBUyxHQUFmO0FBRUE7O0FBQ0E7O0FBQ0EsSUFBSUMsSUFBSixFQUE0QztBQUMxQyxNQUFNQyxpQkFBaUIsR0FBR0MsTUFBTSxDQUFoQzs7QUFFQSxNQUFJLDZCQUFKLFlBQTZDO0FBQzNDSCxhQUFTLENBQVRBLEtBQWVFLGlCQUFmRjtBQUNEO0VBR0g7OztBQUNBLElBQU1JLFVBQVUsR0FBRyxTQUFiQSxVQUFhLFVBQWE7QUFDOUIsTUFBTUMsVUFBVSxHQUFHLHNEQUFRQywrRUFBZ0IsQ0FEYixPQUNhLENBQXhCLENBQW5CLENBRDhCLENBRzlCOztBQUNBLE1BQU1DLGlCQUFpQixHQUFHQyw2Q0FBTyxDQUFQQSxlQUN4QkMscURBQWUsQ0FBZkEsY0FEd0JELFVBQ3hCQyxDQUR3QkQsU0FBMUIsU0FBMEJBLEVBQTFCO0FBS0EsU0FBT0UseURBQVcsQ0FDaEJDLDRFQUFhLENBQWJBLE9BQWEsQ0FBYkEsQ0FBdUJDLHlEQUFpQixDQUR4QixPQUN3QixDQUF4Q0QsQ0FEZ0IsZ0JBQWxCLGlCQUFrQixDQUFsQjtBQVRGOztlQWdCZVAsVTtnQkFBZixRO0FBQWU7Ozs7Ozs7Ozs7OzswQkE5QlRMLFk7MEJBQ0FDLFM7MEJBYUFJLFU7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQWRBTCxZOzBCQUNBQyxTOzBCQUtFRSxpQjswQkFRRkUsVSIsImZpbGUiOiJtYWluLjRkMjFjM2ZiZDk1MTRjZGZiYjg1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlLCBjb21wb3NlIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgY29ubmVjdFJvdXRlciwgcm91dGVyTWlkZGxld2FyZSB9IGZyb20gJ2Nvbm5lY3RlZC1yZWFjdC1yb3V0ZXInO1xuaW1wb3J0IHRodW5rIGZyb20gJ3JlZHV4LXRodW5rJztcbmltcG9ydCBjcmVhdGVSb290UmVkdWNlciBmcm9tICcuL3JlZHVjZXJzJztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge307XG5jb25zdCBlbmhhbmNlcnMgPSBbXTtcblxuLyogZ2xvYmFsIHdpbmRvdyAqL1xuLyogZXNsaW50IG5vLXVuZGVyc2NvcmUtZGFuZ2xlOiBcIm9mZlwiICovXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgY29uc3QgZGV2VG9vbHNFeHRlbnNpb24gPSB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fXztcblxuICBpZiAodHlwZW9mIGRldlRvb2xzRXh0ZW5zaW9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZW5oYW5jZXJzLnB1c2goZGV2VG9vbHNFeHRlbnNpb24oKSk7XG4gIH1cbn1cblxuLy8gU2V0dXAgUmVkdXggc3RvcmUgd2l0aCByb3V0aW5nIGFuZCB0aHVua3NcbmNvbnN0IHNldHVwU3RvcmUgPSAoaGlzdG9yeSkgPT4ge1xuICBjb25zdCBtaWRkbGV3YXJlID0gW3RodW5rLCByb3V0ZXJNaWRkbGV3YXJlKGhpc3RvcnkpXTtcblxuICAvLyBNZXJnZSBlbmhhbmNlcnNcbiAgY29uc3QgY29tcG9zZWRFbmhhbmNlcnMgPSBjb21wb3NlKFxuICAgIGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlKSxcbiAgICAuLi5lbmhhbmNlcnMsXG4gICk7XG5cbiAgcmV0dXJuIGNyZWF0ZVN0b3JlKFxuICAgIGNvbm5lY3RSb3V0ZXIoaGlzdG9yeSkoY3JlYXRlUm9vdFJlZHVjZXIoaGlzdG9yeSkpLFxuICAgIGluaXRpYWxTdGF0ZSxcbiAgICBjb21wb3NlZEVuaGFuY2VycyxcbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNldHVwU3RvcmU7XG4iXSwic291cmNlUm9vdCI6IiJ9