"use strict";
(() => {
var exports = {};
exports.id = 327;
exports.ids = [327];
exports.modules = {

/***/ 318:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Fe": () => (/* binding */ getStaticPaths),
/* harmony export */   "ML": () => (/* binding */ TagName),
/* harmony export */   "NV": () => (/* binding */ TagTitle),
/* harmony export */   "b1": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var _chunk_5IQBFQMY_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6979);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nextra_ssg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2208);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([nextra_ssg__WEBPACK_IMPORTED_MODULE_1__]);
nextra_ssg__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



// src/tags.tsx



var TagTitle = () => {
  const { tag } = (0,nextra_ssg__WEBPACK_IMPORTED_MODULE_1__.useSSG)();
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement((next_head__WEBPACK_IMPORTED_MODULE_2___default()), null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("title", null, `Posts Tagged with ${tag}`)));
};
var TagName = () => {
  const { tag } = (0,nextra_ssg__WEBPACK_IMPORTED_MODULE_1__.useSSG)();
  return tag || null;
};
var getStaticPaths = () => {
  const tags = (0,_chunk_5IQBFQMY_js__WEBPACK_IMPORTED_MODULE_3__/* .getStaticTags */ .PR)(globalThis.__nextra_internal__.pageMap);
  return {
    paths: tags.map((v) => ({ params: { tag: v } })),
    fallback: false
  };
};
var getStaticProps = ({ params: { tag } }) => {
  return {
    props: {
      ssg: {
        tag
      }
    }
  };
};


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6902:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TagName": () => (/* reexport safe */ nextra_theme_blog_tags__WEBPACK_IMPORTED_MODULE_6__.ML),
/* harmony export */   "TagTitle": () => (/* reexport safe */ nextra_theme_blog_tags__WEBPACK_IMPORTED_MODULE_6__.NV),
/* harmony export */   "default": () => (/* reexport safe */ nextra_theme_blog__WEBPACK_IMPORTED_MODULE_8__.ZP),
/* harmony export */   "getStaticPaths": () => (/* reexport safe */ nextra_theme_blog_tags__WEBPACK_IMPORTED_MODULE_6__.Fe),
/* harmony export */   "getStaticProps": () => (/* reexport safe */ nextra_theme_blog_tags__WEBPACK_IMPORTED_MODULE_6__.b1)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nextra_ssg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2208);
/* harmony import */ var _Users_thor2_Downloads_nextra_main_2_examples_blog_theme_config_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4669);
/* harmony import */ var nextra_theme_blog_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6134);
/* harmony import */ var nextra_theme_blog_style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nextra_theme_blog_style_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6945);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8293);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var nextra_theme_blog_tags__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(318);
/* harmony import */ var nextra_theme_blog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3933);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([nextra_ssg__WEBPACK_IMPORTED_MODULE_1__, nextra_theme_blog_tags__WEBPACK_IMPORTED_MODULE_6__, nextra_theme_blog__WEBPACK_IMPORTED_MODULE_8__]);
([nextra_ssg__WEBPACK_IMPORTED_MODULE_1__, nextra_theme_blog_tags__WEBPACK_IMPORTED_MODULE_6__, nextra_theme_blog__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const __nextra_pageOpts__ = {
    "filePath": "pages/tags/[tag].mdx",
    "route": "/tags/[tag]",
    "frontMatter": {
        "type": "tag"
    },
    "pageMap": [
        {
            "kind": "MdxPage",
            "name": "index",
            "route": "/",
            "frontMatter": {
                "type": "page",
                "title": "About",
                "date": "2020-01-01T00:00:00.000Z"
            }
        },
        {
            "kind": "Folder",
            "name": "posts",
            "route": "/posts",
            "children": [
                {
                    "kind": "MdxPage",
                    "name": "aaron-swartz-a-programmable-web",
                    "route": "/posts/aaron-swartz-a-programmable-web",
                    "frontMatter": {
                        "title": "Notes on A Programmable Web by Aaron Swartz",
                        "date": "2016/5/21",
                        "description": "At the time when I was getting into web development, I had the chance to read one of the most inspiring book about the web, Aaron Swartz's A Programmable Web. And it completely changed my mind.",
                        "tag": "web development",
                        "author": "Shu"
                    }
                },
                {
                    "kind": "MdxPage",
                    "name": "code-blocks",
                    "route": "/posts/code-blocks",
                    "frontMatter": {
                        "title": "Code blocks",
                        "date": "2022/7/29",
                        "description": "En example of using code blocks in your blog.",
                        "tag": "web development,JavaScript,GraphQL,C++,Java,React,Next.js,The Guild,MacBook Pro",
                        "author": "Dimitri POSTOLOV"
                    }
                },
                {
                    "kind": "MdxPage",
                    "name": "index",
                    "route": "/posts",
                    "frontMatter": {
                        "type": "posts",
                        "title": "Random Thoughts",
                        "date": "2020-01-03T00:00:00.000Z"
                    }
                },
                {
                    "kind": "MdxPage",
                    "name": "table",
                    "route": "/posts/table",
                    "frontMatter": {
                        "title": "Table",
                        "date": "2022/8/28",
                        "description": "En example of using table.",
                        "tag": "web development",
                        "author": "Dimitri POSTOLOV"
                    }
                },
                {
                    "kind": "Meta",
                    "data": {
                        "table": "Table",
                        "code-blocks": "Code blocks",
                        "index": "Random Thoughts",
                        "aaron-swartz-a-programmable-web": "Notes on A Programmable Web by Aaron Swartz"
                    }
                }
            ]
        },
        {
            "kind": "Folder",
            "name": "tags",
            "route": "/tags",
            "children": [
                {
                    "kind": "MdxPage",
                    "name": "[tag]",
                    "route": "/tags/[tag]",
                    "frontMatter": {
                        "type": "tag"
                    }
                },
                {
                    "kind": "Meta",
                    "data": {
                        "[tag]": "[tag]"
                    }
                }
            ]
        },
        {
            "kind": "Meta",
            "data": {
                "index": "About",
                "posts": "Posts",
                "tags": "Tags"
            }
        }
    ],
    "headings": [
        {
            "type": "heading",
            "depth": 1,
            "children": [
                {
                    "type": "text",
                    "value": "Posts Tagged with “",
                    "position": {
                        "start": {
                            "line": 12,
                            "column": 3,
                            "offset": 181
                        },
                        "end": {
                            "line": 12,
                            "column": 22,
                            "offset": 200
                        }
                    }
                },
                {
                    "type": "mdxJsxTextElement",
                    "name": "TagName",
                    "attributes": [],
                    "children": [],
                    "position": {
                        "start": {
                            "line": 12,
                            "column": 22,
                            "offset": 200
                        },
                        "end": {
                            "line": 12,
                            "column": 33,
                            "offset": 211
                        }
                    },
                    "data": {
                        "_mdxExplicitJsx": true
                    }
                },
                {
                    "type": "text",
                    "value": "”",
                    "position": {
                        "start": {
                            "line": 12,
                            "column": 33,
                            "offset": 211
                        },
                        "end": {
                            "line": 12,
                            "column": 34,
                            "offset": 212
                        }
                    }
                }
            ],
            "position": {
                "start": {
                    "line": 12,
                    "column": 1,
                    "offset": 179
                },
                "end": {
                    "line": 12,
                    "column": 34,
                    "offset": 212
                }
            },
            "value": "Posts Tagged with “”"
        }
    ],
    "hasJsxInH1": true,
    "timestamp": 1671896647000,
    "flexsearch": {
        "codeblocks": true
    },
    "readingTime": {
        "text": "1 min read",
        "minutes": 0.02,
        "time": 1200,
        "words": 4
    }
};
globalThis.__nextra_internal__ = {
    pageMap: __nextra_pageOpts__.pageMap,
    route: __nextra_pageOpts__.route
};
/*@jsxRuntime automatic @jsxImportSource react*/ 
const __nextra_title__ = "Posts Tagged with “”";





function _createMdxContent(props) {
    const _components = Object.assign({
        h1: "h1"
    }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__/* .useMDXComponents */ .ah)(), props.components);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(nextra_theme_blog_tags__WEBPACK_IMPORTED_MODULE_6__/* .TagTitle */ .NV, {}),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h1, {
                children: [
                    "Posts Tagged with “",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(nextra_theme_blog_tags__WEBPACK_IMPORTED_MODULE_6__/* .TagName */ .ML, {}),
                    "”"
                ]
            })
        ]
    });
}
function MDXContent(props = {}) {
    const { wrapper: MDXLayout  } = Object.assign({}, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__/* .useMDXComponents */ .ah)(), props.components);
    return MDXLayout ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MDXLayout, {
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_createMdxContent, {
            ...props
        })
    }) : _createMdxContent(props);
}
__nextra_pageOpts__.title =  false || typeof __nextra_title__ === "string" && __nextra_title__ || "[tag]";
const Content = (props)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(nextra_ssg__WEBPACK_IMPORTED_MODULE_1__.SSGContext.Provider, {
        value: props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MDXContent, {})
    });
globalThis.__nextra_pageContext__ ||= Object.create(null);
// Make sure the same component is always returned so Next.js will render the
// stable layout. We then put the actual content into a global store and use
// the route to identify it.
globalThis.__nextra_pageContext__["/tags/[tag]"] = {
    Content,
    pageOpts: __nextra_pageOpts__,
    themeConfig: _Users_thor2_Downloads_nextra_main_2_examples_blog_theme_config_jsx__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z
};


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9816:
/***/ ((module) => {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ 9081:
/***/ ((module) => {

module.exports = import("nextra/components");;

/***/ }),

/***/ 6132:
/***/ ((module) => {

module.exports = import("nextra/hooks");;

/***/ }),

/***/ 1181:
/***/ ((module) => {

module.exports = import("nextra/icons");;

/***/ }),

/***/ 2208:
/***/ ((module) => {

module.exports = import("nextra/ssg");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [252,875,445,669], () => (__webpack_exec__(6902)));
module.exports = __webpack_exports__;

})();