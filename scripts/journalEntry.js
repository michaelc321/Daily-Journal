/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
export const JournalEntryComponent = (entry) => {
    return `
        <section id="journal__section" class="journalEntry">
           <div class="date">${entry.date}</div>
           <div class="concepts">${entry.concept}</div>
           <div class="entry">${entry.entry}</div>
           <div class="mood">${entry.mood}</div>
        </section>
    `
}