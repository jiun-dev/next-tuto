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

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ HomePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n// < !-- < html >\n//   <body>\n//     <div id=\"app\"></div>\n//     <script type=\"text/javascript\">\n//         // app id를 가진 div 선택\n//       const app = document.getElementById('app')\n//       // h1 tag 생성\n//       const header = document.createElement('h1')\n//       // h1엘리먼트 생성\n//       const headerContent = document.createTextNode(\n//       'BlaBlaBla'\n//       )\n//       // header에 자식으로 headerContent를 넣어줌\n//       header.appendChild(headerContent)\n//       // app id에 자식으로 header를 넣어줌\n//       app.appendChild(header)\n//     </script>\n//   </body>\n// </html >\n//   - Dom을 plain js로 작성하는것은 매우 강력하지만 너무 장황하다. -- >\n// < !--index.html -->\n\nvar _s = $RefreshSig$();\nfunction createTitle(title) {\n    if (title) {\n        return title;\n    } else {\n        return \"Default title\";\n    }\n}\nfunction Header(param) {\n    var title = param.title;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: createTitle(title)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\jiun\\\\Desktop\\\\next-tuto\\\\pages\\\\index.jsx\",\n        lineNumber: 43,\n        columnNumber: 11\n    }, this);\n}\n_c = Header;\nfunction Subtitle(param) {\n    var subtitle = param.subtitle;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n        children: createTitle(subtitle)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\jiun\\\\Desktop\\\\next-tuto\\\\pages\\\\index.jsx\",\n        lineNumber: 47,\n        columnNumber: 11\n    }, this);\n}\n_c1 = Subtitle;\nfunction HomePage() {\n    var _this = this;\n    var handleClick = function handleClick() {\n        setLikes(likes + 1);\n    };\n    _s();\n    var names = [\n        \"Jiun\",\n        \"Jihyun\"\n    ];\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), likes = ref[0], setLikes = ref[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {\n                title: \"Hello React!\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jiun\\\\Desktop\\\\next-tuto\\\\pages\\\\index.jsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {\n                title: \"My name is Jiun!\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jiun\\\\Desktop\\\\next-tuto\\\\pages\\\\index.jsx\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Subtitle, {\n                subtitle: \"I have sister\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jiun\\\\Desktop\\\\next-tuto\\\\pages\\\\index.jsx\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: names.map(function(name) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: name\n                    }, name, false, {\n                        fileName: \"C:\\\\Users\\\\jiun\\\\Desktop\\\\next-tuto\\\\pages\\\\index.jsx\",\n                        lineNumber: 67,\n                        columnNumber: 11\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jiun\\\\Desktop\\\\next-tuto\\\\pages\\\\index.jsx\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleClick,\n                children: [\n                    \"Likes (\",\n                    likes,\n                    \")\"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\jiun\\\\Desktop\\\\next-tuto\\\\pages\\\\index.jsx\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\jiun\\\\Desktop\\\\next-tuto\\\\pages\\\\index.jsx\",\n        lineNumber: 61,\n        columnNumber: 5\n    }, this);\n};\n_s(HomePage, \"VhlnxxH3xh7Qs17KADUJ8wvRSZs=\");\n_c2 = HomePage;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Header\");\n$RefreshReg$(_c1, \"Subtitle\");\n$RefreshReg$(_c2, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUE2QkE7QUE3QkEsaUJBQWlCO0FBRWpCLFdBQVc7QUFDWCwyQkFBMkI7QUFDM0Isc0NBQXNDO0FBQ3RDO0FBQ1UsbURBQXlDO0FBQ25EO0FBQ0ksb0RBQWdEO0FBQ3BEO0FBQ1ksdURBQTJDO0FBQ3ZELG9CQUFvQjtBQUNwQixVQUFVO0FBQ1Y7QUFDa0IsMENBQXdCO0FBQzFDO0FBQ2tCLGdDQUFjO0FBR2hDLGdCQUFnQjtBQUNoQixZQUFZO0FBRVosV0FBVztBQUVYO0FBRUEsc0JBQXNCO0FBR1U7O0FBSWhDLFNBQVNDLFdBQVcsQ0FBQ0MsS0FBSyxFQUFFO0lBQzFCLElBQUlBLEtBQUssRUFBRTtRQUNULE9BQU9BLEtBQUs7S0FDYixNQUFNO1FBQ0wsT0FBTyxlQUFlO0tBQ3ZCO0NBQ0Y7QUFFRCxTQUFTQyxNQUFNLENBQUMsS0FBUyxFQUFFO1FBQVgsS0FBTyxHQUFQLEtBQVMsQ0FBUEQsS0FBSztJQUNyQixxQkFBUSw4REFBQ0UsSUFBRTtrQkFBRUgsV0FBVyxDQUFDQyxLQUFLLENBQUM7Ozs7O1lBQU0sQ0FBQztDQUN2QztBQUZRQyxLQUFBQSxNQUFNO0FBSWYsU0FBU0UsUUFBUSxDQUFDLEtBQVksRUFBRTtRQUFkLFFBQVUsR0FBVixLQUFZLENBQVZDLFFBQVE7SUFDMUIscUJBQVEsOERBQUNDLElBQUU7a0JBQUVOLFdBQVcsQ0FBQ0ssUUFBUSxDQUFDOzs7OztZQUFNLENBQUM7Q0FDMUM7QUFGUUQsTUFBQUEsUUFBUTtBQU1GLFNBQVNHLFFBQVEsR0FBRzs7UUFJeEJDLFdBQVcsR0FBcEIsU0FBU0EsV0FBVyxHQUFHO1FBQ3JCQyxRQUFRLENBQUNDLEtBQUssR0FBRyxDQUFDLENBQUM7S0FDcEI7O0lBTEQsSUFBTUMsS0FBSyxHQUFHO1FBQUMsTUFBTTtRQUFFLFFBQVE7S0FBQztJQUNoQyxJQUEwQlosR0FBVSxHQUFWQSwrQ0FBUSxFQUFFLEVBckR0QyxLQXFEYyxHQUFjQSxHQUFVLEdBQXhCLEVBckRkLFFBcUR3QixHQUFJQSxHQUFVLEdBQWQ7SUFNdEIscUJBQ0UsOERBQUNhLEtBQUc7OzBCQUNGLDhEQUFDVixNQUFNO2dCQUFDRCxLQUFLLEVBQUMsY0FBYzs7Ozs7b0JBQUc7MEJBQy9CLDhEQUFDQyxNQUFNO2dCQUFDRCxLQUFLLEVBQUMsa0JBQWtCOzs7OztvQkFBRzswQkFDbkMsOERBQUNHLFFBQVE7Z0JBQUNDLFFBQVEsRUFBQyxlQUFlOzs7OztvQkFBRzswQkFDckMsOERBQUNRLElBQUU7MEJBQ0FGLEtBQUssQ0FBQ0csR0FBRyxDQUFDQyxTQUFBQSxJQUFJO3lDQUNiLDhEQUFDQyxJQUFFO2tDQUFhRCxJQUFJO3VCQUFYQSxJQUFJOzs7OzZCQUFhO2lCQUMzQixDQUFDOzs7OztvQkFDQzswQkFFTCw4REFBQ0UsUUFBTTtnQkFBQ0MsT0FBTyxFQUFFVixXQUFXOztvQkFBRSxTQUFPO29CQUFDRSxLQUFLO29CQUFDLEdBQUM7Ozs7OztvQkFBUzs7Ozs7O1lBRWxELENBQ1A7Q0FDRjtHQXZCdUJILFFBQVE7QUFBUkEsTUFBQUEsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qc3g/N2ZmZCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8ICEtLSA8IGh0bWwgPlxyXG5cclxuLy8gICA8Ym9keT5cclxuLy8gICAgIDxkaXYgaWQ9XCJhcHBcIj48L2Rpdj5cclxuLy8gICAgIDxzY3JpcHQgdHlwZT1cInRleHQvamF2YXNjcmlwdFwiPlxyXG4vLyAgICAgICAgIC8vIGFwcCBpZOulvCDqsIDsp4QgZGl2IOyEoO2DnVxyXG4vLyAgICAgICBjb25zdCBhcHAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJylcclxuLy8gICAgICAgLy8gaDEgdGFnIOyDneyEsVxyXG4vLyAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXHJcbi8vICAgICAgIC8vIGgx7JeY66as66i87Yq4IOyDneyEsVxyXG4vLyAgICAgICBjb25zdCBoZWFkZXJDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXHJcbi8vICAgICAgICdCbGFCbGFCbGEnXHJcbi8vICAgICAgIClcclxuLy8gICAgICAgLy8gaGVhZGVy7JeQIOyekOyLneycvOuhnCBoZWFkZXJDb250ZW5066W8IOuEo+yWtOykjFxyXG4vLyAgICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyQ29udGVudClcclxuLy8gICAgICAgLy8gYXBwIGlk7JeQIOyekOyLneycvOuhnCBoZWFkZXLrpbwg64Sj7Ja07KSMXHJcbi8vICAgICAgIGFwcC5hcHBlbmRDaGlsZChoZWFkZXIpXHJcblxyXG5cclxuLy8gICAgIDwvc2NyaXB0PlxyXG4vLyAgIDwvYm9keT5cclxuXHJcbi8vIDwvaHRtbCA+XHJcblxyXG4vLyAgIC0gRG9t7J2EIHBsYWluIGpz66GcIOyekeyEse2VmOuKlOqyg+ydgCDrp6TsmrAg6rCV66Cl7ZWY7KeA66eMIOuEiOustCDsnqXtmantlZjri6QuIC0tID5cclxuXHJcbi8vIDwgIS0taW5kZXguaHRtbCAtLT5cclxuXHJcblxyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVUaXRsZSh0aXRsZSkge1xyXG4gIGlmICh0aXRsZSkge1xyXG4gICAgcmV0dXJuIHRpdGxlXHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiAnRGVmYXVsdCB0aXRsZSdcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEhlYWRlcih7IHRpdGxlIH0pIHtcclxuICByZXR1cm4gKDxoMT57Y3JlYXRlVGl0bGUodGl0bGUpfTwvaDE+KVxyXG59XHJcblxyXG5mdW5jdGlvbiBTdWJ0aXRsZSh7IHN1YnRpdGxlIH0pIHtcclxuICByZXR1cm4gKDxoMj57Y3JlYXRlVGl0bGUoc3VidGl0bGUpfTwvaDI+KVxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWVQYWdlKCkge1xyXG4gIGNvbnN0IG5hbWVzID0gWydKaXVuJywgJ0ppaHl1biddXHJcbiAgY29uc3QgW2xpa2VzLCBzZXRMaWtlc10gPSB1c2VTdGF0ZSgpXHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUNsaWNrKCkge1xyXG4gICAgc2V0TGlrZXMobGlrZXMgKyAxKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxIZWFkZXIgdGl0bGU9XCJIZWxsbyBSZWFjdCFcIiAvPlxyXG4gICAgICA8SGVhZGVyIHRpdGxlPVwiTXkgbmFtZSBpcyBKaXVuIVwiIC8+XHJcbiAgICAgIDxTdWJ0aXRsZSBzdWJ0aXRsZT1cIkkgaGF2ZSBzaXN0ZXJcIiAvPlxyXG4gICAgICA8dWw+XHJcbiAgICAgICAge25hbWVzLm1hcChuYW1lID0+IChcclxuICAgICAgICAgIDxsaSBrZXk9e25hbWV9PntuYW1lfTwvbGk+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvdWw+XHJcblxyXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5MaWtlcyAoe2xpa2VzfSk8L2J1dHRvbj5cclxuXHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsImNyZWF0ZVRpdGxlIiwidGl0bGUiLCJIZWFkZXIiLCJoMSIsIlN1YnRpdGxlIiwic3VidGl0bGUiLCJoMiIsIkhvbWVQYWdlIiwiaGFuZGxlQ2xpY2siLCJzZXRMaWtlcyIsImxpa2VzIiwibmFtZXMiLCJkaXYiLCJ1bCIsIm1hcCIsIm5hbWUiLCJsaSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.jsx\n");

/***/ })

});