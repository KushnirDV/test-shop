import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MaterialUiForm from '../Form/form';
import CartList from '../List/list';
import API from '../../../api/api.service';
import {
  increaseProductAmount,
  decreaseProductAmount,
  cleanCart,
} from '../../../actions/cartList.action';

import './cart.css';

const Cart = (props) => {
  const { cartList, total } = props.cartData;
  const onChange = (user) => {
    const data = {
      user,
      products: cartList,
      total,
    };
    props.cleanCart();
    API.sendOrder(data);
  };
  return (
    <div className="cart-wrapper">
      <div className="cart-list tile-border">
        <CartList {...props} />
        <div className="total-summ">Total:&nbsp;{total}$</div>
      </div>
      <div className="vertical-devider"></div>
      <div className="cart-form tile-border">
        <MaterialUiForm onSubmit={onChange} />
      </div>
    </div>
  );
};

Cart.displayName = 'Cart';

const mapStateToProps = (state) => ({
  cartData: state.cartData,
});
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      addHandleClick: increaseProductAmount,
      removeHandleClick: decreaseProductAmount,
      cleanCart,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
