webpackHotUpdate("main",{

/***/ "./src/app/views/Home.js":
/*!*******************************!*\
  !*** ./src/app/views/Home.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var core_js_modules_es6_function_bind__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.function.bind */ "./node_modules/core-js/modules/es6.function.bind.js");
/* harmony import */ var core_js_modules_es6_function_bind__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_bind__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_object_create__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.object.create */ "./node_modules/core-js/modules/es6.object.create.js");
/* harmony import */ var core_js_modules_es6_object_create__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_create__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.object.set-prototype-of */ "./node_modules/core-js/modules/es6.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_object_define_property__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.object.define-property */ "./node_modules/core-js/modules/es6.object.define-property.js");
/* harmony import */ var core_js_modules_es6_object_define_property__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_define_property__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es7.symbol.async-iterator */ "./node_modules/core-js/modules/es7.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es6.symbol */ "./node_modules/core-js/modules/es6.symbol.js");
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_actions_auth_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../store/actions/auth-actions */ "./src/app/store/actions/auth-actions.js");







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

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}






var Home =
/*#__PURE__*/
function (_Component) {
  _inherits(Home, _Component);

  function Home() {
    var _this;

    _classCallCheck(this, Home);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Home).call(this));

    _this.onLogin.bind(_assertThisInitialized(_assertThisInitialized(_this)));

    _this.onLogout.bind(_assertThisInitialized(_assertThisInitialized(_this)));

    return _this;
  }

  _createClass(Home, [{
    key: "handleLogin",
    value: function handleLogin() {
      console.log('login');
      this.props.authUser({
        user: 'Iain'
      });
    }
  }, {
    key: "handleLogout",
    value: function handleLogout() {
      console.log('logout');
      this.props.logoutUser();
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", null, "This is home"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", null, this.props.auth.user ? "Logged in! Welcome ".concat(this.props.auth.user) : 'Login first please!'), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        type: "button",
        onClick: this.handleLogin
      }, "Login"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        type: "button",
        onClick: this.handleLogout
      }, "Logout"));
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
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    auth: state.auth
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_7__["bindActionCreators"])({
    authUser: _store_actions_auth_actions__WEBPACK_IMPORTED_MODULE_9__["authUser"],
    logoutUser: _store_actions_auth_actions__WEBPACK_IMPORTED_MODULE_9__["logoutUser"]
  }, dispatch);
};

var _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToProps, mapDispatchToProps)(Home);

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
  reactHotLoader.register(_getPrototypeOf, "_getPrototypeOf", "/Users/iain/Projects/react-ssr/src/app/views/Home.js");
  reactHotLoader.register(_inherits, "_inherits", "/Users/iain/Projects/react-ssr/src/app/views/Home.js");
  reactHotLoader.register(_setPrototypeOf, "_setPrototypeOf", "/Users/iain/Projects/react-ssr/src/app/views/Home.js");
  reactHotLoader.register(_assertThisInitialized, "_assertThisInitialized", "/Users/iain/Projects/react-ssr/src/app/views/Home.js");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3ZpZXdzL0hvbWUuanMiXSwibmFtZXMiOlsiSG9tZSIsImNvbnNvbGUiLCJ1c2VyIiwiaGFuZGxlTG9naW4iLCJoYW5kbGVMb2dvdXQiLCJDb21wb25lbnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJhdXRoIiwic3RhdGUiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJiaW5kQWN0aW9uQ3JlYXRvcnMiLCJhdXRoVXNlciIsImxvZ291dFVzZXIiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7O0lBRU1BLEk7Ozs7O0FBQ0osa0JBQWM7QUFBQTs7QUFBQTs7QUFDWjs7QUFFQTs7QUFDQTs7QUFKWTtBQUtiOzs7O2tDQUVhO0FBQ1pDLGFBQU8sQ0FBUEE7QUFFQSwwQkFBb0I7QUFBRUMsWUFBSSxFQUFFO0FBQVIsT0FBcEI7QUFDRDs7O21DQUVjO0FBQ2JELGFBQU8sQ0FBUEE7QUFDQTtBQUNEOzs7NkJBRVE7QUFDUCxhQUNFLHdIQUNFLHVFQURGLGNBQ0UsQ0FERixFQUVFLHNFQUNHLG9EQUN5QixnQkFEekIsUUFITCxxQkFFRSxDQUZGLEVBT0U7QUFBUSxZQUFJLEVBQVo7QUFBc0IsZUFBTyxFQUFFLEtBQUtFO0FBQXBDLFNBUEYsT0FPRSxDQVBGLEVBVUU7QUFBUSxZQUFJLEVBQVo7QUFBc0IsZUFBTyxFQUFFLEtBQUtDO0FBQXBDLFNBWEosUUFXSSxDQVZGLENBREY7QUFnQkQ7Ozs7Ozs7Ozs7O0VBcENnQkMsK0M7O0FBdUNuQixJQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLFFBQUs7QUFBQSxTQUFLO0FBQ2hDQyxRQUFJLEVBQUVDLEtBQUssQ0FBQ0Q7QUFEb0IsR0FBTDtBQUE3Qjs7QUFJQSxJQUFNRSxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLFdBQVE7QUFBQSxTQUFJQyxnRUFBa0IsQ0FBQztBQUFFQyxZQUFRLEVBQVY7QUFBWUMsY0FBVSxFQUFWQSxzRUFBVUE7QUFBdEIsR0FBRCxFQUF0QixRQUFzQixDQUF0QjtBQUFuQzs7ZUFFZUMsMkRBQU8sa0JBQVBBLGtCQUFPLENBQVBBLE07O2dCQUFmLFE7QUFBZTs7Ozs7Ozs7Ozs7OzBCQTdDVGIsSTswQkF1Q0FNLGU7MEJBSUFHLGtCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkEzQ0FULEk7MEJBdUNBTSxlOzBCQUlBRyxrQiIsImZpbGUiOiJtYWluLjRmMWJjOTkzYzc2MzMxODJkYTU4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IHsgYXV0aFVzZXIsIGxvZ291dFVzZXIgfSBmcm9tICcuLi9zdG9yZS9hY3Rpb25zL2F1dGgtYWN0aW9ucyc7XG5cbmNsYXNzIEhvbWUgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5vbkxvZ2luLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbkxvZ291dC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgaGFuZGxlTG9naW4oKSB7XG4gICAgY29uc29sZS5sb2coJ2xvZ2luJyk7XG5cbiAgICB0aGlzLnByb3BzLmF1dGhVc2VyKHsgdXNlcjogJ0lhaW4nIH0pO1xuICB9XG5cbiAgaGFuZGxlTG9nb3V0KCkge1xuICAgIGNvbnNvbGUubG9nKCdsb2dvdXQnKTtcbiAgICB0aGlzLnByb3BzLmxvZ291dFVzZXIoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgPGgxPlRoaXMgaXMgaG9tZTwvaDE+XG4gICAgICAgIDxwPlxuICAgICAgICAgIHt0aGlzLnByb3BzLmF1dGgudXNlclxuICAgICAgICAgICAgPyBgTG9nZ2VkIGluISBXZWxjb21lICR7dGhpcy5wcm9wcy5hdXRoLnVzZXJ9YFxuICAgICAgICAgICAgOiAnTG9naW4gZmlyc3QgcGxlYXNlISd9XG4gICAgICAgIDwvcD5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17dGhpcy5oYW5kbGVMb2dpbn0+XG4gICAgICAgICAgTG9naW5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlTG9nb3V0fT5cbiAgICAgICAgICBMb2dvdXRcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8Lz5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XG4gIGF1dGg6IHN0YXRlLmF1dGgsXG59KTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4gYmluZEFjdGlvbkNyZWF0b3JzKHsgYXV0aFVzZXIsIGxvZ291dFVzZXIgfSwgZGlzcGF0Y2gpO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICBtYXBTdGF0ZVRvUHJvcHMsXG4gIG1hcERpc3BhdGNoVG9Qcm9wcyxcbikoSG9tZSk7XG4iXSwic291cmNlUm9vdCI6IiJ9