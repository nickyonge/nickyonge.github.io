"use strict";
(self["webpackChunkweb"] = self["webpackChunkweb"] || []).push([["src_css_style_css"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/css/style.css":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/css/style.css ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_vars_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./vars.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/vars.css");
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_vars_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* HORIZONTAL ORIENTATION, eg desktop / landscape tablet */
/* @media screen and (min-aspect-ratio: 1.2) { } */

/* VERTICAL ORIENTATION, eg phone / portrait tablet */
/* @media screen and (max-aspect-ratio: 1.2) { } */

/* NARROW, footer has WRAPPED so that KS Live Now btn is ABOVE Email */
/* match width to var(--viewport-bottombar-wrap) in vars.css */
/* @media screen and (max-width: 750px) { } */

/* WIDE, footer is WIDE so that KS Live Now btn INLINE with Email */
/* match width to var(--viewport-bottombar-wrap) in vars.css */
/* @media screen and (min-width: 750px) { } */

body {
    /* body height 100vh useful for window size debugging */
    /* height: 100vh; */
    margin: 0px;
    background-repeat: no-repeat;
    background-attachment: fixed;
    font-family: 'Inclusive Sans', 'Helvetica Neue', Helvetica, sans-serif;
    font-size: 10.5pt;
    color: var(--color-text-body);
    background-color: var(--color-bg-solid);
    background-image: radial-gradient(var(--color-bg-gradient-1), var(--color-bg-gradient-2) 40%, var(--color-bg-gradient-3) 127%);
}
h1 {
    margin: 0;
    font-size: 21.3pt;
    margin-top: 0px;
}
h2 {
    margin: 0;
    font-size: 16.9pt;
    margin-top: 0px;
}
h3 {
    margin: 0;
    font-size: 12pt;
    margin-top: 6.9px;
    opacity: 0.8;
}

/* TODO: switch to linear gradient */
@media screen and (min-aspect-ratio: 3) {
    body {
        background-image: none;
    }
}

#container {
    z-index: -1;
    display: grid;
    position: absolute;
    width: 100%;
    height: 100%;
    grid-template:
        [header] "header header" var(--ui-header-height) [main] "artWindow dataWindow" 1fr
        [footer] "footer footer" var(--ui-footer-height) / var(--ui-art-window-ratio) 1fr;
}

@media screen and (max-aspect-ratio: 1.2) {
    #container {
        grid-template:
            [header] "header" var(--ui-header-height) [main] "artWindow" var(--ui-art-window-ratio) [main] "dataWindow" 1fr
            [footer] "footer" var(--ui-footer-height) / 1fr;
    }
}

header {
    grid-area: header;
}
artWindow {
    grid-area: artWindow;
}
dataWindow {
    grid-area: dataWindow;
}
footer {
    grid-area: footer;
}


.title {
    display: inline-flex;
    flex-direction: column;
    height: 100%;
    padding-left: 12px;
    position: relative;
    align-items: left;
    /* font-size: 16pt; */
}

.allowSelectDefaultCursor {
    user-select: text;
    -ms-user-select: text;
    -moz-user-select: text;
    -webkit-user-select: text;
    cursor: default;
}
.preventSelect {
    user-select: none;
    -ms-user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
}


header.demoBG {
    background-color: var(--demo-bg-navbar);
}
footer.demoBG {
    background-color: var(--demo-bg-navbar);
}
artWindow.demoBG {
    background-color: var(--demo-bg-winart);
}
dataWindow.demoBG {
    background-color: var(--demo-bg-windat);
}`, "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"AAEA,0DAA0D;AAC1D,kDAAkD;;AAElD,qDAAqD;AACrD,kDAAkD;;AAElD,sEAAsE;AACtE,8DAA8D;AAC9D,6CAA6C;;AAE7C,mEAAmE;AACnE,8DAA8D;AAC9D,6CAA6C;;AAE7C;IACI,uDAAuD;IACvD,mBAAmB;IACnB,WAAW;IACX,4BAA4B;IAC5B,4BAA4B;IAC5B,sEAAsE;IACtE,iBAAiB;IACjB,6BAA6B;IAC7B,uCAAuC;IACvC,8HAA8H;AAClI;AACA;IACI,SAAS;IACT,iBAAiB;IACjB,eAAe;AACnB;AACA;IACI,SAAS;IACT,iBAAiB;IACjB,eAAe;AACnB;AACA;IACI,SAAS;IACT,eAAe;IACf,iBAAiB;IACjB,YAAY;AAChB;;AAEA,oCAAoC;AACpC;IACI;QACI,sBAAsB;IAC1B;AACJ;;AAEA;IACI,WAAW;IACX,aAAa;IACb,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ;;yFAEqF;AACzF;;AAEA;IACI;QACI;;2DAEmD;IACvD;AACJ;;AAEA;IACI,iBAAiB;AACrB;AACA;IACI,oBAAoB;AACxB;AACA;IACI,qBAAqB;AACzB;AACA;IACI,iBAAiB;AACrB;;;AAGA;IACI,oBAAoB;IACpB,sBAAsB;IACtB,YAAY;IACZ,kBAAkB;IAClB,kBAAkB;IAClB,iBAAiB;IACjB,qBAAqB;AACzB;;AAEA;IACI,iBAAiB;IACjB,qBAAqB;IACrB,sBAAsB;IACtB,yBAAyB;IACzB,eAAe;AACnB;AACA;IACI,iBAAiB;IACjB,qBAAqB;IACrB,sBAAsB;IACtB,yBAAyB;AAC7B;;;AAGA;IACI,uCAAuC;AAC3C;AACA;IACI,uCAAuC;AAC3C;AACA;IACI,uCAAuC;AAC3C;AACA;IACI,uCAAuC;AAC3C","sourcesContent":["@import 'vars.css';\r\n\r\n/* HORIZONTAL ORIENTATION, eg desktop / landscape tablet */\r\n/* @media screen and (min-aspect-ratio: 1.2) { } */\r\n\r\n/* VERTICAL ORIENTATION, eg phone / portrait tablet */\r\n/* @media screen and (max-aspect-ratio: 1.2) { } */\r\n\r\n/* NARROW, footer has WRAPPED so that KS Live Now btn is ABOVE Email */\r\n/* match width to var(--viewport-bottombar-wrap) in vars.css */\r\n/* @media screen and (max-width: 750px) { } */\r\n\r\n/* WIDE, footer is WIDE so that KS Live Now btn INLINE with Email */\r\n/* match width to var(--viewport-bottombar-wrap) in vars.css */\r\n/* @media screen and (min-width: 750px) { } */\r\n\r\nbody {\r\n    /* body height 100vh useful for window size debugging */\r\n    /* height: 100vh; */\r\n    margin: 0px;\r\n    background-repeat: no-repeat;\r\n    background-attachment: fixed;\r\n    font-family: 'Inclusive Sans', 'Helvetica Neue', Helvetica, sans-serif;\r\n    font-size: 10.5pt;\r\n    color: var(--color-text-body);\r\n    background-color: var(--color-bg-solid);\r\n    background-image: radial-gradient(var(--color-bg-gradient-1), var(--color-bg-gradient-2) 40%, var(--color-bg-gradient-3) 127%);\r\n}\r\nh1 {\r\n    margin: 0;\r\n    font-size: 21.3pt;\r\n    margin-top: 0px;\r\n}\r\nh2 {\r\n    margin: 0;\r\n    font-size: 16.9pt;\r\n    margin-top: 0px;\r\n}\r\nh3 {\r\n    margin: 0;\r\n    font-size: 12pt;\r\n    margin-top: 6.9px;\r\n    opacity: 0.8;\r\n}\r\n\r\n/* TODO: switch to linear gradient */\r\n@media screen and (min-aspect-ratio: 3) {\r\n    body {\r\n        background-image: none;\r\n    }\r\n}\r\n\r\n#container {\r\n    z-index: -1;\r\n    display: grid;\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    grid-template:\r\n        [header] \"header header\" var(--ui-header-height) [main] \"artWindow dataWindow\" 1fr\r\n        [footer] \"footer footer\" var(--ui-footer-height) / var(--ui-art-window-ratio) 1fr;\r\n}\r\n\r\n@media screen and (max-aspect-ratio: 1.2) {\r\n    #container {\r\n        grid-template:\r\n            [header] \"header\" var(--ui-header-height) [main] \"artWindow\" var(--ui-art-window-ratio) [main] \"dataWindow\" 1fr\r\n            [footer] \"footer\" var(--ui-footer-height) / 1fr;\r\n    }\r\n}\r\n\r\nheader {\r\n    grid-area: header;\r\n}\r\nartWindow {\r\n    grid-area: artWindow;\r\n}\r\ndataWindow {\r\n    grid-area: dataWindow;\r\n}\r\nfooter {\r\n    grid-area: footer;\r\n}\r\n\r\n\r\n.title {\r\n    display: inline-flex;\r\n    flex-direction: column;\r\n    height: 100%;\r\n    padding-left: 12px;\r\n    position: relative;\r\n    align-items: left;\r\n    /* font-size: 16pt; */\r\n}\r\n\r\n.allowSelectDefaultCursor {\r\n    user-select: text;\r\n    -ms-user-select: text;\r\n    -moz-user-select: text;\r\n    -webkit-user-select: text;\r\n    cursor: default;\r\n}\r\n.preventSelect {\r\n    user-select: none;\r\n    -ms-user-select: none;\r\n    -moz-user-select: none;\r\n    -webkit-user-select: none;\r\n}\r\n\r\n\r\nheader.demoBG {\r\n    background-color: var(--demo-bg-navbar);\r\n}\r\nfooter.demoBG {\r\n    background-color: var(--demo-bg-navbar);\r\n}\r\nartWindow.demoBG {\r\n    background-color: var(--demo-bg-winart);\r\n}\r\ndataWindow.demoBG {\r\n    background-color: var(--demo-bg-windat);\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/css/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QW1DLDBCQUEwQiw4QkFBOEIsK0JBQStCLGtDQUFrQyx3QkFBd0IsS0FBSyxvQkFBb0IsMEJBQTBCLDhCQUE4QiwrQkFBK0Isa0NBQWtDLEtBQUssMkJBQTJCLGdEQUFnRCxLQUFLLG1CQUFtQixnREFBZ0QsS0FBSyxzQkFBc0IsZ0RBQWdELEtBQUssdUJBQXVCLGdEQUFnRCxLQUFLLG1CQUFtQjtBQUNsMEk7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvSHZDLE1BQWtHO0FBQ2xHLE1BQXdGO0FBQ3hGLE1BQStGO0FBQy9GLE1BQWtIO0FBQ2xILE1BQTJHO0FBQzNHLE1BQTJHO0FBQzNHLE1BQW9KO0FBQ3BKO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7QUFDckMsaUJBQWlCLHVHQUFhO0FBQzlCLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsOEhBQU87Ozs7QUFJOEY7QUFDdEgsT0FBTyxpRUFBZSw4SEFBTyxJQUFJLDhIQUFPLFVBQVUsOEhBQU8sbUJBQW1CLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWIvLi9zcmMvY3NzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWIvLi9zcmMvY3NzL3N0eWxlLmNzcz9lMzg3Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3ZhcnMuY3NzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIEhPUklaT05UQUwgT1JJRU5UQVRJT04sIGVnIGRlc2t0b3AgLyBsYW5kc2NhcGUgdGFibGV0ICovXHJcbi8qIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4tYXNwZWN0LXJhdGlvOiAxLjIpIHsgfSAqL1xyXG5cclxuLyogVkVSVElDQUwgT1JJRU5UQVRJT04sIGVnIHBob25lIC8gcG9ydHJhaXQgdGFibGV0ICovXHJcbi8qIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtYXNwZWN0LXJhdGlvOiAxLjIpIHsgfSAqL1xyXG5cclxuLyogTkFSUk9XLCBmb290ZXIgaGFzIFdSQVBQRUQgc28gdGhhdCBLUyBMaXZlIE5vdyBidG4gaXMgQUJPVkUgRW1haWwgKi9cclxuLyogbWF0Y2ggd2lkdGggdG8gdmFyKC0tdmlld3BvcnQtYm90dG9tYmFyLXdyYXApIGluIHZhcnMuY3NzICovXHJcbi8qIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc1MHB4KSB7IH0gKi9cclxuXHJcbi8qIFdJREUsIGZvb3RlciBpcyBXSURFIHNvIHRoYXQgS1MgTGl2ZSBOb3cgYnRuIElOTElORSB3aXRoIEVtYWlsICovXHJcbi8qIG1hdGNoIHdpZHRoIHRvIHZhcigtLXZpZXdwb3J0LWJvdHRvbWJhci13cmFwKSBpbiB2YXJzLmNzcyAqL1xyXG4vKiBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NTBweCkgeyB9ICovXHJcblxyXG5ib2R5IHtcclxuICAgIC8qIGJvZHkgaGVpZ2h0IDEwMHZoIHVzZWZ1bCBmb3Igd2luZG93IHNpemUgZGVidWdnaW5nICovXHJcbiAgICAvKiBoZWlnaHQ6IDEwMHZoOyAqL1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICAgIGZvbnQtZmFtaWx5OiAnSW5jbHVzaXZlIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDEwLjVwdDtcclxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LWJvZHkpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmctc29saWQpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KHZhcigtLWNvbG9yLWJnLWdyYWRpZW50LTEpLCB2YXIoLS1jb2xvci1iZy1ncmFkaWVudC0yKSA0MCUsIHZhcigtLWNvbG9yLWJnLWdyYWRpZW50LTMpIDEyNyUpO1xyXG59XHJcbmgxIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtc2l6ZTogMjEuM3B0O1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG59XHJcbmgyIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtc2l6ZTogMTYuOXB0O1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG59XHJcbmgzIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtc2l6ZTogMTJwdDtcclxuICAgIG1hcmdpbi10b3A6IDYuOXB4O1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG59XHJcblxyXG4vKiBUT0RPOiBzd2l0Y2ggdG8gbGluZWFyIGdyYWRpZW50ICovXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4tYXNwZWN0LXJhdGlvOiAzKSB7XHJcbiAgICBib2R5IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xyXG4gICAgfVxyXG59XHJcblxyXG4jY29udGFpbmVyIHtcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZTpcclxuICAgICAgICBbaGVhZGVyXSBcImhlYWRlciBoZWFkZXJcIiB2YXIoLS11aS1oZWFkZXItaGVpZ2h0KSBbbWFpbl0gXCJhcnRXaW5kb3cgZGF0YVdpbmRvd1wiIDFmclxyXG4gICAgICAgIFtmb290ZXJdIFwiZm9vdGVyIGZvb3RlclwiIHZhcigtLXVpLWZvb3Rlci1oZWlnaHQpIC8gdmFyKC0tdWktYXJ0LXdpbmRvdy1yYXRpbykgMWZyO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LWFzcGVjdC1yYXRpbzogMS4yKSB7XHJcbiAgICAjY29udGFpbmVyIHtcclxuICAgICAgICBncmlkLXRlbXBsYXRlOlxyXG4gICAgICAgICAgICBbaGVhZGVyXSBcImhlYWRlclwiIHZhcigtLXVpLWhlYWRlci1oZWlnaHQpIFttYWluXSBcImFydFdpbmRvd1wiIHZhcigtLXVpLWFydC13aW5kb3ctcmF0aW8pIFttYWluXSBcImRhdGFXaW5kb3dcIiAxZnJcclxuICAgICAgICAgICAgW2Zvb3Rlcl0gXCJmb290ZXJcIiB2YXIoLS11aS1mb290ZXItaGVpZ2h0KSAvIDFmcjtcclxuICAgIH1cclxufVxyXG5cclxuaGVhZGVyIHtcclxuICAgIGdyaWQtYXJlYTogaGVhZGVyO1xyXG59XHJcbmFydFdpbmRvdyB7XHJcbiAgICBncmlkLWFyZWE6IGFydFdpbmRvdztcclxufVxyXG5kYXRhV2luZG93IHtcclxuICAgIGdyaWQtYXJlYTogZGF0YVdpbmRvdztcclxufVxyXG5mb290ZXIge1xyXG4gICAgZ3JpZC1hcmVhOiBmb290ZXI7XHJcbn1cclxuXHJcblxyXG4udGl0bGUge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMnB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYWxpZ24taXRlbXM6IGxlZnQ7XHJcbiAgICAvKiBmb250LXNpemU6IDE2cHQ7ICovXHJcbn1cclxuXHJcbi5hbGxvd1NlbGVjdERlZmF1bHRDdXJzb3Ige1xyXG4gICAgdXNlci1zZWxlY3Q6IHRleHQ7XHJcbiAgICAtbXMtdXNlci1zZWxlY3Q6IHRleHQ7XHJcbiAgICAtbW96LXVzZXItc2VsZWN0OiB0ZXh0O1xyXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogdGV4dDtcclxuICAgIGN1cnNvcjogZGVmYXVsdDtcclxufVxyXG4ucHJldmVudFNlbGVjdCB7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcblxyXG5cclxuaGVhZGVyLmRlbW9CRyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kZW1vLWJnLW5hdmJhcik7XHJcbn1cclxuZm9vdGVyLmRlbW9CRyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kZW1vLWJnLW5hdmJhcik7XHJcbn1cclxuYXJ0V2luZG93LmRlbW9CRyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kZW1vLWJnLXdpbmFydCk7XHJcbn1cclxuZGF0YVdpbmRvdy5kZW1vQkcge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGVtby1iZy13aW5kYXQpO1xyXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQSwwREFBMEQ7QUFDMUQsa0RBQWtEOztBQUVsRCxxREFBcUQ7QUFDckQsa0RBQWtEOztBQUVsRCxzRUFBc0U7QUFDdEUsOERBQThEO0FBQzlELDZDQUE2Qzs7QUFFN0MsbUVBQW1FO0FBQ25FLDhEQUE4RDtBQUM5RCw2Q0FBNkM7O0FBRTdDO0lBQ0ksdURBQXVEO0lBQ3ZELG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsNEJBQTRCO0lBQzVCLDRCQUE0QjtJQUM1QixzRUFBc0U7SUFDdEUsaUJBQWlCO0lBQ2pCLDZCQUE2QjtJQUM3Qix1Q0FBdUM7SUFDdkMsOEhBQThIO0FBQ2xJO0FBQ0E7SUFDSSxTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFNBQVM7SUFDVCxpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksU0FBUztJQUNULGVBQWU7SUFDZixpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjs7QUFFQSxvQ0FBb0M7QUFDcEM7SUFDSTtRQUNJLHNCQUFzQjtJQUMxQjtBQUNKOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWjs7eUZBRXFGO0FBQ3pGOztBQUVBO0lBQ0k7UUFDSTs7MkRBRW1EO0lBQ3ZEO0FBQ0o7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7OztBQUdBO0lBQ0ksb0JBQW9CO0lBQ3BCLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIseUJBQXlCO0lBQ3pCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLHlCQUF5QjtBQUM3Qjs7O0FBR0E7SUFDSSx1Q0FBdUM7QUFDM0M7QUFDQTtJQUNJLHVDQUF1QztBQUMzQztBQUNBO0lBQ0ksdUNBQXVDO0FBQzNDO0FBQ0E7SUFDSSx1Q0FBdUM7QUFDM0NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCAndmFycy5jc3MnO1xcclxcblxcclxcbi8qIEhPUklaT05UQUwgT1JJRU5UQVRJT04sIGVnIGRlc2t0b3AgLyBsYW5kc2NhcGUgdGFibGV0ICovXFxyXFxuLyogQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi1hc3BlY3QtcmF0aW86IDEuMikgeyB9ICovXFxyXFxuXFxyXFxuLyogVkVSVElDQUwgT1JJRU5UQVRJT04sIGVnIHBob25lIC8gcG9ydHJhaXQgdGFibGV0ICovXFxyXFxuLyogQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1hc3BlY3QtcmF0aW86IDEuMikgeyB9ICovXFxyXFxuXFxyXFxuLyogTkFSUk9XLCBmb290ZXIgaGFzIFdSQVBQRUQgc28gdGhhdCBLUyBMaXZlIE5vdyBidG4gaXMgQUJPVkUgRW1haWwgKi9cXHJcXG4vKiBtYXRjaCB3aWR0aCB0byB2YXIoLS12aWV3cG9ydC1ib3R0b21iYXItd3JhcCkgaW4gdmFycy5jc3MgKi9cXHJcXG4vKiBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NTBweCkgeyB9ICovXFxyXFxuXFxyXFxuLyogV0lERSwgZm9vdGVyIGlzIFdJREUgc28gdGhhdCBLUyBMaXZlIE5vdyBidG4gSU5MSU5FIHdpdGggRW1haWwgKi9cXHJcXG4vKiBtYXRjaCB3aWR0aCB0byB2YXIoLS12aWV3cG9ydC1ib3R0b21iYXItd3JhcCkgaW4gdmFycy5jc3MgKi9cXHJcXG4vKiBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NTBweCkgeyB9ICovXFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIC8qIGJvZHkgaGVpZ2h0IDEwMHZoIHVzZWZ1bCBmb3Igd2luZG93IHNpemUgZGVidWdnaW5nICovXFxyXFxuICAgIC8qIGhlaWdodDogMTAwdmg7ICovXFxyXFxuICAgIG1hcmdpbjogMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcclxcbiAgICBmb250LWZhbWlseTogJ0luY2x1c2l2ZSBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcclxcbiAgICBmb250LXNpemU6IDEwLjVwdDtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtYm9keSk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJnLXNvbGlkKTtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KHZhcigtLWNvbG9yLWJnLWdyYWRpZW50LTEpLCB2YXIoLS1jb2xvci1iZy1ncmFkaWVudC0yKSA0MCUsIHZhcigtLWNvbG9yLWJnLWdyYWRpZW50LTMpIDEyNyUpO1xcclxcbn1cXHJcXG5oMSB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgZm9udC1zaXplOiAyMS4zcHQ7XFxyXFxuICAgIG1hcmdpbi10b3A6IDBweDtcXHJcXG59XFxyXFxuaDIge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTYuOXB0O1xcclxcbiAgICBtYXJnaW4tdG9wOiAwcHg7XFxyXFxufVxcclxcbmgzIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBmb250LXNpemU6IDEycHQ7XFxyXFxuICAgIG1hcmdpbi10b3A6IDYuOXB4O1xcclxcbiAgICBvcGFjaXR5OiAwLjg7XFxyXFxufVxcclxcblxcclxcbi8qIFRPRE86IHN3aXRjaCB0byBsaW5lYXIgZ3JhZGllbnQgKi9cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLWFzcGVjdC1yYXRpbzogMykge1xcclxcbiAgICBib2R5IHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRhaW5lciB7XFxyXFxuICAgIHotaW5kZXg6IC0xO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGU6XFxyXFxuICAgICAgICBbaGVhZGVyXSBcXFwiaGVhZGVyIGhlYWRlclxcXCIgdmFyKC0tdWktaGVhZGVyLWhlaWdodCkgW21haW5dIFxcXCJhcnRXaW5kb3cgZGF0YVdpbmRvd1xcXCIgMWZyXFxyXFxuICAgICAgICBbZm9vdGVyXSBcXFwiZm9vdGVyIGZvb3RlclxcXCIgdmFyKC0tdWktZm9vdGVyLWhlaWdodCkgLyB2YXIoLS11aS1hcnQtd2luZG93LXJhdGlvKSAxZnI7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtYXNwZWN0LXJhdGlvOiAxLjIpIHtcXHJcXG4gICAgI2NvbnRhaW5lciB7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlOlxcclxcbiAgICAgICAgICAgIFtoZWFkZXJdIFxcXCJoZWFkZXJcXFwiIHZhcigtLXVpLWhlYWRlci1oZWlnaHQpIFttYWluXSBcXFwiYXJ0V2luZG93XFxcIiB2YXIoLS11aS1hcnQtd2luZG93LXJhdGlvKSBbbWFpbl0gXFxcImRhdGFXaW5kb3dcXFwiIDFmclxcclxcbiAgICAgICAgICAgIFtmb290ZXJdIFxcXCJmb290ZXJcXFwiIHZhcigtLXVpLWZvb3Rlci1oZWlnaHQpIC8gMWZyO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICAgIGdyaWQtYXJlYTogaGVhZGVyO1xcclxcbn1cXHJcXG5hcnRXaW5kb3cge1xcclxcbiAgICBncmlkLWFyZWE6IGFydFdpbmRvdztcXHJcXG59XFxyXFxuZGF0YVdpbmRvdyB7XFxyXFxuICAgIGdyaWQtYXJlYTogZGF0YVdpbmRvdztcXHJcXG59XFxyXFxuZm9vdGVyIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBmb290ZXI7XFxyXFxufVxcclxcblxcclxcblxcclxcbi50aXRsZSB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMTJweDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBhbGlnbi1pdGVtczogbGVmdDtcXHJcXG4gICAgLyogZm9udC1zaXplOiAxNnB0OyAqL1xcclxcbn1cXHJcXG5cXHJcXG4uYWxsb3dTZWxlY3REZWZhdWx0Q3Vyc29yIHtcXHJcXG4gICAgdXNlci1zZWxlY3Q6IHRleHQ7XFxyXFxuICAgIC1tcy11c2VyLXNlbGVjdDogdGV4dDtcXHJcXG4gICAgLW1vei11c2VyLXNlbGVjdDogdGV4dDtcXHJcXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogdGV4dDtcXHJcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcclxcbn1cXHJcXG4ucHJldmVudFNlbGVjdCB7XFxyXFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxufVxcclxcblxcclxcblxcclxcbmhlYWRlci5kZW1vQkcge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kZW1vLWJnLW5hdmJhcik7XFxyXFxufVxcclxcbmZvb3Rlci5kZW1vQkcge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kZW1vLWJnLW5hdmJhcik7XFxyXFxufVxcclxcbmFydFdpbmRvdy5kZW1vQkcge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kZW1vLWJnLXdpbmFydCk7XFxyXFxufVxcclxcbmRhdGFXaW5kb3cuZGVtb0JHIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGVtby1iZy13aW5kYXQpO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9