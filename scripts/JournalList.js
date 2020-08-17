
import { getNotes, useNotes } from "./JournalProvider.js";
import { noteHTMLConverter } from "./JournalHTML.js";
import { useMood } from "./MoodProvider.js";

const contentTarget = document.querySelector(".show__notes")

  

const render = (noteArray) => {
   const moods = useMood()

    contentTarget.innerHTML = noteArray.reverse().map(
        (noteObj) => { 
            const foundMood = moods.find(
                (moodObj) => {
                    return moodObj.id === noteObj.moodId
                }
            )
            return noteHTMLConverter(noteObj, foundMood)
        }
    ).join("")
}
     
export const NoteList = () => {
    getNotes()
        .then(() => {
            const allNotes = useNotes()
            render(allNotes)
        })
}





// // onst render = (noteArray) => {

// //     let noteHTML = ""
    
// //     noteArray.forEach(note => {
// //         noteHTML += noteHTMLConverter(note)
// //     })

// //     contentTarget.innerHTML = `
// //         <h2>Notes:</h2>
// //         <article class="noteList">${noteHTML}</article>
// //     `
// }