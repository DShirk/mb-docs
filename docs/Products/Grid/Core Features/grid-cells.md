# Grid Cells

Data following these rules can be displayed as a grid of cells in our web UI. Cells are directly representative of criteria or conclusion objects. The position of criteria/conclusion cells in the grid is representative of the position of those criteria/conclusion cell in the hierarchical data.

For instance, imagine we have some grid data describing the toxicity of certain fish:

![fish mercury levels](/img/fish-object-example.png)

Which could be rendered into a grid of cells like:

<img src="/img/fish-cell-example.png" width="auto" height="240"/>

A simplified representation of what the data would look like for this example:

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
