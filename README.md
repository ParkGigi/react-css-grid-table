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

```js
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
