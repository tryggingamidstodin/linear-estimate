# #linear-estimate

Linear Estimate module creates a function that is able to estimate a linear approximation of a function value based on an array of data points.

It can also take in an optional second array, in which case it merges returns a function made with an estimate from the average of the two arrays

## Examples

```javascript
var f = require('linear-estimate')([[0, 0], [1, 1], [2, 4]])
f(0) //0
f(0.5) //0.5
f(1.5) //2.5

or for two arrays:
var f = require('linear-estimate')([[0, 0], [1, 1], [2, 4]],[[0, 0], [1, 3], [2, 8]])
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

or for two arrays:
import linearEstimateFromArray from 'linear-estimate'
const f = linearEstimateFromArray([[0, 0], [1, 1], [2, 4]],[[0, 0], [1, 3], [2, 8]])
f(0) //0
f(0.5) //1
f(1.5) //4
```

## Code Formatting

We use prettier for code formatting(https://prettier.io/docs/en/). If you do not have a plugin for it installed in your editor, you can format the files like so: ``
