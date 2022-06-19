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


/* Creates a navbar with Home, Menu and About pages */
function renderAnnouncementBar() {
  const content = "CLICK TO WATCH THE BAKER VIDEO WITH TYSON AND T-FUNK";
  const video = "https://www.youtube.com/watch?v=dGCopkpYuOg&t=12s";

  const header = (0,_createElements__WEBPACK_IMPORTED_MODULE_0__.createHTMLelement)("header", "header", "", "");
  const header_content = (0,_createElements__WEBPACK_IMPORTED_MODULE_0__.createHTMLelement)("a", "header_video", "", content);

  header_content.href = video;
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
  const logo = (0,_createElements__WEBPACK_IMPORTED_MODULE_0__.createHTMLelement)("div", "logo", "", "");
  const logo_img = (0,_createElements__WEBPACK_IMPORTED_MODULE_0__.createHTMLelement)("img", "", "", "");
  logo_img.src = _img_baker_png__WEBPACK_IMPORTED_MODULE_3__;
  logo.appendChild(logo_img);
  navbar.appendChild(logo);

  /* options */
  const options = (0,_createElements__WEBPACK_IMPORTED_MODULE_0__.createHTMLelement)("div", "options", "", "");

  /* dropdown menu */
  const dropdown_container = (0,_createElements__WEBPACK_IMPORTED_MODULE_0__.createHTMLelement)("div", "", "", "")
  const dropdown = (0,_createElements__WEBPACK_IMPORTED_MODULE_0__.createHTMLelement)("select", "dropdown", "", "");
  dropdown_container.appendChild(dropdown)
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



/* Main div, contains everything */
const maindiv = document.getElementById("content");
(0,_functions_announcementBar__WEBPACK_IMPORTED_MODULE_0__.renderAnnouncementBar)();
(0,_functions_navbar__WEBPACK_IMPORTED_MODULE_1__.renderNav)();



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQXFEO0FBQ2xCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixrRUFBaUI7QUFDbEMseUJBQXlCLGtFQUFpQjs7QUFFMUM7QUFDQTtBQUNBO0FBQ0EsRUFBRSx1REFBbUI7QUFDckI7O0FBRWlDOzs7Ozs7Ozs7Ozs7Ozs7QUNoQmpDO0FBQ0E7QUFDQSw0Q0FBNEMsSUFBSTtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFNkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkd0I7QUFDbEI7QUFDQTtBQUNDO0FBQ0Q7QUFDSTtBQUNOOztBQUVqQztBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsa0VBQWlCOztBQUVsQztBQUNBLGVBQWUsa0VBQWlCO0FBQ2hDLG1CQUFtQixrRUFBaUI7QUFDcEMsaUJBQWlCLDBDQUFJO0FBQ3JCO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLGtFQUFpQjtBQUNoQyxtQkFBbUIsa0VBQWlCO0FBQ3BDLGlCQUFpQiwyQ0FBSTtBQUNyQjtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLGtFQUFpQjs7QUFFbkM7QUFDQSw2QkFBNkIsa0VBQWlCO0FBQzlDLG1CQUFtQixrRUFBaUI7QUFDcEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNEJBQTRCLGtFQUFpQjtBQUM3QztBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLGtCQUFrQiwwQ0FBSSxFQUFFLDRDQUFNLEVBQUUseUNBQUc7QUFDbkM7O0FBRUE7QUFDQSxzQkFBc0Isa0VBQWlCO0FBQ3ZDLDBCQUEwQixrRUFBaUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0EsRUFBRSx1REFBbUI7QUFDckI7O0FBRXFCOzs7Ozs7Ozs7Ozs7Ozs7OztBQzVEK0M7QUFDckI7O0FBRS9DO0FBQ0E7QUFDQSxpRkFBcUI7QUFDckIsNERBQVM7QUFDVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDUG5CO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztVRWZBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2x1Yi1wZW5ndWluLWhzLy4vc3JjL2Z1bmN0aW9ucy9hbm5vdW5jZW1lbnRCYXIuanMiLCJ3ZWJwYWNrOi8vY2x1Yi1wZW5ndWluLWhzLy4vc3JjL2Z1bmN0aW9ucy9jcmVhdGVFbGVtZW50cy5qcyIsIndlYnBhY2s6Ly9jbHViLXBlbmd1aW4taHMvLi9zcmMvZnVuY3Rpb25zL25hdmJhci5qcyIsIndlYnBhY2s6Ly9jbHViLXBlbmd1aW4taHMvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2x1Yi1wZW5ndWluLWhzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2NsdWItcGVuZ3Vpbi1ocy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY2x1Yi1wZW5ndWluLWhzL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vY2x1Yi1wZW5ndWluLWhzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vY2x1Yi1wZW5ndWluLWhzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY2x1Yi1wZW5ndWluLWhzL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2NsdWItcGVuZ3Vpbi1ocy93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2NsdWItcGVuZ3Vpbi1ocy93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vY2x1Yi1wZW5ndWluLWhzL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVIVE1MZWxlbWVudCB9IGZyb20gXCIuL2NyZWF0ZUVsZW1lbnRzXCI7XG5pbXBvcnQgeyBtYWluZGl2IH0gZnJvbSBcIi4uL2luZGV4XCI7XG4vKiBDcmVhdGVzIGEgbmF2YmFyIHdpdGggSG9tZSwgTWVudSBhbmQgQWJvdXQgcGFnZXMgKi9cbmZ1bmN0aW9uIHJlbmRlckFubm91bmNlbWVudEJhcigpIHtcbiAgY29uc3QgY29udGVudCA9IFwiQ0xJQ0sgVE8gV0FUQ0ggVEhFIEJBS0VSIFZJREVPIFdJVEggVFlTT04gQU5EIFQtRlVOS1wiO1xuICBjb25zdCB2aWRlbyA9IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1kR0NvcGtwWXVPZyZ0PTEyc1wiO1xuXG4gIGNvbnN0IGhlYWRlciA9IGNyZWF0ZUhUTUxlbGVtZW50KFwiaGVhZGVyXCIsIFwiaGVhZGVyXCIsIFwiXCIsIFwiXCIpO1xuICBjb25zdCBoZWFkZXJfY29udGVudCA9IGNyZWF0ZUhUTUxlbGVtZW50KFwiYVwiLCBcImhlYWRlcl92aWRlb1wiLCBcIlwiLCBjb250ZW50KTtcblxuICBoZWFkZXJfY29udGVudC5ocmVmID0gdmlkZW87XG4gIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJfY29udGVudCk7XG4gIC8qIEFwcGVuZCB0byB0aGUgRE9NICovXG4gIG1haW5kaXYuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbn1cblxuZXhwb3J0IHsgcmVuZGVyQW5ub3VuY2VtZW50QmFyIH07XG4iLCJmdW5jdGlvbiBjcmVhdGVIVE1MZWxlbWVudCh0YWcsIGlkLCBjbGFzc2VzLCBjb250ZW50KSB7XG4gIC8qIGNyZWF0ZXMgYW4gZWxlbWVudCB3aXRoIHRoZSBzcGVjaWZpZWQgdGFnKi9cbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYCR7dGFnfWApO1xuICAvKiBpZiBhbiBpZCB3YXMgcGFzc2VkLCBhdHRyaWJ1dGUgaXQgdG8gdGhlIGVsZW1lbnQgKi9cbiAgaWYgKGlkKSBlbGVtZW50LmlkID0gaWQ7XG4gIC8qIGlmIGNsYXNzZXMgd2VyZSBwYXNzZWQsIGF0dHJpYnV0ZSB0aGVtIHRvIHRoZSBlbGVtZW50ICovXG4gIGlmIChjbGFzc2VzKSB7XG4gICAgZm9yIChjb25zdCBpbmRleCBpbiBjbGFzc2VzKSBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3Nlc1tpbmRleF0pO1xuICB9XG4gIC8qIGlmIGNvbnRlbnQgd2FzIHBhc3NlZCwgYXR0cmlidXRlIGl0IHRvIHRoZSBlbGVtZW50ICovXG4gIGlmIChjb250ZW50KSBlbGVtZW50LmlubmVySFRNTCA9IGNvbnRlbnQ7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5leHBvcnQgeyBjcmVhdGVIVE1MZWxlbWVudCB9O1xuIiwiaW1wb3J0IHsgY3JlYXRlSFRNTGVsZW1lbnQgfSBmcm9tIFwiLi9jcmVhdGVFbGVtZW50c1wiO1xuaW1wb3J0IHsgbWFpbmRpdiB9IGZyb20gXCIuLi9pbmRleFwiO1xuaW1wb3J0IE1lbnUgZnJvbSBcIi4uL2ltZy9tZW51LnBuZ1wiO1xuaW1wb3J0IExvZ28gZnJvbSBcIi4uL2ltZy9iYWtlci5wbmdcIjtcbmltcG9ydCBVc2VyIGZyb20gXCIuLi9pbWcvdXNlci5wbmdcIjtcbmltcG9ydCBTZWFyY2ggZnJvbSBcIi4uL2ltZy9zZWFyY2gucG5nXCI7XG5pbXBvcnQgQmFnIGZyb20gXCIuLi9pbWcvYmFnLnBuZ1wiO1xuXG4vKiBDcmVhdGVzIGEgbmF2YmFyIHdpdGggbWVudSwgbG9nbywgY3VycmVuY3ksIHVzZXIsIHNlYXJjaCBhbmQgc2hvcHBpbmcgYmFnICovXG5mdW5jdGlvbiByZW5kZXJOYXYoKSB7XG4gIC8qIG5hdmJhciBlbGVtZW50ICovXG4gIGNvbnN0IG5hdmJhciA9IGNyZWF0ZUhUTUxlbGVtZW50KFwibmF2XCIsIFwibmF2YmFyXCIpO1xuXG4gIC8qIG1lbnUgKi9cbiAgY29uc3QgbWVudSA9IGNyZWF0ZUhUTUxlbGVtZW50KFwiZGl2XCIsIFwibWVudVwiLCBcIlwiLCBcIlwiKTtcbiAgY29uc3QgbWVudV9pbWcgPSBjcmVhdGVIVE1MZWxlbWVudChcImltZ1wiLCBcIlwiLCBcIlwiLCBcIlwiKTtcbiAgbWVudV9pbWcuc3JjID0gTWVudTtcbiAgbWVudS5hcHBlbmRDaGlsZChtZW51X2ltZyk7XG4gIG5hdmJhci5hcHBlbmRDaGlsZChtZW51KTtcblxuICAvKiBsb2dvICovXG4gIGNvbnN0IGxvZ28gPSBjcmVhdGVIVE1MZWxlbWVudChcImRpdlwiLCBcImxvZ29cIiwgXCJcIiwgXCJcIik7XG4gIGNvbnN0IGxvZ29faW1nID0gY3JlYXRlSFRNTGVsZW1lbnQoXCJpbWdcIiwgXCJcIiwgXCJcIiwgXCJcIik7XG4gIGxvZ29faW1nLnNyYyA9IExvZ287XG4gIGxvZ28uYXBwZW5kQ2hpbGQobG9nb19pbWcpO1xuICBuYXZiYXIuYXBwZW5kQ2hpbGQobG9nbyk7XG5cbiAgLyogb3B0aW9ucyAqL1xuICBjb25zdCBvcHRpb25zID0gY3JlYXRlSFRNTGVsZW1lbnQoXCJkaXZcIiwgXCJvcHRpb25zXCIsIFwiXCIsIFwiXCIpO1xuXG4gIC8qIGRyb3Bkb3duIG1lbnUgKi9cbiAgY29uc3QgZHJvcGRvd25fY29udGFpbmVyID0gY3JlYXRlSFRNTGVsZW1lbnQoXCJkaXZcIiwgXCJcIiwgXCJcIiwgXCJcIilcbiAgY29uc3QgZHJvcGRvd24gPSBjcmVhdGVIVE1MZWxlbWVudChcInNlbGVjdFwiLCBcImRyb3Bkb3duXCIsIFwiXCIsIFwiXCIpO1xuICBkcm9wZG93bl9jb250YWluZXIuYXBwZW5kQ2hpbGQoZHJvcGRvd24pXG4gIG9wdGlvbnMuYXBwZW5kQ2hpbGQoZHJvcGRvd25fY29udGFpbmVyKTtcblxuICBjb25zdCBkcm9wZG93bl9vcHRpb25zID0gW1wiVVNEXCIsIFwiQ0FEXCIsIFwiRVVSXCIsIFwiR0JQXCJdO1xuICBkcm9wZG93bl9vcHRpb25zLmZvckVhY2goKGN1cnJlbmN5KSA9PiB7XG4gICAgY29uc3QgZHJvcGRvd25fb3B0aW9uID0gY3JlYXRlSFRNTGVsZW1lbnQoXCJvcHRpb25cIiwgXCJcIiwgXCJcIiwgY3VycmVuY3kpO1xuICAgIGRyb3Bkb3duLmFwcGVuZENoaWxkKGRyb3Bkb3duX29wdGlvbik7XG4gIH0pO1xuXG4gIC8qIG9wdGlvbnMgaXRlbXMgKHVzZXIsIHNlYXJjaCwgYmFnKSAqL1xuICBjb25zdCBpdGVtcyA9IFtcInVzZXJcIiwgXCJzZWFyY2hcIiwgXCJiYWdcIl07XG4gIGNvbnN0IGltYWdlcyA9IFtVc2VyLCBTZWFyY2gsIEJhZ107XG4gIGxldCBpID0gMDtcblxuICBpdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgY29uc3QgbGlzdF9pdGVtID0gY3JlYXRlSFRNTGVsZW1lbnQoXCJkaXZcIiwgaXRlbSwgXCJcIiwgXCJcIik7XG4gICAgY29uc3QgbGlzdF9pdGVtX2ltZyA9IGNyZWF0ZUhUTUxlbGVtZW50KFwiaW1nXCIsIFwiXCIsIFwiXCIsIFwiXCIpO1xuICAgIGxpc3RfaXRlbV9pbWcuc3JjID0gaW1hZ2VzW2krK107XG4gICAgbGlzdF9pdGVtLmFwcGVuZENoaWxkKGxpc3RfaXRlbV9pbWcpO1xuICAgIG9wdGlvbnMuYXBwZW5kQ2hpbGQobGlzdF9pdGVtKTtcbiAgfSk7XG4gIG5hdmJhci5hcHBlbmRDaGlsZChvcHRpb25zKTtcblxuICAvKiBBcHBlbmQgdG8gdGhlIERPTSAqL1xuICBtYWluZGl2LmFwcGVuZENoaWxkKG5hdmJhcik7XG59XG5cbmV4cG9ydCB7IHJlbmRlck5hdiB9O1xuIiwiaW1wb3J0IHsgcmVuZGVyQW5ub3VuY2VtZW50QmFyIH0gZnJvbSBcIi4vZnVuY3Rpb25zL2Fubm91bmNlbWVudEJhclwiO1xuaW1wb3J0IHsgcmVuZGVyTmF2IH0gZnJvbSBcIi4vZnVuY3Rpb25zL25hdmJhclwiO1xuXG4vKiBNYWluIGRpdiwgY29udGFpbnMgZXZlcnl0aGluZyAqL1xuY29uc3QgbWFpbmRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbnJlbmRlckFubm91bmNlbWVudEJhcigpO1xucmVuZGVyTmF2KCk7XG5leHBvcnQgeyBtYWluZGl2IH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==