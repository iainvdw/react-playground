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
          type: AUTH_ERROR,
          payload: {
            error: 'Oh noes, try againz'
          }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3N0b3JlL2FjdGlvbnMvYXV0aC1hY3Rpb25zLmpzIl0sIm5hbWVzIjpbIlJFUVVFU1RfQVVUSCIsIkFVVEhfVVNFUiIsIkxPR09VVF9VU0VSIiwiQVVUSF9FUlJPUiIsImF1dGhVc2VyIiwiZGlzcGF0Y2giLCJ0eXBlIiwic2V0VGltZW91dCIsIk1hdGgiLCJwYXlsb2FkIiwidXNlciIsImVycm9yIiwibG9nb3V0VXNlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTyxJQUFNQSxZQUFZLEdBQWxCO0FBQ0EsSUFBTUMsU0FBUyxHQUFmO0FBQ0EsSUFBTUMsV0FBVyxHQUFqQjtBQUNBLElBQU1DLFVBQVUsR0FBaEI7QUFFQSxJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUFJO0FBQUEsU0FBSSxvQkFBYztBQUM1Q0MsWUFBUSxDQUFDO0FBQ1BDLFVBQUksRUFBRU47QUFEQyxLQUFELENBQVJLO0FBSUFFLGNBQVUsQ0FBQyxZQUFNO0FBQ2YsVUFBSUMsSUFBSSxDQUFKQSxXQUFKLEtBQXlCO0FBQ3ZCSCxnQkFBUSxDQUFDO0FBQ1BDLGNBQUksRUFERztBQUVQRyxpQkFBTyxFQUFFQztBQUZGLFNBQUQsQ0FBUkw7QUFERixhQUtPO0FBQ0xBLGdCQUFRLENBQUM7QUFDUEMsY0FBSSxFQURHO0FBRVBHLGlCQUFPLEVBQUU7QUFDUEUsaUJBQUssRUFBRTtBQURBO0FBRkYsU0FBRCxDQUFSTjtBQU1EO0FBYk8sT0FBVkUsSUFBVSxDQUFWQTtBQUwwQjtBQUFyQjtBQXNCQSxJQUFNSyxVQUFVLEdBQUcsU0FBYkEsVUFBYTtBQUFBLFNBQU0sb0JBQWM7QUFDNUNQLFlBQVEsQ0FBQztBQUNQQyxVQUFJLEVBQUVKO0FBREMsS0FBRCxDQUFSRztBQUR3QjtBQUFuQjs7Ozs7Ozs7Ozs7OzBCQTNCTUwsWTswQkFDQUMsUzswQkFDQUMsVzswQkFDQUMsVTswQkFFQUMsUTswQkFzQkFRLFU7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBM0JBWixZOzBCQUNBQyxTOzBCQUNBQyxXOzBCQUNBQyxVOzBCQUVBQyxROzBCQXNCQVEsVSIsImZpbGUiOiJtYWluLjM0Njk0MWUzZGU4OWE2ODQ4YWRkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgUkVRVUVTVF9BVVRIID0gJ1JFUVVFU1RfQVVUSCc7XG5leHBvcnQgY29uc3QgQVVUSF9VU0VSID0gJ0FVVEhfVVNFUic7XG5leHBvcnQgY29uc3QgTE9HT1VUX1VTRVIgPSAnTE9HT1VUX1VTRVInO1xuZXhwb3J0IGNvbnN0IEFVVEhfRVJST1IgPSAnQVVUSF9FUlJPUic7XG5cbmV4cG9ydCBjb25zdCBhdXRoVXNlciA9IHVzZXIgPT4gKGRpc3BhdGNoKSA9PiB7XG4gIGRpc3BhdGNoKHtcbiAgICB0eXBlOiBSRVFVRVNUX0FVVEgsXG4gIH0pO1xuXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGlmIChNYXRoLnJhbmRvbSgpID4gMC41KSB7XG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IEFVVEhfVVNFUixcbiAgICAgICAgcGF5bG9hZDogdXNlcixcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IEFVVEhfRVJST1IsXG4gICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICBlcnJvcjogJ09oIG5vZXMsIHRyeSBhZ2FpbnonLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfVxuICB9LCAxMDAwKTtcbn07XG5cbmV4cG9ydCBjb25zdCBsb2dvdXRVc2VyID0gKCkgPT4gKGRpc3BhdGNoKSA9PiB7XG4gIGRpc3BhdGNoKHtcbiAgICB0eXBlOiBMT0dPVVRfVVNFUixcbiAgfSk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==