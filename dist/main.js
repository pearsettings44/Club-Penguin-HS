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


/* Main div, contains everything */
const maindiv = document.getElementById("content");
(0,_functions_announcementBar__WEBPACK_IMPORTED_MODULE_0__.renderAnnouncementBar)();



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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQXFEO0FBQ2xCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGtFQUFpQjtBQUNsQyx5QkFBeUIsa0VBQWlCO0FBQzFDO0FBQ0E7QUFDQSxFQUFFLHVEQUFtQjtBQUNyQjs7QUFFaUM7Ozs7Ozs7Ozs7Ozs7OztBQ2JqQztBQUNBO0FBQ0EsNENBQTRDLElBQUk7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRTZCOzs7Ozs7Ozs7Ozs7Ozs7O0FDZHVDOztBQUVwRTtBQUNBO0FBQ0EsaUZBQXFCO0FBQ0Y7Ozs7Ozs7VUNMbkI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbHViLXBlbmd1aW4taHMvLi9zcmMvZnVuY3Rpb25zL2Fubm91bmNlbWVudEJhci5qcyIsIndlYnBhY2s6Ly9jbHViLXBlbmd1aW4taHMvLi9zcmMvZnVuY3Rpb25zL2NyZWF0ZUVsZW1lbnRzLmpzIiwid2VicGFjazovL2NsdWItcGVuZ3Vpbi1ocy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9jbHViLXBlbmd1aW4taHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY2x1Yi1wZW5ndWluLWhzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jbHViLXBlbmd1aW4taHMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9jbHViLXBlbmd1aW4taHMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jbHViLXBlbmd1aW4taHMvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9jbHViLXBlbmd1aW4taHMvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2NsdWItcGVuZ3Vpbi1ocy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlSFRNTGVsZW1lbnQgfSBmcm9tIFwiLi9jcmVhdGVFbGVtZW50c1wiO1xuaW1wb3J0IHsgbWFpbmRpdiB9IGZyb20gXCIuLi9pbmRleFwiO1xuLyogQ3JlYXRlcyBhIG5hdmJhciB3aXRoIEhvbWUsIE1lbnUgYW5kIEFib3V0IHBhZ2VzICovXG5mdW5jdGlvbiByZW5kZXJBbm5vdW5jZW1lbnRCYXIoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBcIkNMSUNLIFRPIFdBVENIIFRIRSBCQUtFUiBWSURFTyBXSVRIIFRZU09OIEFORCBULUZVTktcIjtcbiAgY29uc3QgdmlkZW8gPSBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9ZEdDb3BrcFl1T2cmdD0xMnNcIjtcbiAgY29uc3QgaGVhZGVyID0gY3JlYXRlSFRNTGVsZW1lbnQoXCJoZWFkZXJcIiwgXCJoZWFkZXJcIiwgXCJcIiwgXCJcIik7XG4gIGNvbnN0IGhlYWRlcl9jb250ZW50ID0gY3JlYXRlSFRNTGVsZW1lbnQoXCJhXCIsIFwiaGVhZGVyX3ZpZGVvXCIsIFwiXCIsIGNvbnRlbnQpO1xuICBoZWFkZXJfY29udGVudC5ocmVmID0gdmlkZW87XG4gIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJfY29udGVudCk7XG4gIG1haW5kaXYuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbn1cblxuZXhwb3J0IHsgcmVuZGVyQW5ub3VuY2VtZW50QmFyIH07XG4iLCJmdW5jdGlvbiBjcmVhdGVIVE1MZWxlbWVudCh0YWcsIGlkLCBjbGFzc2VzLCBjb250ZW50KSB7XG4gIC8qIGNyZWF0ZXMgYW4gZWxlbWVudCB3aXRoIHRoZSBzcGVjaWZpZWQgdGFnKi9cbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYCR7dGFnfWApO1xuICAvKiBpZiBhbiBpZCB3YXMgcGFzc2VkLCBhdHRyaWJ1dGUgaXQgdG8gdGhlIGVsZW1lbnQgKi9cbiAgaWYgKGlkKSBlbGVtZW50LmlkID0gaWQ7XG4gIC8qIGlmIGNsYXNzZXMgd2VyZSBwYXNzZWQsIGF0dHJpYnV0ZSB0aGVtIHRvIHRoZSBlbGVtZW50ICovXG4gIGlmIChjbGFzc2VzKSB7XG4gICAgZm9yIChjb25zdCBpbmRleCBpbiBjbGFzc2VzKSBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3Nlc1tpbmRleF0pO1xuICB9XG4gIC8qIGlmIGNvbnRlbnQgd2FzIHBhc3NlZCwgYXR0cmlidXRlIGl0IHRvIHRoZSBlbGVtZW50ICovXG4gIGlmIChjb250ZW50KSBlbGVtZW50LmlubmVySFRNTCA9IGNvbnRlbnQ7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5leHBvcnQgeyBjcmVhdGVIVE1MZWxlbWVudCB9O1xuIiwiaW1wb3J0IHsgcmVuZGVyQW5ub3VuY2VtZW50QmFyIH0gZnJvbSBcIi4vZnVuY3Rpb25zL2Fubm91bmNlbWVudEJhclwiO1xuXG4vKiBNYWluIGRpdiwgY29udGFpbnMgZXZlcnl0aGluZyAqL1xuY29uc3QgbWFpbmRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbnJlbmRlckFubm91bmNlbWVudEJhcigpO1xuZXhwb3J0IHsgbWFpbmRpdiB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==