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

/***/ "./public/src/components/MintModal.tsx":
/*!*********************************************!*\
  !*** ./public/src/components/MintModal.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction MintModal() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), file = ref[0], setFile = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), songName = ref1[0], setSongName = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), artistName = ref2[0], setArtistName = ref2[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col bg-white border rounded w-1/2 m-auto py-6 px-8\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"font-bold mb-6\",\n                children: \"Mint Song NFT\"\n            }, void 0, false, {\n                fileName: \"/Users/mikestarr/Development/hackathons/ethglobal-metabolism/public/src/components/MintModal.tsx\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                className: \"font-medium my-4\",\n                children: \"Upload Song\"\n            }, void 0, false, {\n                fileName: \"/Users/mikestarr/Development/hackathons/ethglobal-metabolism/public/src/components/MintModal.tsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex border-2 border-dashed py-6 place-content-center text-center text-gray-600\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"text-[#026eed] font-medium\",\n                            children: \"Upload Song\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mikestarr/Development/hackathons/ethglobal-metabolism/public/src/components/MintModal.tsx\",\n                            lineNumber: 16,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"/Users/mikestarr/Development/hackathons/ethglobal-metabolism/public/src/components/MintModal.tsx\",\n                            lineNumber: 17,\n                            columnNumber: 11\n                        }, this),\n                        \"Song should be mp3, \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"/Users/mikestarr/Development/hackathons/ethglobal-metabolism/public/src/components/MintModal.tsx\",\n                            lineNumber: 18,\n                            columnNumber: 31\n                        }, this),\n                        \"wav format\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/mikestarr/Development/hackathons/ethglobal-metabolism/public/src/components/MintModal.tsx\",\n                    lineNumber: 15,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/mikestarr/Development/hackathons/ethglobal-metabolism/public/src/components/MintModal.tsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: null,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"font-medium my-4\",\n                                children: \"Song Name\"\n                            }, void 0, false, {\n                                fileName: \"/Users/mikestarr/Development/hackathons/ethglobal-metabolism/public/src/components/MintModal.tsx\",\n                                lineNumber: 24,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                value: songName,\n                                onChange: function(e) {\n                                    return setSongName(e.target.value);\n                                },\n                                className: \"border w-full rounded py-2 px-4\"\n                            }, void 0, false, {\n                                fileName: \"/Users/mikestarr/Development/hackathons/ethglobal-metabolism/public/src/components/MintModal.tsx\",\n                                lineNumber: 25,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/mikestarr/Development/hackathons/ethglobal-metabolism/public/src/components/MintModal.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"font-medium my-4\",\n                                children: \"Artist Name\"\n                            }, void 0, false, {\n                                fileName: \"/Users/mikestarr/Development/hackathons/ethglobal-metabolism/public/src/components/MintModal.tsx\",\n                                lineNumber: 33,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                value: artistName,\n                                onChange: function(e) {\n                                    return setArtistName(e.target.value);\n                                },\n                                className: \"border w-full rounded py-2 px-4\"\n                            }, void 0, false, {\n                                fileName: \"/Users/mikestarr/Development/hackathons/ethglobal-metabolism/public/src/components/MintModal.tsx\",\n                                lineNumber: 34,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/mikestarr/Development/hackathons/ethglobal-metabolism/public/src/components/MintModal.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"font-medium mt-4\",\n                                children: \"Ad space price\"\n                            }, void 0, false, {\n                                fileName: \"/Users/mikestarr/Development/hackathons/ethglobal-metabolism/public/src/components/MintModal.tsx\",\n                                lineNumber: 42,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"font-extralight mb-4\",\n                                children: \"All values are in ETH\"\n                            }, void 0, false, {\n                                fileName: \"/Users/mikestarr/Development/hackathons/ethglobal-metabolism/public/src/components/MintModal.tsx\",\n                                lineNumber: 43,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                value: songName,\n                                onChange: function(e) {\n                                    return setSongName(e.target.value);\n                                },\n                                className: \"border w-full rounded py-2 px-4\"\n                            }, void 0, false, {\n                                fileName: \"/Users/mikestarr/Development/hackathons/ethglobal-metabolism/public/src/components/MintModal.tsx\",\n                                lineNumber: 44,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/mikestarr/Development/hackathons/ethglobal-metabolism/public/src/components/MintModal.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mikestarr/Development/hackathons/ethglobal-metabolism/public/src/components/MintModal.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mikestarr/Development/hackathons/ethglobal-metabolism/public/src/components/MintModal.tsx\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n}\n_s(MintModal, \"N0FFqn33P6D3Jv6HNL1G3Td1F+w=\");\n_c = MintModal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MintModal);\nvar _c;\n$RefreshReg$(_c, \"MintModal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvc3JjL2NvbXBvbmVudHMvTWludE1vZGFsLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUF3QztBQUV4QyxTQUFTRSxTQUFTLEdBQUc7O0lBQ25CLElBQXdCRCxHQUFVLEdBQVZBLCtDQUFRLEVBQUUsRUFBM0JFLElBQUksR0FBYUYsR0FBVSxHQUF2QixFQUFFRyxPQUFPLEdBQUlILEdBQVUsR0FBZDtJQUNwQixJQUFnQ0EsSUFBVSxHQUFWQSwrQ0FBUSxFQUFFLEVBQW5DSSxRQUFRLEdBQWlCSixJQUFVLEdBQTNCLEVBQUVLLFdBQVcsR0FBSUwsSUFBVSxHQUFkO0lBQzVCLElBQW9DQSxJQUFVLEdBQVZBLCtDQUFRLEVBQUUsRUFBdkNNLFVBQVUsR0FBbUJOLElBQVUsR0FBN0IsRUFBRU8sYUFBYSxHQUFJUCxJQUFVLEdBQWQ7SUFFaEMscUJBQ0UsOERBQUNRLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLDhEQUE4RDs7MEJBQzNFLDhEQUFDQyxJQUFFO2dCQUFDRCxTQUFTLEVBQUMsZ0JBQWdCOzBCQUFDLGVBQWE7Ozs7O29CQUFLOzBCQUVqRCw4REFBQ0UsSUFBRTtnQkFBQ0YsU0FBUyxFQUFDLGtCQUFrQjswQkFBQyxhQUFXOzs7OztvQkFBSzswQkFFakQsOERBQUNELEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyxpRkFBaUY7MEJBQzlGLDRFQUFDRyxHQUFDOztzQ0FDQSw4REFBQ0MsTUFBSTs0QkFBQ0osU0FBUyxFQUFDLDRCQUE0QjtzQ0FBQyxhQUFXOzs7OztnQ0FBTztzQ0FDL0QsOERBQUNLLElBQUU7Ozs7Z0NBQUc7d0JBQUEsc0JBQ2M7c0NBQUEsOERBQUNBLElBQUU7Ozs7Z0NBQUc7d0JBQUEsWUFFNUI7Ozs7Ozt3QkFBSTs7Ozs7b0JBQ0E7MEJBQ04sOERBQUNDLE1BQUk7Z0JBQUNDLFFBQVEsRUFBRSxJQUFJOztrQ0FDbEIsOERBQUNDLE9BQUs7OzBDQUNKLDhEQUFDTCxHQUFDO2dDQUFDSCxTQUFTLEVBQUMsa0JBQWtCOzBDQUFDLFdBQVM7Ozs7O29DQUFJOzBDQUM3Qyw4REFBQ1MsT0FBSztnQ0FDSkMsSUFBSSxFQUFDLE1BQU07Z0NBQ1hDLEtBQUssRUFBRWhCLFFBQVE7Z0NBQ2ZpQixRQUFRLEVBQUUsU0FBQ0MsQ0FBQzsyQ0FBS2pCLFdBQVcsQ0FBQ2lCLENBQUMsQ0FBQ0MsTUFBTSxDQUFDSCxLQUFLLENBQUM7aUNBQUE7Z0NBQzVDWCxTQUFTLEVBQUMsaUNBQWlDOzs7OztvQ0FDM0M7Ozs7Ozs0QkFDSTtrQ0FDUiw4REFBQ1EsT0FBSzs7MENBQ0osOERBQUNMLEdBQUM7Z0NBQUNILFNBQVMsRUFBQyxrQkFBa0I7MENBQUMsYUFBVzs7Ozs7b0NBQUk7MENBQy9DLDhEQUFDUyxPQUFLO2dDQUNKQyxJQUFJLEVBQUMsTUFBTTtnQ0FDWEMsS0FBSyxFQUFFZCxVQUFVO2dDQUNqQmUsUUFBUSxFQUFFLFNBQUNDLENBQUM7MkNBQUtmLGFBQWEsQ0FBQ2UsQ0FBQyxDQUFDQyxNQUFNLENBQUNILEtBQUssQ0FBQztpQ0FBQTtnQ0FDOUNYLFNBQVMsRUFBQyxpQ0FBaUM7Ozs7O29DQUMzQzs7Ozs7OzRCQUNJO2tDQUNSLDhEQUFDUSxPQUFLOzswQ0FDSiw4REFBQ0wsR0FBQztnQ0FBQ0gsU0FBUyxFQUFDLGtCQUFrQjswQ0FBQyxnQkFBYzs7Ozs7b0NBQUk7MENBQ2xELDhEQUFDRyxHQUFDO2dDQUFDSCxTQUFTLEVBQUMsc0JBQXNCOzBDQUFDLHVCQUFxQjs7Ozs7b0NBQUk7MENBQzdELDhEQUFDUyxPQUFLO2dDQUNKQyxJQUFJLEVBQUMsTUFBTTtnQ0FDWEMsS0FBSyxFQUFFaEIsUUFBUTtnQ0FDZmlCLFFBQVEsRUFBRSxTQUFDQyxDQUFDOzJDQUFLakIsV0FBVyxDQUFDaUIsQ0FBQyxDQUFDQyxNQUFNLENBQUNILEtBQUssQ0FBQztpQ0FBQTtnQ0FDNUNYLFNBQVMsRUFBQyxpQ0FBaUM7Ozs7O29DQUMzQzs7Ozs7OzRCQUNJOzs7Ozs7b0JBQ0g7Ozs7OztZQUNILENBQ047Q0FDSDtHQW5EUVIsU0FBUztBQUFUQSxLQUFBQSxTQUFTO0FBcURsQiwrREFBZUEsU0FBUyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3B1YmxpYy9zcmMvY29tcG9uZW50cy9NaW50TW9kYWwudHN4PzJmMmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmZ1bmN0aW9uIE1pbnRNb2RhbCgpIHtcbiAgY29uc3QgW2ZpbGUsIHNldEZpbGVdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW3NvbmdOYW1lLCBzZXRTb25nTmFtZV0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbYXJ0aXN0TmFtZSwgc2V0QXJ0aXN0TmFtZV0gPSB1c2VTdGF0ZSgpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGJnLXdoaXRlIGJvcmRlciByb3VuZGVkIHctMS8yIG0tYXV0byBweS02IHB4LThcIj5cbiAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LWJvbGQgbWItNlwiPk1pbnQgU29uZyBORlQ8L2gzPlxuXG4gICAgICA8aDUgY2xhc3NOYW1lPVwiZm9udC1tZWRpdW0gbXktNFwiPlVwbG9hZCBTb25nPC9oNT5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGJvcmRlci0yIGJvcmRlci1kYXNoZWQgcHktNiBwbGFjZS1jb250ZW50LWNlbnRlciB0ZXh0LWNlbnRlciB0ZXh0LWdyYXktNjAwXCI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWyMwMjZlZWRdIGZvbnQtbWVkaXVtXCI+VXBsb2FkIFNvbmc8L3NwYW4+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgU29uZyBzaG91bGQgYmUgbXAzLCA8YnIgLz5cbiAgICAgICAgICB3YXYgZm9ybWF0XG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGZvcm0gb25TdWJtaXQ9e251bGx9PlxuICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1tZWRpdW0gbXktNFwiPlNvbmcgTmFtZTwvcD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHZhbHVlPXtzb25nTmFtZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U29uZ05hbWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyIHctZnVsbCByb3VuZGVkIHB5LTIgcHgtNFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGxhYmVsPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtIG15LTRcIj5BcnRpc3QgTmFtZTwvcD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHZhbHVlPXthcnRpc3ROYW1lfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRBcnRpc3ROYW1lKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlciB3LWZ1bGwgcm91bmRlZCBweS0yIHB4LTRcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxsYWJlbD5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LW1lZGl1bSBtdC00XCI+QWQgc3BhY2UgcHJpY2U8L3A+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1leHRyYWxpZ2h0IG1iLTRcIj5BbGwgdmFsdWVzIGFyZSBpbiBFVEg8L3A+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICB2YWx1ZT17c29uZ05hbWV9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNvbmdOYW1lKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlciB3LWZ1bGwgcm91bmRlZCBweS0yIHB4LTRcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1pbnRNb2RhbDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiTWludE1vZGFsIiwiZmlsZSIsInNldEZpbGUiLCJzb25nTmFtZSIsInNldFNvbmdOYW1lIiwiYXJ0aXN0TmFtZSIsInNldEFydGlzdE5hbWUiLCJkaXYiLCJjbGFzc05hbWUiLCJoMyIsImg1IiwicCIsInNwYW4iLCJiciIsImZvcm0iLCJvblN1Ym1pdCIsImxhYmVsIiwiaW5wdXQiLCJ0eXBlIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./public/src/components/MintModal.tsx\n"));

/***/ })

});