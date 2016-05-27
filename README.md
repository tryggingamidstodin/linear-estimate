linear-estimate
=====

## Example

```javascript
var f = require('linear-estimate')([
	[0, 0],
	[1, 1],
	[2, 4],
]);
f(0);//0
f(0.5);//0.5
f(1.5);//2.5
```
