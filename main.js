const taskValue = document.getElementById('task_value');
const taskSubmit = document.getElementById('task_submit');
const taskList = document.getElementById('task_list');

const addTasks = (task) => {
  const listItem = document.createElement('li');
  const showItem = taskList.appendChild(listItem);
  showItem.innerHTML = task;
};

taskSubmit.addEventListener('submit', (e) => {
  e.preventDefault();
  const task = taskValue.value;
  console.log(task);
  task && addTasks(task);
  taskValue.value = '';
});
