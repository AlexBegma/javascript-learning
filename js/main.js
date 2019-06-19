"use strict";

var message = 'I love JavaScript!';
alert(message);

// Объявите две переменные: admin и name.
// Запишите в name строку "Василий".
// Скопируйте значение из name в admin.
// Выведите admin (должно вывести «Василий»).
var name = 'Vasiliy';
var admin = name;
alert(admin);


// Напишите функцию isInteger(num), которая возвращает true, если num – целое число, иначе false.
function isInteger(num) {
	return (num ^ 0) === num;
}
alert( isInteger(1) );
alert( isInteger(1.5) );
alert( isInteger(-0.5) );


let question = confirm('What is your name?', '');
alert(question);
let question2 = prompt('What is your name?', '');
alert(question2);


