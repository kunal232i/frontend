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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n\n\n\nfunction Header(param) {\n    var connect = param.connect, account = param.account, disconnect = param.disconnect;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n            className: \"flex flex-row justify-between mx-2 md:mx-10 mt-2 mb-10\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-3xl font-bold m-3\",\n                        children: \"Web3 Muzik\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mikestarr/Development/hackathons/ethglobal-metabolism/public/src/components/header.tsx\",\n                        lineNumber: 10,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/mikestarr/Development/hackathons/ethglobal-metabolism/public/src/components/header.tsx\",\n                    lineNumber: 9,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col justify-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"inline-block px-11 py-2 border-2 bg-white text-[#FF7E39] font-medium text-xs leading-tight uppercase rounded-full mt-4 mb-2\",\n                        children: \"Ad Marketplace\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mikestarr/Development/hackathons/ethglobal-metabolism/public/src/components/header.tsx\",\n                        lineNumber: 15,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/mikestarr/Development/hackathons/ethglobal-metabolism/public/src/components/header.tsx\",\n                    lineNumber: 13,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-row\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-row items-center px-4 py-1 border-2 bg-white text-black font-medium text-xs leading-tight uppercase rounded-full mt-4 mb-2 mr-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaEthereum, {\n                                    className: \"flex align-center w-[16px] h-[16px]\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mikestarr/Development/hackathons/ethglobal-metabolism/public/src/components/header.tsx\",\n                                    lineNumber: 23,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"flex ml-1 text-base\",\n                                    children: \"Rinkeby\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mikestarr/Development/hackathons/ethglobal-metabolism/public/src/components/header.tsx\",\n                                    lineNumber: 24,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/mikestarr/Development/hackathons/ethglobal-metabolism/public/src/components/header.tsx\",\n                            lineNumber: 22,\n                            columnNumber: 11\n                        }, this),\n                        account.current == undefined || account.current === null || account.current === \"\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: connect,\n                            className: \"flex flex-row items-center px-4 py-1 border-2 bg-white text-black font-medium text-xs leading-tight uppercase rounded-full mt-4 mb-2\",\n                            children: \"Connect\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mikestarr/Development/hackathons/ethglobal-metabolism/public/src/components/header.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 13\n                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: disconnect,\n                            className: \"flex flex-row items-center px-1 py-1 border-2 bg-white text-black font-medium text-xs leading-tight uppercase rounded-full mt-4 mb-2 mr-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: \"0 ETH\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mikestarr/Development/hackathons/ethglobal-metabolism/public/src/components/header.tsx\",\n                                    lineNumber: 40,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"flex flex-row align-center bg-gray-100 rounded-full p-2 ml-1\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaCircle, {\n                                            className: \"text-[#501514] mr-1\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/mikestarr/Development/hackathons/ethglobal-metabolism/public/src/components/header.tsx\",\n                                            lineNumber: 42,\n                                            columnNumber: 17\n                                        }, this),\n                                        account.current.substr(0, 4),\n                                        \"...\",\n                                        account.current.substr(-4, 4)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/mikestarr/Development/hackathons/ethglobal-metabolism/public/src/components/header.tsx\",\n                                    lineNumber: 41,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/mikestarr/Development/hackathons/ethglobal-metabolism/public/src/components/header.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/mikestarr/Development/hackathons/ethglobal-metabolism/public/src/components/header.tsx\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/mikestarr/Development/hackathons/ethglobal-metabolism/public/src/components/header.tsx\",\n            lineNumber: 7,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvc3JjL2NvbXBvbmVudHMvaGVhZGVyLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUFzQztBQUNnQjtBQUV0RCxTQUFTRyxNQUFNLENBQUMsS0FBZ0MsRUFBRTtRQUFoQ0MsT0FBTyxHQUFULEtBQWdDLENBQTlCQSxPQUFPLEVBQUVDLE9BQU8sR0FBbEIsS0FBZ0MsQ0FBckJBLE9BQU8sRUFBRUMsVUFBVSxHQUE5QixLQUFnQyxDQUFaQSxVQUFVO0lBQzVDLHFCQUNFO2tCQUNFLDRFQUFDQyxRQUFNO1lBQUNDLFNBQVMsRUFBQyx3REFBd0Q7OzhCQUV4RSw4REFBQ0MsS0FBRztvQkFBQ0QsU0FBUyxFQUFDLEVBQUU7OEJBQ2YsNEVBQUNFLElBQUU7d0JBQUNGLFNBQVMsRUFBQyx3QkFBd0I7a0NBQUMsWUFBVTs7Ozs7NEJBQUs7Ozs7O3dCQUNsRDs4QkFFTiw4REFBQ0MsS0FBRztvQkFBQ0QsU0FBUyxFQUFDLDhCQUE4Qjs4QkFFM0MsNEVBQUNHLFFBQU07d0JBQUNILFNBQVMsRUFBQyw2SEFBNkg7a0NBQUMsZ0JBRWhKOzs7Ozs0QkFBUzs7Ozs7d0JBQ0w7OEJBRU4sOERBQUNDLEtBQUc7b0JBQUNELFNBQVMsRUFBQyxlQUFlOztzQ0FFNUIsOERBQUNDLEtBQUc7NEJBQUNELFNBQVMsRUFBQywySUFBMkk7OzhDQUN4Siw4REFBQ1Asc0RBQVU7b0NBQUNPLFNBQVMsRUFBQyxxQ0FBc0M7Ozs7O3dDQUFHOzhDQUMvRCw4REFBQ0ksTUFBSTtvQ0FBQ0osU0FBUyxFQUFDLHFCQUFxQjs4Q0FBQyxTQUFPOzs7Ozt3Q0FBTzs7Ozs7O2dDQUNoRDt3QkFDTEgsT0FBTyxDQUFDUSxPQUFPLElBQUlDLFNBQVMsSUFDN0JULE9BQU8sQ0FBQ1EsT0FBTyxLQUFLLElBQUksSUFDeEJSLE9BQU8sQ0FBQ1EsT0FBTyxLQUFLLEVBQUUsaUJBQ3BCLDhEQUFDRixRQUFNOzRCQUNMSSxPQUFPLEVBQUVYLE9BQU87NEJBQ2hCSSxTQUFTLEVBQUMsc0lBQXNJO3NDQUNqSixTQUVEOzs7OztnQ0FBUyxpQkFFVCw4REFBQ0csUUFBTTs0QkFDTEksT0FBTyxFQUFFVCxVQUFVOzRCQUNuQkUsU0FBUyxFQUFDLDJJQUEySTs7OENBRXJKLDhEQUFDSSxNQUFJOzhDQUFDLE9BQUs7Ozs7O3dDQUFPOzhDQUNsQiw4REFBQ0EsTUFBSTtvQ0FBQ0osU0FBUyxFQUFDLDhEQUE4RDs7c0RBQzVFLDhEQUFDTixvREFBUTs0Q0FBQ00sU0FBUyxFQUFDLHFCQUFxQjs7Ozs7Z0RBQUc7d0NBQzNDSCxPQUFPLENBQUNRLE9BQU8sQ0FBQ0csTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7d0NBQUMsS0FBRzt3Q0FBQ1gsT0FBTyxDQUFDUSxPQUFPLENBQUNHLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7Ozs7Ozt3Q0FDMUQ7Ozs7OztnQ0FDQTs7Ozs7O3dCQUVQOzs7Ozs7Z0JBQ0M7cUJBQ1IsQ0FDSDtDQUNIO0FBL0NRYixLQUFBQSxNQUFNO0FBaURmLCtEQUFlQSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL3NyYy9jb21wb25lbnRzL2hlYWRlci50c3g/MzBmNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGYUV0aGVyZXVtLCBGYUNpcmNsZSB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xuXG5mdW5jdGlvbiBIZWFkZXIoeyBjb25uZWN0LCBhY2NvdW50LCBkaXNjb25uZWN0IH0pIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGp1c3RpZnktYmV0d2VlbiBteC0yIG1kOm14LTEwIG10LTIgbWItMTBcIj5cbiAgICAgICAgey8qIGhlYWRsaW5lICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGQgbS0zXCI+V2ViMyBNdXppazwvaDE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7LyogQWQgbWFya2V0cGxhY2UgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgIHsvKiBMSU5LIFRPIEFEVkVSVElTRU1FTlQgUEFHRSAqL31cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImlubGluZS1ibG9jayBweC0xMSBweS0yIGJvcmRlci0yIGJnLXdoaXRlIHRleHQtWyNGRjdFMzldIGZvbnQtbWVkaXVtIHRleHQteHMgbGVhZGluZy10aWdodCB1cHBlcmNhc2Ugcm91bmRlZC1mdWxsIG10LTQgbWItMlwiPlxuICAgICAgICAgICAgQWQgTWFya2V0cGxhY2VcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHsvKiBFVEggQnV0dG9ucyAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93XCI+XG4gICAgICAgICAgey8qIG5ldHdvcmsgYnRuICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXIgcHgtNCBweS0xIGJvcmRlci0yIGJnLXdoaXRlIHRleHQtYmxhY2sgZm9udC1tZWRpdW0gdGV4dC14cyBsZWFkaW5nLXRpZ2h0IHVwcGVyY2FzZSByb3VuZGVkLWZ1bGwgbXQtNCBtYi0yIG1yLTRcIj5cbiAgICAgICAgICAgIDxGYUV0aGVyZXVtIGNsYXNzTmFtZT1cImZsZXggYWxpZ24tY2VudGVyICB3LVsxNnB4XSBoLVsxNnB4XVwiIC8+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbGV4IG1sLTEgdGV4dC1iYXNlXCI+Umlua2VieTwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7YWNjb3VudC5jdXJyZW50ID09IHVuZGVmaW5lZCB8fFxuICAgICAgICAgIGFjY291bnQuY3VycmVudCA9PT0gbnVsbCB8fFxuICAgICAgICAgIGFjY291bnQuY3VycmVudCA9PT0gXCJcIiA/IChcbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17Y29ubmVjdH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXIgcHgtNCBweS0xIGJvcmRlci0yIGJnLXdoaXRlIHRleHQtYmxhY2sgZm9udC1tZWRpdW0gdGV4dC14cyBsZWFkaW5nLXRpZ2h0IHVwcGVyY2FzZSByb3VuZGVkLWZ1bGwgbXQtNCBtYi0yXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgQ29ubmVjdFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17ZGlzY29ubmVjdH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXIgcHgtMSBweS0xIGJvcmRlci0yIGJnLXdoaXRlIHRleHQtYmxhY2sgZm9udC1tZWRpdW0gdGV4dC14cyBsZWFkaW5nLXRpZ2h0IHVwcGVyY2FzZSByb3VuZGVkLWZ1bGwgbXQtNCBtYi0yIG1yLTRcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8c3Bhbj4wIEVUSDwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBhbGlnbi1jZW50ZXIgYmctZ3JheS0xMDAgcm91bmRlZC1mdWxsIHAtMiBtbC0xXCI+XG4gICAgICAgICAgICAgICAgPEZhQ2lyY2xlIGNsYXNzTmFtZT1cInRleHQtWyM1MDE1MTRdIG1yLTFcIiAvPlxuICAgICAgICAgICAgICAgIHthY2NvdW50LmN1cnJlbnQuc3Vic3RyKDAsIDQpfS4uLnthY2NvdW50LmN1cnJlbnQuc3Vic3RyKC00LCA0KX1cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2hlYWRlcj5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiRmFFdGhlcmV1bSIsIkZhQ2lyY2xlIiwiSGVhZGVyIiwiY29ubmVjdCIsImFjY291bnQiLCJkaXNjb25uZWN0IiwiaGVhZGVyIiwiY2xhc3NOYW1lIiwiZGl2IiwiaDEiLCJidXR0b24iLCJzcGFuIiwiY3VycmVudCIsInVuZGVmaW5lZCIsIm9uQ2xpY2siLCJzdWJzdHIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./public/src/components/header.tsx\n"));

/***/ })

});