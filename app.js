const flap = require("lodash")

const items = [1, [2, [3, 4, [5]]]]
const setItems = flap.flattenDeep(items)
console.log(setItems)