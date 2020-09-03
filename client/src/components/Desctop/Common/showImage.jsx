import React, { Fragment } from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import PropTypes from 'prop-types';

function ShowImage({ item = {}, width = 210, height = 118 }) {
  const { title, image } = item;
  return (
    <Fragment>
      {image ? (
        <img alt={title} src={image} width={width} height={height} />
      ) : (
        <Skeleton
          variant="rect"
          width="94%"
          height={height}
          style={{ marginRight: '10px', marginBottom: '10px' }}
        />
      )}
    </Fragment>
  );
}

ShowImage.displayName = 'ShowImage';
ShowImage.propTypes = {
  item: PropTypes.object,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default ShowImage;
