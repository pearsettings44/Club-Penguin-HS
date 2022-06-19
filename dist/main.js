/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/functions/announcementBar.js":
/*!******************************************!*\
  !*** ./src/functions/announcementBar.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderAnnouncementBar": () => (/* binding */ renderAnnouncementBar)
/* harmony export */ });
/* harmony import */ var _createElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElements */ "./src/functions/createElements.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index */ "./src/index.js");


/* Creates an announcement bar */
function renderAnnouncementBar() {
  const content = "CLICK TO WATCH THE BAKER VIDEO WITH TYSON AND T-FUNK";
  const video = "https://www.youtube.com/watch?v=dGCopkpYuOg&t=12s";

  const header = (0,_createElements__WEBPACK_IMPORTED_MODULE_0__.createHTMLelement)("header", "header", "", "");
  const header_content = (0,_createElements__WEBPACK_IMPORTED_MODULE_0__.createHTMLelement)("a", "header_video", "", content);

  header_content.href = video;
  header_content.target = "_blank";
  header.appendChild(header_content);
  /* Append to the DOM */
  _index__WEBPACK_IMPORTED_MODULE_1__.maindiv.appendChild(header);
}




/***/ }),

/***/ "./src/functions/createElements.js":
/*!*****************************************!*\
  !*** ./src/functions/createElements.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createHTMLelement": () => (/* binding */ createHTMLelement)
/* harmony export */ });
function createHTMLelement(tag, id, classes, content) {
  /* creates an element with the specified tag*/
  const element = document.createElement(`${tag}`);
  /* if an id was passed, attribute it to the element */
  if (id) element.id = id;
  /* if classes were passed, attribute them to the element */
  if (classes) {
    for (const index in classes) element.classList.add(classes[index]);
  }
  /* if content was passed, attribute it to the element */
  if (content) element.innerHTML = content;
  return element;
}




/***/ }),

/***/ "./src/functions/navbar.js":
/*!*********************************!*\
  !*** ./src/functions/navbar.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderNav": () => (/* binding */ renderNav)
/* harmony export */ });
/* harmony import */ var _createElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElements */ "./src/functions/createElements.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index */ "./src/index.js");
/* harmony import */ var _img_menu_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/menu.png */ "./src/img/menu.png");
/* harmony import */ var _img_baker_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/baker.png */ "./src/img/baker.png");
/* harmony import */ var _img_user_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/user.png */ "./src/img/user.png");
/* harmony import */ var _img_search_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/search.png */ "./src/img/search.png");
/* harmony import */ var _img_bag_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/bag.png */ "./src/img/bag.png");








/* Creates a navbar with menu, logo, currency, user, search and shopping bag */
function renderNav() {
  /* navbar element */
  const navbar = (0,_createElements__WEBPACK_IMPORTED_MODULE_0__.createHTMLelement)("nav", "navbar");

  /* menu */
  const menu = (0,_createElements__WEBPACK_IMPORTED_MODULE_0__.createHTMLelement)("div", "menu", "", "");
  const menu_img = (0,_createElements__WEBPACK_IMPORTED_MODULE_0__.createHTMLelement)("img", "", "", "");
  menu_img.src = _img_menu_png__WEBPACK_IMPORTED_MODULE_2__;
  menu.appendChild(menu_img);
  navbar.appendChild(menu);

  /* logo */
  const logo = (0,_createElements__WEBPACK_IMPORTED_MODULE_0__.createHTMLelement)("a", "logo", "", "");
  const logo_img = (0,_createElements__WEBPACK_IMPORTED_MODULE_0__.createHTMLelement)("img", "", "", "");
  const videoBaker = "https://bakerskateboards.com/";
  logo_img.src = _img_baker_png__WEBPACK_IMPORTED_MODULE_3__;
  logo.href = videoBaker;
  logo.target = "_blank";
  logo.appendChild(logo_img);
  navbar.appendChild(logo);

  /* options */
  const options = (0,_createElements__WEBPACK_IMPORTED_MODULE_0__.createHTMLelement)("div", "options", "", "");

  /* dropdown menu */
  const dropdown_container = (0,_createElements__WEBPACK_IMPORTED_MODULE_0__.createHTMLelement)("div", "", "", "");
  const dropdown = (0,_createElements__WEBPACK_IMPORTED_MODULE_0__.createHTMLelement)("select", "dropdown", "", "");
  dropdown_container.appendChild(dropdown); 
  options.appendChild(dropdown_container);

  const dropdown_options = ["USD", "CAD", "EUR", "GBP"];
  dropdown_options.forEach((currency) => {
    const dropdown_option = (0,_createElements__WEBPACK_IMPORTED_MODULE_0__.createHTMLelement)("option", "", "", currency);
    dropdown.appendChild(dropdown_option);
  });

  /* options items (user, search, bag) */
  const items = ["user", "search", "bag"];
  const images = [_img_user_png__WEBPACK_IMPORTED_MODULE_4__, _img_search_png__WEBPACK_IMPORTED_MODULE_5__, _img_bag_png__WEBPACK_IMPORTED_MODULE_6__];
  let i = 0;

  items.forEach((item) => {
    const list_item = (0,_createElements__WEBPACK_IMPORTED_MODULE_0__.createHTMLelement)("div", item, "", "");
    const list_item_img = (0,_createElements__WEBPACK_IMPORTED_MODULE_0__.createHTMLelement)("img", "", "", "");
    list_item_img.src = images[i++];
    list_item.appendChild(list_item_img);
    options.appendChild(list_item);
  });
  navbar.appendChild(options);

  /* Append to the DOM */
  _index__WEBPACK_IMPORTED_MODULE_1__.maindiv.appendChild(navbar);
}




/***/ }),

/***/ "./src/functions/spacer.js":
/*!*********************************!*\
  !*** ./src/functions/spacer.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderSpacer": () => (/* binding */ renderSpacer)
/* harmony export */ });
/* harmony import */ var _createElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElements */ "./src/functions/createElements.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index */ "./src/index.js");


/* Creates a little spacer */
function renderSpacer() {
  const spacer = (0,_createElements__WEBPACK_IMPORTED_MODULE_0__.createHTMLelement)("div", "spacer", "", "-");
  /* Append to the DOM */
  _index__WEBPACK_IMPORTED_MODULE_1__.maindiv.appendChild(spacer);
}




/***/ }),

/***/ "./src/functions/store.js":
/*!********************************!*\
  !*** ./src/functions/store.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderStore": () => (/* binding */ renderStore)
/* harmony export */ });
/* harmony import */ var _createElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElements */ "./src/functions/createElements.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index */ "./src/index.js");
/* harmony import */ var _img_item1_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/item1.png */ "./src/img/item1.png");
/* harmony import */ var _img_item2_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/item2.png */ "./src/img/item2.png");
/* harmony import */ var _img_item3_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/item3.png */ "./src/img/item3.png");
/* harmony import */ var _img_item4_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/item4.png */ "./src/img/item4.png");
/* harmony import */ var _img_item5_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/item5.png */ "./src/img/item5.png");
/* harmony import */ var _img_item6_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../img/item6.png */ "./src/img/item6.png");
/* harmony import */ var _img_item7_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../img/item7.png */ "./src/img/item7.png");
/* harmony import */ var _img_item8_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../img/item8.png */ "./src/img/item8.png");
/* harmony import */ var _img_item9_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../img/item9.png */ "./src/img/item9.png");
/* harmony import */ var _img_item10_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../img/item10.png */ "./src/img/item10.png");
/* harmony import */ var _img_item11_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../img/item11.png */ "./src/img/item11.png");
/* harmony import */ var _img_item12_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../img/item12.png */ "./src/img/item12.png");















/* Creates a store */
function renderStore() {
  /* store container element */
  const store = (0,_createElements__WEBPACK_IMPORTED_MODULE_0__.createHTMLelement)("div", "store", "", "");

  /* items images */
  const items = [
    _img_item1_png__WEBPACK_IMPORTED_MODULE_2__,
    _img_item2_png__WEBPACK_IMPORTED_MODULE_3__,
    _img_item3_png__WEBPACK_IMPORTED_MODULE_4__,
    _img_item4_png__WEBPACK_IMPORTED_MODULE_5__,
    _img_item5_png__WEBPACK_IMPORTED_MODULE_6__,
    _img_item6_png__WEBPACK_IMPORTED_MODULE_7__,
    _img_item7_png__WEBPACK_IMPORTED_MODULE_8__,
    _img_item8_png__WEBPACK_IMPORTED_MODULE_9__,
    _img_item9_png__WEBPACK_IMPORTED_MODULE_10__,
    _img_item10_png__WEBPACK_IMPORTED_MODULE_11__,
    _img_item11_png__WEBPACK_IMPORTED_MODULE_12__,
    _img_item12_png__WEBPACK_IMPORTED_MODULE_13__,
  ];

  /* items texts */
  const text = [
    "Kader Logo Navy B2 8.25",
    "Theotis Logo Mandarin B2 8.0",
    "Spanky Logo Forest B2 8.5",
    "Circle Jerks Album Art Deck 9.6",
    "Circle Jerks Tee White",
    "Capital B Stripe Tee Green/Yellow",
    "Kamikaze Tee Black",
    "Domination Tee Black",
    "Times New Black Snapback",
    "Jolly Man Red Socks",
    "Misty Flip Sticker",
    "Circle Jerks Sticker",
  ];

  /* items prices */
  const price = [
    "$ 71",
    "$ 71",
    "$ 73",
    "$ 75",
    "$ 35",
    "$ 40",
    "$ 35",
    "$ 35",
    "$ 40",
    "$ 12",
    "$ 2",
    "$ 2",
  ];

  let i = 0;
  items.forEach((item) => {
    const placeholder = (0,_createElements__WEBPACK_IMPORTED_MODULE_0__.createHTMLelement)("div", "", ["placeholder"], "");

    /* image */
    const placeholder_img = (0,_createElements__WEBPACK_IMPORTED_MODULE_0__.createHTMLelement)("img", "", ["skate_img"], "");
    placeholder_img.src = item;
    placeholder.appendChild(placeholder_img);

    /* text */
    const placeholder_txt = (0,_createElements__WEBPACK_IMPORTED_MODULE_0__.createHTMLelement)("p", "", ["skate_txt"], text[i]);
    placeholder.appendChild(placeholder_txt);

    /* price */
    const placeholder_price = (0,_createElements__WEBPACK_IMPORTED_MODULE_0__.createHTMLelement)(
      "p",
      "",
      ["skate_price"],
      price[i]
    );
    placeholder.appendChild(placeholder_price);

    store.appendChild(placeholder);
    i++;
  });
  /* Append to the DOM */
  _index__WEBPACK_IMPORTED_MODULE_1__.maindiv.appendChild(store);
}




/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "maindiv": () => (/* binding */ maindiv)
/* harmony export */ });
/* harmony import */ var _functions_announcementBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions/announcementBar */ "./src/functions/announcementBar.js");
/* harmony import */ var _functions_navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions/navbar */ "./src/functions/navbar.js");
/* harmony import */ var _functions_spacer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions/spacer */ "./src/functions/spacer.js");
/* harmony import */ var _functions_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./functions/store */ "./src/functions/store.js");





/* Main div, contains everything */
const maindiv = document.getElementById("content");
(0,_functions_announcementBar__WEBPACK_IMPORTED_MODULE_0__.renderAnnouncementBar)();
(0,_functions_navbar__WEBPACK_IMPORTED_MODULE_1__.renderNav)();
(0,_functions_spacer__WEBPACK_IMPORTED_MODULE_2__.renderSpacer)();
(0,_functions_store__WEBPACK_IMPORTED_MODULE_3__.renderStore)();



/***/ }),

/***/ "./src/img/bag.png":
/*!*************************!*\
  !*** ./src/img/bag.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "406119a8b237202aef5f.png";

/***/ }),

/***/ "./src/img/baker.png":
/*!***************************!*\
  !*** ./src/img/baker.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "be47f2ff65be649eb118.png";

/***/ }),

/***/ "./src/img/item1.png":
/*!***************************!*\
  !*** ./src/img/item1.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1239953467eccedf745d.png";

/***/ }),

/***/ "./src/img/item10.png":
/*!****************************!*\
  !*** ./src/img/item10.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6535148fe95dd0c48c8c.png";

/***/ }),

/***/ "./src/img/item11.png":
/*!****************************!*\
  !*** ./src/img/item11.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2b90dcd9cd042e40205b.png";

/***/ }),

/***/ "./src/img/item12.png":
/*!****************************!*\
  !*** ./src/img/item12.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "49326d92129435be8c44.png";

/***/ }),

/***/ "./src/img/item2.png":
/*!***************************!*\
  !*** ./src/img/item2.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "01a6db0b0712ec666fe2.png";

/***/ }),

/***/ "./src/img/item3.png":
/*!***************************!*\
  !*** ./src/img/item3.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cc3a9fab706cea870981.png";

/***/ }),

/***/ "./src/img/item4.png":
/*!***************************!*\
  !*** ./src/img/item4.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6cdcc28eec4d0f19827e.png";

/***/ }),

/***/ "./src/img/item5.png":
/*!***************************!*\
  !*** ./src/img/item5.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ef16f1060953a428c40f.png";

/***/ }),

/***/ "./src/img/item6.png":
/*!***************************!*\
  !*** ./src/img/item6.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "928f6ce9afba8849c8c0.png";

/***/ }),

/***/ "./src/img/item7.png":
/*!***************************!*\
  !*** ./src/img/item7.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "24c198932f9612764d4c.png";

/***/ }),

/***/ "./src/img/item8.png":
/*!***************************!*\
  !*** ./src/img/item8.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "85b0b9cd11a6a4ea4201.png";

/***/ }),

/***/ "./src/img/item9.png":
/*!***************************!*\
  !*** ./src/img/item9.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "48fde98f383380d36097.png";

/***/ }),

/***/ "./src/img/menu.png":
/*!**************************!*\
  !*** ./src/img/menu.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "69146b76b37178e900bb.png";

/***/ }),

/***/ "./src/img/search.png":
/*!****************************!*\
  !*** ./src/img/search.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b4ddcffd7bf071675019.png";

/***/ }),

/***/ "./src/img/user.png":
/*!**************************!*\
  !*** ./src/img/user.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "df249d90d1e60cc8eed2.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ1huQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7VUVmQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2NsdWItcGVuZ3Vpbi1ocy8uL3NyYy9mdW5jdGlvbnMvYW5ub3VuY2VtZW50QmFyLmpzIiwid2VicGFjazovL2NsdWItcGVuZ3Vpbi1ocy8uL3NyYy9mdW5jdGlvbnMvY3JlYXRlRWxlbWVudHMuanMiLCJ3ZWJwYWNrOi8vY2x1Yi1wZW5ndWluLWhzLy4vc3JjL2Z1bmN0aW9ucy9uYXZiYXIuanMiLCJ3ZWJwYWNrOi8vY2x1Yi1wZW5ndWluLWhzLy4vc3JjL2Z1bmN0aW9ucy9zcGFjZXIuanMiLCJ3ZWJwYWNrOi8vY2x1Yi1wZW5ndWluLWhzLy4vc3JjL2Z1bmN0aW9ucy9zdG9yZS5qcyIsIndlYnBhY2s6Ly9jbHViLXBlbmd1aW4taHMvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2x1Yi1wZW5ndWluLWhzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2NsdWItcGVuZ3Vpbi1ocy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY2x1Yi1wZW5ndWluLWhzL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vY2x1Yi1wZW5ndWluLWhzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vY2x1Yi1wZW5ndWluLWhzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY2x1Yi1wZW5ndWluLWhzL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2NsdWItcGVuZ3Vpbi1ocy93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2NsdWItcGVuZ3Vpbi1ocy93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vY2x1Yi1wZW5ndWluLWhzL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVIVE1MZWxlbWVudCB9IGZyb20gXCIuL2NyZWF0ZUVsZW1lbnRzXCI7XG5pbXBvcnQgeyBtYWluZGl2IH0gZnJvbSBcIi4uL2luZGV4XCI7XG4vKiBDcmVhdGVzIGFuIGFubm91bmNlbWVudCBiYXIgKi9cbmZ1bmN0aW9uIHJlbmRlckFubm91bmNlbWVudEJhcigpIHtcbiAgY29uc3QgY29udGVudCA9IFwiQ0xJQ0sgVE8gV0FUQ0ggVEhFIEJBS0VSIFZJREVPIFdJVEggVFlTT04gQU5EIFQtRlVOS1wiO1xuICBjb25zdCB2aWRlbyA9IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1kR0NvcGtwWXVPZyZ0PTEyc1wiO1xuXG4gIGNvbnN0IGhlYWRlciA9IGNyZWF0ZUhUTUxlbGVtZW50KFwiaGVhZGVyXCIsIFwiaGVhZGVyXCIsIFwiXCIsIFwiXCIpO1xuICBjb25zdCBoZWFkZXJfY29udGVudCA9IGNyZWF0ZUhUTUxlbGVtZW50KFwiYVwiLCBcImhlYWRlcl92aWRlb1wiLCBcIlwiLCBjb250ZW50KTtcblxuICBoZWFkZXJfY29udGVudC5ocmVmID0gdmlkZW87XG4gIGhlYWRlcl9jb250ZW50LnRhcmdldCA9IFwiX2JsYW5rXCI7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJfY29udGVudCk7XG4gIC8qIEFwcGVuZCB0byB0aGUgRE9NICovXG4gIG1haW5kaXYuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbn1cblxuZXhwb3J0IHsgcmVuZGVyQW5ub3VuY2VtZW50QmFyIH07XG4iLCJmdW5jdGlvbiBjcmVhdGVIVE1MZWxlbWVudCh0YWcsIGlkLCBjbGFzc2VzLCBjb250ZW50KSB7XG4gIC8qIGNyZWF0ZXMgYW4gZWxlbWVudCB3aXRoIHRoZSBzcGVjaWZpZWQgdGFnKi9cbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYCR7dGFnfWApO1xuICAvKiBpZiBhbiBpZCB3YXMgcGFzc2VkLCBhdHRyaWJ1dGUgaXQgdG8gdGhlIGVsZW1lbnQgKi9cbiAgaWYgKGlkKSBlbGVtZW50LmlkID0gaWQ7XG4gIC8qIGlmIGNsYXNzZXMgd2VyZSBwYXNzZWQsIGF0dHJpYnV0ZSB0aGVtIHRvIHRoZSBlbGVtZW50ICovXG4gIGlmIChjbGFzc2VzKSB7XG4gICAgZm9yIChjb25zdCBpbmRleCBpbiBjbGFzc2VzKSBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3Nlc1tpbmRleF0pO1xuICB9XG4gIC8qIGlmIGNvbnRlbnQgd2FzIHBhc3NlZCwgYXR0cmlidXRlIGl0IHRvIHRoZSBlbGVtZW50ICovXG4gIGlmIChjb250ZW50KSBlbGVtZW50LmlubmVySFRNTCA9IGNvbnRlbnQ7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5leHBvcnQgeyBjcmVhdGVIVE1MZWxlbWVudCB9O1xuIiwiaW1wb3J0IHsgY3JlYXRlSFRNTGVsZW1lbnQgfSBmcm9tIFwiLi9jcmVhdGVFbGVtZW50c1wiO1xuaW1wb3J0IHsgbWFpbmRpdiB9IGZyb20gXCIuLi9pbmRleFwiO1xuaW1wb3J0IE1lbnUgZnJvbSBcIi4uL2ltZy9tZW51LnBuZ1wiO1xuaW1wb3J0IExvZ28gZnJvbSBcIi4uL2ltZy9iYWtlci5wbmdcIjtcbmltcG9ydCBVc2VyIGZyb20gXCIuLi9pbWcvdXNlci5wbmdcIjtcbmltcG9ydCBTZWFyY2ggZnJvbSBcIi4uL2ltZy9zZWFyY2gucG5nXCI7XG5pbXBvcnQgQmFnIGZyb20gXCIuLi9pbWcvYmFnLnBuZ1wiO1xuXG4vKiBDcmVhdGVzIGEgbmF2YmFyIHdpdGggbWVudSwgbG9nbywgY3VycmVuY3ksIHVzZXIsIHNlYXJjaCBhbmQgc2hvcHBpbmcgYmFnICovXG5mdW5jdGlvbiByZW5kZXJOYXYoKSB7XG4gIC8qIG5hdmJhciBlbGVtZW50ICovXG4gIGNvbnN0IG5hdmJhciA9IGNyZWF0ZUhUTUxlbGVtZW50KFwibmF2XCIsIFwibmF2YmFyXCIpO1xuXG4gIC8qIG1lbnUgKi9cbiAgY29uc3QgbWVudSA9IGNyZWF0ZUhUTUxlbGVtZW50KFwiZGl2XCIsIFwibWVudVwiLCBcIlwiLCBcIlwiKTtcbiAgY29uc3QgbWVudV9pbWcgPSBjcmVhdGVIVE1MZWxlbWVudChcImltZ1wiLCBcIlwiLCBcIlwiLCBcIlwiKTtcbiAgbWVudV9pbWcuc3JjID0gTWVudTtcbiAgbWVudS5hcHBlbmRDaGlsZChtZW51X2ltZyk7XG4gIG5hdmJhci5hcHBlbmRDaGlsZChtZW51KTtcblxuICAvKiBsb2dvICovXG4gIGNvbnN0IGxvZ28gPSBjcmVhdGVIVE1MZWxlbWVudChcImFcIiwgXCJsb2dvXCIsIFwiXCIsIFwiXCIpO1xuICBjb25zdCBsb2dvX2ltZyA9IGNyZWF0ZUhUTUxlbGVtZW50KFwiaW1nXCIsIFwiXCIsIFwiXCIsIFwiXCIpO1xuICBjb25zdCB2aWRlb0Jha2VyID0gXCJodHRwczovL2Jha2Vyc2thdGVib2FyZHMuY29tL1wiO1xuICBsb2dvX2ltZy5zcmMgPSBMb2dvO1xuICBsb2dvLmhyZWYgPSB2aWRlb0Jha2VyO1xuICBsb2dvLnRhcmdldCA9IFwiX2JsYW5rXCI7XG4gIGxvZ28uYXBwZW5kQ2hpbGQobG9nb19pbWcpO1xuICBuYXZiYXIuYXBwZW5kQ2hpbGQobG9nbyk7XG5cbiAgLyogb3B0aW9ucyAqL1xuICBjb25zdCBvcHRpb25zID0gY3JlYXRlSFRNTGVsZW1lbnQoXCJkaXZcIiwgXCJvcHRpb25zXCIsIFwiXCIsIFwiXCIpO1xuXG4gIC8qIGRyb3Bkb3duIG1lbnUgKi9cbiAgY29uc3QgZHJvcGRvd25fY29udGFpbmVyID0gY3JlYXRlSFRNTGVsZW1lbnQoXCJkaXZcIiwgXCJcIiwgXCJcIiwgXCJcIik7XG4gIGNvbnN0IGRyb3Bkb3duID0gY3JlYXRlSFRNTGVsZW1lbnQoXCJzZWxlY3RcIiwgXCJkcm9wZG93blwiLCBcIlwiLCBcIlwiKTtcbiAgZHJvcGRvd25fY29udGFpbmVyLmFwcGVuZENoaWxkKGRyb3Bkb3duKTsgXG4gIG9wdGlvbnMuYXBwZW5kQ2hpbGQoZHJvcGRvd25fY29udGFpbmVyKTtcblxuICBjb25zdCBkcm9wZG93bl9vcHRpb25zID0gW1wiVVNEXCIsIFwiQ0FEXCIsIFwiRVVSXCIsIFwiR0JQXCJdO1xuICBkcm9wZG93bl9vcHRpb25zLmZvckVhY2goKGN1cnJlbmN5KSA9PiB7XG4gICAgY29uc3QgZHJvcGRvd25fb3B0aW9uID0gY3JlYXRlSFRNTGVsZW1lbnQoXCJvcHRpb25cIiwgXCJcIiwgXCJcIiwgY3VycmVuY3kpO1xuICAgIGRyb3Bkb3duLmFwcGVuZENoaWxkKGRyb3Bkb3duX29wdGlvbik7XG4gIH0pO1xuXG4gIC8qIG9wdGlvbnMgaXRlbXMgKHVzZXIsIHNlYXJjaCwgYmFnKSAqL1xuICBjb25zdCBpdGVtcyA9IFtcInVzZXJcIiwgXCJzZWFyY2hcIiwgXCJiYWdcIl07XG4gIGNvbnN0IGltYWdlcyA9IFtVc2VyLCBTZWFyY2gsIEJhZ107XG4gIGxldCBpID0gMDtcblxuICBpdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgY29uc3QgbGlzdF9pdGVtID0gY3JlYXRlSFRNTGVsZW1lbnQoXCJkaXZcIiwgaXRlbSwgXCJcIiwgXCJcIik7XG4gICAgY29uc3QgbGlzdF9pdGVtX2ltZyA9IGNyZWF0ZUhUTUxlbGVtZW50KFwiaW1nXCIsIFwiXCIsIFwiXCIsIFwiXCIpO1xuICAgIGxpc3RfaXRlbV9pbWcuc3JjID0gaW1hZ2VzW2krK107XG4gICAgbGlzdF9pdGVtLmFwcGVuZENoaWxkKGxpc3RfaXRlbV9pbWcpO1xuICAgIG9wdGlvbnMuYXBwZW5kQ2hpbGQobGlzdF9pdGVtKTtcbiAgfSk7XG4gIG5hdmJhci5hcHBlbmRDaGlsZChvcHRpb25zKTtcblxuICAvKiBBcHBlbmQgdG8gdGhlIERPTSAqL1xuICBtYWluZGl2LmFwcGVuZENoaWxkKG5hdmJhcik7XG59XG5cbmV4cG9ydCB7IHJlbmRlck5hdiB9O1xuIiwiaW1wb3J0IHsgY3JlYXRlSFRNTGVsZW1lbnQgfSBmcm9tIFwiLi9jcmVhdGVFbGVtZW50c1wiO1xuaW1wb3J0IHsgbWFpbmRpdiB9IGZyb20gXCIuLi9pbmRleFwiO1xuLyogQ3JlYXRlcyBhIGxpdHRsZSBzcGFjZXIgKi9cbmZ1bmN0aW9uIHJlbmRlclNwYWNlcigpIHtcbiAgY29uc3Qgc3BhY2VyID0gY3JlYXRlSFRNTGVsZW1lbnQoXCJkaXZcIiwgXCJzcGFjZXJcIiwgXCJcIiwgXCItXCIpO1xuICAvKiBBcHBlbmQgdG8gdGhlIERPTSAqL1xuICBtYWluZGl2LmFwcGVuZENoaWxkKHNwYWNlcik7XG59XG5cbmV4cG9ydCB7IHJlbmRlclNwYWNlciB9O1xuIiwiaW1wb3J0IHsgY3JlYXRlSFRNTGVsZW1lbnQgfSBmcm9tIFwiLi9jcmVhdGVFbGVtZW50c1wiO1xuaW1wb3J0IHsgbWFpbmRpdiB9IGZyb20gXCIuLi9pbmRleFwiO1xuaW1wb3J0IEl0ZW0xIGZyb20gXCIuLi9pbWcvaXRlbTEucG5nXCI7XG5pbXBvcnQgSXRlbTIgZnJvbSBcIi4uL2ltZy9pdGVtMi5wbmdcIjtcbmltcG9ydCBJdGVtMyBmcm9tIFwiLi4vaW1nL2l0ZW0zLnBuZ1wiO1xuaW1wb3J0IEl0ZW00IGZyb20gXCIuLi9pbWcvaXRlbTQucG5nXCI7XG5pbXBvcnQgSXRlbTUgZnJvbSBcIi4uL2ltZy9pdGVtNS5wbmdcIjtcbmltcG9ydCBJdGVtNiBmcm9tIFwiLi4vaW1nL2l0ZW02LnBuZ1wiO1xuaW1wb3J0IEl0ZW03IGZyb20gXCIuLi9pbWcvaXRlbTcucG5nXCI7XG5pbXBvcnQgSXRlbTggZnJvbSBcIi4uL2ltZy9pdGVtOC5wbmdcIjtcbmltcG9ydCBJdGVtOSBmcm9tIFwiLi4vaW1nL2l0ZW05LnBuZ1wiO1xuaW1wb3J0IEl0ZW0xMCBmcm9tIFwiLi4vaW1nL2l0ZW0xMC5wbmdcIjtcbmltcG9ydCBJdGVtMTEgZnJvbSBcIi4uL2ltZy9pdGVtMTEucG5nXCI7XG5pbXBvcnQgSXRlbTEyIGZyb20gXCIuLi9pbWcvaXRlbTEyLnBuZ1wiO1xuXG4vKiBDcmVhdGVzIGEgc3RvcmUgKi9cbmZ1bmN0aW9uIHJlbmRlclN0b3JlKCkge1xuICAvKiBzdG9yZSBjb250YWluZXIgZWxlbWVudCAqL1xuICBjb25zdCBzdG9yZSA9IGNyZWF0ZUhUTUxlbGVtZW50KFwiZGl2XCIsIFwic3RvcmVcIiwgXCJcIiwgXCJcIik7XG5cbiAgLyogaXRlbXMgaW1hZ2VzICovXG4gIGNvbnN0IGl0ZW1zID0gW1xuICAgIEl0ZW0xLFxuICAgIEl0ZW0yLFxuICAgIEl0ZW0zLFxuICAgIEl0ZW00LFxuICAgIEl0ZW01LFxuICAgIEl0ZW02LFxuICAgIEl0ZW03LFxuICAgIEl0ZW04LFxuICAgIEl0ZW05LFxuICAgIEl0ZW0xMCxcbiAgICBJdGVtMTEsXG4gICAgSXRlbTEyLFxuICBdO1xuXG4gIC8qIGl0ZW1zIHRleHRzICovXG4gIGNvbnN0IHRleHQgPSBbXG4gICAgXCJLYWRlciBMb2dvIE5hdnkgQjIgOC4yNVwiLFxuICAgIFwiVGhlb3RpcyBMb2dvIE1hbmRhcmluIEIyIDguMFwiLFxuICAgIFwiU3Bhbmt5IExvZ28gRm9yZXN0IEIyIDguNVwiLFxuICAgIFwiQ2lyY2xlIEplcmtzIEFsYnVtIEFydCBEZWNrIDkuNlwiLFxuICAgIFwiQ2lyY2xlIEplcmtzIFRlZSBXaGl0ZVwiLFxuICAgIFwiQ2FwaXRhbCBCIFN0cmlwZSBUZWUgR3JlZW4vWWVsbG93XCIsXG4gICAgXCJLYW1pa2F6ZSBUZWUgQmxhY2tcIixcbiAgICBcIkRvbWluYXRpb24gVGVlIEJsYWNrXCIsXG4gICAgXCJUaW1lcyBOZXcgQmxhY2sgU25hcGJhY2tcIixcbiAgICBcIkpvbGx5IE1hbiBSZWQgU29ja3NcIixcbiAgICBcIk1pc3R5IEZsaXAgU3RpY2tlclwiLFxuICAgIFwiQ2lyY2xlIEplcmtzIFN0aWNrZXJcIixcbiAgXTtcblxuICAvKiBpdGVtcyBwcmljZXMgKi9cbiAgY29uc3QgcHJpY2UgPSBbXG4gICAgXCIkIDcxXCIsXG4gICAgXCIkIDcxXCIsXG4gICAgXCIkIDczXCIsXG4gICAgXCIkIDc1XCIsXG4gICAgXCIkIDM1XCIsXG4gICAgXCIkIDQwXCIsXG4gICAgXCIkIDM1XCIsXG4gICAgXCIkIDM1XCIsXG4gICAgXCIkIDQwXCIsXG4gICAgXCIkIDEyXCIsXG4gICAgXCIkIDJcIixcbiAgICBcIiQgMlwiLFxuICBdO1xuXG4gIGxldCBpID0gMDtcbiAgaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGNvbnN0IHBsYWNlaG9sZGVyID0gY3JlYXRlSFRNTGVsZW1lbnQoXCJkaXZcIiwgXCJcIiwgW1wicGxhY2Vob2xkZXJcIl0sIFwiXCIpO1xuXG4gICAgLyogaW1hZ2UgKi9cbiAgICBjb25zdCBwbGFjZWhvbGRlcl9pbWcgPSBjcmVhdGVIVE1MZWxlbWVudChcImltZ1wiLCBcIlwiLCBbXCJza2F0ZV9pbWdcIl0sIFwiXCIpO1xuICAgIHBsYWNlaG9sZGVyX2ltZy5zcmMgPSBpdGVtO1xuICAgIHBsYWNlaG9sZGVyLmFwcGVuZENoaWxkKHBsYWNlaG9sZGVyX2ltZyk7XG5cbiAgICAvKiB0ZXh0ICovXG4gICAgY29uc3QgcGxhY2Vob2xkZXJfdHh0ID0gY3JlYXRlSFRNTGVsZW1lbnQoXCJwXCIsIFwiXCIsIFtcInNrYXRlX3R4dFwiXSwgdGV4dFtpXSk7XG4gICAgcGxhY2Vob2xkZXIuYXBwZW5kQ2hpbGQocGxhY2Vob2xkZXJfdHh0KTtcblxuICAgIC8qIHByaWNlICovXG4gICAgY29uc3QgcGxhY2Vob2xkZXJfcHJpY2UgPSBjcmVhdGVIVE1MZWxlbWVudChcbiAgICAgIFwicFwiLFxuICAgICAgXCJcIixcbiAgICAgIFtcInNrYXRlX3ByaWNlXCJdLFxuICAgICAgcHJpY2VbaV1cbiAgICApO1xuICAgIHBsYWNlaG9sZGVyLmFwcGVuZENoaWxkKHBsYWNlaG9sZGVyX3ByaWNlKTtcblxuICAgIHN0b3JlLmFwcGVuZENoaWxkKHBsYWNlaG9sZGVyKTtcbiAgICBpKys7XG4gIH0pO1xuICAvKiBBcHBlbmQgdG8gdGhlIERPTSAqL1xuICBtYWluZGl2LmFwcGVuZENoaWxkKHN0b3JlKTtcbn1cblxuZXhwb3J0IHsgcmVuZGVyU3RvcmUgfTtcbiIsImltcG9ydCB7IHJlbmRlckFubm91bmNlbWVudEJhciB9IGZyb20gXCIuL2Z1bmN0aW9ucy9hbm5vdW5jZW1lbnRCYXJcIjtcbmltcG9ydCB7IHJlbmRlck5hdiB9IGZyb20gXCIuL2Z1bmN0aW9ucy9uYXZiYXJcIjtcbmltcG9ydCB7IHJlbmRlclNwYWNlciB9IGZyb20gXCIuL2Z1bmN0aW9ucy9zcGFjZXJcIjtcbmltcG9ydCB7IHJlbmRlclN0b3JlIH0gZnJvbSBcIi4vZnVuY3Rpb25zL3N0b3JlXCI7XG5cbi8qIE1haW4gZGl2LCBjb250YWlucyBldmVyeXRoaW5nICovXG5jb25zdCBtYWluZGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xucmVuZGVyQW5ub3VuY2VtZW50QmFyKCk7XG5yZW5kZXJOYXYoKTtcbnJlbmRlclNwYWNlcigpO1xucmVuZGVyU3RvcmUoKTtcbmV4cG9ydCB7IG1haW5kaXYgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9