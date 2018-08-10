/*console.log("hello web");
console.log(111);
console.log(true);
console.log([1, 2, 3]);
var hi = "hi ali";
console.log(hi);
console.log({ a: 1, b: 2 });
console.table({ a: 3, b: 4 });

console.error("this is error");
console.warn("am warning you");

console.time("hwllo");
console.log("here it is");
console.log("here it is");
console.log("here it is");
console.log("here it is");
console.log("here it is");
console.log("here it is");
console.log("here it is");
console.log("here it is");
console.timeEnd("hwllo");
console.clear();
*/
//var, let, const

// var name = "moha siyad";
// console.log(name);
// name = "hassan siyad";
// console.log(name);

//primitive datatypes
// var age;
// console.log(age);
// age = 11;
// console.log(age);
// console.log(typeof age);
// console.clear();
// const haskids = true;
// console.log(haskids);

// const sym = Symbol();
// console.log(typeof sym);

//reference data types
// arrays
// const hobies = ['wwe', 'ufc'];

// //object literal
// console.log(typeof hobies);
// const city = {
//   name: "boston",
//   address: "ma"
// }
// console.log(typeof city);

// const today = new Date();
// console.log(today);

// const num1 = 100;
// const num2 = 50;
// let val;
// val = num1 + num2;

// val = num1 * num2;
// val = Math.PI;
// val = Math.E;
// val = Math.round(2.7);
// val = Math.ceil(3.1);
// val = Math.floor(2.9);
// val = Math.sqrt(36);
// val = Math.abs(-3);
// val = Math.pow(6, 2);
// val = Math.max(1, 2, 3, 44, 55);
// val = Math.min(1, 2, 3, 44, 55);
// val = Math.random();
// val = Math.floor(Math.random() * 300 + 1);

// const firstName = "md";
// const lastName = "machenical";
// const age = 25;
// const str = "hi my name is ali";
// let val;
// val = firstName + lastName;
// val = firstName + ' ' + lastName;
// //append
// val = 'brad ';
// val += 'traversy';
// val = 'Hi, my name is ' + firstName + ' I am ' + age + " year's old";
// //escaping
// val = 'that\'s awesome i can\'t wait';
// //lenght
// val = firstName.length;
// //concat()
// val = firstName.concat(' ', lastName);
// //change case

// val = firstName.toUpperCase();
// val = lastName.toLowerCase();

// // counting variable words
// val = firstName[0];
// //indexof()
// val = firstName.indexOf('m');
// val = lastName.lastIndexOf('a');
// //charAt()

// val = lastName.charAt(5);
// //get last char
// val = lastName.charAt(lastName.length - 1);
// //substring
// val = lastName.substring(0, 3);

//slice same as substring

// val = lastName.slice(0, 3);
// val = lastName.slice(-3);

// //split//turns variable into array
// val = str.split(' ');
// //replaces
// val = str.replace('ali', 'hassan');

// val = str.includes('hi');
// console.log(val);

//template literals


// const name = "brad traversy";
// const age = 25;
// const city = "afgoi";
// const job = "Web developer";
// let html;
// //without template strings

// html = '<ul><li>Name: ' + name + '</li><li>age: ' + age + '</li><li>City: ' + city + '</li></ul>';

// //with string template strings()
// function hello() {
//   return "hello";
// }
// html = `
// <ul>
// <li>Name:${name}</li>
// <li>Age:${age}</li>
// <li>City:${city}</li>
// <li>job:${job}</li>
// <li>sub:${2 + 2}</li>
// <li>omg:${hello()}</li>
// <li>${age > 20 ? 'over 20':'under 20'}</li>

// </ul>
// `;
// document.body.innerHTML = html;

//objects

// const person = {
//   name: "siyad",
//   age: 23,
//     //array inside object
  
//   hobies: ['music', 'wwe'],
//     //object inside object
//   address: {
//     city: 'afgoi',
//     state:'SH'
//   },
//   //function inside object
//   getbirthdayyear: function () {
//     return 2018-this.age;
//   }
// }

// let val;
// val = person.name;
// val = person['age'];
// val = person.hobies[1];
// val = person.address.city;
// val = person.getbirthdayyear();

// //array inside object

// const people = [
//   { nam: "hassan", age: 33 },
//   { nam: "ali", age: 22 },
//   { nam: "qadaye", age: 44 }
// ];

// for (let i = 0; i < people.length; i++){
//   console.log(people[i].age);
// }

// let val;
// const today = new Date();
// //month day year
//  birthday = new Date('9 10 1995 11:30:22');
// birthday = new Date('9-10-1995 11:30:22');
// birthday = new Date('october 10 1995 11:30:22');
// birthday = new Date('9/10/1995 11:30:22');
// //getmonth is 0 based
// val = today.getMonth();
// // val = today.getDate();
// // val = today.getDay();
// // val = today.getFullYear();
// // val = today.getHours();
// // val = today.getMinutes();
// // val = today.getSeconds();
// // val = today.getMilliseconds();
// // val = today.getTime();//timestamp
// // //setting dates
// // birthday.setMonth(3);
// // birthday.setDate(12);
// // birthday.setFullYear(1996);
// // birthday.setHours(3);
// // birthday.setMinutes(22);
// // birthday.setSeconds(11);
// console.log(val);

// console.log(birthday);

//conditional statements
//equal
//const id = 100;
// if (id == 1000) {
//   console.log('correct');
// } else {
//   console.log('incorrect');
// }
// if (id != 1000) {
//   console.log('correct');
// } else {
//   console.log('incorrect');
// }
//equal value and type
// if (id === 100) {
//   console.log('correct');
// } else {
//   console.log('incorrect');
// }
// //not equal value and type
// if (id !== 100) {
//   console.log('correct');
// } else {
//   console.log('incorrect');
// }

// if (typeof id !== 'undefined') {
//   console.log(`the id is ${id}`);
// }
// else {
//   console.log("No ID");
// }

// const id = 100;
// if (id >= 100) {
//   console.log("correct");
// } else {
//   console.log("Not correct");
// }

// const color = "yellow";
// if (color === 'red') {
//   console.log('color is red')
// } else if (color === 'blue') {
//   console.log('color is blue');
// } else {
//   console.log('color is not defined');
// }

// const name = "hassan";
// const age = 15;
// //AND &&
// // if (age > 0 && age < 12) {
// //   console.log(`${name} is child`);
// // } else if (age >= 13 && age <= 19) {
// //   console.log(name, 'is teenager');
// // } else {
// //   console.log(`${name} is adult`);
// // }
// //or ||
// if (age < 16 || age >= 65) {
//   console.log(`${name} can not run in race`);
// } else {
//   console.log(`${name} can run in race`);
// }
// //ternary operator
// console.log(age === 100 ? 'Correct' : 'incorrect');
// if (age === 15)
//   console.log('correct');
// else
//   console.log('incorrct');


//type convertion
// let val;
// val = String(10);
// val = String(true);
// val = String([1, 2, 3, 4]);

// //tostring();
// val = (5).toString();

// //string to number
// val = Number('10');
// val = Number(true);
// val = Number(false);
// val = Number('saad');
// val = parseInt('10');
// val = parseFloat(100.2056);


// console.log(val);
// console.log(typeof val);
// //console.log(val.length);
// console.log(val.toFixed(2));

//const val1 = String(5);
// const val1 = Number('5');
// const val2 = 5;
// const sum = val1 + val2;
// console.log(typeof sum);
// console.log(sum);
//arrays
// const numbers = [1, 2, 3, 4, 5];
// const people = new Array('hassan', 'ali', 'maslah');
// const mixed = [22, 'sami', true, undefined, null, { a: 1, b: 2 }, new Date()];

// let val;
// //get array length 
// val = numbers.length;
// //check if is array
// val = Array.isArray(numbers);
// //get single data in array
// val = numbers[3];
// //insert into array
// numbers[0] = 100;
// //find indexof value
// val = numbers.indexOf(2);
// //mutating array
// //add at the end
// // numbers.push(200);
// // //add at front
// // numbers.unshift(1);
// // //take from end
// // numbers.pop();
// // //take of from front
// // numbers.shift();
// // //slice values
// // //numbers.splice(1);
// // numbers.reverse();
// //concatinate array
// val = numbers.concat(people);

// val = numbers.sort();
// val = numbers.sort(function (x,y) {
//   return x - y;
// });

// // val = numbers.sort(function (x,y) {
// //   return y - x;
// // });


// val = people.sort();
// console.log(numbers);
// console.log(val);

// const color = 'blue';
// switch (color) {
//   case 'red':
//     console.log('color is red');
//     break;
//   case 'blue':
//     console.log('color is blue');
//     break;
//   case 'orange':
//     console.log('color is orange');
//     break;
//   default:
//     console.log('default runs');
//     break;
// }

// let day;
// switch (new Date().getDay()) {
//   case 0:
//     day = 'Sunday';
//     break;
//   case 1:
//     day = 'Monday';
//     break;
//   case 2:
//     day = 'Tuesday';
//     break;
//   case 3:
//     day = 'Wednesday';
//     break;
//   case 4:
//     day = 'Thursday';
//     break;
//   case 5:
//     day = 'Friday';
//     break;
//   case 6:
//     day = 'Saturday';
//     break;
    
// }
// console.log(`today is ${day}`);

//functions
//declarations

// function greeting(firstName='hassan',lastName='siyad') {
//   //console.log('hello web');
//   // if (typeof firstName == 'undefined') { firstName = 'mohamed' }
//   // if (typeof lastName == 'undefined') { lastName = 'siyad' }
  
//   return 'hello '+firstName+' '+lastName;
// }
// console.log(greeting());
//function expression
// const square = function (x) {
//   return x * x;
// }

// console.log(square(5));

//immidiatly invokable function expression
// (function(name) {
//   console.log('hello '+name);
// })('md siyad');

//property methods

// const todo = {
//   add: function () {
//     console.log('todo add runs.');
//   },
//   edit: function (id) {
//     console.log(`edit id is ${id}`);
//   }
// }
//   todo.delete = function() {
//     console.log('delete runs...');
// }  

// todo.add();
// todo.edit(23);
// todo.delete();

//loops 
//for loops

// for (i = 0; i <= 10; i++){
//   if (i == 2) {
//     console.log('2 is my favorite '+i);
//     continue;
//   }

//   if (i == 6) {
//     console.log('loop stopped');
//     break;
//   }
//   console.log('number ' + i);
// }

// //while loop
// let i = 0;
// while (i < 10) {
//   console.log('love you ' + i);
//  // i = i + 1;
//   i++; 
//}

//Do while loops
// let i = 1;
// do {
//   console.log('number' + i);
//   i++;
// }
// while (i < 10);

//loop through array

//const cars = ['toyota', 'chevy', 'honda', 'BMW', 'Marcedes','Landrover','limounise'];
// for (let i = 0; i < cars.length; i++){
//   console.log(cars[i]);
// }

//foreach with loop

// cars.forEach(function (car,index,array) {
//   console.log(`${index}:${car}`);
//   //console.log(array);
// });

//map loop

// const users = [
//   { id: 10, name: 'ali' },
//   { id: 20, name: 'hassan' },
//   { id: 30, name: 'hafsa' },
//   { id: 40, name: 'sabirin' },

// ]
// const ids = users.map(function (user) {
//   return user.id;
// });
// console.log(ids);

//for in loop with object

// const user = {
//   firstName: 'mohamed',
//   lastName: 'siyad',
//   age:25
// }
// for (let i in user) {
//   console.log(`${i}:${user[i]}`);
//   //i is the index and user[i] is the value
// }
 

//windows
window.history.go(-2);

// const name = prompt();
// alert(name);

let val;
val = window.outerHeight;
val = window.outerWidth;


val = window.innerHeight;
val = window.innerWidth; 
//scoll points

val = window.scrollY;
val = window.scrollX;
//window.location.reload();
val = window.navigator;
val = window.navigator.userAgent;
val = window.navigator.vendor;
val = window.navigator.language;


if (window.navigator.platform == "Win32") {
  console.log("your bs is windows");
}
console.log(val);

//scopes
//Gloval
// var a = 1;
// const b = 2;
// let c = 3;

// //block
// if (true) {
//   var a = 9;
// const b = 4;
//   let c = 5;
//   console.log('block scope:', a, b, c);

// }

// //it over writes a variable because of using var 
// console.log('Global scope:', a, b, c);