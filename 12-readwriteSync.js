const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

// The flag {a}, will append the text to the file 
writeFileSync('./content/result.txt', `Here is the result ${first}, ${second}`, {flag: 'a'})

const result = readFileSync('./content/result.txt', 'utf8')

console.log(result)

