webpackHotUpdate("main",{

/***/ "./src/app/store/reducers/auth.js":
/*!****************************************!*\
  !*** ./src/app/store/reducers/auth.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var core_js_modules_es6_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.object.define-property */ "./node_modules/core-js/modules/es6.object.define-property.js");
/* harmony import */ var core_js_modules_es6_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_array_for_each__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.array.for-each */ "./node_modules/core-js/modules/es6.array.for-each.js");
/* harmony import */ var core_js_modules_es6_array_for_each__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_for_each__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_array_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.array.filter */ "./node_modules/core-js/modules/es6.array.filter.js");
/* harmony import */ var core_js_modules_es6_array_filter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_filter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es6.object.keys */ "./node_modules/core-js/modules/es6.object.keys.js");
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _actions_auth_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actions/auth-actions */ "./src/app/store/actions/auth-actions.js");







(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();








(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}


var initialState = {
  loading: false,
  error: null,
  user: null
};

var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions_auth_actions__WEBPACK_IMPORTED_MODULE_6__["REQUEST_AUTH"]:
      return _objectSpread({}, state, {
        loading: true
      });

    case _actions_auth_actions__WEBPACK_IMPORTED_MODULE_6__["AUTH_ERROR"]:
      return _objectSpread({}, state, {
        loading: false,
        error: action.payload.error
      });

    case _actions_auth_actions__WEBPACK_IMPORTED_MODULE_6__["AUTH_USER"]:
      return _objectSpread({}, state, {
        user: action.payload.user,
        loading: false
      });

    case _actions_auth_actions__WEBPACK_IMPORTED_MODULE_6__["LOGOUT_USER"]:
      return _objectSpread({}, state, {
        user: null,
        loading: false,
        error: null
      });

    default:
      return _objectSpread({}, state);
  }
};

var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(initialState, "initialState", "/Users/iain/Projects/react-ssr/src/app/store/reducers/auth.js");
  reactHotLoader.register(_default, "default", "/Users/iain/Projects/react-ssr/src/app/store/reducers/auth.js");
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

  reactHotLoader.register(_objectSpread, "_objectSpread", "/Users/iain/Projects/react-ssr/src/app/store/reducers/auth.js");
  reactHotLoader.register(_defineProperty, "_defineProperty", "/Users/iain/Projects/react-ssr/src/app/store/reducers/auth.js");
  reactHotLoader.register(initialState, "initialState", "/Users/iain/Projects/react-ssr/src/app/store/reducers/auth.js");
  reactHotLoader.register(_default, "_default", "/Users/iain/Projects/react-ssr/src/app/store/reducers/auth.js");
  reactHotLoader.register(_default2, "default", "/Users/iain/Projects/react-ssr/src/app/store/reducers/auth.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3N0b3JlL3JlZHVjZXJzL2F1dGguanMiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwibG9hZGluZyIsImVycm9yIiwidXNlciIsInN0YXRlIiwiYWN0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUlBLElBQU1BLFlBQVksR0FBRztBQUNuQkMsU0FBTyxFQURZO0FBRW5CQyxPQUFLLEVBRmM7QUFHbkJDLE1BQUksRUFBRTtBQUhhLENBQXJCOztlQU1lLG9CQUF3QztBQUFBLE1BQTlCQyxLQUE4Qix1RUFBdEJKLFlBQXNCO0FBQUEsTUFBUkssTUFBUTs7QUFDckQsVUFBUUEsTUFBTSxDQUFkO0FBQ0U7QUFDRTtBQUFtQkosZUFBTyxFQUFFO0FBQTVCOztBQUNGO0FBQ0U7QUFBbUJBLGVBQU8sRUFBMUI7QUFBbUNDLGFBQUssRUFBRUcsTUFBTSxDQUFOQSxRQUFlSDtBQUF6RDs7QUFDRjtBQUNFO0FBQW1CQyxZQUFJLEVBQUVFLE1BQU0sQ0FBTkEsUUFBekI7QUFBOENKLGVBQU8sRUFBRTtBQUF2RDs7QUFDRjtBQUNFO0FBQ1lFLFlBQUksRUFEaEI7QUFDd0JGLGVBQU8sRUFEL0I7QUFDd0NDLGFBQUssRUFBRTtBQUQvQzs7QUFHRjtBQUNFO0FBWko7OztnQkFERixRO0FBQWU7Ozs7Ozs7Ozs7OzswQkFOVEYsWTs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFBQUEsWSIsImZpbGUiOiJtYWluLjIxZDlkMWIxY2VjZjY5MjExOTJiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBVVRIX1VTRVIsIExPR09VVF9VU0VSLCBSRVFVRVNUX0FVVEgsIEFVVEhfRVJST1IsXG59IGZyb20gJy4uL2FjdGlvbnMvYXV0aC1hY3Rpb25zJztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBsb2FkaW5nOiBmYWxzZSxcbiAgZXJyb3I6IG51bGwsXG4gIHVzZXI6IG51bGwsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBSRVFVRVNUX0FVVEg6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgbG9hZGluZzogdHJ1ZSB9O1xuICAgIGNhc2UgQVVUSF9FUlJPUjpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBsb2FkaW5nOiBmYWxzZSwgZXJyb3I6IGFjdGlvbi5wYXlsb2FkLmVycm9yIH07XG4gICAgY2FzZSBBVVRIX1VTRVI6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgdXNlcjogYWN0aW9uLnBheWxvYWQudXNlciwgbG9hZGluZzogZmFsc2UgfTtcbiAgICBjYXNlIExPR09VVF9VU0VSOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsIHVzZXI6IG51bGwsIGxvYWRpbmc6IGZhbHNlLCBlcnJvcjogbnVsbCxcbiAgICAgIH07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlIH07XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=