webpackHotUpdate("main",{

/***/ "./src/app/store/actions/auth-actions.js":
/*!***********************************************!*\
  !*** ./src/app/store/actions/auth-actions.js ***!
  \***********************************************/
/*! exports provided: REQUEST_AUTH, AUTH_USER, LOGOUT_USER, authUser, logoutUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REQUEST_AUTH", function() { return REQUEST_AUTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_USER", function() { return AUTH_USER; });
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

var REQUEST_AUTH = 'REQUEST_AUTH';
var AUTH_USER = 'AUTH_USER';
var LOGOUT_USER = 'LOGOUT_USER';
var authUser = function authUser(user) {
  return function (dispatch) {
    dispatch({
      type: REQUEST_AUTH
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

  reactHotLoader.register(REQUEST_AUTH, "REQUEST_AUTH", "/Users/iain/Projects/react-ssr/src/app/store/actions/auth-actions.js");
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

  reactHotLoader.register(REQUEST_AUTH, "REQUEST_AUTH", "/Users/iain/Projects/react-ssr/src/app/store/actions/auth-actions.js");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3N0b3JlL2FjdGlvbnMvYXV0aC1hY3Rpb25zLmpzIl0sIm5hbWVzIjpbIlJFUVVFU1RfQVVUSCIsIkFVVEhfVVNFUiIsIkxPR09VVF9VU0VSIiwiYXV0aFVzZXIiLCJkaXNwYXRjaCIsInR5cGUiLCJzZXRUaW1lb3V0IiwicGF5bG9hZCIsInVzZXIiLCJsb2dvdXRVc2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sSUFBTUEsWUFBWSxHQUFsQjtBQUNBLElBQU1DLFNBQVMsR0FBZjtBQUNBLElBQU1DLFdBQVcsR0FBakI7QUFFQSxJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUFJO0FBQUEsU0FBSSxvQkFBYztBQUM1Q0MsWUFBUSxDQUFDO0FBQ1BDLFVBQUksRUFBRUw7QUFEQyxLQUFELENBQVJJO0FBSUFFLGNBQVUsQ0FBQyxZQUFNO0FBQ2ZGLGNBQVEsQ0FBQztBQUNQQyxZQUFJLEVBREc7QUFFUEUsZUFBTyxFQUFFQztBQUZGLE9BQUQsQ0FBUko7QUFEUSxPQUFWRSxJQUFVLENBQVZBO0FBTDBCO0FBQXJCO0FBYUEsSUFBTUcsVUFBVSxHQUFHLFNBQWJBLFVBQWE7QUFBQSxTQUFNLG9CQUFjO0FBQzVDTCxZQUFRLENBQUM7QUFDUEMsVUFBSSxFQUFFSDtBQURDLEtBQUQsQ0FBUkU7QUFEd0I7QUFBbkI7Ozs7Ozs7Ozs7OzswQkFqQk1KLFk7MEJBQ0FDLFM7MEJBQ0FDLFc7MEJBRUFDLFE7MEJBYUFNLFU7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBakJBVCxZOzBCQUNBQyxTOzBCQUNBQyxXOzBCQUVBQyxROzBCQWFBTSxVIiwiZmlsZSI6Im1haW4uZDgwOGE0NjA2ZjY1ZTY5ZDU1ZGIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBSRVFVRVNUX0FVVEggPSAnUkVRVUVTVF9BVVRIJztcbmV4cG9ydCBjb25zdCBBVVRIX1VTRVIgPSAnQVVUSF9VU0VSJztcbmV4cG9ydCBjb25zdCBMT0dPVVRfVVNFUiA9ICdMT0dPVVRfVVNFUic7XG5cbmV4cG9ydCBjb25zdCBhdXRoVXNlciA9IHVzZXIgPT4gKGRpc3BhdGNoKSA9PiB7XG4gIGRpc3BhdGNoKHtcbiAgICB0eXBlOiBSRVFVRVNUX0FVVEgsXG4gIH0pO1xuXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IEFVVEhfVVNFUixcbiAgICAgIHBheWxvYWQ6IHVzZXIsXG4gICAgfSk7XG4gIH0sIDEwMDApO1xufTtcblxuZXhwb3J0IGNvbnN0IGxvZ291dFVzZXIgPSAoKSA9PiAoZGlzcGF0Y2gpID0+IHtcbiAgZGlzcGF0Y2goe1xuICAgIHR5cGU6IExPR09VVF9VU0VSLFxuICB9KTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9