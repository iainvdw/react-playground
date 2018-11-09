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
  user: null
};

var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions_auth_actions__WEBPACK_IMPORTED_MODULE_6__["AUTH_USER"]:
      return;

    case _actions_auth_actions__WEBPACK_IMPORTED_MODULE_6__["AUTH_USER"]:
      return _objectSpread({}, state, {
        user: action.payload.user
      });

    case _actions_auth_actions__WEBPACK_IMPORTED_MODULE_6__["LOGOUT_USER"]:
      return _objectSpread({}, state, {
        user: null
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3N0b3JlL3JlZHVjZXJzL2F1dGguanMiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwibG9hZGluZyIsInVzZXIiLCJzdGF0ZSIsImFjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQSxJQUFNQSxZQUFZLEdBQUc7QUFDbkJDLFNBQU8sRUFEWTtBQUVuQkMsTUFBSSxFQUFFO0FBRmEsQ0FBckI7O2VBS2Usb0JBQXdDO0FBQUEsTUFBOUJDLEtBQThCLHVFQUF0QkgsWUFBc0I7QUFBQSxNQUFSSSxNQUFROztBQUNyRCxVQUFRQSxNQUFNLENBQWQ7QUFDRTtBQUNFOztBQUNGO0FBQ0U7QUFBbUJGLFlBQUksRUFBRUUsTUFBTSxDQUFOQSxRQUFlRjtBQUF4Qzs7QUFDRjtBQUNFO0FBQW1CQSxZQUFJLEVBQUU7QUFBekI7O0FBQ0Y7QUFDRTtBQVJKOzs7Z0JBREYsUTtBQUFlOzs7Ozs7Ozs7Ozs7MEJBTFRGLFk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBQUFBLFkiLCJmaWxlIjoibWFpbi41ZTNjNGQyMzYzNDI5ODczNTg4Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQVVUSF9VU0VSLCBMT0dPVVRfVVNFUiwgUkVRVUVTVF9BVVRIIH0gZnJvbSAnLi4vYWN0aW9ucy9hdXRoLWFjdGlvbnMnO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIGxvYWRpbmc6IGZhbHNlLFxuICB1c2VyOiBudWxsLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgQVVUSF9VU0VSOlxuICAgICAgcmV0dXJuO1xuICAgIGNhc2UgQVVUSF9VU0VSOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHVzZXI6IGFjdGlvbi5wYXlsb2FkLnVzZXIgfTtcbiAgICBjYXNlIExPR09VVF9VU0VSOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHVzZXI6IG51bGwgfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUgfTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==