# Grid Rendering

To load a Grid Instance in our UI, we complete the following steps:

- Retrieve the Hierarchy Data Grid for the Grid Instance from our MongoDB backend.
- Parse the Hierarchy Data Grid into a Canonical Data Grid.
- Generate coordinates for each cell in the Canonical Data Grid.
- Generate a Viewport Data Grid from the Canonical Data Grid based on the users' viewport size and scroll position.
- Generate relative coordinates for each cell in the Viewport Data Grid.
- Iteratively render each cell from the Viewport Data Grid into a [CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout) container element on the page.

<img src="/img/data-flow.png" />


## Rendering Viewport Data

To render our viewport data on our front-end, we create a `<Cell />` element for each cell object in the canonical data. We then place each cell inside a container element using [CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout).

The css grid container uses the length of the 2D array for its column template value. The row template value is calculated

:::note
Cell column coordinates are calculated automatically by CSS Grid by passing in an array of React objects with row coordinates.
See example:

https://codesandbox.io/s/vigilant-hoover-wk86x6
:::

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