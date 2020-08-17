let notes = []

const eventHub = document.querySelector(".container")

const dispatchStateChangeEvent = () => {
    const noteStateChangedEvent = new CustomEvent("noteStateChanged")

    eventHub.dispatchEvent(new CustomEvent(noteStateChangedEvent))
}


export const saveNote = (noteObj) => {
    return fetch('http://localhost:8088/entries?_expand=mood', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(noteObj)
    })
    .then(getNotes)
    .then(dispatchStateChangeEvent)
}


export const useNotes = () => {
    return notes.slice()
}

export const getNotes = () => {
    return fetch('http://localhost:8088/entries?_expand=mood')
    .then(response => response.json())
    .then(parsedNotes => {
        notes = parsedNotes
    })
    
}
