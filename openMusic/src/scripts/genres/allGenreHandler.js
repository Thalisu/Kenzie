const allGenreHandler = (button, buttons) => {
  if (button.className === "selected") {
    button.classList.remove("selected");
    return;
  }
  for (let i = 0; i < buttons.children.length; i++) {
    buttons.children[i].classList.remove("selected");
  }
  button.classList.add("selected");
};
export default allGenreHandler;
