import React from 'react';

export default class extends React.Component {
  renderRow(body, key, _className) {
    const className = ['Table__cell', _className].filter(Boolean).join(' ');
    console.log('body: ' ,body , 'className: ', className);
    return (
      <div className={className} key={key}>
	{body}
      </div>
    );
  }

  renderHeader() {
    return this.props.columnss.map(
      (header) => this.renderRow(header.label, header.value, 'Table__header'));
  }

  renderBody() {
    //const { customColumns = {} } = this.props;
    return this.props.data.map(row =>
      this.props.columns.map(header => {
	const { format, className } = header || {};
	console.log('format: ', format);
	let body = row[header.value];
	console.log('**1: ', body);
	if (format) {
	  body = format(row[header.value]);
	  console.log('**2: ', body);
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
