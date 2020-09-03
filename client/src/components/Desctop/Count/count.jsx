import React from 'react';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Tooltip from '@material-ui/core/Tooltip';
import PropTypes from 'prop-types';

import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

import Fab from '@material-ui/core/Fab';

import './count.css';

const Count = ({ id, amount, addHandleClick, removeHandleClick }) => {
  return (
    <ListItemSecondaryAction className="list-count">
      <Tooltip title="Remove" aria-label="remove">
        {/* <IconButton aria-label="remove"> */}
        <Fab onClick={(e) => removeHandleClick(id)}>
          <RemoveIcon />
        </Fab>
        {/* </IconButton> */}
      </Tooltip>
      <div className="count-number">{amount}</div>
      <Tooltip title="Add" aria-label="add">
        {/* <IconButton aria-label="add"> */}
        <Fab onClick={(e) => addHandleClick(id)}>
          <AddIcon />
        </Fab>
        {/* </IconButton> */}
      </Tooltip>
    </ListItemSecondaryAction>
  );
};

Count.displayName = 'Count';
Count.propTypes = {
  amount: PropTypes.number,
  addHandleClick: PropTypes.func,
  removeHandleClick: PropTypes.func,
};

export default Count;
