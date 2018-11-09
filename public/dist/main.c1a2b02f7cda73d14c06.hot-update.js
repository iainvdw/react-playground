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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3N0b3JlL2luZGV4LmpzIl0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsImVuaGFuY2VycyIsInByb2Nlc3MiLCJkZXZUb29sc0V4dGVuc2lvbiIsIndpbmRvdyIsInNldHVwU3RvcmUiLCJtaWRkbGV3YXJlIiwicm91dGVyTWlkZGxld2FyZSIsImNvbXBvc2VkRW5oYW5jZXJzIiwiY29tcG9zZSIsImFwcGx5TWlkZGxld2FyZSIsImNyZWF0ZVN0b3JlIiwiY29ubmVjdFJvdXRlciIsImNyZWF0ZVJvb3RSZWR1Y2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxZQUFZLEdBQWxCO0FBQ0EsSUFBTUMsU0FBUyxHQUFmO0FBRUE7O0FBQ0E7O0FBQ0EsSUFBSUMsSUFBSixFQUE0QztBQUMxQyxNQUFNQyxpQkFBaUIsR0FBR0MsTUFBTSxDQUFoQzs7QUFFQSxNQUFJLDZCQUFKLFlBQTZDO0FBQzNDSCxhQUFTLENBQVRBLEtBQWVFLGlCQUFmRjtBQUNEO0VBR0g7OztBQUNBLElBQU1JLFVBQVUsR0FBRyxTQUFiQSxVQUFhLFVBQWE7QUFDOUIsTUFBTUMsVUFBVSxHQUFHLHNEQUFRQywrRUFBZ0IsQ0FEYixPQUNhLENBQXhCLENBQW5CLENBRDhCLENBRzlCOztBQUNBLE1BQU1DLGlCQUFpQixHQUFHQyw2Q0FBTyxDQUFQQSxlQUN4QkMscURBQWUsQ0FBZkEsY0FEd0JELFVBQ3hCQyxDQUR3QkQsU0FKSSxTQUlKQSxFQUExQixDQUo4QixDQVM5Qjs7QUFDQSxTQUFPRSx5REFBVyxDQUNoQkMsNEVBQWEsQ0FBYkEsT0FBYSxDQUFiQSxDQUF1QkMseURBQWlCLENBRHhCLE9BQ3dCLENBQXhDRCxDQURnQixnQkFBbEIsaUJBQWtCLENBQWxCO0FBVkY7O2VBaUJlUCxVO2dCQUFmLFE7QUFBZTs7Ozs7Ozs7Ozs7OzBCQS9CVEwsWTswQkFDQUMsUzswQkFhQUksVTs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBZEFMLFk7MEJBQ0FDLFM7MEJBS0VFLGlCOzBCQVFGRSxVIiwiZmlsZSI6Im1haW4uYzFhMmIwMmY3Y2RhNzNkMTRjMDYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUsIGNvbXBvc2UgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBjb25uZWN0Um91dGVyLCByb3V0ZXJNaWRkbGV3YXJlIH0gZnJvbSAnY29ubmVjdGVkLXJlYWN0LXJvdXRlcic7XG5pbXBvcnQgdGh1bmsgZnJvbSAncmVkdXgtdGh1bmsnO1xuaW1wb3J0IGNyZWF0ZVJvb3RSZWR1Y2VyIGZyb20gJy4vcmVkdWNlcnMnO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7fTtcbmNvbnN0IGVuaGFuY2VycyA9IFtdO1xuXG4vKiBnbG9iYWwgd2luZG93ICovXG4vKiBlc2xpbnQgbm8tdW5kZXJzY29yZS1kYW5nbGU6IFwib2ZmXCIgKi9cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICBjb25zdCBkZXZUb29sc0V4dGVuc2lvbiA9IHdpbmRvdy5fX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9fO1xuXG4gIGlmICh0eXBlb2YgZGV2VG9vbHNFeHRlbnNpb24gPT09ICdmdW5jdGlvbicpIHtcbiAgICBlbmhhbmNlcnMucHVzaChkZXZUb29sc0V4dGVuc2lvbigpKTtcbiAgfVxufVxuXG4vLyBTZXR1cCBSZWR1eCBzdG9yZSB3aXRoIHJvdXRpbmcgYW5kIHRodW5rc1xuY29uc3Qgc2V0dXBTdG9yZSA9IChoaXN0b3J5KSA9PiB7XG4gIGNvbnN0IG1pZGRsZXdhcmUgPSBbdGh1bmssIHJvdXRlck1pZGRsZXdhcmUoaGlzdG9yeSldO1xuXG4gIC8vIE1lcmdlIGVuaGFuY2Vyc1xuICBjb25zdCBjb21wb3NlZEVuaGFuY2VycyA9IGNvbXBvc2UoXG4gICAgYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmUpLFxuICAgIC4uLmVuaGFuY2VycyxcbiAgKTtcblxuICAvLyBDcmVhdGUgdGhlIHN0b3JlXG4gIHJldHVybiBjcmVhdGVTdG9yZShcbiAgICBjb25uZWN0Um91dGVyKGhpc3RvcnkpKGNyZWF0ZVJvb3RSZWR1Y2VyKGhpc3RvcnkpKSxcbiAgICBpbml0aWFsU3RhdGUsXG4gICAgY29tcG9zZWRFbmhhbmNlcnMsXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzZXR1cFN0b3JlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==