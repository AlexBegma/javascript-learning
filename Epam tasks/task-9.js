Input data for task 8 and 9.
[
  {
    "_id": "5b5e3168c6bf40f2c1235cd6",
    "index": 0,
    " birthday ": '2016-03-18T00:00:00',
    "eyeColor": "green",
    "name": "Stein",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5b5e3168e328c0d72e4f27d8",
    "index": 1,
    " birthday ": '1991-02-11T00:00:00',
    "eyeColor": "blue",
    "name": "Cortez",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "5b5e3168cc79132b631c666a",
    "index": 2,
    " birthday ": '1984-04-17T00:00:00',
    "eyeColor": "blue",
    "name": "Suzette",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5b5e31682093adcc6cd0dde5",
    "index": 3,
    " birthday ": '1994-04-17T00:00:00',
    "eyeColor": "green",
    "name": "George",
    "favoriteFruit": "banana"
  }
]

// from ... ?
function getNumbers(string){
    let numberMass = [], newMass = [];
    for(let i = 0; i < string.length; i++){
        newMass.push(string.substr([i], 1))
    }
    for(let i of newMass){
        i = +i;
        if(!isNaN(i)){
            numberMass.push(i);
        }
    }
    return numberMass;
}
alert(getNumbers);

// function findTypes(){
//     let mass = {};
//     let element;
//     for(let i = 0; i < arguments.length; i++){
//         element = typeof arguments[i]
//         if(mass.hasOwnProperty(element)){
//             mass[element] += 1
//         }else{
//             mass[element] = 1
//         }
//     }
//     return mass
// }

// function executeforEach(arr, func){
//     for(let i = 0; i < arr.length; i++){
//         func(arr[i])
//     }
// }

// function mapArray(arr, func){
//     let mass = [];
//     executeforEach(arr, function (transform) {
//         mass.push(func(transform));
//     });
//     return mass;
// }

// function filterArray(arr, func){
//     let mass = [];
//     executeforEach(arr, function (filter) {
//         if(func(filter)) {
//             mass.push(filter)
//         }
//     });
//     return mass;
// }

// function showFormattedDate(date) {
//     let options = { month: 'short', day: '2-digit'};
//     const formatDate = date.toLocaleDateString('en-us', options);
//     return '\'' + 'Date: ' + formatDate + ' ' + date.getFullYear() + '\'';
//   }

//   function canConvertToDate(string){
//     let possibleDate = new Date(string);
//     return !isNaN(possibleDate);
//   }

//   function daysBetween(firstDate, secondDate){
//     let seconds = 1000;
//     let minutes = 3600;
//     let hours = 24;
//     let diference;
//     diference = Math.ceil(Math.abs(secondDate.getTime() - firstDate.getTime()) / (seconds * minutes * hours));
//     return diference
//   }

//   function getAmountOfAdultPeople(data){
//       let adultAge = 6574;
//       return filterArray(data, function (person) {
//         daysBetween(new Date(person.birthday), new Date()) > adultAge
//     }).length;
//   }

//   function keys(object){
//       let keysArr = [];
//       for(let i in object){
//         if(object.hasOwnProperty(i)){
//             keysArr.push(i)
//         }
//       }
//       return keysArr;
//   }

//   function values(object){
//     let valuesArr = [];
//     for(let i in object){
//       if(object.hasOwnProperty(i)){
//           valuesArr.push(object[i])
//       }
//     }
//     return valuesArr;
// }



// // from vderunov/FL-11 Volodymyr Derunov
// // TASK 0

// function getNumbers(string) {
//     const array = [];

//     for (let char of string) {
//         isNaN(char) ? null : array.push(+char);
//     }
//     return array;
// }

// // TASK 1

// function findTypes(...args) {
//     const obj = {};
//     let type;

//     for (let value of args) {
//         type = typeof value;
//         obj.hasOwnProperty(type) ? obj[type] += 1 : obj[type] = 1;
//     }
//     return obj;
// }

// // TASK 2

// function executeforEach(array, callBack) {
//     for (let i = 0; i < array.length; i++) {
//         callBack(array[i]);
//     }
// }

// // TASK 3

// function mapArray(array, callBack) {
//     const newArray = [];

//     executeforEach(array, function(item) {
//         newArray.push(callBack(item));
//     });
//     return newArray;
// }

// // TASK 4

// function filterArray(array, callBack) {
//     const newArray = [];

//     executeforEach(array, function(item) {
//         callBack(item) ? newArray.push(item) : null;
//     });
//     return newArray;
// }

// // TASK 5

// function showFormattedDate(strDate) {
//     const date = strDate.toDateString(strDate);
//     const cutWeekDay = 4;
//     let formattedDate;

//     formattedDate = date.substring(cutWeekDay);

//     return `Date: ${formattedDate}`;
// }

// // TASK 6

// const canConvertToDate = date => !isNaN(Date.parse(date));

// // TASK 7

// function daysBetween(firstDate, secondDate) {
//     const timeMsFirst = new Date(firstDate);
//     const timeMsSecond = new Date(secondDate);
//     const millisecondsInDAY = 86400000;
//     const diffTime = Math.abs(timeMsFirst.getTime() - timeMsSecond.getTime());
//     const diffDays = Math.round(diffTime / millisecondsInDAY);

//     return diffDays;
// }

// // TASK 8

// function getAmountOfAdultPeople(data) {
//     const currentDate = Date.now();
//     const daysAYear = 365.25;
//     const adult = 18;
//     const arrayForFilter = [];
//     let count = 0;
//     let birthdayDate;
//     let age;

//     for (let i = 0; i < data.length; i++) {
//         birthdayDate = Date.parse(data[i]['birthday']);
//         age = Math.floor(daysBetween(currentDate, birthdayDate) / daysAYear);
//         arrayForFilter.push(age);
//     }

//     filterArray(arrayForFilter, function(item) {
//         return item > adult ? count++ : null;
//     });

//     return count;
// }

// // TASK 9

// function keys(obj) {
//     const array = [];

//     for (let key in obj) {
//         if (obj.hasOwnProperty(key)) {
//             array.push(key);
//         }
//     }
//     return array;
// }

// // TASK 10

// function values(obj) {
//     const array = [];

//     for (let key in obj) {
//         if (obj.hasOwnProperty(key)) {
//             array.push(obj[key]);
//         }
//     }
//     return array;
// }



// // from Siusarna/FL-11  Dmytro Petruniak
// // 0
// function getNumbers(str){
//   let arr = [];
//   let temp;
//   for (let i=0;i<str.length;i++){
//     temp = parseInt(str[i]);
//     if(!isNaN(temp)){
//       arr.push(temp);
//     }
//   }
//   return arr;
// }

// // 1
// function findTypes(...args){
//   let result = {};
//   let key = '';
//   for (let i = 0; i < args.length; i++) {
//     key = typeof args[i];
//     if (result.hasOwnProperty(key)) {
//       result[key] +=1;
//     } else{
//       result[key] = 1;
//     }
//   }
//   return result;
// }

// // 2
// function executeforEach(arr,func){
//   for (let i = 0; i < arr.length; i++) {
//     func(arr[i]);
//   }
// }

// // 3
// function mapArray(arr,func){
//   const result = [];
//   executeforEach(arr,function(el){
//     result.push(func(el));
//   });
//   return result;
// }

// // 4
// function filterArray(arr,func){
//   const result = [];
//   executeforEach(arr,function(el){
//     if(func(el)){
//       result.push(el);
//     }
//   })
//   return result;
// }

// // 5
// function showFormattedDate(date){
//   const shortMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
//   const day = date.getDate();
//   const month = shortMonths[date.getMonth()];
//   const year = date.getFullYear();
//   return `Date: ${month} ${day} ${year}`;
// }

// // 6
// function canConvertToDate(date){
//   if(isNaN(Date.parse(date))){
//     return false;
//   }
//   return true;
// }

// // 7
// function daysBetween(date_first, date_second){
//   const diff = date_second - date_first;
//   const milisecondPerDay = 86400000;
//   return Math.round(diff/milisecondPerDay);
// }

// // 8
// function getAmountOfAdultPeople(data){
//   const dayPer18Years = 6570;
//   const now = new Date();
//   const result = filterArray(data, function(el) {
//     const birthday = new Date(el[' birthday ']);
//     return daysBetween(birthday,now) > dayPer18Years;
//   });
//   return result.length;
// }

// // 9
// function keys(obj){
//   const result = [];
//   for (let i in obj) {
//     if (obj.hasOwnProperty(i)) {
//       result.push(i);
//     }
//   }
//   return result;
// }

// // 10
// function values(obj){
//   const result = [];
//   for (let i in obj) {
//     if (obj.hasOwnProperty(i)) {
//       result.push(obj[i]);
//     }
//   }
//   return result;
// }