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
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! connected-react-router */ "./node_modules/connected-react-router/lib/index.js");
/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(connected_react_router__WEBPACK_IMPORTED_MODULE_1__);
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
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
    router: Object(connected_react_router__WEBPACK_IMPORTED_MODULE_1__["connectRouter"])(history),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3N0b3JlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvc3RvcmUvcmVkdWNlcnMvYXV0aC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3N0b3JlL3JlZHVjZXJzL2luZGV4LmpzIl0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsImVuaGFuY2VycyIsInByb2Nlc3MiLCJkZXZUb29sc0V4dGVuc2lvbiIsIndpbmRvdyIsInNldHVwU3RvcmUiLCJtaWRkbGV3YXJlIiwicm91dGVyTWlkZGxld2FyZSIsImNvbXBvc2VkRW5oYW5jZXJzIiwiY29tcG9zZSIsImFwcGx5TWlkZGxld2FyZSIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJjb25uZWN0Um91dGVyIiwiY3JlYXRlUm9vdFJlZHVjZXIiLCJtb2R1bGUiLCJjcmVhdGVOZXdSb290UmVkdWNlciIsInJlcXVpcmUiLCJsb2FkaW5nIiwiZXJyb3IiLCJ1c2VyIiwic3RhdGUiLCJhY3Rpb24iLCJjb21iaW5lUmVkdWNlcnMiLCJyb3V0ZXIiLCJhdXRoIiwiYXV0aFJlZHVjZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFlBQVksR0FBbEI7QUFDQSxJQUFNQyxTQUFTLEdBQWY7QUFFQTs7QUFDQTs7QUFDQSxJQUFJQyxJQUFKLEVBQTRDO0FBQzFDLE1BQU1DLGlCQUFpQixHQUFHQyxNQUFNLENBQWhDOztBQUVBLE1BQUksNkJBQUosWUFBNkM7QUFDM0NILGFBQVMsQ0FBVEEsS0FBZUUsaUJBQWZGO0FBQ0Q7RUFHSDs7O0FBQ0EsSUFBTUksVUFBVSxHQUFHLFNBQWJBLFVBQWEsVUFBYTtBQUM5QixNQUFNQyxVQUFVLEdBQUcsc0RBQVFDLCtFQUFnQixDQURiLE9BQ2EsQ0FBeEIsQ0FBbkIsQ0FEOEIsQ0FHOUI7O0FBQ0EsTUFBTUMsaUJBQWlCLEdBQUdDLDZDQUFPLENBQVBBLGVBQ3hCQyxxREFBZSxDQUFmQSxjQUR3QkQsVUFDeEJDLENBRHdCRCxTQUpJLFNBSUpBLEVBQTFCLENBSjhCLENBUzlCOztBQUNBLE1BQU1FLEtBQUssR0FBR0MseURBQVcsQ0FDdkJDLDRFQUFhLENBQWJBLE9BQWEsQ0FBYkEsQ0FBdUJDLHlEQUFpQixDQURqQixPQUNpQixDQUF4Q0QsQ0FEdUIsZ0JBVkssaUJBVUwsQ0FBekIsQ0FWOEIsQ0FnQjlCOztBQUNBLE1BQUlFLElBQUosRUFBZ0I7QUFDZEEsVUFBTSxDQUFOQSxrRUFBZ0M7QUFBQSxhQUFNO0FBQ3BDLFVBQU1DLG9CQUFvQixHQUFHQyxtQkFBTyxDQUFQQSxxREFBTyxDQUFQQSxDQUE3Qjs7QUFFQU4sV0FBSyxDQUFMQSxlQUFxQkssb0JBQW9CLENBQXpDTCxPQUF5QyxDQUF6Q0E7QUFIRkk7QUFsQjRCLElBeUI5Qjs7O0FBQ0E7QUExQkY7O2VBNkJlVixVO2dCQUFmLFE7QUFBZTs7Ozs7Ozs7Ozs7OzBCQTNDVEwsWTswQkFDQUMsUzswQkFhQUksVTs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBZEFMLFk7MEJBQ0FDLFM7MEJBS0VFLGlCOzBCQVFGRSxVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQk47QUFJQSxJQUFNTCxZQUFZLEdBQUc7QUFDbkJrQixTQUFPLEVBRFk7QUFFbkJDLE9BQUssRUFGYztBQUduQkMsTUFBSSxFQUFFO0FBSGEsQ0FBckI7O2VBTWUsb0JBQXdDO0FBQUEsTUFBOUJDLEtBQThCLHVFQUF0QnJCLFlBQXNCO0FBQUEsTUFBUnNCLE1BQVE7O0FBQ3JELFVBQVFBLE1BQU0sQ0FBZDtBQUNFO0FBQ0U7QUFBbUJKLGVBQU8sRUFBRTtBQUE1Qjs7QUFDRjtBQUNFO0FBQW1CQSxlQUFPLEVBQTFCO0FBQW1DQyxhQUFLLEVBQUVHLE1BQU0sQ0FBTkEsUUFBZUg7QUFBekQ7O0FBQ0Y7QUFDRTtBQUVFQyxZQUFJLEVBQUVFLE1BQU0sQ0FBTkEsUUFGUjtBQUdFSixlQUFPLEVBSFQ7QUFJRUMsYUFBSyxFQUFFO0FBSlQ7O0FBTUY7QUFDRTtBQUVFQyxZQUFJLEVBRk47QUFHRUYsZUFBTyxFQUhUO0FBSUVDLGFBQUssRUFBRTtBQUpUOztBQU1GO0FBQ0U7QUFwQko7OztnQkFERixRO0FBQWU7Ozs7Ozs7Ozs7OzswQkFOVG5CLFk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBQUFBLFk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pOO0FBRUE7QUFDQTs7ZUFFZSwyQkFBTztBQUFBLFNBQUl1Qiw2REFBZSxDQUFDO0FBQ3hDQyxVQUFNLEVBQUVYLDRFQUFhLENBRG1CLE9BQ25CLENBRG1CO0FBRXhDWSxRQUFJLEVBQUVDLDZDQUFXQTtBQUZ1QixHQUFELENBQW5COzs7Z0JBQXRCLFE7QUFBZSIsImZpbGUiOiJtYWluLjg2MmM1NWU3ZmE3MDdiNzY1NzA2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlLCBjb21wb3NlIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgY29ubmVjdFJvdXRlciwgcm91dGVyTWlkZGxld2FyZSB9IGZyb20gJ2Nvbm5lY3RlZC1yZWFjdC1yb3V0ZXInO1xuaW1wb3J0IHRodW5rIGZyb20gJ3JlZHV4LXRodW5rJztcbmltcG9ydCBjcmVhdGVSb290UmVkdWNlciBmcm9tICcuL3JlZHVjZXJzJztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge307XG5jb25zdCBlbmhhbmNlcnMgPSBbXTtcblxuLyogZ2xvYmFsIHdpbmRvdyAqL1xuLyogZXNsaW50IG5vLXVuZGVyc2NvcmUtZGFuZ2xlOiBcIm9mZlwiICovXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgY29uc3QgZGV2VG9vbHNFeHRlbnNpb24gPSB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fXztcblxuICBpZiAodHlwZW9mIGRldlRvb2xzRXh0ZW5zaW9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZW5oYW5jZXJzLnB1c2goZGV2VG9vbHNFeHRlbnNpb24oKSk7XG4gIH1cbn1cblxuLy8gU2V0dXAgUmVkdXggc3RvcmUgd2l0aCByb3V0aW5nIGFuZCB0aHVua3NcbmNvbnN0IHNldHVwU3RvcmUgPSAoaGlzdG9yeSkgPT4ge1xuICBjb25zdCBtaWRkbGV3YXJlID0gW3RodW5rLCByb3V0ZXJNaWRkbGV3YXJlKGhpc3RvcnkpXTtcblxuICAvLyBNZXJnZSBlbmhhbmNlcnNcbiAgY29uc3QgY29tcG9zZWRFbmhhbmNlcnMgPSBjb21wb3NlKFxuICAgIGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlKSxcbiAgICAuLi5lbmhhbmNlcnMsXG4gICk7XG5cbiAgLy8gQnVpbGQgdGhlIHN0b3JlXG4gIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUoXG4gICAgY29ubmVjdFJvdXRlcihoaXN0b3J5KShjcmVhdGVSb290UmVkdWNlcihoaXN0b3J5KSksXG4gICAgaW5pdGlhbFN0YXRlLFxuICAgIGNvbXBvc2VkRW5oYW5jZXJzLFxuICApO1xuXG4gIC8vIEhvdCByZWxvYWQgcmVkdWNlcnMgKHJlcXVpcmVzIFdlYnBhY2sgb3IgQnJvd3NlcmlmeSBITVIgdG8gYmUgZW5hYmxlZClcbiAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgnLi9yZWR1Y2VycycsICgpID0+IHtcbiAgICAgIGNvbnN0IGNyZWF0ZU5ld1Jvb3RSZWR1Y2VyID0gcmVxdWlyZSgnLi9yZWR1Y2VycycpLmRlZmF1bHQ7XG5cbiAgICAgIHN0b3JlLnJlcGxhY2VSZWR1Y2VyKGNyZWF0ZU5ld1Jvb3RSZWR1Y2VyKGhpc3RvcnkpKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIENyZWF0ZSB0aGUgc3RvcmVcbiAgcmV0dXJuIHN0b3JlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc2V0dXBTdG9yZTtcbiIsImltcG9ydCB7XG4gIEFVVEhfVVNFUiwgTE9HT1VUX1VTRVIsIFJFUVVFU1RfQVVUSCwgQVVUSF9FUlJPUixcbn0gZnJvbSAnLi4vYWN0aW9ucy9hdXRoLWFjdGlvbnMnO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIGxvYWRpbmc6IGZhbHNlLFxuICBlcnJvcjogbnVsbCxcbiAgdXNlcjogbnVsbCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFJFUVVFU1RfQVVUSDpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBsb2FkaW5nOiB0cnVlIH07XG4gICAgY2FzZSBBVVRIX0VSUk9SOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGxvYWRpbmc6IGZhbHNlLCBlcnJvcjogYWN0aW9uLnBheWxvYWQuZXJyb3IgfTtcbiAgICBjYXNlIEFVVEhfVVNFUjpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICB1c2VyOiBhY3Rpb24ucGF5bG9hZC51c2VyLFxuICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgZXJyb3I6IG51bGwsXG4gICAgICB9O1xuICAgIGNhc2UgTE9HT1VUX1VTRVI6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgdXNlcjogbnVsbCxcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgIGVycm9yOiBudWxsLFxuICAgICAgfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUgfTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xuXG5pbXBvcnQgeyBjb25uZWN0Um91dGVyIH0gZnJvbSAnY29ubmVjdGVkLXJlYWN0LXJvdXRlcic7XG5pbXBvcnQgYXV0aFJlZHVjZXIgZnJvbSAnLi9hdXRoJztcblxuZXhwb3J0IGRlZmF1bHQgaGlzdG9yeSA9PiBjb21iaW5lUmVkdWNlcnMoe1xuICByb3V0ZXI6IGNvbm5lY3RSb3V0ZXIoaGlzdG9yeSksXG4gIGF1dGg6IGF1dGhSZWR1Y2VyLFxufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9