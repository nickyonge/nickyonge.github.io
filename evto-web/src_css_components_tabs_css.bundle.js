"use strict";
(self["webpackChunkweb"] = self["webpackChunkweb"] || []).push([["src_css_components_tabs_css"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/css/components/tabs.css":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/css/components/tabs.css ***!
  \*********************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* "Pure CSS tab indicator animation" by CeramicSoda
https://codepen.io/ceramicSoda/pen/WNgybXN */

/* html,body{
  height: 100%;
  width: 100%;
  overflow: hidden;
  background-color: #d3dce6;
  font-family: monospace; 
}
body {
  display: flex;
  justify-content: center;
  align-items: center;
} */

.tabs {
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    float: left;
    z-index: 1;
}


.tabs label {
    /* font-size: 9pt; */
    display: flex;
    align-items: center;
    justify-content: right;
    /* font-weight: 700; */
    cursor: pointer;
    opacity: var(--ui-data-sidebar-color-opacity);
    width: var(--ui-data-sidebar-tabs-width);
    height: 20%;
    text-align: right;
    user-select: none;
    margin-left: auto;
    padding-right: 10px;
    /* transition: opacity 0.2s ease-out; */
    transition: color 0.2s ease-out, opacity 0.1s ease-out;
    z-index: inherit;
}
.tabs .separator {
    transition: opacity 0.1s ease-out, --ui-data-sidebar-separator-transition 0.269s 0.0213s ease-in-out;
    background: linear-gradient(2.13deg,
            var(--ui-data-sidebar-separator-transition) 0%,
            var(--ui-data-sidebar-separator-transparent) 6.9%);
}
.tabs label .text {
    font-size: 10.5pt;
    /* 10.5pt default size */
    padding-left: 12px;
    padding-right: 0px;
    position: relative;
    display: inline-flex;
    height: auto;
    color: var(--ui-data-sidebar-color-text);
    transition: color 0.3s ease-out, opacity 0.1s ease-out;
}
/* tall dataWindow [] */
@media screen and (min-aspect-ratio: 1.2) {
    @media screen and (max-height: 500px) {
        .tabs label {
            width: calc(
                var(--ui-data-sidebar-tabs-width)
                - ((500px - 100vh) * 0.169)
            );
        }
        .tabs label .text {
            font-size: 2.8vh;
        }
    }
}
/* wide dataWindow = */
@media screen and (max-aspect-ratio: 1.2) {
    .tabs label .text {
        font-size: 10pt;
    }
    @media screen and (max-height: 620px) {
        .tabs label {
            width: calc(
                var(--ui-data-sidebar-tabs-width)
                - ((620px - 100vh) * 0.12)
            );
        }
        .tabs label .text {
            font-size: 2.13vh;
        }
    }
}
/* @media screen and (max-height: 280px) {
    .tabs label {
        font-size: small;
        max-width: 100px;
    }
} */
.tabs label .icon {
    height: 50%;
    max-height: 24px;
    min-height: 6px;
    width: auto;
    margin-left: 10px;
    /* filter: brightness(0.69) hue-rotate(213deg) saturate(80%); */
}
.tabs input[type="radio"] {
    display: none;
    width: 0;
    z-index: 2;
}
.tabs label:hover,
.tabs input[type="radio"]:checked+label {
    opacity: var(--ui-data-sidebar-color-opacity-hover-selected);
}

.tabs input[type="radio"]:checked+label {
    --ui-data-sidebar-separator-transition: var(--ui-data-sidebar-separator-transparent);
}

.tabs input[type="radio"]:checked+label {
    color: var(--ui-data-sidebar-color-text-selected);
    /* transition: color 0.2s ease-out, --ui-data-sidebar-separator-transition 0.269s 0.0213s ease-in-out; */
}

.tabMarker {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    left: 0;
    transition: transform .2s ease-in-out;
}
.tabMarker #tmBottom,
.tabMarker #tmTop {
    height: 100%;
    width: 100%;
    position: absolute;
    background-color: var(--ui-data-sidebar-color-background);
    box-shadow: 0px 0px 32px var(--ui-data-sidebar-color-shadow-full);
}
.tabMarker #tmTop {
    top: calc(-100% - 0.213px);
    padding-bottom: 0px;
    border-radius: 0 0 var(--ui-data-window-sidebar-rounding) 0;
    box-shadow: -4px 3px 5px var(--ui-data-sidebar-color-shadow-sharp);
    margin-top: 0px;
    transition: margin-top 0.2s;
}
.tabMarker #tmBottom {
    top: 20%;
    margin-top: 1px;
    border-radius: 0 var(--ui-data-window-sidebar-rounding) 0 0;
}
#tab0:checked~.tabMarker {
    transform: translateY(calc(calc(100% / 5) * 0));
}
#tab0:checked~.tabMarker #tmTop {
    /* move drop shadow out of the way on top tab selection*/
    margin-top: -8px;
}
#tab1:checked~.tabMarker {
    transform: translateY(calc(calc(100% / 5) * 1));
}
#tab2:checked~.tabMarker {
    transform: translateY(calc(calc(100% / 5) * 2));
}
#tab3:checked~.tabMarker {
    transform: translateY(calc(calc(100% / 5) * 3));
}
#tab4:checked~.tabMarker {
    transform: translateY(calc(calc(100% / 5) * 4));
}


label .icon {
    transition: opacity 0.2s ease-out, filter 0.2s ease-in-out;
    opacity: var(--opacity-svg-default-unsel);
    filter:
        grayscale(var(--color-svg-default-gry-unsel)) brightness(var(--color-svg-default-bri-unsel)) saturate(var(--color-svg-default-sat-unsel)) hue-rotate(var(--color-svg-default-hue-unsel));
}
.tabs input[type="radio"]:hover+label .icon {
    transition: opacity 0.2s ease-out;
    opacity: var(--opacity-svg-default-hover);
}
.tabs input[type="radio"]:checked+label .icon {
    transition: opacity 0.2s ease-out, filter 0.2s ease-out, --ui-data-bg-blendcolor 0.5s ease-in-out;
    opacity: var(--opacity-svg-default-sel);
    filter:
        grayscale(var(--color-svg-default-gry-sel)) brightness(var(--color-svg-default-bri-sel)) saturate(var(--color-svg-default-sat-sel)) hue-rotate(var(--color-svg-default-hue-sel));
}
.tabs input[type="radio"]+label .text.default {
    transition: color 0.2s ease-out;
    color: var(--color-data-bg-text-default-unsel);
}
.tabs input[type="radio"]:checked+label .text.default {
    transition: color 0.2s ease-out;
    color: var(--color-data-bg-text-default);
}

label .icon.red {
    opacity: var(--opacity-svg-red-unsel);
    filter:
        grayscale(var(--color-svg-red-gry-unsel)) brightness(var(--color-svg-red-bri-unsel)) saturate(var(--color-svg-red-sat-unsel)) hue-rotate(var(--color-svg-red-hue-unsel));
}
.tabs input[type="radio"]:hover+label .icon.red {
    opacity: var(--opacity-svg-red-hover);
}
.tabs input[type="radio"]:checked+label .icon.red {
    opacity: var(--opacity-svg-red-sel);
    filter:
        grayscale(var(--color-svg-red-gry-sel)) brightness(var(--color-svg-red-bri-sel)) saturate(var(--color-svg-red-sat-sel)) hue-rotate(var(--color-svg-red-hue-sel));
    --ui-data-bg-blendcolor: var(--ui-data-bg-red);
}
.tabs input[type="radio"]+label .text.red {
    transition: color 0.2s ease-out;
    color: var(--color-data-bg-text-red-unsel);
}
.tabs input[type="radio"]:checked+label .text.red {
    transition: color 0.2s ease-out;
    color: var(--color-data-bg-text-red);
}

label .icon.orange {
    opacity: var(--opacity-svg-orange-unsel);
    filter:
        grayscale(var(--color-svg-orange-gry-unsel)) brightness(var(--color-svg-orange-bri-unsel)) saturate(var(--color-svg-orange-sat-unsel)) hue-rotate(var(--color-svg-orange-hue-unsel));
}
.tabs input[type="radio"]:hover+label .icon.orange {
    opacity: var(--opacity-svg-orange-hover);
}
.tabs input[type="radio"]:checked+label .icon.orange {
    opacity: var(--opacity-svg-orange-sel);
    filter:
        grayscale(var(--color-svg-orange-gry-sel)) brightness(var(--color-svg-orange-bri-sel)) saturate(var(--color-svg-orange-sat-sel)) hue-rotate(var(--color-svg-orange-hue-sel));
}
.tabs input[type="radio"]+label .text.orange {
    transition: color 0.2s ease-out;
    color: var(--color-data-bg-text-orange-unsel);
}
.tabs input[type="radio"]:checked+label .text.orange {
    transition: color 0.2s ease-out;
    color: var(--color-data-bg-text-orange);
}

/* yellow not implemented
label .icon.yellow {
    opacity: var(--opacity-svg-yellow-unsel);
    filter:
        grayscale(  var(--color-svg-yellow-gry-unsel))
        brightness( var(--color-svg-yellow-bri-unsel)) 
        saturate(   var(--color-svg-yellow-sat-unsel)) 
        hue-rotate( var(--color-svg-yellow-hue-unsel));
}
.tabs input[type="radio"]:hover+label .icon.yellow { 
    opacity: var(--opacity-svg-yellow-hover);
}
.tabs input[type="radio"]:checked+label .icon.yellow { 
    opacity: var(--opacity-svg-yellow-sel);
    filter:
        grayscale(  var(--color-svg-yellow-gry-sel))
        brightness( var(--color-svg-yellow-bri-sel)) 
        saturate(   var(--color-svg-yellow-sat-sel)) 
        hue-rotate( var(--color-svg-yellow-hue-sel));
}
.tabs input[type="radio"]+label .text.yellow {
    transition: color 0.2s ease-out;
    color: var(--color-data-bg-text-yellow-unsel);
}
.tabs input[type="radio"]:checked+label .text.yellow {
    transition: color 0.2s ease-out;
    color: var(--color-data-bg-text-yellow);
}
*/

label .icon.green {
    opacity: var(--opacity-svg-green-unsel);
    filter:
        grayscale(var(--color-svg-green-gry-unsel)) brightness(var(--color-svg-green-bri-unsel)) saturate(var(--color-svg-green-sat-unsel)) hue-rotate(var(--color-svg-green-hue-unsel));
}
.tabs input[type="radio"]:hover+label .icon.green {
    opacity: var(--opacity-svg-green-hover);
}
.tabs input[type="radio"]:checked+label .icon.green {
    opacity: var(--opacity-svg-green-sel);
    filter:
        grayscale(var(--color-svg-green-gry-sel)) brightness(var(--color-svg-green-bri-sel)) saturate(var(--color-svg-green-sat-sel)) hue-rotate(var(--color-svg-green-hue-sel));
}
.tabs input[type="radio"]+label .text.green {
    transition: color 0.2s ease-out;
    color: var(--color-data-bg-text-green-unsel);
}
.tabs input[type="radio"]:checked+label .text.green {
    transition: color 0.2s ease-out;
    color: var(--color-data-bg-text-green);
}

label .icon.blue {
    opacity: var(--opacity-svg-blue-unsel);
    filter:
        grayscale(var(--color-svg-blue-gry-unsel)) brightness(var(--color-svg-blue-bri-unsel)) saturate(var(--color-svg-blue-sat-unsel)) hue-rotate(var(--color-svg-blue-hue-unsel));
}
.tabs input[type="radio"]:hover+label .icon.blue {
    opacity: var(--opacity-svg-blue-hover);
}
.tabs input[type="radio"]:checked+label .icon.blue {
    opacity: var(--opacity-svg-blue-sel);
    filter:
        grayscale(var(--color-svg-blue-gry-sel)) brightness(var(--color-svg-blue-bri-sel)) saturate(var(--color-svg-blue-sat-sel)) hue-rotate(var(--color-svg-blue-hue-sel));
}
.tabs input[type="radio"]+label .text.blue {
    transition: color 0.2s ease-out;
    color: var(--color-data-bg-text-blue-unsel);
}
.tabs input[type="radio"]:checked+label .text.blue {
    transition: color 0.2s ease-out;
    color: var(--color-data-bg-text-blue);
}

label .icon.purple {
    opacity: var(--opacity-svg-purple-unsel);
    filter:
        grayscale(var(--color-svg-purple-gry-unsel)) brightness(var(--color-svg-purple-bri-unsel)) saturate(var(--color-svg-purple-sat-unsel)) hue-rotate(var(--color-svg-purple-hue-unsel));
}
.tabs input[type="radio"]:hover+label .icon.purple {
    opacity: var(--opacity-svg-purple-hover);
}
.tabs input[type="radio"]:checked+label .icon.purple {
    opacity: var(--opacity-svg-purple-sel);
    filter:
        grayscale(var(--color-svg-purple-gry-sel)) brightness(var(--color-svg-purple-bri-sel)) saturate(var(--color-svg-purple-sat-sel)) hue-rotate(var(--color-svg-purple-hue-sel));
}
.tabs input[type="radio"]+label .text.purple {
    transition: color 0.2s ease-out;
    color: var(--color-data-bg-text-purple-unsel);
}
.tabs input[type="radio"]:checked+label .text.purple {
    transition: color 0.2s ease-out;
    color: var(--color-data-bg-text-purple);
}

/* 
#tab0 + label .icon {
    filter: grayscale(var(--ui-data-sidebar-tab0-grayscale)) brightness(var(--ui-data-sidebar-tab-brightness-unsel)) saturate(var(--ui-data-sidebar-tab-saturation-unsel)) hue-rotate(var(--ui-data-sidebar-tab0-hue)) saturate(var(--ui-data-sidebar-tab-saturation-unsel));
}
#tab1 + label .icon {
    filter: brightness(var(--ui-data-sidebar-tab-brightness-unsel)) hue-rotate(var(--ui-data-sidebar-tab1-hue)) saturate(var(--ui-data-sidebar-tab-saturation-unsel));
}
#tab2 + label .icon {
    filter: brightness(var(--ui-data-sidebar-tab-brightness-unsel)) hue-rotate(var(--ui-data-sidebar-tab2-hue)) saturate(var(--ui-data-sidebar-tab-saturation-unsel));
}
#tab3 + label .icon {
    filter: brightness(var(--ui-data-sidebar-tab-brightness-unsel)) hue-rotate(var(--ui-data-sidebar-tab3-hue)) saturate(var(--ui-data-sidebar-tab-saturation-unsel));
}
#tab4 + label .icon {
    filter: brightness(var(--ui-data-sidebar-tab-brightness-unsel)) hue-rotate(var(--ui-data-sidebar-tab4-hue)) saturate(var(--ui-data-sidebar-tab-saturation-unsel));
}
#tab0:checked + label .icon {
    filter: grayscale(var(--ui-data-sidebar-tab0-grayscale)) brightness(var(--ui-data-sidebar-tab-brightness-sel)) hue-rotate(var(--ui-data-sidebar-tab0-hue)) saturate(var(--ui-data-sidebar-tab-saturation-sel));
}
#tab1:checked + label .icon {
    filter: brightness(var(--ui-data-sidebar-tab-brightness-sel)) hue-rotate(var(--ui-data-sidebar-tab1-hue)) saturate(var(--ui-data-sidebar-tab-saturation-sel));
}
#tab2:checked + label .icon {
    filter: brightness(var(--ui-data-sidebar-tab-brightness-sel)) hue-rotate(var(--ui-data-sidebar-tab2-hue)) saturate(var(--ui-data-sidebar-tab-saturation-sel));
}
#tab3:checked + label .icon {
    filter: brightness(var(--ui-data-sidebar-tab-brightness-sel)) hue-rotate(var(--ui-data-sidebar-tab3-hue)) saturate(var(--ui-data-sidebar-tab-saturation-sel));
}
#tab4:checked + label .icon {
    filter: brightness(var(--ui-data-sidebar-tab-brightness-sel)) hue-rotate(var(--ui-data-sidebar-tab4-hue)) saturate(var(--ui-data-sidebar-tab-saturation-sel));
} */`, "",{"version":3,"sources":["webpack://./src/css/components/tabs.css"],"names":[],"mappings":"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","sourcesContent":["/* \"Pure CSS tab indicator animation\" by CeramicSoda\r\nhttps://codepen.io/ceramicSoda/pen/WNgybXN */\r\n\r\n/* html,body{\r\n  height: 100%;\r\n  width: 100%;\r\n  overflow: hidden;\r\n  background-color: #d3dce6;\r\n  font-family: monospace; \r\n}\r\nbody {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n} */\r\n\r\n.tabs {\r\n    height: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    position: relative;\r\n    float: left;\r\n    z-index: 1;\r\n}\r\n\r\n\r\n.tabs label {\r\n    /* font-size: 9pt; */\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: right;\r\n    /* font-weight: 700; */\r\n    cursor: pointer;\r\n    opacity: var(--ui-data-sidebar-color-opacity);\r\n    width: var(--ui-data-sidebar-tabs-width);\r\n    height: 20%;\r\n    text-align: right;\r\n    user-select: none;\r\n    margin-left: auto;\r\n    padding-right: 10px;\r\n    /* transition: opacity 0.2s ease-out; */\r\n    transition: color 0.2s ease-out, opacity 0.1s ease-out;\r\n    z-index: inherit;\r\n}\r\n.tabs .separator {\r\n    transition: opacity 0.1s ease-out, --ui-data-sidebar-separator-transition 0.269s 0.0213s ease-in-out;\r\n    background: linear-gradient(2.13deg,\r\n            var(--ui-data-sidebar-separator-transition) 0%,\r\n            var(--ui-data-sidebar-separator-transparent) 6.9%);\r\n}\r\n.tabs label .text {\r\n    font-size: 10.5pt;\r\n    /* 10.5pt default size */\r\n    padding-left: 12px;\r\n    padding-right: 0px;\r\n    position: relative;\r\n    display: inline-flex;\r\n    height: auto;\r\n    color: var(--ui-data-sidebar-color-text);\r\n    transition: color 0.3s ease-out, opacity 0.1s ease-out;\r\n}\r\n/* tall dataWindow [] */\r\n@media screen and (min-aspect-ratio: 1.2) {\r\n    @media screen and (max-height: 500px) {\r\n        .tabs label {\r\n            width: calc(\r\n                var(--ui-data-sidebar-tabs-width)\r\n                - ((500px - 100vh) * 0.169)\r\n            );\r\n        }\r\n        .tabs label .text {\r\n            font-size: 2.8vh;\r\n        }\r\n    }\r\n}\r\n/* wide dataWindow = */\r\n@media screen and (max-aspect-ratio: 1.2) {\r\n    .tabs label .text {\r\n        font-size: 10pt;\r\n    }\r\n    @media screen and (max-height: 620px) {\r\n        .tabs label {\r\n            width: calc(\r\n                var(--ui-data-sidebar-tabs-width)\r\n                - ((620px - 100vh) * 0.12)\r\n            );\r\n        }\r\n        .tabs label .text {\r\n            font-size: 2.13vh;\r\n        }\r\n    }\r\n}\r\n/* @media screen and (max-height: 280px) {\r\n    .tabs label {\r\n        font-size: small;\r\n        max-width: 100px;\r\n    }\r\n} */\r\n.tabs label .icon {\r\n    height: 50%;\r\n    max-height: 24px;\r\n    min-height: 6px;\r\n    width: auto;\r\n    margin-left: 10px;\r\n    /* filter: brightness(0.69) hue-rotate(213deg) saturate(80%); */\r\n}\r\n.tabs input[type=\"radio\"] {\r\n    display: none;\r\n    width: 0;\r\n    z-index: 2;\r\n}\r\n.tabs label:hover,\r\n.tabs input[type=\"radio\"]:checked+label {\r\n    opacity: var(--ui-data-sidebar-color-opacity-hover-selected);\r\n}\r\n\r\n.tabs input[type=\"radio\"]:checked+label {\r\n    --ui-data-sidebar-separator-transition: var(--ui-data-sidebar-separator-transparent);\r\n}\r\n\r\n.tabs input[type=\"radio\"]:checked+label {\r\n    color: var(--ui-data-sidebar-color-text-selected);\r\n    /* transition: color 0.2s ease-out, --ui-data-sidebar-separator-transition 0.269s 0.0213s ease-in-out; */\r\n}\r\n\r\n.tabMarker {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    left: 0;\r\n    transition: transform .2s ease-in-out;\r\n}\r\n.tabMarker #tmBottom,\r\n.tabMarker #tmTop {\r\n    height: 100%;\r\n    width: 100%;\r\n    position: absolute;\r\n    background-color: var(--ui-data-sidebar-color-background);\r\n    box-shadow: 0px 0px 32px var(--ui-data-sidebar-color-shadow-full);\r\n}\r\n.tabMarker #tmTop {\r\n    top: calc(-100% - 0.213px);\r\n    padding-bottom: 0px;\r\n    border-radius: 0 0 var(--ui-data-window-sidebar-rounding) 0;\r\n    box-shadow: -4px 3px 5px var(--ui-data-sidebar-color-shadow-sharp);\r\n    margin-top: 0px;\r\n    transition: margin-top 0.2s;\r\n}\r\n.tabMarker #tmBottom {\r\n    top: 20%;\r\n    margin-top: 1px;\r\n    border-radius: 0 var(--ui-data-window-sidebar-rounding) 0 0;\r\n}\r\n#tab0:checked~.tabMarker {\r\n    transform: translateY(calc(calc(100% / 5) * 0));\r\n}\r\n#tab0:checked~.tabMarker #tmTop {\r\n    /* move drop shadow out of the way on top tab selection*/\r\n    margin-top: -8px;\r\n}\r\n#tab1:checked~.tabMarker {\r\n    transform: translateY(calc(calc(100% / 5) * 1));\r\n}\r\n#tab2:checked~.tabMarker {\r\n    transform: translateY(calc(calc(100% / 5) * 2));\r\n}\r\n#tab3:checked~.tabMarker {\r\n    transform: translateY(calc(calc(100% / 5) * 3));\r\n}\r\n#tab4:checked~.tabMarker {\r\n    transform: translateY(calc(calc(100% / 5) * 4));\r\n}\r\n\r\n\r\nlabel .icon {\r\n    transition: opacity 0.2s ease-out, filter 0.2s ease-in-out;\r\n    opacity: var(--opacity-svg-default-unsel);\r\n    filter:\r\n        grayscale(var(--color-svg-default-gry-unsel)) brightness(var(--color-svg-default-bri-unsel)) saturate(var(--color-svg-default-sat-unsel)) hue-rotate(var(--color-svg-default-hue-unsel));\r\n}\r\n.tabs input[type=\"radio\"]:hover+label .icon {\r\n    transition: opacity 0.2s ease-out;\r\n    opacity: var(--opacity-svg-default-hover);\r\n}\r\n.tabs input[type=\"radio\"]:checked+label .icon {\r\n    transition: opacity 0.2s ease-out, filter 0.2s ease-out, --ui-data-bg-blendcolor 0.5s ease-in-out;\r\n    opacity: var(--opacity-svg-default-sel);\r\n    filter:\r\n        grayscale(var(--color-svg-default-gry-sel)) brightness(var(--color-svg-default-bri-sel)) saturate(var(--color-svg-default-sat-sel)) hue-rotate(var(--color-svg-default-hue-sel));\r\n}\r\n.tabs input[type=\"radio\"]+label .text.default {\r\n    transition: color 0.2s ease-out;\r\n    color: var(--color-data-bg-text-default-unsel);\r\n}\r\n.tabs input[type=\"radio\"]:checked+label .text.default {\r\n    transition: color 0.2s ease-out;\r\n    color: var(--color-data-bg-text-default);\r\n}\r\n\r\nlabel .icon.red {\r\n    opacity: var(--opacity-svg-red-unsel);\r\n    filter:\r\n        grayscale(var(--color-svg-red-gry-unsel)) brightness(var(--color-svg-red-bri-unsel)) saturate(var(--color-svg-red-sat-unsel)) hue-rotate(var(--color-svg-red-hue-unsel));\r\n}\r\n.tabs input[type=\"radio\"]:hover+label .icon.red {\r\n    opacity: var(--opacity-svg-red-hover);\r\n}\r\n.tabs input[type=\"radio\"]:checked+label .icon.red {\r\n    opacity: var(--opacity-svg-red-sel);\r\n    filter:\r\n        grayscale(var(--color-svg-red-gry-sel)) brightness(var(--color-svg-red-bri-sel)) saturate(var(--color-svg-red-sat-sel)) hue-rotate(var(--color-svg-red-hue-sel));\r\n    --ui-data-bg-blendcolor: var(--ui-data-bg-red);\r\n}\r\n.tabs input[type=\"radio\"]+label .text.red {\r\n    transition: color 0.2s ease-out;\r\n    color: var(--color-data-bg-text-red-unsel);\r\n}\r\n.tabs input[type=\"radio\"]:checked+label .text.red {\r\n    transition: color 0.2s ease-out;\r\n    color: var(--color-data-bg-text-red);\r\n}\r\n\r\nlabel .icon.orange {\r\n    opacity: var(--opacity-svg-orange-unsel);\r\n    filter:\r\n        grayscale(var(--color-svg-orange-gry-unsel)) brightness(var(--color-svg-orange-bri-unsel)) saturate(var(--color-svg-orange-sat-unsel)) hue-rotate(var(--color-svg-orange-hue-unsel));\r\n}\r\n.tabs input[type=\"radio\"]:hover+label .icon.orange {\r\n    opacity: var(--opacity-svg-orange-hover);\r\n}\r\n.tabs input[type=\"radio\"]:checked+label .icon.orange {\r\n    opacity: var(--opacity-svg-orange-sel);\r\n    filter:\r\n        grayscale(var(--color-svg-orange-gry-sel)) brightness(var(--color-svg-orange-bri-sel)) saturate(var(--color-svg-orange-sat-sel)) hue-rotate(var(--color-svg-orange-hue-sel));\r\n}\r\n.tabs input[type=\"radio\"]+label .text.orange {\r\n    transition: color 0.2s ease-out;\r\n    color: var(--color-data-bg-text-orange-unsel);\r\n}\r\n.tabs input[type=\"radio\"]:checked+label .text.orange {\r\n    transition: color 0.2s ease-out;\r\n    color: var(--color-data-bg-text-orange);\r\n}\r\n\r\n/* yellow not implemented\r\nlabel .icon.yellow {\r\n    opacity: var(--opacity-svg-yellow-unsel);\r\n    filter:\r\n        grayscale(  var(--color-svg-yellow-gry-unsel))\r\n        brightness( var(--color-svg-yellow-bri-unsel)) \r\n        saturate(   var(--color-svg-yellow-sat-unsel)) \r\n        hue-rotate( var(--color-svg-yellow-hue-unsel));\r\n}\r\n.tabs input[type=\"radio\"]:hover+label .icon.yellow { \r\n    opacity: var(--opacity-svg-yellow-hover);\r\n}\r\n.tabs input[type=\"radio\"]:checked+label .icon.yellow { \r\n    opacity: var(--opacity-svg-yellow-sel);\r\n    filter:\r\n        grayscale(  var(--color-svg-yellow-gry-sel))\r\n        brightness( var(--color-svg-yellow-bri-sel)) \r\n        saturate(   var(--color-svg-yellow-sat-sel)) \r\n        hue-rotate( var(--color-svg-yellow-hue-sel));\r\n}\r\n.tabs input[type=\"radio\"]+label .text.yellow {\r\n    transition: color 0.2s ease-out;\r\n    color: var(--color-data-bg-text-yellow-unsel);\r\n}\r\n.tabs input[type=\"radio\"]:checked+label .text.yellow {\r\n    transition: color 0.2s ease-out;\r\n    color: var(--color-data-bg-text-yellow);\r\n}\r\n*/\r\n\r\nlabel .icon.green {\r\n    opacity: var(--opacity-svg-green-unsel);\r\n    filter:\r\n        grayscale(var(--color-svg-green-gry-unsel)) brightness(var(--color-svg-green-bri-unsel)) saturate(var(--color-svg-green-sat-unsel)) hue-rotate(var(--color-svg-green-hue-unsel));\r\n}\r\n.tabs input[type=\"radio\"]:hover+label .icon.green {\r\n    opacity: var(--opacity-svg-green-hover);\r\n}\r\n.tabs input[type=\"radio\"]:checked+label .icon.green {\r\n    opacity: var(--opacity-svg-green-sel);\r\n    filter:\r\n        grayscale(var(--color-svg-green-gry-sel)) brightness(var(--color-svg-green-bri-sel)) saturate(var(--color-svg-green-sat-sel)) hue-rotate(var(--color-svg-green-hue-sel));\r\n}\r\n.tabs input[type=\"radio\"]+label .text.green {\r\n    transition: color 0.2s ease-out;\r\n    color: var(--color-data-bg-text-green-unsel);\r\n}\r\n.tabs input[type=\"radio\"]:checked+label .text.green {\r\n    transition: color 0.2s ease-out;\r\n    color: var(--color-data-bg-text-green);\r\n}\r\n\r\nlabel .icon.blue {\r\n    opacity: var(--opacity-svg-blue-unsel);\r\n    filter:\r\n        grayscale(var(--color-svg-blue-gry-unsel)) brightness(var(--color-svg-blue-bri-unsel)) saturate(var(--color-svg-blue-sat-unsel)) hue-rotate(var(--color-svg-blue-hue-unsel));\r\n}\r\n.tabs input[type=\"radio\"]:hover+label .icon.blue {\r\n    opacity: var(--opacity-svg-blue-hover);\r\n}\r\n.tabs input[type=\"radio\"]:checked+label .icon.blue {\r\n    opacity: var(--opacity-svg-blue-sel);\r\n    filter:\r\n        grayscale(var(--color-svg-blue-gry-sel)) brightness(var(--color-svg-blue-bri-sel)) saturate(var(--color-svg-blue-sat-sel)) hue-rotate(var(--color-svg-blue-hue-sel));\r\n}\r\n.tabs input[type=\"radio\"]+label .text.blue {\r\n    transition: color 0.2s ease-out;\r\n    color: var(--color-data-bg-text-blue-unsel);\r\n}\r\n.tabs input[type=\"radio\"]:checked+label .text.blue {\r\n    transition: color 0.2s ease-out;\r\n    color: var(--color-data-bg-text-blue);\r\n}\r\n\r\nlabel .icon.purple {\r\n    opacity: var(--opacity-svg-purple-unsel);\r\n    filter:\r\n        grayscale(var(--color-svg-purple-gry-unsel)) brightness(var(--color-svg-purple-bri-unsel)) saturate(var(--color-svg-purple-sat-unsel)) hue-rotate(var(--color-svg-purple-hue-unsel));\r\n}\r\n.tabs input[type=\"radio\"]:hover+label .icon.purple {\r\n    opacity: var(--opacity-svg-purple-hover);\r\n}\r\n.tabs input[type=\"radio\"]:checked+label .icon.purple {\r\n    opacity: var(--opacity-svg-purple-sel);\r\n    filter:\r\n        grayscale(var(--color-svg-purple-gry-sel)) brightness(var(--color-svg-purple-bri-sel)) saturate(var(--color-svg-purple-sat-sel)) hue-rotate(var(--color-svg-purple-hue-sel));\r\n}\r\n.tabs input[type=\"radio\"]+label .text.purple {\r\n    transition: color 0.2s ease-out;\r\n    color: var(--color-data-bg-text-purple-unsel);\r\n}\r\n.tabs input[type=\"radio\"]:checked+label .text.purple {\r\n    transition: color 0.2s ease-out;\r\n    color: var(--color-data-bg-text-purple);\r\n}\r\n\r\n/* \r\n#tab0 + label .icon {\r\n    filter: grayscale(var(--ui-data-sidebar-tab0-grayscale)) brightness(var(--ui-data-sidebar-tab-brightness-unsel)) saturate(var(--ui-data-sidebar-tab-saturation-unsel)) hue-rotate(var(--ui-data-sidebar-tab0-hue)) saturate(var(--ui-data-sidebar-tab-saturation-unsel));\r\n}\r\n#tab1 + label .icon {\r\n    filter: brightness(var(--ui-data-sidebar-tab-brightness-unsel)) hue-rotate(var(--ui-data-sidebar-tab1-hue)) saturate(var(--ui-data-sidebar-tab-saturation-unsel));\r\n}\r\n#tab2 + label .icon {\r\n    filter: brightness(var(--ui-data-sidebar-tab-brightness-unsel)) hue-rotate(var(--ui-data-sidebar-tab2-hue)) saturate(var(--ui-data-sidebar-tab-saturation-unsel));\r\n}\r\n#tab3 + label .icon {\r\n    filter: brightness(var(--ui-data-sidebar-tab-brightness-unsel)) hue-rotate(var(--ui-data-sidebar-tab3-hue)) saturate(var(--ui-data-sidebar-tab-saturation-unsel));\r\n}\r\n#tab4 + label .icon {\r\n    filter: brightness(var(--ui-data-sidebar-tab-brightness-unsel)) hue-rotate(var(--ui-data-sidebar-tab4-hue)) saturate(var(--ui-data-sidebar-tab-saturation-unsel));\r\n}\r\n#tab0:checked + label .icon {\r\n    filter: grayscale(var(--ui-data-sidebar-tab0-grayscale)) brightness(var(--ui-data-sidebar-tab-brightness-sel)) hue-rotate(var(--ui-data-sidebar-tab0-hue)) saturate(var(--ui-data-sidebar-tab-saturation-sel));\r\n}\r\n#tab1:checked + label .icon {\r\n    filter: brightness(var(--ui-data-sidebar-tab-brightness-sel)) hue-rotate(var(--ui-data-sidebar-tab1-hue)) saturate(var(--ui-data-sidebar-tab-saturation-sel));\r\n}\r\n#tab2:checked + label .icon {\r\n    filter: brightness(var(--ui-data-sidebar-tab-brightness-sel)) hue-rotate(var(--ui-data-sidebar-tab2-hue)) saturate(var(--ui-data-sidebar-tab-saturation-sel));\r\n}\r\n#tab3:checked + label .icon {\r\n    filter: brightness(var(--ui-data-sidebar-tab-brightness-sel)) hue-rotate(var(--ui-data-sidebar-tab3-hue)) saturate(var(--ui-data-sidebar-tab-saturation-sel));\r\n}\r\n#tab4:checked + label .icon {\r\n    filter: brightness(var(--ui-data-sidebar-tab-brightness-sel)) hue-rotate(var(--ui-data-sidebar-tab4-hue)) saturate(var(--ui-data-sidebar-tab-saturation-sel));\r\n} */"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/css/components/tabs.css":
/*!*************************************!*\
  !*** ./src/css/components/tabs.css ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_tabs_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./tabs.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/css/components/tabs.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_tabs_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_tabs_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_tabs_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_tabs_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2Nzc19jb21wb25lbnRzX3RhYnNfY3NzLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ2dIO0FBQ2pCO0FBQy9GLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtFQUFrRTtBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkdBQTJHO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsU0FBUyw4RkFBOEYsUUFBUSxnQkFBZ0IsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLE9BQU8sT0FBTyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsTUFBTSxZQUFZLE1BQU0sS0FBSyxLQUFLLE9BQU8sS0FBSyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxLQUFLLE9BQU8sS0FBSyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssS0FBSyxTQUFTLEtBQUssS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsS0FBSyxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxNQUFNLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlB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QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWkEsTUFBcUc7QUFDckcsTUFBMkY7QUFDM0YsTUFBa0c7QUFDbEcsTUFBcUg7QUFDckgsTUFBOEc7QUFDOUcsTUFBOEc7QUFDOUcsTUFBeUo7QUFDeko7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTtBQUNyQyxpQkFBaUIsdUdBQWE7QUFDOUIsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyw2SEFBTzs7OztBQUltRztBQUMzSCxPQUFPLGlFQUFlLDZIQUFPLElBQUksNkhBQU8sVUFBVSw2SEFBTyxtQkFBbUIsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYi8uL3NyYy9jc3MvY29tcG9uZW50cy90YWJzLmNzcyIsIndlYnBhY2s6Ly93ZWIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2ViLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2ViLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2ViLy4vc3JjL2Nzcy9jb21wb25lbnRzL3RhYnMuY3NzPzNjMmQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIFwiUHVyZSBDU1MgdGFiIGluZGljYXRvciBhbmltYXRpb25cIiBieSBDZXJhbWljU29kYVxyXG5odHRwczovL2NvZGVwZW4uaW8vY2VyYW1pY1NvZGEvcGVuL1dOZ3liWE4gKi9cclxuXHJcbi8qIGh0bWwsYm9keXtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDNkY2U2O1xyXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7IFxyXG59XHJcbmJvZHkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufSAqL1xyXG5cclxuLnRhYnMge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcblxyXG4udGFicyBsYWJlbCB7XHJcbiAgICAvKiBmb250LXNpemU6IDlwdDsgKi9cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiByaWdodDtcclxuICAgIC8qIGZvbnQtd2VpZ2h0OiA3MDA7ICovXHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBvcGFjaXR5OiB2YXIoLS11aS1kYXRhLXNpZGViYXItY29sb3Itb3BhY2l0eSk7XHJcbiAgICB3aWR0aDogdmFyKC0tdWktZGF0YS1zaWRlYmFyLXRhYnMtd2lkdGgpO1xyXG4gICAgaGVpZ2h0OiAyMCU7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgLyogdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGVhc2Utb3V0OyAqL1xyXG4gICAgdHJhbnNpdGlvbjogY29sb3IgMC4ycyBlYXNlLW91dCwgb3BhY2l0eSAwLjFzIGVhc2Utb3V0O1xyXG4gICAgei1pbmRleDogaW5oZXJpdDtcclxufVxyXG4udGFicyAuc2VwYXJhdG9yIHtcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4xcyBlYXNlLW91dCwgLS11aS1kYXRhLXNpZGViYXItc2VwYXJhdG9yLXRyYW5zaXRpb24gMC4yNjlzIDAuMDIxM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMi4xM2RlZyxcclxuICAgICAgICAgICAgdmFyKC0tdWktZGF0YS1zaWRlYmFyLXNlcGFyYXRvci10cmFuc2l0aW9uKSAwJSxcclxuICAgICAgICAgICAgdmFyKC0tdWktZGF0YS1zaWRlYmFyLXNlcGFyYXRvci10cmFuc3BhcmVudCkgNi45JSk7XHJcbn1cclxuLnRhYnMgbGFiZWwgLnRleHQge1xyXG4gICAgZm9udC1zaXplOiAxMC41cHQ7XHJcbiAgICAvKiAxMC41cHQgZGVmYXVsdCBzaXplICovXHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEycHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGNvbG9yOiB2YXIoLS11aS1kYXRhLXNpZGViYXItY29sb3ItdGV4dCk7XHJcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2Utb3V0LCBvcGFjaXR5IDAuMXMgZWFzZS1vdXQ7XHJcbn1cclxuLyogdGFsbCBkYXRhV2luZG93IFtdICovXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4tYXNwZWN0LXJhdGlvOiAxLjIpIHtcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA1MDBweCkge1xyXG4gICAgICAgIC50YWJzIGxhYmVsIHtcclxuICAgICAgICAgICAgd2lkdGg6IGNhbGMoXHJcbiAgICAgICAgICAgICAgICB2YXIoLS11aS1kYXRhLXNpZGViYXItdGFicy13aWR0aClcclxuICAgICAgICAgICAgICAgIC0gKCg1MDBweCAtIDEwMHZoKSAqIDAuMTY5KVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICAudGFicyBsYWJlbCAudGV4dCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMi44dmg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi8qIHdpZGUgZGF0YVdpbmRvdyA9ICovXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtYXNwZWN0LXJhdGlvOiAxLjIpIHtcclxuICAgIC50YWJzIGxhYmVsIC50ZXh0IHtcclxuICAgICAgICBmb250LXNpemU6IDEwcHQ7XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogNjIwcHgpIHtcclxuICAgICAgICAudGFicyBsYWJlbCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiBjYWxjKFxyXG4gICAgICAgICAgICAgICAgdmFyKC0tdWktZGF0YS1zaWRlYmFyLXRhYnMtd2lkdGgpXHJcbiAgICAgICAgICAgICAgICAtICgoNjIwcHggLSAxMDB2aCkgKiAwLjEyKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICAudGFicyBsYWJlbCAudGV4dCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMi4xM3ZoO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4vKiBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogMjgwcHgpIHtcclxuICAgIC50YWJzIGxhYmVsIHtcclxuICAgICAgICBmb250LXNpemU6IHNtYWxsO1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwcHg7XHJcbiAgICB9XHJcbn0gKi9cclxuLnRhYnMgbGFiZWwgLmljb24ge1xyXG4gICAgaGVpZ2h0OiA1MCU7XHJcbiAgICBtYXgtaGVpZ2h0OiAyNHB4O1xyXG4gICAgbWluLWhlaWdodDogNnB4O1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIC8qIGZpbHRlcjogYnJpZ2h0bmVzcygwLjY5KSBodWUtcm90YXRlKDIxM2RlZykgc2F0dXJhdGUoODAlKTsgKi9cclxufVxyXG4udGFicyBpbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgei1pbmRleDogMjtcclxufVxyXG4udGFicyBsYWJlbDpob3ZlcixcclxuLnRhYnMgaW5wdXRbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQrbGFiZWwge1xyXG4gICAgb3BhY2l0eTogdmFyKC0tdWktZGF0YS1zaWRlYmFyLWNvbG9yLW9wYWNpdHktaG92ZXItc2VsZWN0ZWQpO1xyXG59XHJcblxyXG4udGFicyBpbnB1dFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCtsYWJlbCB7XHJcbiAgICAtLXVpLWRhdGEtc2lkZWJhci1zZXBhcmF0b3ItdHJhbnNpdGlvbjogdmFyKC0tdWktZGF0YS1zaWRlYmFyLXNlcGFyYXRvci10cmFuc3BhcmVudCk7XHJcbn1cclxuXHJcbi50YWJzIGlucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkK2xhYmVsIHtcclxuICAgIGNvbG9yOiB2YXIoLS11aS1kYXRhLXNpZGViYXItY29sb3ItdGV4dC1zZWxlY3RlZCk7XHJcbiAgICAvKiB0cmFuc2l0aW9uOiBjb2xvciAwLjJzIGVhc2Utb3V0LCAtLXVpLWRhdGEtc2lkZWJhci1zZXBhcmF0b3ItdHJhbnNpdGlvbiAwLjI2OXMgMC4wMjEzcyBlYXNlLWluLW91dDsgKi9cclxufVxyXG5cclxuLnRhYk1hcmtlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMnMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuLnRhYk1hcmtlciAjdG1Cb3R0b20sXHJcbi50YWJNYXJrZXIgI3RtVG9wIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdWktZGF0YS1zaWRlYmFyLWNvbG9yLWJhY2tncm91bmQpO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAzMnB4IHZhcigtLXVpLWRhdGEtc2lkZWJhci1jb2xvci1zaGFkb3ctZnVsbCk7XHJcbn1cclxuLnRhYk1hcmtlciAjdG1Ub3Age1xyXG4gICAgdG9wOiBjYWxjKC0xMDAlIC0gMC4yMTNweCk7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCAwIHZhcigtLXVpLWRhdGEtd2luZG93LXNpZGViYXItcm91bmRpbmcpIDA7XHJcbiAgICBib3gtc2hhZG93OiAtNHB4IDNweCA1cHggdmFyKC0tdWktZGF0YS1zaWRlYmFyLWNvbG9yLXNoYWRvdy1zaGFycCk7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiBtYXJnaW4tdG9wIDAuMnM7XHJcbn1cclxuLnRhYk1hcmtlciAjdG1Cb3R0b20ge1xyXG4gICAgdG9wOiAyMCU7XHJcbiAgICBtYXJnaW4tdG9wOiAxcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwIHZhcigtLXVpLWRhdGEtd2luZG93LXNpZGViYXItcm91bmRpbmcpIDAgMDtcclxufVxyXG4jdGFiMDpjaGVja2Vkfi50YWJNYXJrZXIge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKGNhbGMoY2FsYygxMDAlIC8gNSkgKiAwKSk7XHJcbn1cclxuI3RhYjA6Y2hlY2tlZH4udGFiTWFya2VyICN0bVRvcCB7XHJcbiAgICAvKiBtb3ZlIGRyb3Agc2hhZG93IG91dCBvZiB0aGUgd2F5IG9uIHRvcCB0YWIgc2VsZWN0aW9uKi9cclxuICAgIG1hcmdpbi10b3A6IC04cHg7XHJcbn1cclxuI3RhYjE6Y2hlY2tlZH4udGFiTWFya2VyIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWShjYWxjKGNhbGMoMTAwJSAvIDUpICogMSkpO1xyXG59XHJcbiN0YWIyOmNoZWNrZWR+LnRhYk1hcmtlciB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoY2FsYyhjYWxjKDEwMCUgLyA1KSAqIDIpKTtcclxufVxyXG4jdGFiMzpjaGVja2Vkfi50YWJNYXJrZXIge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKGNhbGMoY2FsYygxMDAlIC8gNSkgKiAzKSk7XHJcbn1cclxuI3RhYjQ6Y2hlY2tlZH4udGFiTWFya2VyIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWShjYWxjKGNhbGMoMTAwJSAvIDUpICogNCkpO1xyXG59XHJcblxyXG5cclxubGFiZWwgLmljb24ge1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGVhc2Utb3V0LCBmaWx0ZXIgMC4ycyBlYXNlLWluLW91dDtcclxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktc3ZnLWRlZmF1bHQtdW5zZWwpO1xyXG4gICAgZmlsdGVyOlxyXG4gICAgICAgIGdyYXlzY2FsZSh2YXIoLS1jb2xvci1zdmctZGVmYXVsdC1ncnktdW5zZWwpKSBicmlnaHRuZXNzKHZhcigtLWNvbG9yLXN2Zy1kZWZhdWx0LWJyaS11bnNlbCkpIHNhdHVyYXRlKHZhcigtLWNvbG9yLXN2Zy1kZWZhdWx0LXNhdC11bnNlbCkpIGh1ZS1yb3RhdGUodmFyKC0tY29sb3Itc3ZnLWRlZmF1bHQtaHVlLXVuc2VsKSk7XHJcbn1cclxuLnRhYnMgaW5wdXRbdHlwZT1cInJhZGlvXCJdOmhvdmVyK2xhYmVsIC5pY29uIHtcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBlYXNlLW91dDtcclxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktc3ZnLWRlZmF1bHQtaG92ZXIpO1xyXG59XHJcbi50YWJzIGlucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkK2xhYmVsIC5pY29uIHtcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBlYXNlLW91dCwgZmlsdGVyIDAuMnMgZWFzZS1vdXQsIC0tdWktZGF0YS1iZy1ibGVuZGNvbG9yIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LXN2Zy1kZWZhdWx0LXNlbCk7XHJcbiAgICBmaWx0ZXI6XHJcbiAgICAgICAgZ3JheXNjYWxlKHZhcigtLWNvbG9yLXN2Zy1kZWZhdWx0LWdyeS1zZWwpKSBicmlnaHRuZXNzKHZhcigtLWNvbG9yLXN2Zy1kZWZhdWx0LWJyaS1zZWwpKSBzYXR1cmF0ZSh2YXIoLS1jb2xvci1zdmctZGVmYXVsdC1zYXQtc2VsKSkgaHVlLXJvdGF0ZSh2YXIoLS1jb2xvci1zdmctZGVmYXVsdC1odWUtc2VsKSk7XHJcbn1cclxuLnRhYnMgaW5wdXRbdHlwZT1cInJhZGlvXCJdK2xhYmVsIC50ZXh0LmRlZmF1bHQge1xyXG4gICAgdHJhbnNpdGlvbjogY29sb3IgMC4ycyBlYXNlLW91dDtcclxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1kYXRhLWJnLXRleHQtZGVmYXVsdC11bnNlbCk7XHJcbn1cclxuLnRhYnMgaW5wdXRbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQrbGFiZWwgLnRleHQuZGVmYXVsdCB7XHJcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzIGVhc2Utb3V0O1xyXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWRhdGEtYmctdGV4dC1kZWZhdWx0KTtcclxufVxyXG5cclxubGFiZWwgLmljb24ucmVkIHtcclxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktc3ZnLXJlZC11bnNlbCk7XHJcbiAgICBmaWx0ZXI6XHJcbiAgICAgICAgZ3JheXNjYWxlKHZhcigtLWNvbG9yLXN2Zy1yZWQtZ3J5LXVuc2VsKSkgYnJpZ2h0bmVzcyh2YXIoLS1jb2xvci1zdmctcmVkLWJyaS11bnNlbCkpIHNhdHVyYXRlKHZhcigtLWNvbG9yLXN2Zy1yZWQtc2F0LXVuc2VsKSkgaHVlLXJvdGF0ZSh2YXIoLS1jb2xvci1zdmctcmVkLWh1ZS11bnNlbCkpO1xyXG59XHJcbi50YWJzIGlucHV0W3R5cGU9XCJyYWRpb1wiXTpob3ZlcitsYWJlbCAuaWNvbi5yZWQge1xyXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS1zdmctcmVkLWhvdmVyKTtcclxufVxyXG4udGFicyBpbnB1dFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCtsYWJlbCAuaWNvbi5yZWQge1xyXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS1zdmctcmVkLXNlbCk7XHJcbiAgICBmaWx0ZXI6XHJcbiAgICAgICAgZ3JheXNjYWxlKHZhcigtLWNvbG9yLXN2Zy1yZWQtZ3J5LXNlbCkpIGJyaWdodG5lc3ModmFyKC0tY29sb3Itc3ZnLXJlZC1icmktc2VsKSkgc2F0dXJhdGUodmFyKC0tY29sb3Itc3ZnLXJlZC1zYXQtc2VsKSkgaHVlLXJvdGF0ZSh2YXIoLS1jb2xvci1zdmctcmVkLWh1ZS1zZWwpKTtcclxuICAgIC0tdWktZGF0YS1iZy1ibGVuZGNvbG9yOiB2YXIoLS11aS1kYXRhLWJnLXJlZCk7XHJcbn1cclxuLnRhYnMgaW5wdXRbdHlwZT1cInJhZGlvXCJdK2xhYmVsIC50ZXh0LnJlZCB7XHJcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzIGVhc2Utb3V0O1xyXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWRhdGEtYmctdGV4dC1yZWQtdW5zZWwpO1xyXG59XHJcbi50YWJzIGlucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkK2xhYmVsIC50ZXh0LnJlZCB7XHJcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzIGVhc2Utb3V0O1xyXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWRhdGEtYmctdGV4dC1yZWQpO1xyXG59XHJcblxyXG5sYWJlbCAuaWNvbi5vcmFuZ2Uge1xyXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS1zdmctb3JhbmdlLXVuc2VsKTtcclxuICAgIGZpbHRlcjpcclxuICAgICAgICBncmF5c2NhbGUodmFyKC0tY29sb3Itc3ZnLW9yYW5nZS1ncnktdW5zZWwpKSBicmlnaHRuZXNzKHZhcigtLWNvbG9yLXN2Zy1vcmFuZ2UtYnJpLXVuc2VsKSkgc2F0dXJhdGUodmFyKC0tY29sb3Itc3ZnLW9yYW5nZS1zYXQtdW5zZWwpKSBodWUtcm90YXRlKHZhcigtLWNvbG9yLXN2Zy1vcmFuZ2UtaHVlLXVuc2VsKSk7XHJcbn1cclxuLnRhYnMgaW5wdXRbdHlwZT1cInJhZGlvXCJdOmhvdmVyK2xhYmVsIC5pY29uLm9yYW5nZSB7XHJcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LXN2Zy1vcmFuZ2UtaG92ZXIpO1xyXG59XHJcbi50YWJzIGlucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkK2xhYmVsIC5pY29uLm9yYW5nZSB7XHJcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LXN2Zy1vcmFuZ2Utc2VsKTtcclxuICAgIGZpbHRlcjpcclxuICAgICAgICBncmF5c2NhbGUodmFyKC0tY29sb3Itc3ZnLW9yYW5nZS1ncnktc2VsKSkgYnJpZ2h0bmVzcyh2YXIoLS1jb2xvci1zdmctb3JhbmdlLWJyaS1zZWwpKSBzYXR1cmF0ZSh2YXIoLS1jb2xvci1zdmctb3JhbmdlLXNhdC1zZWwpKSBodWUtcm90YXRlKHZhcigtLWNvbG9yLXN2Zy1vcmFuZ2UtaHVlLXNlbCkpO1xyXG59XHJcbi50YWJzIGlucHV0W3R5cGU9XCJyYWRpb1wiXStsYWJlbCAudGV4dC5vcmFuZ2Uge1xyXG4gICAgdHJhbnNpdGlvbjogY29sb3IgMC4ycyBlYXNlLW91dDtcclxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1kYXRhLWJnLXRleHQtb3JhbmdlLXVuc2VsKTtcclxufVxyXG4udGFicyBpbnB1dFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCtsYWJlbCAudGV4dC5vcmFuZ2Uge1xyXG4gICAgdHJhbnNpdGlvbjogY29sb3IgMC4ycyBlYXNlLW91dDtcclxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1kYXRhLWJnLXRleHQtb3JhbmdlKTtcclxufVxyXG5cclxuLyogeWVsbG93IG5vdCBpbXBsZW1lbnRlZFxyXG5sYWJlbCAuaWNvbi55ZWxsb3cge1xyXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS1zdmcteWVsbG93LXVuc2VsKTtcclxuICAgIGZpbHRlcjpcclxuICAgICAgICBncmF5c2NhbGUoICB2YXIoLS1jb2xvci1zdmcteWVsbG93LWdyeS11bnNlbCkpXHJcbiAgICAgICAgYnJpZ2h0bmVzcyggdmFyKC0tY29sb3Itc3ZnLXllbGxvdy1icmktdW5zZWwpKSBcclxuICAgICAgICBzYXR1cmF0ZSggICB2YXIoLS1jb2xvci1zdmcteWVsbG93LXNhdC11bnNlbCkpIFxyXG4gICAgICAgIGh1ZS1yb3RhdGUoIHZhcigtLWNvbG9yLXN2Zy15ZWxsb3ctaHVlLXVuc2VsKSk7XHJcbn1cclxuLnRhYnMgaW5wdXRbdHlwZT1cInJhZGlvXCJdOmhvdmVyK2xhYmVsIC5pY29uLnllbGxvdyB7IFxyXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS1zdmcteWVsbG93LWhvdmVyKTtcclxufVxyXG4udGFicyBpbnB1dFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCtsYWJlbCAuaWNvbi55ZWxsb3cgeyBcclxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktc3ZnLXllbGxvdy1zZWwpO1xyXG4gICAgZmlsdGVyOlxyXG4gICAgICAgIGdyYXlzY2FsZSggIHZhcigtLWNvbG9yLXN2Zy15ZWxsb3ctZ3J5LXNlbCkpXHJcbiAgICAgICAgYnJpZ2h0bmVzcyggdmFyKC0tY29sb3Itc3ZnLXllbGxvdy1icmktc2VsKSkgXHJcbiAgICAgICAgc2F0dXJhdGUoICAgdmFyKC0tY29sb3Itc3ZnLXllbGxvdy1zYXQtc2VsKSkgXHJcbiAgICAgICAgaHVlLXJvdGF0ZSggdmFyKC0tY29sb3Itc3ZnLXllbGxvdy1odWUtc2VsKSk7XHJcbn1cclxuLnRhYnMgaW5wdXRbdHlwZT1cInJhZGlvXCJdK2xhYmVsIC50ZXh0LnllbGxvdyB7XHJcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzIGVhc2Utb3V0O1xyXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWRhdGEtYmctdGV4dC15ZWxsb3ctdW5zZWwpO1xyXG59XHJcbi50YWJzIGlucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkK2xhYmVsIC50ZXh0LnllbGxvdyB7XHJcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzIGVhc2Utb3V0O1xyXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWRhdGEtYmctdGV4dC15ZWxsb3cpO1xyXG59XHJcbiovXHJcblxyXG5sYWJlbCAuaWNvbi5ncmVlbiB7XHJcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LXN2Zy1ncmVlbi11bnNlbCk7XHJcbiAgICBmaWx0ZXI6XHJcbiAgICAgICAgZ3JheXNjYWxlKHZhcigtLWNvbG9yLXN2Zy1ncmVlbi1ncnktdW5zZWwpKSBicmlnaHRuZXNzKHZhcigtLWNvbG9yLXN2Zy1ncmVlbi1icmktdW5zZWwpKSBzYXR1cmF0ZSh2YXIoLS1jb2xvci1zdmctZ3JlZW4tc2F0LXVuc2VsKSkgaHVlLXJvdGF0ZSh2YXIoLS1jb2xvci1zdmctZ3JlZW4taHVlLXVuc2VsKSk7XHJcbn1cclxuLnRhYnMgaW5wdXRbdHlwZT1cInJhZGlvXCJdOmhvdmVyK2xhYmVsIC5pY29uLmdyZWVuIHtcclxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktc3ZnLWdyZWVuLWhvdmVyKTtcclxufVxyXG4udGFicyBpbnB1dFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCtsYWJlbCAuaWNvbi5ncmVlbiB7XHJcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LXN2Zy1ncmVlbi1zZWwpO1xyXG4gICAgZmlsdGVyOlxyXG4gICAgICAgIGdyYXlzY2FsZSh2YXIoLS1jb2xvci1zdmctZ3JlZW4tZ3J5LXNlbCkpIGJyaWdodG5lc3ModmFyKC0tY29sb3Itc3ZnLWdyZWVuLWJyaS1zZWwpKSBzYXR1cmF0ZSh2YXIoLS1jb2xvci1zdmctZ3JlZW4tc2F0LXNlbCkpIGh1ZS1yb3RhdGUodmFyKC0tY29sb3Itc3ZnLWdyZWVuLWh1ZS1zZWwpKTtcclxufVxyXG4udGFicyBpbnB1dFt0eXBlPVwicmFkaW9cIl0rbGFiZWwgLnRleHQuZ3JlZW4ge1xyXG4gICAgdHJhbnNpdGlvbjogY29sb3IgMC4ycyBlYXNlLW91dDtcclxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1kYXRhLWJnLXRleHQtZ3JlZW4tdW5zZWwpO1xyXG59XHJcbi50YWJzIGlucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkK2xhYmVsIC50ZXh0LmdyZWVuIHtcclxuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMnMgZWFzZS1vdXQ7XHJcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItZGF0YS1iZy10ZXh0LWdyZWVuKTtcclxufVxyXG5cclxubGFiZWwgLmljb24uYmx1ZSB7XHJcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LXN2Zy1ibHVlLXVuc2VsKTtcclxuICAgIGZpbHRlcjpcclxuICAgICAgICBncmF5c2NhbGUodmFyKC0tY29sb3Itc3ZnLWJsdWUtZ3J5LXVuc2VsKSkgYnJpZ2h0bmVzcyh2YXIoLS1jb2xvci1zdmctYmx1ZS1icmktdW5zZWwpKSBzYXR1cmF0ZSh2YXIoLS1jb2xvci1zdmctYmx1ZS1zYXQtdW5zZWwpKSBodWUtcm90YXRlKHZhcigtLWNvbG9yLXN2Zy1ibHVlLWh1ZS11bnNlbCkpO1xyXG59XHJcbi50YWJzIGlucHV0W3R5cGU9XCJyYWRpb1wiXTpob3ZlcitsYWJlbCAuaWNvbi5ibHVlIHtcclxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktc3ZnLWJsdWUtaG92ZXIpO1xyXG59XHJcbi50YWJzIGlucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkK2xhYmVsIC5pY29uLmJsdWUge1xyXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS1zdmctYmx1ZS1zZWwpO1xyXG4gICAgZmlsdGVyOlxyXG4gICAgICAgIGdyYXlzY2FsZSh2YXIoLS1jb2xvci1zdmctYmx1ZS1ncnktc2VsKSkgYnJpZ2h0bmVzcyh2YXIoLS1jb2xvci1zdmctYmx1ZS1icmktc2VsKSkgc2F0dXJhdGUodmFyKC0tY29sb3Itc3ZnLWJsdWUtc2F0LXNlbCkpIGh1ZS1yb3RhdGUodmFyKC0tY29sb3Itc3ZnLWJsdWUtaHVlLXNlbCkpO1xyXG59XHJcbi50YWJzIGlucHV0W3R5cGU9XCJyYWRpb1wiXStsYWJlbCAudGV4dC5ibHVlIHtcclxuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMnMgZWFzZS1vdXQ7XHJcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItZGF0YS1iZy10ZXh0LWJsdWUtdW5zZWwpO1xyXG59XHJcbi50YWJzIGlucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkK2xhYmVsIC50ZXh0LmJsdWUge1xyXG4gICAgdHJhbnNpdGlvbjogY29sb3IgMC4ycyBlYXNlLW91dDtcclxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1kYXRhLWJnLXRleHQtYmx1ZSk7XHJcbn1cclxuXHJcbmxhYmVsIC5pY29uLnB1cnBsZSB7XHJcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LXN2Zy1wdXJwbGUtdW5zZWwpO1xyXG4gICAgZmlsdGVyOlxyXG4gICAgICAgIGdyYXlzY2FsZSh2YXIoLS1jb2xvci1zdmctcHVycGxlLWdyeS11bnNlbCkpIGJyaWdodG5lc3ModmFyKC0tY29sb3Itc3ZnLXB1cnBsZS1icmktdW5zZWwpKSBzYXR1cmF0ZSh2YXIoLS1jb2xvci1zdmctcHVycGxlLXNhdC11bnNlbCkpIGh1ZS1yb3RhdGUodmFyKC0tY29sb3Itc3ZnLXB1cnBsZS1odWUtdW5zZWwpKTtcclxufVxyXG4udGFicyBpbnB1dFt0eXBlPVwicmFkaW9cIl06aG92ZXIrbGFiZWwgLmljb24ucHVycGxlIHtcclxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktc3ZnLXB1cnBsZS1ob3Zlcik7XHJcbn1cclxuLnRhYnMgaW5wdXRbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQrbGFiZWwgLmljb24ucHVycGxlIHtcclxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktc3ZnLXB1cnBsZS1zZWwpO1xyXG4gICAgZmlsdGVyOlxyXG4gICAgICAgIGdyYXlzY2FsZSh2YXIoLS1jb2xvci1zdmctcHVycGxlLWdyeS1zZWwpKSBicmlnaHRuZXNzKHZhcigtLWNvbG9yLXN2Zy1wdXJwbGUtYnJpLXNlbCkpIHNhdHVyYXRlKHZhcigtLWNvbG9yLXN2Zy1wdXJwbGUtc2F0LXNlbCkpIGh1ZS1yb3RhdGUodmFyKC0tY29sb3Itc3ZnLXB1cnBsZS1odWUtc2VsKSk7XHJcbn1cclxuLnRhYnMgaW5wdXRbdHlwZT1cInJhZGlvXCJdK2xhYmVsIC50ZXh0LnB1cnBsZSB7XHJcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzIGVhc2Utb3V0O1xyXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWRhdGEtYmctdGV4dC1wdXJwbGUtdW5zZWwpO1xyXG59XHJcbi50YWJzIGlucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkK2xhYmVsIC50ZXh0LnB1cnBsZSB7XHJcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzIGVhc2Utb3V0O1xyXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWRhdGEtYmctdGV4dC1wdXJwbGUpO1xyXG59XHJcblxyXG4vKiBcclxuI3RhYjAgKyBsYWJlbCAuaWNvbiB7XHJcbiAgICBmaWx0ZXI6IGdyYXlzY2FsZSh2YXIoLS11aS1kYXRhLXNpZGViYXItdGFiMC1ncmF5c2NhbGUpKSBicmlnaHRuZXNzKHZhcigtLXVpLWRhdGEtc2lkZWJhci10YWItYnJpZ2h0bmVzcy11bnNlbCkpIHNhdHVyYXRlKHZhcigtLXVpLWRhdGEtc2lkZWJhci10YWItc2F0dXJhdGlvbi11bnNlbCkpIGh1ZS1yb3RhdGUodmFyKC0tdWktZGF0YS1zaWRlYmFyLXRhYjAtaHVlKSkgc2F0dXJhdGUodmFyKC0tdWktZGF0YS1zaWRlYmFyLXRhYi1zYXR1cmF0aW9uLXVuc2VsKSk7XHJcbn1cclxuI3RhYjEgKyBsYWJlbCAuaWNvbiB7XHJcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3ModmFyKC0tdWktZGF0YS1zaWRlYmFyLXRhYi1icmlnaHRuZXNzLXVuc2VsKSkgaHVlLXJvdGF0ZSh2YXIoLS11aS1kYXRhLXNpZGViYXItdGFiMS1odWUpKSBzYXR1cmF0ZSh2YXIoLS11aS1kYXRhLXNpZGViYXItdGFiLXNhdHVyYXRpb24tdW5zZWwpKTtcclxufVxyXG4jdGFiMiArIGxhYmVsIC5pY29uIHtcclxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcyh2YXIoLS11aS1kYXRhLXNpZGViYXItdGFiLWJyaWdodG5lc3MtdW5zZWwpKSBodWUtcm90YXRlKHZhcigtLXVpLWRhdGEtc2lkZWJhci10YWIyLWh1ZSkpIHNhdHVyYXRlKHZhcigtLXVpLWRhdGEtc2lkZWJhci10YWItc2F0dXJhdGlvbi11bnNlbCkpO1xyXG59XHJcbiN0YWIzICsgbGFiZWwgLmljb24ge1xyXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKHZhcigtLXVpLWRhdGEtc2lkZWJhci10YWItYnJpZ2h0bmVzcy11bnNlbCkpIGh1ZS1yb3RhdGUodmFyKC0tdWktZGF0YS1zaWRlYmFyLXRhYjMtaHVlKSkgc2F0dXJhdGUodmFyKC0tdWktZGF0YS1zaWRlYmFyLXRhYi1zYXR1cmF0aW9uLXVuc2VsKSk7XHJcbn1cclxuI3RhYjQgKyBsYWJlbCAuaWNvbiB7XHJcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3ModmFyKC0tdWktZGF0YS1zaWRlYmFyLXRhYi1icmlnaHRuZXNzLXVuc2VsKSkgaHVlLXJvdGF0ZSh2YXIoLS11aS1kYXRhLXNpZGViYXItdGFiNC1odWUpKSBzYXR1cmF0ZSh2YXIoLS11aS1kYXRhLXNpZGViYXItdGFiLXNhdHVyYXRpb24tdW5zZWwpKTtcclxufVxyXG4jdGFiMDpjaGVja2VkICsgbGFiZWwgLmljb24ge1xyXG4gICAgZmlsdGVyOiBncmF5c2NhbGUodmFyKC0tdWktZGF0YS1zaWRlYmFyLXRhYjAtZ3JheXNjYWxlKSkgYnJpZ2h0bmVzcyh2YXIoLS11aS1kYXRhLXNpZGViYXItdGFiLWJyaWdodG5lc3Mtc2VsKSkgaHVlLXJvdGF0ZSh2YXIoLS11aS1kYXRhLXNpZGViYXItdGFiMC1odWUpKSBzYXR1cmF0ZSh2YXIoLS11aS1kYXRhLXNpZGViYXItdGFiLXNhdHVyYXRpb24tc2VsKSk7XHJcbn1cclxuI3RhYjE6Y2hlY2tlZCArIGxhYmVsIC5pY29uIHtcclxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcyh2YXIoLS11aS1kYXRhLXNpZGViYXItdGFiLWJyaWdodG5lc3Mtc2VsKSkgaHVlLXJvdGF0ZSh2YXIoLS11aS1kYXRhLXNpZGViYXItdGFiMS1odWUpKSBzYXR1cmF0ZSh2YXIoLS11aS1kYXRhLXNpZGViYXItdGFiLXNhdHVyYXRpb24tc2VsKSk7XHJcbn1cclxuI3RhYjI6Y2hlY2tlZCArIGxhYmVsIC5pY29uIHtcclxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcyh2YXIoLS11aS1kYXRhLXNpZGViYXItdGFiLWJyaWdodG5lc3Mtc2VsKSkgaHVlLXJvdGF0ZSh2YXIoLS11aS1kYXRhLXNpZGViYXItdGFiMi1odWUpKSBzYXR1cmF0ZSh2YXIoLS11aS1kYXRhLXNpZGViYXItdGFiLXNhdHVyYXRpb24tc2VsKSk7XHJcbn1cclxuI3RhYjM6Y2hlY2tlZCArIGxhYmVsIC5pY29uIHtcclxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcyh2YXIoLS11aS1kYXRhLXNpZGViYXItdGFiLWJyaWdodG5lc3Mtc2VsKSkgaHVlLXJvdGF0ZSh2YXIoLS11aS1kYXRhLXNpZGViYXItdGFiMy1odWUpKSBzYXR1cmF0ZSh2YXIoLS11aS1kYXRhLXNpZGViYXItdGFiLXNhdHVyYXRpb24tc2VsKSk7XHJcbn1cclxuI3RhYjQ6Y2hlY2tlZCArIGxhYmVsIC5pY29uIHtcclxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcyh2YXIoLS11aS1kYXRhLXNpZGViYXItdGFiLWJyaWdodG5lc3Mtc2VsKSkgaHVlLXJvdGF0ZSh2YXIoLS11aS1kYXRhLXNpZGViYXItdGFiNC1odWUpKSBzYXR1cmF0ZSh2YXIoLS11aS1kYXRhLXNpZGViYXItdGFiLXNhdHVyYXRpb24tc2VsKSk7XHJcbn0gKi9gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvY29tcG9uZW50cy90YWJzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs0Q0FDNEM7O0FBRTVDOzs7Ozs7Ozs7OztHQVdHOztBQUVIO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxVQUFVO0FBQ2Q7OztBQUdBO0lBQ0ksb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsNkNBQTZDO0lBQzdDLHdDQUF3QztJQUN4QyxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLHVDQUF1QztJQUN2QyxzREFBc0Q7SUFDdEQsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxvR0FBb0c7SUFDcEc7OzhEQUUwRDtBQUM5RDtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsWUFBWTtJQUNaLHdDQUF3QztJQUN4QyxzREFBc0Q7QUFDMUQ7QUFDQSx1QkFBdUI7QUFDdkI7SUFDSTtRQUNJO1lBQ0k7OzthQUdDO1FBQ0w7UUFDQTtZQUNJLGdCQUFnQjtRQUNwQjtJQUNKO0FBQ0o7QUFDQSxzQkFBc0I7QUFDdEI7SUFDSTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJO1lBQ0k7OzthQUdDO1FBQ0w7UUFDQTtZQUNJLGlCQUFpQjtRQUNyQjtJQUNKO0FBQ0o7QUFDQTs7Ozs7R0FLRztBQUNIO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsV0FBVztJQUNYLGlCQUFpQjtJQUNqQiwrREFBK0Q7QUFDbkU7QUFDQTtJQUNJLGFBQWE7SUFDYixRQUFRO0lBQ1IsVUFBVTtBQUNkO0FBQ0E7O0lBRUksNERBQTREO0FBQ2hFOztBQUVBO0lBQ0ksb0ZBQW9GO0FBQ3hGOztBQUVBO0lBQ0ksaURBQWlEO0lBQ2pELHdHQUF3RztBQUM1Rzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsT0FBTztJQUNQLHFDQUFxQztBQUN6QztBQUNBOztJQUVJLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLHlEQUF5RDtJQUN6RCxpRUFBaUU7QUFDckU7QUFDQTtJQUNJLDBCQUEwQjtJQUMxQixtQkFBbUI7SUFDbkIsMkRBQTJEO0lBQzNELGtFQUFrRTtJQUNsRSxlQUFlO0lBQ2YsMkJBQTJCO0FBQy9CO0FBQ0E7SUFDSSxRQUFRO0lBQ1IsZUFBZTtJQUNmLDJEQUEyRDtBQUMvRDtBQUNBO0lBQ0ksK0NBQStDO0FBQ25EO0FBQ0E7SUFDSSx3REFBd0Q7SUFDeEQsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSwrQ0FBK0M7QUFDbkQ7QUFDQTtJQUNJLCtDQUErQztBQUNuRDtBQUNBO0lBQ0ksK0NBQStDO0FBQ25EO0FBQ0E7SUFDSSwrQ0FBK0M7QUFDbkQ7OztBQUdBO0lBQ0ksMERBQTBEO0lBQzFELHlDQUF5QztJQUN6QztnTUFDNEw7QUFDaE07QUFDQTtJQUNJLGlDQUFpQztJQUNqQyx5Q0FBeUM7QUFDN0M7QUFDQTtJQUNJLGlHQUFpRztJQUNqRyx1Q0FBdUM7SUFDdkM7d0xBQ29MO0FBQ3hMO0FBQ0E7SUFDSSwrQkFBK0I7SUFDL0IsOENBQThDO0FBQ2xEO0FBQ0E7SUFDSSwrQkFBK0I7SUFDL0Isd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0kscUNBQXFDO0lBQ3JDO2dMQUM0SztBQUNoTDtBQUNBO0lBQ0kscUNBQXFDO0FBQ3pDO0FBQ0E7SUFDSSxtQ0FBbUM7SUFDbkM7d0tBQ29LO0lBQ3BLLDhDQUE4QztBQUNsRDtBQUNBO0lBQ0ksK0JBQStCO0lBQy9CLDBDQUEwQztBQUM5QztBQUNBO0lBQ0ksK0JBQStCO0lBQy9CLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLHdDQUF3QztJQUN4Qzs0TEFDd0w7QUFDNUw7QUFDQTtJQUNJLHdDQUF3QztBQUM1QztBQUNBO0lBQ0ksc0NBQXNDO0lBQ3RDO29MQUNnTDtBQUNwTDtBQUNBO0lBQ0ksK0JBQStCO0lBQy9CLDZDQUE2QztBQUNqRDtBQUNBO0lBQ0ksK0JBQStCO0lBQy9CLHVDQUF1QztBQUMzQzs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQTRCQzs7QUFFRDtJQUNJLHVDQUF1QztJQUN2Qzt3TEFDb0w7QUFDeEw7QUFDQTtJQUNJLHVDQUF1QztBQUMzQztBQUNBO0lBQ0kscUNBQXFDO0lBQ3JDO2dMQUM0SztBQUNoTDtBQUNBO0lBQ0ksK0JBQStCO0lBQy9CLDRDQUE0QztBQUNoRDtBQUNBO0lBQ0ksK0JBQStCO0lBQy9CLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLHNDQUFzQztJQUN0QztvTEFDZ0w7QUFDcEw7QUFDQTtJQUNJLHNDQUFzQztBQUMxQztBQUNBO0lBQ0ksb0NBQW9DO0lBQ3BDOzRLQUN3SztBQUM1SztBQUNBO0lBQ0ksK0JBQStCO0lBQy9CLDJDQUEyQztBQUMvQztBQUNBO0lBQ0ksK0JBQStCO0lBQy9CLHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLHdDQUF3QztJQUN4Qzs0TEFDd0w7QUFDNUw7QUFDQTtJQUNJLHdDQUF3QztBQUM1QztBQUNBO0lBQ0ksc0NBQXNDO0lBQ3RDO29MQUNnTDtBQUNwTDtBQUNBO0lBQ0ksK0JBQStCO0lBQy9CLDZDQUE2QztBQUNqRDtBQUNBO0lBQ0ksK0JBQStCO0lBQy9CLHVDQUF1QztBQUMzQzs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBOEJHXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIFxcXCJQdXJlIENTUyB0YWIgaW5kaWNhdG9yIGFuaW1hdGlvblxcXCIgYnkgQ2VyYW1pY1NvZGFcXHJcXG5odHRwczovL2NvZGVwZW4uaW8vY2VyYW1pY1NvZGEvcGVuL1dOZ3liWE4gKi9cXHJcXG5cXHJcXG4vKiBodG1sLGJvZHl7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDNkY2U2O1xcclxcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTsgXFxyXFxufVxcclxcbmJvZHkge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59ICovXFxyXFxuXFxyXFxuLnRhYnMge1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgZmxvYXQ6IGxlZnQ7XFxyXFxuICAgIHotaW5kZXg6IDE7XFxyXFxufVxcclxcblxcclxcblxcclxcbi50YWJzIGxhYmVsIHtcXHJcXG4gICAgLyogZm9udC1zaXplOiA5cHQ7ICovXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogcmlnaHQ7XFxyXFxuICAgIC8qIGZvbnQtd2VpZ2h0OiA3MDA7ICovXFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgb3BhY2l0eTogdmFyKC0tdWktZGF0YS1zaWRlYmFyLWNvbG9yLW9wYWNpdHkpO1xcclxcbiAgICB3aWR0aDogdmFyKC0tdWktZGF0YS1zaWRlYmFyLXRhYnMtd2lkdGgpO1xcclxcbiAgICBoZWlnaHQ6IDIwJTtcXHJcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxyXFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcXHJcXG4gICAgLyogdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGVhc2Utb3V0OyAqL1xcclxcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzIGVhc2Utb3V0LCBvcGFjaXR5IDAuMXMgZWFzZS1vdXQ7XFxyXFxuICAgIHotaW5kZXg6IGluaGVyaXQ7XFxyXFxufVxcclxcbi50YWJzIC5zZXBhcmF0b3Ige1xcclxcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMXMgZWFzZS1vdXQsIC0tdWktZGF0YS1zaWRlYmFyLXNlcGFyYXRvci10cmFuc2l0aW9uIDAuMjY5cyAwLjAyMTNzIGVhc2UtaW4tb3V0O1xcclxcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMi4xM2RlZyxcXHJcXG4gICAgICAgICAgICB2YXIoLS11aS1kYXRhLXNpZGViYXItc2VwYXJhdG9yLXRyYW5zaXRpb24pIDAlLFxcclxcbiAgICAgICAgICAgIHZhcigtLXVpLWRhdGEtc2lkZWJhci1zZXBhcmF0b3ItdHJhbnNwYXJlbnQpIDYuOSUpO1xcclxcbn1cXHJcXG4udGFicyBsYWJlbCAudGV4dCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTAuNXB0O1xcclxcbiAgICAvKiAxMC41cHQgZGVmYXVsdCBzaXplICovXFxyXFxuICAgIHBhZGRpbmctbGVmdDogMTJweDtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMHB4O1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgIGNvbG9yOiB2YXIoLS11aS1kYXRhLXNpZGViYXItY29sb3ItdGV4dCk7XFxyXFxuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZS1vdXQsIG9wYWNpdHkgMC4xcyBlYXNlLW91dDtcXHJcXG59XFxyXFxuLyogdGFsbCBkYXRhV2luZG93IFtdICovXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi1hc3BlY3QtcmF0aW86IDEuMikge1xcclxcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogNTAwcHgpIHtcXHJcXG4gICAgICAgIC50YWJzIGxhYmVsIHtcXHJcXG4gICAgICAgICAgICB3aWR0aDogY2FsYyhcXHJcXG4gICAgICAgICAgICAgICAgdmFyKC0tdWktZGF0YS1zaWRlYmFyLXRhYnMtd2lkdGgpXFxyXFxuICAgICAgICAgICAgICAgIC0gKCg1MDBweCAtIDEwMHZoKSAqIDAuMTY5KVxcclxcbiAgICAgICAgICAgICk7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAudGFicyBsYWJlbCAudGV4dCB7XFxyXFxuICAgICAgICAgICAgZm9udC1zaXplOiAyLjh2aDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbn1cXHJcXG4vKiB3aWRlIGRhdGFXaW5kb3cgPSAqL1xcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtYXNwZWN0LXJhdGlvOiAxLjIpIHtcXHJcXG4gICAgLnRhYnMgbGFiZWwgLnRleHQge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxMHB0O1xcclxcbiAgICB9XFxyXFxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA2MjBweCkge1xcclxcbiAgICAgICAgLnRhYnMgbGFiZWwge1xcclxcbiAgICAgICAgICAgIHdpZHRoOiBjYWxjKFxcclxcbiAgICAgICAgICAgICAgICB2YXIoLS11aS1kYXRhLXNpZGViYXItdGFicy13aWR0aClcXHJcXG4gICAgICAgICAgICAgICAgLSAoKDYyMHB4IC0gMTAwdmgpICogMC4xMilcXHJcXG4gICAgICAgICAgICApO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgLnRhYnMgbGFiZWwgLnRleHQge1xcclxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMi4xM3ZoO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxufVxcclxcbi8qIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiAyODBweCkge1xcclxcbiAgICAudGFicyBsYWJlbCB7XFxyXFxuICAgICAgICBmb250LXNpemU6IHNtYWxsO1xcclxcbiAgICAgICAgbWF4LXdpZHRoOiAxMDBweDtcXHJcXG4gICAgfVxcclxcbn0gKi9cXHJcXG4udGFicyBsYWJlbCAuaWNvbiB7XFxyXFxuICAgIGhlaWdodDogNTAlO1xcclxcbiAgICBtYXgtaGVpZ2h0OiAyNHB4O1xcclxcbiAgICBtaW4taGVpZ2h0OiA2cHg7XFxyXFxuICAgIHdpZHRoOiBhdXRvO1xcclxcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXHJcXG4gICAgLyogZmlsdGVyOiBicmlnaHRuZXNzKDAuNjkpIGh1ZS1yb3RhdGUoMjEzZGVnKSBzYXR1cmF0ZSg4MCUpOyAqL1xcclxcbn1cXHJcXG4udGFicyBpbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgd2lkdGg6IDA7XFxyXFxuICAgIHotaW5kZXg6IDI7XFxyXFxufVxcclxcbi50YWJzIGxhYmVsOmhvdmVyLFxcclxcbi50YWJzIGlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl06Y2hlY2tlZCtsYWJlbCB7XFxyXFxuICAgIG9wYWNpdHk6IHZhcigtLXVpLWRhdGEtc2lkZWJhci1jb2xvci1vcGFjaXR5LWhvdmVyLXNlbGVjdGVkKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhYnMgaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXTpjaGVja2VkK2xhYmVsIHtcXHJcXG4gICAgLS11aS1kYXRhLXNpZGViYXItc2VwYXJhdG9yLXRyYW5zaXRpb246IHZhcigtLXVpLWRhdGEtc2lkZWJhci1zZXBhcmF0b3ItdHJhbnNwYXJlbnQpO1xcclxcbn1cXHJcXG5cXHJcXG4udGFicyBpbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdOmNoZWNrZWQrbGFiZWwge1xcclxcbiAgICBjb2xvcjogdmFyKC0tdWktZGF0YS1zaWRlYmFyLWNvbG9yLXRleHQtc2VsZWN0ZWQpO1xcclxcbiAgICAvKiB0cmFuc2l0aW9uOiBjb2xvciAwLjJzIGVhc2Utb3V0LCAtLXVpLWRhdGEtc2lkZWJhci1zZXBhcmF0b3ItdHJhbnNpdGlvbiAwLjI2OXMgMC4wMjEzcyBlYXNlLWluLW91dDsgKi9cXHJcXG59XFxyXFxuXFxyXFxuLnRhYk1hcmtlciB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4ycyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuLnRhYk1hcmtlciAjdG1Cb3R0b20sXFxyXFxuLnRhYk1hcmtlciAjdG1Ub3Age1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXVpLWRhdGEtc2lkZWJhci1jb2xvci1iYWNrZ3JvdW5kKTtcXHJcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAzMnB4IHZhcigtLXVpLWRhdGEtc2lkZWJhci1jb2xvci1zaGFkb3ctZnVsbCk7XFxyXFxufVxcclxcbi50YWJNYXJrZXIgI3RtVG9wIHtcXHJcXG4gICAgdG9wOiBjYWxjKC0xMDAlIC0gMC4yMTNweCk7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAgMCB2YXIoLS11aS1kYXRhLXdpbmRvdy1zaWRlYmFyLXJvdW5kaW5nKSAwO1xcclxcbiAgICBib3gtc2hhZG93OiAtNHB4IDNweCA1cHggdmFyKC0tdWktZGF0YS1zaWRlYmFyLWNvbG9yLXNoYWRvdy1zaGFycCk7XFxyXFxuICAgIG1hcmdpbi10b3A6IDBweDtcXHJcXG4gICAgdHJhbnNpdGlvbjogbWFyZ2luLXRvcCAwLjJzO1xcclxcbn1cXHJcXG4udGFiTWFya2VyICN0bUJvdHRvbSB7XFxyXFxuICAgIHRvcDogMjAlO1xcclxcbiAgICBtYXJnaW4tdG9wOiAxcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAgdmFyKC0tdWktZGF0YS13aW5kb3ctc2lkZWJhci1yb3VuZGluZykgMCAwO1xcclxcbn1cXHJcXG4jdGFiMDpjaGVja2Vkfi50YWJNYXJrZXIge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoY2FsYyhjYWxjKDEwMCUgLyA1KSAqIDApKTtcXHJcXG59XFxyXFxuI3RhYjA6Y2hlY2tlZH4udGFiTWFya2VyICN0bVRvcCB7XFxyXFxuICAgIC8qIG1vdmUgZHJvcCBzaGFkb3cgb3V0IG9mIHRoZSB3YXkgb24gdG9wIHRhYiBzZWxlY3Rpb24qL1xcclxcbiAgICBtYXJnaW4tdG9wOiAtOHB4O1xcclxcbn1cXHJcXG4jdGFiMTpjaGVja2Vkfi50YWJNYXJrZXIge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoY2FsYyhjYWxjKDEwMCUgLyA1KSAqIDEpKTtcXHJcXG59XFxyXFxuI3RhYjI6Y2hlY2tlZH4udGFiTWFya2VyIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKGNhbGMoY2FsYygxMDAlIC8gNSkgKiAyKSk7XFxyXFxufVxcclxcbiN0YWIzOmNoZWNrZWR+LnRhYk1hcmtlciB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWShjYWxjKGNhbGMoMTAwJSAvIDUpICogMykpO1xcclxcbn1cXHJcXG4jdGFiNDpjaGVja2Vkfi50YWJNYXJrZXIge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoY2FsYyhjYWxjKDEwMCUgLyA1KSAqIDQpKTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxubGFiZWwgLmljb24ge1xcclxcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgZWFzZS1vdXQsIGZpbHRlciAwLjJzIGVhc2UtaW4tb3V0O1xcclxcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LXN2Zy1kZWZhdWx0LXVuc2VsKTtcXHJcXG4gICAgZmlsdGVyOlxcclxcbiAgICAgICAgZ3JheXNjYWxlKHZhcigtLWNvbG9yLXN2Zy1kZWZhdWx0LWdyeS11bnNlbCkpIGJyaWdodG5lc3ModmFyKC0tY29sb3Itc3ZnLWRlZmF1bHQtYnJpLXVuc2VsKSkgc2F0dXJhdGUodmFyKC0tY29sb3Itc3ZnLWRlZmF1bHQtc2F0LXVuc2VsKSkgaHVlLXJvdGF0ZSh2YXIoLS1jb2xvci1zdmctZGVmYXVsdC1odWUtdW5zZWwpKTtcXHJcXG59XFxyXFxuLnRhYnMgaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXTpob3ZlcitsYWJlbCAuaWNvbiB7XFxyXFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBlYXNlLW91dDtcXHJcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS1zdmctZGVmYXVsdC1ob3Zlcik7XFxyXFxufVxcclxcbi50YWJzIGlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl06Y2hlY2tlZCtsYWJlbCAuaWNvbiB7XFxyXFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBlYXNlLW91dCwgZmlsdGVyIDAuMnMgZWFzZS1vdXQsIC0tdWktZGF0YS1iZy1ibGVuZGNvbG9yIDAuNXMgZWFzZS1pbi1vdXQ7XFxyXFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktc3ZnLWRlZmF1bHQtc2VsKTtcXHJcXG4gICAgZmlsdGVyOlxcclxcbiAgICAgICAgZ3JheXNjYWxlKHZhcigtLWNvbG9yLXN2Zy1kZWZhdWx0LWdyeS1zZWwpKSBicmlnaHRuZXNzKHZhcigtLWNvbG9yLXN2Zy1kZWZhdWx0LWJyaS1zZWwpKSBzYXR1cmF0ZSh2YXIoLS1jb2xvci1zdmctZGVmYXVsdC1zYXQtc2VsKSkgaHVlLXJvdGF0ZSh2YXIoLS1jb2xvci1zdmctZGVmYXVsdC1odWUtc2VsKSk7XFxyXFxufVxcclxcbi50YWJzIGlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl0rbGFiZWwgLnRleHQuZGVmYXVsdCB7XFxyXFxuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMnMgZWFzZS1vdXQ7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1kYXRhLWJnLXRleHQtZGVmYXVsdC11bnNlbCk7XFxyXFxufVxcclxcbi50YWJzIGlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl06Y2hlY2tlZCtsYWJlbCAudGV4dC5kZWZhdWx0IHtcXHJcXG4gICAgdHJhbnNpdGlvbjogY29sb3IgMC4ycyBlYXNlLW91dDtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWRhdGEtYmctdGV4dC1kZWZhdWx0KTtcXHJcXG59XFxyXFxuXFxyXFxubGFiZWwgLmljb24ucmVkIHtcXHJcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS1zdmctcmVkLXVuc2VsKTtcXHJcXG4gICAgZmlsdGVyOlxcclxcbiAgICAgICAgZ3JheXNjYWxlKHZhcigtLWNvbG9yLXN2Zy1yZWQtZ3J5LXVuc2VsKSkgYnJpZ2h0bmVzcyh2YXIoLS1jb2xvci1zdmctcmVkLWJyaS11bnNlbCkpIHNhdHVyYXRlKHZhcigtLWNvbG9yLXN2Zy1yZWQtc2F0LXVuc2VsKSkgaHVlLXJvdGF0ZSh2YXIoLS1jb2xvci1zdmctcmVkLWh1ZS11bnNlbCkpO1xcclxcbn1cXHJcXG4udGFicyBpbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdOmhvdmVyK2xhYmVsIC5pY29uLnJlZCB7XFxyXFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktc3ZnLXJlZC1ob3Zlcik7XFxyXFxufVxcclxcbi50YWJzIGlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl06Y2hlY2tlZCtsYWJlbCAuaWNvbi5yZWQge1xcclxcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LXN2Zy1yZWQtc2VsKTtcXHJcXG4gICAgZmlsdGVyOlxcclxcbiAgICAgICAgZ3JheXNjYWxlKHZhcigtLWNvbG9yLXN2Zy1yZWQtZ3J5LXNlbCkpIGJyaWdodG5lc3ModmFyKC0tY29sb3Itc3ZnLXJlZC1icmktc2VsKSkgc2F0dXJhdGUodmFyKC0tY29sb3Itc3ZnLXJlZC1zYXQtc2VsKSkgaHVlLXJvdGF0ZSh2YXIoLS1jb2xvci1zdmctcmVkLWh1ZS1zZWwpKTtcXHJcXG4gICAgLS11aS1kYXRhLWJnLWJsZW5kY29sb3I6IHZhcigtLXVpLWRhdGEtYmctcmVkKTtcXHJcXG59XFxyXFxuLnRhYnMgaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXStsYWJlbCAudGV4dC5yZWQge1xcclxcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzIGVhc2Utb3V0O1xcclxcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItZGF0YS1iZy10ZXh0LXJlZC11bnNlbCk7XFxyXFxufVxcclxcbi50YWJzIGlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl06Y2hlY2tlZCtsYWJlbCAudGV4dC5yZWQge1xcclxcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzIGVhc2Utb3V0O1xcclxcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItZGF0YS1iZy10ZXh0LXJlZCk7XFxyXFxufVxcclxcblxcclxcbmxhYmVsIC5pY29uLm9yYW5nZSB7XFxyXFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktc3ZnLW9yYW5nZS11bnNlbCk7XFxyXFxuICAgIGZpbHRlcjpcXHJcXG4gICAgICAgIGdyYXlzY2FsZSh2YXIoLS1jb2xvci1zdmctb3JhbmdlLWdyeS11bnNlbCkpIGJyaWdodG5lc3ModmFyKC0tY29sb3Itc3ZnLW9yYW5nZS1icmktdW5zZWwpKSBzYXR1cmF0ZSh2YXIoLS1jb2xvci1zdmctb3JhbmdlLXNhdC11bnNlbCkpIGh1ZS1yb3RhdGUodmFyKC0tY29sb3Itc3ZnLW9yYW5nZS1odWUtdW5zZWwpKTtcXHJcXG59XFxyXFxuLnRhYnMgaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXTpob3ZlcitsYWJlbCAuaWNvbi5vcmFuZ2Uge1xcclxcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LXN2Zy1vcmFuZ2UtaG92ZXIpO1xcclxcbn1cXHJcXG4udGFicyBpbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdOmNoZWNrZWQrbGFiZWwgLmljb24ub3JhbmdlIHtcXHJcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS1zdmctb3JhbmdlLXNlbCk7XFxyXFxuICAgIGZpbHRlcjpcXHJcXG4gICAgICAgIGdyYXlzY2FsZSh2YXIoLS1jb2xvci1zdmctb3JhbmdlLWdyeS1zZWwpKSBicmlnaHRuZXNzKHZhcigtLWNvbG9yLXN2Zy1vcmFuZ2UtYnJpLXNlbCkpIHNhdHVyYXRlKHZhcigtLWNvbG9yLXN2Zy1vcmFuZ2Utc2F0LXNlbCkpIGh1ZS1yb3RhdGUodmFyKC0tY29sb3Itc3ZnLW9yYW5nZS1odWUtc2VsKSk7XFxyXFxufVxcclxcbi50YWJzIGlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl0rbGFiZWwgLnRleHQub3JhbmdlIHtcXHJcXG4gICAgdHJhbnNpdGlvbjogY29sb3IgMC4ycyBlYXNlLW91dDtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWRhdGEtYmctdGV4dC1vcmFuZ2UtdW5zZWwpO1xcclxcbn1cXHJcXG4udGFicyBpbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdOmNoZWNrZWQrbGFiZWwgLnRleHQub3JhbmdlIHtcXHJcXG4gICAgdHJhbnNpdGlvbjogY29sb3IgMC4ycyBlYXNlLW91dDtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWRhdGEtYmctdGV4dC1vcmFuZ2UpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiB5ZWxsb3cgbm90IGltcGxlbWVudGVkXFxyXFxubGFiZWwgLmljb24ueWVsbG93IHtcXHJcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS1zdmcteWVsbG93LXVuc2VsKTtcXHJcXG4gICAgZmlsdGVyOlxcclxcbiAgICAgICAgZ3JheXNjYWxlKCAgdmFyKC0tY29sb3Itc3ZnLXllbGxvdy1ncnktdW5zZWwpKVxcclxcbiAgICAgICAgYnJpZ2h0bmVzcyggdmFyKC0tY29sb3Itc3ZnLXllbGxvdy1icmktdW5zZWwpKSBcXHJcXG4gICAgICAgIHNhdHVyYXRlKCAgIHZhcigtLWNvbG9yLXN2Zy15ZWxsb3ctc2F0LXVuc2VsKSkgXFxyXFxuICAgICAgICBodWUtcm90YXRlKCB2YXIoLS1jb2xvci1zdmcteWVsbG93LWh1ZS11bnNlbCkpO1xcclxcbn1cXHJcXG4udGFicyBpbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdOmhvdmVyK2xhYmVsIC5pY29uLnllbGxvdyB7IFxcclxcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LXN2Zy15ZWxsb3ctaG92ZXIpO1xcclxcbn1cXHJcXG4udGFicyBpbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdOmNoZWNrZWQrbGFiZWwgLmljb24ueWVsbG93IHsgXFxyXFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktc3ZnLXllbGxvdy1zZWwpO1xcclxcbiAgICBmaWx0ZXI6XFxyXFxuICAgICAgICBncmF5c2NhbGUoICB2YXIoLS1jb2xvci1zdmcteWVsbG93LWdyeS1zZWwpKVxcclxcbiAgICAgICAgYnJpZ2h0bmVzcyggdmFyKC0tY29sb3Itc3ZnLXllbGxvdy1icmktc2VsKSkgXFxyXFxuICAgICAgICBzYXR1cmF0ZSggICB2YXIoLS1jb2xvci1zdmcteWVsbG93LXNhdC1zZWwpKSBcXHJcXG4gICAgICAgIGh1ZS1yb3RhdGUoIHZhcigtLWNvbG9yLXN2Zy15ZWxsb3ctaHVlLXNlbCkpO1xcclxcbn1cXHJcXG4udGFicyBpbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdK2xhYmVsIC50ZXh0LnllbGxvdyB7XFxyXFxuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMnMgZWFzZS1vdXQ7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1kYXRhLWJnLXRleHQteWVsbG93LXVuc2VsKTtcXHJcXG59XFxyXFxuLnRhYnMgaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXTpjaGVja2VkK2xhYmVsIC50ZXh0LnllbGxvdyB7XFxyXFxuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMnMgZWFzZS1vdXQ7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1kYXRhLWJnLXRleHQteWVsbG93KTtcXHJcXG59XFxyXFxuKi9cXHJcXG5cXHJcXG5sYWJlbCAuaWNvbi5ncmVlbiB7XFxyXFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktc3ZnLWdyZWVuLXVuc2VsKTtcXHJcXG4gICAgZmlsdGVyOlxcclxcbiAgICAgICAgZ3JheXNjYWxlKHZhcigtLWNvbG9yLXN2Zy1ncmVlbi1ncnktdW5zZWwpKSBicmlnaHRuZXNzKHZhcigtLWNvbG9yLXN2Zy1ncmVlbi1icmktdW5zZWwpKSBzYXR1cmF0ZSh2YXIoLS1jb2xvci1zdmctZ3JlZW4tc2F0LXVuc2VsKSkgaHVlLXJvdGF0ZSh2YXIoLS1jb2xvci1zdmctZ3JlZW4taHVlLXVuc2VsKSk7XFxyXFxufVxcclxcbi50YWJzIGlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl06aG92ZXIrbGFiZWwgLmljb24uZ3JlZW4ge1xcclxcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LXN2Zy1ncmVlbi1ob3Zlcik7XFxyXFxufVxcclxcbi50YWJzIGlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl06Y2hlY2tlZCtsYWJlbCAuaWNvbi5ncmVlbiB7XFxyXFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktc3ZnLWdyZWVuLXNlbCk7XFxyXFxuICAgIGZpbHRlcjpcXHJcXG4gICAgICAgIGdyYXlzY2FsZSh2YXIoLS1jb2xvci1zdmctZ3JlZW4tZ3J5LXNlbCkpIGJyaWdodG5lc3ModmFyKC0tY29sb3Itc3ZnLWdyZWVuLWJyaS1zZWwpKSBzYXR1cmF0ZSh2YXIoLS1jb2xvci1zdmctZ3JlZW4tc2F0LXNlbCkpIGh1ZS1yb3RhdGUodmFyKC0tY29sb3Itc3ZnLWdyZWVuLWh1ZS1zZWwpKTtcXHJcXG59XFxyXFxuLnRhYnMgaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXStsYWJlbCAudGV4dC5ncmVlbiB7XFxyXFxuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMnMgZWFzZS1vdXQ7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1kYXRhLWJnLXRleHQtZ3JlZW4tdW5zZWwpO1xcclxcbn1cXHJcXG4udGFicyBpbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdOmNoZWNrZWQrbGFiZWwgLnRleHQuZ3JlZW4ge1xcclxcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzIGVhc2Utb3V0O1xcclxcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItZGF0YS1iZy10ZXh0LWdyZWVuKTtcXHJcXG59XFxyXFxuXFxyXFxubGFiZWwgLmljb24uYmx1ZSB7XFxyXFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktc3ZnLWJsdWUtdW5zZWwpO1xcclxcbiAgICBmaWx0ZXI6XFxyXFxuICAgICAgICBncmF5c2NhbGUodmFyKC0tY29sb3Itc3ZnLWJsdWUtZ3J5LXVuc2VsKSkgYnJpZ2h0bmVzcyh2YXIoLS1jb2xvci1zdmctYmx1ZS1icmktdW5zZWwpKSBzYXR1cmF0ZSh2YXIoLS1jb2xvci1zdmctYmx1ZS1zYXQtdW5zZWwpKSBodWUtcm90YXRlKHZhcigtLWNvbG9yLXN2Zy1ibHVlLWh1ZS11bnNlbCkpO1xcclxcbn1cXHJcXG4udGFicyBpbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdOmhvdmVyK2xhYmVsIC5pY29uLmJsdWUge1xcclxcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LXN2Zy1ibHVlLWhvdmVyKTtcXHJcXG59XFxyXFxuLnRhYnMgaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXTpjaGVja2VkK2xhYmVsIC5pY29uLmJsdWUge1xcclxcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LXN2Zy1ibHVlLXNlbCk7XFxyXFxuICAgIGZpbHRlcjpcXHJcXG4gICAgICAgIGdyYXlzY2FsZSh2YXIoLS1jb2xvci1zdmctYmx1ZS1ncnktc2VsKSkgYnJpZ2h0bmVzcyh2YXIoLS1jb2xvci1zdmctYmx1ZS1icmktc2VsKSkgc2F0dXJhdGUodmFyKC0tY29sb3Itc3ZnLWJsdWUtc2F0LXNlbCkpIGh1ZS1yb3RhdGUodmFyKC0tY29sb3Itc3ZnLWJsdWUtaHVlLXNlbCkpO1xcclxcbn1cXHJcXG4udGFicyBpbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdK2xhYmVsIC50ZXh0LmJsdWUge1xcclxcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzIGVhc2Utb3V0O1xcclxcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItZGF0YS1iZy10ZXh0LWJsdWUtdW5zZWwpO1xcclxcbn1cXHJcXG4udGFicyBpbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdOmNoZWNrZWQrbGFiZWwgLnRleHQuYmx1ZSB7XFxyXFxuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMnMgZWFzZS1vdXQ7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1kYXRhLWJnLXRleHQtYmx1ZSk7XFxyXFxufVxcclxcblxcclxcbmxhYmVsIC5pY29uLnB1cnBsZSB7XFxyXFxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktc3ZnLXB1cnBsZS11bnNlbCk7XFxyXFxuICAgIGZpbHRlcjpcXHJcXG4gICAgICAgIGdyYXlzY2FsZSh2YXIoLS1jb2xvci1zdmctcHVycGxlLWdyeS11bnNlbCkpIGJyaWdodG5lc3ModmFyKC0tY29sb3Itc3ZnLXB1cnBsZS1icmktdW5zZWwpKSBzYXR1cmF0ZSh2YXIoLS1jb2xvci1zdmctcHVycGxlLXNhdC11bnNlbCkpIGh1ZS1yb3RhdGUodmFyKC0tY29sb3Itc3ZnLXB1cnBsZS1odWUtdW5zZWwpKTtcXHJcXG59XFxyXFxuLnRhYnMgaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXTpob3ZlcitsYWJlbCAuaWNvbi5wdXJwbGUge1xcclxcbiAgICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LXN2Zy1wdXJwbGUtaG92ZXIpO1xcclxcbn1cXHJcXG4udGFicyBpbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdOmNoZWNrZWQrbGFiZWwgLmljb24ucHVycGxlIHtcXHJcXG4gICAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS1zdmctcHVycGxlLXNlbCk7XFxyXFxuICAgIGZpbHRlcjpcXHJcXG4gICAgICAgIGdyYXlzY2FsZSh2YXIoLS1jb2xvci1zdmctcHVycGxlLWdyeS1zZWwpKSBicmlnaHRuZXNzKHZhcigtLWNvbG9yLXN2Zy1wdXJwbGUtYnJpLXNlbCkpIHNhdHVyYXRlKHZhcigtLWNvbG9yLXN2Zy1wdXJwbGUtc2F0LXNlbCkpIGh1ZS1yb3RhdGUodmFyKC0tY29sb3Itc3ZnLXB1cnBsZS1odWUtc2VsKSk7XFxyXFxufVxcclxcbi50YWJzIGlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl0rbGFiZWwgLnRleHQucHVycGxlIHtcXHJcXG4gICAgdHJhbnNpdGlvbjogY29sb3IgMC4ycyBlYXNlLW91dDtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWRhdGEtYmctdGV4dC1wdXJwbGUtdW5zZWwpO1xcclxcbn1cXHJcXG4udGFicyBpbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdOmNoZWNrZWQrbGFiZWwgLnRleHQucHVycGxlIHtcXHJcXG4gICAgdHJhbnNpdGlvbjogY29sb3IgMC4ycyBlYXNlLW91dDtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWRhdGEtYmctdGV4dC1wdXJwbGUpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBcXHJcXG4jdGFiMCArIGxhYmVsIC5pY29uIHtcXHJcXG4gICAgZmlsdGVyOiBncmF5c2NhbGUodmFyKC0tdWktZGF0YS1zaWRlYmFyLXRhYjAtZ3JheXNjYWxlKSkgYnJpZ2h0bmVzcyh2YXIoLS11aS1kYXRhLXNpZGViYXItdGFiLWJyaWdodG5lc3MtdW5zZWwpKSBzYXR1cmF0ZSh2YXIoLS11aS1kYXRhLXNpZGViYXItdGFiLXNhdHVyYXRpb24tdW5zZWwpKSBodWUtcm90YXRlKHZhcigtLXVpLWRhdGEtc2lkZWJhci10YWIwLWh1ZSkpIHNhdHVyYXRlKHZhcigtLXVpLWRhdGEtc2lkZWJhci10YWItc2F0dXJhdGlvbi11bnNlbCkpO1xcclxcbn1cXHJcXG4jdGFiMSArIGxhYmVsIC5pY29uIHtcXHJcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKHZhcigtLXVpLWRhdGEtc2lkZWJhci10YWItYnJpZ2h0bmVzcy11bnNlbCkpIGh1ZS1yb3RhdGUodmFyKC0tdWktZGF0YS1zaWRlYmFyLXRhYjEtaHVlKSkgc2F0dXJhdGUodmFyKC0tdWktZGF0YS1zaWRlYmFyLXRhYi1zYXR1cmF0aW9uLXVuc2VsKSk7XFxyXFxufVxcclxcbiN0YWIyICsgbGFiZWwgLmljb24ge1xcclxcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3ModmFyKC0tdWktZGF0YS1zaWRlYmFyLXRhYi1icmlnaHRuZXNzLXVuc2VsKSkgaHVlLXJvdGF0ZSh2YXIoLS11aS1kYXRhLXNpZGViYXItdGFiMi1odWUpKSBzYXR1cmF0ZSh2YXIoLS11aS1kYXRhLXNpZGViYXItdGFiLXNhdHVyYXRpb24tdW5zZWwpKTtcXHJcXG59XFxyXFxuI3RhYjMgKyBsYWJlbCAuaWNvbiB7XFxyXFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcyh2YXIoLS11aS1kYXRhLXNpZGViYXItdGFiLWJyaWdodG5lc3MtdW5zZWwpKSBodWUtcm90YXRlKHZhcigtLXVpLWRhdGEtc2lkZWJhci10YWIzLWh1ZSkpIHNhdHVyYXRlKHZhcigtLXVpLWRhdGEtc2lkZWJhci10YWItc2F0dXJhdGlvbi11bnNlbCkpO1xcclxcbn1cXHJcXG4jdGFiNCArIGxhYmVsIC5pY29uIHtcXHJcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKHZhcigtLXVpLWRhdGEtc2lkZWJhci10YWItYnJpZ2h0bmVzcy11bnNlbCkpIGh1ZS1yb3RhdGUodmFyKC0tdWktZGF0YS1zaWRlYmFyLXRhYjQtaHVlKSkgc2F0dXJhdGUodmFyKC0tdWktZGF0YS1zaWRlYmFyLXRhYi1zYXR1cmF0aW9uLXVuc2VsKSk7XFxyXFxufVxcclxcbiN0YWIwOmNoZWNrZWQgKyBsYWJlbCAuaWNvbiB7XFxyXFxuICAgIGZpbHRlcjogZ3JheXNjYWxlKHZhcigtLXVpLWRhdGEtc2lkZWJhci10YWIwLWdyYXlzY2FsZSkpIGJyaWdodG5lc3ModmFyKC0tdWktZGF0YS1zaWRlYmFyLXRhYi1icmlnaHRuZXNzLXNlbCkpIGh1ZS1yb3RhdGUodmFyKC0tdWktZGF0YS1zaWRlYmFyLXRhYjAtaHVlKSkgc2F0dXJhdGUodmFyKC0tdWktZGF0YS1zaWRlYmFyLXRhYi1zYXR1cmF0aW9uLXNlbCkpO1xcclxcbn1cXHJcXG4jdGFiMTpjaGVja2VkICsgbGFiZWwgLmljb24ge1xcclxcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3ModmFyKC0tdWktZGF0YS1zaWRlYmFyLXRhYi1icmlnaHRuZXNzLXNlbCkpIGh1ZS1yb3RhdGUodmFyKC0tdWktZGF0YS1zaWRlYmFyLXRhYjEtaHVlKSkgc2F0dXJhdGUodmFyKC0tdWktZGF0YS1zaWRlYmFyLXRhYi1zYXR1cmF0aW9uLXNlbCkpO1xcclxcbn1cXHJcXG4jdGFiMjpjaGVja2VkICsgbGFiZWwgLmljb24ge1xcclxcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3ModmFyKC0tdWktZGF0YS1zaWRlYmFyLXRhYi1icmlnaHRuZXNzLXNlbCkpIGh1ZS1yb3RhdGUodmFyKC0tdWktZGF0YS1zaWRlYmFyLXRhYjItaHVlKSkgc2F0dXJhdGUodmFyKC0tdWktZGF0YS1zaWRlYmFyLXRhYi1zYXR1cmF0aW9uLXNlbCkpO1xcclxcbn1cXHJcXG4jdGFiMzpjaGVja2VkICsgbGFiZWwgLmljb24ge1xcclxcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3ModmFyKC0tdWktZGF0YS1zaWRlYmFyLXRhYi1icmlnaHRuZXNzLXNlbCkpIGh1ZS1yb3RhdGUodmFyKC0tdWktZGF0YS1zaWRlYmFyLXRhYjMtaHVlKSkgc2F0dXJhdGUodmFyKC0tdWktZGF0YS1zaWRlYmFyLXRhYi1zYXR1cmF0aW9uLXNlbCkpO1xcclxcbn1cXHJcXG4jdGFiNDpjaGVja2VkICsgbGFiZWwgLmljb24ge1xcclxcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3ModmFyKC0tdWktZGF0YS1zaWRlYmFyLXRhYi1icmlnaHRuZXNzLXNlbCkpIGh1ZS1yb3RhdGUodmFyKC0tdWktZGF0YS1zaWRlYmFyLXRhYjQtaHVlKSkgc2F0dXJhdGUodmFyKC0tdWktZGF0YS1zaWRlYmFyLXRhYi1zYXR1cmF0aW9uLXNlbCkpO1xcclxcbn0gKi9cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi90YWJzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi90YWJzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==