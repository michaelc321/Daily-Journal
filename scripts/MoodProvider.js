let mood = []

export const useMood = () => {
    return mood.slice()
}

export const getMood = () => {
    return fetch('http://localhost:3000/moods')
    .then(response => response.json())
    .then(parsedMood => {
        mood = parsedMood
    })
}