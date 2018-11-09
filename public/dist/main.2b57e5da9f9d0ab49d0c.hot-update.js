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
    console.log(this);
    props.authUser({
      user: 'Iain'
    });
  }

  function handleLogout() {
    console.log('logout');
    console.log(this);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3ZpZXdzL0hvbWUuanMiXSwibmFtZXMiOlsiY29uc29sZSIsInByb3BzIiwidXNlciIsImhhbmRsZUxvZ2luIiwiaGFuZGxlTG9nb3V0IiwibWFwU3RhdGVUb1Byb3BzIiwiYXV0aCIsInN0YXRlIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiYmluZEFjdGlvbkNyZWF0b3JzIiwiYXV0aFVzZXIiLCJsb2dvdXRVc2VyIiwiY29ubmVjdCIsIkhvbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQSxxQkFBcUI7QUFDbkIseUJBQXVCO0FBQ3JCQSxXQUFPLENBQVBBO0FBQ0FBLFdBQU8sQ0FBUEE7QUFFQUMsU0FBSyxDQUFMQSxTQUFlO0FBQUVDLFVBQUksRUFBRTtBQUFSLEtBQWZEO0FBQ0Q7O0FBRUQsMEJBQXdCO0FBQ3RCRCxXQUFPLENBQVBBO0FBQ0FBLFdBQU8sQ0FBUEE7QUFFQUMsU0FBSyxDQUFMQTtBQUNEOztBQUVELFNBQ0Usd0hBQ0UsdUVBREYsY0FDRSxDQURGLEVBRUUsc0VBQUlBLEtBQUssQ0FBTEEseUNBQXdDQSxLQUFLLENBQUxBLEtBQXhDQSxRQUZOLHFCQUVFLENBRkYsRUFHRTtBQUFRLFFBQUksRUFBWjtBQUFzQixXQUFPLEVBQUVFO0FBQS9CLEtBSEYsT0FHRSxDQUhGLEVBTUU7QUFBUSxRQUFJLEVBQVo7QUFBc0IsV0FBTyxFQUFFQztBQUEvQixLQVBKLFFBT0ksQ0FORixDQURGO0FBWUQ7O0FBRUQsSUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixRQUFLO0FBQUEsU0FBSztBQUNoQ0MsUUFBSSxFQUFFQyxLQUFLLENBQUNEO0FBRG9CLEdBQUw7QUFBN0I7O0FBSUEsSUFBTUUsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixXQUFRO0FBQUEsU0FBSUMsZ0VBQWtCLENBQUM7QUFBRUMsWUFBUSxFQUFWO0FBQVlDLGNBQVUsRUFBVkEsc0VBQVVBO0FBQXRCLEdBQUQsRUFBdEIsUUFBc0IsQ0FBdEI7QUFBbkM7O2VBRWVDLDJEQUFPLGtCQUFQQSxrQkFBTyxDQUFQQSxNOztnQkFBZixRO0FBQWU7Ozs7Ozs7Ozs7OzswQkFuQ05DLEk7MEJBNkJIUixlOzBCQUlBRyxrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBakNOLEk7MEJBNkJNSCxlOzBCQUlBRyxrQiIsImZpbGUiOiJtYWluLjJiNTdlNWRhOWY5ZDBhYjQ5ZDBjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IHsgYXV0aFVzZXIsIGxvZ291dFVzZXIgfSBmcm9tICcuLi9zdG9yZS9hY3Rpb25zL2F1dGgtYWN0aW9ucyc7XG5cbmZ1bmN0aW9uIEhvbWUocHJvcHMpIHtcbiAgZnVuY3Rpb24gaGFuZGxlTG9naW4oKSB7XG4gICAgY29uc29sZS5sb2coJ2xvZ2luJyk7XG4gICAgY29uc29sZS5sb2codGhpcyk7XG5cbiAgICBwcm9wcy5hdXRoVXNlcih7IHVzZXI6ICdJYWluJyB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUxvZ291dCgpIHtcbiAgICBjb25zb2xlLmxvZygnbG9nb3V0Jyk7XG4gICAgY29uc29sZS5sb2codGhpcyk7XG5cbiAgICBwcm9wcy5sb2dvdXRVc2VyKCk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8aDE+VGhpcyBpcyBob21lPC9oMT5cbiAgICAgIDxwPntwcm9wcy5hdXRoLnVzZXIgPyBgTG9nZ2VkIGluISBXZWxjb21lICR7cHJvcHMuYXV0aC51c2VyfWAgOiAnTG9naW4gZmlyc3QgcGxlYXNlISd9PC9wPlxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17aGFuZGxlTG9naW59PlxuICAgICAgICBMb2dpblxuICAgICAgPC9idXR0b24+XG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtoYW5kbGVMb2dvdXR9PlxuICAgICAgICBMb2dvdXRcbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvPlxuICApO1xufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xuICBhdXRoOiBzdGF0ZS5hdXRoLFxufSk7XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+IGJpbmRBY3Rpb25DcmVhdG9ycyh7IGF1dGhVc2VyLCBsb2dvdXRVc2VyIH0sIGRpc3BhdGNoKTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgbWFwU3RhdGVUb1Byb3BzLFxuICBtYXBEaXNwYXRjaFRvUHJvcHMsXG4pKEhvbWUpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==