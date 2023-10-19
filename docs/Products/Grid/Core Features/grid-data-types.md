---
sidebar_position: 3
---

# Grid Data Types
There are 3 main data types used to facilitate the rendering of the grid in our UI:

- [Hierarchy Data Grids](./grid-data-types#hierarchy-data-grids)
- [Canonical Data Grids](./grid-data-types#canonical-data-grids)
- **Viewport Data Grids**

Hierarchy Data Grid --> Canonical Data Grid --> Viewport Data Grid

## Hierarchy Data Grids

**Hierarchy Data Grids** are a data type that are formatted as a 1-dimensional array of hierarchical objects, where each entry in the array is a **Hierarchy Data Row**.

**Hierarchy Data Rows** are Hierarchy Data (objects that conform to our [data model](./grid-data-model.md)), made up of nested criteria and/or conclusion objects.

:::note Naming
[Hierarchy Data](./grid-data-model.md) and Hierarchy Data Rows are the same thing in the context of the grid. [Hierarchy Data](./grid-data-model.md) can be interpreted as either a row or a column. But, the default orientation is where [Hierarchy Data](./grid-data-model.md) represents a row in the grid, so we use 'Hierarchy Data Row' as our naming convention for this data in the context of the grid. To avoid having multiple names for the same type of data, we'll always consider [Hierarchy Data](./grid-data-model.md) to be a row, and we'll always refer to it as a 'Hierarchy Data Row' in the context of the grid.

For example, if the grid is rotated to use a flipped x and y axis, we will consider all of the rows in the grid to be inverted rows instead of considering them as columns.
:::

For instance, this Hierarchy Data Grid would produce two rows of cells:

```js
  const hierarchyDataGrid = [
    { type: "criteria", children: [...] },
    { type: "criteria", children: [...] },
  ];
```

We use Hierarchy Data Grids to store data in our database for a particular [Grid Instance](./grid-instances.md). This format preserves the nested hierarchy structure of the criteria and conclusions objects.

For instance, here's an example of some data we might want to load into a [Grid Instance](./grid-instances.md). Since this `fishData` object conforms to our [data model](./grid-data-model.md), it is considered a **Hierarchy Data Row**.

```js
const fishData = {
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

If we wanted to use this data in a [Grid Instance](./grid-instances.md), we would create a **Hierarchy Data Grid** to contain this **Hierarchy Data Row**:

```js
// fishData defined above

const hierarchyDataGrid = [
  fishData,
];

```
To summarize:

- A **Hierarchy Data Grid** is an array containing hierarchical objects adhering to our [data model](./grid-data-model.md), like the `fishData` provided.
- **Hierarchy Data Grids** are used to store the data for a particular grid, but are not used to render the grid in the UI. That's the purpose of the **Canonical Data Grid**.

## Canonical Data Grids

In order to render the **Hierarchy Data Grid** in our UI, we must do some conversion to a more representational data format. For the purposes of rendering to the UI, we use a 3-dimensional array of cell objects without nesting. This data type is referred to as a **Canonical Data Grid**, where each entry in the 3-dimensional array is a **Canonical Data Row**.

Each **Hierarchy Data Row** from a **Hierarchy Data Grid** is parsed into a **Canonical Data Row** to create a **Canonical Data Grid**.

- Each element in the **Canonical Data Grid** array represents a row.
- Each element in the **Canonical Data Row** array represents a column within that row.

**Canonical Data Grids** are not meant to be stored, but rather created at runtime on the front-end from a **Hierarchy Data Grid**.


Here's what our `fishData` **Hierarchy Data Row** would look like converted into a **Canonical Data Row**:

```js
const fishCanonicalDataRow = [
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

And, the **Canonical Data Grid** which is used to render the cells in the UI:

```js
// canonicalDataRow defined above.

const canonicalDataGrid = [
  fishCanonicalDataRow,
];
```

To summarize:

- A **Canonical Data Grid** is a 3D array containing **Canonical Data Row** arrays. Each element in the **Canonical Data Grid** array represents a row.
- A **Canonical Data Row** is a 2D array containing arrays of non-nested cell objects. Each element in a **Canonical Data Row** array represents a **column** in that particular row.

## Rendering Canonical Data

To render our canonical data on our front-end, we create a `<Cell />` element for each cell object in the canonical data. We then place each cell inside a container element using [CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout).


The css grid container uses the length of the 2D array for its column template value. The row template value is calculated

### Assigning Cell Coordinates
Each cell is also assigned a set of coordinates when it is parsed into the canonical data array. These coordinates represent the starting and stopping position of the cell within it's column. These coordinates are mapped according to [CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout), which we use to place the cells on the web page.

Observe the following example using fish data:

<img src="/img/fish-cell-example.png" width="auto" height="240"/>

CSS Grid uses rows and columns to place elements within a container.

<img src="/img/fish-cell-coordinate-diagram.png" width="auto" height="240" />


### Cell Coordinates
Coordinates are added as a property to each cell object as:

```js
  const cell = {
    type: "criteria",
    coords: [1, 3]
  }
```

To render our canonical data on our front-end, we create a `<Cell />` element for each cell object in the canonical data. Each `<Cell />` is then loaded onto the page using [CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout).
