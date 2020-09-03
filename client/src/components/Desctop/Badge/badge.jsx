import React from 'react';
import Badge from '@material-ui/core/Badge';

export default function BadgeMax({ summ, children }) {
  return (
    <div>
      <Badge
        badgeContent={summ}
        max={9999}
        children={children}
        color="secondary"
      />
    </div>
  );
}
