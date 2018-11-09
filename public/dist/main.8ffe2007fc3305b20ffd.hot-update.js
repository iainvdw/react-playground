webpackHotUpdate("main",{

/***/ "./src/app/actions/auth-actions.js":
/*!*****************************************!*\
  !*** ./src/app/actions/auth-actions.js ***!
  \*****************************************/
/*! exports provided: authUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authUser", function() { return authUser; });
(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function authUser() {}
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(authUser, "authUser", "/Users/iain/Projects/react-ssr/src/app/actions/auth-actions.js");
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

  reactHotLoader.register(authUser, "authUser", "/Users/iain/Projects/react-ssr/src/app/actions/auth-actions.js");
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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_auth_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/auth-actions */ "./src/app/actions/auth-actions.js");
(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();





function Home(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "This is home"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, props.auth.user ? "Logged in! Welcome ".concat(props.auth.user) : 'Hoi!'), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    onClick: props.onAuth({
      user: 'Iain'
    })
  }, "Login"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    onClick: props.onLogout()
  }, "Logyt"));
}

var mapStateToProps = function mapStateToProps(state) {
  return {
    auth: state.auth
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onAuth: function onAuth(user) {
      return dispatch(Object(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_2__["authUser"])(user));
    }
  };
};

var _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(Home);

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2FjdGlvbnMvYXV0aC1hY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvdmlld3MvSG9tZS5qcyJdLCJuYW1lcyI6WyJhdXRoVXNlciIsInByb3BzIiwidXNlciIsIm1hcFN0YXRlVG9Qcm9wcyIsImF1dGgiLCJzdGF0ZSIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsIm9uQXV0aCIsImRpc3BhdGNoIiwiY29ubmVjdCIsIkhvbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFPLG9CQUFvQixDQUFFOzs7Ozs7Ozs7Ozs7MEJBQWJBLFE7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBQVQsUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FQO0FBQ0E7QUFFQTs7QUFFQSxxQkFBcUI7QUFDbkIsU0FDRSx3SEFDRSx1RUFERixjQUNFLENBREYsRUFFRSxzRUFBSUMsS0FBSyxDQUFMQSx5Q0FBd0NBLEtBQUssQ0FBTEEsS0FBeENBLFFBRk4sTUFFRSxDQUZGLEVBR0U7QUFBUSxRQUFJLEVBQVo7QUFBc0IsV0FBTyxFQUFFLEtBQUssQ0FBTCxPQUFhO0FBQUVDLFVBQUksRUFBRTtBQUFSLEtBQWI7QUFBL0IsS0FIRixPQUdFLENBSEYsRUFNRTtBQUFRLFFBQUksRUFBWjtBQUFzQixXQUFPLEVBQUVELEtBQUssQ0FBTEE7QUFBL0IsS0FQSixPQU9JLENBTkYsQ0FERjtBQVlEOztBQUVELElBQU1FLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsUUFBSztBQUFBLFNBQUs7QUFDaENDLFFBQUksRUFBRUMsS0FBSyxDQUFDRDtBQURvQixHQUFMO0FBQTdCOztBQUlBLElBQU1FLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsV0FBUTtBQUFBLFNBQUs7QUFDdENDLFVBQU0sRUFBRSxzQkFBSTtBQUFBLGFBQUlDLFFBQVEsQ0FBQ1Isc0VBQVEsQ0FBckIsSUFBcUIsQ0FBVCxDQUFaO0FBQUE7QUFEMEIsR0FBTDtBQUFuQzs7ZUFJZVMsMkRBQU8sa0JBQVBBLGtCQUFPLENBQVBBLE07O2dCQUFmLFE7QUFBZTs7Ozs7Ozs7Ozs7OzBCQXZCTkMsSTswQkFlSFAsZTswQkFJQUcsa0I7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQW5CTixJOzBCQWVNSCxlOzBCQUlBRyxrQiIsImZpbGUiOiJtYWluLjhmZmUyMDA3ZmMzMzA1YjIwZmZkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gYXV0aFVzZXIoKSB7fVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCB7IGF1dGhVc2VyIH0gZnJvbSAnLi4vYWN0aW9ucy9hdXRoLWFjdGlvbnMnO1xuXG5mdW5jdGlvbiBIb21lKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxoMT5UaGlzIGlzIGhvbWU8L2gxPlxuICAgICAgPHA+e3Byb3BzLmF1dGgudXNlciA/IGBMb2dnZWQgaW4hIFdlbGNvbWUgJHtwcm9wcy5hdXRoLnVzZXJ9YCA6ICdIb2khJ308L3A+XG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtwcm9wcy5vbkF1dGgoeyB1c2VyOiAnSWFpbicgfSl9PlxuICAgICAgICBMb2dpblxuICAgICAgPC9idXR0b24+XG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtwcm9wcy5vbkxvZ291dCgpfT5cbiAgICAgICAgTG9neXRcbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvPlxuICApO1xufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xuICBhdXRoOiBzdGF0ZS5hdXRoLFxufSk7XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+ICh7XG4gIG9uQXV0aDogdXNlciA9PiBkaXNwYXRjaChhdXRoVXNlcih1c2VyKSksXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgbWFwU3RhdGVUb1Byb3BzLFxuICBtYXBEaXNwYXRjaFRvUHJvcHMsXG4pKEhvbWUpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==