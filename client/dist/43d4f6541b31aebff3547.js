(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

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

/***/ 599:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 603:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 604:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 659:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ../node_modules/redux/es/redux.js
var redux = __webpack_require__(40);

// EXTERNAL MODULE: ../node_modules/react-redux/es/index.js + 22 modules
var es = __webpack_require__(64);

// EXTERNAL MODULE: ../node_modules/redux-form/es/Field.js + 10 modules
var Field = __webpack_require__(656);

// EXTERNAL MODULE: ../node_modules/redux-form/es/reduxForm.js + 16 modules
var reduxForm = __webpack_require__(654);

// EXTERNAL MODULE: ../node_modules/@material-ui/core/esm/TextField/TextField.js + 33 modules
var TextField = __webpack_require__(652);

// EXTERNAL MODULE: ../node_modules/@material-ui/core/esm/Button/Button.js
var Button = __webpack_require__(641);

// EXTERNAL MODULE: ../node_modules/prop-types/index.js
var prop_types = __webpack_require__(10);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// CONCATENATED MODULE: ./components/Desctop/Form/form.jsx
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







var validate = function validate(values) {
  var errors = {};
  var requiredFields = ['name', 'surname', 'address', 'phone'];
  requiredFields.forEach(function (field) {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });

  if (values.phone && !/^\+?\(?[0-9](\s|\S)?[0-9](\s|\S)?\)?(\s|\S)?[0-9](\s|\S)?[0-9](\s|\S)?[0-9](\s|\S)?[0-9](\s|\S)?[0-9](\s|\S)?[0-9](\s|\S)?[0-9](\s|\S)?[0-9]/.test(values.phone)) {
    errors.phone = 'Invalid number, must be 10 digits';
  }

  return errors;
};

var form_renderTextField = function renderTextField(_ref) {
  var label = _ref.label,
      input = _ref.input,
      _ref$meta = _ref.meta,
      touched = _ref$meta.touched,
      invalid = _ref$meta.invalid,
      error = _ref$meta.error,
      custom = _objectWithoutProperties(_ref, ["label", "input", "meta"]);

  return /*#__PURE__*/react_default.a.createElement(TextField["a" /* default */], _extends({
    label: label,
    placeholder: label,
    error: touched && invalid,
    helperText: touched && error,
    variant: "outlined"
  }, input, custom));
};

var form_MaterialUiForm = function MaterialUiForm(props) {
  var handleSubmit = props.handleSubmit,
      pristine = props.pristine,
      submitting = props.submitting;
  var nameInput = Object(react["useRef"])(null);
  var surnameInput = Object(react["useRef"])(null);
  var addressInput = Object(react["useRef"])(null);
  var phoneInput = Object(react["useRef"])(null);

  var handleSubmitWrap = function handleSubmitWrap(data) {
    handleSubmit(data);
    nameInput.current.value = '';
    surnameInput.current.value = '';
    addressInput.current.value = '';
    phoneInput.current.value = '';
  };

  return /*#__PURE__*/react_default.a.createElement("form", {
    onSubmit: handleSubmitWrap
  }, /*#__PURE__*/react_default.a.createElement("div", null, /*#__PURE__*/react_default.a.createElement(Field["a" /* default */], {
    name: "name",
    component: form_renderTextField,
    label: "NAME",
    inputRef: nameInput
  })), /*#__PURE__*/react_default.a.createElement("div", null, /*#__PURE__*/react_default.a.createElement(Field["a" /* default */], {
    name: "surname",
    component: form_renderTextField,
    label: "SURNAME",
    inputRef: surnameInput
  })), /*#__PURE__*/react_default.a.createElement("div", null, /*#__PURE__*/react_default.a.createElement(Field["a" /* default */], {
    name: "address",
    component: form_renderTextField,
    label: "ADDRESS",
    inputRef: addressInput
  })), /*#__PURE__*/react_default.a.createElement("div", null, /*#__PURE__*/react_default.a.createElement(Field["a" /* default */], {
    name: "phone",
    type: "number",
    component: form_renderTextField,
    label: "PHONE",
    inputRef: phoneInput
  })), /*#__PURE__*/react_default.a.createElement("div", {
    className: "wd100"
  }, /*#__PURE__*/react_default.a.createElement(Button["a" /* default */], {
    className: "wd100",
    variant: "contained",
    type: "submit",
    disabled: pristine || submitting
  }, "ORDER")));
};

form_MaterialUiForm.displayName = 'MaterialUiForm';
form_MaterialUiForm.propTypes = {
  pristine: prop_types_default.a.bool,
  submitting: prop_types_default.a.bool,
  handleSubmit: prop_types_default.a.func
};
/* harmony default export */ var Form_form = (Object(reduxForm["a" /* default */])({
  form: 'MaterialUiForm',
  validate: validate
})(form_MaterialUiForm));
// EXTERNAL MODULE: ../node_modules/@material-ui/core/esm/styles/makeStyles.js
var makeStyles = __webpack_require__(648);

// EXTERNAL MODULE: ../node_modules/@material-ui/core/esm/List/List.js
var List = __webpack_require__(645);

// EXTERNAL MODULE: ../node_modules/@material-ui/core/esm/ListItem/ListItem.js
var ListItem = __webpack_require__(649);

// EXTERNAL MODULE: ../node_modules/@material-ui/core/esm/ListItemAvatar/ListItemAvatar.js
var ListItemAvatar = __webpack_require__(650);

// EXTERNAL MODULE: ../node_modules/@material-ui/core/esm/ListItemText/ListItemText.js
var ListItemText = __webpack_require__(651);

// EXTERNAL MODULE: ./components/Desctop/Common/showImage.jsx
var showImage = __webpack_require__(478);

// EXTERNAL MODULE: ../node_modules/@material-ui/core/esm/ListItemSecondaryAction/ListItemSecondaryAction.js
var ListItemSecondaryAction = __webpack_require__(646);

// EXTERNAL MODULE: ../node_modules/@material-ui/core/esm/Tooltip/Tooltip.js + 2 modules
var Tooltip = __webpack_require__(661);

// EXTERNAL MODULE: ../node_modules/@material-ui/icons/Add.js
var Add = __webpack_require__(602);
var Add_default = /*#__PURE__*/__webpack_require__.n(Add);

// EXTERNAL MODULE: ../node_modules/@material-ui/icons/Remove.js
var Remove = __webpack_require__(601);
var Remove_default = /*#__PURE__*/__webpack_require__.n(Remove);

// EXTERNAL MODULE: ../node_modules/@material-ui/core/esm/Fab/Fab.js
var Fab = __webpack_require__(647);

// EXTERNAL MODULE: ./components/Desctop/Count/count.css
var count = __webpack_require__(599);

// CONCATENATED MODULE: ./components/Desctop/Count/count.jsx









var count_Count = function Count(_ref) {
  var id = _ref.id,
      amount = _ref.amount,
      addHandleClick = _ref.addHandleClick,
      removeHandleClick = _ref.removeHandleClick;
  return /*#__PURE__*/react_default.a.createElement(ListItemSecondaryAction["a" /* default */], {
    className: "list-count"
  }, /*#__PURE__*/react_default.a.createElement(Tooltip["a" /* default */], {
    title: "Remove",
    "aria-label": "remove"
  }, /*#__PURE__*/react_default.a.createElement(Fab["a" /* default */], {
    onClick: function onClick(e) {
      return removeHandleClick(id);
    }
  }, /*#__PURE__*/react_default.a.createElement(Remove_default.a, null))), /*#__PURE__*/react_default.a.createElement("div", {
    className: "count-number"
  }, amount), /*#__PURE__*/react_default.a.createElement(Tooltip["a" /* default */], {
    title: "Add",
    "aria-label": "add"
  }, /*#__PURE__*/react_default.a.createElement(Fab["a" /* default */], {
    onClick: function onClick(e) {
      return addHandleClick(id);
    }
  }, /*#__PURE__*/react_default.a.createElement(Add_default.a, null))));
};

count_Count.displayName = 'Count';
count_Count.propTypes = {
  amount: prop_types_default.a.number,
  addHandleClick: prop_types_default.a.func,
  removeHandleClick: prop_types_default.a.func
};
/* harmony default export */ var Count_count = (count_Count);
// EXTERNAL MODULE: ./components/Desctop/List/list.css
var list = __webpack_require__(603);

// CONCATENATED MODULE: ./components/Desctop/List/list.jsx










var useStyles = Object(makeStyles["a" /* default */])(function (theme) {
  return {
    root: {
      flexGrow: 1,
      maxWidth: 752
    },
    demo: {
      backgroundColor: theme.palette.background.paper
    },
    title: {
      margin: theme.spacing(4, 0, 2)
    }
  };
});

function CartList(_ref) {
  var cartData = _ref.cartData,
      addHandleClick = _ref.addHandleClick,
      removeHandleClick = _ref.removeHandleClick;
  var cartList = cartData.cartList;
  var classes = useStyles();
  return /*#__PURE__*/react_default.a.createElement("div", {
    className: classes.demo
  }, /*#__PURE__*/react_default.a.createElement(List["a" /* default */], {
    dense: false
  }, cartList && Object.keys(cartList).map(function (it) {
    var el = cartList[it];
    return /*#__PURE__*/react_default.a.createElement(ListItem["a" /* default */], {
      className: "main-list-item",
      key: el.id
    }, /*#__PURE__*/react_default.a.createElement(ListItemAvatar["a" /* default */], null, /*#__PURE__*/react_default.a.createElement(showImage["a" /* default */], {
      item: el,
      width: 110,
      height: 84
    })), /*#__PURE__*/react_default.a.createElement(ListItemText["a" /* default */], {
      primary: el.title,
      secondary: el.description
    }), /*#__PURE__*/react_default.a.createElement(Count_count, {
      id: el.id,
      amount: el.amount,
      addHandleClick: addHandleClick,
      removeHandleClick: removeHandleClick
    }));
  })));
}

CartList.displayName = 'CartList';
CartList.propTypes = {
  cartData: prop_types_default.a.object,
  addHandleClick: prop_types_default.a.func,
  removeHandleClick: prop_types_default.a.func
};
/* harmony default export */ var List_list = (CartList);
// EXTERNAL MODULE: ./api/api.service.js + 2 modules
var api_service = __webpack_require__(487);

// EXTERNAL MODULE: ./actions/cartList.action.js
var cartList_action = __webpack_require__(477);

// EXTERNAL MODULE: ./components/Desctop/Cart/cart.css
var cart = __webpack_require__(604);

// CONCATENATED MODULE: ./components/Desctop/Cart/cart.jsx









var cart_Cart = function Cart(props) {
  var _props$cartData = props.cartData,
      cartList = _props$cartData.cartList,
      total = _props$cartData.total;

  var onChange = function onChange(user) {
    var data = {
      user: user,
      products: cartList,
      total: total
    };
    props.cleanCart();
    api_service["a" /* default */].sendOrder(data);
  };

  return /*#__PURE__*/react_default.a.createElement("div", {
    className: "cart-wrapper"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "cart-list tile-border"
  }, /*#__PURE__*/react_default.a.createElement(List_list, props), /*#__PURE__*/react_default.a.createElement("div", {
    className: "total-summ"
  }, "Total:\xA0", total, "$")), /*#__PURE__*/react_default.a.createElement("div", {
    className: "vertical-devider"
  }), /*#__PURE__*/react_default.a.createElement("div", {
    className: "cart-form tile-border"
  }, /*#__PURE__*/react_default.a.createElement(Form_form, {
    onSubmit: onChange
  })));
};

cart_Cart.displayName = 'Cart';

var mapStateToProps = function mapStateToProps(state) {
  return {
    cartData: state.cartData
  };
};

var cart_mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return Object(redux["b" /* bindActionCreators */])({
    addHandleClick: cartList_action["d" /* increaseProductAmount */],
    removeHandleClick: cartList_action["c" /* decreaseProductAmount */],
    cleanCart: cartList_action["b" /* cleanCart */]
  }, dispatch);
};

/* harmony default export */ var Cart_cart = __webpack_exports__["default"] = (Object(es["c" /* connect */])(mapStateToProps, cart_mapDispatchToProps)(cart_Cart));

/***/ })

}]);