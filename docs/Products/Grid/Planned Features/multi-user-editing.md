# Multi-User Editing

A critical feature of the chart is the ability for multiple users to be able to edit it. At first, we'll create user sessions so that multiple people can edit the chart and have their changes associated with them. Later, we'll add the ability for multiple users to edit the chart at the same time.

Creating the ability for multiple users to edit the chart at the same time will incur significant overhead. This is due to the fact that all chart actions will have to be evaluated for the condition that two (or more) users are conducting that action at the same time, with safegaurds in place to prevent or resolve any issues that could arise.
