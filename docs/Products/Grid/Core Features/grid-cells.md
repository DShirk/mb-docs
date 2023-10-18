---
sidebar_position: 3
---

# Cells

Any hierarchical unstructured data that adheres to our [data model](./grid-data-model.md) can be displayed as cell grid in our web UI. Cells are directly representative of criteria or conclusion objects. The position of criteria/conclusion cells in the grid is representative of the position of those criteria/conclusion cells in the hierarchical data.

For instance, imagine we have some hierarchical data describing the toxicity of certain fish:

![fish mercury levels](/img/fish-object-example.png)

Which could be rendered into a grid of cells like:

<img src="/img/fish-cell-example.png" width="auto" height="240"/>

A simplified representation of what the hierarchical data would look like for this example:

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
