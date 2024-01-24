const newTaskForm = document.querySelector(".form__container");
newTaskForm.addEventListener("submit", (event) => createNewTask(event));

const createNewTask = (event) => {
  event.preventDefault();
  const content = event.target.querySelector("input").value;
  let type = event.target.querySelector("select").options.selectedIndex;

  if (content.length <= 4)
    return alert("o conteúdo da tarefa deve conter pelomenos 4 caracteres");

  switch (type) {
    case 0:
      alert("selecione a prioridade da tarefa");
      return;
    case 1:
      type = "urgent";
      break;
    case 2:
      type = "important";
      break;
    case 3:
      type = "normal";
      break;
  }

  appendTask({ content, type });
};
