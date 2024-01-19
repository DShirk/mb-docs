# Intro

Shirk Law provides deliverables to clients that answer their questions about the law. Typically, these deliverables take the form of documents that include tables of information, as well as relevant citations, graphs, images, etc as needed to provide an adequate answer. The deliverables can be described as a collection of legal conclusions with supporting information. Supporting information can be described as references (eg, it's source of authority) as well as identifying information (eg, the state in which the conclusion is valid).

### What is our goal?

We aim to create a graph database system to represent our conclusions about the law with more detail and accuracy than currently possible. We also aim to create tools to greatly improve the experience of creating deliverables for Shirk Law clients that leverage this increased detail and accuracy.

### What problems are we trying to solve?

Currently, the relationships between legal conclusions and their supporting information is identified and recorded manually by Shirk Law employees.

By storing our legal conclusions with better detail and accuracy, we aim to be able to automate the answers to questions like:

- "Have I answered this question about the law before?"
- "Where else have I cited this conclusion I made?"
- "What other conclusions reference this authority?"

### What is the scope of this specification?

The scope described in this current specification should be limited to the core features needed to create a minimum viable product. This MVP can be used to provide more immediate value while also gathering data and feedback that can be applied to improve future iterations.

### What components are needed to meet our goal?

- The ability to assemble tables with information from our graph database.
- The ability to build documents that contain tables, text, diagrams, images, etc for delivery to clients.
- The ability to view and manage our database of conclusions and their relationships to supporting information.
