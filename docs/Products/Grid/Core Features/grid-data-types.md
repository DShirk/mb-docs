---
sidebar_position: 3
---

# Grid Data Types
There are 3 main data types used to facilitate the rendering of the grid in our UI:

- **Hierarchy Data Grids** (made up of **Hierarchy Data Rows**)
- **Canonical Data Grids** (made up of **Canonical Data Rows**)
- **Viewport Data Grids**

## Hierarchy Data Grids

**Hierarchy Data Grids** are a data type that are formatted as an 1-dimensional array of hierarchical objects, where each entry in the array is a **Hierarchy Data Row**.

**Hierarchy Data Rows** are objects that conform to our [data model](./grid-data-model.md), made up of nested criteria and/or conclusion objects.

For instance, this Hierarchy Data Grid would produce two rows of cells:

```js
  const hierarchyDataGrid = [
    { type: "criteria", children: [...] },
    { type: "criteria", children: [...] },
  ];
```

We use Hierarchy Data Grids to store data for a particular [Grid Instance](./grid-instances.md). This format preserves the nested hierarchy structure of the criteria and conclusions objects.

## Canonical Data Grids

In order to render the Data Grid in our UI, we must do some conversion to a more representational data format. We do this by using a 3-dimensional array. A 3-dimensional array of cell objects with no nesting is easily readable as a grid, compared to a 1-dimensional array of nested cell objects. This data type is referred to as a **Canonical Data Grid**, where each entry in the 3-dimensional array is a **Canonical Data Row**.


Each **Hierarchy Data Row** from a **Hierarchy Data Grid** is parsed into a **Canonical Data Row** as a 2-dimensional array. Each element in the **Canonical Data Row** array represents a column.

For instance, here's an example of some data we might want to load into a [Grid Instance](./grid-instances.md). Since this fishData object conforms to our [data model](./grid-data-model.md), it is considered a **Hierarchy Data Row**.

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

- A **Hierarchy Data Grid** is an array containing hierarchical objects adhering to our [data model](./grid-data-model.md), like the fishData provided.
- **Hierarchy Data Grids** are used to store the data for a particular grid, but are not used to render the grid in the UI. That's the purpose of the **Canonical Data Grid**.

To create a **Canonical Data Grid** for this **Hierarchy Data Grid**, we iterate over every row (every **Hierarchy Data Row** in the hierarchyDataGrid array) and create a **Canonical Data Row** array from it.

Here's what our fishData **Hierarchy Data Row** would look like converted into a **Canonical Data Row**:

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

- A canonical data grid is a 3D array containing canonical data row arrays. Each element in the canonical data grid array represents a **row**.
- A canonical data row is a 2D array containing column data arrays. Each element in a canonical data row array represents a **column**.


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
