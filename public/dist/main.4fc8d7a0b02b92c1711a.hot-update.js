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
    console.log('login');
    props.authUser({
      user: 'Iain'
    });
  }

  function handleLogout() {
    console.log('logout');
    props.logoutUser();
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "This is home"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, props.auth.user ? "Logged in! Welcome ".concat(props.auth.user) : 'Login first please!'), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3ZpZXdzL0hvbWUuanMiXSwibmFtZXMiOlsiY29uc29sZSIsInByb3BzIiwidXNlciIsImhhbmRsZUxvZ2luIiwiaGFuZGxlTG9nb3V0IiwibWFwU3RhdGVUb1Byb3BzIiwiYXV0aCIsInN0YXRlIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiYmluZEFjdGlvbkNyZWF0b3JzIiwiYXV0aFVzZXIiLCJsb2dvdXRVc2VyIiwiY29ubmVjdCIsIkhvbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQSxxQkFBcUI7QUFDbkIseUJBQXVCO0FBQ3JCQSxXQUFPLENBQVBBO0FBRUFDLFNBQUssQ0FBTEEsU0FBZTtBQUFFQyxVQUFJLEVBQUU7QUFBUixLQUFmRDtBQUNEOztBQUVELDBCQUF3QjtBQUN0QkQsV0FBTyxDQUFQQTtBQUVBQyxTQUFLLENBQUxBO0FBQ0Q7O0FBRUQsU0FDRSx3SEFDRSx1RUFERixjQUNFLENBREYsRUFFRSxzRUFBSUEsS0FBSyxDQUFMQSx5Q0FBd0NBLEtBQUssQ0FBTEEsS0FBeENBLFFBRk4scUJBRUUsQ0FGRixFQUdFO0FBQVEsUUFBSSxFQUFaO0FBQXNCLFdBQU8sRUFBRUU7QUFBL0IsS0FIRixPQUdFLENBSEYsRUFNRTtBQUFRLFFBQUksRUFBWjtBQUFzQixXQUFPLEVBQUVDO0FBQS9CLEtBUEosUUFPSSxDQU5GLENBREY7QUFZRDs7QUFFRCxJQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLFFBQUs7QUFBQSxTQUFLO0FBQ2hDQyxRQUFJLEVBQUVDLEtBQUssQ0FBQ0Q7QUFEb0IsR0FBTDtBQUE3Qjs7QUFJQSxJQUFNRSxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLFdBQVE7QUFBQSxTQUFJQyxnRUFBa0IsQ0FBQztBQUFFQyxZQUFRLEVBQVY7QUFBWUMsY0FBVSxFQUFWQSxzRUFBVUE7QUFBdEIsR0FBRCxFQUF0QixRQUFzQixDQUF0QjtBQUFuQzs7ZUFFZUMsMkRBQU8sa0JBQVBBLGtCQUFPLENBQVBBLE07O2dCQUFmLFE7QUFBZTs7Ozs7Ozs7Ozs7OzBCQWpDTkMsSTswQkEyQkhSLGU7MEJBSUFHLGtCOzs7Ozs7Ozs7Ozs7Ozs7OzswQkEvQk4sSTswQkEyQk1ILGU7MEJBSUFHLGtCIiwiZmlsZSI6Im1haW4uNGZjOGQ3YTBiMDJiOTJjMTcxMWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgeyBhdXRoVXNlciwgbG9nb3V0VXNlciB9IGZyb20gJy4uL3N0b3JlL2FjdGlvbnMvYXV0aC1hY3Rpb25zJztcblxuZnVuY3Rpb24gSG9tZShwcm9wcykge1xuICBmdW5jdGlvbiBoYW5kbGVMb2dpbigpIHtcbiAgICBjb25zb2xlLmxvZygnbG9naW4nKTtcblxuICAgIHByb3BzLmF1dGhVc2VyKHsgdXNlcjogJ0lhaW4nIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlTG9nb3V0KCkge1xuICAgIGNvbnNvbGUubG9nKCdsb2dvdXQnKTtcblxuICAgIHByb3BzLmxvZ291dFVzZXIoKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxoMT5UaGlzIGlzIGhvbWU8L2gxPlxuICAgICAgPHA+e3Byb3BzLmF1dGgudXNlciA/IGBMb2dnZWQgaW4hIFdlbGNvbWUgJHtwcm9wcy5hdXRoLnVzZXJ9YCA6ICdMb2dpbiBmaXJzdCBwbGVhc2UhJ308L3A+XG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtoYW5kbGVMb2dpbn0+XG4gICAgICAgIExvZ2luXG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e2hhbmRsZUxvZ291dH0+XG4gICAgICAgIExvZ291dFxuICAgICAgPC9idXR0b24+XG4gICAgPC8+XG4gICk7XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XG4gIGF1dGg6IHN0YXRlLmF1dGgsXG59KTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4gYmluZEFjdGlvbkNyZWF0b3JzKHsgYXV0aFVzZXIsIGxvZ291dFVzZXIgfSwgZGlzcGF0Y2gpO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICBtYXBTdGF0ZVRvUHJvcHMsXG4gIG1hcERpc3BhdGNoVG9Qcm9wcyxcbikoSG9tZSk7XG4iXSwic291cmNlUm9vdCI6IiJ9