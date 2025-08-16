(self["webpackChunkweb"] = self["webpackChunkweb"] || []).push([["index"],{

/***/ "./src/assets/svg/bluesky.svg":
/*!************************************!*\
  !*** ./src/assets/svg/bluesky.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "bluesky.svg";

/***/ }),

/***/ "./src/assets/svg/github.svg":
/*!***********************************!*\
  !*** ./src/assets/svg/github.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "github.svg";

/***/ }),

/***/ "./src/assets/svg/icons-red/icon-art.svg":
/*!***********************************************!*\
  !*** ./src/assets/svg/icons-red/icon-art.svg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "icon-art.svg";

/***/ }),

/***/ "./src/assets/svg/icons-red/icon-features.svg":
/*!****************************************************!*\
  !*** ./src/assets/svg/icons-red/icon-features.svg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "icon-features.svg";

/***/ }),

/***/ "./src/assets/svg/icons-red/icon-home.svg":
/*!************************************************!*\
  !*** ./src/assets/svg/icons-red/icon-home.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "icon-home.svg";

/***/ }),

/***/ "./src/assets/svg/icons-red/icon-save.svg":
/*!************************************************!*\
  !*** ./src/assets/svg/icons-red/icon-save.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "icon-save.svg";

/***/ }),

/***/ "./src/assets/svg/icons-red/icon-scale.svg":
/*!*************************************************!*\
  !*** ./src/assets/svg/icons-red/icon-scale.svg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "icon-scale.svg";

/***/ }),

/***/ "./src/assets/svg/instagram.svg":
/*!**************************************!*\
  !*** ./src/assets/svg/instagram.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "instagram.svg";

/***/ }),

/***/ "./src/js/contentArt.js":
/*!******************************!*\
  !*** ./src/js/contentArt.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SetupArtWindow: () => (/* binding */ SetupArtWindow)
/* harmony export */ });
/* functiionality related to the Art window */

function SetupArtWindow() {

}

/***/ }),

/***/ "./src/js/contentData.js":
/*!*******************************!*\
  !*** ./src/js/contentData.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PG_FEATURES: () => (/* binding */ PG_FEATURES),
/* harmony export */   PG_INTRO: () => (/* binding */ PG_INTRO),
/* harmony export */   PG_PATTERN: () => (/* binding */ PG_PATTERN),
/* harmony export */   PG_SAVE: () => (/* binding */ PG_SAVE),
/* harmony export */   PG_SIZE: () => (/* binding */ PG_SIZE),
/* harmony export */   PageClosed: () => (/* binding */ PageClosed),
/* harmony export */   PageOpened: () => (/* binding */ PageOpened),
/* harmony export */   SetupDataWindow: () => (/* binding */ SetupDataWindow)
/* harmony export */ });
/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./text */ "./src/js/text.js");
/* harmony import */ var _lilutils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lilutils */ "./src/js/lilutils.js");
/* harmony import */ var _uiMain__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./uiMain */ "./src/js/uiMain.js");
/* harmony import */ var _uiData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./uiData */ "./src/js/uiData.js");
/* functiionality related to the Data window */






// IDs / technical names for each page, as consts here so they're not hardcoded all higgledy piggledy 
const PG_INTRO = 'intro', PG_SIZE = 'size', PG_FEATURES = 'features', PG_PATTERN = 'pattern', PG_SAVE = 'save';

function SetupDataWindow() {
    // select initial tab
    (0,_uiData__WEBPACK_IMPORTED_MODULE_3__.SelectTab)(_uiData__WEBPACK_IMPORTED_MODULE_3__.initialTab, true);
    // create events for changing tabs
    document.querySelectorAll('input[name="tab"]').forEach(tab => {
        tab.addEventListener('change', () => {
            const selected = document.querySelector('input[name="tab"]:checked');
            (0,_uiData__WEBPACK_IMPORTED_MODULE_3__.SelectTab)((0,_lilutils__WEBPACK_IMPORTED_MODULE_1__.StringToNumber)(selected.id));
        });
    });
}

/**
 * Called the moment a page is opened (prior to any animations firing)
 * 
 * @param {HTMLElement} page element of the given page that was just opened 
 * @param {boolean} [wasSnapped] was the page snap displayed (t) or regular transition (f)
 * 
 * NOTE: iterative call on all pages. It may come BEFORE OR AFTER `PageClosed`
 */
function PageOpened(page, wasSnapped) {
    switch (page.id) {
        case PG_INTRO:
            break;
        case PG_SIZE:
            break;
        case PG_FEATURES:
            break;
        case PG_PATTERN:
            break;
        case PG_SAVE:
            break;
    }
}

/**
 * Called the moment a page is closed (prior to any animations firing)
 * 
 * @param {HTMLElement} page element of the given page that was just closed 
 * 
 * NOTE: iterative call on all pages. It may come BEFORE OR AFTER `PageOpened`
 */
function PageClosed(page) {
    switch (page.id) {
        case PG_INTRO:
            break;
        case PG_SIZE:
            break;
        case PG_FEATURES:
            break;
        case PG_PATTERN:
            break;
        case PG_SAVE:
            break;
    }
}

/***/ }),

/***/ "./src/js/css.js":
/*!***********************!*\
  !*** ./src/js/css.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// import all css files 
__webpack_require__.e(/*! import() */ "src_css_fonts_css").then(__webpack_require__.bind(__webpack_require__, /*! ./../css/fonts.css */ "./src/css/fonts.css"));
Promise.all(/*! import() */[__webpack_require__.e("node_modules_css-loader_dist_cjs_js_src_css_vars_css-node_modules_style-loader_dist_runtime_i-978b82"), __webpack_require__.e("src_css_style_css")]).then(__webpack_require__.bind(__webpack_require__, /*! ./../css/style.css */ "./src/css/style.css"));
__webpack_require__.e(/*! import() */ "src_css_artwindow_css").then(__webpack_require__.bind(__webpack_require__, /*! ./../css/artwindow.css */ "./src/css/artwindow.css"));
__webpack_require__.e(/*! import() */ "src_css_datawindow_css").then(__webpack_require__.bind(__webpack_require__, /*! ./../css/datawindow.css */ "./src/css/datawindow.css"));
Promise.all(/*! import() */[__webpack_require__.e("node_modules_css-loader_dist_cjs_js_src_css_vars_css-node_modules_style-loader_dist_runtime_i-978b82"), __webpack_require__.e("src_css_components_hbbtn_css")]).then(__webpack_require__.bind(__webpack_require__, /*! ./../css/components/hbbtn.css */ "./src/css/components/hbbtn.css"));
__webpack_require__.e(/*! import() */ "src_css_components_minput_css").then(__webpack_require__.bind(__webpack_require__, /*! ./../css/components/minput.css */ "./src/css/components/minput.css"));
__webpack_require__.e(/*! import() */ "src_css_components_socialbtn_css").then(__webpack_require__.bind(__webpack_require__, /*! ./../css/components/socialbtn.css */ "./src/css/components/socialbtn.css"));
__webpack_require__.e(/*! import() */ "src_css_components_slidebtn_css").then(__webpack_require__.bind(__webpack_require__, /*! ./../css/components/slidebtn.css */ "./src/css/components/slidebtn.css"));
__webpack_require__.e(/*! import() */ "src_css_components_tabs_css").then(__webpack_require__.bind(__webpack_require__, /*! ./../css/components/tabs.css */ "./src/css/components/tabs.css"));

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css */ "./src/js/css.js");
/* harmony import */ var _css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _uiMain__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uiMain */ "./src/js/uiMain.js");
/* harmony import */ var _contentData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contentData */ "./src/js/contentData.js");
/* harmony import */ var _contentArt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contentArt */ "./src/js/contentArt.js");
 // import css classes 




window.addEventListener('load', function () {
    (0,_uiMain__WEBPACK_IMPORTED_MODULE_1__.BuildUI)();
    (0,_contentData__WEBPACK_IMPORTED_MODULE_2__.SetupDataWindow)();
    (0,_contentArt__WEBPACK_IMPORTED_MODULE_3__.SetupArtWindow)();
    // DemoLabel();
});

function DemoLabel() {
    console.log("Creating demo label");
    var label = document.createElement("Label");
    label.innerHTML = "Hello world! 0123456789";
    document.body.appendChild(label);
}


/***/ }),

/***/ "./src/js/lilutils.js":
/*!****************************!*\
  !*** ./src/js/lilutils.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddAlphaToHex: () => (/* binding */ AddAlphaToHex),
/* harmony export */   DeselectAll: () => (/* binding */ DeselectAll),
/* harmony export */   DeselectElement: () => (/* binding */ DeselectElement),
/* harmony export */   SetElementDisabled: () => (/* binding */ SetElementDisabled),
/* harmony export */   SetElementEnabled: () => (/* binding */ SetElementEnabled),
/* harmony export */   StringToNumber: () => (/* binding */ StringToNumber),
/* harmony export */   isBlank: () => (/* binding */ isBlank),
/* harmony export */   style: () => (/* binding */ style)
/* harmony export */ });
// some little utilities :3 

/**
 * check if a string is null, empty, or whitespace
 * @param {string} str input string to test 
 * @returns {boolean} true if blank, false if contains content
 */
const isBlank = str => !str || !str.trim();

/** 
 * Gets the CSS stylesheet for the page.
 * Remember to use `.value` when accessing `style` (eg, `style.value.getPropertyValue`)
 * @type {CSSStyleDeclaration}
 */
const style = {
    get value() {
        if (!_style) {
            if (!document.body) {
                throw new Error("Body isn't yet loaded, don't call style until after window is loaded");
            }
            _style = window.getComputedStyle(document.body);
        }
        return _style;
    }
};
/** local style reference for utils
 * @type {CSSStyleDeclaration} */
let _style;

/**
 * Removes non-numeric chars from a string and returns the resulting number. 
 * Returns null if no number is found. 
 * @param {string} str Input string to convert 
 * @returns {number|null} The parsed number, or null if no digits are found.
 */
const StringToNumber = str => (str.match(/\d+/) ? parseInt(str.match(/\d+/)[0], 10) : null);

/**
 * Adds an alpha value to a hex code via 0-1 numeric value
 * @param {string} color Hex code formatted color, eg `#FF00FF` 
 * @param {number} opacity Number from 0 to 1 to represent alpha value 
 * @returns Hex code with hex-formatted alpha added
 */
function AddAlphaToHex(color, opacity) {
    // credit: https://stackoverflow.com/questions/19799777/how-to-add-transparency-information-to-a-hex-color-code/68398236#68398236
    let _opacity = Math.round(Math.min(Math.max(opacity ?? 1, 0), 1) * 255);
    return color + _opacity.toString(16).toUpperCase();
}

/**
 * Deselects (and optionally blurs) the given HTMLElement AND all its children
 * @param {HTMLElement} element HTMLElement to deselect
 * @param {boolean} [alsoBlur=true] also blur (unfocus) the element, or any focused children of the element?  
 */
function DeselectElement(element, alsoBlur = true) {
    // get selection 
    const selection = window.getSelection();
    // ensure that selection(s) exist
    if (selection.rangeCount) {
        for (let i = 0; i < selection.rangeCount; i++) {
            const range = selection.getRangeAt(i);
            // check if the selection intersects the given element
            if (element.contains(range.commonAncestorContainer)) {
                selection.removeAllRanges();
                break;
            }
        }
    }
    if (alsoBlur) {
        // check for any active elements / descendants to defocus 
        const active = document.activeElement;
        if (element.contains(active)) {
            active.blur();
        }
    }
}

/**
 * Deselect ALL selected elements on the page 
 * @param {boolean} [alsoBlur=true] also blur (unfocus) any and all focused elements?
 */
function DeselectAll(alsoBlur = true) {
    window.getSelection().removeAllRanges();
    if (alsoBlur) {
        if (document.activeElement && document.activeElement !== document.body) {
            document.activeElement.blur();
        }
    }
}

/**
 * Enables or disables the given HTML element by doing the following:
 * - To Enable...
 *   - Setting `pointerEvents` attribute to `'auto'`
 *   - Removing `aria-hidden` attribute
 *   - Removing `inert` attribute
 *   - Removing `tabIndex` attribute, including on all interactive children,
 *     unless a `preservedTabIndex` attribute is found, who's value will be used instead.
 * - To Disable...
 *   - Setting `pointerEvents` attribute to `'none'`
 *   - Setting `tabIndex` attribute to `-1`, including to all interactive children
 *   - Setting `aria-hidden` attribute to `true`
 *   - Setting `inert` attribute to `''`
 * @param {HTMLElement} element HTMLElement to fully enable or disable
 * @param {boolean} [set=true] state to assign, `true` to Enable (default), or `false` to Disable 
 */
function SetElementEnabled(element, set = true) {
    element.style.pointerEvents = set ? 'auto' : 'none';
    if (set) {
        // enable 
        if (element.hasAttribute('preservedTabIndex')) {
            element.setAttribute('tabIndex', element.getAttribute('preservedTabIndex'));
        } else {
            element.removeAttribute('tabIndex');
        }
        element.removeAttribute('aria-hidden');
        element.removeAttribute('inert');
    } else {
        // disable 
        element.setAttribute('tabIndex', '-1');
        element.setAttribute('aria-hidden', 'true');
        element.setAttribute('inert', '');
    }
    element.querySelectorAll('a, button, input, select, textarea, [tabindex]').forEach(el => {
        if (set) {
            // enable 
            if (el.hasAttribute('preservedTabIndex')) {
                el.setAttribute('tabIndex', el.getAttribute('preservedTabIndex'));
            } else {
                el.removeAttribute('tabIndex');
            }
        } else {
            // disable 
            el.setAttribute('tabIndex', '-1');
        }
        if ('disabled' in el) el.disabled = !set;
    });
}

/**
 * Disables the given HTML element by doing the following:
 * - Setting `pointerEvents` attribute to `'none'`
 * - Setting `tabIndex` attribute to `-1`, including to all interactive children
 * - Setting `aria-hidden` attribute to `true`
 * - Setting `inert` attribute to `''`
 * 
 * Convenience function; simply calls `SetElementEnabled(element,false);`
 * @param {HTMLElement} element Element to fully disable
 */
function SetElementDisabled(element) {
    SetElementEnabled(element, false);
}

// TODO: organize this class better, so similar utilities are grouped 

/***/ }),

/***/ "./src/js/text.js":
/*!************************!*\
  !*** ./src/js/text.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EMAIL_BTN_TEXT: () => (/* binding */ EMAIL_BTN_TEXT),
/* harmony export */   EMAIL_PLACEHOLDER: () => (/* binding */ EMAIL_PLACEHOLDER),
/* harmony export */   PAGES_COUNT: () => (/* binding */ PAGES_COUNT),
/* harmony export */   PAGE_NAMES: () => (/* binding */ PAGE_NAMES),
/* harmony export */   SLIDING_BUTTON: () => (/* binding */ SLIDING_BUTTON),
/* harmony export */   SOCIAL_BLUESKY: () => (/* binding */ SOCIAL_BLUESKY),
/* harmony export */   SOCIAL_GITHUB: () => (/* binding */ SOCIAL_GITHUB),
/* harmony export */   SOCIAL_INSTAGRAM: () => (/* binding */ SOCIAL_INSTAGRAM),
/* harmony export */   SUBTITLE: () => (/* binding */ SUBTITLE),
/* harmony export */   TITLE: () => (/* binding */ TITLE)
/* harmony export */ });
// [ [ [ [  [  [   [ TEXT VALUES ]   ]  ]  ] ] ] ]

// ============= HEADER & FOOTER =========================

// --------- HEADER -----------------------

const TITLE = "Canvas Visualizer";
const SUBTITLE = "Everywhere Together";

// --------- FOOTER -----------------------

const SOCIAL_GITHUB = "GitHub";
const SOCIAL_INSTAGRAM = "Instagram";
const SOCIAL_BLUESKY = "Bluesky";

const EMAIL_PLACEHOLDER = "Duck Pond Newsletter";
const EMAIL_BTN_TEXT = "Subscribe";
const SLIDING_BUTTON = "Live now on Kickstarter!";


// ============= DATA WINDOW =============================

// --------- INTRO PAGE -----------------------

// --------- SIZE PAGE ------------------------

// --------- FEATURES PAGE --------------------

// --------- COLOUR & PATTERN PAGE ------------

// --------- SAVE & LOAD PAGE -----------------

// --------- SIDEBAR / TABS -------------------

// total pages count: intro, size, features, colour/pattern, save/load
const PAGE_NAMES = ["Intro", "Size", "Features", "Colour & Pattern", "Save & Load"];
const PAGES_COUNT = PAGE_NAMES.length;
// TODO: replace txt.PAGES_COUNT with somethinig better. theoretically the number of pages overall shouldn't be defined by text class, but whatever, it works

// ============= ART WINDOW ==============================



// TODO - localization

/***/ }),

/***/ "./src/js/ui.js":
/*!**********************!*\
  !*** ./src/js/ui.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddClassToDOMs: () => (/* binding */ AddClassToDOMs),
/* harmony export */   AddClassesToDOM: () => (/* binding */ AddClassesToDOM),
/* harmony export */   AddElementAttribute: () => (/* binding */ AddElementAttribute),
/* harmony export */   AddElementAttributes: () => (/* binding */ AddElementAttributes),
/* harmony export */   AddElementTo: () => (/* binding */ AddElementTo),
/* harmony export */   AddElementWithClassTo: () => (/* binding */ AddElementWithClassTo),
/* harmony export */   CreateDiv: () => (/* binding */ CreateDiv),
/* harmony export */   CreateDivWithClass: () => (/* binding */ CreateDivWithClass),
/* harmony export */   CreateDivWithID: () => (/* binding */ CreateDivWithID),
/* harmony export */   CreateDivWithIDAndClasses: () => (/* binding */ CreateDivWithIDAndClasses),
/* harmony export */   CreateElement: () => (/* binding */ CreateElement),
/* harmony export */   CreateElementWithClass: () => (/* binding */ CreateElementWithClass),
/* harmony export */   CreateImage: () => (/* binding */ CreateImage),
/* harmony export */   MakeTabbable: () => (/* binding */ MakeTabbable),
/* harmony export */   MakeTabbableWithInputTo: () => (/* binding */ MakeTabbableWithInputTo),
/* harmony export */   PassKeyboardSelection: () => (/* binding */ PassKeyboardSelection)
/* harmony export */ });
/* harmony import */ var _lilutils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lilutils */ "./src/js/lilutils.js");
/* Basic UI element generation */



/**
 * Create a DIV HTMLElement
 * @returns {HTMLElement} newly made HTML <div> element
 */
function CreateDiv() {
    return CreateElement('div');
}
/**
 * Create a DIV HTMLElement with the given ID
 * @param {string} id ID value
 * @returns {HTMLElement} newly made HTML <div> element
 */
function CreateDivWithID(id) {
    let div = CreateDiv();
    div.id = id;
    return div;
}
/**
 * Create a DIV HTMLElement with the given CSS class(es)
 * @param {...string} cssClasses one or more CSS classes to add
 * @returns {HTMLElement} newly made HTML <div> element
 */
function CreateDivWithClass(...cssClasses) {
    let div = CreateDiv();
    div.classList.add(...cssClasses);
    return div;
}
/**
 * Create a DIV HTMLElement with the given ID and CSS class(es)
 * @param {string} id ID value
 * @param {...string} cssClasses one or more CSS classes to add
 * @returns {HTMLElement} newly made HTML <div> element
 */
function CreateDivWithIDAndClasses(id, ...cssClasses) {
    let div = CreateDiv();
    div.id = id;
    div.classList.add(...cssClasses);
    return div;
}
/**
 * Creates a new HTMLElement of the given type (newElement) 
 * and appends it as a child to the given pre-existing element (domElement)
 * @param {HTMLElement} domElement existing HTMLElement which will be newElement's parent
 * @param {string} newElement HTMLElement type to create and append as a child to domElement
 * @returns {HTMLElement} returns the newly created HTMLElement
 */
function AddElementTo(domElement, newElement) {
    let element = CreateElement(newElement);
    domElement.appendChild(element);
    return element;
}
/**
 * Creates a new HTMLElement of the given type (newElement) with the given CSS class(es)
 * and appends it as a child to the given pre-existing element (domElement)
 * @param {HTMLElement} domElement existing HTMLElement which will be newElement's parent
 * @param {string} newElement HTMLElement type to create and append as a child to domElement
 * @param  {...string} cssClasses one or more classes to add to the new element. 
 * If none is specified, uses `newElement` as class name
 * @returns {HTMLElement} returns the newly created HTMLElement
 */
function AddElementWithClassTo(domElement, newElement, ...cssClasses) {
    if (cssClasses.length == 0) {
        cssClasses.push(newElement);
    }
    let element = CreateElementWithClass(newElement, ...cssClasses);
    domElement.appendChild(element);
    return element;
}
/**
 * Create a new HTMLElement of the given type
 * @param {string} newElement type of HTMLElement
 * @returns {HTMLElement} newly created HTMLElement
 */
function CreateElement(newElement) {
    return document.createElement(newElement);
}
/**
 * Create a new HTMLElement of the given type, with one or more CSS classes
 * @param {string} newElement type of new HTMLElement
 * @param  {...string} cssClasses one or more classes to add to the new element
 * @returns {HTMLElement} returns HTMLElement with the given CSS class name(s)
 */
function CreateElementWithClass(newElement, ...cssClasses) {
    let element = CreateElement(newElement);
    element.classList.add(...cssClasses);
    return element;
}

/**
 * Adds the given class(es) to the given HTMLElement (one element, multiple classes)
 * @param {HTMLElement} domElement HTMLElement to add the given classes to
 * @param  {...string} cssClasses one or more classes to add to the domElement
 * @returns 
 */
function AddClassesToDOM(domElement, ...cssClasses) {
    if (domElement.classList.length == 0) {
        domElement.classList.add(...cssClasses);
        return;
    }
    for (let i = 0; i < cssClasses.length; i++) {
        if (!domElement.classList.contains(cssClasses[i])) {
            domElement.classList.add(cssClasses[i]);
        }
    }
}
/**
 * Adds the given class to the given HTMLElement(s) (one class, multiple elements)
 * @param {string} cssClass Class to add
 * @param  {...Element} domElements HTMLElement(s) to add the class to
 */
function AddClassToDOMs(cssClass, ...domElements) {
    for (let i = 0; i < domElements.length; i++) {
        if (!domElements[i].classList.contains(cssClass)) {
            domElements[i].classList.add(cssClass);
        }
    }
}

/**
 * Sets the given attributes on the given HTMLElement (attTypes and attValues lengths must match)
 * @param {HTMLElement} element HTMLElement to add attributes to
 * @param {string[]} attTypes Array of attribute types (qualifiedNames)
 * @param {string[]} attValues Array of values of attributes
 */
function AddElementAttributes(element, attTypes, attValues) {
    if (attTypes.length != attValues.length) {
        console.error("ERROR: attribute types and values array lengths must match");
        return;
    }
    for (let i = 0; i < attTypes.length; i++) {
        AddElementAttribute(element, attTypes[i], attValues[i]);
    }
}

/**
 * Sets the given attribute on the given HTMLElement
 * @param {HTMLElement} element HTMLElement to add attribute to
 * @param {string} attTypes Type (qualifiedName) of attribute
 * @param {string} attValues Value of attributue
 */
function AddElementAttribute(element, attType, attValue) {
    element.setAttribute(attType, attValue);
}

/**
 * Creates a new `<img>` element, and assigns the given src attribute (and optional alt text value)
 * @param {string} imgSrc Value to add to the "src" attribute to the new img
 * @param {string} alt Alt text to provide to the new img (optional)
 * @returns 
 */
function CreateImage(imgSrc, alt) {
    let img = CreateElement('img');
    img.setAttribute('src', imgSrc);
    if (!(0,_lilutils__WEBPACK_IMPORTED_MODULE_0__.isBlank)(alt)) {
        img.setAttribute('alt', alt);
    }
    return img;
}

/**
 * Make the given HTMLElement appear in the tab index for the page
 * Note: giving the `tabIndex` value `-1` will make an element untabbable, even if it's tabbable by default.
 * @param {HTMLElement} element HTMLElement to add to the tab index 
 * @param {number} [tabIndex=0] Optional value to specify tab index. `-1` = not tabbable
 * @param {boolean} [preserve=true] Optionally add a `preservedTabIndex` attribute with the given `tabIndex` value
 */
function MakeTabbable(element, tabIndex = 0, preserve = true) {
    element.setAttribute('tabIndex', tabIndex);
    if (preserve) {
        element.setAttribute('preservedTabIndex', tabIndex);
    }
}

/**
 * Makes the given HTMLElement appear in the tab index for the page, 
 * and sends any received keyboard enter/spacebar inputs to `inputToElement`.
 * Eg, if you add a <label> to the tab index, but want to send its input to a different <input> tag.
 * @param {HTMLElement} tabElement HTMLElement to add to the tab index
 * @param {HTMLElement} inputToElement HTMLElement that receives Enter/Spacebar keyboard input from `tabElement` as a `click()`
 * @param {number} tabIndex Default 0, optional value to specify tab index. `-1` = not tabbable (and no input events are added)
 */
function MakeTabbableWithInputTo(tabElement, inputToElement, tabIndex = 0) {
    MakeTabbable(tabElement, tabIndex);
    if (tabIndex != -1) {
        PassKeyboardSelection(tabElement, inputToElement);
    }
}

/**
 * Adds a `keydown` event listener for Enter/Spacebar to `fromElement`, which sends a `click()` event to the `toElement`
 * @param {HTMLElement} fromElement Element that receives the user keyboard input
 * @param {HTMLElement} toElement Element that the `click()` event gets sent to
 */
function PassKeyboardSelection(fromElement, toElement) {
    fromElement.addEventListener('keydown', e => {
        // much older devices check for "Spacebar", might as well support it 
        if (e.key === ' ' || e.key === 'Spacebar' || e.key === 'Enter') {
            e.preventDefault(); // don't scroll the page down or anything
            toElement.click(); // pass click to new element
        }
    });
}

// TODO: add enter input to elements that only function on spacebar (eg, rn the "Subscribe" btn works for Spacebar but not Enter)
// TODO: add keyboard input to social media buttons (they don't respond in CSS to keyboard at all)

/***/ }),

/***/ "./src/js/uiArt.js":
/*!*************************!*\
  !*** ./src/js/uiArt.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreateArtWindow: () => (/* binding */ CreateArtWindow)
/* harmony export */ });
/* harmony import */ var _uiMain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uiMain */ "./src/js/uiMain.js");
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui */ "./src/js/ui.js");
/* UI elements for the Data window - canvas view, info, etc */




let canvasContainer;
let infoContainer;

function CreateArtWindow() {
    // create containers 
    canvasContainer = _ui__WEBPACK_IMPORTED_MODULE_1__.CreateDivWithClass('artWindow','canvas');
    infoContainer = _ui__WEBPACK_IMPORTED_MODULE_1__.CreateDivWithClass('info');
    // add to artWindow
    _uiMain__WEBPACK_IMPORTED_MODULE_0__.artWindow.appendChild(canvasContainer);
    _uiMain__WEBPACK_IMPORTED_MODULE_0__.artWindow.appendChild(infoContainer);
}

/***/ }),

/***/ "./src/js/uiData.js":
/*!**************************!*\
  !*** ./src/js/uiData.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreateDataWindow: () => (/* binding */ CreateDataWindow),
/* harmony export */   SelectTab: () => (/* binding */ SelectTab),
/* harmony export */   initialTab: () => (/* binding */ initialTab)
/* harmony export */ });
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui */ "./src/js/ui.js");
/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./text */ "./src/js/text.js");
/* harmony import */ var _contentData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contentData */ "./src/js/contentData.js");
/* harmony import */ var _uiMain__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./uiMain */ "./src/js/uiMain.js");
/* harmony import */ var _lilutils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lilutils */ "./src/js/lilutils.js");
/* harmony import */ var _assets_svg_icons_red_icon_art_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/svg/icons-red/icon-art.svg */ "./src/assets/svg/icons-red/icon-art.svg");
/* harmony import */ var _assets_svg_icons_red_icon_features_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/svg/icons-red/icon-features.svg */ "./src/assets/svg/icons-red/icon-features.svg");
/* harmony import */ var _assets_svg_icons_red_icon_home_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/svg/icons-red/icon-home.svg */ "./src/assets/svg/icons-red/icon-home.svg");
/* harmony import */ var _assets_svg_icons_red_icon_save_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/svg/icons-red/icon-save.svg */ "./src/assets/svg/icons-red/icon-save.svg");
/* harmony import */ var _assets_svg_icons_red_icon_scale_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/svg/icons-red/icon-scale.svg */ "./src/assets/svg/icons-red/icon-scale.svg");
/* UI elements for the Data window - tabs, selection buttons, etc */














const initialTab = 0;
const bgFadeAlpha = 0.82;

const useSeparators = false;

const iconArray = [_assets_svg_icons_red_icon_home_svg__WEBPACK_IMPORTED_MODULE_7__, _assets_svg_icons_red_icon_scale_svg__WEBPACK_IMPORTED_MODULE_9__, _assets_svg_icons_red_icon_features_svg__WEBPACK_IMPORTED_MODULE_6__, _assets_svg_icons_red_icon_art_svg__WEBPACK_IMPORTED_MODULE_5__, _assets_svg_icons_red_icon_save_svg__WEBPACK_IMPORTED_MODULE_8__];
const tabColors = ['red', 'orange', 'blue', 'green', 'purple'];
const pageIDs = [_contentData__WEBPACK_IMPORTED_MODULE_2__.PG_INTRO, _contentData__WEBPACK_IMPORTED_MODULE_2__.PG_SIZE, _contentData__WEBPACK_IMPORTED_MODULE_2__.PG_FEATURES, _contentData__WEBPACK_IMPORTED_MODULE_2__.PG_PATTERN, _contentData__WEBPACK_IMPORTED_MODULE_2__.PG_SAVE];

let currentPage = -1;

let tabs;
let pages = [];

/**
 * Create the data window (tabs, options, info)
 */
function CreateDataWindow() {
    // create UI elements
    CreateTabs();
    CreatePages();
    CreateFadeBG();
}


/**
 * Select the current tab and switch to its corresponding page
 * @param {number} tabNum number of tab/page to select
 * @param {boolean} snap skip animation / timing? default false 
 */
function SelectTab(tabNum, snap = false) {
    if (tabNum == currentPage && !snap) { return; }
    let lastPage = currentPage;
    currentPage = tabNum;
    console.log(`Closing ${_text__WEBPACK_IMPORTED_MODULE_1__.PAGE_NAMES[lastPage]} page, opening ${_text__WEBPACK_IMPORTED_MODULE_1__.PAGE_NAMES[currentPage]} page`)
    for (let i = 0; i < _text__WEBPACK_IMPORTED_MODULE_1__.PAGES_COUNT; i++) {
        let currentTab = i == tabNum;
        let tabId = 'tab' + i;
        let tabInput = document.querySelector(`input[id=${tabId}]`);
        let page = pages[i];

        if (currentTab) {
            // logic current tab/page being displayed, not others 
            let tabColor = tabColors[i];
            let cssColor = GetBGColor(tabColor);
            cssColor = (0,_lilutils__WEBPACK_IMPORTED_MODULE_4__.AddAlphaToHex)(cssColor, bgFadeAlpha);
            _uiMain__WEBPACK_IMPORTED_MODULE_3__.dataWindow.style.setProperty('background-color', cssColor);
            // enable page elements, fade in
            (0,_lilutils__WEBPACK_IMPORTED_MODULE_4__.SetElementEnabled)(page, true);
            page.style.setProperty('transition', 'opacity 0.5s ease-out');
            page.style.opacity = '1';
            (0,_contentData__WEBPACK_IMPORTED_MODULE_2__.PageOpened)(page, snap);
        } else {
            // non-active tab, disable page elements, fade out 
            if (lastPage == i) {
                // recently closed page
            }
            (0,_lilutils__WEBPACK_IMPORTED_MODULE_4__.SetElementEnabled)(page, false);
            page.style.setProperty('transition', 'opacity 0.1s ease-out');
            page.style.opacity = '0';
            (0,_lilutils__WEBPACK_IMPORTED_MODULE_4__.DeselectElement)(page);
            (0,_contentData__WEBPACK_IMPORTED_MODULE_2__.PageClosed)(page);
        }

        if (snap) {
            // snap to initial state
            if (i == tabNum) {
                tabInput.checked = true;
            } else {
                tabInput.checked = false;
            }
        }
    }
}

function GetBGColor(color) {
    let cssVar = '--color-data-bg-blend-' + color;
    let cssColor = _lilutils__WEBPACK_IMPORTED_MODULE_4__.style.value.getPropertyValue(cssVar);
    if (!cssColor) {
        throw new Error(`ERROR: couldn't get CSS variable for BG color: ${color}, parsed to CSS var ${cssVar}`);
    }
    return cssColor;
}


function CreateTabs() {
    tabs = _ui__WEBPACK_IMPORTED_MODULE_0__.CreateDivWithClass('tabs');
    for (let i = 0; i < _text__WEBPACK_IMPORTED_MODULE_1__.PAGES_COUNT; i++) {
        // create individual tabs, based off TABS array in text.js
        let tab = 'tab' + i;
        let tabInput = _ui__WEBPACK_IMPORTED_MODULE_0__.CreateElement('input'); // input element
        _ui__WEBPACK_IMPORTED_MODULE_0__.AddElementAttributes(tabInput,
            ['type', 'id', 'name'],
            ['radio', tab, 'tab']);
        // create label 
        let tabLabel = _ui__WEBPACK_IMPORTED_MODULE_0__.CreateElementWithClass('label', tabColors[i]); // label element
        // check for separators
        if (useSeparators && i != _text__WEBPACK_IMPORTED_MODULE_1__.PAGES_COUNT - 1) {
            _ui__WEBPACK_IMPORTED_MODULE_0__.AddClassToDOMs('separator', tabLabel);
        }
        _ui__WEBPACK_IMPORTED_MODULE_0__.AddElementAttribute(tabLabel, 'for', tab);
        _ui__WEBPACK_IMPORTED_MODULE_0__.MakeTabbableWithInputTo(tabLabel, tabInput);
        // tab text and icon
        let tabText = _ui__WEBPACK_IMPORTED_MODULE_0__.CreateDivWithClass('text', tabColors[i]);
        tabText.innerText = _text__WEBPACK_IMPORTED_MODULE_1__.PAGE_NAMES[i];
        let tabIcon = _ui__WEBPACK_IMPORTED_MODULE_0__.CreateImage(iconArray[i]);
        _ui__WEBPACK_IMPORTED_MODULE_0__.AddClassesToDOM(tabIcon, 'icon', tabColors[i]);
        tabLabel.appendChild(tabText);
        tabLabel.appendChild(tabIcon);
        // add tab elements to tabs list
        tabs.appendChild(tabInput);
        tabs.appendChild(tabLabel);
    }
    // tabs marker
    let marker = _ui__WEBPACK_IMPORTED_MODULE_0__.CreateDivWithClass('tabMarker');
    marker.appendChild(_ui__WEBPACK_IMPORTED_MODULE_0__.CreateDivWithID('tmTop'));
    marker.appendChild(_ui__WEBPACK_IMPORTED_MODULE_0__.CreateDivWithID('tmBottom'));
    tabs.appendChild(marker);
    // add to window
    _uiMain__WEBPACK_IMPORTED_MODULE_3__.dataWindow.appendChild(tabs);
}

function CreatePages() {
    // create pages content container
    let content = _ui__WEBPACK_IMPORTED_MODULE_0__.CreateDivWithClass('content');
    _uiMain__WEBPACK_IMPORTED_MODULE_3__.dataWindow.appendChild(content);
    // create pages
    for (let i = 0; i < _text__WEBPACK_IMPORTED_MODULE_1__.PAGES_COUNT; i++) {
        let page = _ui__WEBPACK_IMPORTED_MODULE_0__.CreateDivWithClass('page', pageIDs[i], tabColors[i]);
        // page.id = `page${i}`; // page ID is numeric
        page.id = pageIDs[i]; // page ID is named
        _ui__WEBPACK_IMPORTED_MODULE_0__.AddElementAttribute(page, 'z-index', i + 1);
        pages.push(page);
        content.appendChild(page);

        // page.innerHTML = `<p>Page Test, PG${i}</p>`; // test text

        // add unique page content 
        // separate functions for each so I don't have to worry about variable name conflicts 
        switch (pageIDs[i]) {
            case _contentData__WEBPACK_IMPORTED_MODULE_2__.PG_INTRO:
                CreatePageIntro(page);
                break;
            case _contentData__WEBPACK_IMPORTED_MODULE_2__.PG_SIZE:
                CreatePageSize(page);
                break;
            case _contentData__WEBPACK_IMPORTED_MODULE_2__.PG_FEATURES:
                CreatePageFeatures(page);
                break;
            case _contentData__WEBPACK_IMPORTED_MODULE_2__.PG_PATTERN:
                CreatePagePattern(page);
                break;
            case _contentData__WEBPACK_IMPORTED_MODULE_2__.PG_SAVE:
                CreatePageSave(page);
                break;

            default:
                throw new Error(`ERROR: invalid page ID, can't create page content. Page ID: ${pageIDs[i]}, index: ${i}`);

        }
    }
}


function CreatePageIntro(page) {
    // ----------------------------- CREATE INTRO PAGE -----

    let header = _ui__WEBPACK_IMPORTED_MODULE_0__.CreateElement('h2');
    header.innerText = "Hello World";
    page.appendChild(header);
    
}
function CreatePageSize(page) {
    // ----------------------------- CREATE SIZE PAGE ----- 
}
function CreatePageFeatures(page) {
    // ----------------------------- CREATE FEATURES PAGE ----- 
}
function CreatePagePattern(page) {
    // ----------------------------- CREATE COLOUR & PATTERN PAGE ----- 
}
function CreatePageSave(page) {
    // ----------------------------- CREATE SAVE & LOAD PAGE ----- 
}

/**
 * Reference function. PageName must be one of the values found in `pageNames`. Gets that page's index
 * @param {string} pageID ID of the page, must correspond to something in `pageIDs`
 * @returns {number} array index of `pageName` in `pageNames`
 */
function GetPageNumberByID(pageID) {
    for (let i = 0; i < pageIDs.length; i++) {
        if (pageIDs[i] == pageID) {
            return i;
        }
    }
    throw new Error(`Could not find page number for page name ${pageID}, check spelling. PageNames array: ${pageIDs}`);
}

/** creates the gradient fade element that sits atop the solid colour background */
function CreateFadeBG() {
    let fadeBG = _ui__WEBPACK_IMPORTED_MODULE_0__.CreateDivWithClass('fadeBG');
    _uiMain__WEBPACK_IMPORTED_MODULE_3__.dataWindow.appendChild(fadeBG);
}

/***/ }),

/***/ "./src/js/uiHdFt.js":
/*!**************************!*\
  !*** ./src/js/uiHdFt.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreateHeaderFooter: () => (/* binding */ CreateHeaderFooter)
/* harmony export */ });
/* harmony import */ var _assets_svg_github_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/svg/github.svg */ "./src/assets/svg/github.svg");
/* harmony import */ var _assets_svg_instagram_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/svg/instagram.svg */ "./src/assets/svg/instagram.svg");
/* harmony import */ var _assets_svg_bluesky_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/svg/bluesky.svg */ "./src/assets/svg/bluesky.svg");
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui */ "./src/js/ui.js");
/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./text */ "./src/js/text.js");
/* Header and Footer UI generation */








/**
 * Creates the Header (topBar) and Footer (btmBar) for the page
 * @param {Element} topBar the pre-created container element for the topBar 
 * @param {Element} btmBar the pre-created container element for the btmBar
 */
function CreateHeaderFooter(topBar, btmBar) {
    CreateTopBar(topBar);
    CreateBottomBar(btmBar);
}

// --------------------------------------------- Header (aka TopBar) --- 

function CreateTopBar(topBar) {
    let titleContainer = _ui__WEBPACK_IMPORTED_MODULE_3__.CreateDivWithClass('title', 'preventSelect');
    // let titleContainer = ui.CreateDivWithClass('title', 'allowSelectDefaultCursor');
    let subtitle = _ui__WEBPACK_IMPORTED_MODULE_3__.AddElementTo(titleContainer, 'h3');
    let title = _ui__WEBPACK_IMPORTED_MODULE_3__.AddElementTo(titleContainer, 'h1');
    subtitle.innerText = _text__WEBPACK_IMPORTED_MODULE_4__.TITLE;
    title.innerText = _text__WEBPACK_IMPORTED_MODULE_4__.SUBTITLE;
    topBar.appendChild(titleContainer);
    topBar.appendChild(CreateHamburgerButton());
}

function CreateHamburgerButton() {
    let btn = document.createElement('label');
    btn.setAttribute('class', 'burger');
    btn.setAttribute('for', 'burger');
    let input = document.createElement('input');
    input.setAttribute('type', 'checkbox');
    input.setAttribute('id', 'burger');
    btn.appendChild(input);
    btn.appendChild(document.createElement('span'));
    btn.appendChild(document.createElement('span'));
    btn.appendChild(document.createElement('span'));
    _ui__WEBPACK_IMPORTED_MODULE_3__.MakeTabbableWithInputTo(btn, input);
    return btn;
}


// --------------------------------------------- Footer (aka BtmBar) --- 

function CreateBottomBar(btmBar) {
    // ------------------------------ create social buttons 
    let ul = _ui__WEBPACK_IMPORTED_MODULE_3__.CreateElementWithClass('ul', 'sbWrapper');
    ul.appendChild(CreateSocialButton('GitHub'));
    ul.appendChild(CreateSocialButton('Instagram'));
    ul.appendChild(CreateSocialButton('Bluesky'));
    btmBar.appendChild(ul);
    // ------------------------------ create mailing list join 
    let mailGroup = _ui__WEBPACK_IMPORTED_MODULE_3__.CreateDivWithClass('minput-group');
    let mailInput = _ui__WEBPACK_IMPORTED_MODULE_3__.CreateElementWithClass('input', 'minput');
    mailInput.setAttribute('id', 'Email');
    mailInput.setAttribute('name', 'Email');
    mailInput.setAttribute('placeholder', _text__WEBPACK_IMPORTED_MODULE_4__.EMAIL_PLACEHOLDER);
    mailInput.setAttribute('autocomplete', 'off');
    let mailButton = _ui__WEBPACK_IMPORTED_MODULE_3__.CreateElementWithClass('input', 'mbuttonSubmit');
    mailButton.setAttribute('value', _text__WEBPACK_IMPORTED_MODULE_4__.EMAIL_BTN_TEXT);
    mailButton.setAttribute('type', 'submit');
    mailGroup.appendChild(mailInput);
    mailGroup.appendChild(mailButton);
    btmBar.appendChild(mailGroup);
    // create sliding button
    btmBar.appendChild(CreateSlidingButton());
}
function CreateSocialButton(name) {
    let li = _ui__WEBPACK_IMPORTED_MODULE_3__.CreateElementWithClass('li', 'icon', name.toLowerCase(), 'preventSelect');
    let tt = _ui__WEBPACK_IMPORTED_MODULE_3__.CreateElementWithClass('span', 'tooltip');
    tt.innerText = name;
    li.appendChild(tt);
    let img = _ui__WEBPACK_IMPORTED_MODULE_3__.CreateImage(GetSocialImgByName(name), name);
    li.appendChild(img);
    _ui__WEBPACK_IMPORTED_MODULE_3__.MakeTabbable(li);
    return li;
}

function GetSocialImgByName(name) {
    switch (name.toLowerCase()) {
        case "github":
            return _assets_svg_github_svg__WEBPACK_IMPORTED_MODULE_0__;
        case "instagram":
            return _assets_svg_instagram_svg__WEBPACK_IMPORTED_MODULE_1__;
        case "bluesky":
            return _assets_svg_bluesky_svg__WEBPACK_IMPORTED_MODULE_2__;
    }
    console.warn("Could not GetSocialImgByName from name: " + name);
    return null;
}
function GetSocialTextByName(name) {
    switch (name.toLowerCase()) {
        case "github":
            return _text__WEBPACK_IMPORTED_MODULE_4__.SOCIAL_GITHUB;
        case "instagram":
            return _text__WEBPACK_IMPORTED_MODULE_4__.SOCIAL_INSTAGRAM;
        case "bluesky":
            return _text__WEBPACK_IMPORTED_MODULE_4__.SOCIAL_BLUESKY;
    }
    console.warn("Could not GetSocialTextByName from name: " + name);
    return null;
}

function CreateSlidingButton() {
    let btn = _ui__WEBPACK_IMPORTED_MODULE_3__.CreateElementWithClass('button', 'slidingbtn');
    let circle = _ui__WEBPACK_IMPORTED_MODULE_3__.CreateElementWithClass('span', 'circle');
    circle.setAttribute('aria-hidden', 'true');
    circle.appendChild(_ui__WEBPACK_IMPORTED_MODULE_3__.CreateElementWithClass('span', 'icon', 'arrow'));
    btn.appendChild(circle);
    let text = _ui__WEBPACK_IMPORTED_MODULE_3__.CreateElementWithClass('span', 'button-text', 'preventSelect');
    text.innerText = _text__WEBPACK_IMPORTED_MODULE_4__.SLIDING_BUTTON;
    btn.appendChild(text);
    // let outer = ui.CreateDivWithClass('outer');
    // btn.appendChild(outer);
    _ui__WEBPACK_IMPORTED_MODULE_3__.MakeTabbable(btn);
    return btn;
}

/***/ }),

/***/ "./src/js/uiMain.js":
/*!**************************!*\
  !*** ./src/js/uiMain.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BuildUI: () => (/* binding */ BuildUI),
/* harmony export */   artWindow: () => (/* binding */ artWindow),
/* harmony export */   dataWindow: () => (/* binding */ dataWindow)
/* harmony export */ });
/* harmony import */ var _uiHdFt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uiHdFt */ "./src/js/uiHdFt.js");
/* harmony import */ var _uiData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uiData */ "./src/js/uiData.js");
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui */ "./src/js/ui.js");
/* harmony import */ var _uiArt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./uiArt */ "./src/js/uiArt.js");
/* Main UI generation */






const _useDemoBGColors = false;

/** container div for all content on the page @type Element */
let container = null;

/** Header (top bar) element @type Element */
let topBar = null;
/** Art window, where the canvas rendering goes @type Element */
let artWindow = null;
/** Data window, where the tabs and info window goes @type Element */
let dataWindow = null;
/** Footer (bottom bar) element @type Element */
let btmBar = null;

function BuildUI() {

    // top bar
    container = _ui__WEBPACK_IMPORTED_MODULE_2__.CreateDivWithID('container');

    topBar = _ui__WEBPACK_IMPORTED_MODULE_2__.AddElementWithClassTo(container, 'header');
    artWindow = _ui__WEBPACK_IMPORTED_MODULE_2__.AddElementWithClassTo(container, 'artWindow');
    dataWindow = _ui__WEBPACK_IMPORTED_MODULE_2__.AddElementWithClassTo(container, 'dataWindow');
    btmBar = _ui__WEBPACK_IMPORTED_MODULE_2__.AddElementWithClassTo(container, 'footer');

    (0,_uiHdFt__WEBPACK_IMPORTED_MODULE_0__.CreateHeaderFooter)(topBar, btmBar);
    (0,_uiData__WEBPACK_IMPORTED_MODULE_1__.CreateDataWindow)();
    (0,_uiArt__WEBPACK_IMPORTED_MODULE_3__.CreateArtWindow)();

    document.body.appendChild(container);

    if (_useDemoBGColors) {
        _ui__WEBPACK_IMPORTED_MODULE_2__.AddClassToDOMs('demoBG', topBar, btmBar, artWindow, dataWindow);
    }

}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/js/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBLGFBQWEsc0RBQXdCO0FBQ3JDLGdCQUFnQixzREFBd0I7QUFDeEMsaUJBQWlCLHNEQUF3QjtBQUN6QyxhQUFhLHNEQUF3QjtBQUNyQztBQUNBLElBQUksMkRBQWtCO0FBQ3RCLElBQUkseURBQWdCO0FBQ3BCLElBQUksdURBQWU7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLCtDQUFpQjtBQUN6QjtBQUNBO0FBQ0EsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYi8uL3NyYy9qcy9jb250ZW50QXJ0LmpzIiwid2VicGFjazovL3dlYi8uL3NyYy9qcy9jb250ZW50RGF0YS5qcyIsIndlYnBhY2s6Ly93ZWIvLi9zcmMvanMvY3NzLmpzIiwid2VicGFjazovL3dlYi8uL3NyYy9qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWIvLi9zcmMvanMvbGlsdXRpbHMuanMiLCJ3ZWJwYWNrOi8vd2ViLy4vc3JjL2pzL3RleHQuanMiLCJ3ZWJwYWNrOi8vd2ViLy4vc3JjL2pzL3VpLmpzIiwid2VicGFjazovL3dlYi8uL3NyYy9qcy91aUFydC5qcyIsIndlYnBhY2s6Ly93ZWIvLi9zcmMvanMvdWlEYXRhLmpzIiwid2VicGFjazovL3dlYi8uL3NyYy9qcy91aUhkRnQuanMiLCJ3ZWJwYWNrOi8vd2ViLy4vc3JjL2pzL3VpTWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBmdW5jdGlpb25hbGl0eSByZWxhdGVkIHRvIHRoZSBBcnQgd2luZG93ICovXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2V0dXBBcnRXaW5kb3coKSB7XHJcblxyXG59IiwiLyogZnVuY3RpaW9uYWxpdHkgcmVsYXRlZCB0byB0aGUgRGF0YSB3aW5kb3cgKi9cclxuXHJcbmltcG9ydCAqIGFzIHR4dCBmcm9tICcuL3RleHQnO1xyXG5pbXBvcnQgeyBTdHJpbmdUb051bWJlciB9IGZyb20gXCIuL2xpbHV0aWxzXCI7XHJcbmltcG9ydCB7IGRhdGFXaW5kb3cgfSBmcm9tICcuL3VpTWFpbic7XHJcbmltcG9ydCB7IGluaXRpYWxUYWIsIFNlbGVjdFRhYiB9IGZyb20gJy4vdWlEYXRhJztcclxuXHJcbi8vIElEcyAvIHRlY2huaWNhbCBuYW1lcyBmb3IgZWFjaCBwYWdlLCBhcyBjb25zdHMgaGVyZSBzbyB0aGV5J3JlIG5vdCBoYXJkY29kZWQgYWxsIGhpZ2dsZWR5IHBpZ2dsZWR5IFxyXG5leHBvcnQgY29uc3QgUEdfSU5UUk8gPSAnaW50cm8nLCBQR19TSVpFID0gJ3NpemUnLCBQR19GRUFUVVJFUyA9ICdmZWF0dXJlcycsIFBHX1BBVFRFUk4gPSAncGF0dGVybicsIFBHX1NBVkUgPSAnc2F2ZSc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2V0dXBEYXRhV2luZG93KCkge1xyXG4gICAgLy8gc2VsZWN0IGluaXRpYWwgdGFiXHJcbiAgICBTZWxlY3RUYWIoaW5pdGlhbFRhYiwgdHJ1ZSk7XHJcbiAgICAvLyBjcmVhdGUgZXZlbnRzIGZvciBjaGFuZ2luZyB0YWJzXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFtuYW1lPVwidGFiXCJdJykuZm9yRWFjaCh0YWIgPT4ge1xyXG4gICAgICAgIHRhYi5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cInRhYlwiXTpjaGVja2VkJyk7XHJcbiAgICAgICAgICAgIFNlbGVjdFRhYihTdHJpbmdUb051bWJlcihzZWxlY3RlZC5pZCkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDYWxsZWQgdGhlIG1vbWVudCBhIHBhZ2UgaXMgb3BlbmVkIChwcmlvciB0byBhbnkgYW5pbWF0aW9ucyBmaXJpbmcpXHJcbiAqIFxyXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwYWdlIGVsZW1lbnQgb2YgdGhlIGdpdmVuIHBhZ2UgdGhhdCB3YXMganVzdCBvcGVuZWQgXHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW3dhc1NuYXBwZWRdIHdhcyB0aGUgcGFnZSBzbmFwIGRpc3BsYXllZCAodCkgb3IgcmVndWxhciB0cmFuc2l0aW9uIChmKVxyXG4gKiBcclxuICogTk9URTogaXRlcmF0aXZlIGNhbGwgb24gYWxsIHBhZ2VzLiBJdCBtYXkgY29tZSBCRUZPUkUgT1IgQUZURVIgYFBhZ2VDbG9zZWRgXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gUGFnZU9wZW5lZChwYWdlLCB3YXNTbmFwcGVkKSB7XHJcbiAgICBzd2l0Y2ggKHBhZ2UuaWQpIHtcclxuICAgICAgICBjYXNlIFBHX0lOVFJPOlxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFBHX1NJWkU6XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgUEdfRkVBVFVSRVM6XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgUEdfUEFUVEVSTjpcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBQR19TQVZFOlxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIENhbGxlZCB0aGUgbW9tZW50IGEgcGFnZSBpcyBjbG9zZWQgKHByaW9yIHRvIGFueSBhbmltYXRpb25zIGZpcmluZylcclxuICogXHJcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHBhZ2UgZWxlbWVudCBvZiB0aGUgZ2l2ZW4gcGFnZSB0aGF0IHdhcyBqdXN0IGNsb3NlZCBcclxuICogXHJcbiAqIE5PVEU6IGl0ZXJhdGl2ZSBjYWxsIG9uIGFsbCBwYWdlcy4gSXQgbWF5IGNvbWUgQkVGT1JFIE9SIEFGVEVSIGBQYWdlT3BlbmVkYFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIFBhZ2VDbG9zZWQocGFnZSkge1xyXG4gICAgc3dpdGNoIChwYWdlLmlkKSB7XHJcbiAgICAgICAgY2FzZSBQR19JTlRSTzpcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBQR19TSVpFOlxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFBHX0ZFQVRVUkVTOlxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFBHX1BBVFRFUk46XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgUEdfU0FWRTpcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbn0iLCIvLyBpbXBvcnQgYWxsIGNzcyBmaWxlcyBcclxuaW1wb3J0KC8qIHdlYnBhY2tQcmVsb2FkOiB0cnVlICovICcuLy4uL2Nzcy9mb250cy5jc3MnKTtcclxuaW1wb3J0KC8qIHdlYnBhY2tQcmVsb2FkOiB0cnVlICovICcuLy4uL2Nzcy9zdHlsZS5jc3MnKTtcclxuaW1wb3J0KC8qIHdlYnBhY2tQcmVsb2FkOiB0cnVlICovICcuLy4uL2Nzcy9hcnR3aW5kb3cuY3NzJyk7XHJcbmltcG9ydCgvKiB3ZWJwYWNrUHJlbG9hZDogdHJ1ZSAqLyAnLi8uLi9jc3MvZGF0YXdpbmRvdy5jc3MnKTtcclxuaW1wb3J0KC8qIHdlYnBhY2tQcmVsb2FkOiB0cnVlICovICcuLy4uL2Nzcy9jb21wb25lbnRzL2hiYnRuLmNzcycpO1xyXG5pbXBvcnQoLyogd2VicGFja1ByZWxvYWQ6IHRydWUgKi8gJy4vLi4vY3NzL2NvbXBvbmVudHMvbWlucHV0LmNzcycpO1xyXG5pbXBvcnQoLyogd2VicGFja1ByZWxvYWQ6IHRydWUgKi8gJy4vLi4vY3NzL2NvbXBvbmVudHMvc29jaWFsYnRuLmNzcycpO1xyXG5pbXBvcnQoLyogd2VicGFja1ByZWxvYWQ6IHRydWUgKi8gJy4vLi4vY3NzL2NvbXBvbmVudHMvc2xpZGVidG4uY3NzJyk7XHJcbmltcG9ydCgvKiB3ZWJwYWNrUHJlbG9hZDogdHJ1ZSAqLyAnLi8uLi9jc3MvY29tcG9uZW50cy90YWJzLmNzcycpOyIsImltcG9ydCAnLi9jc3MnOyAvLyBpbXBvcnQgY3NzIGNsYXNzZXMgXHJcbmltcG9ydCB7IEJ1aWxkVUkgfSBmcm9tICcuL3VpTWFpbic7XHJcbmltcG9ydCB7IFNldHVwRGF0YVdpbmRvdyB9IGZyb20gJy4vY29udGVudERhdGEnO1xyXG5pbXBvcnQgeyBTZXR1cEFydFdpbmRvdyB9IGZyb20gJy4vY29udGVudEFydCc7XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIEJ1aWxkVUkoKTtcclxuICAgIFNldHVwRGF0YVdpbmRvdygpO1xyXG4gICAgU2V0dXBBcnRXaW5kb3coKTtcclxuICAgIC8vIERlbW9MYWJlbCgpO1xyXG59KTtcclxuXHJcbmZ1bmN0aW9uIERlbW9MYWJlbCgpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiQ3JlYXRpbmcgZGVtbyBsYWJlbFwiKTtcclxuICAgIHZhciBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJMYWJlbFwiKTtcclxuICAgIGxhYmVsLmlubmVySFRNTCA9IFwiSGVsbG8gd29ybGQhIDAxMjM0NTY3ODlcIjtcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobGFiZWwpO1xyXG59XHJcbiIsIi8vIHNvbWUgbGl0dGxlIHV0aWxpdGllcyA6MyBcclxuXHJcbi8qKlxyXG4gKiBjaGVjayBpZiBhIHN0cmluZyBpcyBudWxsLCBlbXB0eSwgb3Igd2hpdGVzcGFjZVxyXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyIGlucHV0IHN0cmluZyB0byB0ZXN0IFxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gdHJ1ZSBpZiBibGFuaywgZmFsc2UgaWYgY29udGFpbnMgY29udGVudFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGlzQmxhbmsgPSBzdHIgPT4gIXN0ciB8fCAhc3RyLnRyaW0oKTtcclxuXHJcbi8qKiBcclxuICogR2V0cyB0aGUgQ1NTIHN0eWxlc2hlZXQgZm9yIHRoZSBwYWdlLlxyXG4gKiBSZW1lbWJlciB0byB1c2UgYC52YWx1ZWAgd2hlbiBhY2Nlc3NpbmcgYHN0eWxlYCAoZWcsIGBzdHlsZS52YWx1ZS5nZXRQcm9wZXJ0eVZhbHVlYClcclxuICogQHR5cGUge0NTU1N0eWxlRGVjbGFyYXRpb259XHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgc3R5bGUgPSB7XHJcbiAgICBnZXQgdmFsdWUoKSB7XHJcbiAgICAgICAgaWYgKCFfc3R5bGUpIHtcclxuICAgICAgICAgICAgaWYgKCFkb2N1bWVudC5ib2R5KSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJCb2R5IGlzbid0IHlldCBsb2FkZWQsIGRvbid0IGNhbGwgc3R5bGUgdW50aWwgYWZ0ZXIgd2luZG93IGlzIGxvYWRlZFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBfc3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5ib2R5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIF9zdHlsZTtcclxuICAgIH1cclxufTtcclxuLyoqIGxvY2FsIHN0eWxlIHJlZmVyZW5jZSBmb3IgdXRpbHNcclxuICogQHR5cGUge0NTU1N0eWxlRGVjbGFyYXRpb259ICovXHJcbmxldCBfc3R5bGU7XHJcblxyXG4vKipcclxuICogUmVtb3ZlcyBub24tbnVtZXJpYyBjaGFycyBmcm9tIGEgc3RyaW5nIGFuZCByZXR1cm5zIHRoZSByZXN1bHRpbmcgbnVtYmVyLiBcclxuICogUmV0dXJucyBudWxsIGlmIG5vIG51bWJlciBpcyBmb3VuZC4gXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgSW5wdXQgc3RyaW5nIHRvIGNvbnZlcnQgXHJcbiAqIEByZXR1cm5zIHtudW1iZXJ8bnVsbH0gVGhlIHBhcnNlZCBudW1iZXIsIG9yIG51bGwgaWYgbm8gZGlnaXRzIGFyZSBmb3VuZC5cclxuICovXHJcbmV4cG9ydCBjb25zdCBTdHJpbmdUb051bWJlciA9IHN0ciA9PiAoc3RyLm1hdGNoKC9cXGQrLykgPyBwYXJzZUludChzdHIubWF0Y2goL1xcZCsvKVswXSwgMTApIDogbnVsbCk7XHJcblxyXG4vKipcclxuICogQWRkcyBhbiBhbHBoYSB2YWx1ZSB0byBhIGhleCBjb2RlIHZpYSAwLTEgbnVtZXJpYyB2YWx1ZVxyXG4gKiBAcGFyYW0ge3N0cmluZ30gY29sb3IgSGV4IGNvZGUgZm9ybWF0dGVkIGNvbG9yLCBlZyBgI0ZGMDBGRmAgXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBvcGFjaXR5IE51bWJlciBmcm9tIDAgdG8gMSB0byByZXByZXNlbnQgYWxwaGEgdmFsdWUgXHJcbiAqIEByZXR1cm5zIEhleCBjb2RlIHdpdGggaGV4LWZvcm1hdHRlZCBhbHBoYSBhZGRlZFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIEFkZEFscGhhVG9IZXgoY29sb3IsIG9wYWNpdHkpIHtcclxuICAgIC8vIGNyZWRpdDogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTk3OTk3NzcvaG93LXRvLWFkZC10cmFuc3BhcmVuY3ktaW5mb3JtYXRpb24tdG8tYS1oZXgtY29sb3ItY29kZS82ODM5ODIzNiM2ODM5ODIzNlxyXG4gICAgbGV0IF9vcGFjaXR5ID0gTWF0aC5yb3VuZChNYXRoLm1pbihNYXRoLm1heChvcGFjaXR5ID8/IDEsIDApLCAxKSAqIDI1NSk7XHJcbiAgICByZXR1cm4gY29sb3IgKyBfb3BhY2l0eS50b1N0cmluZygxNikudG9VcHBlckNhc2UoKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIERlc2VsZWN0cyAoYW5kIG9wdGlvbmFsbHkgYmx1cnMpIHRoZSBnaXZlbiBIVE1MRWxlbWVudCBBTkQgYWxsIGl0cyBjaGlsZHJlblxyXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IEhUTUxFbGVtZW50IHRvIGRlc2VsZWN0XHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2Fsc29CbHVyPXRydWVdIGFsc28gYmx1ciAodW5mb2N1cykgdGhlIGVsZW1lbnQsIG9yIGFueSBmb2N1c2VkIGNoaWxkcmVuIG9mIHRoZSBlbGVtZW50PyAgXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gRGVzZWxlY3RFbGVtZW50KGVsZW1lbnQsIGFsc29CbHVyID0gdHJ1ZSkge1xyXG4gICAgLy8gZ2V0IHNlbGVjdGlvbiBcclxuICAgIGNvbnN0IHNlbGVjdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcclxuICAgIC8vIGVuc3VyZSB0aGF0IHNlbGVjdGlvbihzKSBleGlzdFxyXG4gICAgaWYgKHNlbGVjdGlvbi5yYW5nZUNvdW50KSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWxlY3Rpb24ucmFuZ2VDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJhbmdlID0gc2VsZWN0aW9uLmdldFJhbmdlQXQoaSk7XHJcbiAgICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSBzZWxlY3Rpb24gaW50ZXJzZWN0cyB0aGUgZ2l2ZW4gZWxlbWVudFxyXG4gICAgICAgICAgICBpZiAoZWxlbWVudC5jb250YWlucyhyYW5nZS5jb21tb25BbmNlc3RvckNvbnRhaW5lcikpIHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdGlvbi5yZW1vdmVBbGxSYW5nZXMoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKGFsc29CbHVyKSB7XHJcbiAgICAgICAgLy8gY2hlY2sgZm9yIGFueSBhY3RpdmUgZWxlbWVudHMgLyBkZXNjZW5kYW50cyB0byBkZWZvY3VzIFxyXG4gICAgICAgIGNvbnN0IGFjdGl2ZSA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XHJcbiAgICAgICAgaWYgKGVsZW1lbnQuY29udGFpbnMoYWN0aXZlKSkge1xyXG4gICAgICAgICAgICBhY3RpdmUuYmx1cigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIERlc2VsZWN0IEFMTCBzZWxlY3RlZCBlbGVtZW50cyBvbiB0aGUgcGFnZSBcclxuICogQHBhcmFtIHtib29sZWFufSBbYWxzb0JsdXI9dHJ1ZV0gYWxzbyBibHVyICh1bmZvY3VzKSBhbnkgYW5kIGFsbCBmb2N1c2VkIGVsZW1lbnRzP1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIERlc2VsZWN0QWxsKGFsc29CbHVyID0gdHJ1ZSkge1xyXG4gICAgd2luZG93LmdldFNlbGVjdGlvbigpLnJlbW92ZUFsbFJhbmdlcygpO1xyXG4gICAgaWYgKGFsc29CbHVyKSB7XHJcbiAgICAgICAgaWYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgJiYgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAhPT0gZG9jdW1lbnQuYm9keSkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmJsdXIoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBFbmFibGVzIG9yIGRpc2FibGVzIHRoZSBnaXZlbiBIVE1MIGVsZW1lbnQgYnkgZG9pbmcgdGhlIGZvbGxvd2luZzpcclxuICogLSBUbyBFbmFibGUuLi5cclxuICogICAtIFNldHRpbmcgYHBvaW50ZXJFdmVudHNgIGF0dHJpYnV0ZSB0byBgJ2F1dG8nYFxyXG4gKiAgIC0gUmVtb3ZpbmcgYGFyaWEtaGlkZGVuYCBhdHRyaWJ1dGVcclxuICogICAtIFJlbW92aW5nIGBpbmVydGAgYXR0cmlidXRlXHJcbiAqICAgLSBSZW1vdmluZyBgdGFiSW5kZXhgIGF0dHJpYnV0ZSwgaW5jbHVkaW5nIG9uIGFsbCBpbnRlcmFjdGl2ZSBjaGlsZHJlbixcclxuICogICAgIHVubGVzcyBhIGBwcmVzZXJ2ZWRUYWJJbmRleGAgYXR0cmlidXRlIGlzIGZvdW5kLCB3aG8ncyB2YWx1ZSB3aWxsIGJlIHVzZWQgaW5zdGVhZC5cclxuICogLSBUbyBEaXNhYmxlLi4uXHJcbiAqICAgLSBTZXR0aW5nIGBwb2ludGVyRXZlbnRzYCBhdHRyaWJ1dGUgdG8gYCdub25lJ2BcclxuICogICAtIFNldHRpbmcgYHRhYkluZGV4YCBhdHRyaWJ1dGUgdG8gYC0xYCwgaW5jbHVkaW5nIHRvIGFsbCBpbnRlcmFjdGl2ZSBjaGlsZHJlblxyXG4gKiAgIC0gU2V0dGluZyBgYXJpYS1oaWRkZW5gIGF0dHJpYnV0ZSB0byBgdHJ1ZWBcclxuICogICAtIFNldHRpbmcgYGluZXJ0YCBhdHRyaWJ1dGUgdG8gYCcnYFxyXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IEhUTUxFbGVtZW50IHRvIGZ1bGx5IGVuYWJsZSBvciBkaXNhYmxlXHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW3NldD10cnVlXSBzdGF0ZSB0byBhc3NpZ24sIGB0cnVlYCB0byBFbmFibGUgKGRlZmF1bHQpLCBvciBgZmFsc2VgIHRvIERpc2FibGUgXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gU2V0RWxlbWVudEVuYWJsZWQoZWxlbWVudCwgc2V0ID0gdHJ1ZSkge1xyXG4gICAgZWxlbWVudC5zdHlsZS5wb2ludGVyRXZlbnRzID0gc2V0ID8gJ2F1dG8nIDogJ25vbmUnO1xyXG4gICAgaWYgKHNldCkge1xyXG4gICAgICAgIC8vIGVuYWJsZSBcclxuICAgICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ3ByZXNlcnZlZFRhYkluZGV4JykpIHtcclxuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3RhYkluZGV4JywgZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3ByZXNlcnZlZFRhYkluZGV4JykpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCd0YWJJbmRleCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKTtcclxuICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnaW5lcnQnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gZGlzYWJsZSBcclxuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgndGFiSW5kZXgnLCAnLTEnKTtcclxuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xyXG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdpbmVydCcsICcnKTtcclxuICAgIH1cclxuICAgIGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYSwgYnV0dG9uLCBpbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYSwgW3RhYmluZGV4XScpLmZvckVhY2goZWwgPT4ge1xyXG4gICAgICAgIGlmIChzZXQpIHtcclxuICAgICAgICAgICAgLy8gZW5hYmxlIFxyXG4gICAgICAgICAgICBpZiAoZWwuaGFzQXR0cmlidXRlKCdwcmVzZXJ2ZWRUYWJJbmRleCcpKSB7XHJcbiAgICAgICAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoJ3RhYkluZGV4JywgZWwuZ2V0QXR0cmlidXRlKCdwcmVzZXJ2ZWRUYWJJbmRleCcpKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZSgndGFiSW5kZXgnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIGRpc2FibGUgXHJcbiAgICAgICAgICAgIGVsLnNldEF0dHJpYnV0ZSgndGFiSW5kZXgnLCAnLTEnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCdkaXNhYmxlZCcgaW4gZWwpIGVsLmRpc2FibGVkID0gIXNldDtcclxuICAgIH0pO1xyXG59XHJcblxyXG4vKipcclxuICogRGlzYWJsZXMgdGhlIGdpdmVuIEhUTUwgZWxlbWVudCBieSBkb2luZyB0aGUgZm9sbG93aW5nOlxyXG4gKiAtIFNldHRpbmcgYHBvaW50ZXJFdmVudHNgIGF0dHJpYnV0ZSB0byBgJ25vbmUnYFxyXG4gKiAtIFNldHRpbmcgYHRhYkluZGV4YCBhdHRyaWJ1dGUgdG8gYC0xYCwgaW5jbHVkaW5nIHRvIGFsbCBpbnRlcmFjdGl2ZSBjaGlsZHJlblxyXG4gKiAtIFNldHRpbmcgYGFyaWEtaGlkZGVuYCBhdHRyaWJ1dGUgdG8gYHRydWVgXHJcbiAqIC0gU2V0dGluZyBgaW5lcnRgIGF0dHJpYnV0ZSB0byBgJydgXHJcbiAqIFxyXG4gKiBDb252ZW5pZW5jZSBmdW5jdGlvbjsgc2ltcGx5IGNhbGxzIGBTZXRFbGVtZW50RW5hYmxlZChlbGVtZW50LGZhbHNlKTtgXHJcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgRWxlbWVudCB0byBmdWxseSBkaXNhYmxlXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gU2V0RWxlbWVudERpc2FibGVkKGVsZW1lbnQpIHtcclxuICAgIFNldEVsZW1lbnRFbmFibGVkKGVsZW1lbnQsIGZhbHNlKTtcclxufVxyXG5cclxuLy8gVE9ETzogb3JnYW5pemUgdGhpcyBjbGFzcyBiZXR0ZXIsIHNvIHNpbWlsYXIgdXRpbGl0aWVzIGFyZSBncm91cGVkICIsIi8vIFsgWyBbIFsgIFsgIFsgICBbIFRFWFQgVkFMVUVTIF0gICBdICBdICBdIF0gXSBdXHJcblxyXG4vLyA9PT09PT09PT09PT09IEhFQURFUiAmIEZPT1RFUiA9PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vLyAtLS0tLS0tLS0gSEVBREVSIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5leHBvcnQgY29uc3QgVElUTEUgPSBcIkNhbnZhcyBWaXN1YWxpemVyXCI7XHJcbmV4cG9ydCBjb25zdCBTVUJUSVRMRSA9IFwiRXZlcnl3aGVyZSBUb2dldGhlclwiO1xyXG5cclxuLy8gLS0tLS0tLS0tIEZPT1RFUiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuZXhwb3J0IGNvbnN0IFNPQ0lBTF9HSVRIVUIgPSBcIkdpdEh1YlwiO1xyXG5leHBvcnQgY29uc3QgU09DSUFMX0lOU1RBR1JBTSA9IFwiSW5zdGFncmFtXCI7XHJcbmV4cG9ydCBjb25zdCBTT0NJQUxfQkxVRVNLWSA9IFwiQmx1ZXNreVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEVNQUlMX1BMQUNFSE9MREVSID0gXCJEdWNrIFBvbmQgTmV3c2xldHRlclwiO1xyXG5leHBvcnQgY29uc3QgRU1BSUxfQlROX1RFWFQgPSBcIlN1YnNjcmliZVwiO1xyXG5leHBvcnQgY29uc3QgU0xJRElOR19CVVRUT04gPSBcIkxpdmUgbm93IG9uIEtpY2tzdGFydGVyIVwiO1xyXG5cclxuXHJcbi8vID09PT09PT09PT09PT0gREFUQSBXSU5ET1cgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi8vIC0tLS0tLS0tLSBJTlRSTyBQQUdFIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4vLyAtLS0tLS0tLS0gU0laRSBQQUdFIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuLy8gLS0tLS0tLS0tIEZFQVRVUkVTIFBBR0UgLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbi8vIC0tLS0tLS0tLSBDT0xPVVIgJiBQQVRURVJOIFBBR0UgLS0tLS0tLS0tLS0tXHJcblxyXG4vLyAtLS0tLS0tLS0gU0FWRSAmIExPQUQgUEFHRSAtLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuLy8gLS0tLS0tLS0tIFNJREVCQVIgLyBUQUJTIC0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbi8vIHRvdGFsIHBhZ2VzIGNvdW50OiBpbnRybywgc2l6ZSwgZmVhdHVyZXMsIGNvbG91ci9wYXR0ZXJuLCBzYXZlL2xvYWRcclxuZXhwb3J0IGNvbnN0IFBBR0VfTkFNRVMgPSBbXCJJbnRyb1wiLCBcIlNpemVcIiwgXCJGZWF0dXJlc1wiLCBcIkNvbG91ciAmIFBhdHRlcm5cIiwgXCJTYXZlICYgTG9hZFwiXTtcclxuZXhwb3J0IGNvbnN0IFBBR0VTX0NPVU5UID0gUEFHRV9OQU1FUy5sZW5ndGg7XHJcbi8vIFRPRE86IHJlcGxhY2UgdHh0LlBBR0VTX0NPVU5UIHdpdGggc29tZXRoaW5pZyBiZXR0ZXIuIHRoZW9yZXRpY2FsbHkgdGhlIG51bWJlciBvZiBwYWdlcyBvdmVyYWxsIHNob3VsZG4ndCBiZSBkZWZpbmVkIGJ5IHRleHQgY2xhc3MsIGJ1dCB3aGF0ZXZlciwgaXQgd29ya3NcclxuXHJcbi8vID09PT09PT09PT09PT0gQVJUIFdJTkRPVyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcblxyXG5cclxuLy8gVE9ETyAtIGxvY2FsaXphdGlvbiIsIi8qIEJhc2ljIFVJIGVsZW1lbnQgZ2VuZXJhdGlvbiAqL1xyXG5cclxuaW1wb3J0IHsgaXNCbGFuayB9IGZyb20gXCIuL2xpbHV0aWxzXCI7XHJcblxyXG4vKipcclxuICogQ3JlYXRlIGEgRElWIEhUTUxFbGVtZW50XHJcbiAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH0gbmV3bHkgbWFkZSBIVE1MIDxkaXY+IGVsZW1lbnRcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBDcmVhdGVEaXYoKSB7XHJcbiAgICByZXR1cm4gQ3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbn1cclxuLyoqXHJcbiAqIENyZWF0ZSBhIERJViBIVE1MRWxlbWVudCB3aXRoIHRoZSBnaXZlbiBJRFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gaWQgSUQgdmFsdWVcclxuICogQHJldHVybnMge0hUTUxFbGVtZW50fSBuZXdseSBtYWRlIEhUTUwgPGRpdj4gZWxlbWVudFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIENyZWF0ZURpdldpdGhJRChpZCkge1xyXG4gICAgbGV0IGRpdiA9IENyZWF0ZURpdigpO1xyXG4gICAgZGl2LmlkID0gaWQ7XHJcbiAgICByZXR1cm4gZGl2O1xyXG59XHJcbi8qKlxyXG4gKiBDcmVhdGUgYSBESVYgSFRNTEVsZW1lbnQgd2l0aCB0aGUgZ2l2ZW4gQ1NTIGNsYXNzKGVzKVxyXG4gKiBAcGFyYW0gey4uLnN0cmluZ30gY3NzQ2xhc3NlcyBvbmUgb3IgbW9yZSBDU1MgY2xhc3NlcyB0byBhZGRcclxuICogQHJldHVybnMge0hUTUxFbGVtZW50fSBuZXdseSBtYWRlIEhUTUwgPGRpdj4gZWxlbWVudFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIENyZWF0ZURpdldpdGhDbGFzcyguLi5jc3NDbGFzc2VzKSB7XHJcbiAgICBsZXQgZGl2ID0gQ3JlYXRlRGl2KCk7XHJcbiAgICBkaXYuY2xhc3NMaXN0LmFkZCguLi5jc3NDbGFzc2VzKTtcclxuICAgIHJldHVybiBkaXY7XHJcbn1cclxuLyoqXHJcbiAqIENyZWF0ZSBhIERJViBIVE1MRWxlbWVudCB3aXRoIHRoZSBnaXZlbiBJRCBhbmQgQ1NTIGNsYXNzKGVzKVxyXG4gKiBAcGFyYW0ge3N0cmluZ30gaWQgSUQgdmFsdWVcclxuICogQHBhcmFtIHsuLi5zdHJpbmd9IGNzc0NsYXNzZXMgb25lIG9yIG1vcmUgQ1NTIGNsYXNzZXMgdG8gYWRkXHJcbiAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH0gbmV3bHkgbWFkZSBIVE1MIDxkaXY+IGVsZW1lbnRcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBDcmVhdGVEaXZXaXRoSURBbmRDbGFzc2VzKGlkLCAuLi5jc3NDbGFzc2VzKSB7XHJcbiAgICBsZXQgZGl2ID0gQ3JlYXRlRGl2KCk7XHJcbiAgICBkaXYuaWQgPSBpZDtcclxuICAgIGRpdi5jbGFzc0xpc3QuYWRkKC4uLmNzc0NsYXNzZXMpO1xyXG4gICAgcmV0dXJuIGRpdjtcclxufVxyXG4vKipcclxuICogQ3JlYXRlcyBhIG5ldyBIVE1MRWxlbWVudCBvZiB0aGUgZ2l2ZW4gdHlwZSAobmV3RWxlbWVudCkgXHJcbiAqIGFuZCBhcHBlbmRzIGl0IGFzIGEgY2hpbGQgdG8gdGhlIGdpdmVuIHByZS1leGlzdGluZyBlbGVtZW50IChkb21FbGVtZW50KVxyXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBkb21FbGVtZW50IGV4aXN0aW5nIEhUTUxFbGVtZW50IHdoaWNoIHdpbGwgYmUgbmV3RWxlbWVudCdzIHBhcmVudFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gbmV3RWxlbWVudCBIVE1MRWxlbWVudCB0eXBlIHRvIGNyZWF0ZSBhbmQgYXBwZW5kIGFzIGEgY2hpbGQgdG8gZG9tRWxlbWVudFxyXG4gKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9IHJldHVybnMgdGhlIG5ld2x5IGNyZWF0ZWQgSFRNTEVsZW1lbnRcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBBZGRFbGVtZW50VG8oZG9tRWxlbWVudCwgbmV3RWxlbWVudCkge1xyXG4gICAgbGV0IGVsZW1lbnQgPSBDcmVhdGVFbGVtZW50KG5ld0VsZW1lbnQpO1xyXG4gICAgZG9tRWxlbWVudC5hcHBlbmRDaGlsZChlbGVtZW50KTtcclxuICAgIHJldHVybiBlbGVtZW50O1xyXG59XHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgbmV3IEhUTUxFbGVtZW50IG9mIHRoZSBnaXZlbiB0eXBlIChuZXdFbGVtZW50KSB3aXRoIHRoZSBnaXZlbiBDU1MgY2xhc3MoZXMpXHJcbiAqIGFuZCBhcHBlbmRzIGl0IGFzIGEgY2hpbGQgdG8gdGhlIGdpdmVuIHByZS1leGlzdGluZyBlbGVtZW50IChkb21FbGVtZW50KVxyXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBkb21FbGVtZW50IGV4aXN0aW5nIEhUTUxFbGVtZW50IHdoaWNoIHdpbGwgYmUgbmV3RWxlbWVudCdzIHBhcmVudFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gbmV3RWxlbWVudCBIVE1MRWxlbWVudCB0eXBlIHRvIGNyZWF0ZSBhbmQgYXBwZW5kIGFzIGEgY2hpbGQgdG8gZG9tRWxlbWVudFxyXG4gKiBAcGFyYW0gIHsuLi5zdHJpbmd9IGNzc0NsYXNzZXMgb25lIG9yIG1vcmUgY2xhc3NlcyB0byBhZGQgdG8gdGhlIG5ldyBlbGVtZW50LiBcclxuICogSWYgbm9uZSBpcyBzcGVjaWZpZWQsIHVzZXMgYG5ld0VsZW1lbnRgIGFzIGNsYXNzIG5hbWVcclxuICogQHJldHVybnMge0hUTUxFbGVtZW50fSByZXR1cm5zIHRoZSBuZXdseSBjcmVhdGVkIEhUTUxFbGVtZW50XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gQWRkRWxlbWVudFdpdGhDbGFzc1RvKGRvbUVsZW1lbnQsIG5ld0VsZW1lbnQsIC4uLmNzc0NsYXNzZXMpIHtcclxuICAgIGlmIChjc3NDbGFzc2VzLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgY3NzQ2xhc3Nlcy5wdXNoKG5ld0VsZW1lbnQpO1xyXG4gICAgfVxyXG4gICAgbGV0IGVsZW1lbnQgPSBDcmVhdGVFbGVtZW50V2l0aENsYXNzKG5ld0VsZW1lbnQsIC4uLmNzc0NsYXNzZXMpO1xyXG4gICAgZG9tRWxlbWVudC5hcHBlbmRDaGlsZChlbGVtZW50KTtcclxuICAgIHJldHVybiBlbGVtZW50O1xyXG59XHJcbi8qKlxyXG4gKiBDcmVhdGUgYSBuZXcgSFRNTEVsZW1lbnQgb2YgdGhlIGdpdmVuIHR5cGVcclxuICogQHBhcmFtIHtzdHJpbmd9IG5ld0VsZW1lbnQgdHlwZSBvZiBIVE1MRWxlbWVudFxyXG4gKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9IG5ld2x5IGNyZWF0ZWQgSFRNTEVsZW1lbnRcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBDcmVhdGVFbGVtZW50KG5ld0VsZW1lbnQpIHtcclxuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG5ld0VsZW1lbnQpO1xyXG59XHJcbi8qKlxyXG4gKiBDcmVhdGUgYSBuZXcgSFRNTEVsZW1lbnQgb2YgdGhlIGdpdmVuIHR5cGUsIHdpdGggb25lIG9yIG1vcmUgQ1NTIGNsYXNzZXNcclxuICogQHBhcmFtIHtzdHJpbmd9IG5ld0VsZW1lbnQgdHlwZSBvZiBuZXcgSFRNTEVsZW1lbnRcclxuICogQHBhcmFtICB7Li4uc3RyaW5nfSBjc3NDbGFzc2VzIG9uZSBvciBtb3JlIGNsYXNzZXMgdG8gYWRkIHRvIHRoZSBuZXcgZWxlbWVudFxyXG4gKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9IHJldHVybnMgSFRNTEVsZW1lbnQgd2l0aCB0aGUgZ2l2ZW4gQ1NTIGNsYXNzIG5hbWUocylcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBDcmVhdGVFbGVtZW50V2l0aENsYXNzKG5ld0VsZW1lbnQsIC4uLmNzc0NsYXNzZXMpIHtcclxuICAgIGxldCBlbGVtZW50ID0gQ3JlYXRlRWxlbWVudChuZXdFbGVtZW50KTtcclxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCguLi5jc3NDbGFzc2VzKTtcclxuICAgIHJldHVybiBlbGVtZW50O1xyXG59XHJcblxyXG4vKipcclxuICogQWRkcyB0aGUgZ2l2ZW4gY2xhc3MoZXMpIHRvIHRoZSBnaXZlbiBIVE1MRWxlbWVudCAob25lIGVsZW1lbnQsIG11bHRpcGxlIGNsYXNzZXMpXHJcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGRvbUVsZW1lbnQgSFRNTEVsZW1lbnQgdG8gYWRkIHRoZSBnaXZlbiBjbGFzc2VzIHRvXHJcbiAqIEBwYXJhbSAgey4uLnN0cmluZ30gY3NzQ2xhc3NlcyBvbmUgb3IgbW9yZSBjbGFzc2VzIHRvIGFkZCB0byB0aGUgZG9tRWxlbWVudFxyXG4gKiBAcmV0dXJucyBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBBZGRDbGFzc2VzVG9ET00oZG9tRWxlbWVudCwgLi4uY3NzQ2xhc3Nlcykge1xyXG4gICAgaWYgKGRvbUVsZW1lbnQuY2xhc3NMaXN0Lmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgZG9tRWxlbWVudC5jbGFzc0xpc3QuYWRkKC4uLmNzc0NsYXNzZXMpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY3NzQ2xhc3Nlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmICghZG9tRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoY3NzQ2xhc3Nlc1tpXSkpIHtcclxuICAgICAgICAgICAgZG9tRWxlbWVudC5jbGFzc0xpc3QuYWRkKGNzc0NsYXNzZXNbaV0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4vKipcclxuICogQWRkcyB0aGUgZ2l2ZW4gY2xhc3MgdG8gdGhlIGdpdmVuIEhUTUxFbGVtZW50KHMpIChvbmUgY2xhc3MsIG11bHRpcGxlIGVsZW1lbnRzKVxyXG4gKiBAcGFyYW0ge3N0cmluZ30gY3NzQ2xhc3MgQ2xhc3MgdG8gYWRkXHJcbiAqIEBwYXJhbSAgey4uLkVsZW1lbnR9IGRvbUVsZW1lbnRzIEhUTUxFbGVtZW50KHMpIHRvIGFkZCB0aGUgY2xhc3MgdG9cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBBZGRDbGFzc1RvRE9Ncyhjc3NDbGFzcywgLi4uZG9tRWxlbWVudHMpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZG9tRWxlbWVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAoIWRvbUVsZW1lbnRzW2ldLmNsYXNzTGlzdC5jb250YWlucyhjc3NDbGFzcykpIHtcclxuICAgICAgICAgICAgZG9tRWxlbWVudHNbaV0uY2xhc3NMaXN0LmFkZChjc3NDbGFzcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogU2V0cyB0aGUgZ2l2ZW4gYXR0cmlidXRlcyBvbiB0aGUgZ2l2ZW4gSFRNTEVsZW1lbnQgKGF0dFR5cGVzIGFuZCBhdHRWYWx1ZXMgbGVuZ3RocyBtdXN0IG1hdGNoKVxyXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IEhUTUxFbGVtZW50IHRvIGFkZCBhdHRyaWJ1dGVzIHRvXHJcbiAqIEBwYXJhbSB7c3RyaW5nW119IGF0dFR5cGVzIEFycmF5IG9mIGF0dHJpYnV0ZSB0eXBlcyAocXVhbGlmaWVkTmFtZXMpXHJcbiAqIEBwYXJhbSB7c3RyaW5nW119IGF0dFZhbHVlcyBBcnJheSBvZiB2YWx1ZXMgb2YgYXR0cmlidXRlc1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIEFkZEVsZW1lbnRBdHRyaWJ1dGVzKGVsZW1lbnQsIGF0dFR5cGVzLCBhdHRWYWx1ZXMpIHtcclxuICAgIGlmIChhdHRUeXBlcy5sZW5ndGggIT0gYXR0VmFsdWVzLmxlbmd0aCkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFUlJPUjogYXR0cmlidXRlIHR5cGVzIGFuZCB2YWx1ZXMgYXJyYXkgbGVuZ3RocyBtdXN0IG1hdGNoXCIpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXR0VHlwZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBBZGRFbGVtZW50QXR0cmlidXRlKGVsZW1lbnQsIGF0dFR5cGVzW2ldLCBhdHRWYWx1ZXNbaV0pO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogU2V0cyB0aGUgZ2l2ZW4gYXR0cmlidXRlIG9uIHRoZSBnaXZlbiBIVE1MRWxlbWVudFxyXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IEhUTUxFbGVtZW50IHRvIGFkZCBhdHRyaWJ1dGUgdG9cclxuICogQHBhcmFtIHtzdHJpbmd9IGF0dFR5cGVzIFR5cGUgKHF1YWxpZmllZE5hbWUpIG9mIGF0dHJpYnV0ZVxyXG4gKiBAcGFyYW0ge3N0cmluZ30gYXR0VmFsdWVzIFZhbHVlIG9mIGF0dHJpYnV0dWVcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBBZGRFbGVtZW50QXR0cmlidXRlKGVsZW1lbnQsIGF0dFR5cGUsIGF0dFZhbHVlKSB7XHJcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRUeXBlLCBhdHRWYWx1ZSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgbmV3IGA8aW1nPmAgZWxlbWVudCwgYW5kIGFzc2lnbnMgdGhlIGdpdmVuIHNyYyBhdHRyaWJ1dGUgKGFuZCBvcHRpb25hbCBhbHQgdGV4dCB2YWx1ZSlcclxuICogQHBhcmFtIHtzdHJpbmd9IGltZ1NyYyBWYWx1ZSB0byBhZGQgdG8gdGhlIFwic3JjXCIgYXR0cmlidXRlIHRvIHRoZSBuZXcgaW1nXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBhbHQgQWx0IHRleHQgdG8gcHJvdmlkZSB0byB0aGUgbmV3IGltZyAob3B0aW9uYWwpXHJcbiAqIEByZXR1cm5zIFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIENyZWF0ZUltYWdlKGltZ1NyYywgYWx0KSB7XHJcbiAgICBsZXQgaW1nID0gQ3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBpbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBpbWdTcmMpO1xyXG4gICAgaWYgKCFpc0JsYW5rKGFsdCkpIHtcclxuICAgICAgICBpbWcuc2V0QXR0cmlidXRlKCdhbHQnLCBhbHQpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGltZztcclxufVxyXG5cclxuLyoqXHJcbiAqIE1ha2UgdGhlIGdpdmVuIEhUTUxFbGVtZW50IGFwcGVhciBpbiB0aGUgdGFiIGluZGV4IGZvciB0aGUgcGFnZVxyXG4gKiBOb3RlOiBnaXZpbmcgdGhlIGB0YWJJbmRleGAgdmFsdWUgYC0xYCB3aWxsIG1ha2UgYW4gZWxlbWVudCB1bnRhYmJhYmxlLCBldmVuIGlmIGl0J3MgdGFiYmFibGUgYnkgZGVmYXVsdC5cclxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCBIVE1MRWxlbWVudCB0byBhZGQgdG8gdGhlIHRhYiBpbmRleCBcclxuICogQHBhcmFtIHtudW1iZXJ9IFt0YWJJbmRleD0wXSBPcHRpb25hbCB2YWx1ZSB0byBzcGVjaWZ5IHRhYiBpbmRleC4gYC0xYCA9IG5vdCB0YWJiYWJsZVxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtwcmVzZXJ2ZT10cnVlXSBPcHRpb25hbGx5IGFkZCBhIGBwcmVzZXJ2ZWRUYWJJbmRleGAgYXR0cmlidXRlIHdpdGggdGhlIGdpdmVuIGB0YWJJbmRleGAgdmFsdWVcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBNYWtlVGFiYmFibGUoZWxlbWVudCwgdGFiSW5kZXggPSAwLCBwcmVzZXJ2ZSA9IHRydWUpIHtcclxuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCd0YWJJbmRleCcsIHRhYkluZGV4KTtcclxuICAgIGlmIChwcmVzZXJ2ZSkge1xyXG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdwcmVzZXJ2ZWRUYWJJbmRleCcsIHRhYkluZGV4KTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIE1ha2VzIHRoZSBnaXZlbiBIVE1MRWxlbWVudCBhcHBlYXIgaW4gdGhlIHRhYiBpbmRleCBmb3IgdGhlIHBhZ2UsIFxyXG4gKiBhbmQgc2VuZHMgYW55IHJlY2VpdmVkIGtleWJvYXJkIGVudGVyL3NwYWNlYmFyIGlucHV0cyB0byBgaW5wdXRUb0VsZW1lbnRgLlxyXG4gKiBFZywgaWYgeW91IGFkZCBhIDxsYWJlbD4gdG8gdGhlIHRhYiBpbmRleCwgYnV0IHdhbnQgdG8gc2VuZCBpdHMgaW5wdXQgdG8gYSBkaWZmZXJlbnQgPGlucHV0PiB0YWcuXHJcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHRhYkVsZW1lbnQgSFRNTEVsZW1lbnQgdG8gYWRkIHRvIHRoZSB0YWIgaW5kZXhcclxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gaW5wdXRUb0VsZW1lbnQgSFRNTEVsZW1lbnQgdGhhdCByZWNlaXZlcyBFbnRlci9TcGFjZWJhciBrZXlib2FyZCBpbnB1dCBmcm9tIGB0YWJFbGVtZW50YCBhcyBhIGBjbGljaygpYFxyXG4gKiBAcGFyYW0ge251bWJlcn0gdGFiSW5kZXggRGVmYXVsdCAwLCBvcHRpb25hbCB2YWx1ZSB0byBzcGVjaWZ5IHRhYiBpbmRleC4gYC0xYCA9IG5vdCB0YWJiYWJsZSAoYW5kIG5vIGlucHV0IGV2ZW50cyBhcmUgYWRkZWQpXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gTWFrZVRhYmJhYmxlV2l0aElucHV0VG8odGFiRWxlbWVudCwgaW5wdXRUb0VsZW1lbnQsIHRhYkluZGV4ID0gMCkge1xyXG4gICAgTWFrZVRhYmJhYmxlKHRhYkVsZW1lbnQsIHRhYkluZGV4KTtcclxuICAgIGlmICh0YWJJbmRleCAhPSAtMSkge1xyXG4gICAgICAgIFBhc3NLZXlib2FyZFNlbGVjdGlvbih0YWJFbGVtZW50LCBpbnB1dFRvRWxlbWVudCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBZGRzIGEgYGtleWRvd25gIGV2ZW50IGxpc3RlbmVyIGZvciBFbnRlci9TcGFjZWJhciB0byBgZnJvbUVsZW1lbnRgLCB3aGljaCBzZW5kcyBhIGBjbGljaygpYCBldmVudCB0byB0aGUgYHRvRWxlbWVudGBcclxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZnJvbUVsZW1lbnQgRWxlbWVudCB0aGF0IHJlY2VpdmVzIHRoZSB1c2VyIGtleWJvYXJkIGlucHV0XHJcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHRvRWxlbWVudCBFbGVtZW50IHRoYXQgdGhlIGBjbGljaygpYCBldmVudCBnZXRzIHNlbnQgdG9cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBQYXNzS2V5Ym9hcmRTZWxlY3Rpb24oZnJvbUVsZW1lbnQsIHRvRWxlbWVudCkge1xyXG4gICAgZnJvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGUgPT4ge1xyXG4gICAgICAgIC8vIG11Y2ggb2xkZXIgZGV2aWNlcyBjaGVjayBmb3IgXCJTcGFjZWJhclwiLCBtaWdodCBhcyB3ZWxsIHN1cHBvcnQgaXQgXHJcbiAgICAgICAgaWYgKGUua2V5ID09PSAnICcgfHwgZS5rZXkgPT09ICdTcGFjZWJhcicgfHwgZS5rZXkgPT09ICdFbnRlcicpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAvLyBkb24ndCBzY3JvbGwgdGhlIHBhZ2UgZG93biBvciBhbnl0aGluZ1xyXG4gICAgICAgICAgICB0b0VsZW1lbnQuY2xpY2soKTsgLy8gcGFzcyBjbGljayB0byBuZXcgZWxlbWVudFxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG4vLyBUT0RPOiBhZGQgZW50ZXIgaW5wdXQgdG8gZWxlbWVudHMgdGhhdCBvbmx5IGZ1bmN0aW9uIG9uIHNwYWNlYmFyIChlZywgcm4gdGhlIFwiU3Vic2NyaWJlXCIgYnRuIHdvcmtzIGZvciBTcGFjZWJhciBidXQgbm90IEVudGVyKVxyXG4vLyBUT0RPOiBhZGQga2V5Ym9hcmQgaW5wdXQgdG8gc29jaWFsIG1lZGlhIGJ1dHRvbnMgKHRoZXkgZG9uJ3QgcmVzcG9uZCBpbiBDU1MgdG8ga2V5Ym9hcmQgYXQgYWxsKSIsIi8qIFVJIGVsZW1lbnRzIGZvciB0aGUgRGF0YSB3aW5kb3cgLSBjYW52YXMgdmlldywgaW5mbywgZXRjICovXHJcblxyXG5pbXBvcnQgeyBhcnRXaW5kb3cgfSBmcm9tIFwiLi91aU1haW5cIjtcclxuaW1wb3J0ICogYXMgdWkgZnJvbSAnLi91aSc7XHJcblxyXG5sZXQgY2FudmFzQ29udGFpbmVyO1xyXG5sZXQgaW5mb0NvbnRhaW5lcjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBDcmVhdGVBcnRXaW5kb3coKSB7XHJcbiAgICAvLyBjcmVhdGUgY29udGFpbmVycyBcclxuICAgIGNhbnZhc0NvbnRhaW5lciA9IHVpLkNyZWF0ZURpdldpdGhDbGFzcygnYXJ0V2luZG93JywnY2FudmFzJyk7XHJcbiAgICBpbmZvQ29udGFpbmVyID0gdWkuQ3JlYXRlRGl2V2l0aENsYXNzKCdpbmZvJyk7XHJcbiAgICAvLyBhZGQgdG8gYXJ0V2luZG93XHJcbiAgICBhcnRXaW5kb3cuYXBwZW5kQ2hpbGQoY2FudmFzQ29udGFpbmVyKTtcclxuICAgIGFydFdpbmRvdy5hcHBlbmRDaGlsZChpbmZvQ29udGFpbmVyKTtcclxufSIsIi8qIFVJIGVsZW1lbnRzIGZvciB0aGUgRGF0YSB3aW5kb3cgLSB0YWJzLCBzZWxlY3Rpb24gYnV0dG9ucywgZXRjICovXHJcblxyXG5pbXBvcnQgKiBhcyB1aSBmcm9tIFwiLi91aVwiO1xyXG5pbXBvcnQgKiBhcyB0eHQgZnJvbSAnLi90ZXh0JztcclxuaW1wb3J0IHsgUEFHRV9OQU1FUyB9IGZyb20gXCIuL3RleHRcIjtcclxuaW1wb3J0IHsgUEdfSU5UUk8sIFBHX1NJWkUsIFBHX0ZFQVRVUkVTLCBQR19QQVRURVJOLCBQR19TQVZFLCBQYWdlT3BlbmVkLCBQYWdlQ2xvc2VkIH0gZnJvbSBcIi4vY29udGVudERhdGFcIjtcclxuaW1wb3J0IHsgZGF0YVdpbmRvdyB9IGZyb20gXCIuL3VpTWFpblwiO1xyXG5pbXBvcnQgeyBzdHlsZSwgQWRkQWxwaGFUb0hleCwgRGVzZWxlY3RFbGVtZW50LCBTZXRFbGVtZW50RW5hYmxlZCB9IGZyb20gXCIuL2xpbHV0aWxzXCI7XHJcblxyXG5pbXBvcnQgaWNvbkFydCBmcm9tICcuLi9hc3NldHMvc3ZnL2ljb25zLXJlZC9pY29uLWFydC5zdmcnO1xyXG5pbXBvcnQgaWNvbkZlYXR1cmVzIGZyb20gJy4uL2Fzc2V0cy9zdmcvaWNvbnMtcmVkL2ljb24tZmVhdHVyZXMuc3ZnJztcclxuaW1wb3J0IGljb25Ib21lIGZyb20gJy4uL2Fzc2V0cy9zdmcvaWNvbnMtcmVkL2ljb24taG9tZS5zdmcnO1xyXG5pbXBvcnQgaWNvblNhdmUgZnJvbSAnLi4vYXNzZXRzL3N2Zy9pY29ucy1yZWQvaWNvbi1zYXZlLnN2Zyc7XHJcbmltcG9ydCBpY29uU2NhbGUgZnJvbSAnLi4vYXNzZXRzL3N2Zy9pY29ucy1yZWQvaWNvbi1zY2FsZS5zdmcnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxUYWIgPSAwO1xyXG5jb25zdCBiZ0ZhZGVBbHBoYSA9IDAuODI7XHJcblxyXG5jb25zdCB1c2VTZXBhcmF0b3JzID0gZmFsc2U7XHJcblxyXG5jb25zdCBpY29uQXJyYXkgPSBbaWNvbkhvbWUsIGljb25TY2FsZSwgaWNvbkZlYXR1cmVzLCBpY29uQXJ0LCBpY29uU2F2ZV07XHJcbmNvbnN0IHRhYkNvbG9ycyA9IFsncmVkJywgJ29yYW5nZScsICdibHVlJywgJ2dyZWVuJywgJ3B1cnBsZSddO1xyXG5jb25zdCBwYWdlSURzID0gW1BHX0lOVFJPLCBQR19TSVpFLCBQR19GRUFUVVJFUywgUEdfUEFUVEVSTiwgUEdfU0FWRV07XHJcblxyXG5sZXQgY3VycmVudFBhZ2UgPSAtMTtcclxuXHJcbmxldCB0YWJzO1xyXG5sZXQgcGFnZXMgPSBbXTtcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGUgdGhlIGRhdGEgd2luZG93ICh0YWJzLCBvcHRpb25zLCBpbmZvKVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIENyZWF0ZURhdGFXaW5kb3coKSB7XHJcbiAgICAvLyBjcmVhdGUgVUkgZWxlbWVudHNcclxuICAgIENyZWF0ZVRhYnMoKTtcclxuICAgIENyZWF0ZVBhZ2VzKCk7XHJcbiAgICBDcmVhdGVGYWRlQkcoKTtcclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiBTZWxlY3QgdGhlIGN1cnJlbnQgdGFiIGFuZCBzd2l0Y2ggdG8gaXRzIGNvcnJlc3BvbmRpbmcgcGFnZVxyXG4gKiBAcGFyYW0ge251bWJlcn0gdGFiTnVtIG51bWJlciBvZiB0YWIvcGFnZSB0byBzZWxlY3RcclxuICogQHBhcmFtIHtib29sZWFufSBzbmFwIHNraXAgYW5pbWF0aW9uIC8gdGltaW5nPyBkZWZhdWx0IGZhbHNlIFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIFNlbGVjdFRhYih0YWJOdW0sIHNuYXAgPSBmYWxzZSkge1xyXG4gICAgaWYgKHRhYk51bSA9PSBjdXJyZW50UGFnZSAmJiAhc25hcCkgeyByZXR1cm47IH1cclxuICAgIGxldCBsYXN0UGFnZSA9IGN1cnJlbnRQYWdlO1xyXG4gICAgY3VycmVudFBhZ2UgPSB0YWJOdW07XHJcbiAgICBjb25zb2xlLmxvZyhgQ2xvc2luZyAke1BBR0VfTkFNRVNbbGFzdFBhZ2VdfSBwYWdlLCBvcGVuaW5nICR7UEFHRV9OQU1FU1tjdXJyZW50UGFnZV19IHBhZ2VgKVxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0eHQuUEFHRVNfQ09VTlQ7IGkrKykge1xyXG4gICAgICAgIGxldCBjdXJyZW50VGFiID0gaSA9PSB0YWJOdW07XHJcbiAgICAgICAgbGV0IHRhYklkID0gJ3RhYicgKyBpO1xyXG4gICAgICAgIGxldCB0YWJJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGlucHV0W2lkPSR7dGFiSWR9XWApO1xyXG4gICAgICAgIGxldCBwYWdlID0gcGFnZXNbaV07XHJcblxyXG4gICAgICAgIGlmIChjdXJyZW50VGFiKSB7XHJcbiAgICAgICAgICAgIC8vIGxvZ2ljIGN1cnJlbnQgdGFiL3BhZ2UgYmVpbmcgZGlzcGxheWVkLCBub3Qgb3RoZXJzIFxyXG4gICAgICAgICAgICBsZXQgdGFiQ29sb3IgPSB0YWJDb2xvcnNbaV07XHJcbiAgICAgICAgICAgIGxldCBjc3NDb2xvciA9IEdldEJHQ29sb3IodGFiQ29sb3IpO1xyXG4gICAgICAgICAgICBjc3NDb2xvciA9IEFkZEFscGhhVG9IZXgoY3NzQ29sb3IsIGJnRmFkZUFscGhhKTtcclxuICAgICAgICAgICAgZGF0YVdpbmRvdy5zdHlsZS5zZXRQcm9wZXJ0eSgnYmFja2dyb3VuZC1jb2xvcicsIGNzc0NvbG9yKTtcclxuICAgICAgICAgICAgLy8gZW5hYmxlIHBhZ2UgZWxlbWVudHMsIGZhZGUgaW5cclxuICAgICAgICAgICAgU2V0RWxlbWVudEVuYWJsZWQocGFnZSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHBhZ2Uuc3R5bGUuc2V0UHJvcGVydHkoJ3RyYW5zaXRpb24nLCAnb3BhY2l0eSAwLjVzIGVhc2Utb3V0Jyk7XHJcbiAgICAgICAgICAgIHBhZ2Uuc3R5bGUub3BhY2l0eSA9ICcxJztcclxuICAgICAgICAgICAgUGFnZU9wZW5lZChwYWdlLCBzbmFwKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBub24tYWN0aXZlIHRhYiwgZGlzYWJsZSBwYWdlIGVsZW1lbnRzLCBmYWRlIG91dCBcclxuICAgICAgICAgICAgaWYgKGxhc3RQYWdlID09IGkpIHtcclxuICAgICAgICAgICAgICAgIC8vIHJlY2VudGx5IGNsb3NlZCBwYWdlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgU2V0RWxlbWVudEVuYWJsZWQocGFnZSwgZmFsc2UpO1xyXG4gICAgICAgICAgICBwYWdlLnN0eWxlLnNldFByb3BlcnR5KCd0cmFuc2l0aW9uJywgJ29wYWNpdHkgMC4xcyBlYXNlLW91dCcpO1xyXG4gICAgICAgICAgICBwYWdlLnN0eWxlLm9wYWNpdHkgPSAnMCc7XHJcbiAgICAgICAgICAgIERlc2VsZWN0RWxlbWVudChwYWdlKTtcclxuICAgICAgICAgICAgUGFnZUNsb3NlZChwYWdlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChzbmFwKSB7XHJcbiAgICAgICAgICAgIC8vIHNuYXAgdG8gaW5pdGlhbCBzdGF0ZVxyXG4gICAgICAgICAgICBpZiAoaSA9PSB0YWJOdW0pIHtcclxuICAgICAgICAgICAgICAgIHRhYklucHV0LmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGFiSW5wdXQuY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBHZXRCR0NvbG9yKGNvbG9yKSB7XHJcbiAgICBsZXQgY3NzVmFyID0gJy0tY29sb3ItZGF0YS1iZy1ibGVuZC0nICsgY29sb3I7XHJcbiAgICBsZXQgY3NzQ29sb3IgPSBzdHlsZS52YWx1ZS5nZXRQcm9wZXJ0eVZhbHVlKGNzc1Zhcik7XHJcbiAgICBpZiAoIWNzc0NvbG9yKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFUlJPUjogY291bGRuJ3QgZ2V0IENTUyB2YXJpYWJsZSBmb3IgQkcgY29sb3I6ICR7Y29sb3J9LCBwYXJzZWQgdG8gQ1NTIHZhciAke2Nzc1Zhcn1gKTtcclxuICAgIH1cclxuICAgIHJldHVybiBjc3NDb2xvcjtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIENyZWF0ZVRhYnMoKSB7XHJcbiAgICB0YWJzID0gdWkuQ3JlYXRlRGl2V2l0aENsYXNzKCd0YWJzJyk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHR4dC5QQUdFU19DT1VOVDsgaSsrKSB7XHJcbiAgICAgICAgLy8gY3JlYXRlIGluZGl2aWR1YWwgdGFicywgYmFzZWQgb2ZmIFRBQlMgYXJyYXkgaW4gdGV4dC5qc1xyXG4gICAgICAgIGxldCB0YWIgPSAndGFiJyArIGk7XHJcbiAgICAgICAgbGV0IHRhYklucHV0ID0gdWkuQ3JlYXRlRWxlbWVudCgnaW5wdXQnKTsgLy8gaW5wdXQgZWxlbWVudFxyXG4gICAgICAgIHVpLkFkZEVsZW1lbnRBdHRyaWJ1dGVzKHRhYklucHV0LFxyXG4gICAgICAgICAgICBbJ3R5cGUnLCAnaWQnLCAnbmFtZSddLFxyXG4gICAgICAgICAgICBbJ3JhZGlvJywgdGFiLCAndGFiJ10pO1xyXG4gICAgICAgIC8vIGNyZWF0ZSBsYWJlbCBcclxuICAgICAgICBsZXQgdGFiTGFiZWwgPSB1aS5DcmVhdGVFbGVtZW50V2l0aENsYXNzKCdsYWJlbCcsIHRhYkNvbG9yc1tpXSk7IC8vIGxhYmVsIGVsZW1lbnRcclxuICAgICAgICAvLyBjaGVjayBmb3Igc2VwYXJhdG9yc1xyXG4gICAgICAgIGlmICh1c2VTZXBhcmF0b3JzICYmIGkgIT0gdHh0LlBBR0VTX0NPVU5UIC0gMSkge1xyXG4gICAgICAgICAgICB1aS5BZGRDbGFzc1RvRE9Ncygnc2VwYXJhdG9yJywgdGFiTGFiZWwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB1aS5BZGRFbGVtZW50QXR0cmlidXRlKHRhYkxhYmVsLCAnZm9yJywgdGFiKTtcclxuICAgICAgICB1aS5NYWtlVGFiYmFibGVXaXRoSW5wdXRUbyh0YWJMYWJlbCwgdGFiSW5wdXQpO1xyXG4gICAgICAgIC8vIHRhYiB0ZXh0IGFuZCBpY29uXHJcbiAgICAgICAgbGV0IHRhYlRleHQgPSB1aS5DcmVhdGVEaXZXaXRoQ2xhc3MoJ3RleHQnLCB0YWJDb2xvcnNbaV0pO1xyXG4gICAgICAgIHRhYlRleHQuaW5uZXJUZXh0ID0gdHh0LlBBR0VfTkFNRVNbaV07XHJcbiAgICAgICAgbGV0IHRhYkljb24gPSB1aS5DcmVhdGVJbWFnZShpY29uQXJyYXlbaV0pO1xyXG4gICAgICAgIHVpLkFkZENsYXNzZXNUb0RPTSh0YWJJY29uLCAnaWNvbicsIHRhYkNvbG9yc1tpXSk7XHJcbiAgICAgICAgdGFiTGFiZWwuYXBwZW5kQ2hpbGQodGFiVGV4dCk7XHJcbiAgICAgICAgdGFiTGFiZWwuYXBwZW5kQ2hpbGQodGFiSWNvbik7XHJcbiAgICAgICAgLy8gYWRkIHRhYiBlbGVtZW50cyB0byB0YWJzIGxpc3RcclxuICAgICAgICB0YWJzLmFwcGVuZENoaWxkKHRhYklucHV0KTtcclxuICAgICAgICB0YWJzLmFwcGVuZENoaWxkKHRhYkxhYmVsKTtcclxuICAgIH1cclxuICAgIC8vIHRhYnMgbWFya2VyXHJcbiAgICBsZXQgbWFya2VyID0gdWkuQ3JlYXRlRGl2V2l0aENsYXNzKCd0YWJNYXJrZXInKTtcclxuICAgIG1hcmtlci5hcHBlbmRDaGlsZCh1aS5DcmVhdGVEaXZXaXRoSUQoJ3RtVG9wJykpO1xyXG4gICAgbWFya2VyLmFwcGVuZENoaWxkKHVpLkNyZWF0ZURpdldpdGhJRCgndG1Cb3R0b20nKSk7XHJcbiAgICB0YWJzLmFwcGVuZENoaWxkKG1hcmtlcik7XHJcbiAgICAvLyBhZGQgdG8gd2luZG93XHJcbiAgICBkYXRhV2luZG93LmFwcGVuZENoaWxkKHRhYnMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBDcmVhdGVQYWdlcygpIHtcclxuICAgIC8vIGNyZWF0ZSBwYWdlcyBjb250ZW50IGNvbnRhaW5lclxyXG4gICAgbGV0IGNvbnRlbnQgPSB1aS5DcmVhdGVEaXZXaXRoQ2xhc3MoJ2NvbnRlbnQnKTtcclxuICAgIGRhdGFXaW5kb3cuYXBwZW5kQ2hpbGQoY29udGVudCk7XHJcbiAgICAvLyBjcmVhdGUgcGFnZXNcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdHh0LlBBR0VTX0NPVU5UOyBpKyspIHtcclxuICAgICAgICBsZXQgcGFnZSA9IHVpLkNyZWF0ZURpdldpdGhDbGFzcygncGFnZScsIHBhZ2VJRHNbaV0sIHRhYkNvbG9yc1tpXSk7XHJcbiAgICAgICAgLy8gcGFnZS5pZCA9IGBwYWdlJHtpfWA7IC8vIHBhZ2UgSUQgaXMgbnVtZXJpY1xyXG4gICAgICAgIHBhZ2UuaWQgPSBwYWdlSURzW2ldOyAvLyBwYWdlIElEIGlzIG5hbWVkXHJcbiAgICAgICAgdWkuQWRkRWxlbWVudEF0dHJpYnV0ZShwYWdlLCAnei1pbmRleCcsIGkgKyAxKTtcclxuICAgICAgICBwYWdlcy5wdXNoKHBhZ2UpO1xyXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocGFnZSk7XHJcblxyXG4gICAgICAgIC8vIHBhZ2UuaW5uZXJIVE1MID0gYDxwPlBhZ2UgVGVzdCwgUEcke2l9PC9wPmA7IC8vIHRlc3QgdGV4dFxyXG5cclxuICAgICAgICAvLyBhZGQgdW5pcXVlIHBhZ2UgY29udGVudCBcclxuICAgICAgICAvLyBzZXBhcmF0ZSBmdW5jdGlvbnMgZm9yIGVhY2ggc28gSSBkb24ndCBoYXZlIHRvIHdvcnJ5IGFib3V0IHZhcmlhYmxlIG5hbWUgY29uZmxpY3RzIFxyXG4gICAgICAgIHN3aXRjaCAocGFnZUlEc1tpXSkge1xyXG4gICAgICAgICAgICBjYXNlIFBHX0lOVFJPOlxyXG4gICAgICAgICAgICAgICAgQ3JlYXRlUGFnZUludHJvKHBhZ2UpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgUEdfU0laRTpcclxuICAgICAgICAgICAgICAgIENyZWF0ZVBhZ2VTaXplKHBhZ2UpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgUEdfRkVBVFVSRVM6XHJcbiAgICAgICAgICAgICAgICBDcmVhdGVQYWdlRmVhdHVyZXMocGFnZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBQR19QQVRURVJOOlxyXG4gICAgICAgICAgICAgICAgQ3JlYXRlUGFnZVBhdHRlcm4ocGFnZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBQR19TQVZFOlxyXG4gICAgICAgICAgICAgICAgQ3JlYXRlUGFnZVNhdmUocGFnZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEVSUk9SOiBpbnZhbGlkIHBhZ2UgSUQsIGNhbid0IGNyZWF0ZSBwYWdlIGNvbnRlbnQuIFBhZ2UgSUQ6ICR7cGFnZUlEc1tpXX0sIGluZGV4OiAke2l9YCk7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIENyZWF0ZVBhZ2VJbnRybyhwYWdlKSB7XHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBDUkVBVEUgSU5UUk8gUEFHRSAtLS0tLVxyXG5cclxuICAgIGxldCBoZWFkZXIgPSB1aS5DcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgaGVhZGVyLmlubmVyVGV4dCA9IFwiSGVsbG8gV29ybGRcIjtcclxuICAgIHBhZ2UuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxuICAgIFxyXG59XHJcbmZ1bmN0aW9uIENyZWF0ZVBhZ2VTaXplKHBhZ2UpIHtcclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIENSRUFURSBTSVpFIFBBR0UgLS0tLS0gXHJcbn1cclxuZnVuY3Rpb24gQ3JlYXRlUGFnZUZlYXR1cmVzKHBhZ2UpIHtcclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIENSRUFURSBGRUFUVVJFUyBQQUdFIC0tLS0tIFxyXG59XHJcbmZ1bmN0aW9uIENyZWF0ZVBhZ2VQYXR0ZXJuKHBhZ2UpIHtcclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIENSRUFURSBDT0xPVVIgJiBQQVRURVJOIFBBR0UgLS0tLS0gXHJcbn1cclxuZnVuY3Rpb24gQ3JlYXRlUGFnZVNhdmUocGFnZSkge1xyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gQ1JFQVRFIFNBVkUgJiBMT0FEIFBBR0UgLS0tLS0gXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZWZlcmVuY2UgZnVuY3Rpb24uIFBhZ2VOYW1lIG11c3QgYmUgb25lIG9mIHRoZSB2YWx1ZXMgZm91bmQgaW4gYHBhZ2VOYW1lc2AuIEdldHMgdGhhdCBwYWdlJ3MgaW5kZXhcclxuICogQHBhcmFtIHtzdHJpbmd9IHBhZ2VJRCBJRCBvZiB0aGUgcGFnZSwgbXVzdCBjb3JyZXNwb25kIHRvIHNvbWV0aGluZyBpbiBgcGFnZUlEc2BcclxuICogQHJldHVybnMge251bWJlcn0gYXJyYXkgaW5kZXggb2YgYHBhZ2VOYW1lYCBpbiBgcGFnZU5hbWVzYFxyXG4gKi9cclxuZnVuY3Rpb24gR2V0UGFnZU51bWJlckJ5SUQocGFnZUlEKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhZ2VJRHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAocGFnZUlEc1tpXSA9PSBwYWdlSUQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhyb3cgbmV3IEVycm9yKGBDb3VsZCBub3QgZmluZCBwYWdlIG51bWJlciBmb3IgcGFnZSBuYW1lICR7cGFnZUlEfSwgY2hlY2sgc3BlbGxpbmcuIFBhZ2VOYW1lcyBhcnJheTogJHtwYWdlSURzfWApO1xyXG59XHJcblxyXG4vKiogY3JlYXRlcyB0aGUgZ3JhZGllbnQgZmFkZSBlbGVtZW50IHRoYXQgc2l0cyBhdG9wIHRoZSBzb2xpZCBjb2xvdXIgYmFja2dyb3VuZCAqL1xyXG5mdW5jdGlvbiBDcmVhdGVGYWRlQkcoKSB7XHJcbiAgICBsZXQgZmFkZUJHID0gdWkuQ3JlYXRlRGl2V2l0aENsYXNzKCdmYWRlQkcnKTtcclxuICAgIGRhdGFXaW5kb3cuYXBwZW5kQ2hpbGQoZmFkZUJHKTtcclxufSIsIi8qIEhlYWRlciBhbmQgRm9vdGVyIFVJIGdlbmVyYXRpb24gKi9cclxuXHJcbmltcG9ydCBzdmdHaXRodWIgZnJvbSAnLi4vYXNzZXRzL3N2Zy9naXRodWIuc3ZnJztcclxuaW1wb3J0IHN2Z0luc3RhZ3JhbSBmcm9tICcuLi9hc3NldHMvc3ZnL2luc3RhZ3JhbS5zdmcnO1xyXG5pbXBvcnQgc3ZnQmx1ZXNreSBmcm9tICcuLi9hc3NldHMvc3ZnL2JsdWVza3kuc3ZnJztcclxuXHJcbmltcG9ydCAqIGFzIHVpIGZyb20gJy4vdWknO1xyXG5pbXBvcnQgKiBhcyB0eHQgZnJvbSAnLi90ZXh0JztcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIHRoZSBIZWFkZXIgKHRvcEJhcikgYW5kIEZvb3RlciAoYnRtQmFyKSBmb3IgdGhlIHBhZ2VcclxuICogQHBhcmFtIHtFbGVtZW50fSB0b3BCYXIgdGhlIHByZS1jcmVhdGVkIGNvbnRhaW5lciBlbGVtZW50IGZvciB0aGUgdG9wQmFyIFxyXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGJ0bUJhciB0aGUgcHJlLWNyZWF0ZWQgY29udGFpbmVyIGVsZW1lbnQgZm9yIHRoZSBidG1CYXJcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBDcmVhdGVIZWFkZXJGb290ZXIodG9wQmFyLCBidG1CYXIpIHtcclxuICAgIENyZWF0ZVRvcEJhcih0b3BCYXIpO1xyXG4gICAgQ3JlYXRlQm90dG9tQmFyKGJ0bUJhcik7XHJcbn1cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBIZWFkZXIgKGFrYSBUb3BCYXIpIC0tLSBcclxuXHJcbmZ1bmN0aW9uIENyZWF0ZVRvcEJhcih0b3BCYXIpIHtcclxuICAgIGxldCB0aXRsZUNvbnRhaW5lciA9IHVpLkNyZWF0ZURpdldpdGhDbGFzcygndGl0bGUnLCAncHJldmVudFNlbGVjdCcpO1xyXG4gICAgLy8gbGV0IHRpdGxlQ29udGFpbmVyID0gdWkuQ3JlYXRlRGl2V2l0aENsYXNzKCd0aXRsZScsICdhbGxvd1NlbGVjdERlZmF1bHRDdXJzb3InKTtcclxuICAgIGxldCBzdWJ0aXRsZSA9IHVpLkFkZEVsZW1lbnRUbyh0aXRsZUNvbnRhaW5lciwgJ2gzJyk7XHJcbiAgICBsZXQgdGl0bGUgPSB1aS5BZGRFbGVtZW50VG8odGl0bGVDb250YWluZXIsICdoMScpO1xyXG4gICAgc3VidGl0bGUuaW5uZXJUZXh0ID0gdHh0LlRJVExFO1xyXG4gICAgdGl0bGUuaW5uZXJUZXh0ID0gdHh0LlNVQlRJVExFO1xyXG4gICAgdG9wQmFyLmFwcGVuZENoaWxkKHRpdGxlQ29udGFpbmVyKTtcclxuICAgIHRvcEJhci5hcHBlbmRDaGlsZChDcmVhdGVIYW1idXJnZXJCdXR0b24oKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIENyZWF0ZUhhbWJ1cmdlckJ1dHRvbigpIHtcclxuICAgIGxldCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgYnRuLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYnVyZ2VyJyk7XHJcbiAgICBidG4uc2V0QXR0cmlidXRlKCdmb3InLCAnYnVyZ2VyJyk7XHJcbiAgICBsZXQgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XHJcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2J1cmdlcicpO1xyXG4gICAgYnRuLmFwcGVuZENoaWxkKGlucHV0KTtcclxuICAgIGJ0bi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJykpO1xyXG4gICAgYnRuLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKSk7XHJcbiAgICBidG4uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpKTtcclxuICAgIHVpLk1ha2VUYWJiYWJsZVdpdGhJbnB1dFRvKGJ0biwgaW5wdXQpO1xyXG4gICAgcmV0dXJuIGJ0bjtcclxufVxyXG5cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBGb290ZXIgKGFrYSBCdG1CYXIpIC0tLSBcclxuXHJcbmZ1bmN0aW9uIENyZWF0ZUJvdHRvbUJhcihidG1CYXIpIHtcclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBjcmVhdGUgc29jaWFsIGJ1dHRvbnMgXHJcbiAgICBsZXQgdWwgPSB1aS5DcmVhdGVFbGVtZW50V2l0aENsYXNzKCd1bCcsICdzYldyYXBwZXInKTtcclxuICAgIHVsLmFwcGVuZENoaWxkKENyZWF0ZVNvY2lhbEJ1dHRvbignR2l0SHViJykpO1xyXG4gICAgdWwuYXBwZW5kQ2hpbGQoQ3JlYXRlU29jaWFsQnV0dG9uKCdJbnN0YWdyYW0nKSk7XHJcbiAgICB1bC5hcHBlbmRDaGlsZChDcmVhdGVTb2NpYWxCdXR0b24oJ0JsdWVza3knKSk7XHJcbiAgICBidG1CYXIuYXBwZW5kQ2hpbGQodWwpO1xyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGNyZWF0ZSBtYWlsaW5nIGxpc3Qgam9pbiBcclxuICAgIGxldCBtYWlsR3JvdXAgPSB1aS5DcmVhdGVEaXZXaXRoQ2xhc3MoJ21pbnB1dC1ncm91cCcpO1xyXG4gICAgbGV0IG1haWxJbnB1dCA9IHVpLkNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoJ2lucHV0JywgJ21pbnB1dCcpO1xyXG4gICAgbWFpbElucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnRW1haWwnKTtcclxuICAgIG1haWxJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnRW1haWwnKTtcclxuICAgIG1haWxJbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgdHh0LkVNQUlMX1BMQUNFSE9MREVSKTtcclxuICAgIG1haWxJbnB1dC5zZXRBdHRyaWJ1dGUoJ2F1dG9jb21wbGV0ZScsICdvZmYnKTtcclxuICAgIGxldCBtYWlsQnV0dG9uID0gdWkuQ3JlYXRlRWxlbWVudFdpdGhDbGFzcygnaW5wdXQnLCAnbWJ1dHRvblN1Ym1pdCcpO1xyXG4gICAgbWFpbEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgdHh0LkVNQUlMX0JUTl9URVhUKTtcclxuICAgIG1haWxCdXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xyXG4gICAgbWFpbEdyb3VwLmFwcGVuZENoaWxkKG1haWxJbnB1dCk7XHJcbiAgICBtYWlsR3JvdXAuYXBwZW5kQ2hpbGQobWFpbEJ1dHRvbik7XHJcbiAgICBidG1CYXIuYXBwZW5kQ2hpbGQobWFpbEdyb3VwKTtcclxuICAgIC8vIGNyZWF0ZSBzbGlkaW5nIGJ1dHRvblxyXG4gICAgYnRtQmFyLmFwcGVuZENoaWxkKENyZWF0ZVNsaWRpbmdCdXR0b24oKSk7XHJcbn1cclxuZnVuY3Rpb24gQ3JlYXRlU29jaWFsQnV0dG9uKG5hbWUpIHtcclxuICAgIGxldCBsaSA9IHVpLkNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoJ2xpJywgJ2ljb24nLCBuYW1lLnRvTG93ZXJDYXNlKCksICdwcmV2ZW50U2VsZWN0Jyk7XHJcbiAgICBsZXQgdHQgPSB1aS5DcmVhdGVFbGVtZW50V2l0aENsYXNzKCdzcGFuJywgJ3Rvb2x0aXAnKTtcclxuICAgIHR0LmlubmVyVGV4dCA9IG5hbWU7XHJcbiAgICBsaS5hcHBlbmRDaGlsZCh0dCk7XHJcbiAgICBsZXQgaW1nID0gdWkuQ3JlYXRlSW1hZ2UoR2V0U29jaWFsSW1nQnlOYW1lKG5hbWUpLCBuYW1lKTtcclxuICAgIGxpLmFwcGVuZENoaWxkKGltZyk7XHJcbiAgICB1aS5NYWtlVGFiYmFibGUobGkpO1xyXG4gICAgcmV0dXJuIGxpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBHZXRTb2NpYWxJbWdCeU5hbWUobmFtZSkge1xyXG4gICAgc3dpdGNoIChuYW1lLnRvTG93ZXJDYXNlKCkpIHtcclxuICAgICAgICBjYXNlIFwiZ2l0aHViXCI6XHJcbiAgICAgICAgICAgIHJldHVybiBzdmdHaXRodWI7XHJcbiAgICAgICAgY2FzZSBcImluc3RhZ3JhbVwiOlxyXG4gICAgICAgICAgICByZXR1cm4gc3ZnSW5zdGFncmFtO1xyXG4gICAgICAgIGNhc2UgXCJibHVlc2t5XCI6XHJcbiAgICAgICAgICAgIHJldHVybiBzdmdCbHVlc2t5O1xyXG4gICAgfVxyXG4gICAgY29uc29sZS53YXJuKFwiQ291bGQgbm90IEdldFNvY2lhbEltZ0J5TmFtZSBmcm9tIG5hbWU6IFwiICsgbmFtZSk7XHJcbiAgICByZXR1cm4gbnVsbDtcclxufVxyXG5mdW5jdGlvbiBHZXRTb2NpYWxUZXh0QnlOYW1lKG5hbWUpIHtcclxuICAgIHN3aXRjaCAobmFtZS50b0xvd2VyQ2FzZSgpKSB7XHJcbiAgICAgICAgY2FzZSBcImdpdGh1YlwiOlxyXG4gICAgICAgICAgICByZXR1cm4gdHh0LlNPQ0lBTF9HSVRIVUI7XHJcbiAgICAgICAgY2FzZSBcImluc3RhZ3JhbVwiOlxyXG4gICAgICAgICAgICByZXR1cm4gdHh0LlNPQ0lBTF9JTlNUQUdSQU07XHJcbiAgICAgICAgY2FzZSBcImJsdWVza3lcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHR4dC5TT0NJQUxfQkxVRVNLWTtcclxuICAgIH1cclxuICAgIGNvbnNvbGUud2FybihcIkNvdWxkIG5vdCBHZXRTb2NpYWxUZXh0QnlOYW1lIGZyb20gbmFtZTogXCIgKyBuYW1lKTtcclxuICAgIHJldHVybiBudWxsO1xyXG59XHJcblxyXG5mdW5jdGlvbiBDcmVhdGVTbGlkaW5nQnV0dG9uKCkge1xyXG4gICAgbGV0IGJ0biA9IHVpLkNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoJ2J1dHRvbicsICdzbGlkaW5nYnRuJyk7XHJcbiAgICBsZXQgY2lyY2xlID0gdWkuQ3JlYXRlRWxlbWVudFdpdGhDbGFzcygnc3BhbicsICdjaXJjbGUnKTtcclxuICAgIGNpcmNsZS5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcclxuICAgIGNpcmNsZS5hcHBlbmRDaGlsZCh1aS5DcmVhdGVFbGVtZW50V2l0aENsYXNzKCdzcGFuJywgJ2ljb24nLCAnYXJyb3cnKSk7XHJcbiAgICBidG4uYXBwZW5kQ2hpbGQoY2lyY2xlKTtcclxuICAgIGxldCB0ZXh0ID0gdWkuQ3JlYXRlRWxlbWVudFdpdGhDbGFzcygnc3BhbicsICdidXR0b24tdGV4dCcsICdwcmV2ZW50U2VsZWN0Jyk7XHJcbiAgICB0ZXh0LmlubmVyVGV4dCA9IHR4dC5TTElESU5HX0JVVFRPTjtcclxuICAgIGJ0bi5hcHBlbmRDaGlsZCh0ZXh0KTtcclxuICAgIC8vIGxldCBvdXRlciA9IHVpLkNyZWF0ZURpdldpdGhDbGFzcygnb3V0ZXInKTtcclxuICAgIC8vIGJ0bi5hcHBlbmRDaGlsZChvdXRlcik7XHJcbiAgICB1aS5NYWtlVGFiYmFibGUoYnRuKTtcclxuICAgIHJldHVybiBidG47XHJcbn0iLCIvKiBNYWluIFVJIGdlbmVyYXRpb24gKi9cclxuXHJcbmltcG9ydCB7IENyZWF0ZUhlYWRlckZvb3RlciB9IGZyb20gXCIuL3VpSGRGdFwiO1xyXG5pbXBvcnQgeyBDcmVhdGVEYXRhV2luZG93IH0gZnJvbSBcIi4vdWlEYXRhXCI7XHJcbmltcG9ydCAqIGFzIHVpIGZyb20gJy4vdWknO1xyXG5pbXBvcnQgeyBDcmVhdGVBcnRXaW5kb3cgfSBmcm9tIFwiLi91aUFydFwiO1xyXG5cclxuY29uc3QgX3VzZURlbW9CR0NvbG9ycyA9IGZhbHNlO1xyXG5cclxuLyoqIGNvbnRhaW5lciBkaXYgZm9yIGFsbCBjb250ZW50IG9uIHRoZSBwYWdlIEB0eXBlIEVsZW1lbnQgKi9cclxubGV0IGNvbnRhaW5lciA9IG51bGw7XHJcblxyXG4vKiogSGVhZGVyICh0b3AgYmFyKSBlbGVtZW50IEB0eXBlIEVsZW1lbnQgKi9cclxubGV0IHRvcEJhciA9IG51bGw7XHJcbi8qKiBBcnQgd2luZG93LCB3aGVyZSB0aGUgY2FudmFzIHJlbmRlcmluZyBnb2VzIEB0eXBlIEVsZW1lbnQgKi9cclxuZXhwb3J0IGxldCBhcnRXaW5kb3cgPSBudWxsO1xyXG4vKiogRGF0YSB3aW5kb3csIHdoZXJlIHRoZSB0YWJzIGFuZCBpbmZvIHdpbmRvdyBnb2VzIEB0eXBlIEVsZW1lbnQgKi9cclxuZXhwb3J0IGxldCBkYXRhV2luZG93ID0gbnVsbDtcclxuLyoqIEZvb3RlciAoYm90dG9tIGJhcikgZWxlbWVudCBAdHlwZSBFbGVtZW50ICovXHJcbmxldCBidG1CYXIgPSBudWxsO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEJ1aWxkVUkoKSB7XHJcblxyXG4gICAgLy8gdG9wIGJhclxyXG4gICAgY29udGFpbmVyID0gdWkuQ3JlYXRlRGl2V2l0aElEKCdjb250YWluZXInKTtcclxuXHJcbiAgICB0b3BCYXIgPSB1aS5BZGRFbGVtZW50V2l0aENsYXNzVG8oY29udGFpbmVyLCAnaGVhZGVyJyk7XHJcbiAgICBhcnRXaW5kb3cgPSB1aS5BZGRFbGVtZW50V2l0aENsYXNzVG8oY29udGFpbmVyLCAnYXJ0V2luZG93Jyk7XHJcbiAgICBkYXRhV2luZG93ID0gdWkuQWRkRWxlbWVudFdpdGhDbGFzc1RvKGNvbnRhaW5lciwgJ2RhdGFXaW5kb3cnKTtcclxuICAgIGJ0bUJhciA9IHVpLkFkZEVsZW1lbnRXaXRoQ2xhc3NUbyhjb250YWluZXIsICdmb290ZXInKTtcclxuXHJcbiAgICBDcmVhdGVIZWFkZXJGb290ZXIodG9wQmFyLCBidG1CYXIpO1xyXG4gICAgQ3JlYXRlRGF0YVdpbmRvdygpO1xyXG4gICAgQ3JlYXRlQXJ0V2luZG93KCk7XHJcblxyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xyXG5cclxuICAgIGlmIChfdXNlRGVtb0JHQ29sb3JzKSB7XHJcbiAgICAgICAgdWkuQWRkQ2xhc3NUb0RPTXMoJ2RlbW9CRycsIHRvcEJhciwgYnRtQmFyLCBhcnRXaW5kb3csIGRhdGFXaW5kb3cpO1xyXG4gICAgfVxyXG5cclxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==