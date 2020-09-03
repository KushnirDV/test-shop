import React from 'react';
import PropTypes from 'prop-types';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';
import Button from '@material-ui/core/Button';
import ShowImage from '../Common/showImage';
import './card.css';

function ShopCard({ index, item, handleClick }) {
  return (
    <Box
      key={index}
      width={210}
      marginRight={0.5}
      my={5}
      className="main-shop-tile"
    >
      <ShowImage item={item} />
      {item ? (
        <Box pr={2}>
          <Typography gutterBottom variant="body2" style={{ width: '80%' }}>
            {item.title}
          </Typography>
          <Typography display="block" variant="caption" color="textSecondary">
            {item.channel}
          </Typography>
          <Typography
            variant="caption"
            color="textSecondary"
            style={{ alignSelf: 'flex-end', marginRight: '22px' }}
          >
            {`${item.price} $`}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={(e) => handleClick(e, item)}
          >
            Add to cart
          </Button>
        </Box>
      ) : (
        <Box pt={0.5}>
          <Skeleton width="60%" style={{ alignSelf: 'left' }} />
          <Skeleton width={183} style={{ alignSelf: 'left' }} />
          <Skeleton width="80%" style={{ alignSelf: 'left' }} />
          <Skeleton width={183} height={56} style={{ alignSelf: 'left' }} />
        </Box>
      )}
    </Box>
  );
}

ShopCard.displayName = 'ShopCard';
ShopCard.propTypes = {
  index: PropTypes.number,
  item: PropTypes.object,
  handleClick: PropTypes.func,
};

export default ShopCard;
