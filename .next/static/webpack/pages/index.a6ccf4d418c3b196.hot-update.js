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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n\n\n\nfunction Header(param) {\n    var connect = param.connect, account = param.account, disconnect = param.disconnect;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n            className: \"flex flex-row justify-between mx-2 md:mx-10 mt-2 mb-10\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-3xl font-bold m-3\",\n                        children: \"Web3 Muzik\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mikestarr/Development/hackathons/ethglobal-metabolism/public/src/components/header.tsx\",\n                        lineNumber: 10,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/mikestarr/Development/hackathons/ethglobal-metabolism/public/src/components/header.tsx\",\n                    lineNumber: 9,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col justify-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"inline-block px-11 py-2 border-2 bg-white text-[#FF7E39] font-medium text-xs leading-tight uppercase rounded-full mt-4 mb-2\",\n                        children: \"Ad Marketplace\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mikestarr/Development/hackathons/ethglobal-metabolism/public/src/components/header.tsx\",\n                        lineNumber: 15,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/mikestarr/Development/hackathons/ethglobal-metabolism/public/src/components/header.tsx\",\n                    lineNumber: 13,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-row\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-row items-center px-4 py-1 border-2 bg-white text-black font-medium text-xs leading-tight uppercase rounded-full mt-4 mb-2 mr-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaEthereum, {\n                                    className: \"flex align-center w-[16px] h-[16px]\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mikestarr/Development/hackathons/ethglobal-metabolism/public/src/components/header.tsx\",\n                                    lineNumber: 23,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"flex ml-1 text-base\",\n                                    children: \"Rinkeby\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mikestarr/Development/hackathons/ethglobal-metabolism/public/src/components/header.tsx\",\n                                    lineNumber: 24,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/mikestarr/Development/hackathons/ethglobal-metabolism/public/src/components/header.tsx\",\n                            lineNumber: 22,\n                            columnNumber: 11\n                        }, this),\n                        account.current == undefined || account.current === null || account.current === \"\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: connect,\n                            className: \"flex flex-row items-center px-4 py-1 border-2 bg-white text-black font-medium text-xs leading-tight uppercase rounded-full mt-4 mb-2\",\n                            children: \"Connect\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mikestarr/Development/hackathons/ethglobal-metabolism/public/src/components/header.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 13\n                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: disconnect,\n                            className: \"flex flex-row items-center px-1 py-1 border-2 bg-white text-black font-medium text-xs leading-tight uppercase rounded-full mt-4 mb-2 mr-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: \"0 ETH\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mikestarr/Development/hackathons/ethglobal-metabolism/public/src/components/header.tsx\",\n                                    lineNumber: 40,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"bg-gray-100 rounded-full p-2 ml-1\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaCircle, {\n                                            className: \"\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/mikestarr/Development/hackathons/ethglobal-metabolism/public/src/components/header.tsx\",\n                                            lineNumber: 42,\n                                            columnNumber: 17\n                                        }, this),\n                                        account.current.substr(0, 4),\n                                        \"...\",\n                                        account.current.substr(-4, 4)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/mikestarr/Development/hackathons/ethglobal-metabolism/public/src/components/header.tsx\",\n                                    lineNumber: 41,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/mikestarr/Development/hackathons/ethglobal-metabolism/public/src/components/header.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/mikestarr/Development/hackathons/ethglobal-metabolism/public/src/components/header.tsx\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/mikestarr/Development/hackathons/ethglobal-metabolism/public/src/components/header.tsx\",\n            lineNumber: 7,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvc3JjL2NvbXBvbmVudHMvaGVhZGVyLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUFzQztBQUNnQjtBQUV0RCxTQUFTRyxNQUFNLENBQUMsS0FBZ0MsRUFBRTtRQUFoQ0MsT0FBTyxHQUFULEtBQWdDLENBQTlCQSxPQUFPLEVBQUVDLE9BQU8sR0FBbEIsS0FBZ0MsQ0FBckJBLE9BQU8sRUFBRUMsVUFBVSxHQUE5QixLQUFnQyxDQUFaQSxVQUFVO0lBQzVDLHFCQUNFO2tCQUNFLDRFQUFDQyxRQUFNO1lBQUNDLFNBQVMsRUFBQyx3REFBd0Q7OzhCQUV4RSw4REFBQ0MsS0FBRztvQkFBQ0QsU0FBUyxFQUFDLEVBQUU7OEJBQ2YsNEVBQUNFLElBQUU7d0JBQUNGLFNBQVMsRUFBQyx3QkFBd0I7a0NBQUMsWUFBVTs7Ozs7NEJBQUs7Ozs7O3dCQUNsRDs4QkFFTiw4REFBQ0MsS0FBRztvQkFBQ0QsU0FBUyxFQUFDLDhCQUE4Qjs4QkFFM0MsNEVBQUNHLFFBQU07d0JBQUNILFNBQVMsRUFBQyw2SEFBNkg7a0NBQUMsZ0JBRWhKOzs7Ozs0QkFBUzs7Ozs7d0JBQ0w7OEJBRU4sOERBQUNDLEtBQUc7b0JBQUNELFNBQVMsRUFBQyxlQUFlOztzQ0FFNUIsOERBQUNDLEtBQUc7NEJBQUNELFNBQVMsRUFBQywySUFBMkk7OzhDQUN4Siw4REFBQ1Asc0RBQVU7b0NBQUNPLFNBQVMsRUFBQyxxQ0FBc0M7Ozs7O3dDQUFHOzhDQUMvRCw4REFBQ0ksTUFBSTtvQ0FBQ0osU0FBUyxFQUFDLHFCQUFxQjs4Q0FBQyxTQUFPOzs7Ozt3Q0FBTzs7Ozs7O2dDQUNoRDt3QkFDTEgsT0FBTyxDQUFDUSxPQUFPLElBQUlDLFNBQVMsSUFDN0JULE9BQU8sQ0FBQ1EsT0FBTyxLQUFLLElBQUksSUFDeEJSLE9BQU8sQ0FBQ1EsT0FBTyxLQUFLLEVBQUUsaUJBQ3BCLDhEQUFDRixRQUFNOzRCQUNMSSxPQUFPLEVBQUVYLE9BQU87NEJBQ2hCSSxTQUFTLEVBQUMsc0lBQXNJO3NDQUNqSixTQUVEOzs7OztnQ0FBUyxpQkFFVCw4REFBQ0csUUFBTTs0QkFDTEksT0FBTyxFQUFFVCxVQUFVOzRCQUNuQkUsU0FBUyxFQUFDLDJJQUEySTs7OENBRXJKLDhEQUFDSSxNQUFJOzhDQUFDLE9BQUs7Ozs7O3dDQUFPOzhDQUNsQiw4REFBQ0EsTUFBSTtvQ0FBQ0osU0FBUyxFQUFDLG1DQUFtQzs7c0RBQ2pELDhEQUFDTixvREFBUTs0Q0FBQ00sU0FBUyxFQUFDLEVBQUU7Ozs7O2dEQUFFO3dDQUN2QkgsT0FBTyxDQUFDUSxPQUFPLENBQUNHLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO3dDQUFDLEtBQUc7d0NBQUNYLE9BQU8sQ0FBQ1EsT0FBTyxDQUFDRyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDOzs7Ozs7d0NBQzFEOzs7Ozs7Z0NBQ0E7Ozs7Ozt3QkFFUDs7Ozs7O2dCQUNDO3FCQUNSLENBQ0g7Q0FDSDtBQS9DUWIsS0FBQUEsTUFBTTtBQWlEZiwrREFBZUEsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3B1YmxpYy9zcmMvY29tcG9uZW50cy9oZWFkZXIudHN4PzMwZjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRmFFdGhlcmV1bSwgRmFDaXJjbGUgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcblxuZnVuY3Rpb24gSGVhZGVyKHsgY29ubmVjdCwgYWNjb3VudCwgZGlzY29ubmVjdCB9KSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gbXgtMiBtZDpteC0xMCBtdC0yIG1iLTEwXCI+XG4gICAgICAgIHsvKiBoZWFkbGluZSAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkIG0tM1wiPldlYjMgTXV6aWs8L2gxPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgey8qIEFkIG1hcmtldHBsYWNlICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICB7LyogTElOSyBUTyBBRFZFUlRJU0VNRU5UIFBBR0UgKi99XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgcHgtMTEgcHktMiBib3JkZXItMiBiZy13aGl0ZSB0ZXh0LVsjRkY3RTM5XSBmb250LW1lZGl1bSB0ZXh0LXhzIGxlYWRpbmctdGlnaHQgdXBwZXJjYXNlIHJvdW5kZWQtZnVsbCBtdC00IG1iLTJcIj5cbiAgICAgICAgICAgIEFkIE1hcmtldHBsYWNlXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7LyogRVRIIEJ1dHRvbnMgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvd1wiPlxuICAgICAgICAgIHsvKiBuZXR3b3JrIGJ0biAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyIHB4LTQgcHktMSBib3JkZXItMiBiZy13aGl0ZSB0ZXh0LWJsYWNrIGZvbnQtbWVkaXVtIHRleHQteHMgbGVhZGluZy10aWdodCB1cHBlcmNhc2Ugcm91bmRlZC1mdWxsIG10LTQgbWItMiBtci00XCI+XG4gICAgICAgICAgICA8RmFFdGhlcmV1bSBjbGFzc05hbWU9XCJmbGV4IGFsaWduLWNlbnRlciAgdy1bMTZweF0gaC1bMTZweF1cIiAvPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxleCBtbC0xIHRleHQtYmFzZVwiPlJpbmtlYnk8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge2FjY291bnQuY3VycmVudCA9PSB1bmRlZmluZWQgfHxcbiAgICAgICAgICBhY2NvdW50LmN1cnJlbnQgPT09IG51bGwgfHxcbiAgICAgICAgICBhY2NvdW50LmN1cnJlbnQgPT09IFwiXCIgPyAoXG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2Nvbm5lY3R9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyIHB4LTQgcHktMSBib3JkZXItMiBiZy13aGl0ZSB0ZXh0LWJsYWNrIGZvbnQtbWVkaXVtIHRleHQteHMgbGVhZGluZy10aWdodCB1cHBlcmNhc2Ugcm91bmRlZC1mdWxsIG10LTQgbWItMlwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIENvbm5lY3RcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2Rpc2Nvbm5lY3R9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyIHB4LTEgcHktMSBib3JkZXItMiBiZy13aGl0ZSB0ZXh0LWJsYWNrIGZvbnQtbWVkaXVtIHRleHQteHMgbGVhZGluZy10aWdodCB1cHBlcmNhc2Ugcm91bmRlZC1mdWxsIG10LTQgbWItMiBtci00XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHNwYW4+MCBFVEg8L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJnLWdyYXktMTAwIHJvdW5kZWQtZnVsbCBwLTIgbWwtMVwiPlxuICAgICAgICAgICAgICAgIDxGYUNpcmNsZSBjbGFzc05hbWU9XCJcIi8+XG4gICAgICAgICAgICAgICAge2FjY291bnQuY3VycmVudC5zdWJzdHIoMCwgNCl9Li4ue2FjY291bnQuY3VycmVudC5zdWJzdHIoLTQsIDQpfVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvaGVhZGVyPlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJGYUV0aGVyZXVtIiwiRmFDaXJjbGUiLCJIZWFkZXIiLCJjb25uZWN0IiwiYWNjb3VudCIsImRpc2Nvbm5lY3QiLCJoZWFkZXIiLCJjbGFzc05hbWUiLCJkaXYiLCJoMSIsImJ1dHRvbiIsInNwYW4iLCJjdXJyZW50IiwidW5kZWZpbmVkIiwib25DbGljayIsInN1YnN0ciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./public/src/components/header.tsx\n"));

/***/ })

});