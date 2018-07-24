## react-css-grid-table

This is a React table library using [CSS
grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout).

## Installation

```
yarn add https://github.com/RebeccaPark/react-css-grid-table
```

## JSBin example

See [here](https://jsbin.com/sibojey/edit?html,js,output).

## Webpack-style example

```js
import Table, { IconColumn } from 'react-css-grid-table';

const columns = [
  {
    label: 'Title',
    value: 'title',
    width: '1fr',
  },
  {
    value: 'likes',
    width: '0.5fr',
    className: 'anyAdditionalClassName',
    format: (data) => <IconColumn icon="fa fa-heart" data={data} />, 
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

<Table
  columns={columns}
  data={data}
/>
```
