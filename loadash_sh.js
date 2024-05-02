const  i=require('lodash')
const items=[1,[2,[3,[4]]]]
const newItems= i.flattenDeep(items)
console.log(newItems)
