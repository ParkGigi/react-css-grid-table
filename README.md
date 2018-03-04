## react-css-grid-table

This is a React table library using [CSS
grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout). I
refactored it as a standalone component from a blog API project I've
been working on. You can see an example of it being used in that app
[here](https://github.com/RebeccaPark/BlogAPI/blob/master/api/static/admin/src/views/Posts.js).

It depends on SCSS support so you'll need to have that configured.

## Installation

```
yarn add https://github.com/RebeccaPark/react-css-grid-table
```

## Example

```
import Table, { IconColumn } from 'react-css-grid-table';

const headers = [
  {
    label: 'Title',
    value: 'title',
    width: '1fr',
  },
  {
    value: 'likes',
    width: '0.5fr',
  },
];

const data = [
  {
    title: 'This is the first post',
    likes: 3,
  },
  {
    title: 'This is the second post',
    likes: 2,
  },
];

const customColumns = {
  likes: {
   format: (data) => <IconColumn icon="iconClassNameHere" data={data} />,
   className: 'anyAdditionalClassName',
  },
};

<Table
  headers={headers}
  data={data}
  customColumns={customColumns}
/>
```

## Documentation

The **Table** class takes three different props: 1. **headers**, 2. **data**, and 3. **customColumns**.

#### 1. headers
An array of objects. Each array item represents a header. The smaller the array index number, farther on the left of the table the header is. Each object can take up to three properties: label, value, width.

######1-1. label

Used for headers that will have a text label displayed. Without the label propety, there will be no text displayed for that header.

######1-2. value

Used to reference that header.

######1-3. width

Width in px, fr, %, auto, none, etc. Any value that [grid-template-columns](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns) takes.

#### 2. data
An array of objects. Each array item represents a row of the table. The smaller the array index number, the farther up of the table the row is. The row with index 0 is the very first row after the headers. Each object can include any property name. Any property that has the property name that is the same as 'value' property of the **headers** prop will be displayed on the corresponding column.