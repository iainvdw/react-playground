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
    key: "onLogin",
    value: function onLogin() {
      this.props.authUser({
        user: 'Iain'
      });
    }
  }, {
    key: "onLogout",
    value: function onLogout() {
      this.props.logoutUser();
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", null, "This is home"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", null, this.props.auth.user ? "Logged in! Welcome ".concat(this.props.auth.user) : 'Hoi!'), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        type: "button",
        onClick: this.handleLogin
      }, "Login"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3ZpZXdzL0hvbWUuanMiXSwibmFtZXMiOlsiSG9tZSIsInVzZXIiLCJoYW5kbGVMb2dpbiIsImhhbmRsZUxvZ291dCIsIkNvbXBvbmVudCIsIm1hcFN0YXRlVG9Qcm9wcyIsImF1dGgiLCJzdGF0ZSIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImJpbmRBY3Rpb25DcmVhdG9ycyIsImF1dGhVc2VyIiwibG9nb3V0VXNlciIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTs7SUFFTUEsSTs7Ozs7QUFDSixrQkFBYztBQUFBOztBQUFBOztBQUNaOztBQUVBOztBQUNBOztBQUpZO0FBS2I7Ozs7OEJBRVM7QUFDUiwwQkFBb0I7QUFBRUMsWUFBSSxFQUFFO0FBQVIsT0FBcEI7QUFDRDs7OytCQUVVO0FBQ1Q7QUFDRDs7OzZCQUVRO0FBQ1AsYUFDRSx3SEFDRSx1RUFERixjQUNFLENBREYsRUFFRSxzRUFBSSxvREFBNkMsZ0JBQTdDLFFBRk4sTUFFRSxDQUZGLEVBR0U7QUFBUSxZQUFJLEVBQVo7QUFBc0IsZUFBTyxFQUFFLEtBQUtDO0FBQXBDLFNBSEYsT0FHRSxDQUhGLEVBTUU7QUFBUSxZQUFJLEVBQVo7QUFBc0IsZUFBTyxFQUFFLEtBQUtDO0FBQXBDLFNBUEosT0FPSSxDQU5GLENBREY7QUFZRDs7Ozs7Ozs7Ozs7RUE3QmdCQywrQzs7QUFnQ25CLElBQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsUUFBSztBQUFBLFNBQUs7QUFDaENDLFFBQUksRUFBRUMsS0FBSyxDQUFDRDtBQURvQixHQUFMO0FBQTdCOztBQUlBLElBQU1FLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsV0FBUTtBQUFBLFNBQUlDLGdFQUFrQixDQUFDO0FBQUVDLFlBQVEsRUFBVjtBQUFZQyxjQUFVLEVBQVZBLHNFQUFVQTtBQUF0QixHQUFELEVBQXRCLFFBQXNCLENBQXRCO0FBQW5DOztlQUVlQywyREFBTyxrQkFBUEEsa0JBQU8sQ0FBUEEsTTs7Z0JBQWYsUTtBQUFlOzs7Ozs7Ozs7Ozs7MEJBdENUWixJOzBCQWdDQUssZTswQkFJQUcsa0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQXBDQVIsSTswQkFnQ0FLLGU7MEJBSUFHLGtCIiwiZmlsZSI6Im1haW4uZDc0YjQzNzk5Y2NkMTgyMzJhNDEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgeyBhdXRoVXNlciwgbG9nb3V0VXNlciB9IGZyb20gJy4uL3N0b3JlL2FjdGlvbnMvYXV0aC1hY3Rpb25zJztcblxuY2xhc3MgSG9tZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLm9uTG9naW4uYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uTG9nb3V0LmJpbmQodGhpcyk7XG4gIH1cblxuICBvbkxvZ2luKCkge1xuICAgIHRoaXMucHJvcHMuYXV0aFVzZXIoeyB1c2VyOiAnSWFpbicgfSk7XG4gIH1cblxuICBvbkxvZ291dCgpIHtcbiAgICB0aGlzLnByb3BzLmxvZ291dFVzZXIoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgPGgxPlRoaXMgaXMgaG9tZTwvaDE+XG4gICAgICAgIDxwPnt0aGlzLnByb3BzLmF1dGgudXNlciA/IGBMb2dnZWQgaW4hIFdlbGNvbWUgJHt0aGlzLnByb3BzLmF1dGgudXNlcn1gIDogJ0hvaSEnfTwvcD5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17dGhpcy5oYW5kbGVMb2dpbn0+XG4gICAgICAgICAgTG9naW5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlTG9nb3V0fT5cbiAgICAgICAgICBMb2d5dFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvPlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcbiAgYXV0aDogc3RhdGUuYXV0aCxcbn0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiBiaW5kQWN0aW9uQ3JlYXRvcnMoeyBhdXRoVXNlciwgbG9nb3V0VXNlciB9LCBkaXNwYXRjaCk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIG1hcFN0YXRlVG9Qcm9wcyxcbiAgbWFwRGlzcGF0Y2hUb1Byb3BzLFxuKShIb21lKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=