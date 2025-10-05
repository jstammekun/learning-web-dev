const os = require('os');
const path = require('path');
const math = require('./math.cjs');

/*
console.log('Hello from Node.js');

console.log(os.type());
console.log(os.version());

console.log(__dirname)
console.log(__filename)

console.log(path.basename(__filename));
console.log(path.extname(__filename));

console.log(path.parse(__filename));
*/

console.log(math.multiply(6, 3));
console.log(math.divide(6, 3));
console.log(math.add(6, 3));
console.log(math.subtract(6, 3));