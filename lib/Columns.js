import React from 'react';

import '../scss/Columns.scss';

export function IconColumn(props) {
  return (
    <div className="IconColumn">
      <span className={['IconColumn__icon', props.icon].filter(Boolean).join(' ')} />
      <span className="IconColumn__data">{props.data}</span>
    </div>
  );
}
