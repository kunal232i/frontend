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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n\n\n\nfunction Header(param) {\n    var connect = param.connect, account = param.account, disconnect = param.disconnect;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"flex flex-row justify-between mx-2 md:mx-10 mt-2 mb-10\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-3xl font-bold m-3\",\n                    children: \"Web3 Muzik\"\n                }, void 0, false, {\n                    fileName: \"/Users/mikestarr/Development/hackathons/ethglobal-metabolism/public/src/components/header.tsx\",\n                    lineNumber: 9,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/mikestarr/Development/hackathons/ethglobal-metabolism/public/src/components/header.tsx\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"inline-block px-11 py-2 border-2 bg-white text-[#FF7E39] font-medium text-xs leading-tight uppercase rounded-full mt-4 mb-2\",\n                    children: \"Ad Marketplace\"\n                }, void 0, false, {\n                    fileName: \"/Users/mikestarr/Development/hackathons/ethglobal-metabolism/public/src/components/header.tsx\",\n                    lineNumber: 14,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/mikestarr/Development/hackathons/ethglobal-metabolism/public/src/components/header.tsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-row px-4 py-2 border-2 bg-white text-black font-medium text-xs leading-tight uppercase rounded-full mt-4 mb-2 mr-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaEthereum, {\n                                className: \"flex align-center justify-center border w-\"\n                            }, void 0, false, {\n                                fileName: \"/Users/mikestarr/Development/hackathons/ethglobal-metabolism/public/src/components/header.tsx\",\n                                lineNumber: 22,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"flex ml-1 font-medium border\",\n                                children: \"Rinkeby\"\n                            }, void 0, false, {\n                                fileName: \"/Users/mikestarr/Development/hackathons/ethglobal-metabolism/public/src/components/header.tsx\",\n                                lineNumber: 23,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/mikestarr/Development/hackathons/ethglobal-metabolism/public/src/components/header.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, this),\n                    account.current == undefined || account.current === null || account.current === \"\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: connect,\n                        className: \"inline-block px-4 py-2 border-2 bg-white text-black font-medium text-xs leading-tight uppercase rounded-full mt-4 mb-2\",\n                        children: \"Connect\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mikestarr/Development/hackathons/ethglobal-metabolism/public/src/components/header.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 11\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: disconnect,\n                        className: \"flex flex-col align-center justify-center border w-fit py-0 px-3 m-2 rounded-3xl\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"font-normal text-xs flex align-center\",\n                            children: [\n                                account.current.substr(0, 11),\n                                \"....\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/mikestarr/Development/hackathons/ethglobal-metabolism/public/src/components/header.tsx\",\n                            lineNumber: 40,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/mikestarr/Development/hackathons/ethglobal-metabolism/public/src/components/header.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mikestarr/Development/hackathons/ethglobal-metabolism/public/src/components/header.tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mikestarr/Development/hackathons/ethglobal-metabolism/public/src/components/header.tsx\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvc3JjL2NvbXBvbmVudHMvaGVhZGVyLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUFzQztBQUNNO0FBRTVDLFNBQVNFLE1BQU0sQ0FBQyxLQUFnQyxFQUFFO1FBQWhDQyxPQUFPLEdBQVQsS0FBZ0MsQ0FBOUJBLE9BQU8sRUFBRUMsT0FBTyxHQUFsQixLQUFnQyxDQUFyQkEsT0FBTyxFQUFFQyxVQUFVLEdBQTlCLEtBQWdDLENBQVpBLFVBQVU7SUFDNUMscUJBQ0UsOERBQUNDLFFBQU07UUFBQ0MsU0FBUyxFQUFDLHdEQUF3RDs7MEJBRXhFLDhEQUFDQyxLQUFHO2dCQUFDRCxTQUFTLEVBQUMsRUFBRTswQkFDZiw0RUFBQ0UsSUFBRTtvQkFBQ0YsU0FBUyxFQUFDLHdCQUF3Qjs4QkFBQyxZQUFVOzs7Ozt3QkFBSzs7Ozs7b0JBQ2xEOzBCQUVOLDhEQUFDQyxLQUFHO2dCQUFDRCxTQUFTLEVBQUMsOEJBQThCOzBCQUUzQyw0RUFBQ0csUUFBTTtvQkFBQ0gsU0FBUyxFQUFDLDZIQUE2SDs4QkFBQyxnQkFFaEo7Ozs7O3dCQUFTOzs7OztvQkFDTDswQkFFTiw4REFBQ0MsS0FBRztnQkFBQ0QsU0FBUyxFQUFDLGVBQWU7O2tDQUU1Qiw4REFBQ0MsS0FBRzt3QkFBQ0QsU0FBUyxFQUFDLDhIQUE4SDs7MENBQzNJLDhEQUFDTixzREFBVTtnQ0FBQ00sU0FBUyxFQUFDLDRDQUE0Qzs7Ozs7b0NBQUc7MENBQ3JFLDhEQUFDSSxNQUFJO2dDQUFDSixTQUFTLEVBQUMsOEJBQThCOzBDQUFDLFNBQU87Ozs7O29DQUFPOzs7Ozs7NEJBQ3pEO29CQUNMSCxPQUFPLENBQUNRLE9BQU8sSUFBSUMsU0FBUyxJQUM3QlQsT0FBTyxDQUFDUSxPQUFPLEtBQUssSUFBSSxJQUN4QlIsT0FBTyxDQUFDUSxPQUFPLEtBQUssRUFBRSxpQkFDcEIsOERBQUNGLFFBQU07d0JBQ0xJLE9BQU8sRUFBRVgsT0FBTzt3QkFDaEJJLFNBQVMsRUFBQyx3SEFBd0g7a0NBQ25JLFNBRUQ7Ozs7OzRCQUFTLGlCQUVULDhEQUFDRyxRQUFNO3dCQUNMSSxPQUFPLEVBQUVULFVBQVU7d0JBQ25CRSxTQUFTLEVBQUMsa0ZBQWtGO2tDQUc1Riw0RUFBQ0ksTUFBSTs0QkFBQ0osU0FBUyxFQUFDLHVDQUF1Qzs7Z0NBQ3BESCxPQUFPLENBQUNRLE9BQU8sQ0FBQ0csTUFBTSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUM7Z0NBQUMsTUFDakM7Ozs7OztnQ0FBTzs7Ozs7NEJBQ0E7Ozs7OztvQkFFUDs7Ozs7O1lBQ0MsQ0FDVDtDQUNIO0FBNUNRYixLQUFBQSxNQUFNO0FBOENmLCtEQUFlQSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL3NyYy9jb21wb25lbnRzL2hlYWRlci50c3g/MzBmNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGYUV0aGVyZXVtIH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XG5cbmZ1bmN0aW9uIEhlYWRlcih7IGNvbm5lY3QsIGFjY291bnQsIGRpc2Nvbm5lY3QgfSkge1xuICByZXR1cm4gKFxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gbXgtMiBtZDpteC0xMCBtdC0yIG1iLTEwXCI+XG4gICAgICB7LyogaGVhZGxpbmUgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkIG0tM1wiPldlYjMgTXV6aWs8L2gxPlxuICAgICAgPC9kaXY+XG4gICAgICB7LyogQWQgbWFya2V0cGxhY2UgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgey8qIExJTksgVE8gQURWRVJUSVNFTUVOVCBQQUdFICovfVxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImlubGluZS1ibG9jayBweC0xMSBweS0yIGJvcmRlci0yIGJnLXdoaXRlIHRleHQtWyNGRjdFMzldIGZvbnQtbWVkaXVtIHRleHQteHMgbGVhZGluZy10aWdodCB1cHBlcmNhc2Ugcm91bmRlZC1mdWxsIG10LTQgbWItMlwiPlxuICAgICAgICAgIEFkIE1hcmtldHBsYWNlXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICB7LyogRVRIIEJ1dHRvbnMgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3dcIj5cbiAgICAgICAgey8qIG5ldHdvcmsgYnRuICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgcHgtNCBweS0yIGJvcmRlci0yIGJnLXdoaXRlIHRleHQtYmxhY2sgZm9udC1tZWRpdW0gdGV4dC14cyBsZWFkaW5nLXRpZ2h0IHVwcGVyY2FzZSByb3VuZGVkLWZ1bGwgbXQtNCBtYi0yIG1yLTRcIj5cbiAgICAgICAgICA8RmFFdGhlcmV1bSBjbGFzc05hbWU9XCJmbGV4IGFsaWduLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBib3JkZXIgdy1cIiAvPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsZXggbWwtMSBmb250LW1lZGl1bSBib3JkZXJcIj5SaW5rZWJ5PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge2FjY291bnQuY3VycmVudCA9PSB1bmRlZmluZWQgfHxcbiAgICAgICAgYWNjb3VudC5jdXJyZW50ID09PSBudWxsIHx8XG4gICAgICAgIGFjY291bnQuY3VycmVudCA9PT0gXCJcIiA/IChcbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXtjb25uZWN0fVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIHB4LTQgcHktMiBib3JkZXItMiBiZy13aGl0ZSB0ZXh0LWJsYWNrIGZvbnQtbWVkaXVtIHRleHQteHMgbGVhZGluZy10aWdodCB1cHBlcmNhc2Ugcm91bmRlZC1mdWxsIG10LTQgbWItMlwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgQ29ubmVjdFxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9e2Rpc2Nvbm5lY3R9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGFsaWduLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBib3JkZXIgdy1maXQgcHktMCBweC0zIG0tMiByb3VuZGVkLTN4bFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgey8qIERpc2Nvbm5lY3QqL31cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtbm9ybWFsIHRleHQteHMgZmxleCBhbGlnbi1jZW50ZXJcIj5cbiAgICAgICAgICAgICAge2FjY291bnQuY3VycmVudC5zdWJzdHIoMCwgMTEpfS4uLi5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvaGVhZGVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJGYUV0aGVyZXVtIiwiSGVhZGVyIiwiY29ubmVjdCIsImFjY291bnQiLCJkaXNjb25uZWN0IiwiaGVhZGVyIiwiY2xhc3NOYW1lIiwiZGl2IiwiaDEiLCJidXR0b24iLCJzcGFuIiwiY3VycmVudCIsInVuZGVmaW5lZCIsIm9uQ2xpY2siLCJzdWJzdHIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./public/src/components/header.tsx\n"));

/***/ })

});