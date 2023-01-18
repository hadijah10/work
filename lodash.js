const dash = require('lodash')

const items = [1,[2,[3,4,[5,6]]]]
const newitem = dash.flattenDeep(items)
console.log(newitem)