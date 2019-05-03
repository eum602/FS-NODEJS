const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {return "your notes"}
const addNote = (title , body) => {
    const notes = loadNotes()
    //const duplicateNotes = notes.filter(note=>{
      //  return note.title === title
    //})
    //using find instead of filter, because filter loops over all the array whilst find nethod stops at the first match.
    const duplicateNote = notes.find(note => {return note.title ===title})
    debugger

    //if(duplicateNotes.length === 0 ){
        if(!duplicateNote){//if(duplicateNote===undefined){
        notes.push({
            title:title,
            body:body
        })

        saveNotes(notes)

        console.log(chalk.green.inverse('New note added'))
    }else{
        console.log(chalk.red.inverse('Note title taken'))
    }    
}

const removeNote = title => {
    const notes = loadNotes()
    const notesToKeep = notes.filter(note=>{
        if(note.title != title){
            return true
        }
    })

    if(notesToKeep.length===notes.length){
        console.log(chalk.red.inverse("note not found"))
    }else{
        saveNotes(notesToKeep)
        console.log(chalk.magenta.inverse("note deleted"))
    }   
    
}

const listNotes = () => {
    const notes = loadNotes()
    for(const note of notes){
        console.log(chalk.green.inverse(`Title:${note.title} ; Body: ${note.body}`))
    }
}

const readNote = title => {
    const notes = loadNotes()
    const note = notes.find(note => {return note.title ===title})
    if(note){
        console.log(chalk.green.inverse(`Title:${note.title} ; Body: ${note.body}`))
    }else{
        console.log(chalk.red.inverse(`Note not found`))
    }
    
}

const saveNotes = notes => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString() //buffer to string
        return JSON.parse(dataJSON) //object
    }catch (e) {
        return [] //emplty buffer array if the file does not exist
    }    
}
module.exports = {
    getNotes:getNotes,
    addNote:addNote,
    removeNote:removeNote,
    listNotes:listNotes,
    readNote:readNote
}