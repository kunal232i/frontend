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

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _Users_mikestarr_Development_hackathons_ethglobal_metabolism_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_mikestarr_Development_hackathons_ethglobal_metabolism_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_mikestarr_Development_hackathons_ethglobal_metabolism_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _public_src_components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/src/components/header */ \"./public/src/components/header.tsx\");\n/* harmony import */ var _public_src_components_HottestSongs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/src/components/HottestSongs */ \"./public/src/components/HottestSongs.tsx\");\n/* harmony import */ var _walletconnect_web3_provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @walletconnect/web3-provider */ \"./node_modules/@walletconnect/web3-provider/dist/esm/index.js\");\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! web3modal */ \"./node_modules/web3modal/dist/index.js\");\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(web3modal__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"./node_modules/process/browser.js\");\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar Home = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({}), web3Modal = ref[0], setWeb3Modal = ref[1];\n    var account = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), userAccount = ref1[0], setUserAccount = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if ((web3modal__WEBPACK_IMPORTED_MODULE_6___default().cachedProvider)) connect();\n        if (true) {\n            var web3modal = new (web3modal__WEBPACK_IMPORTED_MODULE_6___default())({\n                network: \"rinkeby\",\n                cacheProvider: true,\n                providerOptions: providerOptions\n            });\n            setWeb3Modal(web3modal);\n        }\n    }, []);\n    var providerOptions = {\n        walletconnect: {\n            package: _walletconnect_web3_provider__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n            options: {\n                infuraId: process.env.REACT_APP_INFURA_ID\n            }\n        }\n    };\n    var connect = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(_Users_mikestarr_Development_hackathons_ethglobal_metabolism_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var instance, provider, signer, accounts, etherBalance;\n            return _Users_mikestarr_Development_hackathons_ethglobal_metabolism_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        _ctx.next = 3;\n                        return web3Modal.connect();\n                    case 3:\n                        instance = _ctx.sent;\n                        provider = new ethers__WEBPACK_IMPORTED_MODULE_8__.ethers.providers.Web3Provider(instance);\n                        signer = provider.getSigner();\n                        _ctx.next = 8;\n                        return provider.listAccounts();\n                    case 8:\n                        accounts = _ctx.sent;\n                        account.current = accounts[0];\n                        setUserAccount(account.current);\n                        _ctx.next = 13;\n                        return account.getBalance();\n                    case 13:\n                        etherBalance = _ctx.sent;\n                        console.log(etherBalance);\n                        _ctx.next = 20;\n                        break;\n                    case 17:\n                        _ctx.prev = 17;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.log(_ctx.t0);\n                    case 20:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    17\n                ]\n            ]);\n        }));\n        return function connect() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var disconnect = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(_Users_mikestarr_Development_hackathons_ethglobal_metabolism_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return _Users_mikestarr_Development_hackathons_ethglobal_metabolism_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        _ctx.next = 3;\n                        return web3Modal.clearCachedProvider();\n                    case 3:\n                        account.current = null;\n                        console.log(account);\n                        setUserAccount(function() {\n                            return null;\n                        });\n                        _ctx.next = 11;\n                        break;\n                    case 8:\n                        _ctx.prev = 8;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.log(_ctx.t0);\n                    case 11:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    8\n                ]\n            ]);\n        }));\n        return function disconnect() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_public_src_components_header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                connect: connect,\n                disconnect: disconnect,\n                account: account\n            }, void 0, false, {\n                fileName: \"/Users/mikestarr/Development/hackathons/ethglobal-metabolism/pages/index.tsx\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_public_src_components_HottestSongs__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/mikestarr/Development/hackathons/ethglobal-metabolism/pages/index.tsx\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(Home, \"2WiMxUijaAzMKHo5Oy2rkXLQ5ik=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFJO0FBNERWLCtEQUFlQSxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL3B1YmxpYy9zcmMvY29tcG9uZW50cy9oZWFkZXJcIjtcbmltcG9ydCBIb3R0ZXN0U29uZ3MgZnJvbSBcIi4uL3B1YmxpYy9zcmMvY29tcG9uZW50cy9Ib3R0ZXN0U29uZ3NcIjtcbmltcG9ydCBXYWxsZXRDb25uZWN0UHJvdmlkZXIgZnJvbSBcIkB3YWxsZXRjb25uZWN0L3dlYjMtcHJvdmlkZXJcIjtcbmltcG9ydCBXZWIzTW9kYWwgZnJvbSBcIndlYjNtb2RhbFwiO1xuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSBcImV0aGVyc1wiO1xuXG5jb25zdCBIb21lOiBOZXh0UGFnZSA9ICgpID0+IHtcbiAgY29uc3QgW3dlYjNNb2RhbCwgc2V0V2ViM01vZGFsXSA9IHVzZVN0YXRlKHt9KTtcbiAgY29uc3QgYWNjb3VudCA9IHVzZVJlZigpO1xuICBjb25zdCBbdXNlckFjY291bnQsIHNldFVzZXJBY2NvdW50XSA9IHVzZVN0YXRlKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoV2ViM01vZGFsLmNhY2hlZFByb3ZpZGVyKSBjb25uZWN0KCk7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIGNvbnN0IHdlYjNtb2RhbCA9IG5ldyBXZWIzTW9kYWwoe1xuICAgICAgICBuZXR3b3JrOiBcInJpbmtlYnlcIiwgLy8gb3B0aW9uYWxcbiAgICAgICAgY2FjaGVQcm92aWRlcjogdHJ1ZSwgLy8gb3B0aW9uYWxcbiAgICAgICAgcHJvdmlkZXJPcHRpb25zLCAvLyByZXF1aXJlZFxuICAgICAgfSk7XG4gICAgICBzZXRXZWIzTW9kYWwod2ViM21vZGFsKTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICBjb25zdCBwcm92aWRlck9wdGlvbnMgPSB7XG4gICAgd2FsbGV0Y29ubmVjdDoge1xuICAgICAgcGFja2FnZTogV2FsbGV0Q29ubmVjdFByb3ZpZGVyLCAvLyByZXF1aXJlZFxuICAgICAgb3B0aW9uczoge1xuICAgICAgICBpbmZ1cmFJZDogcHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0lORlVSQV9JRCwgLy8gcmVxdWlyZWRcbiAgICAgIH0sXG4gICAgfSxcbiAgfTtcblxuICBjb25zdCBjb25uZWN0ID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBpbnN0YW5jZSA9IGF3YWl0IHdlYjNNb2RhbC5jb25uZWN0KCk7XG4gICAgICBjb25zdCBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcihpbnN0YW5jZSk7XG4gICAgICBjb25zdCBzaWduZXIgPSBwcm92aWRlci5nZXRTaWduZXIoKTtcbiAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgcHJvdmlkZXIubGlzdEFjY291bnRzKCk7XG4gICAgICBhY2NvdW50LmN1cnJlbnQgPSBhY2NvdW50c1swXTtcbiAgICAgIHNldFVzZXJBY2NvdW50KGFjY291bnQuY3VycmVudCk7XG4gICAgICBjb25zdCBldGhlckJhbGFuY2UgPSBhd2FpdCBhY2NvdW50LmdldEJhbGFuY2UoKTtcbiAgICAgIGNvbnNvbGUubG9nKGV0aGVyQmFsYW5jZSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBkaXNjb25uZWN0ID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCB3ZWIzTW9kYWwuY2xlYXJDYWNoZWRQcm92aWRlcigpO1xuICAgICAgYWNjb3VudC5jdXJyZW50ID0gbnVsbDtcbiAgICAgIGNvbnNvbGUubG9nKGFjY291bnQpO1xuICAgICAgc2V0VXNlckFjY291bnQoKCkgPT4gbnVsbCk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZGVyIGNvbm5lY3Q9e2Nvbm5lY3R9IGRpc2Nvbm5lY3Q9e2Rpc2Nvbm5lY3R9IGFjY291bnQ9e2FjY291bnR9IC8+XG4gICAgICA8SG90dGVzdFNvbmdzIC8+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUmVmIiwiSGVhZGVyIiwiSG90dGVzdFNvbmdzIiwiV2FsbGV0Q29ubmVjdFByb3ZpZGVyIiwiV2ViM01vZGFsIiwiZXRoZXJzIiwiSG9tZSIsIndlYjNNb2RhbCIsInNldFdlYjNNb2RhbCIsImFjY291bnQiLCJ1c2VyQWNjb3VudCIsInNldFVzZXJBY2NvdW50IiwiY2FjaGVkUHJvdmlkZXIiLCJjb25uZWN0Iiwid2ViM21vZGFsIiwibmV0d29yayIsImNhY2hlUHJvdmlkZXIiLCJwcm92aWRlck9wdGlvbnMiLCJ3YWxsZXRjb25uZWN0IiwicGFja2FnZSIsIm9wdGlvbnMiLCJpbmZ1cmFJZCIsInByb2Nlc3MiLCJlbnYiLCJSRUFDVF9BUFBfSU5GVVJBX0lEIiwiaW5zdGFuY2UiLCJwcm92aWRlciIsInNpZ25lciIsImFjY291bnRzIiwiZXRoZXJCYWxhbmNlIiwicHJvdmlkZXJzIiwiV2ViM1Byb3ZpZGVyIiwiZ2V0U2lnbmVyIiwibGlzdEFjY291bnRzIiwiY3VycmVudCIsImdldEJhbGFuY2UiLCJjb25zb2xlIiwibG9nIiwiZGlzY29ubmVjdCIsImNsZWFyQ2FjaGVkUHJvdmlkZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});