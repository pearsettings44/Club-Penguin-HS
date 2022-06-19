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




/* Main div, contains everything */
const maindiv = document.getElementById("content");
(0,_functions_announcementBar__WEBPACK_IMPORTED_MODULE_0__.renderAnnouncementBar)();
(0,_functions_navbar__WEBPACK_IMPORTED_MODULE_1__.renderNav)();
(0,_functions_spacer__WEBPACK_IMPORTED_MODULE_2__.renderSpacer)();



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQXFEO0FBQ2xCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixrRUFBaUI7QUFDbEMseUJBQXlCLGtFQUFpQjs7QUFFMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLHVEQUFtQjtBQUNyQjs7QUFFaUM7Ozs7Ozs7Ozs7Ozs7OztBQ2pCakM7QUFDQTtBQUNBLDRDQUE0QyxJQUFJO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUU2Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2R3QjtBQUNsQjtBQUNBO0FBQ0M7QUFDRDtBQUNJO0FBQ047O0FBRWpDO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixrRUFBaUI7O0FBRWxDO0FBQ0EsZUFBZSxrRUFBaUI7QUFDaEMsbUJBQW1CLGtFQUFpQjtBQUNwQyxpQkFBaUIsMENBQUk7QUFDckI7QUFDQTs7QUFFQTtBQUNBLGVBQWUsa0VBQWlCO0FBQ2hDLG1CQUFtQixrRUFBaUI7QUFDcEM7QUFDQSxpQkFBaUIsMkNBQUk7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0Isa0VBQWlCOztBQUVuQztBQUNBLDZCQUE2QixrRUFBaUI7QUFDOUMsbUJBQW1CLGtFQUFpQjtBQUNwQztBQUNBOztBQUVBO0FBQ0E7QUFDQSw0QkFBNEIsa0VBQWlCO0FBQzdDO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0Esa0JBQWtCLDBDQUFJLEVBQUUsNENBQU0sRUFBRSx5Q0FBRztBQUNuQzs7QUFFQTtBQUNBLHNCQUFzQixrRUFBaUI7QUFDdkMsMEJBQTBCLGtFQUFpQjtBQUMzQztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQSxFQUFFLHVEQUFtQjtBQUNyQjs7QUFFcUI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0RnQztBQUNsQjtBQUNuQztBQUNBO0FBQ0EsaUJBQWlCLGtFQUFpQjtBQUNsQztBQUNBLEVBQUUsdURBQW1CO0FBQ3JCOztBQUV3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVDRDO0FBQ3JCO0FBQ0c7O0FBRWxEO0FBQ0E7QUFDQSxpRkFBcUI7QUFDckIsNERBQVM7QUFDVCwrREFBWTtBQUNPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNUbkI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1VFZkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbHViLXBlbmd1aW4taHMvLi9zcmMvZnVuY3Rpb25zL2Fubm91bmNlbWVudEJhci5qcyIsIndlYnBhY2s6Ly9jbHViLXBlbmd1aW4taHMvLi9zcmMvZnVuY3Rpb25zL2NyZWF0ZUVsZW1lbnRzLmpzIiwid2VicGFjazovL2NsdWItcGVuZ3Vpbi1ocy8uL3NyYy9mdW5jdGlvbnMvbmF2YmFyLmpzIiwid2VicGFjazovL2NsdWItcGVuZ3Vpbi1ocy8uL3NyYy9mdW5jdGlvbnMvc3BhY2VyLmpzIiwid2VicGFjazovL2NsdWItcGVuZ3Vpbi1ocy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9jbHViLXBlbmd1aW4taHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY2x1Yi1wZW5ndWluLWhzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jbHViLXBlbmd1aW4taHMvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9jbHViLXBlbmd1aW4taHMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9jbHViLXBlbmd1aW4taHMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jbHViLXBlbmd1aW4taHMvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vY2x1Yi1wZW5ndWluLWhzL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vY2x1Yi1wZW5ndWluLWhzL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9jbHViLXBlbmd1aW4taHMvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUhUTUxlbGVtZW50IH0gZnJvbSBcIi4vY3JlYXRlRWxlbWVudHNcIjtcbmltcG9ydCB7IG1haW5kaXYgfSBmcm9tIFwiLi4vaW5kZXhcIjtcbi8qIENyZWF0ZXMgYW4gYW5ub3VuY2VtZW50IGJhciAqL1xuZnVuY3Rpb24gcmVuZGVyQW5ub3VuY2VtZW50QmFyKCkge1xuICBjb25zdCBjb250ZW50ID0gXCJDTElDSyBUTyBXQVRDSCBUSEUgQkFLRVIgVklERU8gV0lUSCBUWVNPTiBBTkQgVC1GVU5LXCI7XG4gIGNvbnN0IHZpZGVvID0gXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PWRHQ29wa3BZdU9nJnQ9MTJzXCI7XG5cbiAgY29uc3QgaGVhZGVyID0gY3JlYXRlSFRNTGVsZW1lbnQoXCJoZWFkZXJcIiwgXCJoZWFkZXJcIiwgXCJcIiwgXCJcIik7XG4gIGNvbnN0IGhlYWRlcl9jb250ZW50ID0gY3JlYXRlSFRNTGVsZW1lbnQoXCJhXCIsIFwiaGVhZGVyX3ZpZGVvXCIsIFwiXCIsIGNvbnRlbnQpO1xuXG4gIGhlYWRlcl9jb250ZW50LmhyZWYgPSB2aWRlbztcbiAgaGVhZGVyX2NvbnRlbnQudGFyZ2V0ID0gXCJfYmxhbmtcIjtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlcl9jb250ZW50KTtcbiAgLyogQXBwZW5kIHRvIHRoZSBET00gKi9cbiAgbWFpbmRpdi5hcHBlbmRDaGlsZChoZWFkZXIpO1xufVxuXG5leHBvcnQgeyByZW5kZXJBbm5vdW5jZW1lbnRCYXIgfTtcbiIsImZ1bmN0aW9uIGNyZWF0ZUhUTUxlbGVtZW50KHRhZywgaWQsIGNsYXNzZXMsIGNvbnRlbnQpIHtcbiAgLyogY3JlYXRlcyBhbiBlbGVtZW50IHdpdGggdGhlIHNwZWNpZmllZCB0YWcqL1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgJHt0YWd9YCk7XG4gIC8qIGlmIGFuIGlkIHdhcyBwYXNzZWQsIGF0dHJpYnV0ZSBpdCB0byB0aGUgZWxlbWVudCAqL1xuICBpZiAoaWQpIGVsZW1lbnQuaWQgPSBpZDtcbiAgLyogaWYgY2xhc3NlcyB3ZXJlIHBhc3NlZCwgYXR0cmlidXRlIHRoZW0gdG8gdGhlIGVsZW1lbnQgKi9cbiAgaWYgKGNsYXNzZXMpIHtcbiAgICBmb3IgKGNvbnN0IGluZGV4IGluIGNsYXNzZXMpIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc2VzW2luZGV4XSk7XG4gIH1cbiAgLyogaWYgY29udGVudCB3YXMgcGFzc2VkLCBhdHRyaWJ1dGUgaXQgdG8gdGhlIGVsZW1lbnQgKi9cbiAgaWYgKGNvbnRlbnQpIGVsZW1lbnQuaW5uZXJIVE1MID0gY29udGVudDtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZUhUTUxlbGVtZW50IH07XG4iLCJpbXBvcnQgeyBjcmVhdGVIVE1MZWxlbWVudCB9IGZyb20gXCIuL2NyZWF0ZUVsZW1lbnRzXCI7XG5pbXBvcnQgeyBtYWluZGl2IH0gZnJvbSBcIi4uL2luZGV4XCI7XG5pbXBvcnQgTWVudSBmcm9tIFwiLi4vaW1nL21lbnUucG5nXCI7XG5pbXBvcnQgTG9nbyBmcm9tIFwiLi4vaW1nL2Jha2VyLnBuZ1wiO1xuaW1wb3J0IFVzZXIgZnJvbSBcIi4uL2ltZy91c2VyLnBuZ1wiO1xuaW1wb3J0IFNlYXJjaCBmcm9tIFwiLi4vaW1nL3NlYXJjaC5wbmdcIjtcbmltcG9ydCBCYWcgZnJvbSBcIi4uL2ltZy9iYWcucG5nXCI7XG5cbi8qIENyZWF0ZXMgYSBuYXZiYXIgd2l0aCBtZW51LCBsb2dvLCBjdXJyZW5jeSwgdXNlciwgc2VhcmNoIGFuZCBzaG9wcGluZyBiYWcgKi9cbmZ1bmN0aW9uIHJlbmRlck5hdigpIHtcbiAgLyogbmF2YmFyIGVsZW1lbnQgKi9cbiAgY29uc3QgbmF2YmFyID0gY3JlYXRlSFRNTGVsZW1lbnQoXCJuYXZcIiwgXCJuYXZiYXJcIik7XG5cbiAgLyogbWVudSAqL1xuICBjb25zdCBtZW51ID0gY3JlYXRlSFRNTGVsZW1lbnQoXCJkaXZcIiwgXCJtZW51XCIsIFwiXCIsIFwiXCIpO1xuICBjb25zdCBtZW51X2ltZyA9IGNyZWF0ZUhUTUxlbGVtZW50KFwiaW1nXCIsIFwiXCIsIFwiXCIsIFwiXCIpO1xuICBtZW51X2ltZy5zcmMgPSBNZW51O1xuICBtZW51LmFwcGVuZENoaWxkKG1lbnVfaW1nKTtcbiAgbmF2YmFyLmFwcGVuZENoaWxkKG1lbnUpO1xuXG4gIC8qIGxvZ28gKi9cbiAgY29uc3QgbG9nbyA9IGNyZWF0ZUhUTUxlbGVtZW50KFwiYVwiLCBcImxvZ29cIiwgXCJcIiwgXCJcIik7XG4gIGNvbnN0IGxvZ29faW1nID0gY3JlYXRlSFRNTGVsZW1lbnQoXCJpbWdcIiwgXCJcIiwgXCJcIiwgXCJcIik7XG4gIGNvbnN0IHZpZGVvQmFrZXIgPSBcImh0dHBzOi8vYmFrZXJza2F0ZWJvYXJkcy5jb20vXCI7XG4gIGxvZ29faW1nLnNyYyA9IExvZ287XG4gIGxvZ28uaHJlZiA9IHZpZGVvQmFrZXI7XG4gIGxvZ28udGFyZ2V0ID0gXCJfYmxhbmtcIjtcbiAgbG9nby5hcHBlbmRDaGlsZChsb2dvX2ltZyk7XG4gIG5hdmJhci5hcHBlbmRDaGlsZChsb2dvKTtcblxuICAvKiBvcHRpb25zICovXG4gIGNvbnN0IG9wdGlvbnMgPSBjcmVhdGVIVE1MZWxlbWVudChcImRpdlwiLCBcIm9wdGlvbnNcIiwgXCJcIiwgXCJcIik7XG5cbiAgLyogZHJvcGRvd24gbWVudSAqL1xuICBjb25zdCBkcm9wZG93bl9jb250YWluZXIgPSBjcmVhdGVIVE1MZWxlbWVudChcImRpdlwiLCBcIlwiLCBcIlwiLCBcIlwiKTtcbiAgY29uc3QgZHJvcGRvd24gPSBjcmVhdGVIVE1MZWxlbWVudChcInNlbGVjdFwiLCBcImRyb3Bkb3duXCIsIFwiXCIsIFwiXCIpO1xuICBkcm9wZG93bl9jb250YWluZXIuYXBwZW5kQ2hpbGQoZHJvcGRvd24pOyBcbiAgb3B0aW9ucy5hcHBlbmRDaGlsZChkcm9wZG93bl9jb250YWluZXIpO1xuXG4gIGNvbnN0IGRyb3Bkb3duX29wdGlvbnMgPSBbXCJVU0RcIiwgXCJDQURcIiwgXCJFVVJcIiwgXCJHQlBcIl07XG4gIGRyb3Bkb3duX29wdGlvbnMuZm9yRWFjaCgoY3VycmVuY3kpID0+IHtcbiAgICBjb25zdCBkcm9wZG93bl9vcHRpb24gPSBjcmVhdGVIVE1MZWxlbWVudChcIm9wdGlvblwiLCBcIlwiLCBcIlwiLCBjdXJyZW5jeSk7XG4gICAgZHJvcGRvd24uYXBwZW5kQ2hpbGQoZHJvcGRvd25fb3B0aW9uKTtcbiAgfSk7XG5cbiAgLyogb3B0aW9ucyBpdGVtcyAodXNlciwgc2VhcmNoLCBiYWcpICovXG4gIGNvbnN0IGl0ZW1zID0gW1widXNlclwiLCBcInNlYXJjaFwiLCBcImJhZ1wiXTtcbiAgY29uc3QgaW1hZ2VzID0gW1VzZXIsIFNlYXJjaCwgQmFnXTtcbiAgbGV0IGkgPSAwO1xuXG4gIGl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBjb25zdCBsaXN0X2l0ZW0gPSBjcmVhdGVIVE1MZWxlbWVudChcImRpdlwiLCBpdGVtLCBcIlwiLCBcIlwiKTtcbiAgICBjb25zdCBsaXN0X2l0ZW1faW1nID0gY3JlYXRlSFRNTGVsZW1lbnQoXCJpbWdcIiwgXCJcIiwgXCJcIiwgXCJcIik7XG4gICAgbGlzdF9pdGVtX2ltZy5zcmMgPSBpbWFnZXNbaSsrXTtcbiAgICBsaXN0X2l0ZW0uYXBwZW5kQ2hpbGQobGlzdF9pdGVtX2ltZyk7XG4gICAgb3B0aW9ucy5hcHBlbmRDaGlsZChsaXN0X2l0ZW0pO1xuICB9KTtcbiAgbmF2YmFyLmFwcGVuZENoaWxkKG9wdGlvbnMpO1xuXG4gIC8qIEFwcGVuZCB0byB0aGUgRE9NICovXG4gIG1haW5kaXYuYXBwZW5kQ2hpbGQobmF2YmFyKTtcbn1cblxuZXhwb3J0IHsgcmVuZGVyTmF2IH07XG4iLCJpbXBvcnQgeyBjcmVhdGVIVE1MZWxlbWVudCB9IGZyb20gXCIuL2NyZWF0ZUVsZW1lbnRzXCI7XG5pbXBvcnQgeyBtYWluZGl2IH0gZnJvbSBcIi4uL2luZGV4XCI7XG4vKiBDcmVhdGVzIGEgbGl0dGxlIHNwYWNlciAqL1xuZnVuY3Rpb24gcmVuZGVyU3BhY2VyKCkge1xuICBjb25zdCBzcGFjZXIgPSBjcmVhdGVIVE1MZWxlbWVudChcImRpdlwiLCBcInNwYWNlclwiLCBcIlwiLCBcIi1cIik7XG4gIC8qIEFwcGVuZCB0byB0aGUgRE9NICovXG4gIG1haW5kaXYuYXBwZW5kQ2hpbGQoc3BhY2VyKTtcbn1cblxuZXhwb3J0IHsgcmVuZGVyU3BhY2VyIH07XG4iLCJpbXBvcnQgeyByZW5kZXJBbm5vdW5jZW1lbnRCYXIgfSBmcm9tIFwiLi9mdW5jdGlvbnMvYW5ub3VuY2VtZW50QmFyXCI7XG5pbXBvcnQgeyByZW5kZXJOYXYgfSBmcm9tIFwiLi9mdW5jdGlvbnMvbmF2YmFyXCI7XG5pbXBvcnQgeyByZW5kZXJTcGFjZXIgfSBmcm9tIFwiLi9mdW5jdGlvbnMvc3BhY2VyXCI7XG5cbi8qIE1haW4gZGl2LCBjb250YWlucyBldmVyeXRoaW5nICovXG5jb25zdCBtYWluZGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xucmVuZGVyQW5ub3VuY2VtZW50QmFyKCk7XG5yZW5kZXJOYXYoKTtcbnJlbmRlclNwYWNlcigpO1xuZXhwb3J0IHsgbWFpbmRpdiB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=