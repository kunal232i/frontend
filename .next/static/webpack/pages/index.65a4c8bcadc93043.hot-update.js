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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/ai */ \"./node_modules/react-icons/ai/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\nfunction MintModal() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), file = ref[0], setFile = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), songName = ref1[0], setSongName = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), artistName = ref2[0], setArtistName = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), price = ref3[0], setPrice = ref3[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col fixed left-1/2 translate-x-[-50%] top-32 overflow-auto align-center bg-white border rounded-lg w-11/12 md:w-1/2 lg:w-4/12 m-auto py-4 px-8\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_2__.AiOutlineClose, {\n                className: \"f\"\n            }, void 0, false, {\n                fileName: \"/Users/mikestarr/Development/hackathons/ethglobal-metabolism/public/src/components/MintModal.tsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"font-bold mb-4\",\n                children: \"Mint Song NFT\"\n            }, void 0, false, {\n                fileName: \"/Users/mikestarr/Development/hackathons/ethglobal-metabolism/public/src/components/MintModal.tsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                className: \"font-medium my-4\",\n                children: \"Upload Song\"\n            }, void 0, false, {\n                fileName: \"/Users/mikestarr/Development/hackathons/ethglobal-metabolism/public/src/components/MintModal.tsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex border-2 border-dashed py-6 place-content-center text-center text-gray-600\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"text-[#026eed] font-medium\",\n                            children: \"Upload Song\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mikestarr/Development/hackathons/ethglobal-metabolism/public/src/components/MintModal.tsx\",\n                            lineNumber: 18,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"/Users/mikestarr/Development/hackathons/ethglobal-metabolism/public/src/components/MintModal.tsx\",\n                            lineNumber: 19,\n                            columnNumber: 11\n                        }, this),\n                        \"Song should be mp3, \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"/Users/mikestarr/Development/hackathons/ethglobal-metabolism/public/src/components/MintModal.tsx\",\n                            lineNumber: 20,\n                            columnNumber: 31\n                        }, this),\n                        \"wav format\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/mikestarr/Development/hackathons/ethglobal-metabolism/public/src/components/MintModal.tsx\",\n                    lineNumber: 17,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/mikestarr/Development/hackathons/ethglobal-metabolism/public/src/components/MintModal.tsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: null,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"font-medium my-4\",\n                                children: \"Song Name\"\n                            }, void 0, false, {\n                                fileName: \"/Users/mikestarr/Development/hackathons/ethglobal-metabolism/public/src/components/MintModal.tsx\",\n                                lineNumber: 26,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                value: songName,\n                                onChange: function(e) {\n                                    return setSongName(e.target.value);\n                                },\n                                className: \"border w-full rounded py-2 px-4\"\n                            }, void 0, false, {\n                                fileName: \"/Users/mikestarr/Development/hackathons/ethglobal-metabolism/public/src/components/MintModal.tsx\",\n                                lineNumber: 27,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/mikestarr/Development/hackathons/ethglobal-metabolism/public/src/components/MintModal.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"font-medium my-4\",\n                                children: \"Artist Name\"\n                            }, void 0, false, {\n                                fileName: \"/Users/mikestarr/Development/hackathons/ethglobal-metabolism/public/src/components/MintModal.tsx\",\n                                lineNumber: 35,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                value: artistName,\n                                onChange: function(e) {\n                                    return setArtistName(e.target.value);\n                                },\n                                className: \"border w-full rounded py-2 px-4\"\n                            }, void 0, false, {\n                                fileName: \"/Users/mikestarr/Development/hackathons/ethglobal-metabolism/public/src/components/MintModal.tsx\",\n                                lineNumber: 36,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/mikestarr/Development/hackathons/ethglobal-metabolism/public/src/components/MintModal.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"font-medium mt-4\",\n                                children: \"Ad space price\"\n                            }, void 0, false, {\n                                fileName: \"/Users/mikestarr/Development/hackathons/ethglobal-metabolism/public/src/components/MintModal.tsx\",\n                                lineNumber: 44,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"font-extralight mb-2\",\n                                children: \"All values are in ETH\"\n                            }, void 0, false, {\n                                fileName: \"/Users/mikestarr/Development/hackathons/ethglobal-metabolism/public/src/components/MintModal.tsx\",\n                                lineNumber: 45,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                value: songName,\n                                onChange: function(e) {\n                                    return setSongName(e.target.value);\n                                },\n                                className: \"border w-full rounded py-2 px-4\"\n                            }, void 0, false, {\n                                fileName: \"/Users/mikestarr/Development/hackathons/ethglobal-metabolism/public/src/components/MintModal.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/mikestarr/Development/hackathons/ethglobal-metabolism/public/src/components/MintModal.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"submit\",\n                            value: \"Mint Song NFT\",\n                            className: \"inline-block px-11 p-4 w-full bg-[#ff7e3a] text-white font-medium text-md leading-tight uppercase rounded-full hover:bg-[#ff8543] focus:outline-none focus:ring-0 transition duration-150 ease-in-out mt-8 mb-2\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mikestarr/Development/hackathons/ethglobal-metabolism/public/src/components/MintModal.tsx\",\n                            lineNumber: 54,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/mikestarr/Development/hackathons/ethglobal-metabolism/public/src/components/MintModal.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mikestarr/Development/hackathons/ethglobal-metabolism/public/src/components/MintModal.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-sm text-center text-gray-500\",\n                children: \"Charges not included\"\n            }, void 0, false, {\n                fileName: \"/Users/mikestarr/Development/hackathons/ethglobal-metabolism/public/src/components/MintModal.tsx\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mikestarr/Development/hackathons/ethglobal-metabolism/public/src/components/MintModal.tsx\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, this);\n}\n_s(MintModal, \"CT3f3t+i/xpPGLUDuIL2NrjZd+8=\");\n_c = MintModal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MintModal);\nvar _c;\n$RefreshReg$(_c, \"MintModal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VyxDQUFDbUIsQ0FBQyxDQUFDQyxNQUFNLENBQUNILEtBQUssQ0FBQztpQ0FBQTtnQ0FDNUNYLFNBQVMsRUFBQyxpQ0FBaUM7Ozs7O29DQUMzQzs7Ozs7OzRCQUNJO2tDQUNSLDhEQUFDUSxPQUFLO2tDQUNKLDRFQUFDQyxPQUFLOzRCQUNKQyxJQUFJLEVBQUMsUUFBUTs0QkFDYkMsS0FBSyxFQUFDLGVBQWU7NEJBQ3JCWCxTQUFTLEVBQUMsaU5BQWlOOzs7OztnQ0FDM047Ozs7OzRCQUNJOzs7Ozs7b0JBQ0g7MEJBQ1AsOERBQUNHLEdBQUM7Z0JBQUNILFNBQVMsRUFBQyxtQ0FBbUM7MEJBQUMsc0JBQW9COzs7OztvQkFBSTs7Ozs7O1lBQ3JFLENBQ047Q0FDSDtHQTVEUVYsU0FBUztBQUFUQSxLQUFBQSxTQUFTO0FBOERsQiwrREFBZUEsU0FBUyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3B1YmxpYy9zcmMvY29tcG9uZW50cy9NaW50TW9kYWwudHN4PzJmMmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBBaU91dGxpbmVDbG9zZSB9IGZyb20gXCJyZWFjdC1pY29ucy9haVwiO1xuXG5mdW5jdGlvbiBNaW50TW9kYWwoKSB7XG4gIGNvbnN0IFtmaWxlLCBzZXRGaWxlXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtzb25nTmFtZSwgc2V0U29uZ05hbWVdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW2FydGlzdE5hbWUsIHNldEFydGlzdE5hbWVdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW3ByaWNlLCBzZXRQcmljZV0gPSB1c2VTdGF0ZSgpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGZpeGVkIGxlZnQtMS8yIHRyYW5zbGF0ZS14LVstNTAlXSB0b3AtMzIgb3ZlcmZsb3ctYXV0byBhbGlnbi1jZW50ZXIgYmctd2hpdGUgYm9yZGVyIHJvdW5kZWQtbGcgdy0xMS8xMiBtZDp3LTEvMiBsZzp3LTQvMTIgbS1hdXRvIHB5LTQgcHgtOFwiPlxuICAgICAgPEFpT3V0bGluZUNsb3NlIGNsYXNzTmFtZT1cImZcIiAvPlxuICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtYm9sZCBtYi00XCI+TWludCBTb25nIE5GVDwvaDM+XG4gICAgICA8aDUgY2xhc3NOYW1lPVwiZm9udC1tZWRpdW0gbXktNFwiPlVwbG9hZCBTb25nPC9oNT5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGJvcmRlci0yIGJvcmRlci1kYXNoZWQgcHktNiBwbGFjZS1jb250ZW50LWNlbnRlciB0ZXh0LWNlbnRlciB0ZXh0LWdyYXktNjAwXCI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWyMwMjZlZWRdIGZvbnQtbWVkaXVtXCI+VXBsb2FkIFNvbmc8L3NwYW4+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgU29uZyBzaG91bGQgYmUgbXAzLCA8YnIgLz5cbiAgICAgICAgICB3YXYgZm9ybWF0XG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGZvcm0gb25TdWJtaXQ9e251bGx9PlxuICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1tZWRpdW0gbXktNFwiPlNvbmcgTmFtZTwvcD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHZhbHVlPXtzb25nTmFtZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U29uZ05hbWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyIHctZnVsbCByb3VuZGVkIHB5LTIgcHgtNFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGxhYmVsPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtIG15LTRcIj5BcnRpc3QgTmFtZTwvcD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHZhbHVlPXthcnRpc3ROYW1lfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRBcnRpc3ROYW1lKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlciB3LWZ1bGwgcm91bmRlZCBweS0yIHB4LTRcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxsYWJlbD5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LW1lZGl1bSBtdC00XCI+QWQgc3BhY2UgcHJpY2U8L3A+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1leHRyYWxpZ2h0IG1iLTJcIj5BbGwgdmFsdWVzIGFyZSBpbiBFVEg8L3A+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICB2YWx1ZT17c29uZ05hbWV9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNvbmdOYW1lKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlciB3LWZ1bGwgcm91bmRlZCBweS0yIHB4LTRcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxsYWJlbD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgdmFsdWU9XCJNaW50IFNvbmcgTkZUXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImlubGluZS1ibG9jayBweC0xMSBwLTQgdy1mdWxsIGJnLVsjZmY3ZTNhXSB0ZXh0LXdoaXRlIGZvbnQtbWVkaXVtIHRleHQtbWQgbGVhZGluZy10aWdodCB1cHBlcmNhc2Ugcm91bmRlZC1mdWxsIGhvdmVyOmJnLVsjZmY4NTQzXSBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0wIHRyYW5zaXRpb24gZHVyYXRpb24tMTUwIGVhc2UtaW4tb3V0IG10LTggbWItMlwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgIDwvZm9ybT5cbiAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1jZW50ZXIgdGV4dC1ncmF5LTUwMFwiPkNoYXJnZXMgbm90IGluY2x1ZGVkPC9wPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNaW50TW9kYWw7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkFpT3V0bGluZUNsb3NlIiwiTWludE1vZGFsIiwiZmlsZSIsInNldEZpbGUiLCJzb25nTmFtZSIsInNldFNvbmdOYW1lIiwiYXJ0aXN0TmFtZSIsInNldEFydGlzdE5hbWUiLCJwcmljZSIsInNldFByaWNlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDMiLCJoNSIsInAiLCJzcGFuIiwiYnIiLCJmb3JtIiwib25TdWJtaXQiLCJsYWJlbCIsImlucHV0IiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./public/src/components/MintModal.tsx\n"));

/***/ })

});