"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./public/src/components/header.tsx":
/*!******************************************!*\
  !*** ./public/src/components/header.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n\n\n\nfunction Header(param) {\n    var connect = param.connect, account = param.account, disconnect = param.disconnect;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"flex flex-row justify-between mx-2 md:mx-10 mt-2 mb-10\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-3xl font-bold m-3\",\n                    children: \"Web3 Muzik\"\n                }, void 0, false, {\n                    fileName: \"/Users/mikestarr/Development/hackathons/ethglobal-metabolism/public/src/components/header.tsx\",\n                    lineNumber: 9,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/mikestarr/Development/hackathons/ethglobal-metabolism/public/src/components/header.tsx\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"inline-block px-11 py-2 border-2 bg-white text-[#FF7E39] font-medium text-xs leading-tight uppercase rounded-full mt-4 mb-2\",\n                    children: \"Ad Marketplace\"\n                }, void 0, false, {\n                    fileName: \"/Users/mikestarr/Development/hackathons/ethglobal-metabolism/public/src/components/header.tsx\",\n                    lineNumber: 14,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/mikestarr/Development/hackathons/ethglobal-metabolism/public/src/components/header.tsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-row align-center justify-center border w-fit py-1 px-3 m-2 rounded-3xl\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaEthereum, {\n                                className: \"border\"\n                            }, void 0, false, {\n                                fileName: \"/Users/mikestarr/Development/hackathons/ethglobal-metabolism/public/src/components/header.tsx\",\n                                lineNumber: 22,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"flex ml-1 font-medium border\",\n                                children: \"Rinkeby\"\n                            }, void 0, false, {\n                                fileName: \"/Users/mikestarr/Development/hackathons/ethglobal-metabolism/public/src/components/header.tsx\",\n                                lineNumber: 23,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/mikestarr/Development/hackathons/ethglobal-metabolism/public/src/components/header.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, this),\n                    account.current == undefined || account.current === null || account.current === \"\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: connect,\n                        className: \"flex flex-row border w-fit py-1 px-3 m-2 rounded-3xl align-center\",\n                        children: \"Connect\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mikestarr/Development/hackathons/ethglobal-metabolism/public/src/components/header.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 11\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: disconnect,\n                        className: \"flex flex-col align-center justify-center border w-fit p-2 px-3 m-2 rounded-3xl border\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"font-normal text-xs flex align-center\",\n                            children: [\n                                account.current.substr(0, 11),\n                                \"....\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/mikestarr/Development/hackathons/ethglobal-metabolism/public/src/components/header.tsx\",\n                            lineNumber: 40,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/mikestarr/Development/hackathons/ethglobal-metabolism/public/src/components/header.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mikestarr/Development/hackathons/ethglobal-metabolism/public/src/components/header.tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mikestarr/Development/hackathons/ethglobal-metabolism/public/src/components/header.tsx\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvc3JjL2NvbXBvbmVudHMvaGVhZGVyLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUFzQztBQUNNO0FBRTVDLFNBQVNFLE1BQU0sQ0FBQyxLQUFnQyxFQUFFO1FBQWhDQyxPQUFPLEdBQVQsS0FBZ0MsQ0FBOUJBLE9BQU8sRUFBRUMsT0FBTyxHQUFsQixLQUFnQyxDQUFyQkEsT0FBTyxFQUFFQyxVQUFVLEdBQTlCLEtBQWdDLENBQVpBLFVBQVU7SUFDNUMscUJBQ0UsOERBQUNDLFFBQU07UUFBQ0MsU0FBUyxFQUFDLHdEQUF3RDs7MEJBRXhFLDhEQUFDQyxLQUFHO2dCQUFDRCxTQUFTLEVBQUMsRUFBRTswQkFDZiw0RUFBQ0UsSUFBRTtvQkFBQ0YsU0FBUyxFQUFDLHdCQUF3Qjs4QkFBQyxZQUFVOzs7Ozt3QkFBSzs7Ozs7b0JBQ2xEOzBCQUVOLDhEQUFDQyxLQUFHO2dCQUFDRCxTQUFTLEVBQUMsOEJBQThCOzBCQUUzQyw0RUFBQ0csUUFBTTtvQkFBQ0gsU0FBUyxFQUFDLDZIQUE2SDs4QkFBQyxnQkFFaEo7Ozs7O3dCQUFTOzs7OztvQkFDTDswQkFFTiw4REFBQ0MsS0FBRztnQkFBQ0QsU0FBUyxFQUFDLGVBQWU7O2tDQUU1Qiw4REFBQ0MsS0FBRzt3QkFBQ0QsU0FBUyxFQUFDLGtGQUFrRjs7MENBQy9GLDhEQUFDTixzREFBVTtnQ0FBQ00sU0FBUyxFQUFDLFFBQVE7Ozs7O29DQUFHOzBDQUNqQyw4REFBQ0ksTUFBSTtnQ0FBQ0osU0FBUyxFQUFDLDhCQUE4QjswQ0FBQyxTQUFPOzs7OztvQ0FBTzs7Ozs7OzRCQUN6RDtvQkFDTEgsT0FBTyxDQUFDUSxPQUFPLElBQUlDLFNBQVMsSUFDN0JULE9BQU8sQ0FBQ1EsT0FBTyxLQUFLLElBQUksSUFDeEJSLE9BQU8sQ0FBQ1EsT0FBTyxLQUFLLEVBQUUsaUJBQ3BCLDhEQUFDRixRQUFNO3dCQUNMSSxPQUFPLEVBQUVYLE9BQU87d0JBQ2hCSSxTQUFTLEVBQUMsbUVBQW1FO2tDQUM5RSxTQUVEOzs7Ozs0QkFBUyxpQkFFVCw4REFBQ0csUUFBTTt3QkFDTEksT0FBTyxFQUFFVCxVQUFVO3dCQUNuQkUsU0FBUyxFQUFDLHdGQUF5RjtrQ0FHbkcsNEVBQUNJLE1BQUk7NEJBQUNKLFNBQVMsRUFBQyx1Q0FBdUM7O2dDQUNwREgsT0FBTyxDQUFDUSxPQUFPLENBQUNHLE1BQU0sQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDO2dDQUFDLE1BQ2pDOzs7Ozs7Z0NBQU87Ozs7OzRCQUNBOzs7Ozs7b0JBRVA7Ozs7OztZQUNDLENBQ1Q7Q0FDSDtBQTVDUWIsS0FBQUEsTUFBTTtBQThDZiwrREFBZUEsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3B1YmxpYy9zcmMvY29tcG9uZW50cy9oZWFkZXIudHN4PzMwZjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRmFFdGhlcmV1bSB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xuXG5mdW5jdGlvbiBIZWFkZXIoeyBjb25uZWN0LCBhY2NvdW50LCBkaXNjb25uZWN0IH0pIHtcbiAgcmV0dXJuIChcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuIG14LTIgbWQ6bXgtMTAgbXQtMiBtYi0xMFwiPlxuICAgICAgey8qIGhlYWRsaW5lICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZCBtLTNcIj5XZWIzIE11emlrPC9oMT5cbiAgICAgIDwvZGl2PlxuICAgICAgey8qIEFkIG1hcmtldHBsYWNlICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgIHsvKiBMSU5LIFRPIEFEVkVSVElTRU1FTlQgUEFHRSAqL31cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgcHgtMTEgcHktMiBib3JkZXItMiBiZy13aGl0ZSB0ZXh0LVsjRkY3RTM5XSBmb250LW1lZGl1bSB0ZXh0LXhzIGxlYWRpbmctdGlnaHQgdXBwZXJjYXNlIHJvdW5kZWQtZnVsbCBtdC00IG1iLTJcIj5cbiAgICAgICAgICBBZCBNYXJrZXRwbGFjZVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgey8qIEVUSCBCdXR0b25zICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93XCI+XG4gICAgICAgIHsvKiBuZXR3b3JrIGJ0biAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGFsaWduLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBib3JkZXIgdy1maXQgcHktMSBweC0zIG0tMiByb3VuZGVkLTN4bFwiPlxuICAgICAgICAgIDxGYUV0aGVyZXVtIGNsYXNzTmFtZT1cImJvcmRlclwiIC8+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxleCBtbC0xIGZvbnQtbWVkaXVtIGJvcmRlclwiPlJpbmtlYnk8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7YWNjb3VudC5jdXJyZW50ID09IHVuZGVmaW5lZCB8fFxuICAgICAgICBhY2NvdW50LmN1cnJlbnQgPT09IG51bGwgfHxcbiAgICAgICAgYWNjb3VudC5jdXJyZW50ID09PSBcIlwiID8gKFxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9e2Nvbm5lY3R9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGJvcmRlciB3LWZpdCBweS0xIHB4LTMgbS0yIHJvdW5kZWQtM3hsIGFsaWduLWNlbnRlclwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgQ29ubmVjdFxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9e2Rpc2Nvbm5lY3R9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGFsaWduLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBib3JkZXIgdy1maXQgcC0yIHB4LTMgbS0yIHJvdW5kZWQtM3hsICBib3JkZXJcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHsvKiBEaXNjb25uZWN0Ki99XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LW5vcm1hbCB0ZXh0LXhzIGZsZXggYWxpZ24tY2VudGVyXCI+XG4gICAgICAgICAgICAgIHthY2NvdW50LmN1cnJlbnQuc3Vic3RyKDAsIDExKX0uLi4uXG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2hlYWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiRmFFdGhlcmV1bSIsIkhlYWRlciIsImNvbm5lY3QiLCJhY2NvdW50IiwiZGlzY29ubmVjdCIsImhlYWRlciIsImNsYXNzTmFtZSIsImRpdiIsImgxIiwiYnV0dG9uIiwic3BhbiIsImN1cnJlbnQiLCJ1bmRlZmluZWQiLCJvbkNsaWNrIiwic3Vic3RyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./public/src/components/header.tsx\n"));

/***/ })

});