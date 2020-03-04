webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/table */ "./components/table.js");
/* harmony import */ var _components_sortButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/sortButton */ "./components/sortButton.js");
/* harmony import */ var _components_description__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/description */ "./components/description.js");
/* harmony import */ var _components_add__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/add */ "./components/add.js");
/* harmony import */ var _components_search__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/search */ "./components/search.js");

var _jsxFileName = "/Users/tema/future/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







var styles = {
  root: {
    margin: 0,
    width: "100%"
  },
  header: {
    border: "1px solid grey",
    width: "20%"
  }
};
function Index(_ref) {
  var humans = _ref.humans;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      items = _useState[0],
      setItems = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(1),
      currentPage = _useState2[0],
      setCurrentPage = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(50),
      itemsPerPage = _useState3[0],
      setItemsPerPage = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      selectedItemID = _useState4[0],
      setSelectedItemID = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      selectedItemLastName = _useState5[0],
      setSelectedItemLastName = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      loading = _useState6[0],
      setLoading = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      resItems = _useState7[0],
      setResItems = _useState7[1];

  var headers = ["id", "firstName", "lastName", "email", "phone"];
  var minUrl = "http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}";
  var maxUrl = "http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}";

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      url = _useState8[0],
      setUrl = _useState8[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setLoading(true);
    isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()(url).then(function (response) {
      return response.json();
    }).then(function (data) {
      return setResItems(data);
    });
  }, []);

  var handleClick = function handleClick(event) {
    setCurrentPage(Number(event.target.id));
    setSelectedItemID();
  };

  var handleClickRow = function handleClickRow(id, lastName) {
    setSelectedItemID(id);
    setSelectedItemLastName(lastName);
  };

  var handleClickSearch = function handleClickSearch(search) {
    if (search.length > 0) {
      setItems(items.filter(function (item) {
        return item["firstName"].toLowerCase().includes(search.toLowerCase()) || item["lastName"].toLowerCase().includes(search.toLowerCase()) || item["email"].toLowerCase().includes(search.toLowerCase()) || item["phone"].toLowerCase().includes(search.toLowerCase());
      }));
    }
  }; // const headers = useMemo(() => {
  //   if (items.length > 0) {
  //     return Object.keys(items[0]);
  //   } else {
  //     return [];
  //   }
  // }, [items]);


  Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    setItems(resItems);
    setLoading(false);
  }, [resItems]);

  var renderHeader = function renderHeader() {
    return __jsx("thead", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, __jsx("tr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }, headers.map(function (header) {
      return __jsx("th", {
        style: styles.header,
        key: header,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, __jsx(_components_sortButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
        title: header,
        onReset: handleReset,
        onSort: handleSort,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }));
    })));
  };

  var Urlm = function Urlm() {
    setUrl(minUrl);
  };

  var Urlb = function Urlb() {
    setUrl(maxUrl);
  };

  var currentItems = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    var indexOfLastItem = currentPage * itemsPerPage;
    var indexOfFirstItem = indexOfLastItem - itemsPerPage;
    return items.slice(indexOfFirstItem, indexOfLastItem);
  }, [items, currentPage]);

  var addNewItem = function addNewItem(newItem) {
    setResItems([].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(items), [newItem]));
  };

  var handleReset = function handleReset() {
    setItems(resItems);
  };

  var handleSort = function handleSort(name, reverse) {
    var newItems = Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(items);

    if (reverse) {
      newItems.sort(function (a, b) {
        if (typeof a[name] === "string") {
          return a[name].localeCompare(b[name]);
        } else {
          return +a[name] - +b[name];
        }
      });
    } else {
      newItems.sort(function (a, b) {
        if (typeof a[name] === "string") {
          return b[name].localeCompare(a[name]);
        } else {
          return +b[name] - +a[name];
        }
      });
    }

    setItems(newItems);
    setSelectedItemID();
  };

  var pageNumbers = [];

  for (var i = 1; i <= Math.ceil(items.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  var renderPageNumbers = pageNumbers.map(function (number) {
    return __jsx("li", {
      key: number,
      id: number,
      onClick: handleClick,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157
      },
      __self: this
    }, number);
  });

  var renderDescription = function renderDescription() {
    if (selectedItemID > 0) {
      return __jsx(_components_description__WEBPACK_IMPORTED_MODULE_5__["default"], {
        item: currentItems[currentItems.findIndex(function (item) {
          return item.id == selectedItemID && item.lastName == selectedItemLastName;
        })],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        },
        __self: this
      });
    }
  };

  return __jsx("div", {
    style: styles.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  }, loading ? __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: this
  }, "loading... "), __jsx("button", {
    onClick: Urlm,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: this
  }, "\u041C\u0430\u043B\u044B\u0439 \u0441\u043F\u0438\u0441\u043E\u043A "), __jsx("button", {
    onClick: Urlb,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: this
  }, "\u0411\u043E\u043B\u044C\u0448\u043E\u0439 \u0441\u043F\u0438\u0441\u043E\u043A ")) : __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_components_add__WEBPACK_IMPORTED_MODULE_6__["default"], {
    addNewItem: addNewItem,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: this
  }), __jsx(_components_search__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onSearch: handleClickSearch,
    onReset: handleReset,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: this
  }), __jsx(_components_table__WEBPACK_IMPORTED_MODULE_3__["default"], {
    items: currentItems,
    renderHeader: renderHeader,
    renderPageNumbers: renderPageNumbers,
    onClickRow: handleClickRow,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: this
  }), renderDescription()));
}

/***/ })

})
//# sourceMappingURL=index.js.2958bd5cf7a444be8bf4.hot-update.js.map