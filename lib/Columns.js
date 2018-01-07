import React from 'react';

export function IconColumn(props) {
  return (
    <React.Fragment>
      <span className={props.icon} />
      <span className="icon__data">{props.data}</span>
    </React.Fragment>
  );
}
