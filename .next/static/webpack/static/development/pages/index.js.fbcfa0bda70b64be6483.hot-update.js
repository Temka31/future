webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Row.js":
/*!***************************!*\
  !*** ./components/Row.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Row; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/tema/future/components/Row.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function Row(_ref) {
  var human = _ref.human,
      onClickRow = _ref.onClickRow;
  var styles = {
    root: {
      border: "1px solid grey",
      width: "25%"
    }
  };

  var handleClick = function handleClick(event) {
    onClickRow(human.id, human.lastName);
  };

  return __jsx("tr", {
    id: human.id,
    onClick: handleClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("td", {
    style: styles.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, human.id), __jsx("td", {
    style: styles.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, human.firstName), __jsx("td", {
    style: styles.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, human.lastName), __jsx("td", {
    style: styles.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, human.email), __jsx("td", {
    style: styles.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, human.phone));
}

/***/ })

})
//# sourceMappingURL=index.js.fbcfa0bda70b64be6483.hot-update.js.map