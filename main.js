const taskValue = document.getElementById('task_value');
const taskSubmit = document.getElementById('task_submit');
const taskList = document.getElementById('task_list');
const getElementH2 = document.querySelector('h2');
const createSpan = document.createElement('span');
const showSpan = getElementH2.appendChild(createSpan);

const addTasks = (task) => {
  const listItem = document.createElement('li');
  const showItem = taskList.appendChild(listItem);
  showItem.innerHTML = task;

  const deleteButton = document.createElement('button');
  deleteButton.innerHTML = '削除';
  listItem.appendChild(deleteButton);

  deleteButton.addEventListener('click', (e) => {
    e.preventDefault();
    deleteTasks(deleteButton);
  });
};

taskSubmit.addEventListener('submit', (e) => {
  e.preventDefault();
  const task = taskValue.value;
  console.log(task);
  task && addTasks(task);
  taskValue.value = '';
  getTasksLength();
});

const deleteTasks = (deleteButton) => {
  const chosenTask = deleteButton.closest('li');
  taskList.removeChild(chosenTask);
};

const getTasksLength = () => {
  const tasks = document.querySelectorAll('li');
  console.log(tasks.length);
  showSpan.textContent = ':' + tasks.length;
};
