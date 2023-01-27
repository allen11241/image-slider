/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/image-module.js":
/*!*****************************!*\
  !*** ./src/image-module.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ImageModule\": () => (/* binding */ ImageModule)\n/* harmony export */ });\nconst ImageModule = (function() {\n\n    let imageArray = [];\n    imageArray[0] = './img/aho1.png';\n    imageArray[1] = './img/aho2.png';\n    imageArray[2] = './img/aho3.png';\n    imageArray[3] = './img/aho4.png';\n    imageArray[4] = './img/aho5.png';\n\n    let currentPosition = 0;\n\n    const getCurrentPosition = () => {\n        return currentPosition;\n    }\n\n    const getPreviousImage = () => {\n        let nextPosition = currentPosition - 1;\n        if(currentPosition > 0) {\n            if(nextPosition === 0){\n                currentPosition = 0;\n            } else {\n                currentPosition -= 1;\n            }\n            return currentPosition;\n        } else {\n            currentPosition = imageArray.length -1;\n            return currentPosition;\n        }\n    }\n\n    const getNextImage = () => {\n        let nextPosition = currentPosition + 1;\n        if(currentPosition < imageArray.length) {\n            if(nextPosition === imageArray.length){\n                currentPosition = 0;\n            } else {\n                currentPosition += 1;\n            }\n            return currentPosition;\n        } else {\n            currentPosition = 0;\n            return currentPosition;\n        }\n    }\n\n    const getArrayCount = () => {\n        return imageArray.length;\n    }\n    \n    const getSelectedImage = (i) => {\n        currentPosition = i;\n        return imageArray[i];\n    }\n\n    const getImageAtIndex = (index) => {\n        return imageArray[index];\n    }\n\n    const addPosition = () => {\n        let nextPosition = currentPosition +=1;\n        if(nextPosition < imageArray.length) {\n            currentPosition = nextPosition;\n        } else {\n            currentPosition = 0;\n        }\n    }\n    \n    return {\n        getCurrentPosition,\n        getPreviousImage,\n        getNextImage,\n        getArrayCount,\n        getSelectedImage,\n        getImageAtIndex,\n        addPosition,\n    }\n    \n    })();\n    \n    \n\n//# sourceURL=webpack://image_slider/./src/image-module.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _init_slideshow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init-slideshow */ \"./src/init-slideshow.js\");\n\n\n(0,_init_slideshow__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack://image_slider/./src/index.js?");

/***/ }),

/***/ "./src/init-slideshow.js":
/*!*******************************!*\
  !*** ./src/init-slideshow.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _image_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./image-module */ \"./src/image-module.js\");\n\n\nconst CIRCLE = 'circle';\nconst IMAGE = 'image';\n\nfunction createFrame() {\n  const frame = document.createElement('div');\n  frame.classList.add('frame');\n  frame.setAttribute('id', 'frame');\n  for(let i = 0; i < _image_module__WEBPACK_IMPORTED_MODULE_0__.ImageModule.getArrayCount(); i++) {\n    const image = document.createElement('img');\n    image.setAttribute('id', IMAGE + i);\n    image.classList.add('frame-image');\n    image.src = _image_module__WEBPACK_IMPORTED_MODULE_0__.ImageModule.getImageAtIndex(i);\n    if(i === 0){\n      image.classList.add('image-selected');\n    }\n    frame.appendChild(image);\n  }\n  return frame;\n}\n\nfunction createContainer() {\n  const container = document.createElement('div');\n  container.classList.add('container');\n  container.appendChild(createFrame());\n  container.appendChild(createSlider());\n  return container;\n}\n\nfunction createSlider() {\n  const slider = document.createElement('div');\n  slider.classList.add('slider');\n  slider.setAttribute('id', 'slider');\n  slider.appendChild(createPreviousButton());\n  slider.appendChild(createCircles());\n  slider.appendChild(createNextButton());\n  return slider;\n}\n\nfunction createCircles() {\n  const circleContainer = document.createElement('div');\n  circleContainer.setAttribute('id', 'circle-container');\n  window.onload = () => {\n  for(let i = 0; i < _image_module__WEBPACK_IMPORTED_MODULE_0__.ImageModule.getArrayCount(); i++) {\n    const circle = document.createElement('div');\n    circle.classList.add('circle');\n    circle.setAttribute('id', CIRCLE + i.toString());\n    if(i === 0) {\n      circle.classList.add('circle-selected');\n    }\n    circle.addEventListener('click', function (){\n      deselectAllCircles();\n      circle.classList.add('circle-selected');\n      const selectedImage = document.getElementById(IMAGE + i);\n      addSelectedClass(selectedImage);\n    })\n    circleContainer.appendChild(circle);\n    }\n  }   \n  return circleContainer;\n}\n\nfunction deselectAllCircles() {\n  const circles = document.getElementsByClassName('circle');\n  for (let i = 0; i < circles.length; i++) {\n    circles[i].classList.remove('circle-selected');\n  }\n}\n\nfunction createPreviousButton() {\n  const btnPrevious = document.createElement('img');\n  btnPrevious.classList.add('slider-button');\n  btnPrevious.setAttribute('id', 'btn-previous');\n  btnPrevious.src = './img/nav_previous.svg';\n  btnPrevious.addEventListener('click', (function () {\n\n  const nextImage = document.getElementById(IMAGE + _image_module__WEBPACK_IMPORTED_MODULE_0__.ImageModule.getPreviousImage());\n  circleHandler(_image_module__WEBPACK_IMPORTED_MODULE_0__.ImageModule.getCurrentPosition());\n  addSelectedClass(nextImage);\n  }))\n  return btnPrevious;\n}\n\nfunction createNextButton() {\n  const btnNext = document.createElement('img');\n  btnNext.classList.add('slider-button');\n  btnNext.setAttribute('id', 'btn-next');\n  btnNext.src = './img/nav_next.svg';\n  btnNext.addEventListener('click', (function () {\n    const nextImage = document.getElementById(IMAGE + _image_module__WEBPACK_IMPORTED_MODULE_0__.ImageModule.getNextImage());\n    circleHandler(_image_module__WEBPACK_IMPORTED_MODULE_0__.ImageModule.getCurrentPosition());\n    addSelectedClass(nextImage);\n    }))\n  return btnNext;\n}\n\nfunction initSlideshow() {\n  const content = document.getElementById('content')\n  content.appendChild(createContainer());\n  startImageTimer();\n}\n\nfunction startImageTimer() {\n  setInterval(function() {\n    let currentPosition = _image_module__WEBPACK_IMPORTED_MODULE_0__.ImageModule.getCurrentPosition();\n    circleHandler(currentPosition);\n    const selectedImage = document.getElementById(IMAGE + currentPosition);\n    _image_module__WEBPACK_IMPORTED_MODULE_0__.ImageModule.addPosition();\n    addSelectedClass(selectedImage)\n  }, 5000);\n}\n\nfunction addSelectedClass(selectedImage) {\n  for(let i = 0; i < _image_module__WEBPACK_IMPORTED_MODULE_0__.ImageModule.getArrayCount(); i++) {\n    let image = document.getElementById(IMAGE + i);\n    if(image.classList.contains('image-selected')) {\n      image.classList.remove('image-selected');\n    }\n  }\n  selectedImage.classList.add('image-selected')\n}\n\nfunction circleHandler(currentPosition) {\n  const selectedCircle = document.getElementById(CIRCLE + currentPosition);\n  const circles = document.getElementsByClassName('circle');\n  for (let i = 0; i < circles.length; i++) {\n      circles[i].classList.remove('circle-selected');\n  }\n  selectedCircle.classList.add('circle-selected');\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initSlideshow);\n\n//# sourceURL=webpack://image_slider/./src/init-slideshow.js?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;