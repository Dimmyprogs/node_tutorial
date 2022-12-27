const {readFile, writeFile} = require('fs')

readFile('./content/first.txt','utf8', (error, data)=>{
    if(error) throw error
    const first = data
    readFile('./content/second.txt', 'utf8', (error, data)=>{
        if(error) throw error
        const second = data
        writeFile('./content/result.txt', `Here is the result, ${first}, ${second}`, (error, data)=>{
            readFile('./content/result.txt', 'utf8', (error, data)=>{
                if(error) throw error
                console.log(data)
             })
        })
    })
 })

 

 