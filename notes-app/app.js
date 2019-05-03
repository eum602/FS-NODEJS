const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes')

// ///////////////////////////////lesson 15 - process.argv///////////////////////////////
// console.log("*****************PROCESS.ARGV*********************")
// console.log(process.argv)
// if(process.argv[2]==="add"){
//     console.log('adding')
// }else if (process.argv[2]==="remove"){
//     console.log('Removing')
// }

// console.log("*******************************************")
// //////////////////with yargs//////////////////////////
// console.log("*****************YARGS*********************")
// console.log("***customize yargs version*****")
yargs.version('1.1.0');
//console.log(yargs.argv)

// console.log("***add - remove - read - list*****")
// console.log("*add*")
yargs.command({
    command:'add',
    describe: 'add a new node',
    builder:{
        title: {
            describe:'Note title',
            demandOption:true, //pblige title added
            type: 'string'
        },
        body: {
            describe: "Body example",
            demandOption:true,
            type: 'string'
        }
    },
    handler: argv => {
        //console.log(chalk.green(`Adding a new note ${yargs.argv['title']}`)
        //console.log(chalk.green(`Title: ${argv['title']} \nBody: ${argv.body}`))
        notes.addNote(argv.title, argv.body)
        }
})

//console.log("*remove*")
yargs.command({
    command:'remove',
    describe: 'removing a node',    
    handler: () => {
        console.log(chalk.red('Removing a node')
    )}
})

//console.log("*list*")
yargs.command({
    command:'list',
    describe: 'list nodes',
    handler: () => {
        console.log(chalk.magenta('listing nodes')
    )}
})

//console.log("*read*")
yargs.command({
    command:'read',
    describe: 'read a node',
    handler: () =>{
        console.log(chalk.yellow('Reading a node')
    )}
})

//console.log(yargs.argv) //if we omit this nothing will be prompted
//instead we can also use yargs.parse()
yargs.parse() //this goes through the entire code an process the arguments