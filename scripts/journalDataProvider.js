/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data.
const journal = [
    {
        id: 1,
        date: "07/24/2025",
        concept: "HTML & CSS",
        entry: "HTML is the structure and CSS is the styling.",
        mood: "Ok"
    },
    {
        id: 2,
        date: "07/24/2025",
        concept: "Javascript",
        entry: "Functionality",
        mood: "Ok"
    },
    {
        id: 3,
        date: "07/24/2025",
        concept: "Teamwork",
        entry: "Good Planning",
        mood: "Ok"
    }
]

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const useJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}