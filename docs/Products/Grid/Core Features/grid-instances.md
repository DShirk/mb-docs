# Grid Instances

The Grid mainly functions as a way to render unstructured data into a cell-based UI editor. One of the main use cases of the Grid is to be able to package and distribute this data, which will be facilitated through Grid instances.

## Master Data Set

All company insights will be stored in one master dataset. This dataset will be editable via the Grid UI, and should serve as the sole source of truth for our data. In effect, the master data set is the parent of all other datasets to be packaged and distributed.

## Instances

A Grid instance is a container that holds an unstructured dataset and metadata about that dataset. The master dataset exists as a Grid instance which other instances can be created from. The metadata for a Grid instance includes:

- A title, description, etc
- Version history for all changes made to that dataset
- Tags, Citations, and Annotations for that dataset.
- Whether or not the instance is the master dataset.

## Creating New Instances

To package and distribute data from the master dataset, a new Grid instance can be formed to contain that data. Grid instances can be created from other instances by copying over parts of their dataset. This allows for editing the data in the new Grid instance without affecting the original instance it was copied from.
