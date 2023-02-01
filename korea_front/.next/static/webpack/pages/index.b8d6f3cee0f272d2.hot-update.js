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

/***/ "./layout/Login.tsx":
/*!**************************!*\
  !*** ./layout/Login.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Login; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-google-login */ \"./node_modules/react-google-login/dist/google-login.js\");\n/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_google_login__WEBPACK_IMPORTED_MODULE_3__);\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"./node_modules/next/dist/build/polyfills/process.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  display: flex;\\n  justify-items: center;\\n  justify-content: center;\\n  align-content: center;\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  padding: 150px;\\n  @media \",\n        \" {\\n    padding: 50px;\\n  }\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  display: flex;\\n  flex-direction: column;\\n  justify-items: center;\\n\"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  font-size: 20px;\\n  margin: 5px;\\n  width: 250px;\\n  height: 40px;\\n  border: 2px solid black;\\n  @media \",\n        \" {\\n    font-size: 15px;\\n  }\\n\"\n    ]);\n    _templateObject3 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  display: flex;\\n  justify-content: center;\\n  align-content: center;\\n\"\n    ]);\n    _templateObject4 = function() {\n        return data;\n    };\n    return data;\n}\n\n\n\n\nconst Box = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div.withConfig({\n    displayName: \"Login__Box\",\n    componentId: \"sc-169d8466-0\"\n})(_templateObject());\n_c = Box;\nconst InputGroup = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].ul.withConfig({\n    displayName: \"Login__InputGroup\",\n    componentId: \"sc-169d8466-1\"\n})(_templateObject1(), (props)=>props.theme.mobile);\n_c1 = InputGroup;\nconst InputItem = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].li.withConfig({\n    displayName: \"Login__InputItem\",\n    componentId: \"sc-169d8466-2\"\n})(_templateObject2());\n_c2 = InputItem;\nconst SignInput = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].input.withConfig({\n    displayName: \"Login__SignInput\",\n    componentId: \"sc-169d8466-3\"\n})(_templateObject3(), (props)=>props.theme.mobile);\n_c3 = SignInput;\nconst AuthGrop = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div.withConfig({\n    displayName: \"Login__AuthGrop\",\n    componentId: \"sc-169d8466-4\"\n})(_templateObject4());\n_c4 = AuthGrop;\nfunction Login() {\n    const authKey = {\n        googleKey: process.env.GOOGLE_LOGIN_CLIENT_ID\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Box, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(InputGroup, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(InputItem, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(SignInput, {\n                                type: \"text\",\n                                placeholder: \"E-Mail\"\n                            }, void 0, false, {\n                                fileName: \"/Users/marko/Documents/GitHub/About_Korea/korea_front/layout/Login.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/marko/Documents/GitHub/About_Korea/korea_front/layout/Login.tsx\",\n                            lineNumber: 50,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(InputItem, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(SignInput, {\n                                type: \"text\",\n                                placeholder: \"PASSWORD\"\n                            }, void 0, false, {\n                                fileName: \"/Users/marko/Documents/GitHub/About_Korea/korea_front/layout/Login.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/marko/Documents/GitHub/About_Korea/korea_front/layout/Login.tsx\",\n                            lineNumber: 53,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/marko/Documents/GitHub/About_Korea/korea_front/layout/Login.tsx\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/marko/Documents/GitHub/About_Korea/korea_front/layout/Login.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(AuthGrop, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((react_google_login__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    clientId: authKey.googleKey,\n                    buttonText: \"Google Login\"\n                }, void 0, false, {\n                    fileName: \"/Users/marko/Documents/GitHub/About_Korea/korea_front/layout/Login.tsx\",\n                    lineNumber: 59,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/marko/Documents/GitHub/About_Korea/korea_front/layout/Login.tsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_c5 = Login;\nvar _c, _c1, _c2, _c3, _c4, _c5;\n$RefreshReg$(_c, \"Box\");\n$RefreshReg$(_c1, \"InputGroup\");\n$RefreshReg$(_c2, \"InputItem\");\n$RefreshReg$(_c3, \"SignInput\");\n$RefreshReg$(_c4, \"AuthGrop\");\n$RefreshReg$(_c5, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9sYXlvdXQvTG9naW4udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ2E7QUFDTTtBQUU3QyxNQUFNRyxNQUFNRix3RUFBVTs7OztLQUFoQkU7QUFPTixNQUFNRSxhQUFhSix1RUFBUzs7O3VCQUVqQixDQUFDTSxRQUFVQSxNQUFNQyxLQUFLLENBQUNDLE1BQU07TUFGbENKO0FBT04sTUFBTUssWUFBWVQsdUVBQVM7Ozs7TUFBckJTO0FBTU4sTUFBTUUsWUFBWVgsMEVBQVk7Ozt1QkFNbkIsQ0FBQ00sUUFBVUEsTUFBTUMsS0FBSyxDQUFDQyxNQUFNO01BTmxDRztBQVdOLE1BQU1FLFdBQVdiLHdFQUFVOzs7O01BQXJCYTtBQU1TLFNBQVNDLFFBQVE7SUFDOUIsTUFBTUMsVUFBVTtRQUNkQyxXQUFXQyxPQUFPQSxDQUFDQyxHQUFHLENBQUNDLHNCQUFzQjtJQUMvQztJQUNBLHFCQUNFOzswQkFDRSw4REFBQ2pCOzBCQUNDLDRFQUFDRTs7c0NBQ0MsOERBQUNLO3NDQUNDLDRFQUFDRTtnQ0FBVVMsTUFBSztnQ0FBT0MsYUFBWTs7Ozs7Ozs7Ozs7c0NBRXJDLDhEQUFDWjtzQ0FDQyw0RUFBQ0U7Z0NBQVVTLE1BQUs7Z0NBQU9DLGFBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSXpDLDhEQUFDUjswQkFDQyw0RUFBQ1osMkRBQVdBO29CQUNWcUIsVUFBVVAsUUFBUUMsU0FBUztvQkFDM0JPLFlBQVc7Ozs7Ozs7Ozs7Ozs7QUFRckIsQ0FBQztNQTNCdUJUIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2xheW91dC9Mb2dpbi50c3g/NjBjMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IEdvb2dsZUxvZ2luIGZyb20gXCJyZWFjdC1nb29nbGUtbG9naW5cIjtcblxuY29uc3QgQm94ID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuYDtcblxuY29uc3QgSW5wdXRHcm91cCA9IHN0eWxlZC51bGBcbiAgcGFkZGluZzogMTUwcHg7XG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUubW9iaWxlfSB7XG4gICAgcGFkZGluZzogNTBweDtcbiAgfVxuYDtcblxuY29uc3QgSW5wdXRJdGVtID0gc3R5bGVkLmxpYFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG5gO1xuXG5jb25zdCBTaWduSW5wdXQgPSBzdHlsZWQuaW5wdXRgXG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luOiA1cHg7XG4gIHdpZHRoOiAyNTBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5tb2JpbGV9IHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gIH1cbmA7XG5cbmNvbnN0IEF1dGhHcm9wID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luKCkge1xuICBjb25zdCBhdXRoS2V5ID0ge1xuICAgIGdvb2dsZUtleTogcHJvY2Vzcy5lbnYuR09PR0xFX0xPR0lOX0NMSUVOVF9JRCxcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEJveD5cbiAgICAgICAgPElucHV0R3JvdXA+XG4gICAgICAgICAgPElucHV0SXRlbT5cbiAgICAgICAgICAgIDxTaWduSW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkUtTWFpbFwiIC8+XG4gICAgICAgICAgPC9JbnB1dEl0ZW0+XG4gICAgICAgICAgPElucHV0SXRlbT5cbiAgICAgICAgICAgIDxTaWduSW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlBBU1NXT1JEXCIgLz5cbiAgICAgICAgICA8L0lucHV0SXRlbT5cbiAgICAgICAgPC9JbnB1dEdyb3VwPlxuICAgICAgPC9Cb3g+XG4gICAgICA8QXV0aEdyb3A+XG4gICAgICAgIDxHb29nbGVMb2dpblxuICAgICAgICAgIGNsaWVudElkPXthdXRoS2V5Lmdvb2dsZUtleX1cbiAgICAgICAgICBidXR0b25UZXh0PVwiR29vZ2xlIExvZ2luXCJcblxuICAgICAgICAgIC8vIG9uU3VjY2Vzcz17cmVzcG9uc2VHb29nbGV9XG4gICAgICAgICAgLy8gb25GYWlsdXJlPXtyZXNwb25zZUdvb2dsZX1cbiAgICAgICAgLz5cbiAgICAgIDwvQXV0aEdyb3A+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZWQiLCJHb29nbGVMb2dpbiIsIkJveCIsImRpdiIsIklucHV0R3JvdXAiLCJ1bCIsInByb3BzIiwidGhlbWUiLCJtb2JpbGUiLCJJbnB1dEl0ZW0iLCJsaSIsIlNpZ25JbnB1dCIsImlucHV0IiwiQXV0aEdyb3AiLCJMb2dpbiIsImF1dGhLZXkiLCJnb29nbGVLZXkiLCJwcm9jZXNzIiwiZW52IiwiR09PR0xFX0xPR0lOX0NMSUVOVF9JRCIsInR5cGUiLCJwbGFjZWhvbGRlciIsImNsaWVudElkIiwiYnV0dG9uVGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./layout/Login.tsx\n"));

/***/ })

});