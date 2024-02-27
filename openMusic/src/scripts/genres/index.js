import allGenreHandler from "./allGenreHandler.js";
import genresHandler from "./genresHandler.js";

const handleButtons = () => {
  const buttons = document.querySelector(".buttonsContainer");
  for (const button of buttons.children) {
    button.textContent === "Todos"
      ? button.addEventListener("click", () => allGenreHandler(button, buttons))
      : button.addEventListener("click", () => genresHandler(button, buttons));
  }
};
export default handleButtons;
