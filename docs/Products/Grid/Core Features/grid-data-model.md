---
sidebar_position: 2
---

# Data Model

Company insights are stored as NoSQL data in MongoDB. The data is structured as a series of **criteria** leading to specific **conclusions**. Or, a hierarchical set of **questions**, leading to an **answer** or **set of answers**. Both criteria and conclusions exist as objects.

Any NoSQL object that adheres to this data model can represent a single branching row (or column, if desired) of cells in the grid. We call these objects **Hierarchy Data**.

### Hierarchy Data

Hierarchy Data is made of nested criteria objects, eventually leading to a conclusion object or set of conclusion objects as their children. This is represented as a series of branching decisions (criteria) in a **tree data structure**, leading to the answers (conclusions) as the 'leaves' of the tree branches.

![Criteria and conclusions relationship](/img/criteria-conclusions-relationship.png)

A simplified representation of what the Hierarchy Data would look like for the above example:

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

- Criteria objects can be parents to other criteria objects or to conclusion objects. Criteria objects can have **both** criteria objects and conclusion objects as children. Ie, Criteria objects and conclusion objects can be siblings.

- Conclusion objects can have siblings, but not children. Conclusions are meant to be conclusive; to be a definitive answer or set of answers to a specific set of criteria.`*`

- Conclusion objects should exist as a child of a criteria object. A criteria object must always be at the top of the tree/hierarchy. An answer shouldn't exist without a question.`*`

- Criteria objects are not required to have a parent. Any criteria object can exist as the root object for it's hierarchy.

- Criteria objects are not required to have children. Questions should be able to exist without answers.

- Both criteria and conclusion objects should only have a single parent. In other words, branches of the tree/hierarchy can be split but should not be rejoined.

`*` These constraints have the potential to be removed if they prove limiting. However, a great deal of cell placement logic relies on this definition. Further consideration would be required.
