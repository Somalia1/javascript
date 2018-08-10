// let val;
// val = document;
// val = document.all;
// val = document.all[3];
// val = document.all.length;
// val = document.head;
// val = document.body;
// val = document.domain;
// val = document.doctype;
// val = document.URL;
// val = document.characterSet;
// val = document.contentType;


// val = document.forms;
// val = document.forms[0];
// val = document.forms[0].id;
// val = document.forms;
// val = document.forms[0].action;
// val = document.links[0];
// val = document.links[0].className;
// val = document.links[0].classList;

// val = document.images;
// val = document.scripts;
// val = document.scripts[2].attributes['src'];


// let scripts = document.scripts;
// let scriptArr = Array.from(scripts);

// scriptArr.forEach(function(script) {
//   console.log(script.attributes['src']);
// });


// console.log(val);

//document.getElementById

// console.log(document.getElementById('task-title'));
// console.log(document.getElementById('task-title').id);
// console.log(document.getElementById('task-title').className);
// const tasktitle = document.getElementById('task-title');
// tasktitle.style.background = '#333';
// tasktitle.style.color = '#fff';
// tasktitle.style.padding = '5px';
// //change content
// tasktitle.textContent = 'Task list';
// tasktitle.innertext = 'Task list';
// tasktitle.innerHTML = '<span style="color:red">Task lists</span>';
// //document.querySelector
// console.log(document.querySelector('#task-title'));
// console.log(document.querySelector('.card-title').className);
// console.log(document.querySelector('h5'));
// document.querySelector('li').style.color = "red";
// document.querySelector('ul li').style.color = "red";
// document.querySelector('li:last-child').style.color = "orangeg";
// document.querySelector('li:nth-child(3)').style.color = "yellow";
// document.querySelector('li:nth-child(4)').style.color = "blue";
// document.querySelector('li:nth-child(5)').textContent = 'brove';
// document.querySelector('li:nth-child(odd)').style.background = "#ccc";
// document.querySelector('li:nth-child(even)').style.background = "#f4f4f4";

// const items = document.getElementsByClassName('collection-item');
// // console.log(items);
// // console.log(items[0]);
// items[0].style.color = 'red';
// //way too good
// const listitems = document.querySelector('ul').getElementsByClassName('collection-item');
// console.log(listitems);

// let lis = document.getElementsByTagName('li');
// // console.log(lis);
// // console.log(lis[3]);
// // lis[0].style.background = '#ccc';
// // lis[1].style.background = '#f4f4f4';
// lis[0].textContent = 'siyad';

// lis = Array.from(lis);
// // lis.reverse();
// // console.log(lis);

// lis.forEach(function (li,index) {
//   console.log(li);
//   li.textContent = `${index}:hello`;
// });

//querySelectorAll


// let items = document.querySelectorAll('ul.collection li.collection-item');
// console.log(items);
// items.forEach(function (item,index) {
//   item.textContent = `$c{index}: hello`;

// });

// const odd = document.querySelectorAll('li:nth-child(odd)');

// const even = document.querySelectorAll('li:nth-child(even)');

// odd.forEach(function (li, index) {
//   li.style.background = '#ccc';
// });


// for (let i = 0; i < even.length; i++){
//   even[i].style.background = '#f4f4f4';
//   console.log(even[i]);
// }
//traversing dom
// let val;
// const list = document.querySelector('ul.collection');
// const listitems = document.querySelector('li.collection-item:first-child');

// val = list;
// val = listitems;
//get child nodes

//val = list.childNodes;

//val = list.childNodes[0].nodeName;
//val = list.childNodes[9].nodeType;
//1-  element
//2-   attribute
//3-  text node
//8-  comment
//9-  document it self
//10- doctype

//get children elements node
// val = list.children;
// val = list.children[0];
// val = list.children[1].textContent = 'nawaal';
// //children of children
// val = list.children[0].children[0].id = 'test';
// val = list.children[0].children[0];

// //firstchil
// val = list.firstChild;
// val = list.firstElementChild;

// //last child and childcount

// val = list.lastChild;
// val = list.lastElementChild;
// val = list.childElementCount;

// //parent node
// val = listitems.parentNode;
// val = listitems.parentElement;
// val = listitems.parentElement.parentElement.parentElement;
// //siblings
// val = listitems.nextSibling;
// val = listitems.nextElementSibling;
// //prev sibling

// val = listitems.previousElementSibling;
// //val = listitems.nextElementSibling.nextElementSibling.previousElementSibling;


//console.log(val);

//creating element

// const li = document.createElement('li');
// //add class
// li.className = 'collection-item';
// //add id
// li.id = 'new-item';

// //add attribute
// li.setAttribute('title', 'new item');
// //add text node and append

// li.appendChild(document.createTextNode('hello web'));

// const lin = document.createElement('a');
// lin.className = 'delete-item secondary-content';
// lin.id = 'test';
// lin.innerHTML = '<i class="fa fa-remove"></i>';
// //append link to li
// li.appendChild(lin);


// //append li as ul child
// document.querySelector('ul.collection').appendChild(li);

// console.log(li);
//replacing element

// const newHeading = document.createElement('h2');
// newHeading.id = 'task-title';
// //new text node
// newHeading.appendChild(document.createTextNode('New List'));
// //old heading
// const oldHeading = document.getElementById('task-title');
// //accessing parent
// const cardAction = document.querySelector('.card-action');
// //replace
// cardAction.replaceChild(newHeading, oldHeading);

// console.log(newHeading);
//remove element
// const lis = document.querySelectorAll('li');
// const list = document.querySelector('ul');
// lis[0].remove();

// //remove child
// list.removeChild(lis[1]);

// remove class & attr

// const firstli = document.querySelector('li:first-child');
// const link = firstli.children[0];
// let val;
// val = link.className;
// val = link.classList[0];
// // add class list
// link.classList.add('hello');
// link.classList.remove('hello');
// val = link;
// //attributes

// val = link.setAttribute('href', 'http://google.com');
// val = link.getAttribute('href');
// val = link.setAttribute('title', 'google');
// link.getAttribute('title');
// link.removeAttribute('title');
// val = link;
// // link.hasAttribute('title');


// console.log(val);

//events

// document.querySelector('.clear-tasks').addEventListener('click', function (e) {
//   console.log('clicked');
//   e.preventDefault();
// });

//named functions

// document.querySelector('.clear-tasks').addEventListener('click', onclick);
// function onclick(e) {
//  // console.log('clicked');
 
//   // let val;
//   // val = e;
//   //event target element
//   // val = e.target;
//   // val = e.target.className;
//   // val = e.target.classList;
//   // e.target.innerText = 'clicked';
//   // val = e.type;
//   // val = e.timeStamp;
// //coords event relative to windows
  

//   // val = e.clientY; //vertical
//   // val = e.clientX; // horizontal
//   // // coords event relative to element
//   // val = e.offsetY; //vertical
//   // val = e.offsetX; // horizontal

//   //val = e;
//   //val = e.button.background ='#ccc';
//   document.getElementById('task-title').style.background = '#f4f4f4';

//   //console.log(val);
// }

// const clrbtn = document.querySelector('.clear-tasks');
// const card = document.querySelector('.card');
// const heading = document.querySelector('h5');

// //clrbtn.addEventListener('click', runevent);
// //clrbtn.addEventListener('mousedown', runEvent);
// //clrbtn.addEventListener('mouseup', runEvent);
// // card.addEventListener('mouseenter', runEvent);
// // card.addEventListener('mouseleave', runEvent);
// // card.addEventListener('mouseover', runEvent);
// // card.addEventListener('mouseout', runEvent);
// card.addEventListener('mousemove', runEvent);



// function runEvent(e) {
//   console.log(`EVENT TYPE:${e.type}`);
//   heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;
// //   if (e.offsetX > 500 && e.offsetY > 100)  {
// //     // alert("you won!");
// //     card.style.backgroundColor = '#f4f4f4';
    
// // }

//   document.body.style.backgroundColor = `rgb(${e.offsetY},${e.offsetX},50)`;  

// }
// const form = document.querySelector('form');
// const taskinput = document.getElementById('task');
// const h5 = document.querySelector('h5');

// //clear input
// taskinput.value = '';
//events
//form.addEventListener('submit', runEvent);
//taskinput.addEventListener('keydown', runEvent);
// // taskinput.addEventListener('keyup', runEvent);
// taskinput.addEventListener('keypress', runEvent);
//taskinput.addEventListener('focus', runEvent);
// taskinput.addEventListener('blur', runEvent);
// taskinput.addEventListener('cut', runEvent);
// taskinput.addEventListener('paste', runEvent);
// taskinput.addEventListener('input', runEvent);
// taskinput.addEventListener('change', runEvent);
//use select




// //key down
// function runEvent(e) {
//   console.log(`Event Type: ${e.type}`);

//  // console.log(e.target.value);
//   //console.log(taskinput.value);
//   //h5.textContent = e.target.value;

// }
// // function runEvent(e) {
// //   console.log(`Event Type: ${e.type}`);
// //   console.log(taskinput.value);
// //   taskinput.value = '';
// //   e.preventDefault();
// // }

// event bubbling

// document.querySelector('.task-title').addEventListener('click', function () {
//   console.log('task title');
// });


// document.querySelector('.card-content').addEventListener('click', function () {
//   console.log('card content');
// });

// document.querySelector('.card').addEventListener('click', function () {
//   console.log('card');
// });


// document.querySelector('.col').addEventListener('click', function () {
//   console.log('col');
// // });

// //event delegation
// // const delitem = document.querySelector('.delete-item');
// // delitem.addEventListener('click', deleteitem);

// document.body.addEventListener('click', deleteitem);

// function deleteitem(e) {

//   // if (e.target.parentElement.className === 'delete-item secondary-content') {
//   //   console.log('item deleted');

//   // }

//   if (e.target.parentElement.classList.contains('delete-item')) {
//     console.log('item deleted');
//     e.target.parentElement.parentElement.remove();
//   }
//   console.log('body deleted');

// }

//local storage
// localStorage.setItem('name', 'Brad');
// //session storage
// // sessionStorage.setItem('Name', 'traversy');

// const name = localStorage.getItem('name');
// console.log(name);
//clear
// localStorage.removeItem('name');
// localStorage.clear();


// document.querySelector('form').addEventListener('submit',
//   function (e) {
//     let tasks;
//     const input = document.getElementById('task').value;

//     if(localStorage.getItem('tasks')=== null)
//     {
//       tasks = [];    
//     } else {
//       tasks = JSON.parse(localStorage.getItem('tasks'));    
// }
//     tasks.push(input);

//     localStorage.setItem('tasks', JSON.stringify(tasks));
//     alert('task saved');
//     e.preventDefault();  
//   });

// const looptasks = JSON.parse(localStorage.getItem('tasks'));
// looptasks.forEach(function (tas) {
//   console.log(tas);
// })
