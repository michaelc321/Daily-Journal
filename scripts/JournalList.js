
import { getNotes, useNotes } from "./JournalProvider.js";
import { noteHTMLConverter } from "./JournalHTML.js";
import { useMood } from "./MoodProvider.js";
import { useInstructor } from "./InstructorProvider.js";
import { deleteNote } from "./JournalProvider.js";

const contentTarget = document.querySelector(".show__notes")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("noteBtn--")) {
        const [prompt, noteIdString] = clickEvent.target.id.split("--")
        deleteNote(noteIdString)
    }
})
  
eventHub.addEventListener("noteStateChanged", customEvent => {
    const allNotes = useNotes()

    render(allNotes)
})

const render = (noteArray) => {
   const moods = useMood()
   const instructors = useInstructor()

    contentTarget.innerHTML = noteArray.reverse().map(
        (noteObj) => { 
            const foundInstructor = instructors.find(
                (instructObj) => {
                    return instructObj.id === noteObj.instructorId
                }
            )
            
            const foundMood = moods.find(
                (moodObj) => {
                    return moodObj.id === noteObj.moodId
                }
            )
            return noteHTMLConverter(noteObj, foundMood, foundInstructor)
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

// eventHub.addEventListener("noteStateChanged", () => {
//     const newNotes = useNotes()
//     render(newNotes)
// })





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