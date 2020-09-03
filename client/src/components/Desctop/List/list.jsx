import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import ShowImage from '../Common/showImage';
import Count from '../Count/count';
import PropTypes from 'prop-types';
import './list.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));

function CartList({ cartData, addHandleClick, removeHandleClick }) {
  const { cartList } = cartData;
  const classes = useStyles();

  return (
    <div className={classes.demo}>
      <List dense={false}>
        {cartList &&
          Object.keys(cartList).map((it) => {
            const el = cartList[it];
            return (
              <ListItem className="main-list-item" key={el.id}>
                <ListItemAvatar>
                  <ShowImage item={el} width={110} height={84} />
                </ListItemAvatar>
                <ListItemText primary={el.title} secondary={el.description} />
                <Count
                  id={el.id}
                  amount={el.amount}
                  addHandleClick={addHandleClick}
                  removeHandleClick={removeHandleClick}
                />
              </ListItem>
            );
          })}
      </List>
    </div>
  );
}

CartList.displayName = 'CartList';
CartList.propTypes = {
  cartData: PropTypes.object,
  addHandleClick: PropTypes.func,
  removeHandleClick: PropTypes.func,
};

export default CartList;
