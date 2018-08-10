//Define UI vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearbtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskinput = document.getElementById('task');

// load event listerners

loadEventListeners();

//load event listener function
function loadEventListeners() {
  //Dom loaded
  document.addEventListener('DOMContentLoaded',gettasks);
  form.addEventListener('submit', addTask);
  taskList.addEventListener('click', removeTask);
  clearbtn.addEventListener('click', clearTasks);
  filter.addEventListener('keyup', filterTasks);
}

// get tasks function

function gettasks() {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];

  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function (task) {
    
      //create list item
  const li = document.createElement('li');
  li.className = 'collection-item';

  li.appendChild(document.createTextNode(task));
  //create link element
  const link = document.createElement('a');
  //add class to link
  link.className = 'delete-item secondary-content';
  //add icon
  link.innerHTML = '<i class="fa fa-remove"></i>';
  li.appendChild(link);

  // append li to ul
  taskList.appendChild(li);

  });



}
//add task function
function addTask(e) {
  if(taskinput.value === '') {
    alert('add a task');
  }
  //create list item
  const li = document.createElement('li');
  li.className = 'collection-item';

  li.appendChild(document.createTextNode(taskinput.value));
  if (li.textContent === '') {
    li.textContent.remove();
  }
  //create link element
  const link = document.createElement('a');
  //add class to link
  link.className = 'delete-item secondary-content';
  //add icon
  link.innerHTML = '<i class="fa fa-remove"></i>';
  li.appendChild(link);

  

  // append li to ul
  taskList.appendChild(li);

  storetaskinlocalstorage(taskinput.value);

  taskinput.value = '';

  e.preventDefault(); 
}

// store into local storage

function storetaskinlocalstorage(task){
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];

  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));

}
//localStorage.clear();

function removeTask(e) {
  if (e.target.parentElement.classList.contains('delete-item')) {
    if (confirm('Are you sure?')) {
      e.target.parentElement.parentElement.remove();
        //remove task from local storage

    removeTaskFromLocalStorage(e.target.parentElement.parentElement);

    }
  
  }
}


// removeTaskFrom Local Storage
function removeTaskFromLocalStorage(taskitem){

  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];

  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function(task,index) {
    
    if (taskitem.textContent === task) {
      tasks.splice(index,1);
    }

  });
// setting local storage
  localStorage.setItem('tasks', JSON.stringify(tasks));  
}

// clear tasks btn
function clearTasks() {
  //taskList.innerHTML = '';

  //faster
  if (confirm('Are you sure?')) {
    
  
    while (taskList.firstChild) {
      taskList.removeChild(taskList.firstChild);
    }
  } 
  
  // clear all task from local storage
  clearAllstrorage();
}

//clearAllstrorage
function clearAllstrorage() {
  localStorage.clear();
}


//filter tasks
function filterTasks(e) {
  const text = e.target.value.toLowerCase();

  document.querySelectorAll('.collection-item').forEach(function(task) {
    const item = task.firstChild.textContent;
    if (item.toLowerCase().indexOf(text) != -1) {
      task.style.display = 'block'; 
    } else {
      task.style.display = 'none';
    }
  });
}