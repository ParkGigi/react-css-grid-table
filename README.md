## About

>This is a React table library written in CSS grid.

## Installation

>1. Install React CSS Grid Table.

```
npm install https://github.com/RebeccaPark/react-css-grid-table.git
```

>2. Import

```
import Table, { IconColumn } from 'react-css-grid-table';
```

## Components

>There is the main **Table** class and **Columns** class that is used with the **Table** class.

## Example

>The **Table** class takes three different props: 1. **headers**, 2. **data**, and 3. **customColumns**.

>#### 1. headers
An array of objects. Each array item represents a header. The smaller the array index number, farther on the left of the table the header is. Each object can take up to three properties: label, value, width.

1-1. label

>Used for headers that will have a text label displayed. Without the label propety, there will be no text displayed for that header.

1-2. value

>Used to reference that header.

1-3. width

>Width in px, fr, %, auto, none, etc. Any value that [grid-template-columns](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns) takes.

#### 2. data
An array of objects. Each array item represents a row of the table. The smaller the array index number, the farther up of the table the row is. The row with index 0 is the very first row after the headers. Each object can include any property name. Any property that has the property name that is the same as 'value' property of the **headers** prop will be displayed on the corresponding column.

```
import Table from 'react-css-grid-table';

<Table></Table>
```