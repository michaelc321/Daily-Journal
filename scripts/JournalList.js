
import { getNotes, useNotes } from "./JournalProvider.js";
import { noteHTMLConverter } from "./JournalHTML.js";

const contentTarget = document.querySelector(".show__notes")

  

const render = (noteArray) => {

    let noteHTML = ""
    
    noteArray.forEach(note => {
        noteHTML += noteHTMLConverter(note)
    })

    contentTarget.innerHTML = `
        <h2>Notes:</h2>
        <article class="noteList">${noteHTML}</article>
    `
}
     
export const NoteList = () => {
    getNotes()
        .then(() => {
            const allNotes = useNotes()
            render(allNotes)
        })
}