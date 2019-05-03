const fs = require('fs')

const getNotes = () => {return "your notes"}
const addNote = (title , body) => {
    const notes = loadNotes()
    const duplicateNotes = notes.filter(note=>{
        return note.title === title
    })

    if(duplicateNotes.length === 0 ){
        notes.push({
            title:title,
            body:body
        })

        saveNotes(notes)

        console.log('New note added')
    }else{
        console.log('Note title taken')
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
    addNote:addNote
}