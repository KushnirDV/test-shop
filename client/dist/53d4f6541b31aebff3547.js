(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ 477:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return increaseProductAmount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return decreaseProductAmount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return cleanCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addChosenProduct; });
/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);

var increaseProductAmount = function increaseProductAmount(data) {
  return {
    type: _action_types__WEBPACK_IMPORTED_MODULE_0__[/* INCREASE_PRODUCT_AMOUNT */ "g"],
    payload: data
  };
};
var decreaseProductAmount = function decreaseProductAmount(data) {
  return {
    type: _action_types__WEBPACK_IMPORTED_MODULE_0__[/* DECREASE_PRODUCT_AMOUNT */ "b"],
    payload: data
  };
};
var cleanCart = function cleanCart() {
  return {
    type: _action_types__WEBPACK_IMPORTED_MODULE_0__[/* ADD_CHOOSED_PRODUCT */ "a"],
    payload: null
  };
};
var addChosenProduct = function addChosenProduct(data) {
  return function (dispatch) {
    dispatch({
      type: _action_types__WEBPACK_IMPORTED_MODULE_0__[/* ADD_CHOOSED_PRODUCT */ "a"],
      payload: data
    });
  };
};

/***/ }),

/***/ 478:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(635);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);




function ShowImage(_ref) {
  var _ref$item = _ref.item,
      item = _ref$item === void 0 ? {} : _ref$item,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 210 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 118 : _ref$height;
  var title = item.title,
      image = item.image;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, image ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    alt: title,
    src: image,
    width: width,
    height: height
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    variant: "rect",
    width: "94%",
    height: height,
    style: {
      marginRight: '10px',
      marginBottom: '10px'
    }
  }));
}

ShowImage.displayName = 'ShowImage';
ShowImage.propTypes = {
  item: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  width: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  height: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number
};
/* harmony default export */ __webpack_exports__["a"] = (ShowImage);

/***/ }),

/***/ 487:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ../node_modules/axios/index.js
var axios = __webpack_require__(493);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);

// CONCATENATED MODULE: ./constants/constants.js
/** const links to server */
var URL = Object.freeze({
  PRODUCTS: ['products', '/api/products'],
  ORDER: ['', '/api/order']
});
/** -- */
// CONCATENATED MODULE: ./api/cache.service.js
var engine = __webpack_require__(181);

var storages = [__webpack_require__(502), __webpack_require__(182)];
var store = engine.createStore(storages);

function cacheService() {
  var has = function has(key) {
    return !!store.get(key);
  };

  var set = function set(key, data) {
    return store.set(key, data);
  };

  var get = function get(key) {
    return store.get(key);
  };

  var destroy = function destroy(key) {
    return store.remove(key);
  };

  return {
    has: has,
    get: get,
    set: set,
    destroy: destroy
  };
}

var pageCache = cacheService();
/* harmony default export */ var cache_service = (pageCache);
// CONCATENATED MODULE: ./api/api.service.js
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




/*  Actual source */

var source = axios_default.a.CancelToken.source();

var api_service_updateSource = function updateSource() {
  if (source) source.cancel('Loading data is not actual yet');
  source = axios_default.a.CancelToken.source();
  return source.token;
};
/** -- */


var sourceCancel = function sourceCancel() {
  if (source) source.cancel('Loading data is not actual yet');
};

var api_service_prepareData = function prepareData(resp, key) {
  var status = resp.status,
      data = resp.data;
  if (status !== 200) throw 'Loading data is not actual yet';
  if (key) cache_service.set(key, data);
  return data || [];
};

var handleErr = function handleErr(err) {
  console.log(err);
};

function request(_x) {
  return _request.apply(this, arguments);
}

function _request() {
  _request = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {
    var _ref2,
        key,
        url,
        method,
        data,
        params,
        props,
        entities,
        resp,
        _args = arguments;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _ref2 = _slicedToArray(_ref, 2), key = _ref2[0], url = _ref2[1];
            method = _args.length > 1 && _args[1] !== undefined ? _args[1] : 'GET';
            data = _args.length > 2 && _args[2] !== undefined ? _args[2] : null;

            if (data) {
              params = JSON.stringify(data);
            }

            props = {
              method: method,
              headers: {
                'Content-Type': 'application/json'
              },
              params: params
            };
            if (method === 'GET') props.cancelToken = api_service_updateSource();
            entities = cache_service.get(key);

            if (entities) {
              _context.next = 19;
              break;
            }

            resp = null;
            _context.prev = 9;
            _context.next = 12;
            return axios_default()(url, props)["catch"](handleErr);

          case 12:
            resp = _context.sent;
            _context.next = 18;
            break;

          case 15:
            _context.prev = 15;
            _context.t0 = _context["catch"](9);
            console.warn('Error: ', _context.t0.message);

          case 18:
            entities = api_service_prepareData(resp ? resp : {}, key);

          case 19:
            return _context.abrupt("return", entities);

          case 20:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[9, 15]]);
  }));
  return _request.apply(this, arguments);
}

var api_service_getProducts = function getProducts() {
  return request(URL.PRODUCTS);
};

var api_service_sendOrder = function sendOrder(data) {
  return request(URL.ORDER, 'POST', data);
};

var API = {
  getProducts: api_service_getProducts,
  sendOrder: api_service_sendOrder,
  sourceCancel: sourceCancel
};
/* harmony default export */ var api_service = __webpack_exports__["a"] = (API); // const axios = require('axios');
// const getURL = () => `${process.env.API_URL}/api`;
// const handleResponse = (response) => {
//     return new Promise((resolve, reject) => {
//       const { data } = response;
//       if (response.status !== 200) {
//         const error = (data && data.message) || response.statusText;
//         return reject(error);
//       }
//       return resolve(data);
//     });
// };
// function getProducts() {
//   const requestOptions = {
//     method: 'GET',
//     withCredentials: true,
//   };
//   return axios(`https://fakestoreapi.com/products`, requestOptions).then(
//     handleResponse
//   );
// }
// export const API = {
//     getProducts
// };

/***/ }),

/***/ 557:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 658:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ../node_modules/react-redux/es/index.js + 22 modules
var es = __webpack_require__(64);

// EXTERNAL MODULE: ../node_modules/react-router-dom/esm/react-router-dom.js
var react_router_dom = __webpack_require__(558);

// EXTERNAL MODULE: ../node_modules/@material-ui/core/esm/Button/Button.js
var Button = __webpack_require__(641);

// EXTERNAL MODULE: ../node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__(643);

// EXTERNAL MODULE: ./actions/action_types.js
var action_types = __webpack_require__(15);

// EXTERNAL MODULE: ./api/api.service.js + 2 modules
var api_service = __webpack_require__(487);

// CONCATENATED MODULE: ./actions/product.action.js
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var product_action_getProductsThunk = function getProductsThunk() {
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch) {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              dispatch({
                type: action_types["c" /* GET_PODACT_DATA */],
                payload: api_service["a" /* default */].getProducts()
              });

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};
// EXTERNAL MODULE: ./actions/cartList.action.js
var cartList_action = __webpack_require__(477);

// EXTERNAL MODULE: ../node_modules/prop-types/index.js
var prop_types = __webpack_require__(10);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: ../node_modules/@material-ui/core/esm/Box/Box.js + 14 modules
var Box = __webpack_require__(655);

// EXTERNAL MODULE: ../node_modules/@material-ui/core/esm/Typography/Typography.js
var Typography = __webpack_require__(640);

// EXTERNAL MODULE: ../node_modules/@material-ui/lab/esm/Skeleton/Skeleton.js
var Skeleton = __webpack_require__(635);

// EXTERNAL MODULE: ./components/Desctop/Common/showImage.jsx
var showImage = __webpack_require__(478);

// EXTERNAL MODULE: ./components/Desctop/Card/card.css
var card = __webpack_require__(557);

// CONCATENATED MODULE: ./components/Desctop/Card/card.jsx









function ShopCard(_ref) {
  var index = _ref.index,
      item = _ref.item,
      handleClick = _ref.handleClick;
  return /*#__PURE__*/react_default.a.createElement(Box["a" /* default */], {
    key: index,
    width: 210,
    marginRight: 0.5,
    my: 5,
    className: "main-shop-tile"
  }, /*#__PURE__*/react_default.a.createElement(showImage["a" /* default */], {
    item: item
  }), item ? /*#__PURE__*/react_default.a.createElement(Box["a" /* default */], {
    pr: 2
  }, /*#__PURE__*/react_default.a.createElement(Typography["a" /* default */], {
    gutterBottom: true,
    variant: "body2",
    style: {
      width: '80%'
    }
  }, item.title), /*#__PURE__*/react_default.a.createElement(Typography["a" /* default */], {
    display: "block",
    variant: "caption",
    color: "textSecondary"
  }, item.channel), /*#__PURE__*/react_default.a.createElement(Typography["a" /* default */], {
    variant: "caption",
    color: "textSecondary",
    style: {
      alignSelf: 'flex-end',
      marginRight: '22px'
    }
  }, "".concat(item.price, " $")), /*#__PURE__*/react_default.a.createElement(Button["a" /* default */], {
    variant: "contained",
    color: "primary",
    onClick: function onClick(e) {
      return handleClick(e, item);
    }
  }, "Add to cart")) : /*#__PURE__*/react_default.a.createElement(Box["a" /* default */], {
    pt: 0.5
  }, /*#__PURE__*/react_default.a.createElement(Skeleton["a" /* default */], {
    width: "60%",
    style: {
      alignSelf: 'left'
    }
  }), /*#__PURE__*/react_default.a.createElement(Skeleton["a" /* default */], {
    width: 183,
    style: {
      alignSelf: 'left'
    }
  }), /*#__PURE__*/react_default.a.createElement(Skeleton["a" /* default */], {
    width: "80%",
    style: {
      alignSelf: 'left'
    }
  }), /*#__PURE__*/react_default.a.createElement(Skeleton["a" /* default */], {
    width: 183,
    height: 56,
    style: {
      alignSelf: 'left'
    }
  })));
}

ShopCard.displayName = 'ShopCard';
ShopCard.propTypes = {
  index: prop_types_default.a.number,
  item: prop_types_default.a.object,
  handleClick: prop_types_default.a.func
};
/* harmony default export */ var Card_card = (ShopCard);
// EXTERNAL MODULE: ../node_modules/@material-ui/core/esm/Badge/Badge.js
var Badge = __webpack_require__(642);

// CONCATENATED MODULE: ./components/Desctop/Badge/badge.jsx


function BadgeMax(_ref) {
  var summ = _ref.summ,
      children = _ref.children;
  return /*#__PURE__*/react_default.a.createElement("div", null, /*#__PURE__*/react_default.a.createElement(Badge["a" /* default */], {
    badgeContent: summ,
    max: 9999,
    children: children,
    color: "secondary"
  }));
}
// CONCATENATED MODULE: ./components/Desctop/Home/home.jsx









var datas = [{
  id: 1,
  title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
  price: 109.95,
  description: 'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
  category: 'men clothing',
  image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
  amount: 1
}, {
  id: 2,
  title: 'Mens Casual Premium Slim Fit T-Shirts ',
  price: 22.3,
  description: 'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
  category: 'men clothing',
  image: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
  amount: 1
}, {
  id: 3,
  title: 'Mens Cotton Jacket',
  price: 55.99,
  description: 'great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.',
  category: 'men clothing',
  image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
  amount: 1
}, {
  id: 4,
  title: 'Mens Casual Slim Fit',
  price: 15.99,
  description: 'The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.',
  category: 'men clothing',
  image: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
  amount: 1
}, {
  id: 5,
  title: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
  price: 695,
  description: "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
  category: 'jewelery',
  image: 'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg',
  amount: 1
}, {
  id: 6,
  title: 'Solid Gold Petite Micropave ',
  price: 168,
  description: 'Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.',
  category: 'jewelery',
  image: 'https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg',
  amount: 1
}, {
  id: 7,
  title: 'White Gold Plated Princess',
  price: 9.99,
  description: "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
  category: 'jewelery',
  image: 'https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg',
  amount: 1
}, {
  id: 8,
  title: 'Pierced Owl Rose Gold Plated Stainless Steel Double',
  price: 10.99,
  description: 'Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel',
  category: 'jewelery',
  image: 'https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg',
  amount: 1
}, {
  id: 9,
  title: 'WD 2TB Elements Portable External Hard Drive - USB 3.0 ',
  price: 64,
  description: 'USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system',
  category: 'electronics',
  image: 'https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg',
  amount: 1
}, {
  id: 10,
  title: 'SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s',
  price: 109,
  description: 'Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)',
  category: 'electronics',
  image: 'https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg',
  amount: 1
}, {
  id: 11,
  title: 'Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5',
  price: 109,
  description: '3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.',
  category: 'electronics',
  image: 'https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg',
  amount: 1
}, {
  id: 12,
  title: 'WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive',
  price: 114,
  description: "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
  category: 'electronics',
  image: 'https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg',
  amount: 1
}, {
  id: 13,
  title: 'Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin',
  price: 599,
  description: '21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz',
  category: 'electronics',
  image: 'https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg',
  amount: 1
}, {
  id: 14,
  title: 'Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ',
  price: 999.99,
  description: '49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag',
  category: 'electronics',
  image: 'https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg',
  amount: 1
}, {
  id: 15,
  title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
  price: 56.99,
  description: 'Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates',
  category: 'women clothing',
  image: 'https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg',
  amount: 1
}, {
  id: 16,
  title: "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
  price: 29.95,
  description: '100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON',
  category: 'women clothing',
  image: 'https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg',
  amount: 1
}, {
  id: 17,
  title: 'Rain Jacket Women Windbreaker Striped Climbing Raincoats',
  price: 39.99,
  description: "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
  category: 'women clothing',
  image: 'https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg',
  amount: 1
}, {
  id: 18,
  title: "MBJ Women's Solid Short Sleeve Boat Neck V ",
  price: 9.85,
  description: '95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem',
  category: 'women clothing',
  image: 'https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg',
  amount: 1
}, {
  id: 19,
  title: "Opna Women's Short Sleeve Moisture",
  price: 7.95,
  description: '100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort',
  category: 'women clothing',
  image: 'https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg',
  amount: 1
}, {
  id: 20,
  title: 'DANVOUY Womens T Shirt Casual Cotton Short',
  price: 12.99,
  description: '95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.',
  category: 'women clothing',
  image: 'https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg',
  amount: 1
}];

var home_Home = function Home(_ref) {
  var products = _ref.products,
      summ = _ref.summ,
      getProducts = _ref.getProducts,
      addChosenProduct = _ref.addChosenProduct;
  var fetching = products.fetching,
      data = products.data;

  var handleClick = function handleClick(e, item) {
    addChosenProduct(item);
  };

  Object(react["useEffect"])(function () {
    getProducts();
  }, []);
  return /*#__PURE__*/react_default.a.createElement(react["Fragment"], null, /*#__PURE__*/react_default.a.createElement(react_router_dom["a" /* Link */], {
    to: "/cart"
  }, /*#__PURE__*/react_default.a.createElement(BadgeMax, {
    summ: summ
  }, /*#__PURE__*/react_default.a.createElement(Button["a" /* default */], {
    variant: "outlined"
  }, "Cart"))), /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    container: true
  }, (fetching ? Array.from(new Array(16)) : datas).map(function (item, index) {
    return /*#__PURE__*/react_default.a.createElement(Card_card, {
      key: index,
      item: item,
      index: index,
      handleClick: handleClick
    });
  })));
};

home_Home.displayName = 'Home';

var mapStateToProps = function mapStateToProps(state) {
  return {
    products: state.productData,
    summ: state.cartData.total
  };
};

var mapDispatchToProps = {
  getProducts: product_action_getProductsThunk,
  addChosenProduct: cartList_action["a" /* addChosenProduct */]
};
/* harmony default export */ var home = __webpack_exports__["default"] = (Object(es["c" /* connect */])(mapStateToProps, mapDispatchToProps)(home_Home));

/***/ })

}]);