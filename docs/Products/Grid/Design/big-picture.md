Augmentation of the currently manually generated State Charts to determine whether or not a client needs a license.

In terms of data, the purpose of this interface is to create a repository of legal conclusions that are drawn from cited authority.

What are the conclusions?

Version controlled objects that contain references to their authority and tags that associate them for use.

Conclusions are labeled containers for images, text, graphs, etc. Tags attached that serve to categorize those conclusions, ie criteria.

The grid is designed Manage these data elements for presentation and recall. These conclusions will be frequently presented in a grid chart. The chart will be constructed from the criteria (tags) that are associated with those conclusions.

Allow users to specify criteria on an x or y axis and see the intersections in the grid, where redundant cells are merged together.

> Ask him for an example of this, or to draw this

To be able to store pre-defined grids.

Instead of calling the grid the grid, call it a dynamic table maybe?

David designed a product that is similar to this, where the conclusions where called Swift Facts.

Ultimately this tool will also allow for the collection of this data.

=============================

Object types for our data objects stored in our repository:

Conclusions
Questions
Observation
Factoid
Event
Location
Law
Being/Entity
Jurisdiction
Definition

Other attributes other than type:
Authority Citation (I make an observation, I'm the authority)
Criteria Circumstance ?
Versions ????
Observations

Categories
Classifications

Time Range
Logic/Rule Hierarchy ?
Rank ?

Strategy:

> Get examples for each of the data types described above.
> Ask what he means with defining the x and y axis.
> Create user journey examples where data is mapped into a table.

Definitions:

Objects: Information being stored in the repository. Is defined by a type (ie, conclusion, law, event, etc)
Types: Definitions for what the objects can be. Ie, conlcusion, law, event, etc.
Criteria: Links to other related objects attached to an object. Ie, a Law might have an Event related to it if the event was the date the law came into effect.

Type: Name (only 12 different ones or whatever, see above)
Body: (whatever text we want)

Type: Location
Body: "San Antonio"

Type: Location
Body: "Texas"

Type: Event
Body: "2022 San Antonio Heatwave"
Criteria: Texas (Location), San Antonio (Location)

Type: Conlcusion
Body: "It's hot in San Antonio."
Criteria: Texas (Location), San Antonio (Location), 2022 San Antonio Heatwave (Event)

================

# Expanding the APOR Tool to have other source of data monitored and displayed.

A tool where the user can enter information about their business (scale of production) and find out what their surety bond(s) are in each state.

What license do you hold and what production do you have by state? Is the question we need to ask.

And the answer would be what surety bonds you would need in each state.

David said he has the formulas for calculating the surety bonds for about 25 states.

Monitor the state laws and get a notice for when it (the surety bond rules?) changes.

Wants to have version control on when the laws change.

==================

Put the step in the middle for the APOR tool (type = "step" instead of type = "stepBefore")

===============
Highest priority is to get the Grid functional.

Take the dots off the APOR chart!

====================================

Think about the printability of the grid

Back to working on the Grid refactor.
David is staying with his db friend starting on the 15th so he'll be discussing our options for the database format.

====================================

Establish a collection of legal analysis conclusions and manage and store those conclusions and their dependencies cited and version controlled so they can be fact checked anytime someone needs to evaluate whether theres been a change to the law or whether the conclusion
is appropriate based on the clients facts.

Every set of facts requires a different set of analysis in the law.

Conclusions have dependencies (citations) that validate the conclusion.

How many times have I cited this particular statutue before? To get the context for how it's used.

We wouldn't be able to know the contextual circumstance without a whole bunch of searching.
