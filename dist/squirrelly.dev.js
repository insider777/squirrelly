(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Sqrl"] = factory();
	else
		root["Sqrl"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/express.js":
/*!************************!*\
  !*** ./src/express.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (filePath, options, callback) {
    fs.readFile(filePath, function (err, content) {
        if (err) {
            return callback(err)
        }
        var sqrlString = content.toString()
        var template = Sqrl.Precompile(sqrlString)
        var renderedFile = Sqrl.Render(template, options)
        return callback(null, renderedFile)
    })
});

/***/ }),

/***/ "./src/filters.js":
/*!************************!*\
  !*** ./src/filters.js ***!
  \************************/
/*! exports provided: default, defaultFilters, defaultFilterCache, autoEscaping, autoEscape, cacheDefaultFilters, parseFiltered */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultFilters", function() { return defaultFilters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultFilterCache", function() { return defaultFilterCache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "autoEscaping", function() { return autoEscaping; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "autoEscape", function() { return autoEscape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cacheDefaultFilters", function() { return cacheDefaultFilters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseFiltered", function() { return parseFiltered; });
/* harmony default export */ __webpack_exports__["default"] = ({
    d: function (str) {
        return str
    },
    e: function (str) {
        var escMap = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
            "/": "&#x2F;",
            "`": "&#x60;",
            "=": "&#x3D;"
        }
        //To deal with XSS. Based on Escape implementations of Mustache.JS and Marko, then customized.
        function replaceChar(s) {
            return escMap[s]
        }
        var newStr = String(str)
        if (/[&<>"'`=\/]/.test(newStr)) {
            return newStr.replace(/[&<>"'`=\/]/g, replaceChar)
        } else {
            return newStr
        }
    }
});
//Don't need a filter for unescape because that's just a flag telling Squirrelly not to escape

var defaultFilters = {
    /* All strings are automatically passed through the "d" filter (stands for default, but is shortened to save space)
and then each of the default filters the user
Has set to true. This opens up a realm of possibilities like autoEscape, etc.
List of shortened letters: d: default, e: escape, u: unescape. Escape and Unescape are also valid filter names*/
    //e: false, // Escape is turned off by default for performance
}

var defaultFilterCache = {
    start: "",
    end: ""
}

function autoEscaping (bool) {
    if (bool) {
        autoEscape = true
    } else {
        autoEscape = false
    }
}

var autoEscape = true;

function cacheDefaultFilters() {
    for (var key in defaultFilters) {
        if (!defaultFilters.hasOwnProperty(key) || !defaultFilters[key]) continue
        defaultFilterCache = {
            start: "",
            end: ""
        }
        defaultFilterCache.start += "Sqrl.F." + key + "("
        defaultFilterCache.end += ")"
    }
}
function parseFiltered(initialString, filterString) {
    var filtersArray;
    var safe;
    var filterStart = ""
    var filterEnd = ""
    if (filterString && filterString !== "") {
        filtersArray = filterString.split('|')
        for (var i = 0; i < filtersArray.length; i++) {
            filtersArray[i] = filtersArray[i].trim()
            if (filtersArray[i] === "") continue
            if (filtersArray[i] === "safe") {
                safe = true
                continue
            }
            filterStart = 'Sqrl.F.' + filtersArray[i] + '(' + filterStart
            filterEnd += ")"
        }
    }
    filterStart += defaultFilterCache.start
    filterEnd += defaultFilterCache.end
    if (!safe && autoEscape) {
        filterStart += "Sqrl.F.e("
        filterEnd += ")"
    }

    return filterStart + initialString + filterEnd;
}

/***/ }),

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var helpers = { // For helpers. None included to make it more lightweight

    Date: function (args, content, blocks, options) {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!
        var yyyy = today.getFullYear();
        if (dd < 10) {
            dd = '0' + dd
        }
        if (mm < 10) {
            mm = '0' + mm
        }
        today = mm + '/' + dd + '/' + yyyy;
        return today
    }
}


if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (helpers);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: __express, H, Precompile, defineFilter, defineHelper, Render, F, defaultFilters, autoEscape, autoEscaping */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _express_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./express.js */ "./src/express.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__express", function() { return _express_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers.js */ "./src/helpers.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "H", function() { return _helpers_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _precompile_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./precompile.js */ "./src/precompile.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Precompile", function() { return _precompile_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils.js */ "./src/utils.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defineFilter", function() { return _utils_js__WEBPACK_IMPORTED_MODULE_3__["defineFilter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defineHelper", function() { return _utils_js__WEBPACK_IMPORTED_MODULE_3__["defineHelper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Render", function() { return _utils_js__WEBPACK_IMPORTED_MODULE_3__["Render"]; });

/* harmony import */ var _filters_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./filters.js */ "./src/filters.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "F", function() { return _filters_js__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultFilters", function() { return _filters_js__WEBPACK_IMPORTED_MODULE_4__["defaultFilters"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "autoEscape", function() { return _filters_js__WEBPACK_IMPORTED_MODULE_4__["autoEscape"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "autoEscaping", function() { return _filters_js__WEBPACK_IMPORTED_MODULE_4__["autoEscaping"]; });








/***/ }),

/***/ "./src/nativeHelpers.js":
/*!******************************!*\
  !*** ./src/nativeHelpers.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var nativeHelpers = {
    if: {
        helperStart: function (param) { //helperStart is called with (params, id) but id isn't needed
            return "if(" + param + "){"
        },
        helperEnd: function () {
            return "}"
        },
        blocks: {
            else: function () { //called with (id) but neither param is needed
                return "}else{"
            }
        }
    },
    each: {
        helperStart: function (param, id) { //helperStart is called with (params, id) but id isn't needed
            return "for(var i=0;i<" + param + ".length; i++){tmpltRes+=(function(hvals){var tmpltRes='';var hvals" + id + "=hvals;"
        },
        helperEnd: function (param) {
            return "return tmpltRes})({this:" + param + "[i],index:i})};"
        }
    },
    foreach: {
        helperStart: function (param, id) {
            return "for(var key in " + param + "){if(!" + param + ".hasOwnProperty(key)) continue;tmpltRes+=(function(hvals){var tmpltRes='';var hvals" + id + "=hvals;"
        },
        helperEnd: function (param) {
            return "return tmpltRes})({this:" + param + "[key], key: key})};"
        }
    },
    log: {
        selfClosing: function (param) {
            return "console.log(" + param + ");"
        }
    }
}
//We don't need to export nativeHelpers for the runtime script
if (false) {}
/* harmony default export */ __webpack_exports__["default"] = (nativeHelpers);

/***/ }),

/***/ "./src/precompile.js":
/*!***************************!*\
  !*** ./src/precompile.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _regexps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regexps.js */ "./src/regexps.js");
/* harmony import */ var _nativeHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nativeHelpers.js */ "./src/nativeHelpers.js");
/* harmony import */ var _filters_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters.js */ "./src/filters.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils.js */ "./src/utils.js");





function Precompile(str) {
    var lastIndex = 0
    var funcStr = ""
    var helperArray = [];
    var helperNumber = -1;
    var helperAutoId = 0
    var helperContainsBlocks = {};
    var m;
    Object(_filters_js__WEBPACK_IMPORTED_MODULE_2__["cacheDefaultFilters"])()
    while ((m = _regexps_js__WEBPACK_IMPORTED_MODULE_0__["default"].exec(str)) !== null) {
        // This is necessary to avoid infinite loops with zero-width matches
        if (m.index === _regexps_js__WEBPACK_IMPORTED_MODULE_0__["default"].lastIndex) {
            _regexps_js__WEBPACK_IMPORTED_MODULE_0__["default"].lastIndex++;
        }
        if (funcStr === "") {
            funcStr += "var tmpltRes=\'" + str.slice(lastIndex, m.index).replace(/'/g, "\\'") + '\';'
        } else {
            if (lastIndex !== m.index) {
                funcStr += 'tmpltRes+=\'' + str.slice(lastIndex, m.index).replace(/'/g, "\\'") + '\';'
            }
        }
        lastIndex = m[0].length + m.index
        if (m[1]) {
            //It's a global ref. p4 = filters
            funcStr += 'tmpltRes+=' + globalRef(m[1], m[4]) + ';'
        } else if (m[3]) {
            //It's a helper ref. p2 = id (with ':' after it) or path, p4 = filters
            funcStr += 'tmpltRes+=' + helperRef(m[3], m[2], m[4]) + ';'
        } else if (m[5]) {
            //It's a helper oTag. p6 parameters, p7 id
            var id = m[7]
            if (id === "" || id === null) {
                id = helperAutoId;
                helperAutoId++;
            }
            var native = _nativeHelpers_js__WEBPACK_IMPORTED_MODULE_1__["default"].hasOwnProperty(m[5]) //true or false
            helperNumber += 1;
            var params = m[6] || ""
            params = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["replaceParamHelpers"])(params)
            if (!native) {
                params = '[' + params + ']'
            }
            var helperTag = {
                name: m[5],
                id: id,
                params: params,
                native: native
            }
            helperArray[helperNumber] = helperTag;
            if (native) {
                var nativeObj = _nativeHelpers_js__WEBPACK_IMPORTED_MODULE_1__["default"][m[5]]
                funcStr += nativeObj.helperStart(params, id)
            } else {
                funcStr += 'tmpltRes+=Sqrl.H.' + m[5] + '(' + params + ',function(hvals){var hvals' + id + '=hvals;'
            }
        } else if (m[8]) {
            //It's a helper cTag.
            var mostRecentHelper = helperArray[helperNumber];
            if (mostRecentHelper && mostRecentHelper.name === m[8]) {
                helperNumber -= 1;
                if (mostRecentHelper.native === true) {
                    funcStr += _nativeHelpers_js__WEBPACK_IMPORTED_MODULE_1__["default"][mostRecentHelper.name].helperEnd(mostRecentHelper.params, mostRecentHelper.id)
                } else {
                    if (helperContainsBlocks[mostRecentHelper.id]) {
                        funcStr += "return tmpltRes}});"
                    } else {
                        funcStr += "return tmpltRes});"
                    }
                }
            } else {
                console.error("Sorry, looks like your opening and closing tags don't match")
            }
        } else if (m[9]) {
            //It's a helper block.
            var parent = helperArray[helperNumber]
            if (parent.native) {
                var nativeH = _nativeHelpers_js__WEBPACK_IMPORTED_MODULE_1__["default"][parent.name]
                if (nativeH.blocks && nativeH.blocks[m[9]]) {
                    funcStr += nativeH.blocks[m[9]](parent.id)
                } else {
                    console.warn("Native helper '%s' doesn't accept that block.", parent.name)
                }
            } else {
                if (!helperContainsBlocks[parent.id]) {
                    funcStr += "return tmpltRes}, {" + m[9] + ":function(hvals){var hvals" + parent.id + "=hvals;var tmpltRes=\'\';"
                    helperContainsBlocks[parent.id] = true
                } else {
                    funcStr += "return tmpltRes}," + m[9] + ":function(hvals){var hvals" + parent.id + "=hvals;var tmpltRes=\'\';"
                }
            }
        } else if (m[10]) {
            //It's a self-closing helper
            var params = m[11] || ""
            params = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["replaceParamHelpers"])(params)

            if (_nativeHelpers_js__WEBPACK_IMPORTED_MODULE_1__["default"].hasOwnProperty(m[10]) && _nativeHelpers_js__WEBPACK_IMPORTED_MODULE_1__["default"][m[10]].hasOwnProperty('selfClosing')) {
                funcStr += _nativeHelpers_js__WEBPACK_IMPORTED_MODULE_1__["default"][m[10]].selfClosing(params)
            }
        } else {
            console.error("Err: Code 000")
        }

        function globalRef(refName, filters) {
            return Object(_filters_js__WEBPACK_IMPORTED_MODULE_2__["parseFiltered"])('options.' + refName, filters)
        }

        function helperRef(name, id, filters) {
            var prefix;
            if (typeof id !== 'undefined') {
                if (/(?:\.\.\/)+/g.test(id)) {
                    prefix = helperArray[helperNumber - (id.length / 3) - 1].id
                } else {
                    prefix = id.slice(0, -1)
                }
                return Object(_filters_js__WEBPACK_IMPORTED_MODULE_2__["parseFiltered"])("hvals" + prefix + "." + name, filters)
            } //Implied 'else'
            return Object(_filters_js__WEBPACK_IMPORTED_MODULE_2__["parseFiltered"])("hvals." + name, filters)
        }



    }
    if (str.length > _regexps_js__WEBPACK_IMPORTED_MODULE_0__["default"].lastIndex) {
        if (funcStr === "") {
            funcStr += "var tmpltRes=\'" + str.slice(lastIndex, str.length).replace(/'/g, "\\'") + '\';'
        } else if (lastIndex !== str.length) {
            funcStr += "tmpltRes+=\'" + str.slice(lastIndex, str.length).replace(/'/g, "\\'") + '\';'
        }
    }
    funcStr += 'return tmpltRes'
    var func = new Function('options', 'Sqrl', funcStr.replace(/\n/g, '\\n').replace(/\r/g, '\\r'))
    return func
}

if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (Precompile);

/***/ }),

/***/ "./src/regexps.js":
/*!************************!*\
  !*** ./src/regexps.js ***!
  \************************/
/*! exports provided: default, paramHelperRefRegExp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "paramHelperRefRegExp", function() { return paramHelperRefRegExp; });
/* harmony default export */ __webpack_exports__["default"] = (/{{ *?(?:(?:(?:(?:([a-zA-Z_$][\w]* *?(?:[^\s\w\($][^\n]*)*?))|(?:@(?:([\w$]+:|(?:\.\.\/)+))? *(.+?) *))(?: *?(\| *?[\w$]+? *?)+?)?)|(?:([a-zA-Z_$][\w]*) *?\(([^\n]*)\) *?([\w]*))|(?:\/ *?([a-zA-Z_$][\w]*))|(?:# *?([a-zA-Z_$][\w]*))|(?:([a-zA-Z_$][\w]*) *?\(([^\n]*)\) *?\/)) *?}}/g);
var paramHelperRefRegExp = /"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|[\\]@(?:[\w$]*:)?[\w$]+|@(?:([\w$]*):)?([\w$]+)/g


//The default RegExp broken down:

//Total RegEx:
/* START REGEXP
{{ *? //the beginning
(?: //or for each possible tag
(?: //if a global or helper ref
(?: //choosing global or helper ref
(?:([a-zA-Z_$][\w]* *?(?:[^\s\w\($][^\n]*)*?)) //global reference
|
(?:@(?:([\w$]+:|(?:\.\.\/)+))? *(.+?) *) //helper reference
)
(?: *?(\| *?[\w$]+? *?)+?)? //filter
) //end if a global or helper ref
| //now if a helper oTag
(?:([a-zA-Z_$][\w]*) *?\(([^\n]*)\) *?([\w]*))
| //now if a helper cTag
(?:\/ *?([a-zA-Z_$][\w]*))
| //now if a helper block
(?:# *?([a-zA-Z_$][\w]*))
| //now for a self closing tag
(?:([a-zA-Z_$][\w]*) *?\(([^\n]*)\) *?\/)
) //end or for each possible tag
 *?}}		


END REGEXP*/
/*
p1: global ref main
p2: helper ref id (with ':' after it) or path
p3: helper ref main
p4: filters
p5: helper name
p6: helper parameters
p7: helper id
p8: helper cTag name
p9: helper block name
p10: self closing helper name
p11: self closing helper params
Here's the RegExp I use to turn the expanded version between START REGEXP and END REGEXP to a working one: I replace [\f\n\r\t\v\u00a0\u1680\u2000\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]| \/\/[\w ']+\n with nothing.
*/

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: defineFilter, defineHelper, defineNativeHelpers, Render, replaceParamHelpers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defineFilter", function() { return defineFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defineHelper", function() { return defineHelper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defineNativeHelpers", function() { return defineNativeHelpers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Render", function() { return Render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replaceParamHelpers", function() { return replaceParamHelpers; });
/* harmony import */ var _filters_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filters.js */ "./src/filters.js");
/* harmony import */ var _precompile_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./precompile.js */ "./src/precompile.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers.js */ "./src/helpers.js");
/* harmony import */ var _nativeHelpers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nativeHelpers.js */ "./src/nativeHelpers.js");
/* harmony import */ var _regexps_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./regexps.js */ "./src/regexps.js");







function defineFilter(name, callback) {
    _filters_js__WEBPACK_IMPORTED_MODULE_0__["default"][name] = callback
}

function defineHelper(name, callback) {
    _helpers_js__WEBPACK_IMPORTED_MODULE_3__["default"][name] = callback
}

function defineNativeHelpers(name, obj) {
    _nativeHelpers_js__WEBPACK_IMPORTED_MODULE_4__["default"][name] = obj
}
/*export function defineLayout(name, callback) {
    Sqrl.Helpers[name] = callback
    Sqrl.H = Sqrl.Helpers
}*/

function Render(template, options) {
    if (typeof template === "function") {
        return template(options, _index_js__WEBPACK_IMPORTED_MODULE_2__)
    } else if (typeof template === "string") {
        var templateFunc = Object(_precompile_js__WEBPACK_IMPORTED_MODULE_1__["default"])(template)
        return templateFunc(options, _index_js__WEBPACK_IMPORTED_MODULE_2__)
    }
}

function replaceParamHelpers(params) {
    params = params.replace(_regexps_js__WEBPACK_IMPORTED_MODULE_5__["paramHelperRefRegExp"], function (m, p1, p2) { // p1 scope, p2 string
        if (typeof p2 === 'undefined') {
            return m
        } else {
            if (typeof p1 === 'undefined') {
                p1 = ''
            }
            return 'hvals' + p1 + '.' + p2
        }
    })
    return params
} 

/***/ })

/******/ });
});
//# sourceMappingURL=squirrelly.dev.js.map