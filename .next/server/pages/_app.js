/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./lib/firebase/config.js":
/*!********************************!*\
  !*** ./lib/firebase/config.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst firebaseConfig = {\n    apiKey: \"AIzaSyD-kx2r8zAOy3ZkqFv7XXp7UP3R1U8kGa8\",\n    authDomain: \"soukaina-sbai.firebaseapp.com\",\n    projectId: \"soukaina-sbai\",\n    storageBucket: \"soukaina-sbai.firebasestorage.app\",\n    messagingSenderId: \"25176112239\",\n    appId: \"1:25176112239:web:ca6db9a32e1608f042619a\",\n    measurementId: \"G-KYR3WT44WH\"\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (firebaseConfig);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvZmlyZWJhc2UvY29uZmlnLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNQSxpQkFBaUI7SUFDckJDLFFBQVE7SUFDUkMsWUFBWTtJQUNaQyxXQUFXO0lBQ1hDLGVBQWU7SUFDZkMsbUJBQW1CO0lBQ25CQyxPQUFPO0lBQ1BDLGVBQWU7QUFDakI7QUFFQSxpRUFBZVAsY0FBY0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtcG9ydGZvbGlvLy4vbGliL2ZpcmViYXNlL2NvbmZpZy5qcz81ZmEwIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xuICBhcGlLZXk6IFwiQUl6YVN5RC1reDJyOHpBT3kzWmtxRnY3WFhwN1VQM1IxVThrR2E4XCIsXG4gIGF1dGhEb21haW46IFwic291a2FpbmEtc2JhaS5maXJlYmFzZWFwcC5jb21cIixcbiAgcHJvamVjdElkOiBcInNvdWthaW5hLXNiYWlcIixcbiAgc3RvcmFnZUJ1Y2tldDogXCJzb3VrYWluYS1zYmFpLmZpcmViYXNlc3RvcmFnZS5hcHBcIixcbiAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiMjUxNzYxMTIyMzlcIixcbiAgYXBwSWQ6IFwiMToyNTE3NjExMjIzOTp3ZWI6Y2E2ZGI5YTMyZTE2MDhmMDQyNjE5YVwiLFxuICBtZWFzdXJlbWVudElkOiBcIkctS1lSM1dUNDRXSFwiLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZmlyZWJhc2VDb25maWc7XG4iXSwibmFtZXMiOlsiZmlyZWJhc2VDb25maWciLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwSWQiLCJtZWFzdXJlbWVudElkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/firebase/config.js\n");

/***/ }),

/***/ "./lib/firebase/index.js":
/*!*******************************!*\
  !*** ./lib/firebase/index.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   analytics: () => (/* binding */ analytics),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var firebase_analytics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/analytics */ \"firebase/analytics\");\n/* harmony import */ var firebase_analytics__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_analytics__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config */ \"./lib/firebase/config.js\");\n\n\n\nif (!(firebase_app__WEBPACK_IMPORTED_MODULE_1___default().apps).length) {\n    firebase_app__WEBPACK_IMPORTED_MODULE_1___default().initializeApp(_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n}\nconst { analytics } = (firebase_app__WEBPACK_IMPORTED_MODULE_1___default());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((firebase_app__WEBPACK_IMPORTED_MODULE_1___default()));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvZmlyZWJhc2UvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUE0QjtBQUNRO0FBQ0U7QUFFdEMsSUFBSSxDQUFDQSwwREFBYSxDQUFDRyxNQUFNLEVBQUU7SUFDekJILGlFQUFzQixDQUFDQywrQ0FBY0E7QUFDdkM7QUFFTyxNQUFNLEVBQUVJLFNBQVMsRUFBRSxHQUFHTCxxREFBUUEsQ0FBQztBQUV0QyxpRUFBZUEscURBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LXBvcnRmb2xpby8uL2xpYi9maXJlYmFzZS9pbmRleC5qcz9jZTBhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcImZpcmViYXNlL2FuYWx5dGljc1wiO1xuaW1wb3J0IGZpcmViYXNlIGZyb20gXCJmaXJlYmFzZS9hcHBcIjtcbmltcG9ydCBmaXJlYmFzZUNvbmZpZyBmcm9tIFwiLi9jb25maWdcIjtcblxuaWYgKCFmaXJlYmFzZS5hcHBzLmxlbmd0aCkge1xuICBmaXJlYmFzZS5pbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKTtcbn1cblxuZXhwb3J0IGNvbnN0IHsgYW5hbHl0aWNzIH0gPSBmaXJlYmFzZTtcblxuZXhwb3J0IGRlZmF1bHQgZmlyZWJhc2U7XG4iXSwibmFtZXMiOlsiZmlyZWJhc2UiLCJmaXJlYmFzZUNvbmZpZyIsImFwcHMiLCJsZW5ndGgiLCJpbml0aWFsaXplQXBwIiwiYW5hbHl0aWNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/firebase/index.js\n");

/***/ }),

/***/ "./pages/_app.jsx":
/*!************************!*\
  !*** ./pages/_app.jsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/firebase */ \"./lib/firebase/index.js\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst MyApp = ({ Component, pageProps })=>{\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (false) {}\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n        ...pageProps\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\MYela\\\\OneDrive\\\\Bureau\\\\my-nextjs-app\\\\pages\\\\_app.jsx\",\n        lineNumber: 12,\n        columnNumber: 10\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBa0M7QUFDVTtBQUNiO0FBRS9CLE1BQU1FLFFBQVEsQ0FBQyxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRTtJQUNyQ0osZ0RBQVNBLENBQUM7UUFDUixJQUFJSyxLQUF5QixFQUFjLEVBRTFDO0lBQ0gsR0FBRyxFQUFFO0lBRUwscUJBQU8sOERBQUNGO1FBQVcsR0FBR0MsU0FBUzs7Ozs7O0FBQ2pDO0FBRUEsaUVBQWVGLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LXBvcnRmb2xpby8uL3BhZ2VzL19hcHAuanN4PzRjYjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgYW5hbHl0aWNzIH0gZnJvbSAnLi4vbGliL2ZpcmViYXNlJztcbmltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJztcblxuY29uc3QgTXlBcHAgPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSA9PiB7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGFuYWx5dGljcygpO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIHJldHVybiA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwiYW5hbHl0aWNzIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJwcm9jZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.jsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "firebase/analytics":
/*!*************************************!*\
  !*** external "firebase/analytics" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("firebase/analytics");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("firebase/app");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.jsx"));
module.exports = __webpack_exports__;

})();