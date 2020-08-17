import { saveNote, useNotes } from "./JournalProvider.js";
import { useMood, getMood } from "./MoodProvider.js";

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
        const [prompt, moodId] = noteMood.value.split("--")

        // Make a new object representation of a note
        const newNote = {
            date: noteDate.value,
            title: noteTitle.value,
            name: noteName.value,
            text: noteNotes.value,
            moodId: parseInt(moodId)
        }

        // Change API state and application state
        saveNote(newNote)
    }
})

const render = (allMoods) => {
    contentTarget.innerHTML = `
        <section class="entryForm">
        <form action="">
            <fieldset id="noteForm--date">
                <label for="journalDate">Date of entry</label>
                    <input type="date" name="journalDate" id="journalDate"></input>
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
                            return `<option value="mood--${ mood.id }">${ mood.label }</option>`
                        }
                    ).join("")
                }
            </select>
            <button id="noteForm--saveNote">Save Note</button>
        </section>
    `
}

export const NoteForm = () => {
    getMood()
        .then(() => {
            const allMood = useMood()
            render(allMood)
        })
}