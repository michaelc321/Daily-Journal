export const noteHTMLConverter = (noteObj, moodObj) => {
    return `
        <section class="note">
        <h2 class="title">${noteObj.title}</h2>
        <div class="name">${noteObj.name}</div>
        <div class="text">${noteObj.text}</div>
        <div class="mood--">${moodObj.label}</div>
        <div class="date">${new Date(noteObj.date).toLocaleDateString('en-US')}</div>
        </section>
    `
}