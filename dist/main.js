/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((module) => {

eval("/*function sortedArrayToBST(arr, start, end)\n{\n    if (start > end)\n    {\n        return null;\n    }\n    var mid = parseInt((start + end) / 2);\n    var node = new Node(arr[mid]);\n    node.left = sortedArrayToBST(arr, start, mid - 1);\n    node.right = sortedArrayToBST(arr, mid + 1, end);\n    return node;\n}\nfunction preOrder(node)\n{\n    if (node == null)\n    {\n        return;\n    }\n    document.write(node.data + \" \");\n    preOrder(node.left);\n    preOrder(node.right);\n}\n\nroot = sortedArrayToBST(arr, 0, n - 1);\ndocument.write(\"Preorder traversal of constructed BST<br>\");\npreOrder(root);*/\n\nlet array = [1, 2, 3, 4, 5, 6, 7]\n\nlet start = 0\nlet end = array.length - 1\nlet mid = (start+end)/2\n\nclass Node {\n    constructor(data){\n        this.data = data;\n        this.left = null;\n        this.right = null;\n    }\n}\n\nclass Tree {\n    constructor(array){\n        this.root = buildTree()\n    }\n}\n\nfunction buildTree(array) {\n    let root = array[array.length/2]\n    return root\n}\n\n//let root = null\n\nmodule.exports = buildTree\n\n//# sourceURL=webpack://binarysearchtree/./src/index.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;