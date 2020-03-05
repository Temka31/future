webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/sortButton.js":
/*!**********************************!*\
  !*** ./components/sortButton.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return sortButton; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/tema/future/components/sortButton.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function sortButton(_ref) {
  var title = _ref.title,
      onSort = _ref.onSort,
      onReset = _ref.onReset;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("not"),
      sort = _useState[0],
      setSort = _useState[1];

  var handleClick = function handleClick() {
    switch (sort) {
      case "asc":
        setSort("desc");
        onSort(title, false);
        break;

      case "desc":
        setSort("not");
        onReset();
        break;

      case "not":
        setSort("asc");
        onSort(title, true);
        break;
    }
  };

  return __jsx("button", {
    onClick: handleClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, title, ":", String(sort));
}

/***/ })

})
//# sourceMappingURL=index.js.7f1dfacdcb1d3abb0ad6.hot-update.js.map