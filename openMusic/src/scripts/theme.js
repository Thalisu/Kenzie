const theme = () => {
  const toggleDarkMode = document.querySelector(".toggleDarkMode");

  localStorage.getItem("theme") === "darkMode" &&
    document.documentElement.classList.add("darkMode");

  toggleDarkMode.addEventListener("click", () => {
    document.documentElement.classList.toggle("darkMode");
    localStorage.setItem("theme", document.documentElement.classList);
  });
};
export default theme;
