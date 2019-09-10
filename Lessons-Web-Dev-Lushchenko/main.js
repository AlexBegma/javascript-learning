// Variables  Переменные

// Functions
// function showMessage() {
// 	alert('Hi, friends !')
// }
// showMessage();
//////////////////////////////

// var userName = 'John';

// function showMessage() {
// 	userName = 'Billy';

// 	var newMessage = 'Hello, my name is ' + userName +' !';
// 	alert(newMessage);
// }
// showMessage();

// alert(userName);
//////////////////////////////////

// function isInteger(number) {
// 	return (number ^ 0) === number;
// 	// return number % 1 === 0;
// }

// alert(isInteger(3));
// alert(isInteger(59.7));
// alert(isInteger(-37.2));
// alert(isInteger(29));
//////////////////////////////////////////

// let c = [3, 'Hellow', true];
// c[2] = 999;
// let out = document.getElementById('out');
// let str = '';
// for (var i = 0; i< c.length; i++) {
// 	if (c[i] !==undefined) str +=i+' - '+c[i]+'<br>';
// }
// out.innerHTML = str;
//////////////////////////////////////////////////////////

// function getNumbers(string) {
//     return string.split('').map((el) => parseInt(el)).filter((el) => !isNaN(el));
// }


// alert(getNumbers(`string`)); // returns []
// alert(getNumbers(`n1um3ber95`)); // returns [1,3,9,5]
///////////////////////////////////////////////////////////


const text = 'a mind needs books as a sword needs a whetstone, if it is to keep';
console.log(text.length);
/////////////////////////////////////////

const name = 'Robbi';
console.log(name.toUpperCase());
console.log(name);
/////////////////////////////////////////

const firstName = 'JOHN';
const lowText = firstName.toLowerCase();
console.log(lowText);
/////////////////////////////////////////

const temperature =34.564;
const roundedTemperature = temperature.toFixed(2);
console.log(roundedTemperature);
/////////////////////////////////////////

let any = '   The sun is shining    brightly!   ';
let z = any.trim();
console.log(z);
/////////////////////////////////////////

const text3 = 'Never forget what you are, for surely the world will not';
console.log(`First: ${text3[0]}\nLast: ${text3[text3.length-1]}`);
/////////////////////////////////////////

const text4 = 'When  \n	you play a game of thrones you win or you die.';
console.log(text4.substring(6, 17).trim().length);
/////////////////////////////////////////

const showCurrentDay = () => {
	const text5 = 'today is: Julie 19';
	console.log(text5);
};
showCurrentDay();
//////////////////////////////////////////

const printMotto = () => {
	const weather = 'Winter is coming';
	console.log(weather);
};
printMotto();
// или
const printMotto2 = () => {
	console.log('Summer is coming');
};
printMotto2();
///////////////////////////////////////////

const showCurrentDate = (lala) => {
	console.log(`Today is: ${lala}`);
};
const date = 'January 29';
showCurrentDate(date);
//////////////////////////////////////////

const printSeq = (string, number) => {
	console.log(string.repeat(number));
};
////////////////////////////////////////

const getParentNamesTotalLength = (child) => {
	const mother = getParentFor(child, 'mother');
	const father = getParentFor(child, 'father');
	return mother.length + father.length;
}
///////////////////////////////////////////
// let a = 46;
// if (a == 46) {
// 	alert('it is true.');
// } else {
// 	alert('false.');
// }
//////////////////////////////////////////////////////

// for (let w = 4; w > 2; w ++) {
// 	if(w == 7) break;
// 	alert(w);

// }
////////////////////////////////////////////

// let dd = [22, 33, 44];
// alert(dd);

let out = document.getElementById('out');
out.innerHTML = 'Свойство <b>innerHTML</b> позволяет получить и изменить текст элемента.';
/////////////////////////////////////////////////////

// метод массивов push - добавляет неограниченное количество элементов в конец массива:
let abcd = [3, 5, 8];
console.log(abcd);
abcd.push('Hello, friends!');
abcd.push(54);
console.log(abcd);
// метод pop - удаляет последний элемент массива:
abcd.pop();
console.log(abcd);
// метод shift - удаляет первый элемент массива:
abcd.shift();
console.log(abcd);

let bnm = abcd.shift(); // проверяем, какой эл-т удалили
console.log(bnm);

//  метод unshift - добавляет любое количество новых элементов в начало массива:
abcd.unshift(46);
console.log(abcd);

//  метод join - объединяет элементы массива в строку с указанным разделителем (он будет вставлен между элементами массива):
let abc = [9, 8, 7];
let rfv = abc.join(' % ');
document.write(rfv);

var arr = [1, 2, 3];
var str = arr.join('-');
document.write(str);

//  метод slice - возвращает возвращает подстроку из строки (исходная строка при этом не изменяется);
// метод slice - возвращает указанную часть массива:
let zNumbering = [12, 34, 56, 78, 90, 12, 34, 56, 78, 90];
console.log(zNumbering.slice(1, 3));


// function F() { return F; }

// alert( new F() instanceof F );
// alert( new F() instanceof Function );

// var obj = {value: 1};


// alert(obj) //'[object Object]'
// obj + 'str' //'[object Object]str'
// alert(new Date());


// let a = 1;
// let b = { toString() {return '1'} };
// let c = 1;
// alert(a + b + c);


// Палиндром
const palindrome = str => {
	str = str.toLowerCase();
	return str === str.split('').reverse().join('');
}
console.log(palindrome('racecar'));
console.log(palindrome('blur'));
// or:
function palindromeA(text) {
	var reversedText = text.toLowerCase().split('').reverse().join('');
	return text === reversedText;
}
console.log(palindromeA('apple'));


// FizzBuzz
const fizzBuzz = num => {
	for (var num = 100; num <= num; num++) {
		// проверяем, кратно ли число 3-м или 5-ти
		if (num % 3 === 0 && num % 5 ===0) {
			console.log('fizzbuzz');
		} // проверяем, кратно ли число 3-м
		else if(num % 3 === 0) {
			console.log('fizz');
		 } // проверяем, кратно ли число 5-ти
		 else if (num % 5 === 0) {
		 	console.log('buzz');
		 } else {
		 	console.log(num);
		 }
		}
	}