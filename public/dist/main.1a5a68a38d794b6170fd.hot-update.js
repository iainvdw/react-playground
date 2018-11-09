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
  var middleware = [redux_thunk__WEBPACK_IMPORTED_MODULE_2__["default"], Object(connected_react_router__WEBPACK_IMPORTED_MODULE_1__["routerMiddleware"])(history)]; // Merge enhancers

  var composedEnhancers = redux__WEBPACK_IMPORTED_MODULE_0__["compose"].apply(void 0, [redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"].apply(void 0, middleware)].concat(enhancers)); // Build the store

  var store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(Object(connected_react_router__WEBPACK_IMPORTED_MODULE_1__["connectRouter"])(history)(Object(_reducers__WEBPACK_IMPORTED_MODULE_4__["default"])(history)), initialState, composedEnhancers); // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)

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

/***/ }),

/***/ "./src/app/store/reducers/auth.js":
/*!****************************************!*\
  !*** ./src/app/store/reducers/auth.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var core_js_modules_es6_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.object.define-property */ "./node_modules/core-js/modules/es6.object.define-property.js");
/* harmony import */ var core_js_modules_es6_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_array_for_each__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.array.for-each */ "./node_modules/core-js/modules/es6.array.for-each.js");
/* harmony import */ var core_js_modules_es6_array_for_each__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_for_each__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_array_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.array.filter */ "./node_modules/core-js/modules/es6.array.filter.js");
/* harmony import */ var core_js_modules_es6_array_filter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_filter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es6.object.keys */ "./node_modules/core-js/modules/es6.object.keys.js");
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _actions_auth_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actions/auth-actions */ "./src/app/store/actions/auth-actions.js");







(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();








(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}


var initialState = {
  loading: false,
  error: null,
  user: null
};

var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions_auth_actions__WEBPACK_IMPORTED_MODULE_6__["REQUEST_AUTH"]:
      return _objectSpread({}, state, {
        loading: true
      });

    case _actions_auth_actions__WEBPACK_IMPORTED_MODULE_6__["AUTH_ERROR"]:
      return _objectSpread({}, state, {
        loading: false,
        error: action.payload.error
      });

    case _actions_auth_actions__WEBPACK_IMPORTED_MODULE_6__["AUTH_USER"]:
      return _objectSpread({}, state, {
        user: action.payload.user,
        loading: false,
        error: null
      });

    case _actions_auth_actions__WEBPACK_IMPORTED_MODULE_6__["LOGOUT_USER"]:
      return _objectSpread({}, state, {
        user: null,
        loading: false,
        error: null
      });

    default:
      return _objectSpread({}, state);
  }
};

var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(initialState, "initialState", "/Users/iain/Projects/react-ssr/src/app/store/reducers/auth.js");
  reactHotLoader.register(_default, "default", "/Users/iain/Projects/react-ssr/src/app/store/reducers/auth.js");
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

  reactHotLoader.register(_objectSpread, "_objectSpread", "/Users/iain/Projects/react-ssr/src/app/store/reducers/auth.js");
  reactHotLoader.register(_defineProperty, "_defineProperty", "/Users/iain/Projects/react-ssr/src/app/store/reducers/auth.js");
  reactHotLoader.register(initialState, "initialState", "/Users/iain/Projects/react-ssr/src/app/store/reducers/auth.js");
  reactHotLoader.register(_default, "_default", "/Users/iain/Projects/react-ssr/src/app/store/reducers/auth.js");
  reactHotLoader.register(_default2, "default", "/Users/iain/Projects/react-ssr/src/app/store/reducers/auth.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/app/store/reducers/index.js":
/*!*****************************************!*\
  !*** ./src/app/store/reducers/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var redux_immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-immutable */ "./node_modules/redux-immutable/dist/index.js");
/* harmony import */ var redux_immutable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_immutable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var connected_react_router_immutable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! connected-react-router/immutable */ "./node_modules/connected-react-router/immutable.js");
/* harmony import */ var connected_react_router_immutable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(connected_react_router_immutable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth */ "./src/app/store/reducers/auth.js");
(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();





var _default = function _default(history) {
  return Object(redux_immutable__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
    router: Object(connected_react_router_immutable__WEBPACK_IMPORTED_MODULE_1__["connectRouter"])(history),
    auth: _auth__WEBPACK_IMPORTED_MODULE_2__["default"]
  });
};

var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, "default", "/Users/iain/Projects/react-ssr/src/app/store/reducers/index.js");
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

  reactHotLoader.register(_default, "_default", "/Users/iain/Projects/react-ssr/src/app/store/reducers/index.js");
  reactHotLoader.register(_default2, "default", "/Users/iain/Projects/react-ssr/src/app/store/reducers/index.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3N0b3JlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvc3RvcmUvcmVkdWNlcnMvYXV0aC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3N0b3JlL3JlZHVjZXJzL2luZGV4LmpzIl0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsIkltbXV0YWJsZSIsImVuaGFuY2VycyIsInByb2Nlc3MiLCJkZXZUb29sc0V4dGVuc2lvbiIsIndpbmRvdyIsInNldHVwU3RvcmUiLCJtaWRkbGV3YXJlIiwicm91dGVyTWlkZGxld2FyZSIsImNvbXBvc2VkRW5oYW5jZXJzIiwiY29tcG9zZSIsImFwcGx5TWlkZGxld2FyZSIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJjb25uZWN0Um91dGVyIiwiY3JlYXRlUm9vdFJlZHVjZXIiLCJtb2R1bGUiLCJjcmVhdGVOZXdSb290UmVkdWNlciIsInJlcXVpcmUiLCJsb2FkaW5nIiwiZXJyb3IiLCJ1c2VyIiwic3RhdGUiLCJhY3Rpb24iLCJjb21iaW5lUmVkdWNlcnMiLCJyb3V0ZXIiLCJhdXRoIiwiYXV0aFJlZHVjZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBLElBQU1BLFlBQVksR0FBR0MsaURBQVMsQ0FBOUIsR0FBcUJBLEVBQXJCO0FBQ0EsSUFBTUMsU0FBUyxHQUFmO0FBRUE7O0FBQ0E7O0FBQ0EsSUFBSUMsSUFBSixFQUE0QztBQUMxQyxNQUFNQyxpQkFBaUIsR0FBR0MsTUFBTSxDQUFoQzs7QUFFQSxNQUFJLDZCQUFKLFlBQTZDO0FBQzNDSCxhQUFTLENBQVRBLEtBQWVFLGlCQUFmRjtBQUNEO0VBR0g7OztBQUNBLElBQU1JLFVBQVUsR0FBRyxTQUFiQSxVQUFhLFVBQWE7QUFDOUIsTUFBTUMsVUFBVSxHQUFHLHNEQUFRQywrRUFBZ0IsQ0FEYixPQUNhLENBQXhCLENBQW5CLENBRDhCLENBRzlCOztBQUNBLE1BQU1DLGlCQUFpQixHQUFHQyw2Q0FBTyxDQUFQQSxlQUN4QkMscURBQWUsQ0FBZkEsY0FEd0JELFVBQ3hCQyxDQUR3QkQsU0FKSSxTQUlKQSxFQUExQixDQUo4QixDQVM5Qjs7QUFDQSxNQUFNRSxLQUFLLEdBQUdDLHlEQUFXLENBQ3ZCQyw0RUFBYSxDQUFiQSxPQUFhLENBQWJBLENBQXVCQyx5REFBaUIsQ0FEakIsT0FDaUIsQ0FBeENELENBRHVCLGdCQVZLLGlCQVVMLENBQXpCLENBVjhCLENBZ0I5Qjs7QUFDQSxNQUFJRSxJQUFKLEVBQWdCO0FBQ2RBLFVBQU0sQ0FBTkEsa0VBQWdDO0FBQUEsYUFBTTtBQUNwQyxVQUFNQyxvQkFBb0IsR0FBR0MsbUJBQU8sQ0FBUEEscURBQU8sQ0FBUEEsQ0FBN0I7O0FBRUFOLFdBQUssQ0FBTEEsZUFBcUJLLG9CQUFvQixDQUF6Q0wsT0FBeUMsQ0FBekNBO0FBSEZJO0FBbEI0QixJQXlCOUI7OztBQUNBO0FBMUJGOztlQTZCZVYsVTtnQkFBZixRO0FBQWU7Ozs7Ozs7Ozs7OzswQkEzQ1ROLFk7MEJBQ0FFLFM7MEJBYUFJLFU7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQWRBTixZOzBCQUNBRSxTOzBCQUtFRSxpQjswQkFRRkUsVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJOO0FBSUEsSUFBTU4sWUFBWSxHQUFHO0FBQ25CbUIsU0FBTyxFQURZO0FBRW5CQyxPQUFLLEVBRmM7QUFHbkJDLE1BQUksRUFBRTtBQUhhLENBQXJCOztlQU1lLG9CQUF3QztBQUFBLE1BQTlCQyxLQUE4Qix1RUFBdEJ0QixZQUFzQjtBQUFBLE1BQVJ1QixNQUFROztBQUNyRCxVQUFRQSxNQUFNLENBQWQ7QUFDRTtBQUNFO0FBQW1CSixlQUFPLEVBQUU7QUFBNUI7O0FBQ0Y7QUFDRTtBQUFtQkEsZUFBTyxFQUExQjtBQUFtQ0MsYUFBSyxFQUFFRyxNQUFNLENBQU5BLFFBQWVIO0FBQXpEOztBQUNGO0FBQ0U7QUFFRUMsWUFBSSxFQUFFRSxNQUFNLENBQU5BLFFBRlI7QUFHRUosZUFBTyxFQUhUO0FBSUVDLGFBQUssRUFBRTtBQUpUOztBQU1GO0FBQ0U7QUFFRUMsWUFBSSxFQUZOO0FBR0VGLGVBQU8sRUFIVDtBQUlFQyxhQUFLLEVBQUU7QUFKVDs7QUFNRjtBQUNFO0FBcEJKOzs7Z0JBREYsUTtBQUFlOzs7Ozs7Ozs7Ozs7MEJBTlRwQixZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUFBQSxZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSk47QUFFQTtBQUNBOztlQUVlLDJCQUFPO0FBQUEsU0FBSXdCLHVFQUFlLENBQUM7QUFDeENDLFVBQU0sRUFBRVgsc0ZBQWEsQ0FEbUIsT0FDbkIsQ0FEbUI7QUFFeENZLFFBQUksRUFBRUMsNkNBQVdBO0FBRnVCLEdBQUQsQ0FBbkI7OztnQkFBdEIsUTtBQUFlIiwiZmlsZSI6Im1haW4uMWE1YTY4YTM4ZDc5NGI2MTcwZmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUsIGNvbXBvc2UgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBjb25uZWN0Um91dGVyLCByb3V0ZXJNaWRkbGV3YXJlIH0gZnJvbSAnY29ubmVjdGVkLXJlYWN0LXJvdXRlcic7XG5pbXBvcnQgdGh1bmsgZnJvbSAncmVkdXgtdGh1bmsnO1xuaW1wb3J0IEltbXV0YWJsZSBmcm9tICdpbW11dGFibGUnO1xuXG5pbXBvcnQgY3JlYXRlUm9vdFJlZHVjZXIgZnJvbSAnLi9yZWR1Y2Vycyc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IEltbXV0YWJsZS5NYXAoKTtcbmNvbnN0IGVuaGFuY2VycyA9IFtdO1xuXG4vKiBnbG9iYWwgd2luZG93ICovXG4vKiBlc2xpbnQgbm8tdW5kZXJzY29yZS1kYW5nbGU6IFwib2ZmXCIgKi9cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICBjb25zdCBkZXZUb29sc0V4dGVuc2lvbiA9IHdpbmRvdy5fX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9fO1xuXG4gIGlmICh0eXBlb2YgZGV2VG9vbHNFeHRlbnNpb24gPT09ICdmdW5jdGlvbicpIHtcbiAgICBlbmhhbmNlcnMucHVzaChkZXZUb29sc0V4dGVuc2lvbigpKTtcbiAgfVxufVxuXG4vLyBTZXR1cCBSZWR1eCBzdG9yZSB3aXRoIHJvdXRpbmcgYW5kIHRodW5rc1xuY29uc3Qgc2V0dXBTdG9yZSA9IChoaXN0b3J5KSA9PiB7XG4gIGNvbnN0IG1pZGRsZXdhcmUgPSBbdGh1bmssIHJvdXRlck1pZGRsZXdhcmUoaGlzdG9yeSldO1xuXG4gIC8vIE1lcmdlIGVuaGFuY2Vyc1xuICBjb25zdCBjb21wb3NlZEVuaGFuY2VycyA9IGNvbXBvc2UoXG4gICAgYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmUpLFxuICAgIC4uLmVuaGFuY2VycyxcbiAgKTtcblxuICAvLyBCdWlsZCB0aGUgc3RvcmVcbiAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShcbiAgICBjb25uZWN0Um91dGVyKGhpc3RvcnkpKGNyZWF0ZVJvb3RSZWR1Y2VyKGhpc3RvcnkpKSxcbiAgICBpbml0aWFsU3RhdGUsXG4gICAgY29tcG9zZWRFbmhhbmNlcnMsXG4gICk7XG5cbiAgLy8gSG90IHJlbG9hZCByZWR1Y2VycyAocmVxdWlyZXMgV2VicGFjayBvciBCcm93c2VyaWZ5IEhNUiB0byBiZSBlbmFibGVkKVxuICBpZiAobW9kdWxlLmhvdCkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCcuL3JlZHVjZXJzJywgKCkgPT4ge1xuICAgICAgY29uc3QgY3JlYXRlTmV3Um9vdFJlZHVjZXIgPSByZXF1aXJlKCcuL3JlZHVjZXJzJykuZGVmYXVsdDtcblxuICAgICAgc3RvcmUucmVwbGFjZVJlZHVjZXIoY3JlYXRlTmV3Um9vdFJlZHVjZXIoaGlzdG9yeSkpO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gQ3JlYXRlIHRoZSBzdG9yZVxuICByZXR1cm4gc3RvcmU7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzZXR1cFN0b3JlO1xuIiwiaW1wb3J0IHtcbiAgQVVUSF9VU0VSLCBMT0dPVVRfVVNFUiwgUkVRVUVTVF9BVVRILCBBVVRIX0VSUk9SLFxufSBmcm9tICcuLi9hY3Rpb25zL2F1dGgtYWN0aW9ucyc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgbG9hZGluZzogZmFsc2UsXG4gIGVycm9yOiBudWxsLFxuICB1c2VyOiBudWxsLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgUkVRVUVTVF9BVVRIOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGxvYWRpbmc6IHRydWUgfTtcbiAgICBjYXNlIEFVVEhfRVJST1I6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgbG9hZGluZzogZmFsc2UsIGVycm9yOiBhY3Rpb24ucGF5bG9hZC5lcnJvciB9O1xuICAgIGNhc2UgQVVUSF9VU0VSOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHVzZXI6IGFjdGlvbi5wYXlsb2FkLnVzZXIsXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICBlcnJvcjogbnVsbCxcbiAgICAgIH07XG4gICAgY2FzZSBMT0dPVVRfVVNFUjpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICB1c2VyOiBudWxsLFxuICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgZXJyb3I6IG51bGwsXG4gICAgICB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSB9O1xuICB9XG59XG4iLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eC1pbW11dGFibGUnO1xuXG5pbXBvcnQgeyBjb25uZWN0Um91dGVyIH0gZnJvbSAnY29ubmVjdGVkLXJlYWN0LXJvdXRlci9pbW11dGFibGUnO1xuaW1wb3J0IGF1dGhSZWR1Y2VyIGZyb20gJy4vYXV0aCc7XG5cbmV4cG9ydCBkZWZhdWx0IGhpc3RvcnkgPT4gY29tYmluZVJlZHVjZXJzKHtcbiAgcm91dGVyOiBjb25uZWN0Um91dGVyKGhpc3RvcnkpLFxuICBhdXRoOiBhdXRoUmVkdWNlcixcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==