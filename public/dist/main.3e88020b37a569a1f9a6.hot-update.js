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

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "This is home"), props.auth.loading ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Loading") : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, props.auth.user ? "Logged in! Welcome ".concat(props.auth.user) : 'Login first please!'), props.auth.error ? props.auth.error : null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3ZpZXdzL0hvbWUuanMiXSwibmFtZXMiOlsicHJvcHMiLCJ1c2VyIiwiaGFuZGxlTG9naW4iLCJoYW5kbGVMb2dvdXQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJhdXRoIiwic3RhdGUiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJiaW5kQWN0aW9uQ3JlYXRvcnMiLCJhdXRoVXNlciIsImxvZ291dFVzZXIiLCJjb25uZWN0IiwiSG9tZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLHFCQUFxQjtBQUNuQix5QkFBdUI7QUFDckJBLFNBQUssQ0FBTEEsU0FBZTtBQUFFQyxVQUFJLEVBQUU7QUFBUixLQUFmRDtBQUNEOztBQUVELDBCQUF3QjtBQUN0QkEsU0FBSyxDQUFMQTtBQUNEOztBQUVELFNBQ0Usd0hBQ0UsdUVBREYsY0FDRSxDQURGLEVBRUdBLEtBQUssQ0FBTEEsZUFDQyxzRUFEREEsU0FDQyxDQUREQSxHQUdDLHNFQUFJQSxLQUFLLENBQUxBLHlDQUF3Q0EsS0FBSyxDQUFMQSxLQUF4Q0EsUUFMUixxQkFLSSxDQUxKLEVBT0dBLEtBQUssQ0FBTEEsYUFBbUJBLEtBQUssQ0FBTEEsS0FBbkJBLFFBUEgsTUFRRTtBQUFRLFFBQUksRUFBWjtBQUFzQixXQUFPLEVBQUVFO0FBQS9CLEtBUkYsT0FRRSxDQVJGLEVBV0U7QUFBUSxRQUFJLEVBQVo7QUFBc0IsV0FBTyxFQUFFQztBQUEvQixLQVpKLFFBWUksQ0FYRixDQURGO0FBaUJEOztBQUVELElBQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsUUFBSztBQUFBLFNBQUs7QUFDaENDLFFBQUksRUFBRUMsS0FBSyxDQUFDRDtBQURvQixHQUFMO0FBQTdCOztBQUlBLElBQU1FLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsV0FBUTtBQUFBLFNBQUlDLGdFQUFrQixDQUFDO0FBQUVDLFlBQVEsRUFBVjtBQUFZQyxjQUFVLEVBQVZBLHNFQUFVQTtBQUF0QixHQUFELEVBQXRCLFFBQXNCLENBQXRCO0FBQW5DOztlQUVlQywyREFBTyxrQkFBUEEsa0JBQU8sQ0FBUEEsTTs7Z0JBQWYsUTtBQUFlOzs7Ozs7Ozs7Ozs7MEJBbENOQyxJOzBCQTRCSFIsZTswQkFJQUcsa0I7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQWhDTixJOzBCQTRCTUgsZTswQkFJQUcsa0IiLCJmaWxlIjoibWFpbi4zZTg4MDIwYjM3YTU2OWExZjlhNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCB7IGF1dGhVc2VyLCBsb2dvdXRVc2VyIH0gZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy9hdXRoLWFjdGlvbnMnO1xuXG5mdW5jdGlvbiBIb21lKHByb3BzKSB7XG4gIGZ1bmN0aW9uIGhhbmRsZUxvZ2luKCkge1xuICAgIHByb3BzLmF1dGhVc2VyKHsgdXNlcjogJ0lhaW4nIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlTG9nb3V0KCkge1xuICAgIHByb3BzLmxvZ291dFVzZXIoKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxoMT5UaGlzIGlzIGhvbWU8L2gxPlxuICAgICAge3Byb3BzLmF1dGgubG9hZGluZyA/IChcbiAgICAgICAgPHA+TG9hZGluZzwvcD5cbiAgICAgICkgOiAoXG4gICAgICAgIDxwPntwcm9wcy5hdXRoLnVzZXIgPyBgTG9nZ2VkIGluISBXZWxjb21lICR7cHJvcHMuYXV0aC51c2VyfWAgOiAnTG9naW4gZmlyc3QgcGxlYXNlISd9PC9wPlxuICAgICAgKX1cbiAgICAgIHtwcm9wcy5hdXRoLmVycm9yID8gcHJvcHMuYXV0aC5lcnJvciA6IG51bGx9XG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtoYW5kbGVMb2dpbn0+XG4gICAgICAgIExvZ2luXG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e2hhbmRsZUxvZ291dH0+XG4gICAgICAgIExvZ291dFxuICAgICAgPC9idXR0b24+XG4gICAgPC8+XG4gICk7XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XG4gIGF1dGg6IHN0YXRlLmF1dGgsXG59KTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4gYmluZEFjdGlvbkNyZWF0b3JzKHsgYXV0aFVzZXIsIGxvZ291dFVzZXIgfSwgZGlzcGF0Y2gpO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICBtYXBTdGF0ZVRvUHJvcHMsXG4gIG1hcERpc3BhdGNoVG9Qcm9wcyxcbikoSG9tZSk7XG4iXSwic291cmNlUm9vdCI6IiJ9