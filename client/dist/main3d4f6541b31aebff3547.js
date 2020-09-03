/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded CSS chunks
/******/ 	var installedCssChunks = {
/******/ 		1: 0
/******/ 	};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		1: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({}[chunkId]||chunkId) + "" + "3d4f6541b31aebff3547" + ".js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// mini-css-extract-plugin CSS loading
/******/ 		var cssChunks = {"4":1,"5":1};
/******/ 		if(installedCssChunks[chunkId]) promises.push(installedCssChunks[chunkId]);
/******/ 		else if(installedCssChunks[chunkId] !== 0 && cssChunks[chunkId]) {
/******/ 			promises.push(installedCssChunks[chunkId] = new Promise(function(resolve, reject) {
/******/ 				var href = "" + chunkId + ".style.css";
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				var existingLinkTags = document.getElementsByTagName("link");
/******/ 				for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 					var tag = existingLinkTags[i];
/******/ 					var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 					if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return resolve();
/******/ 				}
/******/ 				var existingStyleTags = document.getElementsByTagName("style");
/******/ 				for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 					var tag = existingStyleTags[i];
/******/ 					var dataHref = tag.getAttribute("data-href");
/******/ 					if(dataHref === href || dataHref === fullhref) return resolve();
/******/ 				}
/******/ 				var linkTag = document.createElement("link");
/******/ 				linkTag.rel = "stylesheet";
/******/ 				linkTag.type = "text/css";
/******/ 				linkTag.onload = resolve;
/******/ 				linkTag.onerror = function(event) {
/******/ 					var request = event && event.target && event.target.src || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + request + ")");
/******/ 					err.code = "CSS_CHUNK_LOAD_FAILED";
/******/ 					err.request = request;
/******/ 					delete installedCssChunks[chunkId]
/******/ 					linkTag.parentNode.removeChild(linkTag)
/******/ 					reject(err);
/******/ 				};
/******/ 				linkTag.href = fullhref;
/******/
/******/ 				var head = document.getElementsByTagName("head")[0];
/******/ 				head.appendChild(linkTag);
/******/ 			}).then(function() {
/******/ 				installedCssChunks[chunkId] = 0;
/******/ 			}));
/******/ 		}
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([198,2]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return GET_PODACT_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return GET_PODACT_DATA_PENDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return GET_PODACT_DATA_REJECTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return GET_PODACT_DATA_FULFILLED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_CHOOSED_PRODUCT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return INCREASE_PRODUCT_AMOUNT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DECREASE_PRODUCT_AMOUNT; });
var GET_PODACT_DATA = 'GET_PODACT_DATA';
var GET_PODACT_DATA_PENDING = 'GET_PODACT_DATA_PENDING';
var GET_PODACT_DATA_REJECTED = 'GET_PODACT_DATA_REJECTED';
var GET_PODACT_DATA_FULFILLED = 'GET_PODACT_DATA_FULFILLED';
var ADD_CHOOSED_PRODUCT = 'ADD_CHOOSED_PRODUCT';
var INCREASE_PRODUCT_AMOUNT = 'INCREASE_PRODUCT_AMOUNT';
var DECREASE_PRODUCT_AMOUNT = 'DECREASE_PRODUCT_AMOUNT';

/***/ }),

/***/ 198:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(199);
module.exports = __webpack_require__(455);


/***/ }),

/***/ 454:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ../node_modules/react-dom/index.js
var react_dom = __webpack_require__(70);
var react_dom_default = /*#__PURE__*/__webpack_require__.n(react_dom);

// EXTERNAL MODULE: ../node_modules/react-redux/es/index.js + 22 modules
var es = __webpack_require__(64);

// EXTERNAL MODULE: ../node_modules/redux/es/redux.js
var redux = __webpack_require__(40);

// EXTERNAL MODULE: ../node_modules/redux-promise-middleware/dist/es/index.js
var dist_es = __webpack_require__(125);

// EXTERNAL MODULE: ../node_modules/redux-logger/dist/redux-logger.js
var redux_logger = __webpack_require__(177);

// EXTERNAL MODULE: ../node_modules/redux-thunk/es/index.js
var redux_thunk_es = __webpack_require__(126);

// EXTERNAL MODULE: ../node_modules/redux-form/es/reducer.js + 2 modules
var reducer = __webpack_require__(457);

// EXTERNAL MODULE: ../node_modules/connected-react-router/esm/index.js + 6 modules
var esm = __webpack_require__(90);

// EXTERNAL MODULE: ./actions/action_types.js
var action_types = __webpack_require__(15);

// CONCATENATED MODULE: ./reducers/product.reducer.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var initialState = {
  data: [],
  fetching: false,
  fetched: false,
  error: null
};

var product_reducer_productData = function productData() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case action_types["e" /* GET_PODACT_DATA_PENDING */]:
      return _objectSpread(_objectSpread({}, state), {}, {
        fetching: true
      });

    case action_types["f" /* GET_PODACT_DATA_REJECTED */]:
      return _objectSpread(_objectSpread({}, state), {}, {
        fetching: false,
        error: action.payload
      });

    case action_types["d" /* GET_PODACT_DATA_FULFILLED */]:
      return _objectSpread(_objectSpread({}, state), {}, {
        fetching: false,
        fetched: true,
        data: action.payload
      });

    default:
      return state;
  }
};

/* harmony default export */ var product_reducer = (product_reducer_productData);
// CONCATENATED MODULE: ./api/storage.service.js
var engine = __webpack_require__(181);

var storages = [__webpack_require__(392), __webpack_require__(182)];
var storage_service_store = engine.createStore(storages);

function storageService() {
  var has = function has(key) {
    return !!storage_service_store.get(key);
  };

  var set = function set(key, data) {
    return storage_service_store.set(key, data);
  };

  var get = function get(key) {
    return storage_service_store.get(key);
  };

  var destroy = function destroy(key) {
    return storage_service_store.remove(key);
  };

  return {
    has: has,
    get: get,
    set: set,
    destroy: destroy
  };
}

var pruductStorage = storageService();
/* harmony default export */ var storage_service = (pruductStorage);
// CONCATENATED MODULE: ./reducers/cart.reducer.js
function cart_reducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function cart_reducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { cart_reducer_ownKeys(Object(source), true).forEach(function (key) { cart_reducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { cart_reducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function cart_reducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var cart_reducer_initialState = {
  cartList: storage_service.get('cartList') || {},
  total: storage_service.get('total') || 0
};

var cart_reducer_cartData = function cartData() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : cart_reducer_initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var type = action.type,
      cartList = action.cartList,
      total = action.total;

  switch (type) {
    case action_types["a" /* ADD_CHOOSED_PRODUCT */]:
    case action_types["g" /* INCREASE_PRODUCT_AMOUNT */]:
    case action_types["b" /* DECREASE_PRODUCT_AMOUNT */]:
      return cart_reducer_objectSpread(cart_reducer_objectSpread({}, state), {}, {
        cartList: cart_reducer_objectSpread({}, cartList),
        total: total
      });

    default:
      return state;
  }
};

/* harmony default export */ var cart_reducer = (cart_reducer_cartData);
// CONCATENATED MODULE: ./reducers/index.js






var reducers_reducers = function reducers(history) {
  return Object(redux["c" /* combineReducers */])({
    form: reducer["a" /* default */],
    productData: product_reducer,
    cartData: cart_reducer,
    router: Object(esm["b" /* connectRouter */])(history)
  });
};

/* harmony default export */ var reducers_0 = (reducers_reducers);
// CONCATENATED MODULE: ./middleware/cart.middleware.js
function cart_middleware_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function cart_middleware_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { cart_middleware_ownKeys(Object(source), true).forEach(function (key) { cart_middleware_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { cart_middleware_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function cart_middleware_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var cart_middleware_countCartProducts = function countCartProducts(store) {
  return function (next) {
    return function (action) {
      var _action = action,
          type = _action.type,
          id = _action.payload;

      if (type === action_types["g" /* INCREASE_PRODUCT_AMOUNT */] || type === action_types["b" /* DECREASE_PRODUCT_AMOUNT */]) {
        var _store$getState = store.getState(),
            cartData = _store$getState.cartData;

        var cartList = cartData.cartList,
            total = cartData.total;
        var _cartList$id = cartList[id],
            amount = _cartList$id.amount,
            price = _cartList$id.price;

        if (type === action_types["g" /* INCREASE_PRODUCT_AMOUNT */]) {
          amount++;
          total = total + price;
          cartList[id].amount = amount;
        } else if (amount > 1) {
          amount--;
          total = total - price;
          cartList[id].amount = amount;
        } else if (amount === 1) {
          delete cartList[id];
          total = total - price;
        }

        total = Number(total.toFixed(2));
        storage_service.set('cartList', cartList);
        storage_service.set('total', total);
        action = cart_middleware_objectSpread(cart_middleware_objectSpread({}, action), {}, {
          cartList: cartList,
          total: total
        });
      }

      next(action);
    };
  };
};
// CONCATENATED MODULE: ./middleware/chosenProduct.middleware.js
function chosenProduct_middleware_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function chosenProduct_middleware_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { chosenProduct_middleware_ownKeys(Object(source), true).forEach(function (key) { chosenProduct_middleware_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { chosenProduct_middleware_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function chosenProduct_middleware_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var chosenProduct_middleware_addChosenProduct = function addChosenProduct(store) {
  return function (next) {
    return function (action) {
      var _action = action,
          type = _action.type,
          payload = _action.payload;

      if (type === action_types["a" /* ADD_CHOOSED_PRODUCT */]) {
        if (!payload) {
          storage_service.destroy('cartList');
          storage_service.destroy('total');
          action = chosenProduct_middleware_objectSpread(chosenProduct_middleware_objectSpread({}, action), {}, {
            cartList: {},
            total: 0
          });
        } else {
          var id = payload.id,
              price = payload.price;

          var _store$getState = store.getState(),
              cartData = _store$getState.cartData;

          var cartList = cartData.cartList,
              total = cartData.total;

          if (!cartList[id]) {
            cartList[id] = payload;
            total += price;
          }

          total = Number(total.toFixed(2));
          storage_service.set('cartList', cartList);
          storage_service.set('total', total);
          cartData.cartList = cartList;
          action = chosenProduct_middleware_objectSpread(chosenProduct_middleware_objectSpread({}, action), {}, {
            cartList: cartList,
            total: total
          });
        }
      }

      next(action);
    };
  };
};
// CONCATENATED MODULE: ./store.js








var createHistory = __webpack_require__(37).createBrowserHistory;

var store_history = createHistory();
var env = "production";
var middleware;

if (env !== 'production') {
  var logger = Object(redux_logger["createLogger"])();
  middleware = Object(redux["a" /* applyMiddleware */])(dist_es["a" /* default */], redux_thunk_es["a" /* default */], logger, cart_middleware_countCartProducts, chosenProduct_middleware_addChosenProduct);
} else {
  middleware = Object(redux["a" /* applyMiddleware */])(dist_es["a" /* default */], redux_thunk_es["a" /* default */], cart_middleware_countCartProducts, chosenProduct_middleware_addChosenProduct);
}

var store_store = Object(redux["d" /* createStore */])(reducers_0(store_history), middleware);
/* harmony default export */ var store_0 = (store_store);
// EXTERNAL MODULE: ../node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(23);

// CONCATENATED MODULE: ./utils/errorBoundary.js
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var errorBoundary_ErrorBoundary = /*#__PURE__*/function (_Component) {
  _inherits(ErrorBoundary, _Component);

  var _super = _createSuper(ErrorBoundary);

  function ErrorBoundary(props) {
    var _this;

    _classCallCheck(this, ErrorBoundary);

    _this = _super.call(this, props);
    _this.state = {
      hasError: false
    };
    return _this;
  }

  _createClass(ErrorBoundary, [{
    key: "componentDidCatch",
    value: function componentDidCatch(error, info) {
      console.log(error);
      console.info(info);
      console.trace();
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.hasError) {
        if (this.props.errorView) {
          return this.props.errorView;
        } else {
          return /*#__PURE__*/react_default.a.createElement("div", null, "Something went wrong.");
        }
      }

      return this.props.children;
    }
  }], [{
    key: "getDerivedStateFromError",
    value: function getDerivedStateFromError(error) {
      return {
        hasError: true
      };
    }
  }]);

  return ErrorBoundary;
}(react["Component"]);
// CONCATENATED MODULE: ./utils/asyncFuncs.js
function asyncFuncs_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { asyncFuncs_typeof = function _typeof(obj) { return typeof obj; }; } else { asyncFuncs_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return asyncFuncs_typeof(obj); }

function asyncFuncs_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function asyncFuncs_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function asyncFuncs_createClass(Constructor, protoProps, staticProps) { if (protoProps) asyncFuncs_defineProperties(Constructor.prototype, protoProps); if (staticProps) asyncFuncs_defineProperties(Constructor, staticProps); return Constructor; }

function asyncFuncs_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) asyncFuncs_setPrototypeOf(subClass, superClass); }

function asyncFuncs_setPrototypeOf(o, p) { asyncFuncs_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return asyncFuncs_setPrototypeOf(o, p); }

function asyncFuncs_createSuper(Derived) { var hasNativeReflectConstruct = asyncFuncs_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = asyncFuncs_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = asyncFuncs_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return asyncFuncs_possibleConstructorReturn(this, result); }; }

function asyncFuncs_possibleConstructorReturn(self, call) { if (call && (asyncFuncs_typeof(call) === "object" || typeof call === "function")) { return call; } return asyncFuncs_assertThisInitialized(self); }

function asyncFuncs_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function asyncFuncs_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function asyncFuncs_getPrototypeOf(o) { asyncFuncs_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return asyncFuncs_getPrototypeOf(o); }




var asyncFuncs_Async = /*#__PURE__*/function (_React$Component) {
  asyncFuncs_inherits(Async, _React$Component);

  var _super = asyncFuncs_createSuper(Async);

  function Async(props) {
    var _this;

    asyncFuncs_classCallCheck(this, Async);

    _this = _super.call(this, props);
    _this.state = {
      Component: void 0
    };
    return _this;
  }

  asyncFuncs_createClass(Async, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.props.provider().then(function (res) {
        _this2.setState({
          Component: res["default"]
        });
      })["catch"](function (error) {
        if (error.toString().indexOf('ChunkLoadError') > -1) {
          console.log('[ChunkLoadError] Reloading due to error');
          window.location.reload(true);
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var Component = this.state.Component;
      return /*#__PURE__*/react_default.a.createElement(errorBoundary_ErrorBoundary, null, Component ? /*#__PURE__*/react_default.a.createElement(Component, this.props.props) : null);
    }
  }]);

  return Async;
}(react_default.a.Component);

/* harmony default export */ var asyncFuncs = (asyncFuncs_Async);
// CONCATENATED MODULE: ./router.js






var router_Routes = function Routes() {
  return /*#__PURE__*/react_default.a.createElement(esm["a" /* ConnectedRouter */], {
    history: store_history
  }, /*#__PURE__*/react_default.a.createElement("header", null, /*#__PURE__*/react_default.a.createElement("h1", {
    className: "head-title"
  }, "Test shop")), /*#__PURE__*/react_default.a.createElement("div", {
    className: "common-content"
  }, /*#__PURE__*/react_default.a.createElement(react_router["d" /* Switch */], null, /*#__PURE__*/react_default.a.createElement(react_router["b" /* Route */], {
    exact: true,
    path: "/",
    component: function component(props) {
      return /*#__PURE__*/react_default.a.createElement(asyncFuncs, {
        props: props,
        provider: function provider() {
          return Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(6), __webpack_require__.e(5)]).then(__webpack_require__.bind(null, 658));
        }
      });
    }
  }), /*#__PURE__*/react_default.a.createElement(react_router["b" /* Route */], {
    path: "/cart",
    component: function component(props) {
      return /*#__PURE__*/react_default.a.createElement(asyncFuncs, {
        props: props,
        provider: function provider() {
          return Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(3), __webpack_require__.e(4)]).then(__webpack_require__.bind(null, 659));
        }
      });
    }
  }), /*#__PURE__*/react_default.a.createElement(react_router["b" /* Route */], {
    path: "*"
  }, /*#__PURE__*/react_default.a.createElement(react_router["a" /* Redirect */], {
    to: "/"
  })))), /*#__PURE__*/react_default.a.createElement("footer", null, "Home production \xA92020 Created\xA0by\xA0Denis\xA0Kushnir"));
};

/* harmony default export */ var router = (router_Routes);
// EXTERNAL MODULE: ./style.css
var style = __webpack_require__(454);

// CONCATENATED MODULE: ./index.jsx






console.log('React');
react_dom_default.a.render( /*#__PURE__*/react_default.a.createElement(es["a" /* Provider */], {
  store: store_0
}, /*#__PURE__*/react_default.a.createElement(router, null)), document.getElementById('root'));

/***/ })

/******/ });