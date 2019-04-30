const  book= {
    title:'Ego is the enemy',
    author: 'Someone'
}

//converting to a string:
const bookJSON = JSON.stringify(book)
console.log(bookJSON)

//Converting to an object again:
const parsedData = JSON.parse(bookJSON)
console.log(parsedData)

const fs = require('fs')
fs.writeFileSync('1-json.json',bookJSON)


//reading the file:
const dataBuffer = fs.readFileSync('1-json.json')
console.log(dataBuffer) // a buffer in node to represent dinary data
const data = JSON.parse(dataBuffer) //converting to an object again
console.log(data) //object again