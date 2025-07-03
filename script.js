document.addEventListener("DOMContentLoaded", () => {
  fetch("books.json")
    .then((res) => res.json())
    .then((books) => {
      renderBooks("recommendations", books.slice(0, 4));
      renderBooks("trending", books.slice(4, 8));
    });
});

function renderBooks(sectionId, books) {
  const section = document.getElementById(sectionId);
  section.innerHTML = "";
  books.forEach((book) => {
    const card = document.createElement("div");
    card.className = "book-card";
    card.innerHTML = `
      <img src="${book.cover}" alt="${book.title}">
      <p><strong>${book.title}</strong></p>
      <p style="font-size: 0.9em; color: gray;">by ${book.author}</p>
    `;
    section.appendChild(card);
  });
}

function filterCategory(genre) {
  fetch("books.json")
    .then((res) => res.json())
    .then((books) => {
      const filtered = books.filter(book => book.genre === genre);
      renderBooks("recommendations", filtered);
    });
}
