# Multi-User Editing

A critical feature of the Grid is the ability for multiple users to be able to edit it. At first, we'll create user sessions so that multiple people can edit the dataset of a Grid instance and have their changes associated with them in the version history. Later, we'll add the ability for multiple users to edit the Grid dataset at the same time.

Creating the ability for multiple users to edit the Grid at the same time will have higher overhead. This is due to the fact that all Grid actions will have to be evaluated for the condition that two (or more) users are conducting that action at the same time, with safeguards in place to prevent or resolve any related issues.
