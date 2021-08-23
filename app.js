const _ = require('lodash') 

const items = [1,2,3,[3,[3,[6]]]]
const newItems = _.flattenDeep(items);
console.log(newItems);