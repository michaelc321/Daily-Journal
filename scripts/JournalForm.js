import { saveNote, useNotes } from "./JournalProvider.js";
import { useMood, getMood } from "./MoodProvider.js";
import { useInstructor, getInstructor } from "./InstructorProvider.js";

const contentTarget = document.querySelector(".list__column")
const eventHub = document.querySelector(".container")

// Handle browser-generated click event in component
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "noteForm--saveNote") {

        const noteDate = document.querySelector("#journalDate")
        const noteTitle = document.querySelector("#noteForm--title")
        const noteName = document.querySelector("#noteForm--name")
        const noteNotes = document.querySelector("#noteForm--notes")
        const noteMood = document.querySelector("#noteForm--mood")
        const noteInstructor = document.querySelector("#noteForm--instructor")
        const moodId = parseInt(noteMood.value)
        const instructorId = parseInt(noteInstructor.value)

        // Make a new object representation of a note
if (moodId !== 0 && instructorId !== 0) {
        const newNote = {
            date: noteDate.value,
            title: noteTitle.value,
            name: noteName.value,
            text: noteNotes.value,
            moodId: parseInt(moodId),
            instructorId: parseInt(instructorId)
        }

        // Change API state and application state
        saveNote(newNote)
    } else {
        window.alert("Please choose an option in both dropdown menu's.")
    }
    }
})

const render = (allMoods, allInstructors) => {
    contentTarget.innerHTML = `
        <section class="entryForm">
        <form action="">
            <fieldset id="noteForm--date">
                <label for="journalDate">Date of entry</label>
                    <input class="date" type="date" name="journalDate" id="journalDate"></input>
            </fieldset>
        </form>
            <input type="text" id="noteForm--title" placeholder="Enter note title" />
            <input type="text" id="noteForm--name" placeholder="Your name here" />
            <textarea id="noteForm--notes" placeholder="Note text here"></textarea>
            <select id="noteForm--mood">
                <option value="0">Select a Mood ...</option>
                ${
                    allMoods.map(
                        (mood) => {
                            return `<option value="${ mood.id }">${ mood.label }</option>`
                        }
                    )
                }
            </select>
            <select id="noteForm--instructor">
            <option value="0">Select an instructor ...</option>
            ${
                allInstructors.map(
                    (instructor) => {
                        return `<option value="${ instructor.id }">${ instructor.first_name } ${ instructor.last_name }</option>`
                    }
                )
            }
        </select>
            <button id="noteForm--saveNote">Save Note</button>
            <hr class="line">
        </section>
    `
}

export const NoteForm = () => {
    getMood(),
    getInstructor()
        .then(() => {
            const allMood = useMood()
            const allInstructor = useInstructor()
            render(allMood, allInstructor)
        })
}