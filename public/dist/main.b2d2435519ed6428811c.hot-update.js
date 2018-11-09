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
    setTimeout(function () {
      dispatch({
        type: AUTH_USER,
        payload: user
      });
    }, 1000);
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3N0b3JlL2FjdGlvbnMvYXV0aC1hY3Rpb25zLmpzIl0sIm5hbWVzIjpbIkFVVEhfVVNFUiIsIkxPR09VVF9VU0VSIiwiYXV0aFVzZXIiLCJkaXNwYXRjaCIsInR5cGUiLCJwYXlsb2FkIiwidXNlciIsInNldFRpbWVvdXQiLCJsb2dvdXRVc2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTyxJQUFNQSxTQUFTLEdBQWY7QUFDQSxJQUFNQyxXQUFXLEdBQWpCO0FBRUEsSUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FBSTtBQUFBLFNBQUksb0JBQWM7QUFDNUNDLFlBQVEsQ0FBQztBQUNQQyxVQUFJLEVBREc7QUFFUEMsYUFBTyxFQUFFQztBQUZGLEtBQUQsQ0FBUkg7QUFJQUksY0FBVSxDQUFDLFlBQU07QUFDZkosY0FBUSxDQUFDO0FBQ1BDLFlBQUksRUFERztBQUVQQyxlQUFPLEVBQUVDO0FBRkYsT0FBRCxDQUFSSDtBQURRLE9BQVZJLElBQVUsQ0FBVkE7QUFMMEI7QUFBckI7QUFhQSxJQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYTtBQUFBLFNBQU0sb0JBQWM7QUFDNUNMLFlBQVEsQ0FBQztBQUNQQyxVQUFJLEVBQUVIO0FBREMsS0FBRCxDQUFSRTtBQUR3QjtBQUFuQjs7Ozs7Ozs7Ozs7OzBCQWhCTUgsUzswQkFDQUMsVzswQkFFQUMsUTswQkFhQU0sVTs7Ozs7Ozs7Ozs7Ozs7OzswQkFoQkFSLFM7MEJBQ0FDLFc7MEJBRUFDLFE7MEJBYUFNLFUiLCJmaWxlIjoibWFpbi5iMmQyNDM1NTE5ZWQ2NDI4ODExYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IEFVVEhfVVNFUiA9ICdBVVRIX1VTRVInO1xuZXhwb3J0IGNvbnN0IExPR09VVF9VU0VSID0gJ0xPR09VVF9VU0VSJztcblxuZXhwb3J0IGNvbnN0IGF1dGhVc2VyID0gdXNlciA9PiAoZGlzcGF0Y2gpID0+IHtcbiAgZGlzcGF0Y2goe1xuICAgIHR5cGU6IEFVVEhfVVNFUixcbiAgICBwYXlsb2FkOiB1c2VyLFxuICB9KTtcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogQVVUSF9VU0VSLFxuICAgICAgcGF5bG9hZDogdXNlcixcbiAgICB9KTtcbiAgfSwgMTAwMCk7XG59O1xuXG5leHBvcnQgY29uc3QgbG9nb3V0VXNlciA9ICgpID0+IChkaXNwYXRjaCkgPT4ge1xuICBkaXNwYXRjaCh7XG4gICAgdHlwZTogTE9HT1VUX1VTRVIsXG4gIH0pO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=