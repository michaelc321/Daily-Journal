let instructor = []

export const useInstructor = () => {
    return instructor.slice()
}

export const getInstructor = () => {
    return fetch('http://localhost:3001/instructor')
    .then(response => response.json())
    .then(parsedData => {
        instructor = parsedData
    })
}