---
sidebar_position: 3
---

# Grid Rendering

The grid cell placement logic is able to render hierarchical objects into a [row of cells](./grid-cells.md).

Grid data is formatted as an array of hierarchical objects, where each entry in the array is a hierarchical object representing a **row**.

For instance, this grid data would produce two rows of cells:

```js
  const gridData = [
    { type: "criteria", children: [...] },
    { type: "criteria", children: [...] },
  ];
```

## Canonical Data

In order to render the rows of cells for the grid, we must do some conversion to a more representative data format. We do this by using a 2D array to store and render the grid cells from. The grid data is recursively parsed, with each object being placed into it's correct position in the 2D array. This representation of the grid data is referred to as the **canonical grid data**.

Where each array entry in the gridData represents a **row**, each array entry in the canonical data represents a **column**. 

For instance, take the following hierarchical fish data:

```js
const data = {
  type: "criteria",
  body: "Fish",
  children: [
    {
      type: "criteria",
      body: "Salmon",
      children: [
        {
          type: "conclusion",
          body: "Low levels of mercury (0.014 ppm)",
        },
      ],
    },
    {
      type: "criteria",
      body: "Tuna",
      children: [
        {
          type: "conclusion",
          body: "High levels of mercury (0.126 ppm)",
        },
      ],
    },
  ],
};
```

If we wanted to render this data into a grid, our grid data would look something like:

```js
const gridData = [
  { type: "criteria", body: "Fish", children: [...] }
];
```

:::note
The gridData here is the same data as above placed into an array. It represents a single row.
:::

Now parsed into canonical data:

```js
const canonicalData = [
  [ 
    { type: "criteria", body: "Fish" } 
  ],

  [
    { type: "criteria", body: "Salmon" },
    { type: "criteria", body: "Tuna" },
  ],

  [
    { type: "conclusion", body: "Low levels of mercury (0.014 ppm)" },
    { type: "conclusion", body: "High levels of mercury (0.126 ppm)" },
  ],

];
```
## Rendering Canonical Data

### Cell Coordinates
Each cell is also assigned a set of coordinates when it is parsed into the canonical data array. These coordinates represent the starting and stopping position of the cell within it's column. Coordinates are added as a property to each cell object as:

```js
  const cell = {
    type: "criteria",
    coords: [1, 3]
  }
```

To render our canonical data on our front-end, we create a `<Cell />` element for each cell object in the canonical data. Each `<Cell />` is then loaded onto the page using [CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout).
