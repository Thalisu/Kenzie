import updateAlbums from "../albums/updateAlbums.js";
const genresHandler = (button, buttons) => {
  if (button.className === "selected") {
    button.classList.remove("selected");
    removeGenres(button.textContent);
    updateAlbums();
    return;
  }

  buttons.children[0].classList.remove("selected");
  button.classList.add("selected");
  addGenres(button.textContent);
  updateAlbums();
};

const addGenres = (genre) => {
  genre = genre.toLowerCase();
  const storage = localStorage.getItem("desiredGenres") ?? "";
  const genres = storage.split(",").filter((x) => x !== "");

  genres.includes(genre) ||
    localStorage.setItem("desiredGenres", genres.concat(genre));
};

const removeGenres = (genre) => {
  genre = genre.toLowerCase();
  const storage = localStorage.getItem("desiredGenres") ?? "";
  const genres = storage.split(",").filter((x) => x !== "");

  if (!genres.includes(genre)) return;

  const index = genres.indexOf(genre);
  localStorage.setItem("desiredGenres", genres.toSpliced(index, 1));
};
export default genresHandler;
