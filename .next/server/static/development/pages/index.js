module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Row.js":
/*!***************************!*\
  !*** ./components/Row.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Row; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/tema/future/components/Row.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function Row({
  human,
  onClickRow
}) {
  const styles = {
    root: {
      border: "1px solid grey",
      width: "20%"
    }
  };

  const handleClick = event => {
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

/***/ }),

/***/ "./components/add.js":
/*!***************************!*\
  !*** ./components/add.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Add; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/tema/future/components/add.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function Add({
  addNewItem
}) {
  const {
    0: addItem,
    1: setAddItem
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: id,
    1: setId
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const {
    0: firstName,
    1: setFirstName
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const {
    0: lastName,
    1: setLastName
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const {
    0: email,
    1: setEmail
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const {
    0: phone,
    1: setPhone
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();

  const handleClick = () => {
    setAddItem(true);
  };

  const handleChangeID = event => {
    setId(event.target.value);
  };

  const handleChangeFirstName = event => {
    setFirstName(event.target.value);
  };

  const handleChangeLastName = event => {
    setLastName(event.target.value);
  };

  const handleChangeEmail = event => {
    setEmail(event.target.value);
  };

  const handleChangePhone = event => {
    setPhone(event.target.value);
  };

  const handleClickItem = () => {
    addNewItem({
      id: id,
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      address: {
        streetAddress: "нет данных",
        city: "нет данных",
        state: "нет данных",
        zip: "нет данных"
      },
      description: "нет данных"
    });
  };

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx("button", {
    onClick: handleClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C"), addItem && __jsx("form", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "id", __jsx("input", {
    type: "text",
    name: "id",
    onChange: handleChangeID,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }), "firstName", __jsx("input", {
    type: "text",
    name: "firstName",
    onChange: handleChangeFirstName,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }), "lastName", __jsx("input", {
    type: "text",
    name: "lastName",
    onChange: handleChangeLastName,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }), "email", __jsx("input", {
    type: "text",
    name: "email",
    onChange: handleChangeEmail,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }), "phone", __jsx("input", {
    type: "text",
    name: "phone",
    onChange: handleChangePhone,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  })), id && firstName && lastName && email && phone && __jsx("button", {
    onClick: handleClickItem,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, " \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432 \u0442\u0430\u0431\u043B\u0438\u0446\u0443 "));
}

/***/ }),

/***/ "./components/description.js":
/*!***********************************!*\
  !*** ./components/description.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Description; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/tema/future/components/description.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function Description({
  item
}) {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, "\u0412\u044B\u0431\u0440\u0430\u043D \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C ", __jsx("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, item.lastName, " ", item.firstName), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }), "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435:", __jsx("textarea", {
    defaultValue: item.description,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), "\u0410\u0434\u0440\u0435\u0441 \u043F\u0440\u043E\u0436\u0438\u0432\u0430\u043D\u0438\u044F: ", __jsx("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, item.address.streetAddress), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), "\u0413\u043E\u0440\u043E\u0434: ", __jsx("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, item.address.city), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), "\u041F\u0440\u043E\u0432\u0438\u043D\u0446\u0438\u044F/\u0448\u0442\u0430\u0442: ", __jsx("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, item.address.state), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), "\u0418\u043D\u0434\u0435\u043A\u0441: ", __jsx("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, item.address.zip));
}

/***/ }),

/***/ "./components/search.js":
/*!******************************!*\
  !*** ./components/search.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Add; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/tema/future/components/search.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function Add({
  onSearch,
  onReset
}) {
  const {
    0: search,
    1: setSearch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();

  const handleChangeSearch = event => {
    setSearch(event.target.value);
  };

  const handleClick = () => {
    onSearch(search);
  };

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "\u041F\u043E\u0438\u0441\u043A", __jsx("input", {
    type: "text",
    name: "search",
    onChange: handleChangeSearch,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), __jsx("button", {
    onClick: handleClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "\u041F\u043E\u0438\u0441\u043A"), __jsx("button", {
    onClick: onReset,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C")));
}

/***/ }),

/***/ "./components/sortButton.js":
/*!**********************************!*\
  !*** ./components/sortButton.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return sortButton; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/tema/future/components/sortButton.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function sortButton({
  title,
  onSort,
  onReset
}) {
  const {
    0: sort,
    1: setSort
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("not");

  const handleClick = () => {
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

/***/ }),

/***/ "./components/table.js":
/*!*****************************!*\
  !*** ./components/table.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Table; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Row */ "./components/Row.js");
var _jsxFileName = "/Users/tema/future/components/table.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const styles = {
  pagesNumber: {
    listStyle: "none",
    display: "flex",
    color: "blue",
    userSelect: "none",
    cursor: "pointer"
  }
};
function Table({
  items,
  renderHeader,
  renderPageNumbers,
  onClickRow
}) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("table", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, renderHeader(), __jsx("tbody", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, items.map(item => __jsx(_Row__WEBPACK_IMPORTED_MODULE_1__["default"], {
    human: item,
    key: `${item.id}:${item.firstName}-${item.lastName}`,
    onClickRow: onClickRow,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  })))), __jsx("ul", {
    style: styles.pagesNumber,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, renderPageNumbers));
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/table */ "./components/table.js");
/* harmony import */ var _components_sortButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/sortButton */ "./components/sortButton.js");
/* harmony import */ var _components_description__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/description */ "./components/description.js");
/* harmony import */ var _components_add__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/add */ "./components/add.js");
/* harmony import */ var _components_search__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/search */ "./components/search.js");
var _jsxFileName = "/Users/tema/future/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const styles = {
  root: {
    margin: 0,
    width: "100%"
  },
  header: {
    border: "1px solid grey",
    width: "20%"
  }
};
function Index({
  humans
}) {
  const {
    0: items,
    1: setItems
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: currentPage,
    1: setCurrentPage
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1);
  const {
    0: itemsPerPage,
    1: setItemsPerPage
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(50);
  const {
    0: selectedItemID,
    1: setSelectedItemID
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const {
    0: selectedItemLastName,
    1: setSelectedItemLastName
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const {
    0: resItems,
    1: setResItems
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const headers = ["id", "firstName", "lastName", "email", "phone"];
  const minUrl = "http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}";
  const maxUrl = "http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}";
  const {
    0: url,
    1: setUrl
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setLoading(true);
    isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()(url).then(response => response.json()).then(data => setResItems(data));
  }, [url]);

  const handleClick = event => {
    setCurrentPage(Number(event.target.id));
    setSelectedItemID();
  };

  const handleClickRow = (id, lastName) => {
    setSelectedItemID(id);
    setSelectedItemLastName(lastName);
  };

  const handleClickSearch = search => {
    if (search.length > 0) {
      setItems(items.filter(item => {
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


  Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => {
    setItems(resItems);
    setLoading(false);
  }, [resItems]);

  const renderHeader = () => {
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
    }, headers.map(header => {
      return __jsx("th", {
        style: styles.header,
        key: header,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, __jsx(_components_sortButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
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

  const Urlm = () => {
    setUrl(minUrl);
  };

  const Urlb = () => {
    setUrl(maxUrl);
  };

  const currentItems = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => {
    let indexOfLastItem = currentPage * itemsPerPage;
    let indexOfFirstItem = indexOfLastItem - itemsPerPage;
    return items.slice(indexOfFirstItem, indexOfLastItem);
  }, [items, currentPage]);

  const addNewItem = newItem => {
    setResItems([...items, newItem]);
  };

  const handleReset = () => {
    setItems(resItems);
  };

  const handleSort = (name, reverse) => {
    const newItems = [...items];

    if (reverse) {
      newItems.sort((a, b) => {
        if (typeof a[name] === "string") {
          return a[name].localeCompare(b[name]);
        } else {
          return +a[name] - +b[name];
        }
      });
    } else {
      newItems.sort((a, b) => {
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

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(items.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = pageNumbers.map(number => {
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

  const renderDescription = () => {
    if (selectedItemID > 0) {
      return __jsx(_components_description__WEBPACK_IMPORTED_MODULE_4__["default"], {
        item: currentItems[currentItems.findIndex(item => item.id == selectedItemID && item.lastName == selectedItemLastName)],
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
  }, url ? loading ? __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: this
  }, "loading... ")) : __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: this
  }, __jsx(_components_add__WEBPACK_IMPORTED_MODULE_5__["default"], {
    addNewItem: addNewItem,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: this
  }), __jsx(_components_search__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onSearch: handleClickSearch,
    onReset: handleReset,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: this
  }), __jsx(_components_table__WEBPACK_IMPORTED_MODULE_2__["default"], {
    items: currentItems,
    renderHeader: renderHeader,
    renderPageNumbers: renderPageNumbers,
    onClickRow: handleClickRow,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: this
  }), renderDescription()) : __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    },
    __self: this
  }, __jsx("button", {
    onClick: Urlm,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
    },
    __self: this
  }, "\u041C\u0430\u043B\u044B\u0439 \u0441\u043F\u0438\u0441\u043E\u043A "), __jsx("button", {
    onClick: Urlb,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202
    },
    __self: this
  }, "\u0411\u043E\u043B\u044C\u0448\u043E\u0439 \u0441\u043F\u0438\u0441\u043E\u043A ")));
}

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/tema/future/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map