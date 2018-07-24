import PropTypes from 'prop-types';
import React from 'react';

export function IconColumn(props) {
  return (
    <div className="IconColumn">
      <span className={['IconColumn__icon', props.icon].filter(Boolean).join(' ')} />
      <span className="IconColumn__data">{props.data}</span>
    </div>
  );
}

IconColumn.propTypes = {
  icon: PropTypes.string,
  data: PropTypes.node,
};
