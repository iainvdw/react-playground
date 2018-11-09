webpackHotUpdate("main",{

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

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "This is home"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, props.auth.user ? "Logged in! Welcome ".concat(props.auth.user) : 'Login first please!'), props.auth.error ? props.auth.error : null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    onClick: handleLogin
  }, "Login"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    onClick: handleLogout
  }, "Logout"));
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3ZpZXdzL0hvbWUuanMiXSwibmFtZXMiOlsicHJvcHMiLCJ1c2VyIiwiaGFuZGxlTG9naW4iLCJoYW5kbGVMb2dvdXQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJhdXRoIiwic3RhdGUiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJiaW5kQWN0aW9uQ3JlYXRvcnMiLCJhdXRoVXNlciIsImxvZ291dFVzZXIiLCJjb25uZWN0IiwiSG9tZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLHFCQUFxQjtBQUNuQix5QkFBdUI7QUFDckJBLFNBQUssQ0FBTEEsU0FBZTtBQUFFQyxVQUFJLEVBQUU7QUFBUixLQUFmRDtBQUNEOztBQUVELDBCQUF3QjtBQUN0QkEsU0FBSyxDQUFMQTtBQUNEOztBQUVELFNBQ0Usd0hBQ0UsdUVBREYsY0FDRSxDQURGLEVBRUUsc0VBQUlBLEtBQUssQ0FBTEEseUNBQXdDQSxLQUFLLENBQUxBLEtBQXhDQSxRQUZOLHFCQUVFLENBRkYsRUFHR0EsS0FBSyxDQUFMQSxhQUFtQkEsS0FBSyxDQUFMQSxLQUFuQkEsUUFISCxNQUlFO0FBQVEsUUFBSSxFQUFaO0FBQXNCLFdBQU8sRUFBRUU7QUFBL0IsS0FKRixPQUlFLENBSkYsRUFPRTtBQUFRLFFBQUksRUFBWjtBQUFzQixXQUFPLEVBQUVDO0FBQS9CLEtBUkosUUFRSSxDQVBGLENBREY7QUFhRDs7QUFFRCxJQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLFFBQUs7QUFBQSxTQUFLO0FBQ2hDQyxRQUFJLEVBQUVDLEtBQUssQ0FBQ0Q7QUFEb0IsR0FBTDtBQUE3Qjs7QUFJQSxJQUFNRSxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLFdBQVE7QUFBQSxTQUFJQyxnRUFBa0IsQ0FBQztBQUFFQyxZQUFRLEVBQVY7QUFBWUMsY0FBVSxFQUFWQSxzRUFBVUE7QUFBdEIsR0FBRCxFQUF0QixRQUFzQixDQUF0QjtBQUFuQzs7ZUFFZUMsMkRBQU8sa0JBQVBBLGtCQUFPLENBQVBBLE07O2dCQUFmLFE7QUFBZTs7Ozs7Ozs7Ozs7OzBCQTlCTkMsSTswQkF3QkhSLGU7MEJBSUFHLGtCOzs7Ozs7Ozs7Ozs7Ozs7OzswQkE1Qk4sSTswQkF3Qk1ILGU7MEJBSUFHLGtCIiwiZmlsZSI6Im1haW4uZjE0NDIxYzEyOTgzODAyMDJiODQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgeyBhdXRoVXNlciwgbG9nb3V0VXNlciB9IGZyb20gJy4uL3N0b3JlL2FjdGlvbnMvYXV0aC1hY3Rpb25zJztcblxuZnVuY3Rpb24gSG9tZShwcm9wcykge1xuICBmdW5jdGlvbiBoYW5kbGVMb2dpbigpIHtcbiAgICBwcm9wcy5hdXRoVXNlcih7IHVzZXI6ICdJYWluJyB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUxvZ291dCgpIHtcbiAgICBwcm9wcy5sb2dvdXRVc2VyKCk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8aDE+VGhpcyBpcyBob21lPC9oMT5cbiAgICAgIDxwPntwcm9wcy5hdXRoLnVzZXIgPyBgTG9nZ2VkIGluISBXZWxjb21lICR7cHJvcHMuYXV0aC51c2VyfWAgOiAnTG9naW4gZmlyc3QgcGxlYXNlISd9PC9wPlxuICAgICAge3Byb3BzLmF1dGguZXJyb3IgPyBwcm9wcy5hdXRoLmVycm9yIDogbnVsbH1cbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e2hhbmRsZUxvZ2lufT5cbiAgICAgICAgTG9naW5cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17aGFuZGxlTG9nb3V0fT5cbiAgICAgICAgTG9nb3V0XG4gICAgICA8L2J1dHRvbj5cbiAgICA8Lz5cbiAgKTtcbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcbiAgYXV0aDogc3RhdGUuYXV0aCxcbn0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiBiaW5kQWN0aW9uQ3JlYXRvcnMoeyBhdXRoVXNlciwgbG9nb3V0VXNlciB9LCBkaXNwYXRjaCk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIG1hcFN0YXRlVG9Qcm9wcyxcbiAgbWFwRGlzcGF0Y2hUb1Byb3BzLFxuKShIb21lKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=