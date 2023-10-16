# Performance

Improvements must be made to the current chart viewport rendering system in order to support future features. Currently, the chart is re-rendering every cell when scrolling the viewport, which is incredibly inefficient. Core utility functions for processing the viewport data are also causing a performance slowdown and could be further optimized.

## Improvements

Cell data can likely be cached using [memoization](https://react.dev/reference/react/memo), which would allow the viewport to trigger a re-render only when data inside it has changed.

Utility functions can be refactored or re-written to reduce performance overhead.

Converting the viewport to render using a web assembly component could be considered in the future, but the upfront development cost may be too steep.
