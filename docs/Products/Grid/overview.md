# Grid Overview

The Grid is a product designed to facilitate the collation, curation, and distribution of company insights as data. The main feature of the Grid is a UI based viewer and editor for this data.

The data model is designed to be as agnostic and simple as possible to allow for maximum flexibility.

## Grid Data Model

Company insights are stored as non-structured data in MongoDB. The data is structured as a series of **criteria** leading to specific **conclusions**. Or, a hierarchical set of **questions**, leading to an **answer** or **set of answers**. Both criteria and conclusions exist as objects.

### Data Hierachy

Criteria objects are nested inside each other, eventually leading to a conclusion object or set of conclusion objects as their children. This is represented as a series of branching decisions (criteria) in a tree data structure, leading to the answers (conclusions) as the leaves of the tree branches.

![Criteria and conclusions relationship](/img/criteria-conclusions-relationship.png)

Here's a simplified representation of what the data would look like for the above example:

```js
const data = {
  type: "criteria",
  children: [
    { type: "criteria", children: [{ type: "conclusion" }] },
    { type: "criteria", children: [{ type: "conclusion" }] },
  ],
};
```

### Data Model Rules and Constraints

- Criteria objects can be parents to other criteria objects or to conclusion objects. Criteria objects can have **both** criteria objects and conclusion objects as children, meaning criteria objects and conclusion objects can be siblings.

- Conclusion objects can have siblings, but not children. Conclusions are meant to be definitive answers to a specific set of criteria.

- A criteria object must always be at the top of the tree/hierarchy. _There can be no answers if there are no questions_. Conclusion objects must exist as a child of a criteria object.

- Criteria objects are not required to have a parent. Any criteria object can exist as the root object for it's hierarchy.

- Criteria objects are not required to have children. _Questions can exist without answers_.

- Both criteria and conclusion objects can only have a single parent. Eg, branches can split, but cannot be rejoined.

## Grid Cells

Data following these rules can be displayed as a grid of cells in our web UI. Cells are directly representative of criteria or conclusion objects. The position of criteria/conclusion cells in the grid is representative of the position of those criteria/conclusion cell in the hierarchical data.

For instance, imagine we have some grid data describing the toxicity of certain fish:

![fish mercury levels](/img/fish-object-example.png)

Which could be rendered into a grid of cells like:

![fish mercury levels grid](/img/fish-cell-example.png)
