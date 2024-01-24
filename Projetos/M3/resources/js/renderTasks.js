const taskList = document.querySelector(".tasks__list");

const createTaskContainer = (task) => {
  const TaskContainer = document.createElement("div");
  TaskContainer.className = "task-info__container";

  const taskType = document.createElement("span");
  taskType.className = `task-type span-${task.type}`;

  const todoTask = document.createElement("p");
  todoTask.textContent = task.content;

  TaskContainer.appendChild(taskType);
  TaskContainer.appendChild(todoTask);
  return TaskContainer;
};

const deleteTask = () => {
  const deleteTodoTask = document.createElement("button");
  deleteTodoTask.className = "task__button--remove-task";

  const trashIcon = document.createElement("i");
  trashIcon.className = "fa-solid fa-trash";

  deleteTodoTask.appendChild(trashIcon);
  return deleteTodoTask;
};

const appendTask = (task) => {
  const taskItem = document.createElement("li");
  taskItem.className = "task__item";
  taskItem.appendChild(createTaskContainer(task));
  taskItem.appendChild(deleteTask());
  taskList.appendChild(taskItem);
};

for (let i = 0; i < tasks.length; i++) {
  const task = tasks[i];
  appendTask(task);
}
