(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/app/App.js":
/*!************************!*\
  !*** ./src/app/App.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _views_Home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/Home */ "./src/app/views/Home.js");
/* harmony import */ var _views_About__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/About */ "./src/app/views/About.js");
/* harmony import */ var _views_Foo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/Foo */ "./src/app/views/Foo.js");
(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();








var App = function App() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_2___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("html", {
    lang: "nl"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    charSet: "utf-8"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "My Title")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/"
  }, "Home"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/about"
  }, "About"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/foo"
  }, "Foo"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/",
    component: _views_Home__WEBPACK_IMPORTED_MODULE_3__["default"]
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/about",
    component: _views_About__WEBPACK_IMPORTED_MODULE_4__["default"]
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/foo",
    component: _views_Foo__WEBPACK_IMPORTED_MODULE_5__["default"]
  })));
};

var _default = App;
var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(App, "App", "/Users/iain/Projects/react-ssr/src/app/App.js");
  reactHotLoader.register(_default, "default", "/Users/iain/Projects/react-ssr/src/app/App.js");
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

  reactHotLoader.register(App, "App", "/Users/iain/Projects/react-ssr/src/app/App.js");
  reactHotLoader.register(_default, "_default", "/Users/iain/Projects/react-ssr/src/app/App.js");
  reactHotLoader.register(_default2, "default", "/Users/iain/Projects/react-ssr/src/app/App.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/app/store/actions/auth-actions.js":
/*!***********************************************!*\
  !*** ./src/app/store/actions/auth-actions.js ***!
  \***********************************************/
/*! exports provided: REQUEST_AUTH, AUTH_USER, LOGOUT_USER, AUTH_ERROR, authUser, logoutUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REQUEST_AUTH", function() { return REQUEST_AUTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_USER", function() { return AUTH_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGOUT_USER", function() { return LOGOUT_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_ERROR", function() { return AUTH_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authUser", function() { return authUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutUser", function() { return logoutUser; });
(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

var REQUEST_AUTH = 'REQUEST_AUTH';
var AUTH_USER = 'AUTH_USER';
var LOGOUT_USER = 'LOGOUT_USER';
var AUTH_ERROR = 'AUTH_ERROR';
var authUser = function authUser(user) {
  return function (dispatch) {
    dispatch({
      type: REQUEST_AUTH
    });
    setTimeout(function () {
      if (Math.random() > 0.5) {
        dispatch({
          type: AUTH_USER,
          payload: user
        });
      } else {
        dispatch({
          type: AUTH_ERROR,
          payload: {
            error: 'Oh noes, try again'
          }
        });
      }
    }, 1000);
  };
};
var logoutUser = function logoutUser() {
  return function (dispatch) {
    dispatch({
      type: LOGOUT_USER
    });
  };
};
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(REQUEST_AUTH, "REQUEST_AUTH", "/Users/iain/Projects/react-ssr/src/app/store/actions/auth-actions.js");
  reactHotLoader.register(AUTH_USER, "AUTH_USER", "/Users/iain/Projects/react-ssr/src/app/store/actions/auth-actions.js");
  reactHotLoader.register(LOGOUT_USER, "LOGOUT_USER", "/Users/iain/Projects/react-ssr/src/app/store/actions/auth-actions.js");
  reactHotLoader.register(AUTH_ERROR, "AUTH_ERROR", "/Users/iain/Projects/react-ssr/src/app/store/actions/auth-actions.js");
  reactHotLoader.register(authUser, "authUser", "/Users/iain/Projects/react-ssr/src/app/store/actions/auth-actions.js");
  reactHotLoader.register(logoutUser, "logoutUser", "/Users/iain/Projects/react-ssr/src/app/store/actions/auth-actions.js");
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

  reactHotLoader.register(REQUEST_AUTH, "REQUEST_AUTH", "/Users/iain/Projects/react-ssr/src/app/store/actions/auth-actions.js");
  reactHotLoader.register(AUTH_USER, "AUTH_USER", "/Users/iain/Projects/react-ssr/src/app/store/actions/auth-actions.js");
  reactHotLoader.register(LOGOUT_USER, "LOGOUT_USER", "/Users/iain/Projects/react-ssr/src/app/store/actions/auth-actions.js");
  reactHotLoader.register(AUTH_ERROR, "AUTH_ERROR", "/Users/iain/Projects/react-ssr/src/app/store/actions/auth-actions.js");
  reactHotLoader.register(authUser, "authUser", "/Users/iain/Projects/react-ssr/src/app/store/actions/auth-actions.js");
  reactHotLoader.register(logoutUser, "logoutUser", "/Users/iain/Projects/react-ssr/src/app/store/actions/auth-actions.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

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

/***/ }),

/***/ "./src/app/views/About.js":
/*!********************************!*\
  !*** ./src/app/views/About.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return About; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();


function About() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "This is about");
}
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(About, "About", "/Users/iain/Projects/react-ssr/src/app/views/About.js");
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

  reactHotLoader.register(About, "About", "/Users/iain/Projects/react-ssr/src/app/views/About.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/app/views/Foo.js":
/*!******************************!*\
  !*** ./src/app/views/Foo.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Foo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-loadable */ "./node_modules/react-loadable/lib/index.js");
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_loadable__WEBPACK_IMPORTED_MODULE_1__);
(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();



var LazyBar = react_loadable__WEBPACK_IMPORTED_MODULE_1___default()({
  loader: function loader() {
    return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../components/Bar */ "./src/app/components/Bar.js"));
  },
  loading: function loading() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "loading...");
  }
});
var LazyBaz = react_loadable__WEBPACK_IMPORTED_MODULE_1___default()({
  loader: function loader() {
    return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ../components/Baz */ "./src/app/components/Baz.js"));
  },
  loading: function loading() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "loading...");
  }
});
function Foo(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "This is foo"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LazyBar, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LazyBaz, null));
}
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(LazyBar, "LazyBar", "/Users/iain/Projects/react-ssr/src/app/views/Foo.js");
  reactHotLoader.register(LazyBaz, "LazyBaz", "/Users/iain/Projects/react-ssr/src/app/views/Foo.js");
  reactHotLoader.register(Foo, "Foo", "/Users/iain/Projects/react-ssr/src/app/views/Foo.js");
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

  reactHotLoader.register(LazyBar, "LazyBar", "/Users/iain/Projects/react-ssr/src/app/views/Foo.js");
  reactHotLoader.register(LazyBaz, "LazyBaz", "/Users/iain/Projects/react-ssr/src/app/views/Foo.js");
  reactHotLoader.register(Foo, "Foo", "/Users/iain/Projects/react-ssr/src/app/views/Foo.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/app/views/Home.js":
/*!*******************************!*\
  !*** ./src/app/views/Home.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_actions_auth_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/actions/auth-actions */ "./src/app/store/actions/auth-actions.js");
(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();






function Home(props) {
  function handleLogin() {
    props.authUser({
      user: 'Iain'
    });
  }

  function handleLogout() {
    props.logoutUser();
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "This is home"), props.auth.loading ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Loading") : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, props.auth.user ? "Logged in! Welcome ".concat(props.auth.user) : 'Login first please!'), props.auth.error ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, props.auth.error) : null, props.auth.user ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    onClick: handleLogout
  }, "Logout") : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    onClick: handleLogin
  }, "Login"));
}

var mapStateToProps = function mapStateToProps(state) {
  return {
    auth: state.auth
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_1__["bindActionCreators"])({
    authUser: _store_actions_auth_actions__WEBPACK_IMPORTED_MODULE_3__["authUser"],
    logoutUser: _store_actions_auth_actions__WEBPACK_IMPORTED_MODULE_3__["logoutUser"]
  }, dispatch);
};

var _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(Home);

var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Home, "Home", "/Users/iain/Projects/react-ssr/src/app/views/Home.js");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "/Users/iain/Projects/react-ssr/src/app/views/Home.js");
  reactHotLoader.register(mapDispatchToProps, "mapDispatchToProps", "/Users/iain/Projects/react-ssr/src/app/views/Home.js");
  reactHotLoader.register(_default, "default", "/Users/iain/Projects/react-ssr/src/app/views/Home.js");
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

  reactHotLoader.register(Home, "Home", "/Users/iain/Projects/react-ssr/src/app/views/Home.js");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "/Users/iain/Projects/react-ssr/src/app/views/Home.js");
  reactHotLoader.register(mapDispatchToProps, "mapDispatchToProps", "/Users/iain/Projects/react-ssr/src/app/views/Home.js");
  reactHotLoader.register(_default, "_default", "/Users/iain/Projects/react-ssr/src/app/views/Home.js");
  reactHotLoader.register(_default2, "default", "/Users/iain/Projects/react-ssr/src/app/views/Home.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/client/index.js":
/*!*****************************!*\
  !*** ./src/client/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! connected-react-router */ "./node_modules/connected-react-router/lib/index.js");
/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(connected_react_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var history_createBrowserHistory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! history/createBrowserHistory */ "./node_modules/history/createBrowserHistory.js");
/* harmony import */ var history_createBrowserHistory__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(history_createBrowserHistory__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _app_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app/store */ "./src/app/store/index.js");
/* harmony import */ var _app_App__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app/App */ "./src/app/App.js");
(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();








var history = history_createBrowserHistory__WEBPACK_IMPORTED_MODULE_4___default()();
var store = Object(_app_store__WEBPACK_IMPORTED_MODULE_5__["default"])(history);
/* global document */

Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["render"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_2__["Provider"], {
  store: store
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(connected_react_router__WEBPACK_IMPORTED_MODULE_3__["ConnectedRouter"], {
  history: history
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_App__WEBPACK_IMPORTED_MODULE_6__["default"], null))), document.getElementById('root'));

if (true) {
  module.hot.accept(/*! ../app/App */ "./src/app/App.js", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _app_App__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app/App */ "./src/app/App.js");
(function () {
    var NewApp = __webpack_require__(/*! ../app/App */ "./src/app/App.js").default;

    Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["render"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_2__["Provider"], {
      store: store
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(connected_react_router__WEBPACK_IMPORTED_MODULE_3__["ConnectedRouter"], {
      history: history
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NewApp, null))), document.getElementById('root'));
  })(__WEBPACK_OUTDATED_DEPENDENCIES__); });
}

;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(history, "history", "/Users/iain/Projects/react-ssr/src/client/index.js");
  reactHotLoader.register(store, "store", "/Users/iain/Projects/react-ssr/src/client/index.js");
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

  reactHotLoader.register(history, "history", "/Users/iain/Projects/react-ssr/src/client/index.js");
  reactHotLoader.register(store, "store", "/Users/iain/Projects/react-ssr/src/client/index.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ 0:
/*!********************************************************!*\
  !*** multi webpack-hot-middleware/client ./src/client ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! webpack-hot-middleware/client */"./node_modules/webpack-hot-middleware/client.js");
module.exports = __webpack_require__(/*! ./src/client */"./src/client/index.js");


/***/ })

},[[0,"manifest","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL0FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3N0b3JlL2FjdGlvbnMvYXV0aC1hY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvc3RvcmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zdG9yZS9yZWR1Y2Vycy9hdXRoLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvc3RvcmUvcmVkdWNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC92aWV3cy9BYm91dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3ZpZXdzL0Zvby5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3ZpZXdzL0hvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9pbmRleC5qcyJdLCJuYW1lcyI6WyJBcHAiLCJIb21lIiwiQWJvdXQiLCJGb28iLCJSRVFVRVNUX0FVVEgiLCJBVVRIX1VTRVIiLCJMT0dPVVRfVVNFUiIsIkFVVEhfRVJST1IiLCJhdXRoVXNlciIsImRpc3BhdGNoIiwidHlwZSIsInNldFRpbWVvdXQiLCJNYXRoIiwicGF5bG9hZCIsInVzZXIiLCJlcnJvciIsImxvZ291dFVzZXIiLCJpbml0aWFsU3RhdGUiLCJlbmhhbmNlcnMiLCJwcm9jZXNzIiwiZGV2VG9vbHNFeHRlbnNpb24iLCJ3aW5kb3ciLCJzZXR1cFN0b3JlIiwibWlkZGxld2FyZSIsInJvdXRlck1pZGRsZXdhcmUiLCJjb21wb3NlZEVuaGFuY2VycyIsImNvbXBvc2UiLCJhcHBseU1pZGRsZXdhcmUiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwiY29ubmVjdFJvdXRlciIsImNyZWF0ZVJvb3RSZWR1Y2VyIiwibW9kdWxlIiwiY3JlYXRlTmV3Um9vdFJlZHVjZXIiLCJyZXF1aXJlIiwibG9hZGluZyIsInN0YXRlIiwiYWN0aW9uIiwiY29tYmluZVJlZHVjZXJzIiwicm91dGVyIiwiYXV0aCIsImF1dGhSZWR1Y2VyIiwiTGF6eUJhciIsIkxvYWRhYmxlIiwibG9hZGVyIiwiTGF6eUJheiIsInByb3BzIiwiaGFuZGxlTG9nb3V0IiwiaGFuZGxlTG9naW4iLCJtYXBTdGF0ZVRvUHJvcHMiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJiaW5kQWN0aW9uQ3JlYXRvcnMiLCJjb25uZWN0IiwiaGlzdG9yeSIsImNyZWF0ZUhpc3RvcnkiLCJyZW5kZXIiLCJkb2N1bWVudCIsIk5ld0FwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxHQUFHLEdBQUcsU0FBTkEsR0FBTTtBQUFBLFNBQ1Ysd0hBQ0Usc0hBQ0U7QUFBTSxRQUFJLEVBQUM7QUFBWCxJQURGLEVBRUU7QUFBTSxXQUFPLEVBQUM7QUFBZCxJQUZGLEVBR0UsMEVBSkosVUFJSSxDQUhGLENBREYsRUFPRTtBQUFNLE1BQUUsRUFBQztBQUFULEtBUEYsTUFPRSxDQVBGLEVBUUU7QUFBTSxNQUFFLEVBQUM7QUFBVCxLQVJGLE9BUUUsQ0FSRixFQVNFO0FBQU0sTUFBRSxFQUFDO0FBQVQsS0FURixLQVNFLENBVEYsRUFXRSwwSEFDRTtBQUFPLFNBQUssRUFBWjtBQUFhLFFBQUksRUFBakI7QUFBc0IsYUFBUyxFQUFFQyxtREFBSUE7QUFBckMsSUFERixFQUVFO0FBQU8sU0FBSyxFQUFaO0FBQWEsUUFBSSxFQUFqQjtBQUEyQixhQUFTLEVBQUVDLG9EQUFLQTtBQUEzQyxJQUZGLEVBR0U7QUFBTyxTQUFLLEVBQVo7QUFBYSxRQUFJLEVBQWpCO0FBQXlCLGFBQVMsRUFBRUMsa0RBQUdBO0FBQXZDLElBSEYsQ0FYRixDQURVO0FBQVo7O2VBb0JlSCxHO2dCQUFmLFE7QUFBZTs7Ozs7Ozs7Ozs7OzBCQXBCVEEsRzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBQUFBLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUkMsSUFBTUksWUFBWSxHQUFsQjtBQUNBLElBQU1D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Ozs7OzBCQURBeUIsTzswQkFDQXpCLEsiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluaywgUm91dGUsIFN3aXRjaCB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IEhlbG1ldCBmcm9tICdyZWFjdC1oZWxtZXQnO1xuXG5pbXBvcnQgSG9tZSBmcm9tICcuL3ZpZXdzL0hvbWUnO1xuaW1wb3J0IEFib3V0IGZyb20gJy4vdmlld3MvQWJvdXQnO1xuaW1wb3J0IEZvbyBmcm9tICcuL3ZpZXdzL0Zvbyc7XG5cbmNvbnN0IEFwcCA9ICgpID0+IChcbiAgPD5cbiAgICA8SGVsbWV0PlxuICAgICAgPGh0bWwgbGFuZz1cIm5sXCIgLz5cbiAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICA8dGl0bGU+TXkgVGl0bGU8L3RpdGxlPlxuICAgIDwvSGVsbWV0PlxuXG4gICAgPExpbmsgdG89XCIvXCI+SG9tZTwvTGluaz5cbiAgICA8TGluayB0bz1cIi9hYm91dFwiPkFib3V0PC9MaW5rPlxuICAgIDxMaW5rIHRvPVwiL2Zvb1wiPkZvbzwvTGluaz5cblxuICAgIDxTd2l0Y2g+XG4gICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9cIiBjb21wb25lbnQ9e0hvbWV9IC8+XG4gICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9hYm91dFwiIGNvbXBvbmVudD17QWJvdXR9IC8+XG4gICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9mb29cIiBjb21wb25lbnQ9e0Zvb30gLz5cbiAgICA8L1N3aXRjaD5cbiAgPC8+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iLCJleHBvcnQgY29uc3QgUkVRVUVTVF9BVVRIID0gJ1JFUVVFU1RfQVVUSCc7XG5leHBvcnQgY29uc3QgQVVUSF9VU0VSID0gJ0FVVEhfVVNFUic7XG5leHBvcnQgY29uc3QgTE9HT1VUX1VTRVIgPSAnTE9HT1VUX1VTRVInO1xuZXhwb3J0IGNvbnN0IEFVVEhfRVJST1IgPSAnQVVUSF9FUlJPUic7XG5cbmV4cG9ydCBjb25zdCBhdXRoVXNlciA9IHVzZXIgPT4gKGRpc3BhdGNoKSA9PiB7XG4gIGRpc3BhdGNoKHtcbiAgICB0eXBlOiBSRVFVRVNUX0FVVEgsXG4gIH0pO1xuXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGlmIChNYXRoLnJhbmRvbSgpID4gMC41KSB7XG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IEFVVEhfVVNFUixcbiAgICAgICAgcGF5bG9hZDogdXNlcixcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IEFVVEhfRVJST1IsXG4gICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICBlcnJvcjogJ09oIG5vZXMsIHRyeSBhZ2FpbicsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIDEwMDApO1xufTtcblxuZXhwb3J0IGNvbnN0IGxvZ291dFVzZXIgPSAoKSA9PiAoZGlzcGF0Y2gpID0+IHtcbiAgZGlzcGF0Y2goe1xuICAgIHR5cGU6IExPR09VVF9VU0VSLFxuICB9KTtcbn07XG4iLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlLCBjb21wb3NlIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgY29ubmVjdFJvdXRlciwgcm91dGVyTWlkZGxld2FyZSB9IGZyb20gJ2Nvbm5lY3RlZC1yZWFjdC1yb3V0ZXInO1xuaW1wb3J0IHRodW5rIGZyb20gJ3JlZHV4LXRodW5rJztcbmltcG9ydCBjcmVhdGVSb290UmVkdWNlciBmcm9tICcuL3JlZHVjZXJzJztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge307XG5jb25zdCBlbmhhbmNlcnMgPSBbXTtcblxuLyogZ2xvYmFsIHdpbmRvdyAqL1xuLyogZXNsaW50IG5vLXVuZGVyc2NvcmUtZGFuZ2xlOiBcIm9mZlwiICovXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgY29uc3QgZGV2VG9vbHNFeHRlbnNpb24gPSB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fXztcblxuICBpZiAodHlwZW9mIGRldlRvb2xzRXh0ZW5zaW9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZW5oYW5jZXJzLnB1c2goZGV2VG9vbHNFeHRlbnNpb24oKSk7XG4gIH1cbn1cblxuLy8gU2V0dXAgUmVkdXggc3RvcmUgd2l0aCByb3V0aW5nIGFuZCB0aHVua3NcbmNvbnN0IHNldHVwU3RvcmUgPSAoaGlzdG9yeSkgPT4ge1xuICBjb25zdCBtaWRkbGV3YXJlID0gW3RodW5rLCByb3V0ZXJNaWRkbGV3YXJlKGhpc3RvcnkpXTtcblxuICAvLyBNZXJnZSBlbmhhbmNlcnNcbiAgY29uc3QgY29tcG9zZWRFbmhhbmNlcnMgPSBjb21wb3NlKFxuICAgIGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlKSxcbiAgICAuLi5lbmhhbmNlcnMsXG4gICk7XG5cbiAgLy8gQnVpbGQgdGhlIHN0b3JlXG4gIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUoXG4gICAgY29ubmVjdFJvdXRlcihoaXN0b3J5KShjcmVhdGVSb290UmVkdWNlcihoaXN0b3J5KSksXG4gICAgaW5pdGlhbFN0YXRlLFxuICAgIGNvbXBvc2VkRW5oYW5jZXJzLFxuICApO1xuXG4gIC8vIEhvdCByZWxvYWQgcmVkdWNlcnMgKHJlcXVpcmVzIFdlYnBhY2sgb3IgQnJvd3NlcmlmeSBITVIgdG8gYmUgZW5hYmxlZClcbiAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgnLi9yZWR1Y2VycycsICgpID0+IHtcbiAgICAgIGNvbnN0IGNyZWF0ZU5ld1Jvb3RSZWR1Y2VyID0gcmVxdWlyZSgnLi9yZWR1Y2VycycpLmRlZmF1bHQ7XG5cbiAgICAgIHN0b3JlLnJlcGxhY2VSZWR1Y2VyKGNyZWF0ZU5ld1Jvb3RSZWR1Y2VyKGhpc3RvcnkpKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIENyZWF0ZSB0aGUgc3RvcmVcbiAgcmV0dXJuIHN0b3JlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc2V0dXBTdG9yZTtcbiIsImltcG9ydCB7XG4gIEFVVEhfVVNFUiwgTE9HT1VUX1VTRVIsIFJFUVVFU1RfQVVUSCwgQVVUSF9FUlJPUixcbn0gZnJvbSAnLi4vYWN0aW9ucy9hdXRoLWFjdGlvbnMnO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIGxvYWRpbmc6IGZhbHNlLFxuICBlcnJvcjogbnVsbCxcbiAgdXNlcjogbnVsbCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFJFUVVFU1RfQVVUSDpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBsb2FkaW5nOiB0cnVlIH07XG4gICAgY2FzZSBBVVRIX0VSUk9SOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGxvYWRpbmc6IGZhbHNlLCBlcnJvcjogYWN0aW9uLnBheWxvYWQuZXJyb3IgfTtcbiAgICBjYXNlIEFVVEhfVVNFUjpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICB1c2VyOiBhY3Rpb24ucGF5bG9hZC51c2VyLFxuICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgZXJyb3I6IG51bGwsXG4gICAgICB9O1xuICAgIGNhc2UgTE9HT1VUX1VTRVI6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgdXNlcjogbnVsbCxcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgIGVycm9yOiBudWxsLFxuICAgICAgfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUgfTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xuXG5pbXBvcnQgeyBjb25uZWN0Um91dGVyIH0gZnJvbSAnY29ubmVjdGVkLXJlYWN0LXJvdXRlcic7XG5pbXBvcnQgYXV0aFJlZHVjZXIgZnJvbSAnLi9hdXRoJztcblxuZXhwb3J0IGRlZmF1bHQgaGlzdG9yeSA9PiBjb21iaW5lUmVkdWNlcnMoe1xuICByb3V0ZXI6IGNvbm5lY3RSb3V0ZXIoaGlzdG9yeSksXG4gIGF1dGg6IGF1dGhSZWR1Y2VyLFxufSk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBYm91dCgpIHtcbiAgcmV0dXJuIDxoMT5UaGlzIGlzIGFib3V0PC9oMT47XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExvYWRhYmxlIGZyb20gJ3JlYWN0LWxvYWRhYmxlJztcblxuY29uc3QgTGF6eUJhciA9IExvYWRhYmxlKHtcbiAgbG9hZGVyOiAoKSA9PiBpbXBvcnQoJy4uL2NvbXBvbmVudHMvQmFyJyksXG4gIGxvYWRpbmc6ICgpID0+IDxkaXY+bG9hZGluZy4uLjwvZGl2Pixcbn0pO1xuXG5jb25zdCBMYXp5QmF6ID0gTG9hZGFibGUoe1xuICBsb2FkZXI6ICgpID0+IGltcG9ydCgnLi4vY29tcG9uZW50cy9CYXonKSxcbiAgbG9hZGluZzogKCkgPT4gPGRpdj5sb2FkaW5nLi4uPC9kaXY+LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvbyhwcm9wczogb2JqZWN0KSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxoMT5UaGlzIGlzIGZvbzwvaDE+XG4gICAgICA8TGF6eUJhciAvPlxuICAgICAgPExhenlCYXogLz5cbiAgICA8Lz5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgeyBhdXRoVXNlciwgbG9nb3V0VXNlciB9IGZyb20gJy4uL3N0b3JlL2FjdGlvbnMvYXV0aC1hY3Rpb25zJztcblxuZnVuY3Rpb24gSG9tZShwcm9wcykge1xuICBmdW5jdGlvbiBoYW5kbGVMb2dpbigpIHtcbiAgICBwcm9wcy5hdXRoVXNlcih7IHVzZXI6ICdJYWluJyB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUxvZ291dCgpIHtcbiAgICBwcm9wcy5sb2dvdXRVc2VyKCk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8aDE+VGhpcyBpcyBob21lPC9oMT5cbiAgICAgIHtwcm9wcy5hdXRoLmxvYWRpbmcgPyAoXG4gICAgICAgIDxwPkxvYWRpbmc8L3A+XG4gICAgICApIDogKFxuICAgICAgICA8cD57cHJvcHMuYXV0aC51c2VyID8gYExvZ2dlZCBpbiEgV2VsY29tZSAke3Byb3BzLmF1dGgudXNlcn1gIDogJ0xvZ2luIGZpcnN0IHBsZWFzZSEnfTwvcD5cbiAgICAgICl9XG4gICAgICB7cHJvcHMuYXV0aC5lcnJvciA/IDxwPntwcm9wcy5hdXRoLmVycm9yfTwvcD4gOiBudWxsfVxuICAgICAge3Byb3BzLmF1dGgudXNlciA/IChcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17aGFuZGxlTG9nb3V0fT5cbiAgICAgICAgICBMb2dvdXRcbiAgICAgICAgPC9idXR0b24+XG4gICAgICApIDogKFxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtoYW5kbGVMb2dpbn0+XG4gICAgICAgICAgTG9naW5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICApfVxuICAgIDwvPlxuICApO1xufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xuICBhdXRoOiBzdGF0ZS5hdXRoLFxufSk7XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+IGJpbmRBY3Rpb25DcmVhdG9ycyh7IGF1dGhVc2VyLCBsb2dvdXRVc2VyIH0sIGRpc3BhdGNoKTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgbWFwU3RhdGVUb1Byb3BzLFxuICBtYXBEaXNwYXRjaFRvUHJvcHMsXG4pKEhvbWUpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IENvbm5lY3RlZFJvdXRlciB9IGZyb20gJ2Nvbm5lY3RlZC1yZWFjdC1yb3V0ZXInO1xuaW1wb3J0IGNyZWF0ZUhpc3RvcnkgZnJvbSAnaGlzdG9yeS9jcmVhdGVCcm93c2VySGlzdG9yeSc7XG5cbmltcG9ydCBzZXR1cFN0b3JlIGZyb20gJy4uL2FwcC9zdG9yZSc7XG5pbXBvcnQgQXBwIGZyb20gJy4uL2FwcC9BcHAnO1xuXG5jb25zdCBoaXN0b3J5ID0gY3JlYXRlSGlzdG9yeSgpO1xuY29uc3Qgc3RvcmUgPSBzZXR1cFN0b3JlKGhpc3RvcnkpO1xuXG4vKiBnbG9iYWwgZG9jdW1lbnQgKi9cbnJlbmRlcihcbiAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgPENvbm5lY3RlZFJvdXRlciBoaXN0b3J5PXtoaXN0b3J5fT5cbiAgICAgIDxBcHAgLz5cbiAgICA8L0Nvbm5lY3RlZFJvdXRlcj5cbiAgPC9Qcm92aWRlcj4sXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JyksXG4pO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT0gJ2RldmVsb3BtZW50JyAmJiBtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KCcuLi9hcHAvQXBwJywgKCkgPT4ge1xuICAgIGNvbnN0IE5ld0FwcCA9IHJlcXVpcmUoJy4uL2FwcC9BcHAnKS5kZWZhdWx0O1xuICAgIHJlbmRlcihcbiAgICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgICA8Q29ubmVjdGVkUm91dGVyIGhpc3Rvcnk9e2hpc3Rvcnl9PlxuICAgICAgICAgIDxOZXdBcHAgLz5cbiAgICAgICAgPC9Db25uZWN0ZWRSb3V0ZXI+XG4gICAgICA8L1Byb3ZpZGVyPixcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JyksXG4gICAgKTtcbiAgfSk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9