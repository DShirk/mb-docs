# Grid Data Model

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

- Criteria objects can be parents to other criteria objects or to conclusion objects. Criteria objects can have **both** criteria objects and conclusion objects as children. Criteria objects and conclusion objects can be siblings.

- Conclusion objects can have siblings, but not children. Conclusions are meant to be definitive answers to a specific set of criteria`*`.

- Conclusion objects should exist as a child of a criteria object. A criteria object must always be at the top of the tree/hierarchy. An answer shouldn't exist without a question.

- Criteria objects are not required to have a parent. Any criteria object can exist as the root object for it's hierarchy.

- Criteria objects are not required to have children. Questions should be able to exist without answers.

- Both criteria and conclusion objects should only have a single parent. Eg, branches can split, but should not be rejoined.

`* This constraint has the potential to be removed. Further inspection would be needed.`