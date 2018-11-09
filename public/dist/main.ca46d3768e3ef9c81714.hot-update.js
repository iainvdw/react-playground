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
      if (Math.random() > 0.5) {
        dispatch({
          type: AUTH_USER,
          payload: user
        });
      } else {
        dispatch({
          type: AUTH_ERROR
        });
      }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3N0b3JlL2FjdGlvbnMvYXV0aC1hY3Rpb25zLmpzIl0sIm5hbWVzIjpbIlJFUVVFU1RfQVVUSCIsIkFVVEhfVVNFUiIsIkxPR09VVF9VU0VSIiwiQVVUSF9FUlJPUiIsImF1dGhVc2VyIiwiZGlzcGF0Y2giLCJ0eXBlIiwic2V0VGltZW91dCIsIk1hdGgiLCJwYXlsb2FkIiwidXNlciIsImxvZ291dFVzZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sSUFBTUEsWUFBWSxHQUFsQjtBQUNBLElBQU1DLFNBQVMsR0FBZjtBQUNBLElBQU1DLFdBQVcsR0FBakI7QUFDQSxJQUFNQyxVQUFVLEdBQWhCO0FBRUEsSUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FBSTtBQUFBLFNBQUksb0JBQWM7QUFDNUNDLFlBQVEsQ0FBQztBQUNQQyxVQUFJLEVBQUVOO0FBREMsS0FBRCxDQUFSSztBQUlBRSxjQUFVLENBQUMsWUFBTTtBQUNmLFVBQUlDLElBQUksQ0FBSkEsV0FBSixLQUF5QjtBQUN2QkgsZ0JBQVEsQ0FBQztBQUNQQyxjQUFJLEVBREc7QUFFUEcsaUJBQU8sRUFBRUM7QUFGRixTQUFELENBQVJMO0FBREYsYUFLTztBQUNMQSxnQkFBUSxDQUFDO0FBQ1BDLGNBQUksRUFBRUg7QUFEQyxTQUFELENBQVJFO0FBR0Q7QUFWTyxPQUFWRSxJQUFVLENBQVZBO0FBTDBCO0FBQXJCO0FBbUJBLElBQU1JLFVBQVUsR0FBRyxTQUFiQSxVQUFhO0FBQUEsU0FBTSxvQkFBYztBQUM1Q04sWUFBUSxDQUFDO0FBQ1BDLFVBQUksRUFBRUo7QUFEQyxLQUFELENBQVJHO0FBRHdCO0FBQW5COzs7Ozs7Ozs7Ozs7MEJBeEJNTCxZOzBCQUNBQyxTOzBCQUNBQyxXOzBCQUNBQyxVOzBCQUVBQyxROzBCQW1CQU8sVTs7Ozs7Ozs7Ozs7Ozs7OzswQkF4QkFYLFk7MEJBQ0FDLFM7MEJBQ0FDLFc7MEJBQ0FDLFU7MEJBRUFDLFE7MEJBbUJBTyxVIiwiZmlsZSI6Im1haW4uY2E0NmQzNzY4ZTNlZjljODE3MTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBSRVFVRVNUX0FVVEggPSAnUkVRVUVTVF9BVVRIJztcbmV4cG9ydCBjb25zdCBBVVRIX1VTRVIgPSAnQVVUSF9VU0VSJztcbmV4cG9ydCBjb25zdCBMT0dPVVRfVVNFUiA9ICdMT0dPVVRfVVNFUic7XG5leHBvcnQgY29uc3QgQVVUSF9FUlJPUiA9ICdBVVRIX0VSUk9SJztcblxuZXhwb3J0IGNvbnN0IGF1dGhVc2VyID0gdXNlciA9PiAoZGlzcGF0Y2gpID0+IHtcbiAgZGlzcGF0Y2goe1xuICAgIHR5cGU6IFJFUVVFU1RfQVVUSCxcbiAgfSk7XG5cbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgaWYgKE1hdGgucmFuZG9tKCkgPiAwLjUpIHtcbiAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogQVVUSF9VU0VSLFxuICAgICAgICBwYXlsb2FkOiB1c2VyLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogQVVUSF9FUlJPUixcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwgMTAwMCk7XG59O1xuXG5leHBvcnQgY29uc3QgbG9nb3V0VXNlciA9ICgpID0+IChkaXNwYXRjaCkgPT4ge1xuICBkaXNwYXRjaCh7XG4gICAgdHlwZTogTE9HT1VUX1VTRVIsXG4gIH0pO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=