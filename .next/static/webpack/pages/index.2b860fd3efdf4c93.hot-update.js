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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction MintModal() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), file = ref[0], setFile = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), songName = ref1[0], setSongName = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), artistName = ref2[0], setArtistName = ref2[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col bg-white border rounded w-1/2 m-auto py-6 px-8\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"font-bold mb-6\",\n                children: \"Mint Song NFT\"\n            }, void 0, false, {\n                fileName: \"/Users/mikestarr/Development/hackathons/ethglobal-metabolism/public/src/components/MintModal.tsx\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                className: \"font-medium my-4\",\n                children: \"Upload Song\"\n            }, void 0, false, {\n                fileName: \"/Users/mikestarr/Development/hackathons/ethglobal-metabolism/public/src/components/MintModal.tsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex border-2 border-dashed py-6 place-content-center text-center text-gray-600\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"text-[#026eed] font-medium\",\n                            children: \"Upload Song\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mikestarr/Development/hackathons/ethglobal-metabolism/public/src/components/MintModal.tsx\",\n                            lineNumber: 16,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"/Users/mikestarr/Development/hackathons/ethglobal-metabolism/public/src/components/MintModal.tsx\",\n                            lineNumber: 17,\n                            columnNumber: 11\n                        }, this),\n                        \"Song should be mp3, \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"/Users/mikestarr/Development/hackathons/ethglobal-metabolism/public/src/components/MintModal.tsx\",\n                            lineNumber: 18,\n                            columnNumber: 31\n                        }, this),\n                        \"wav format\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/mikestarr/Development/hackathons/ethglobal-metabolism/public/src/components/MintModal.tsx\",\n                    lineNumber: 15,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/mikestarr/Development/hackathons/ethglobal-metabolism/public/src/components/MintModal.tsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                            className: \"font-medium my-4\",\n                            children: \"Song Name\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mikestarr/Development/hackathons/ethglobal-metabolism/public/src/components/MintModal.tsx\",\n                            lineNumber: 24,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            value: songName,\n                            onChange: function() {\n                                return setSongName(songName);\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/mikestarr/Development/hackathons/ethglobal-metabolism/public/src/components/MintModal.tsx\",\n                            lineNumber: 25,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/mikestarr/Development/hackathons/ethglobal-metabolism/public/src/components/MintModal.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/mikestarr/Development/hackathons/ethglobal-metabolism/public/src/components/MintModal.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mikestarr/Development/hackathons/ethglobal-metabolism/public/src/components/MintModal.tsx\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n}\n_s(MintModal, \"N0FFqn33P6D3Jv6HNL1G3Td1F+w=\");\n_c = MintModal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MintModal);\nvar _c;\n$RefreshReg$(_c, \"MintModal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvc3JjL2NvbXBvbmVudHMvTWludE1vZGFsLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUF3QztBQUV4QyxTQUFTRSxTQUFTLEdBQUc7O0lBQ25CLElBQXdCRCxHQUFVLEdBQVZBLCtDQUFRLEVBQUUsRUFBM0JFLElBQUksR0FBYUYsR0FBVSxHQUF2QixFQUFFRyxPQUFPLEdBQUlILEdBQVUsR0FBZDtJQUNwQixJQUFnQ0EsSUFBVSxHQUFWQSwrQ0FBUSxFQUFFLEVBQW5DSSxRQUFRLEdBQWlCSixJQUFVLEdBQTNCLEVBQUVLLFdBQVcsR0FBSUwsSUFBVSxHQUFkO0lBQzVCLElBQW9DQSxJQUFVLEdBQVZBLCtDQUFRLEVBQUUsRUFBdkNNLFVBQVUsR0FBbUJOLElBQVUsR0FBN0IsRUFBRU8sYUFBYSxHQUFJUCxJQUFVLEdBQWQ7SUFFaEMscUJBQ0UsOERBQUNRLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLDhEQUE4RDs7MEJBQzNFLDhEQUFDQyxJQUFFO2dCQUFDRCxTQUFTLEVBQUMsZ0JBQWdCOzBCQUFDLGVBQWE7Ozs7O29CQUFLOzBCQUVqRCw4REFBQ0UsSUFBRTtnQkFBQ0YsU0FBUyxFQUFDLGtCQUFrQjswQkFBQyxhQUFXOzs7OztvQkFBSzswQkFFakQsOERBQUNELEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyxpRkFBaUY7MEJBQzlGLDRFQUFDRyxHQUFDOztzQ0FDQSw4REFBQ0MsTUFBSTs0QkFBQ0osU0FBUyxFQUFDLDRCQUE0QjtzQ0FBQyxhQUFXOzs7OztnQ0FBTztzQ0FDL0QsOERBQUNLLElBQUU7Ozs7Z0NBQUc7d0JBQUEsc0JBQ2M7c0NBQUEsOERBQUNBLElBQUU7Ozs7Z0NBQUc7d0JBQUEsWUFFNUI7Ozs7Ozt3QkFBSTs7Ozs7b0JBQ0E7MEJBQ04sOERBQUNDLE1BQUk7MEJBQ0gsNEVBQUNDLE9BQUs7O3NDQUNKLDhEQUFDTCxJQUFFOzRCQUFDRixTQUFTLEVBQUMsa0JBQWtCO3NDQUFDLFdBQVM7Ozs7O2dDQUFLO3NDQUMvQyw4REFBQ1EsT0FBSzs0QkFDSkMsSUFBSSxFQUFDLE1BQU07NEJBQ1hDLEtBQUssRUFBRWYsUUFBUTs0QkFDZmdCLFFBQVEsRUFBRTt1Q0FBTWYsV0FBVyxDQUFDRCxRQUFRLENBQUM7NkJBQUE7Ozs7O2dDQUNyQzs7Ozs7O3dCQUNJOzs7OztvQkFDSDs7Ozs7O1lBQ0gsQ0FDTjtDQUNIO0dBL0JRSCxTQUFTO0FBQVRBLEtBQUFBLFNBQVM7QUFpQ2xCLCtEQUFlQSxTQUFTLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL3NyYy9jb21wb25lbnRzL01pbnRNb2RhbC50c3g/MmYyZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gTWludE1vZGFsKCkge1xuICBjb25zdCBbZmlsZSwgc2V0RmlsZV0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbc29uZ05hbWUsIHNldFNvbmdOYW1lXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFthcnRpc3ROYW1lLCBzZXRBcnRpc3ROYW1lXSA9IHVzZVN0YXRlKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgYmctd2hpdGUgYm9yZGVyIHJvdW5kZWQgdy0xLzIgbS1hdXRvIHB5LTYgcHgtOFwiPlxuICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtYm9sZCBtYi02XCI+TWludCBTb25nIE5GVDwvaDM+XG5cbiAgICAgIDxoNSBjbGFzc05hbWU9XCJmb250LW1lZGl1bSBteS00XCI+VXBsb2FkIFNvbmc8L2g1PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggYm9yZGVyLTIgYm9yZGVyLWRhc2hlZCBweS02IHBsYWNlLWNvbnRlbnQtY2VudGVyIHRleHQtY2VudGVyIHRleHQtZ3JheS02MDBcIj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bIzAyNmVlZF0gZm9udC1tZWRpdW1cIj5VcGxvYWQgU29uZzwvc3Bhbj5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICBTb25nIHNob3VsZCBiZSBtcDMsIDxiciAvPlxuICAgICAgICAgIHdhdiBmb3JtYXRcbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8Zm9ybT5cbiAgICAgICAgPGxhYmVsPlxuICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJmb250LW1lZGl1bSBteS00XCI+U29uZyBOYW1lPC9oNT5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHZhbHVlPXtzb25nTmFtZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiBzZXRTb25nTmFtZShzb25nTmFtZSl9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWludE1vZGFsO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJNaW50TW9kYWwiLCJmaWxlIiwic2V0RmlsZSIsInNvbmdOYW1lIiwic2V0U29uZ05hbWUiLCJhcnRpc3ROYW1lIiwic2V0QXJ0aXN0TmFtZSIsImRpdiIsImNsYXNzTmFtZSIsImgzIiwiaDUiLCJwIiwic3BhbiIsImJyIiwiZm9ybSIsImxhYmVsIiwiaW5wdXQiLCJ0eXBlIiwidmFsdWUiLCJvbkNoYW5nZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./public/src/components/MintModal.tsx\n"));

/***/ })

});