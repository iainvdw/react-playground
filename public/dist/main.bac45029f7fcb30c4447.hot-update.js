webpackHotUpdate("main",{

/***/ "./src/app/store/actions/auth-actions.js":
/*!***********************************************!*\
  !*** ./src/app/store/actions/auth-actions.js ***!
  \***********************************************/
/*! exports provided: REQUEST_AUTH, AUTH_USER, LOGOUT_USER, AUTH_ERROR, authUser, logoutUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REQUEST_AUTH", function() { return REQUEST_AUTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_USER", function() { return AUTH_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGOUT_USER", function() { return LOGOUT_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_ERROR", function() { return AUTH_ERROR; });
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

var REQUEST_AUTH = 'REQUEST_AUTH';
var AUTH_USER = 'AUTH_USER';
var LOGOUT_USER = 'LOGOUT_USER';
var AUTH_ERROR = 'AUTH_ERROR';
var authUser = function authUser(user) {
  return function (dispatch) {
    dispatch({
      type: REQUEST_AUTH
    });
    setTimeout(function () {
      Math.random() > 0.5 ? dispatch({
        type: AUTH_USER,
        payload: user
      }) : dispatch({
        type: AUTH_ERROR
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

  reactHotLoader.register(REQUEST_AUTH, "REQUEST_AUTH", "/Users/iain/Projects/react-ssr/src/app/store/actions/auth-actions.js");
  reactHotLoader.register(AUTH_USER, "AUTH_USER", "/Users/iain/Projects/react-ssr/src/app/store/actions/auth-actions.js");
  reactHotLoader.register(LOGOUT_USER, "LOGOUT_USER", "/Users/iain/Projects/react-ssr/src/app/store/actions/auth-actions.js");
  reactHotLoader.register(AUTH_ERROR, "AUTH_ERROR", "/Users/iain/Projects/react-ssr/src/app/store/actions/auth-actions.js");
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

  reactHotLoader.register(REQUEST_AUTH, "REQUEST_AUTH", "/Users/iain/Projects/react-ssr/src/app/store/actions/auth-actions.js");
  reactHotLoader.register(AUTH_USER, "AUTH_USER", "/Users/iain/Projects/react-ssr/src/app/store/actions/auth-actions.js");
  reactHotLoader.register(LOGOUT_USER, "LOGOUT_USER", "/Users/iain/Projects/react-ssr/src/app/store/actions/auth-actions.js");
  reactHotLoader.register(AUTH_ERROR, "AUTH_ERROR", "/Users/iain/Projects/react-ssr/src/app/store/actions/auth-actions.js");
  reactHotLoader.register(authUser, "authUser", "/Users/iain/Projects/react-ssr/src/app/store/actions/auth-actions.js");
  reactHotLoader.register(logoutUser, "logoutUser", "/Users/iain/Projects/react-ssr/src/app/store/actions/auth-actions.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3N0b3JlL2FjdGlvbnMvYXV0aC1hY3Rpb25zLmpzIl0sIm5hbWVzIjpbIlJFUVVFU1RfQVVUSCIsIkFVVEhfVVNFUiIsIkxPR09VVF9VU0VSIiwiQVVUSF9FUlJPUiIsImF1dGhVc2VyIiwiZGlzcGF0Y2giLCJ0eXBlIiwic2V0VGltZW91dCIsIk1hdGgiLCJwYXlsb2FkIiwidXNlciIsImxvZ291dFVzZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sSUFBTUEsWUFBWSxHQUFsQjtBQUNBLElBQU1DLFNBQVMsR0FBZjtBQUNBLElBQU1DLFdBQVcsR0FBakI7QUFDQSxJQUFNQyxVQUFVLEdBQWhCO0FBRUEsSUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FBSTtBQUFBLFNBQUksb0JBQWM7QUFDNUNDLFlBQVEsQ0FBQztBQUNQQyxVQUFJLEVBQUVOO0FBREMsS0FBRCxDQUFSSztBQUlBRSxjQUFVLENBQUMsWUFBTTtBQUNmQyxVQUFJLENBQUpBLGlCQUNJSCxRQUFRLENBQUM7QUFDVEMsWUFBSSxFQURLO0FBRVRHLGVBQU8sRUFBRUM7QUFGQSxPQUFELENBRFpGLEdBS0lILFFBQVEsQ0FBQztBQUNUQyxZQUFJLEVBQUVIO0FBREcsT0FBRCxDQUxaSztBQURRLE9BQVZELElBQVUsQ0FBVkE7QUFMMEI7QUFBckI7QUFpQkEsSUFBTUksVUFBVSxHQUFHLFNBQWJBLFVBQWE7QUFBQSxTQUFNLG9CQUFjO0FBQzVDTixZQUFRLENBQUM7QUFDUEMsVUFBSSxFQUFFSjtBQURDLEtBQUQsQ0FBUkc7QUFEd0I7QUFBbkI7Ozs7Ozs7Ozs7OzswQkF0Qk1MLFk7MEJBQ0FDLFM7MEJBQ0FDLFc7MEJBQ0FDLFU7MEJBRUFDLFE7MEJBaUJBTyxVOzs7Ozs7Ozs7Ozs7Ozs7OzBCQXRCQVgsWTswQkFDQUMsUzswQkFDQUMsVzswQkFDQUMsVTswQkFFQUMsUTswQkFpQkFPLFUiLCJmaWxlIjoibWFpbi5iYWM0NTAyOWY3ZmNiMzBjNDQ0Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IFJFUVVFU1RfQVVUSCA9ICdSRVFVRVNUX0FVVEgnO1xuZXhwb3J0IGNvbnN0IEFVVEhfVVNFUiA9ICdBVVRIX1VTRVInO1xuZXhwb3J0IGNvbnN0IExPR09VVF9VU0VSID0gJ0xPR09VVF9VU0VSJztcbmV4cG9ydCBjb25zdCBBVVRIX0VSUk9SID0gJ0FVVEhfRVJST1InO1xuXG5leHBvcnQgY29uc3QgYXV0aFVzZXIgPSB1c2VyID0+IChkaXNwYXRjaCkgPT4ge1xuICBkaXNwYXRjaCh7XG4gICAgdHlwZTogUkVRVUVTVF9BVVRILFxuICB9KTtcblxuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBNYXRoLnJhbmRvbSgpID4gMC41XG4gICAgICA/IGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogQVVUSF9VU0VSLFxuICAgICAgICBwYXlsb2FkOiB1c2VyLFxuICAgICAgfSlcbiAgICAgIDogZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBBVVRIX0VSUk9SLFxuICAgICAgfSk7XG4gIH0sIDEwMDApO1xufTtcblxuZXhwb3J0IGNvbnN0IGxvZ291dFVzZXIgPSAoKSA9PiAoZGlzcGF0Y2gpID0+IHtcbiAgZGlzcGF0Y2goe1xuICAgIHR5cGU6IExPR09VVF9VU0VSLFxuICB9KTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9