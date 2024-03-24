"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/p-is-promise";
exports.ids = ["vendor-chunks/p-is-promise"];
exports.modules = {

/***/ "(ssr)/./node_modules/p-is-promise/index.js":
/*!********************************************!*\
  !*** ./node_modules/p-is-promise/index.js ***!
  \********************************************/
/***/ ((module) => {

eval("\nconst isObject = (value)=>value !== null && (typeof value === \"object\" || typeof value === \"function\");\nmodule.exports = (value)=>value instanceof Promise || isObject(value) && typeof value.then === \"function\" && typeof value.catch === \"function\";\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcC1pcy1wcm9taXNlL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBRUEsTUFBTUEsV0FBV0MsQ0FBQUEsUUFBU0EsVUFBVSxRQUNsQyxRQUFPQSxVQUFVLFlBQVksT0FBT0EsVUFBVSxVQUFTO0FBRXpEQyxPQUFPQyxPQUFPLEdBQUdGLENBQUFBLFFBQ2hCQSxpQkFBaUJHLFdBRWhCSixTQUFTQyxVQUNULE9BQU9BLE1BQU1JLElBQUksS0FBSyxjQUN0QixPQUFPSixNQUFNSyxLQUFLLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hZG1pc3Npb24tdXBsaWZ0Ly4vbm9kZV9tb2R1bGVzL3AtaXMtcHJvbWlzZS9pbmRleC5qcz84YzFmIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgaXNPYmplY3QgPSB2YWx1ZSA9PiB2YWx1ZSAhPT0gbnVsbCAmJlxuXHQodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyB8fCB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHZhbHVlID0+IChcblx0dmFsdWUgaW5zdGFuY2VvZiBQcm9taXNlIHx8XG5cdChcblx0XHRpc09iamVjdCh2YWx1ZSkgJiZcblx0XHR0eXBlb2YgdmFsdWUudGhlbiA9PT0gJ2Z1bmN0aW9uJyAmJlxuXHRcdHR5cGVvZiB2YWx1ZS5jYXRjaCA9PT0gJ2Z1bmN0aW9uJ1xuXHQpXG4pO1xuIl0sIm5hbWVzIjpbImlzT2JqZWN0IiwidmFsdWUiLCJtb2R1bGUiLCJleHBvcnRzIiwiUHJvbWlzZSIsInRoZW4iLCJjYXRjaCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/p-is-promise/index.js\n");

/***/ })

};
;