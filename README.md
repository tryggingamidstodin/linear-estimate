# #linear-estimate

Linear Estimate module creates a function that is able to estimate a linear approximation of a function value based on an array of data points.

It also has functions to calculate linear estimates based on averages or sums of multiple arrays.

## Type definitions

```typescript
export interface Point extends Array<number> {}
export default function linearEstimateFromArray(
    array: Point[]
): (value: number) => number
export declare function linearEstimateFromAverageOfArrays(
    arrays: Point[][]
): (value: number) => number
export declare function linearEstimateFromSumOfArrays(
    arrays: Point[][]
): (value: number) => number
```

## Examples

```javascript
var f = require('linear-estimate')([[0, 0], [1, 1], [2, 4]])
f(0) //0
f(0.5) //0.5
f(1.5) //2.5

var f = require('linear-estimate').linearEstimateFromAverageOfArrays([
    [[0, 0], [1, 1], [2, 4]],
    [[0, 0], [1, 3], [2, 8]]
])
f(0) //0
f(0.5) //1
f(1.5) //4

var f = require('linear-estimate').linearEstimateFromSumOfArrays([
    [[0, 0], [1, 1], [2, 4]],
    [[0, 0], [1, 3], [2, 8]]
])
f(0) //0
f(0.5) //1
f(1.5) //4
```

```typescript
import linearEstimateFromArray from 'linear-estimate'
const f = linearEstimateFromArray([[0, 0], [1, 1], [2, 4]])
f(0) //0
f(0.5) //0.5
f(1.5) //2.5

import { linearEstimateFromAverageOfArrays } from 'linear-estimate'
const f = linearEstimateFromArrays([
    [[0, 0], [1, 1], [2, 4]],
    [[0, 0], [1, 3], [2, 8]]
])
f(0) //0
f(0.5) //1
f(1.5) //4

import { linearEstimateFromSumOfArrays } from 'linear-estimate'
const f = linearEstimateFromArrays([
    [[0, 0], [1, 1], [2, 4]],
    [[0, 0], [1, 3], [2, 8]]
])
f(0) //0
f(0.5) //2
f(1.5) //8
```

## Code Formatting

We use prettier for code formatting(https://prettier.io/docs/en/). If you do not have a plugin for it installed in your editor, you can format the files like so: ``
