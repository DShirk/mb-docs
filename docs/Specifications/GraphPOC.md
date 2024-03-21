# Graph Database Proof of Concept

Fundamentally, a graph and a spreadsheet are two different ways of storing data. Both use objects to define their nodes or their cells. We're able to show all of the objects from a graph in a spreadsheet format, but we're not able to show all the relationships between those objects in a spreadsheet format.

In a spreadsheet where cells represent objects, relationships between cells are defined by each cells size and position in the spreadsheet. In a graph where nodes represent objects, relationships between nodes are defined explicitly as edges. To use graph data in spreadseets, we have two options:

1. Enforce constraints on nodes in our graph that are going to become cells on our spreadsheet, ie making sure that they represent a decision tree to allow automated cell placement.

2. Don't map the position and size of the cells in our spreadsheets to their relationships in the graph database, ie manually constructing each spreadsheet.

### Option 1: Automated Cell Placement

Pros:  
Relationships between objects are accurately reflected between the database and spreadsheets.  
Spreadsheets can be created automatically and accurately given set parameters, and can fully update when the corresponding data in the database updates.

Cons:  
Limited relationship structures in database.  
No ability to re-arrange cells through our spreadsheet interface.

We split our graph nodes into two categories: nodes that wil represent cells in our spreadsheets, or nodes that will represent any other data we wish to store or link to.

Nodes representing cells should conform to a decision tree structure, where the relationships between them cascade in one direction and are identified as AND, OR, NAND, or NOR. Cell nodes can point to multiple other cell nodes but can only have one cell node pointing at them. Nodes not representing cells will be able to use the full flexibility of the graph data structure, but will not dictate cell rendering behavior.

![law schema](/img/law-schema.png)

### Option 2: Manual Cell Placement

Nodes will be linked to corresponding cells in the spreadsheet and their content will update at the same time. Cell contents will be able to update when the data changes. However, each cell will have to have their position and size assigned automatically.

Pros:  
Full flexibility to store data as we see fit.  
Full flexibility to arrange spreadsheet cells as we see fit.

Cons:  
Spreadsheets won't update when relationships change.  
Spreadsheets can't be generated automatically.

If we create a schema with column and row preferences for each node then we might be able to avoid doing it for each cell individually.

Say we have a schema like:  
![manual schema](/img/manual-schema.png)

We could assign (x,y) coordinate preferences to the nodes in the schema like:
![manual schema coords](/img/manual-schema-coords.png)

Then we could use the coordinate preferences for each node to render a spreadsheet like:
![manual schema cells](/img/manual-schema-cells.png)

However, since the coordinate preferences are being used to determine cell placement, changing the relationship structure will not affect
how the spreadsheet is rendered. For instance, say we updated the relationship structure of the schema above to look like:
<img src="/img/manual-schema-coords-changed.png" alt="manual schema coords changed" width="550px" height="auto" />

The same spreadsheet would be rendered even though the relationships have changed:
![manual schema cells](/img/manual-schema-cells.png)

### Notes

We'll likely still facilitate updating our data through a graph based editor in both cases, meaning the spreadsheets will have limited interaction. So updates to the data and relationships won't be made in the spreadsheets themselves but a seperate node-based editor like what's provided with Neo4j.
