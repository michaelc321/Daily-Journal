export const noteHTMLConverter = (noteObj) => {
    return `
        <section class="note">
        <h2 class="title">${noteObj.title}</h2>
        <div class="name">${noteObj.name}</div>
        <div class="text">${noteObj.text}</div>
        <div class="mood">${noteObj.mood}</div>
        <div class="date">${new Date(noteObj.date).toLocaleDateString('en-US')}</div>
        </section>
    `
}