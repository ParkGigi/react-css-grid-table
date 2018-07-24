import PropTypes from 'prop-types';
import React from 'react';

export default class Table extends React.Component {
  renderRow(body, key, _className) {
    const className = ['Table__cell', _className].filter(Boolean).join(' ');
    return (
      <div className={className} key={key}>
        {body}
      </div>
    );
  }

  renderHeader() {
    return this.props.columns.map(
      (header) => this.renderRow(header.label, header.value, 'Table__header'));
  }

  renderBody() {
    return this.props.data.map(row =>
      this.props.columns.map(header => {
        const { format, className } = header || {};
        let body = row[header.value];
        if (format) {
          body = format(row[header.value]);
        }
        return this.renderRow(body, `${row.id}:${header.value}`, className);
      }));
  }

  render() {
    const columnWidth = this.props.columns.map(header => header.width).join(' ');

    return (
      <div className="Table" style={{ gridTemplateColumns: columnWidth }}>
        {this.renderHeader()}
        {this.renderBody()}
      </div>
    );
  }
}

Table.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.shape({
    width: PropTypes.string,
    format: PropTypes.func,
    className: PropTypes.string,
  })),
  data: PropTypes.arrayOf(PropTypes.object),
};
