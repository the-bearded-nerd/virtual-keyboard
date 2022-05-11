/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  padding: 0;\\n  box-sizing: border-box; }\\n\\nhtml {\\n  color: #2d3142;\\n  font-size: 16px; }\\n\\n.keyboard {\\n  width: fit-content;\\n  display: flex;\\n  flex-direction: column;\\n  border: 3px solid #2d3142;\\n  background-color: #cfd2cd;\\n  border-radius: 5px;\\n  row-gap: 6px;\\n  padding: 5px; }\\n\\n.row {\\n  display: flex;\\n  column-gap: 6px; }\\n\\n.key {\\n  display: flex;\\n  width: 40px;\\n  height: 40px;\\n  background-color: #fbfbf2;\\n  border-radius: 3px;\\n  justify-content: center;\\n  align-items: center;\\n  transition: border-radius 0.2s, background-color 0.2s;\\n  cursor: pointer; }\\n  .key.Backspace, .key.CapsLock, .key.ShiftLeft {\\n    width: 100px;\\n    background-color: #fbfbf2;\\n    font-weight: bold; }\\n  .key.Tab {\\n    width: 50px;\\n    background-color: #fbfbf2;\\n    font-weight: bold; }\\n  .key.Delete {\\n    width: 44px;\\n    background-color: #fbfbf2;\\n    font-weight: bold; }\\n  .key.Enter, .key.ShiftRight {\\n    width: 86px;\\n    background-color: #fbfbf2;\\n    font-weight: bold; }\\n  .key.Space {\\n    width: 330px; }\\n  .key.ControlLeft, .key.ControlRight, .key.MetaLeft, .key.AltLeft, .key.AltRight, .key.ArrowUp, .key.ArrowLeft, .key.ArrowDown, .key.ArrowRight {\\n    background-color: #fbfbf2;\\n    font-weight: bold; }\\n  .key:hover {\\n    background-color: #e5e6e4; }\\n  .key.active {\\n    background-color: #a6a2a2;\\n    border-radius: 7px; }\\n\\n.hidden {\\n  display: none; }\\n\\n.container {\\n  width: fit-content;\\n  margin: 0 auto;\\n  padding-top: 30px; }\\n\\n.textarea {\\n  width: 100%;\\n  height: 250px;\\n  font-size: 18px; }\\n\\nbody {\\n  height: 100vh;\\n  font-family: \\\"Trebuchet MS\\\", \\\"Helvetica\\\", sans-serif; }\\n\\np {\\n  text-align: center;\\n  font-size: 24px;\\n  color: black; }\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://virtual-keyboard/./src/styles/main.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\nif (true) {\n  if (!_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals || module.hot.invalidate) {\n    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {\n  if (!a && b || a && !b) {\n    return false;\n  }\n\n  var p;\n\n  for (p in a) {\n    if (isNamedExport && p === \"default\") {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n\n    if (a[p] !== b[p]) {\n      return false;\n    }\n  }\n\n  for (p in b) {\n    if (isNamedExport && p === \"default\") {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n\n    if (!a[p]) {\n      return false;\n    }\n  }\n\n  return true;\n};\n    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals;\n    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals;\n\n    module.hot.accept(\n      /*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss\",\n      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss\");\n(function () {\n        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals, isNamedExport)) {\n                module.hot.invalidate();\n\n                return;\n              }\n\n              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals;\n\n              update(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\n      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }\n    )\n  }\n\n  module.hot.dispose(function() {\n    update();\n  });\n}\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://virtual-keyboard/./src/styles/main.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.scss */ \"./src/styles/main.scss\");\n/* harmony import */ var _keyboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keyboard */ \"./src/keyboard.js\");\n\n\n\n\n//# sourceURL=webpack://virtual-keyboard/./src/index.js?");

/***/ }),

/***/ "./src/keyboard-layout.js":
/*!********************************!*\
  !*** ./src/keyboard-layout.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst ROWS = [];\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ ROWS });\n\nROWS[0] = [\n  {\n    code: 'Backquote',\n    rus: {\n      lower: 'ё',\n      upper: 'Ё',\n      caps: 'Ё',\n      capsShift: 'ё',\n    },\n    eng: {\n      lower: '`',\n      upper: '~',\n      caps: '`',\n      capsShift: '~',\n    },\n  },\n  {\n    code: 'Digit1',\n    rus: {\n      lower: '1',\n      upper: '!',\n      caps: '1',\n      capsShift: '!',\n    },\n    eng: {\n      lower: '1',\n      upper: '!',\n      caps: '1',\n      capsShift: '!',\n    },\n  },\n  {\n    code: 'Digit2',\n    rus: {\n      lower: '2',\n      upper: '\"',\n      caps: '2',\n      capsShift: '\"',\n    },\n    eng: {\n      lower: '2',\n      upper: '@',\n      caps: '2',\n      capsShift: '@',\n    },\n  },\n  {\n    code: 'Digit3',\n    rus: {\n      lower: '3',\n      upper: '№',\n      caps: '3',\n      capsShift: '№',\n    },\n    eng: {\n      lower: '3',\n      upper: '#',\n      caps: '3',\n      capsShift: '#',\n    },\n  },\n  {\n    code: 'Digit4',\n    rus: {\n      lower: '4',\n      upper: ';',\n      caps: '4',\n      capsShift: ';',\n    },\n    eng: {\n      lower: '4',\n      upper: '$',\n      caps: '4',\n      capsShift: '$',\n    },\n  },\n  {\n    code: 'Digit5',\n    rus: {\n      lower: '5',\n      upper: '%',\n      caps: '5',\n      capsShift: '%',\n    },\n    eng: {\n      lower: '5',\n      upper: '%',\n      caps: '5',\n      capsShift: '%',\n    },\n  },\n  {\n    code: 'Digit6',\n    rus: {\n      lower: '6',\n      upper: ':',\n      caps: '6',\n      capsShift: ':',\n    },\n    eng: {\n      lower: '6',\n      upper: '^',\n      caps: '6',\n      capsShift: '^',\n    },\n  },\n  {\n    code: 'Digit7',\n    rus: {\n      lower: '7',\n      upper: '?',\n      caps: '7',\n      capsShift: '?',\n    },\n    eng: {\n      lower: '7',\n      upper: '&',\n      caps: '7',\n      capsShift: '&',\n    },\n  },\n  {\n    code: 'Digit8',\n    rus: {\n      lower: '8',\n      upper: '*',\n      caps: '8',\n      capsShift: '*',\n    },\n    eng: {\n      lower: '8',\n      upper: '*',\n      caps: '8',\n      capsShift: '*',\n    },\n  },\n  {\n    code: 'Digit9',\n    rus: {\n      lower: '9',\n      upper: '(',\n      caps: '9',\n      capsShift: '(',\n    },\n    eng: {\n      lower: '9',\n      upper: '(',\n      caps: '9',\n      capsShift: '(',\n    },\n  },\n  {\n    code: 'Digit0',\n    rus: {\n      lower: '0',\n      upper: ')',\n      caps: '0',\n      capsShift: ')',\n    },\n    eng: {\n      lower: '0',\n      upper: ')',\n      caps: '0',\n      capsShift: ')',\n    },\n  },\n  {\n    code: 'Minus',\n    rus: {\n      lower: '-',\n      upper: '_',\n      caps: '-',\n      capsShift: '_',\n    },\n    eng: {\n      lower: '-',\n      upper: '_',\n      caps: '-',\n      capsShift: '_',\n    },\n  },\n  {\n    code: 'Equal',\n    rus: {\n      lower: '=',\n      upper: '+',\n      caps: '=',\n      capsShift: '+',\n    },\n    eng: {\n      lower: '=',\n      upper: '+',\n      caps: '=',\n      capsShift: '+',\n    },\n  },\n  {\n    code: 'Backspace',\n    rus: {\n      lower: 'Backspace',\n      upper: 'Backspace',\n      caps: 'Backspace',\n      capsShift: 'Backspace',\n    },\n    eng: {\n      lower: 'Backspace',\n      upper: 'Backspace',\n      caps: 'Backspace',\n      capsShift: 'Backspace',\n    },\n  },\n];\nROWS[1] = [\n  {\n    code: 'Tab',\n    rus: {\n      lower: 'Tab',\n      upper: 'Tab',\n      caps: 'Tab',\n      capsShift: 'Tab',\n    },\n    eng: {\n      lower: 'Tab',\n      upper: 'Tab',\n      caps: 'Tab',\n      capsShift: 'Tab',\n    },\n  },\n  {\n    code: 'KeyQ',\n    rus: {\n      lower: 'й',\n      upper: 'Й',\n      caps: 'Й',\n      capsShift: 'й',\n    },\n    eng: {\n      lower: 'q',\n      upper: 'Q',\n      caps: 'Q',\n      capsShift: 'q',\n    },\n  },\n  {\n    code: 'KeyW',\n    rus: {\n      lower: 'ц',\n      upper: 'Ц',\n      caps: 'Ц',\n      capsShift: 'ц',\n    },\n    eng: {\n      lower: 'w',\n      upper: 'W',\n      caps: 'W',\n      capsShift: 'w',\n    },\n  },\n  {\n    code: 'KeyE',\n    rus: {\n      lower: 'у',\n      upper: 'У',\n      caps: 'У',\n      capsShift: 'у',\n    },\n    eng: {\n      lower: 'e',\n      upper: 'E',\n      caps: 'E',\n      capsShift: 'e',\n    },\n  },\n  {\n    code: 'KeyR',\n    rus: {\n      lower: 'к',\n      upper: 'К',\n      caps: 'К',\n      capsShift: 'к',\n    },\n    eng: {\n      lower: 'r',\n      upper: 'R',\n      caps: 'R',\n      capsShift: 'r',\n    },\n  },\n  {\n    code: 'KeyT',\n    rus: {\n      lower: 'е',\n      upper: 'Е',\n      caps: 'Е',\n      capsShift: 'е',\n    },\n    eng: {\n      lower: 't',\n      upper: 'T',\n      caps: 'T',\n      capsShift: 't',\n    },\n  },\n  {\n    code: 'KeyY',\n    rus: {\n      lower: 'н',\n      upper: 'Н',\n      caps: 'Н',\n      capsShift: 'н',\n    },\n    eng: {\n      lower: 'y',\n      upper: 'Y',\n      caps: 'Y',\n      capsShift: 'y',\n    },\n  },\n  {\n    code: 'KeyU',\n    rus: {\n      lower: 'г',\n      upper: 'Г',\n      caps: 'Г',\n      capsShift: 'г',\n    },\n    eng: {\n      lower: 'u',\n      upper: 'U',\n      caps: 'U',\n      capsShift: 'u',\n    },\n  },\n  {\n    code: 'KeyI',\n    rus: {\n      lower: 'ш',\n      upper: 'Ш',\n      caps: 'Ш',\n      capsShift: 'ш',\n    },\n    eng: {\n      lower: 'i',\n      upper: 'I',\n      caps: 'I',\n      capsShift: 'i',\n    },\n  },\n  {\n    code: 'KeyO',\n    rus: {\n      lower: 'щ',\n      upper: 'Щ',\n      caps: 'Щ',\n      capsShift: 'щ',\n    },\n    eng: {\n      lower: 'o',\n      upper: 'O',\n      caps: 'O',\n      capsShift: 'o',\n    },\n  },\n  {\n    code: 'KeyP',\n    rus: {\n      lower: 'з',\n      upper: 'З',\n      caps: 'З',\n      capsShift: 'з',\n    },\n    eng: {\n      lower: 'p',\n      upper: 'P',\n      caps: 'P',\n      capsShift: 'p',\n    },\n  },\n  {\n    code: 'BracketLeft',\n    rus: {\n      lower: 'х',\n      upper: 'Х',\n      caps: 'Х',\n      capsShift: 'х',\n    },\n    eng: {\n      lower: '[',\n      upper: '{',\n      caps: '[',\n      capsShift: '{',\n    },\n  },\n  {\n    code: 'BracketRight',\n    rus: {\n      lower: 'ъ',\n      upper: 'Ъ',\n      caps: 'Ъ',\n      capsShift: 'ъ',\n    },\n    eng: {\n      lower: ']',\n      upper: '}',\n      caps: ']',\n      capsShift: '}',\n    },\n  },\n  {\n    code: 'Backslash',\n    rus: {\n      lower: '\\\\',\n      upper: '/',\n      caps: '\\\\',\n      capsShift: '/',\n    },\n    eng: {\n      lower: '\\\\',\n      upper: '|',\n      caps: '\\\\',\n      capsShift: '|',\n    },\n  },\n  {\n    code: 'Delete',\n    rus: {\n      lower: 'Del',\n      upper: 'Del',\n      caps: 'Del',\n      capsShift: 'Del',\n    },\n    eng: {\n      lower: 'Del',\n      upper: 'Del',\n      caps: 'Del',\n      capsShift: 'Del',\n    },\n  },\n];\nROWS[2] = [\n  {\n    code: 'CapsLock',\n    rus: {\n      lower: 'CapsLock',\n      upper: 'CapsLock',\n      caps: 'CapsLock',\n      capsShift: 'CapsLock',\n    },\n    eng: {\n      lower: 'CapsLock',\n      upper: 'CapsLock',\n      caps: 'CapsLock',\n      capsShift: 'CapsLock',\n    },\n  },\n  {\n    code: 'KeyA',\n    rus: {\n      lower: 'ф',\n      upper: 'Ф',\n      caps: 'Ф',\n      capsShift: 'ф',\n    },\n    eng: {\n      lower: 'a',\n      upper: 'A',\n      caps: 'A',\n      capsShift: 'a',\n    },\n  },\n  {\n    code: 'KeyS',\n    rus: {\n      lower: 'ы',\n      upper: 'Ы',\n      caps: 'Ы',\n      capsShift: 'ы',\n    },\n    eng: {\n      lower: 's',\n      upper: 'S',\n      caps: 'S',\n      capsShift: 's',\n    },\n  },\n  {\n    code: 'KeyD',\n    rus: {\n      lower: 'в',\n      upper: 'В',\n      caps: 'В',\n      capsShift: 'в',\n    },\n    eng: {\n      lower: 'd',\n      upper: 'D',\n      caps: 'D',\n      capsShift: 'd',\n    },\n  },\n  {\n    code: 'KeyF',\n    rus: {\n      lower: 'а',\n      upper: 'А',\n      caps: 'А',\n      capsShift: 'а',\n    },\n    eng: {\n      lower: 'f',\n      upper: 'F',\n      caps: 'F',\n      capsShift: 'f',\n    },\n  },\n  {\n    code: 'KeyG',\n    rus: {\n      lower: 'п',\n      upper: 'П',\n      caps: 'П',\n      capsShift: 'п',\n    },\n    eng: {\n      lower: 'g',\n      upper: 'G',\n      caps: 'G',\n      capsShift: 'g',\n    },\n  },\n  {\n    code: 'KeyH',\n    rus: {\n      lower: 'р',\n      upper: 'Р',\n      caps: 'Р',\n      capsShift: 'р',\n    },\n    eng: {\n      lower: 'h',\n      upper: 'H',\n      caps: 'H',\n      capsShift: 'h',\n    },\n  },\n  {\n    code: 'KeyJ',\n    rus: {\n      lower: 'о',\n      upper: 'О',\n      caps: 'О',\n      capsShift: 'о',\n    },\n    eng: {\n      lower: 'j',\n      upper: 'J',\n      caps: 'J',\n      capsShift: 'j',\n    },\n  },\n  {\n    code: 'KeyK',\n    rus: {\n      lower: 'л',\n      upper: 'Л',\n      caps: 'Л',\n      capsShift: 'л',\n    },\n    eng: {\n      lower: 'k',\n      upper: 'K',\n      caps: 'K',\n      capsShift: 'k',\n    },\n  },\n  {\n    code: 'KeyL',\n    rus: {\n      lower: 'д',\n      upper: 'Д',\n      caps: 'Д',\n      capsShift: 'д',\n    },\n    eng: {\n      lower: 'l',\n      upper: 'L',\n      caps: 'L',\n      capsShift: 'l',\n    },\n  },\n  {\n    code: 'Semicolon',\n    rus: {\n      lower: 'ж',\n      upper: 'Ж',\n      caps: 'Ж',\n      capsShift: 'ж',\n    },\n    eng: {\n      lower: ';',\n      upper: ':',\n      caps: ';',\n      capsShift: ':',\n    },\n  },\n  {\n    code: 'Quote',\n    rus: {\n      lower: 'э',\n      upper: 'Э',\n      caps: 'Э',\n      capsShift: 'э',\n    },\n    eng: {\n      lower: \"'\",\n      upper: '\"',\n      caps: \"'\",\n      capsShift: '\"',\n    },\n  },\n  {\n    code: 'Enter',\n    rus: {\n      lower: 'Enter',\n      upper: 'Enter',\n      caps: 'Enter',\n      capsShift: 'Enter',\n    },\n    eng: {\n      lower: 'Enter',\n      upper: 'Enter',\n      caps: 'Enter',\n      capsShift: 'Enter',\n    },\n  },\n];\nROWS[3] = [\n  {\n    code: 'ShiftLeft',\n    rus: {\n      lower: 'Shift',\n      upper: 'Shift',\n      caps: 'Shift',\n      capsShift: 'Shift',\n    },\n    eng: {\n      lower: 'Shift',\n      upper: 'Shift',\n      caps: 'Shift',\n      capsShift: 'Shift',\n    },\n  },\n  {\n    code: 'KeyZ',\n    rus: {\n      lower: 'я',\n      upper: 'Я',\n      caps: 'Я',\n      capsShift: 'я',\n    },\n    eng: {\n      lower: 'z',\n      upper: 'Z',\n      caps: 'Z',\n      capsShift: 'z',\n    },\n  },\n  {\n    code: 'KeyX',\n    rus: {\n      lower: 'ч',\n      upper: 'Ч',\n      caps: 'Ч',\n      capsShift: 'ч',\n    },\n    eng: {\n      lower: 'x',\n      upper: 'X',\n      caps: 'X',\n      capsShift: 'x',\n    },\n  },\n  {\n    code: 'KeyC',\n    rus: {\n      lower: 'с',\n      upper: 'С',\n      caps: 'С',\n      capsShift: 'с',\n    },\n    eng: {\n      lower: 'c',\n      upper: 'C',\n      caps: 'C',\n      capsShift: 'c',\n    },\n  },\n  {\n    code: 'KeyV',\n    rus: {\n      lower: 'м',\n      upper: 'М',\n      caps: 'М',\n      capsShift: 'м',\n    },\n    eng: {\n      lower: 'v',\n      upper: 'V',\n      caps: 'V',\n      capsShift: 'v',\n    },\n  },\n  {\n    code: 'KeyB',\n    rus: {\n      lower: 'и',\n      upper: 'И',\n      caps: 'И',\n      capsShift: 'и',\n    },\n    eng: {\n      lower: 'b',\n      upper: 'B',\n      caps: 'B',\n      capsShift: 'b',\n    },\n  },\n  {\n    code: 'KeyN',\n    rus: {\n      lower: 'т',\n      upper: 'Т',\n      caps: 'Т',\n      capsShift: 'т',\n    },\n    eng: {\n      lower: 'n',\n      upper: 'N',\n      caps: 'N',\n      capsShift: 'n',\n    },\n  },\n  {\n    code: 'KeyM',\n    rus: {\n      lower: 'ь',\n      upper: 'Ь',\n      caps: 'Ь',\n      capsShift: 'ь',\n    },\n    eng: {\n      lower: 'm',\n      upper: 'M',\n      caps: 'M',\n      capsShift: 'm',\n    },\n  },\n  {\n    code: 'Comma',\n    rus: {\n      lower: 'б',\n      upper: 'Б',\n      caps: 'Б',\n      capsShift: 'б',\n    },\n    eng: {\n      lower: ',',\n      upper: '<',\n      caps: ',',\n      capsShift: '<',\n    },\n  },\n  {\n    code: 'Period',\n    rus: {\n      lower: 'ю',\n      upper: 'Ю',\n      caps: 'Ю',\n      capsShift: 'ю',\n    },\n    eng: {\n      lower: '.',\n      upper: '>',\n      caps: '.',\n      capsShift: '.',\n    },\n  },\n  {\n    code: 'Slash',\n    rus: {\n      lower: '.',\n      upper: ',',\n      caps: '.',\n      capsShift: ',',\n    },\n    eng: {\n      lower: '/',\n      upper: '?',\n      caps: '/',\n      capsShift: '?',\n    },\n  },\n  {\n    code: 'ArrowUp',\n    rus: {\n      lower: '▲',\n      upper: '▲',\n      caps: '▲',\n      capsShift: '▲',\n    },\n    eng: {\n      lower: '▲',\n      upper: '▲',\n      caps: '▲',\n      capsShift: '▲',\n    },\n  },\n  {\n    code: 'ShiftRight',\n    rus: {\n      lower: 'Shift',\n      upper: 'Shift',\n      caps: 'Shift',\n      capsShift: 'Shift',\n    },\n    eng: {\n      lower: 'Shift',\n      upper: 'Shift',\n      caps: 'Shift',\n      capsShift: 'Shift',\n    },\n  },\n];\nROWS[4] = [\n  {\n    code: 'ControlLeft',\n    rus: {\n      lower: 'Ctrl',\n      upper: 'Ctrl',\n      caps: 'Ctrl',\n      capsShift: 'Ctrl',\n    },\n    eng: {\n      lower: 'Ctrl',\n      upper: 'Ctrl',\n      caps: 'Ctrl',\n      capsShift: 'Ctrl',\n    },\n  },\n  {\n    code: 'MetaLeft',\n    rus: {\n      lower: 'Win',\n      upper: 'Win',\n      caps: 'Win',\n      capsShift: 'Win',\n    },\n    eng: {\n      lower: 'Win',\n      upper: 'Win',\n      caps: 'Win',\n      capsShift: 'Win',\n    },\n  },\n  {\n    code: 'AltLeft',\n    rus: {\n      lower: 'Alt',\n      upper: 'Alt',\n      caps: 'Alt',\n      capsShift: 'Alt',\n    },\n    eng: {\n      lower: 'Alt',\n      upper: 'Alt',\n      caps: 'Alt',\n      capsShift: 'Alt',\n    },\n  },\n  {\n    code: 'Space',\n    rus: {\n      lower: ' ',\n      upper: ' ',\n      caps: ' ',\n      capsShift: ' ',\n    },\n    eng: {\n      lower: ' ',\n      upper: ' ',\n      caps: ' ',\n      capsShift: ' ',\n    },\n  },\n  {\n    code: 'AltRight',\n    rus: {\n      lower: 'Alt',\n      upper: 'Alt',\n      caps: 'Alt',\n      capsShift: 'Alt',\n    },\n    eng: {\n      lower: 'Alt',\n      upper: 'Alt',\n      caps: 'Alt',\n      capsShift: 'Alt',\n    },\n  },\n  {\n    code: 'ArrowLeft',\n    rus: {\n      lower: '◄',\n      upper: '◄',\n      caps: '◄',\n      capsShift: '◄',\n    },\n    eng: {\n      lower: '◄',\n      upper: '◄',\n      caps: '◄',\n      capsShift: '◄',\n    },\n  },\n  {\n    code: 'ArrowDown',\n    rus: {\n      lower: '▼',\n      upper: '▼',\n      caps: '▼',\n      capsShift: '▼',\n    },\n    eng: {\n      lower: '▼',\n      upper: '▼',\n      caps: '▼',\n      capsShift: '▼',\n    },\n  },\n  {\n    code: 'ArrowRight',\n    rus: {\n      lower: '►',\n      upper: '►',\n      caps: '►',\n      capsShift: '►',\n    },\n    eng: {\n      lower: '►',\n      upper: '►',\n      caps: '►',\n      capsShift: '►',\n    },\n  },\n  {\n    code: 'ControlRight',\n    rus: {\n      lower: 'Ctrl',\n      upper: 'Ctrl',\n      caps: 'Ctrl',\n      capsShift: 'Ctrl',\n    },\n    eng: {\n      lower: 'Ctrl',\n      upper: 'Ctrl',\n      caps: 'Ctrl',\n      capsShift: 'Ctrl',\n    },\n  },\n];\n\n\n//# sourceURL=webpack://virtual-keyboard/./src/keyboard-layout.js?");

/***/ }),

/***/ "./src/keyboard.js":
/*!*************************!*\
  !*** ./src/keyboard.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _keyboard_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keyboard-layout */ \"./src/keyboard-layout.js\");\n\n\nconst Keyboard = {\n  elements: {\n    main: null,\n    keyContainer: null,\n    textarea: null,\n    OSinformation: '',\n    changeLang: '',\n    keys: [],\n  },\n  properties: {\n    lang: 'eng',\n    caps: false,\n    shiftLeft: false,\n    shiftRight: false,\n    value: '1',\n    case: 'lower',\n  },\n  current: {\n    event: null,\n    element: null,\n    code: null,\n    char: null,\n  },\n  previous: {\n    event: null,\n    element: null,\n    code: null,\n    char: null,\n  },\n\n  init() {\n    this.elements.main = document.createElement('div');\n    this.elements.main.classList.add('container');\n    this.elements.textarea = document.createElement('textarea');\n    this.elements.textarea.classList.add('keyboard--textarea', 'textarea');\n    this.elements.keyContainer = document.createElement('div');\n    this.elements.keyContainer.classList.add('keyboard--body', 'keyboard');\n    this.elements.keyContainer.append(this.createKeys());\n    this.elements.keys = document.querySelectorAll('.keyboard--key');\n    this.elements.OSinformation = document.createElement('p');\n    this.elements.OSinformation.classList.add('OSinfo');\n    this.elements.OSinformation.textContent = 'Keyboard created in Windows OS';\n    this.elements.changeLang = document.createElement('p');\n    this.elements.changeLang.classList.add('lang');\n    this.elements.changeLang.textContent = 'Language change: left alt+ctrl';\n    this.elements.main.append(this.elements.textarea);\n    this.elements.main.append(this.elements.keyContainer);\n    this.elements.main.append(this.elements.OSinformation);\n    this.elements.main.append(this.elements.changeLang);\n    document.body.append(this.elements.main);\n    if (localStorage.lang === 'rus') this.toggleLang();\n    document.body.addEventListener('keydown', this.keyDownHandler.bind(this));\n    document.body.addEventListener('keyup', this.keyUpHandler.bind(this));\n    document.body.addEventListener(\n      'mousedown',\n      this.mouseDownHandler.bind(this),\n    );\n    document.body.addEventListener('mouseup', this.mouseUpHandler.bind(this));\n  },\n\n  addActive() {\n    this.current.element.classList.add('active');\n  },\n  removeActive() {\n    this.current.element.classList.remove('active');\n  },\n\n  createKeys() {\n    const fragment = document.createDocumentFragment();\n    _keyboard_layout__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ROWS.forEach((row) => {\n      const newRow = document.createElement('div');\n      newRow.classList.add('keyboard--row', 'row');\n      row.forEach((key) => {\n        const newKey = document.createElement('div');\n        newKey.classList.add('keyboard--key', 'key', key.code);\n        const rusPart = document.createElement('span');\n        rusPart.classList.add('rus', 'hidden');\n        Object.keys(key.rus).forEach((variant) => {\n          const newVariant = document.createElement('span');\n          newVariant.classList.add(variant, 'hidden');\n          newVariant.textContent = key.rus[variant];\n          rusPart.append(newVariant);\n        });\n        const engPart = document.createElement('span');\n        engPart.classList.add('eng');\n\n        Object.keys(key.eng).forEach((variant) => {\n          const newVariant = document.createElement('span');\n          newVariant.classList.add(variant, 'hidden');\n          if (variant === 'lower') {\n            newVariant.classList.remove('hidden');\n          }\n          newVariant.textContent = key.eng[variant];\n          engPart.append(newVariant);\n        });\n\n        newKey.append(rusPart);\n        newKey.append(engPart);\n        newRow.append(newKey);\n      });\n      fragment.append(newRow);\n    });\n    return fragment;\n  },\n\n  toggleLang() {\n    let langElems = document.querySelectorAll(`div>.${this.properties.lang}`);\n    langElems.forEach((elem) => {\n      elem.classList.add('hidden');\n      elem\n        .querySelectorAll(`span.${this.properties.case}`)[0]\n        .classList.add('hidden');\n    });\n\n    if (this.properties.lang === 'rus') {\n      this.properties.lang = 'eng';\n    } else {\n      this.properties.lang = 'rus';\n    }\n    langElems = document.querySelectorAll(`div>.${this.properties.lang}`);\n    langElems.forEach((elem) => {\n      elem.classList.remove('hidden');\n      elem\n        .querySelectorAll(`span.${this.properties.case}`)[0]\n        .classList.remove('hidden');\n    });\n    localStorage.setItem('lang', this.properties.lang);\n  },\n\n  toggleCase() {\n    const thisLangElems = document.querySelectorAll(\n      `div>.${this.properties.lang}`,\n    );\n    thisLangElems.forEach((elem) => {\n      elem\n        .querySelectorAll(`span.${this.properties.case}`)[0]\n        .classList.toggle('hidden');\n    });\n    if (\n      this.properties.caps\n      && (this.properties.shiftLeft || this.properties.shiftRight)\n    ) {\n      this.properties.case = 'capsShift';\n    } else if (this.properties.caps) {\n      this.properties.case = 'caps';\n    } else if (this.properties.shiftLeft || this.properties.shiftRight) {\n      this.properties.case = 'upper';\n    } else {\n      this.properties.case = 'lower';\n    }\n    thisLangElems.forEach((elem) => {\n      elem\n        .querySelectorAll(`span.${this.properties.case}`)[0]\n        .classList.toggle('hidden');\n    });\n  },\n\n  keyAction() {\n    let text = this.elements.textarea.value;\n    const textSelector = this.elements.textarea.selectionStart;\n    function locAddChar() {\n      if (textSelector >= 0 && textSelector <= text.length) {\n        this.elements.textarea.value = text.slice(0, textSelector)\n          + this.current.char\n          + text.slice(textSelector, text.length);\n        this.elements.textarea.selectionStart = textSelector + this.current.char.length;\n        this.elements.textarea.selectionEnd = textSelector + this.current.char.length;\n      } else {\n        this.elements.textarea.value += this.current.char;\n      }\n    }\n    const addChar = locAddChar.bind(this);\n    if (\n      [\n        'Backspace',\n        'Tab',\n        'Enter',\n        'CapsLock',\n        'ShiftLeft',\n        'ShiftRight',\n        'AltLeft',\n        'AltRight',\n        'ControlLeft',\n        'ControlRight',\n        'MetaLeft',\n        'Delete',\n      ].includes(this.current.code)\n    ) {\n      switch (this.current.code) {\n        case 'Backspace':\n          if (textSelector > 0 && textSelector <= text.length) {\n            text = text.slice(0, textSelector - 1)\n              + text.slice(textSelector, text.length);\n            this.elements.textarea.value = text;\n            this.elements.textarea.selectionStart = textSelector - 1;\n            this.elements.textarea.selectionEnd = textSelector - 1;\n          }\n          break;\n        case 'Tab':\n          this.current.char = '    ';\n          addChar();\n          break;\n        case 'Enter':\n          this.current.char = '\\n';\n          addChar();\n          break;\n        case 'CapsLock':\n          if (this.properties.caps && !this.current.event.repeat) {\n            this.properties.caps = false;\n            this.removeActive();\n          } else {\n            this.addActive();\n            this.properties.caps = true;\n          }\n          this.toggleCase();\n          break;\n        case 'ShiftLeft':\n          if (!this.properties.shiftLeft) {\n            this.properties.shiftLeft = true;\n            this.addActive();\n            this.toggleCase();\n          }\n          break;\n        case 'ShiftRight':\n          if (!this.properties.shiftRight) {\n            this.properties.shiftRight = true;\n            this.addActive();\n            this.toggleCase();\n          }\n          break;\n        case 'Delete':\n          if (textSelector > 0 && textSelector <= text.length - 1) {\n            text = text.slice(0, textSelector)\n              + text.slice(textSelector + 1, text.length);\n            this.elements.textarea.value = text;\n            this.elements.textarea.selectionStart = textSelector;\n            this.elements.textarea.selectionEnd = textSelector;\n          }\n          break;\n        default:\n          break;\n      }\n    } else {\n      addChar();\n    }\n    if (this.current.event.ctrlKey && this.current.event.altKey) {\n      this.toggleLang();\n    }\n  },\n\n  keyDownHandler(e) {\n    e.preventDefault();\n    this.current.event = e;\n    this.current.code = e.code;\n    [this.current.element] = this.elements.main.getElementsByClassName(e.code);\n    if (this.current.element) {\n      this.current.char = this.current.element.querySelectorAll(':not(.hidden)')[1].textContent;\n      this.keyAction();\n      if (this.current.code !== 'CapsLock') {\n        this.addActive();\n      }\n    }\n  },\n  keyUpHandler(e) {\n    const temp = this.elements.main.getElementsByClassName(e.code)[0];\n    if (temp) {\n      this.current.element = temp.closest('div');\n      if (e.code !== 'CapsLock') this.removeActive();\n      if (e.code === 'ShiftLeft') {\n        this.properties.shiftLeft = false;\n        this.toggleCase();\n      }\n      if (e.code === 'ShiftRight') {\n        this.properties.shiftRight = false;\n        this.toggleCase();\n      }\n    }\n  },\n\n  mouseDownHandler(e) {\n    this.current.event = e;\n    this.current.element = e.target.closest('.key');\n    if (this.current.element) {\n      this.current.char = this.current.element.querySelectorAll(':not(.hidden)')[1].textContent;\n      [, , this.current.code] = this.current.element.classList;\n      if (this.current.code !== 'CapsLock') {\n        this.addActive();\n      }\n      this.keyAction();\n      this.previous = { ...this.current };\n      e.preventDefault();\n    }\n  },\n\n  mouseUpHandler(e) {\n    this.current.element = e.target.closest('.key');\n    if (this.current.element) {\n      [, , this.current.code] = this.current.element.classList;\n    } else {\n      this.current = { ...this.previous };\n    }\n    if (this.current.element) {\n      if (this.current.element === this.previous.element) {\n        [, , this.current.code] = this.current.element.classList;\n      } else {\n        this.current = { ...this.previous };\n      }\n      if (this.current.code !== 'CapsLock') {\n        this.removeActive();\n      }\n      if (this.properties.shiftLeft && this.current.code === 'ShiftLeft') {\n        this.properties.shiftLeft = false;\n        this.toggleCase();\n      }\n      if (this.properties.shiftRight && this.current.code === 'ShiftRight') {\n        this.properties.shiftRight = false;\n        this.toggleCase();\n      }\n    }\n  },\n};\n\nwindow.addEventListener('DOMContentLoaded', () => {\n  Keyboard.init();\n});\n\n\n//# sourceURL=webpack://virtual-keyboard/./src/keyboard.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("main." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("e2f2145e44992121920f")
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "virtual-keyboard:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises = 0;
/******/ 		var blockingPromisesWaiting = [];
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		// eslint-disable-next-line no-unused-vars
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results);
/******/ 		}
/******/ 		
/******/ 		function unblock() {
/******/ 			if (--blockingPromises === 0) {
/******/ 				setStatus("ready").then(function () {
/******/ 					if (blockingPromises === 0) {
/******/ 						var list = blockingPromisesWaiting;
/******/ 						blockingPromisesWaiting = [];
/******/ 						for (var i = 0; i < list.length; i++) {
/******/ 							list[i]();
/******/ 						}
/******/ 					}
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 				/* fallthrough */
/******/ 				case "prepare":
/******/ 					blockingPromises++;
/******/ 					promise.then(unblock, unblock);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises === 0) return fn();
/******/ 			return new Promise(function (resolve) {
/******/ 				blockingPromisesWaiting.push(function () {
/******/ 					resolve(fn());
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							},
/******/ 							[])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								} else {
/******/ 									return setStatus("ready").then(function () {
/******/ 										return updatedModules;
/******/ 									});
/******/ 								}
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error(
/******/ 						"apply() is only allowed in ready status (state: " +
/******/ 							currentStatus +
/******/ 							")"
/******/ 					);
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 				// handle errors in accept handlers and self accepted module load
/******/ 				if (error) {
/******/ 					return setStatus("fail").then(function () {
/******/ 						throw error;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				if (queuedInvalidatedModules) {
/******/ 					return internalApply(options).then(function (list) {
/******/ 						outdatedModules.forEach(function (moduleId) {
/******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 						});
/******/ 						return list;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				return setStatus("idle").then(function () {
/******/ 					return outdatedModules;
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = __webpack_require__.hmrS_jsonp = __webpack_require__.hmrS_jsonp || {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId, updatedModulesList) {
/******/ 			currentUpdatedModulesList = updatedModulesList;
/******/ 			return new Promise((resolve, reject) => {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = (event) => {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdatevirtual_keyboard"] = (chunkId, moreModules, runtime) => {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				} else {
/******/ 					currentUpdateChunks[chunkId] = false;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						!currentUpdateChunks[chunkId]
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = () => {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then((response) => {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;