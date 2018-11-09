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
} // Setup Redux store with routing and thunk


var setupStore = function setupStore(history) {
  var middleware = [redux_thunk__WEBPACK_IMPORTED_MODULE_2__["default"], Object(connected_react_router__WEBPACK_IMPORTED_MODULE_1__["routerMiddleware"])(history)];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3N0b3JlL2luZGV4LmpzIl0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsImVuaGFuY2VycyIsInByb2Nlc3MiLCJkZXZUb29sc0V4dGVuc2lvbiIsIndpbmRvdyIsInNldHVwU3RvcmUiLCJtaWRkbGV3YXJlIiwicm91dGVyTWlkZGxld2FyZSIsImNvbXBvc2VkRW5oYW5jZXJzIiwiY29tcG9zZSIsImFwcGx5TWlkZGxld2FyZSIsImNyZWF0ZVN0b3JlIiwiY29ubmVjdFJvdXRlciIsImNyZWF0ZVJvb3RSZWR1Y2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxZQUFZLEdBQWxCO0FBQ0EsSUFBTUMsU0FBUyxHQUFmO0FBRUE7O0FBQ0E7O0FBQ0EsSUFBSUMsSUFBSixFQUE0QztBQUMxQyxNQUFNQyxpQkFBaUIsR0FBR0MsTUFBTSxDQUFoQzs7QUFFQSxNQUFJLDZCQUFKLFlBQTZDO0FBQzNDSCxhQUFTLENBQVRBLEtBQWVFLGlCQUFmRjtBQUNEO0VBR0g7OztBQUNBLElBQU1JLFVBQVUsR0FBRyxTQUFiQSxVQUFhLFVBQWE7QUFDOUIsTUFBTUMsVUFBVSxHQUFHLHNEQUFRQywrRUFBZ0IsQ0FBM0MsT0FBMkMsQ0FBeEIsQ0FBbkI7QUFFQSxNQUFNQyxpQkFBaUIsR0FBR0MsNkNBQU8sQ0FBUEEsZUFDeEJDLHFEQUFlLENBQWZBLGNBRHdCRCxVQUN4QkMsQ0FEd0JELFNBQTFCLFNBQTBCQSxFQUExQjtBQUtBLFNBQU9FLHlEQUFXLENBQ2hCQyw0RUFBYSxDQUFiQSxPQUFhLENBQWJBLENBQXVCQyx5REFBaUIsQ0FEeEIsT0FDd0IsQ0FBeENELENBRGdCLGdCQUFsQixpQkFBa0IsQ0FBbEI7QUFSRjs7ZUFlZVAsVTtnQkFBZixRO0FBQWU7Ozs7Ozs7Ozs7OzswQkE3QlRMLFk7MEJBQ0FDLFM7MEJBYUFJLFU7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQWRBTCxZOzBCQUNBQyxTOzBCQUtFRSxpQjswQkFRRkUsVSIsImZpbGUiOiJtYWluLmFiMjdlNzU5MGVhMDVmZDYzZTI2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlLCBjb21wb3NlIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgY29ubmVjdFJvdXRlciwgcm91dGVyTWlkZGxld2FyZSB9IGZyb20gJ2Nvbm5lY3RlZC1yZWFjdC1yb3V0ZXInO1xuaW1wb3J0IHRodW5rIGZyb20gJ3JlZHV4LXRodW5rJztcbmltcG9ydCBjcmVhdGVSb290UmVkdWNlciBmcm9tICcuL3JlZHVjZXJzJztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge307XG5jb25zdCBlbmhhbmNlcnMgPSBbXTtcblxuLyogZ2xvYmFsIHdpbmRvdyAqL1xuLyogZXNsaW50IG5vLXVuZGVyc2NvcmUtZGFuZ2xlOiBcIm9mZlwiICovXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgY29uc3QgZGV2VG9vbHNFeHRlbnNpb24gPSB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fXztcblxuICBpZiAodHlwZW9mIGRldlRvb2xzRXh0ZW5zaW9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZW5oYW5jZXJzLnB1c2goZGV2VG9vbHNFeHRlbnNpb24oKSk7XG4gIH1cbn1cblxuLy8gU2V0dXAgUmVkdXggc3RvcmUgd2l0aCByb3V0aW5nIGFuZCB0aHVua1xuY29uc3Qgc2V0dXBTdG9yZSA9IChoaXN0b3J5KSA9PiB7XG4gIGNvbnN0IG1pZGRsZXdhcmUgPSBbdGh1bmssIHJvdXRlck1pZGRsZXdhcmUoaGlzdG9yeSldO1xuXG4gIGNvbnN0IGNvbXBvc2VkRW5oYW5jZXJzID0gY29tcG9zZShcbiAgICBhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZSksXG4gICAgLi4uZW5oYW5jZXJzLFxuICApO1xuXG4gIHJldHVybiBjcmVhdGVTdG9yZShcbiAgICBjb25uZWN0Um91dGVyKGhpc3RvcnkpKGNyZWF0ZVJvb3RSZWR1Y2VyKGhpc3RvcnkpKSxcbiAgICBpbml0aWFsU3RhdGUsXG4gICAgY29tcG9zZWRFbmhhbmNlcnMsXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzZXR1cFN0b3JlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==