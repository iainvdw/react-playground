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

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "This is home"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, props.auth.user ? "Logged in! Welcome ".concat(props.auth.user) : 'Login first please!'), props.auth.error, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3ZpZXdzL0hvbWUuanMiXSwibmFtZXMiOlsicHJvcHMiLCJ1c2VyIiwiaGFuZGxlTG9naW4iLCJoYW5kbGVMb2dvdXQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJhdXRoIiwic3RhdGUiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJiaW5kQWN0aW9uQ3JlYXRvcnMiLCJhdXRoVXNlciIsImxvZ291dFVzZXIiLCJjb25uZWN0IiwiSG9tZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLHFCQUFxQjtBQUNuQix5QkFBdUI7QUFDckJBLFNBQUssQ0FBTEEsU0FBZTtBQUFFQyxVQUFJLEVBQUU7QUFBUixLQUFmRDtBQUNEOztBQUVELDBCQUF3QjtBQUN0QkEsU0FBSyxDQUFMQTtBQUNEOztBQUVELFNBQ0Usd0hBQ0UsdUVBREYsY0FDRSxDQURGLEVBRUUsc0VBQUlBLEtBQUssQ0FBTEEseUNBQXdDQSxLQUFLLENBQUxBLEtBQXhDQSxRQUZOLHFCQUVFLENBRkYsRUFHR0EsS0FBSyxDQUFMQSxLQUhILE9BSUU7QUFBUSxRQUFJLEVBQVo7QUFBc0IsV0FBTyxFQUFFRTtBQUEvQixLQUpGLE9BSUUsQ0FKRixFQU9FO0FBQVEsUUFBSSxFQUFaO0FBQXNCLFdBQU8sRUFBRUM7QUFBL0IsS0FSSixRQVFJLENBUEYsQ0FERjtBQWFEOztBQUVELElBQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsUUFBSztBQUFBLFNBQUs7QUFDaENDLFFBQUksRUFBRUMsS0FBSyxDQUFDRDtBQURvQixHQUFMO0FBQTdCOztBQUlBLElBQU1FLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsV0FBUTtBQUFBLFNBQUlDLGdFQUFrQixDQUFDO0FBQUVDLFlBQVEsRUFBVjtBQUFZQyxjQUFVLEVBQVZBLHNFQUFVQTtBQUF0QixHQUFELEVBQXRCLFFBQXNCLENBQXRCO0FBQW5DOztlQUVlQywyREFBTyxrQkFBUEEsa0JBQU8sQ0FBUEEsTTs7Z0JBQWYsUTtBQUFlOzs7Ozs7Ozs7Ozs7MEJBOUJOQyxJOzBCQXdCSFIsZTswQkFJQUcsa0I7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQTVCTixJOzBCQXdCTUgsZTswQkFJQUcsa0IiLCJmaWxlIjoibWFpbi42YzZkZWIyYzhhMThlNjBhODI4OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCB7IGF1dGhVc2VyLCBsb2dvdXRVc2VyIH0gZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy9hdXRoLWFjdGlvbnMnO1xuXG5mdW5jdGlvbiBIb21lKHByb3BzKSB7XG4gIGZ1bmN0aW9uIGhhbmRsZUxvZ2luKCkge1xuICAgIHByb3BzLmF1dGhVc2VyKHsgdXNlcjogJ0lhaW4nIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlTG9nb3V0KCkge1xuICAgIHByb3BzLmxvZ291dFVzZXIoKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxoMT5UaGlzIGlzIGhvbWU8L2gxPlxuICAgICAgPHA+e3Byb3BzLmF1dGgudXNlciA/IGBMb2dnZWQgaW4hIFdlbGNvbWUgJHtwcm9wcy5hdXRoLnVzZXJ9YCA6ICdMb2dpbiBmaXJzdCBwbGVhc2UhJ308L3A+XG4gICAgICB7cHJvcHMuYXV0aC5lcnJvcn1cbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e2hhbmRsZUxvZ2lufT5cbiAgICAgICAgTG9naW5cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17aGFuZGxlTG9nb3V0fT5cbiAgICAgICAgTG9nb3V0XG4gICAgICA8L2J1dHRvbj5cbiAgICA8Lz5cbiAgKTtcbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcbiAgYXV0aDogc3RhdGUuYXV0aCxcbn0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiBiaW5kQWN0aW9uQ3JlYXRvcnMoeyBhdXRoVXNlciwgbG9nb3V0VXNlciB9LCBkaXNwYXRjaCk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIG1hcFN0YXRlVG9Qcm9wcyxcbiAgbWFwRGlzcGF0Y2hUb1Byb3BzLFxuKShIb21lKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=