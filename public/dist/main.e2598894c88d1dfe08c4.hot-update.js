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
/* harmony import */ var _actions_auth_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/auth-actions */ "./src/app/actions/auth-actions.js");
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
      return dispatch(Object(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_3__["authUser"])(user));
    }
  };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3ZpZXdzL0hvbWUuanMiXSwibmFtZXMiOlsicHJvcHMiLCJ1c2VyIiwibWFwU3RhdGVUb1Byb3BzIiwiYXV0aCIsInN0YXRlIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwib25BdXRoIiwiZGlzcGF0Y2giLCJhdXRoVXNlciIsImNvbm5lY3QiLCJIb21lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7O0FBRUEscUJBQXFCO0FBQ25CLFNBQ0Usd0hBQ0UsdUVBREYsY0FDRSxDQURGLEVBRUUsc0VBQUlBLEtBQUssQ0FBTEEseUNBQXdDQSxLQUFLLENBQUxBLEtBQXhDQSxRQUZOLE1BRUUsQ0FGRixFQUdFO0FBQVEsUUFBSSxFQUFaO0FBQXNCLFdBQU8sRUFBRSxLQUFLLENBQUwsT0FBYTtBQUFFQyxVQUFJLEVBQUU7QUFBUixLQUFiO0FBQS9CLEtBSEYsT0FHRSxDQUhGLEVBTUU7QUFBUSxRQUFJLEVBQVo7QUFBc0IsV0FBTyxFQUFFRCxLQUFLLENBQUxBO0FBQS9CLEtBUEosT0FPSSxDQU5GLENBREY7QUFZRDs7QUFFRCxJQUFNRSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLFFBQUs7QUFBQSxTQUFLO0FBQ2hDQyxRQUFJLEVBQUVDLEtBQUssQ0FBQ0Q7QUFEb0IsR0FBTDtBQUE3Qjs7QUFJQSxJQUFNRSxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLFdBQVE7QUFBQSxTQUFLO0FBQ3RDQyxVQUFNLEVBQUUsc0JBQUk7QUFBQSxhQUFJQyxRQUFRLENBQUNDLHNFQUFRLENBQXJCLElBQXFCLENBQVQsQ0FBWjtBQUFBO0FBRDBCLEdBQUw7QUFBbkM7O2VBSWVDLDJEQUFPLGtCQUFQQSxrQkFBTyxDQUFQQSxNOztnQkFBZixRO0FBQWU7Ozs7Ozs7Ozs7OzswQkF2Qk5DLEk7MEJBZUhSLGU7MEJBSUFHLGtCOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFuQk4sSTswQkFlTUgsZTswQkFJQUcsa0IiLCJmaWxlIjoibWFpbi5lMjU5ODg5NGM4OGQxZGZlMDhjNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCB7IGF1dGhVc2VyIH0gZnJvbSAnLi4vYWN0aW9ucy9hdXRoLWFjdGlvbnMnO1xuXG5mdW5jdGlvbiBIb21lKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxoMT5UaGlzIGlzIGhvbWU8L2gxPlxuICAgICAgPHA+e3Byb3BzLmF1dGgudXNlciA/IGBMb2dnZWQgaW4hIFdlbGNvbWUgJHtwcm9wcy5hdXRoLnVzZXJ9YCA6ICdIb2khJ308L3A+XG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtwcm9wcy5vbkF1dGgoeyB1c2VyOiAnSWFpbicgfSl9PlxuICAgICAgICBMb2dpblxuICAgICAgPC9idXR0b24+XG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtwcm9wcy5vbkxvZ291dCgpfT5cbiAgICAgICAgTG9neXRcbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvPlxuICApO1xufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xuICBhdXRoOiBzdGF0ZS5hdXRoLFxufSk7XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+ICh7XG4gIG9uQXV0aDogdXNlciA9PiBkaXNwYXRjaChhdXRoVXNlcih1c2VyKSksXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgbWFwU3RhdGVUb1Byb3BzLFxuICBtYXBEaXNwYXRjaFRvUHJvcHMsXG4pKEhvbWUpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==