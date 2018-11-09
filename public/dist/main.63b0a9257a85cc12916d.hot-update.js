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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3N0b3JlL2FjdGlvbnMvYXV0aC1hY3Rpb25zLmpzIl0sIm5hbWVzIjpbIlJFUVVFU1RfQVVUSCIsIkFVVEhfVVNFUiIsIkxPR09VVF9VU0VSIiwiQVVUSF9FUlJPUiIsImF1dGhVc2VyIiwiZGlzcGF0Y2giLCJ0eXBlIiwic2V0VGltZW91dCIsInBheWxvYWQiLCJ1c2VyIiwibG9nb3V0VXNlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTyxJQUFNQSxZQUFZLEdBQWxCO0FBQ0EsSUFBTUMsU0FBUyxHQUFmO0FBQ0EsSUFBTUMsV0FBVyxHQUFqQjtBQUNBLElBQU1DLFVBQVUsR0FBaEI7QUFFQSxJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUFJO0FBQUEsU0FBSSxvQkFBYztBQUM1Q0MsWUFBUSxDQUFDO0FBQ1BDLFVBQUksRUFBRU47QUFEQyxLQUFELENBQVJLO0FBSUFFLGNBQVUsQ0FBQyxZQUFNO0FBQ2ZGLGNBQVEsQ0FBQztBQUNQQyxZQUFJLEVBREc7QUFFUEUsZUFBTyxFQUFFQztBQUZGLE9BQUQsQ0FBUko7QUFEUSxPQUFWRSxJQUFVLENBQVZBO0FBTDBCO0FBQXJCO0FBYUEsSUFBTUcsVUFBVSxHQUFHLFNBQWJBLFVBQWE7QUFBQSxTQUFNLG9CQUFjO0FBQzVDTCxZQUFRLENBQUM7QUFDUEMsVUFBSSxFQUFFSjtBQURDLEtBQUQsQ0FBUkc7QUFEd0I7QUFBbkI7Ozs7Ozs7Ozs7OzswQkFsQk1MLFk7MEJBQ0FDLFM7MEJBQ0FDLFc7MEJBQ0FDLFU7MEJBRUFDLFE7MEJBYUFNLFU7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBbEJBVixZOzBCQUNBQyxTOzBCQUNBQyxXOzBCQUNBQyxVOzBCQUVBQyxROzBCQWFBTSxVIiwiZmlsZSI6Im1haW4uNjNiMGE5MjU3YTg1Y2MxMjkxNmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBSRVFVRVNUX0FVVEggPSAnUkVRVUVTVF9BVVRIJztcbmV4cG9ydCBjb25zdCBBVVRIX1VTRVIgPSAnQVVUSF9VU0VSJztcbmV4cG9ydCBjb25zdCBMT0dPVVRfVVNFUiA9ICdMT0dPVVRfVVNFUic7XG5leHBvcnQgY29uc3QgQVVUSF9FUlJPUiA9ICdBVVRIX0VSUk9SJztcblxuZXhwb3J0IGNvbnN0IGF1dGhVc2VyID0gdXNlciA9PiAoZGlzcGF0Y2gpID0+IHtcbiAgZGlzcGF0Y2goe1xuICAgIHR5cGU6IFJFUVVFU1RfQVVUSCxcbiAgfSk7XG5cbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogQVVUSF9VU0VSLFxuICAgICAgcGF5bG9hZDogdXNlcixcbiAgICB9KTtcbiAgfSwgMTAwMCk7XG59O1xuXG5leHBvcnQgY29uc3QgbG9nb3V0VXNlciA9ICgpID0+IChkaXNwYXRjaCkgPT4ge1xuICBkaXNwYXRjaCh7XG4gICAgdHlwZTogTE9HT1VUX1VTRVIsXG4gIH0pO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=