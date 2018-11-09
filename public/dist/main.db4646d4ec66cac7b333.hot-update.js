webpackHotUpdate("main",{

/***/ "./src/app/store/actions/auth-actions.js":
/*!***********************************************!*\
  !*** ./src/app/store/actions/auth-actions.js ***!
  \***********************************************/
/*! exports provided: AUTH_USER, LOGOUT_USER, authUser, logoutUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_USER", function() { return AUTH_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGOUT_USER", function() { return LOGOUT_USER; });
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

var AUTH_USER = 'AUTH_USER';
var LOGOUT_USER = 'LOGOUT_USER';
var authUser = function authUser(user) {
  return function (dispatch) {
    dispatch({
      type: AUTH_USER,
      payload: user
    });
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

  reactHotLoader.register(AUTH_USER, "AUTH_USER", "/Users/iain/Projects/react-ssr/src/app/store/actions/auth-actions.js");
  reactHotLoader.register(LOGOUT_USER, "LOGOUT_USER", "/Users/iain/Projects/react-ssr/src/app/store/actions/auth-actions.js");
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

  reactHotLoader.register(AUTH_USER, "AUTH_USER", "/Users/iain/Projects/react-ssr/src/app/store/actions/auth-actions.js");
  reactHotLoader.register(LOGOUT_USER, "LOGOUT_USER", "/Users/iain/Projects/react-ssr/src/app/store/actions/auth-actions.js");
  reactHotLoader.register(authUser, "authUser", "/Users/iain/Projects/react-ssr/src/app/store/actions/auth-actions.js");
  reactHotLoader.register(logoutUser, "logoutUser", "/Users/iain/Projects/react-ssr/src/app/store/actions/auth-actions.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/app/views/Home.js":
/*!*******************************!*\
  !*** ./src/app/views/Home.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var core_js_modules_es6_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.object.create */ "./node_modules/core-js/modules/es6.object.create.js");
/* harmony import */ var core_js_modules_es6_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.object.set-prototype-of */ "./node_modules/core-js/modules/es6.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_object_define_property__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.object.define-property */ "./node_modules/core-js/modules/es6.object.define-property.js");
/* harmony import */ var core_js_modules_es6_object_define_property__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_define_property__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es7.symbol.async-iterator */ "./node_modules/core-js/modules/es7.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.symbol */ "./node_modules/core-js/modules/es6.symbol.js");
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_actions_auth_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../store/actions/auth-actions */ "./src/app/store/actions/auth-actions.js");






(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }







(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}






var Home =
/*#__PURE__*/
function (_Component) {
  _inherits(Home, _Component);

  function Home(props) {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, _getPrototypeOf(Home).call(this));
  }

  _createClass(Home, [{
    key: "onLogin",
    value: function onLogin() {
      props.authUser({
        user: 'Iain'
      });
    }
  }, {
    key: "onLogout",
    value: function onLogout() {
      props.logoutUser();
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", null, "This is home"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, props.auth.user ? "Logged in! Welcome ".concat(props.auth.user) : 'Hoi!'), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
        type: "button",
        onClick: this.handleLogin
      }, "Login"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
        type: "button",
        onClick: this.handleLogout
      }, "Logyt"));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    auth: state.auth
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_6__["bindActionCreators"])({
    authUser: _store_actions_auth_actions__WEBPACK_IMPORTED_MODULE_8__["authUser"],
    logoutUser: _store_actions_auth_actions__WEBPACK_IMPORTED_MODULE_8__["logoutUser"]
  }, dispatch);
};

var _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(mapStateToProps, mapDispatchToProps)(Home);

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

  reactHotLoader.register(_typeof, "_typeof", "/Users/iain/Projects/react-ssr/src/app/views/Home.js");
  reactHotLoader.register(_classCallCheck, "_classCallCheck", "/Users/iain/Projects/react-ssr/src/app/views/Home.js");
  reactHotLoader.register(_defineProperties, "_defineProperties", "/Users/iain/Projects/react-ssr/src/app/views/Home.js");
  reactHotLoader.register(_createClass, "_createClass", "/Users/iain/Projects/react-ssr/src/app/views/Home.js");
  reactHotLoader.register(_possibleConstructorReturn, "_possibleConstructorReturn", "/Users/iain/Projects/react-ssr/src/app/views/Home.js");
  reactHotLoader.register(_assertThisInitialized, "_assertThisInitialized", "/Users/iain/Projects/react-ssr/src/app/views/Home.js");
  reactHotLoader.register(_getPrototypeOf, "_getPrototypeOf", "/Users/iain/Projects/react-ssr/src/app/views/Home.js");
  reactHotLoader.register(_inherits, "_inherits", "/Users/iain/Projects/react-ssr/src/app/views/Home.js");
  reactHotLoader.register(_setPrototypeOf, "_setPrototypeOf", "/Users/iain/Projects/react-ssr/src/app/views/Home.js");
  reactHotLoader.register(Home, "Home", "/Users/iain/Projects/react-ssr/src/app/views/Home.js");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "/Users/iain/Projects/react-ssr/src/app/views/Home.js");
  reactHotLoader.register(mapDispatchToProps, "mapDispatchToProps", "/Users/iain/Projects/react-ssr/src/app/views/Home.js");
  reactHotLoader.register(_default, "_default", "/Users/iain/Projects/react-ssr/src/app/views/Home.js");
  reactHotLoader.register(_default2, "default", "/Users/iain/Projects/react-ssr/src/app/views/Home.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3N0b3JlL2FjdGlvbnMvYXV0aC1hY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvdmlld3MvSG9tZS5qcyJdLCJuYW1lcyI6WyJBVVRIX1VTRVIiLCJMT0dPVVRfVVNFUiIsImF1dGhVc2VyIiwiZGlzcGF0Y2giLCJ0eXBlIiwicGF5bG9hZCIsInVzZXIiLCJsb2dvdXRVc2VyIiwiSG9tZSIsInByb3BzIiwiaGFuZGxlTG9naW4iLCJoYW5kbGVMb2dvdXQiLCJDb21wb25lbnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJhdXRoIiwic3RhdGUiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJiaW5kQWN0aW9uQ3JlYXRvcnMiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTyxJQUFNQSxTQUFTLEdBQWY7QUFDQSxJQUFNQyxXQUFXLEdBQWpCO0FBRUEsSUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FBSTtBQUFBLFNBQUksb0JBQWM7QUFDNUNDLFlBQVEsQ0FBQztBQUNQQyxVQUFJLEVBREc7QUFFUEMsYUFBTyxFQUFFQztBQUZGLEtBQUQsQ0FBUkg7QUFEMEI7QUFBckI7QUFPQSxJQUFNSSxVQUFVLEdBQUcsU0FBYkEsVUFBYTtBQUFBLFNBQU0sb0JBQWM7QUFDNUNKLFlBQVEsQ0FBQztBQUNQQyxVQUFJLEVBQUVIO0FBREMsS0FBRCxDQUFSRTtBQUR3QjtBQUFuQjs7Ozs7Ozs7Ozs7OzBCQVZNSCxTOzBCQUNBQyxXOzBCQUVBQyxROzBCQU9BSyxVOzs7Ozs7Ozs7Ozs7Ozs7OzBCQVZBUCxTOzBCQUNBQyxXOzBCQUVBQyxROzBCQU9BSyxVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVmI7QUFDQTtBQUNBO0FBRUE7O0lBRU1DLEk7Ozs7O0FBQ0osdUJBQW1CO0FBQUE7O0FBQUE7QUFFbEI7Ozs7OEJBRVM7QUFDUkMsV0FBSyxDQUFMQSxTQUFlO0FBQUVILFlBQUksRUFBRTtBQUFSLE9BQWZHO0FBQ0Q7OzsrQkFFVTtBQUNUQSxXQUFLLENBQUxBO0FBQ0Q7Ozs2QkFFUTtBQUNQLGFBQ0Usd0hBQ0UsdUVBREYsY0FDRSxDQURGLEVBRUUsc0VBQUlBLEtBQUssQ0FBTEEseUNBQXdDQSxLQUFLLENBQUxBLEtBQXhDQSxRQUZOLE1BRUUsQ0FGRixFQUdFO0FBQVEsWUFBSSxFQUFaO0FBQXNCLGVBQU8sRUFBRSxLQUFLQztBQUFwQyxTQUhGLE9BR0UsQ0FIRixFQU1FO0FBQVEsWUFBSSxFQUFaO0FBQXNCLGVBQU8sRUFBRSxLQUFLQztBQUFwQyxTQVBKLE9BT0ksQ0FORixDQURGO0FBWUQ7Ozs7Ozs7Ozs7O0VBMUJnQkMsK0M7O0FBNkJuQixJQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLFFBQUs7QUFBQSxTQUFLO0FBQ2hDQyxRQUFJLEVBQUVDLEtBQUssQ0FBQ0Q7QUFEb0IsR0FBTDtBQUE3Qjs7QUFJQSxJQUFNRSxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLFdBQVE7QUFBQSxTQUFJQyxnRUFBa0IsQ0FBQztBQUFFZixZQUFRLEVBQVY7QUFBWUssY0FBVSxFQUFWQSxzRUFBVUE7QUFBdEIsR0FBRCxFQUF0QixRQUFzQixDQUF0QjtBQUFuQzs7ZUFFZVcsMkRBQU8sa0JBQVBBLGtCQUFPLENBQVBBLE07O2dCQUFmLFE7QUFBZTs7Ozs7Ozs7Ozs7OzBCQW5DVFYsSTswQkE2QkFLLGU7MEJBSUFHLGtCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFqQ0FSLEk7MEJBNkJBSyxlOzBCQUlBRyxrQiIsImZpbGUiOiJtYWluLmRiNDY0NmQ0ZWM2NmNhYzdiMzMzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgQVVUSF9VU0VSID0gJ0FVVEhfVVNFUic7XG5leHBvcnQgY29uc3QgTE9HT1VUX1VTRVIgPSAnTE9HT1VUX1VTRVInO1xuXG5leHBvcnQgY29uc3QgYXV0aFVzZXIgPSB1c2VyID0+IChkaXNwYXRjaCkgPT4ge1xuICBkaXNwYXRjaCh7XG4gICAgdHlwZTogQVVUSF9VU0VSLFxuICAgIHBheWxvYWQ6IHVzZXIsXG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGxvZ291dFVzZXIgPSAoKSA9PiAoZGlzcGF0Y2gpID0+IHtcbiAgZGlzcGF0Y2goe1xuICAgIHR5cGU6IExPR09VVF9VU0VSLFxuICB9KTtcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IHsgYXV0aFVzZXIsIGxvZ291dFVzZXIgfSBmcm9tICcuLi9zdG9yZS9hY3Rpb25zL2F1dGgtYWN0aW9ucyc7XG5cbmNsYXNzIEhvbWUgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBvbkxvZ2luKCkge1xuICAgIHByb3BzLmF1dGhVc2VyKHsgdXNlcjogJ0lhaW4nIH0pO1xuICB9XG5cbiAgb25Mb2dvdXQoKSB7XG4gICAgcHJvcHMubG9nb3V0VXNlcigpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICA8aDE+VGhpcyBpcyBob21lPC9oMT5cbiAgICAgICAgPHA+e3Byb3BzLmF1dGgudXNlciA/IGBMb2dnZWQgaW4hIFdlbGNvbWUgJHtwcm9wcy5hdXRoLnVzZXJ9YCA6ICdIb2khJ308L3A+XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlTG9naW59PlxuICAgICAgICAgIExvZ2luXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUxvZ291dH0+XG4gICAgICAgICAgTG9neXRcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8Lz5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XG4gIGF1dGg6IHN0YXRlLmF1dGgsXG59KTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4gYmluZEFjdGlvbkNyZWF0b3JzKHsgYXV0aFVzZXIsIGxvZ291dFVzZXIgfSwgZGlzcGF0Y2gpO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICBtYXBTdGF0ZVRvUHJvcHMsXG4gIG1hcERpc3BhdGNoVG9Qcm9wcyxcbikoSG9tZSk7XG4iXSwic291cmNlUm9vdCI6IiJ9