"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_error";
exports.ids = ["pages/_error"];
exports.modules = {

/***/ "../../node_modules/.pnpm/@swc+helpers@0.4.14/node_modules/@swc/helpers/lib/_interop_require_default.js":
/*!**************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/@swc+helpers@0.4.14/node_modules/@swc/helpers/lib/_interop_require_default.js ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nObject.defineProperty(exports, \"default\", ({\n    enumerable: true,\n    get: function() {\n        return _interopRequireDefault;\n    }\n}));\nfunction _interopRequireDefault(obj) {\n    return obj && obj.__esModule ? obj : {\n        default: obj\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0Bzd2MraGVscGVyc0AwLjQuMTQvbm9kZV9tb2R1bGVzL0Bzd2MvaGVscGVycy9saWIvX2ludGVyb3BfcmVxdWlyZV9kZWZhdWx0LmpzLmpzIiwibWFwcGluZ3MiOiJBQUFhO0FBQ2IsOENBQTZDO0FBQzdDO0FBQ0EsQ0FBQyxFQUFDO0FBQ0YsMkNBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFDO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Jsb2cvLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0Bzd2MraGVscGVyc0AwLjQuMTQvbm9kZV9tb2R1bGVzL0Bzd2MvaGVscGVycy9saWIvX2ludGVyb3BfcmVxdWlyZV9kZWZhdWx0LmpzPzExOTEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJkZWZhdWx0XCIsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0O1xuICAgIH1cbn0pO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../../node_modules/.pnpm/@swc+helpers@0.4.14/node_modules/@swc/helpers/lib/_interop_require_default.js\n");

/***/ }),

/***/ "../../node_modules/.pnpm/next@13.0.5_biqbaboplfbrettd7655fr4n2y/node_modules/next/dist/pages/_error.js":
/*!**************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/next@13.0.5_biqbaboplfbrettd7655fr4n2y/node_modules/next/dist/pages/_error.js ***!
  \**************************************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nexports[\"default\"] = void 0;\nvar _interop_require_default = (__webpack_require__(/*! @swc/helpers/lib/_interop_require_default.js */ \"../../node_modules/.pnpm/@swc+helpers@0.4.14/node_modules/@swc/helpers/lib/_interop_require_default.js\")[\"default\"]);\nvar _react = _interop_require_default(__webpack_require__(/*! react */ \"react\"));\nvar _head = _interop_require_default(__webpack_require__(/*! ../shared/lib/head */ \"../shared/lib/head\"));\nconst statusCodes = {\n    400: \"Bad Request\",\n    404: \"This page could not be found\",\n    405: \"Method Not Allowed\",\n    500: \"Internal Server Error\"\n};\nfunction _getInitialProps({ res , err  }) {\n    const statusCode = res && res.statusCode ? res.statusCode : err ? err.statusCode : 404;\n    return {\n        statusCode\n    };\n}\nconst styles = {\n    error: {\n        fontFamily: '-apple-system, BlinkMacSystemFont, Roboto, \"Segoe UI\", \"Fira Sans\", Avenir, \"Helvetica Neue\", \"Lucida Grande\", sans-serif',\n        height: \"100vh\",\n        textAlign: \"center\",\n        display: \"flex\",\n        flexDirection: \"column\",\n        alignItems: \"center\",\n        justifyContent: \"center\"\n    },\n    desc: {\n        display: \"inline-block\",\n        textAlign: \"left\",\n        lineHeight: \"49px\",\n        height: \"49px\",\n        verticalAlign: \"middle\"\n    },\n    h1: {\n        display: \"inline-block\",\n        margin: 0,\n        marginRight: \"20px\",\n        padding: \"0 23px 0 0\",\n        fontSize: \"24px\",\n        fontWeight: 500,\n        verticalAlign: \"top\",\n        lineHeight: \"49px\"\n    },\n    h2: {\n        fontSize: \"14px\",\n        fontWeight: \"normal\",\n        lineHeight: \"49px\",\n        margin: 0,\n        padding: 0\n    }\n};\nvar _Component;\nclass Error extends (_Component = _react.default.Component) {\n    render() {\n        const { statusCode , withDarkMode =true  } = this.props;\n        const title = this.props.title || statusCodes[statusCode] || \"An unexpected error has occurred\";\n        return /*#__PURE__*/ _react.default.createElement(\"div\", {\n            style: styles.error\n        }, /*#__PURE__*/ _react.default.createElement(_head.default, null, /*#__PURE__*/ _react.default.createElement(\"title\", null, statusCode ? `${statusCode}: ${title}` : \"Application error: a client-side exception has occurred\")), /*#__PURE__*/ _react.default.createElement(\"div\", null, /*#__PURE__*/ _react.default.createElement(\"style\", {\n            dangerouslySetInnerHTML: {\n                __html: `\n                body { margin: 0; color: #000; background: #fff; }\n                .next-error-h1 {\n                  border-right: 1px solid rgba(0, 0, 0, .3);\n                }\n\n                ${withDarkMode ? `@media (prefers-color-scheme: dark) {\n                  body { color: #fff; background: #000; }\n                  .next-error-h1 {\n                    border-right: 1px solid rgba(255, 255, 255, .3);\n                  }\n                }` : \"\"}`\n            }\n        }), statusCode ? /*#__PURE__*/ _react.default.createElement(\"h1\", {\n            className: \"next-error-h1\",\n            style: styles.h1\n        }, statusCode) : null, /*#__PURE__*/ _react.default.createElement(\"div\", {\n            style: styles.desc\n        }, /*#__PURE__*/ _react.default.createElement(\"h2\", {\n            style: styles.h2\n        }, this.props.title || statusCode ? title : /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, \"Application error: a client-side exception has occurred (see the browser console for more information)\"), \".\"))));\n    }\n}\nError.displayName = \"ErrorPage\";\nError.getInitialProps = _getInitialProps;\nError.origGetInitialProps = _getInitialProps;\nexports[\"default\"] = Error;\nif ((typeof exports.default === \"function\" || typeof exports.default === \"object\" && exports.default !== null) && typeof exports.default.__esModule === \"undefined\") {\n    Object.defineProperty(exports.default, \"__esModule\", {\n        value: true\n    });\n    Object.assign(exports.default, exports);\n    module.exports = exports.default;\n} //# sourceMappingURL=_error.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL25leHRAMTMuMC41X2JpcWJhYm9wbGZicmV0dGQ3NjU1ZnI0bjJ5L25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvcGFnZXMvX2Vycm9yLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFhO0FBQ2JBLDhDQUE2QztJQUN6Q0csT0FBTyxJQUFJO0FBQ2YsQ0FBQyxFQUFDO0FBQ0ZELGtCQUFlLEdBQUcsS0FBSztBQUN2QixJQUFJRywyQkFBMkJDLDhMQUErRDtBQUM5RixJQUFJQyxTQUFTRix5QkFBeUJDLG1CQUFPQSxDQUFDLG9CQUFPO0FBQ3JELElBQUlFLFFBQVFILHlCQUF5QkMsbUJBQU9BLENBQUMsOENBQW9CO0FBQ2pFLE1BQU1HLGNBQWM7SUFDaEIsS0FBSztJQUNMLEtBQUs7SUFDTCxLQUFLO0lBQ0wsS0FBSztBQUNUO0FBQ0EsU0FBU0MsaUJBQWlCLEVBQUVDLElBQUcsRUFBR0MsSUFBRyxFQUFHLEVBQUU7SUFDdEMsTUFBTUMsYUFBYUYsT0FBT0EsSUFBSUUsVUFBVSxHQUFHRixJQUFJRSxVQUFVLEdBQUdELE1BQU1BLElBQUlDLFVBQVUsR0FBRyxHQUFHO0lBQ3RGLE9BQU87UUFDSEE7SUFDSjtBQUNKO0FBQ0EsTUFBTUMsU0FBUztJQUNYQyxPQUFPO1FBQ0hDLFlBQVk7UUFDWkMsUUFBUTtRQUNSQyxXQUFXO1FBQ1hDLFNBQVM7UUFDVEMsZUFBZTtRQUNmQyxZQUFZO1FBQ1pDLGdCQUFnQjtJQUNwQjtJQUNBQyxNQUFNO1FBQ0ZKLFNBQVM7UUFDVEQsV0FBVztRQUNYTSxZQUFZO1FBQ1pQLFFBQVE7UUFDUlEsZUFBZTtJQUNuQjtJQUNBQyxJQUFJO1FBQ0FQLFNBQVM7UUFDVFEsUUFBUTtRQUNSQyxhQUFhO1FBQ2JDLFNBQVM7UUFDVEMsVUFBVTtRQUNWQyxZQUFZO1FBQ1pOLGVBQWU7UUFDZkQsWUFBWTtJQUNoQjtJQUNBUSxJQUFJO1FBQ0FGLFVBQVU7UUFDVkMsWUFBWTtRQUNaUCxZQUFZO1FBQ1pHLFFBQVE7UUFDUkUsU0FBUztJQUNiO0FBQ0o7QUFDQSxJQUFJSTtBQUNKLE1BQU1DLGNBQWVELENBQUFBLGFBQWExQixPQUFPSCxPQUFPLENBQUMrQixTQUFTO0lBQ3REQyxTQUFTO1FBQ0wsTUFBTSxFQUFFdkIsV0FBVSxFQUFHd0IsY0FBYyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUNDLEtBQUs7UUFDdkQsTUFBTUMsUUFBUSxJQUFJLENBQUNELEtBQUssQ0FBQ0MsS0FBSyxJQUFJOUIsV0FBVyxDQUFDSSxXQUFXLElBQUk7UUFDN0QsT0FBTyxXQUFXLEdBQUdOLE9BQU9ILE9BQU8sQ0FBQ29DLGFBQWEsQ0FBQyxPQUFPO1lBQ3JEQyxPQUFPM0IsT0FBT0MsS0FBSztRQUN2QixHQUFHLFdBQVcsR0FBR1IsT0FBT0gsT0FBTyxDQUFDb0MsYUFBYSxDQUFDaEMsTUFBTUosT0FBTyxFQUFFLElBQUksRUFBRSxXQUFXLEdBQUdHLE9BQU9ILE9BQU8sQ0FBQ29DLGFBQWEsQ0FBQyxTQUFTLElBQUksRUFBRTNCLGFBQWEsQ0FBQyxFQUFFQSxXQUFXLEVBQUUsRUFBRTBCLE1BQU0sQ0FBQyxHQUFHLHlEQUF5RCxJQUFJLFdBQVcsR0FBR2hDLE9BQU9ILE9BQU8sQ0FBQ29DLGFBQWEsQ0FBQyxPQUFPLElBQUksRUFBRSxXQUFXLEdBQUdqQyxPQUFPSCxPQUFPLENBQUNvQyxhQUFhLENBQUMsU0FBUztZQUMzVUUseUJBQXlCO2dCQUNyQkMsUUFBUSxDQUFDOzs7Ozs7Z0JBTVQsRUFBRU4sZUFBZSxDQUFDOzs7OztpQkFLakIsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1lBQ2I7UUFDSixJQUFJeEIsYUFBYSxXQUFXLEdBQUdOLE9BQU9ILE9BQU8sQ0FBQ29DLGFBQWEsQ0FBQyxNQUFNO1lBQzlESSxXQUFXO1lBQ1hILE9BQU8zQixPQUFPWSxFQUFFO1FBQ3BCLEdBQUdiLGNBQWMsSUFBSSxFQUFFLFdBQVcsR0FBR04sT0FBT0gsT0FBTyxDQUFDb0MsYUFBYSxDQUFDLE9BQU87WUFDckVDLE9BQU8zQixPQUFPUyxJQUFJO1FBQ3RCLEdBQUcsV0FBVyxHQUFHaEIsT0FBT0gsT0FBTyxDQUFDb0MsYUFBYSxDQUFDLE1BQU07WUFDaERDLE9BQU8zQixPQUFPa0IsRUFBRTtRQUNwQixHQUFHLElBQUksQ0FBQ00sS0FBSyxDQUFDQyxLQUFLLElBQUkxQixhQUFhMEIsUUFBUSxXQUFXLEdBQUdoQyxPQUFPSCxPQUFPLENBQUNvQyxhQUFhLENBQUNqQyxPQUFPSCxPQUFPLENBQUN5QyxRQUFRLEVBQUUsSUFBSSxFQUFFLHlHQUF5RyxFQUFFO0lBQ3JPO0FBQ0o7QUFDQVgsTUFBTVksV0FBVyxHQUFHO0FBQ3BCWixNQUFNYSxlQUFlLEdBQUdyQztBQUN4QndCLE1BQU1jLG1CQUFtQixHQUFHdEM7QUFDNUJSLGtCQUFlLEdBQUdnQztBQUVsQixJQUFJLENBQUMsT0FBT2hDLFFBQVFFLE9BQU8sS0FBSyxjQUFlLE9BQU9GLFFBQVFFLE9BQU8sS0FBSyxZQUFZRixRQUFRRSxPQUFPLEtBQUssSUFBSSxLQUFNLE9BQU9GLFFBQVFFLE9BQU8sQ0FBQzZDLFVBQVUsS0FBSyxhQUFhO0lBQ3JLakQsT0FBT0MsY0FBYyxDQUFDQyxRQUFRRSxPQUFPLEVBQUUsY0FBYztRQUFFRCxPQUFPLElBQUk7SUFBQztJQUNuRUgsT0FBT2tELE1BQU0sQ0FBQ2hELFFBQVFFLE9BQU8sRUFBRUY7SUFDL0JpRCxPQUFPakQsT0FBTyxHQUFHQSxRQUFRRSxPQUFPO0FBQ2xDLENBQUMsQ0FFRCxrQ0FBa0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ibG9nLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9uZXh0QDEzLjAuNV9iaXFiYWJvcGxmYnJldHRkNzY1NWZyNG4yeS9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3BhZ2VzL19lcnJvci5qcz83NzBmIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9pbnRlcm9wX3JlcXVpcmVfZGVmYXVsdCA9IHJlcXVpcmUoXCJAc3djL2hlbHBlcnMvbGliL19pbnRlcm9wX3JlcXVpcmVfZGVmYXVsdC5qc1wiKS5kZWZhdWx0O1xudmFyIF9yZWFjdCA9IF9pbnRlcm9wX3JlcXVpcmVfZGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIF9oZWFkID0gX2ludGVyb3BfcmVxdWlyZV9kZWZhdWx0KHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL2hlYWRcIikpO1xuY29uc3Qgc3RhdHVzQ29kZXMgPSB7XG4gICAgNDAwOiAnQmFkIFJlcXVlc3QnLFxuICAgIDQwNDogJ1RoaXMgcGFnZSBjb3VsZCBub3QgYmUgZm91bmQnLFxuICAgIDQwNTogJ01ldGhvZCBOb3QgQWxsb3dlZCcsXG4gICAgNTAwOiAnSW50ZXJuYWwgU2VydmVyIEVycm9yJ1xufTtcbmZ1bmN0aW9uIF9nZXRJbml0aWFsUHJvcHMoeyByZXMgLCBlcnIgIH0pIHtcbiAgICBjb25zdCBzdGF0dXNDb2RlID0gcmVzICYmIHJlcy5zdGF0dXNDb2RlID8gcmVzLnN0YXR1c0NvZGUgOiBlcnIgPyBlcnIuc3RhdHVzQ29kZSA6IDQwNDtcbiAgICByZXR1cm4ge1xuICAgICAgICBzdGF0dXNDb2RlXG4gICAgfTtcbn1cbmNvbnN0IHN0eWxlcyA9IHtcbiAgICBlcnJvcjoge1xuICAgICAgICBmb250RmFtaWx5OiAnLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBSb2JvdG8sIFwiU2Vnb2UgVUlcIiwgXCJGaXJhIFNhbnNcIiwgQXZlbmlyLCBcIkhlbHZldGljYSBOZXVlXCIsIFwiTHVjaWRhIEdyYW5kZVwiLCBzYW5zLXNlcmlmJyxcbiAgICAgICAgaGVpZ2h0OiAnMTAwdmgnLFxuICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInXG4gICAgfSxcbiAgICBkZXNjOiB7XG4gICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICB0ZXh0QWxpZ246ICdsZWZ0JyxcbiAgICAgICAgbGluZUhlaWdodDogJzQ5cHgnLFxuICAgICAgICBoZWlnaHQ6ICc0OXB4JyxcbiAgICAgICAgdmVydGljYWxBbGlnbjogJ21pZGRsZSdcbiAgICB9LFxuICAgIGgxOiB7XG4gICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICBtYXJnaW46IDAsXG4gICAgICAgIG1hcmdpblJpZ2h0OiAnMjBweCcsXG4gICAgICAgIHBhZGRpbmc6ICcwIDIzcHggMCAwJyxcbiAgICAgICAgZm9udFNpemU6ICcyNHB4JyxcbiAgICAgICAgZm9udFdlaWdodDogNTAwLFxuICAgICAgICB2ZXJ0aWNhbEFsaWduOiAndG9wJyxcbiAgICAgICAgbGluZUhlaWdodDogJzQ5cHgnXG4gICAgfSxcbiAgICBoMjoge1xuICAgICAgICBmb250U2l6ZTogJzE0cHgnLFxuICAgICAgICBmb250V2VpZ2h0OiAnbm9ybWFsJyxcbiAgICAgICAgbGluZUhlaWdodDogJzQ5cHgnLFxuICAgICAgICBtYXJnaW46IDAsXG4gICAgICAgIHBhZGRpbmc6IDBcbiAgICB9XG59O1xudmFyIF9Db21wb25lbnQ7XG5jbGFzcyBFcnJvciBleHRlbmRzIChfQ29tcG9uZW50ID0gX3JlYWN0LmRlZmF1bHQuQ29tcG9uZW50KSB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IHN0YXR1c0NvZGUgLCB3aXRoRGFya01vZGUgPXRydWUgIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCB0aXRsZSA9IHRoaXMucHJvcHMudGl0bGUgfHwgc3RhdHVzQ29kZXNbc3RhdHVzQ29kZV0gfHwgJ0FuIHVuZXhwZWN0ZWQgZXJyb3IgaGFzIG9jY3VycmVkJztcbiAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgICAgICBzdHlsZTogc3R5bGVzLmVycm9yXG4gICAgICAgIH0sIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfaGVhZC5kZWZhdWx0LCBudWxsLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJ0aXRsZVwiLCBudWxsLCBzdGF0dXNDb2RlID8gYCR7c3RhdHVzQ29kZX06ICR7dGl0bGV9YCA6ICdBcHBsaWNhdGlvbiBlcnJvcjogYSBjbGllbnQtc2lkZSBleGNlcHRpb24gaGFzIG9jY3VycmVkJykpLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIiwge1xuICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6IHtcbiAgICAgICAgICAgICAgICBfX2h0bWw6IGBcbiAgICAgICAgICAgICAgICBib2R5IHsgbWFyZ2luOiAwOyBjb2xvcjogIzAwMDsgYmFja2dyb3VuZDogI2ZmZjsgfVxuICAgICAgICAgICAgICAgIC5uZXh0LWVycm9yLWgxIHtcbiAgICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjMpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICR7d2l0aERhcmtNb2RlID8gYEBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcbiAgICAgICAgICAgICAgICAgIGJvZHkgeyBjb2xvcjogI2ZmZjsgYmFja2dyb3VuZDogIzAwMDsgfVxuICAgICAgICAgICAgICAgICAgLm5leHQtZXJyb3ItaDEge1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIC4zKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9YCA6ICcnfWBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSksIHN0YXR1c0NvZGUgPyAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJoMVwiLCB7XG4gICAgICAgICAgICBjbGFzc05hbWU6IFwibmV4dC1lcnJvci1oMVwiLFxuICAgICAgICAgICAgc3R5bGU6IHN0eWxlcy5oMVxuICAgICAgICB9LCBzdGF0dXNDb2RlKSA6IG51bGwsIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgICAgICBzdHlsZTogc3R5bGVzLmRlc2NcbiAgICAgICAgfSwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaDJcIiwge1xuICAgICAgICAgICAgc3R5bGU6IHN0eWxlcy5oMlxuICAgICAgICB9LCB0aGlzLnByb3BzLnRpdGxlIHx8IHN0YXR1c0NvZGUgPyB0aXRsZSA6IC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfcmVhY3QuZGVmYXVsdC5GcmFnbWVudCwgbnVsbCwgXCJBcHBsaWNhdGlvbiBlcnJvcjogYSBjbGllbnQtc2lkZSBleGNlcHRpb24gaGFzIG9jY3VycmVkIChzZWUgdGhlIGJyb3dzZXIgY29uc29sZSBmb3IgbW9yZSBpbmZvcm1hdGlvbilcIiksIFwiLlwiKSkpKTtcbiAgICB9XG59XG5FcnJvci5kaXNwbGF5TmFtZSA9ICdFcnJvclBhZ2UnO1xuRXJyb3IuZ2V0SW5pdGlhbFByb3BzID0gX2dldEluaXRpYWxQcm9wcztcbkVycm9yLm9yaWdHZXRJbml0aWFsUHJvcHMgPSBfZ2V0SW5pdGlhbFByb3BzO1xuZXhwb3J0cy5kZWZhdWx0ID0gRXJyb3I7XG5cbmlmICgodHlwZW9mIGV4cG9ydHMuZGVmYXVsdCA9PT0gJ2Z1bmN0aW9uJyB8fCAodHlwZW9mIGV4cG9ydHMuZGVmYXVsdCA9PT0gJ29iamVjdCcgJiYgZXhwb3J0cy5kZWZhdWx0ICE9PSBudWxsKSkgJiYgdHlwZW9mIGV4cG9ydHMuZGVmYXVsdC5fX2VzTW9kdWxlID09PSAndW5kZWZpbmVkJykge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cy5kZWZhdWx0LCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gIE9iamVjdC5hc3NpZ24oZXhwb3J0cy5kZWZhdWx0LCBleHBvcnRzKTtcbiAgbW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPV9lcnJvci5qcy5tYXAiXSwibmFtZXMiOlsiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJkZWZhdWx0IiwiX2ludGVyb3BfcmVxdWlyZV9kZWZhdWx0IiwicmVxdWlyZSIsIl9yZWFjdCIsIl9oZWFkIiwic3RhdHVzQ29kZXMiLCJfZ2V0SW5pdGlhbFByb3BzIiwicmVzIiwiZXJyIiwic3RhdHVzQ29kZSIsInN0eWxlcyIsImVycm9yIiwiZm9udEZhbWlseSIsImhlaWdodCIsInRleHRBbGlnbiIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiZGVzYyIsImxpbmVIZWlnaHQiLCJ2ZXJ0aWNhbEFsaWduIiwiaDEiLCJtYXJnaW4iLCJtYXJnaW5SaWdodCIsInBhZGRpbmciLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJoMiIsIl9Db21wb25lbnQiLCJFcnJvciIsIkNvbXBvbmVudCIsInJlbmRlciIsIndpdGhEYXJrTW9kZSIsInByb3BzIiwidGl0bGUiLCJjcmVhdGVFbGVtZW50Iiwic3R5bGUiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsImNsYXNzTmFtZSIsIkZyYWdtZW50IiwiZGlzcGxheU5hbWUiLCJnZXRJbml0aWFsUHJvcHMiLCJvcmlnR2V0SW5pdGlhbFByb3BzIiwiX19lc01vZHVsZSIsImFzc2lnbiIsIm1vZHVsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../../node_modules/.pnpm/next@13.0.5_biqbaboplfbrettd7655fr4n2y/node_modules/next/dist/pages/_error.js\n");

/***/ }),

/***/ "../shared/lib/head":
/*!***********************************************!*\
  !*** external "next/dist/shared/lib/head.js" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("../../node_modules/.pnpm/next@13.0.5_biqbaboplfbrettd7655fr4n2y/node_modules/next/dist/pages/_error.js"));
module.exports = __webpack_exports__;

})();