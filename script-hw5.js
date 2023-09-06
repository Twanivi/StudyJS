// Задание 1
// Написать функцию, которая принимает два параметра и складывает их.
// Предусмотреть проверку на тип данных. Если хоть один из параметров не является числом, должно выводиться ообщение об ошибке. Также обработайте случай, если не было введено два параметра.
// Примеры результатов вызова функции:
// sum(2,4); // 6
// sum('d',4); // введенные данные не являются числами
// sum(1, [2]); // введенные данные не являются числами
// sum(1); // введите два параметра
// sum(); // введите два параметра

// const sum = (a, b) => {
//     if(a === undefined || b === undefined){
//         console.error('Введите два параметра');
//     } else if(typeof a !== 'number' || typeof b !== 'number'){
//         console.error('Введенные данные не являются числами');
//     } else {
//     console.log(a + b);
//     }
// }

// sum(2,4); 
// sum('d',4); 
// sum(1, [2]); 
// sum(1); 
// sum(); 



// Задание 2
// Измените функцию "square" так, чтобы в случае ее вызова без аргумента генерировалась консольная ошибка (console.error):
// "Функция "square" не может быть вызвана без аргумента"
// function square(a) {
//   console.log(a * a)
// }
// square(10) // 100
// square()
// ДО: NaN
// ПОСЛЕ: Uncaught Error: Функция "square" не может быть вызвана без аргумента

// function square(a) {
//     if(a === undefined){
//         console.error('Функция "square" не может быть вызвана без аргумента');
//     } else {
//         console.log(a * a);
//     }
// }



// Задание 3
// Создать функцию "угадай число". Она принимает число от 1 до 10 (обязательно проверить, что число не больше 10 и не меньше 0). Генерирует рандомное число от 1 до 10 и сравнивает с заданным числом.
// Если они совпали, то возвращает “Вы выиграли”, если нет - то “Вы не угадали, ваше число -  ...,  а выпало число ...”
// Функция создания случайного числа уже была ранее в материалах, в задаче по созданию случайного цвета.
// Написать функцию в стрелочном синтаксисе.

const guessNum = a => {
    if(a > 0 && a <= 10){
        return getRandomInteger(1, 10);
       
    }
    
    if (a === getRandomInteger){
        return `Вы выиграли`;
    } else {
        return `Вы не угадали, ваше число - ${guessNum},  а выпало число ${getRandomInteger}`;
    }
}

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
    }

guessNum();

console.log(guessNum);




// Задание 4
// Напишите функцию copyArr(arr), которая копирует массив, не изменяя оригинал. Используйте подходящий метод массива - forEach или map.

// const array = [25, 30, 44, 10];

// const copyArr = array.map(arr => {
//     return arr;
// });

// console.log(copyArr);




// Задание 5
// Напишите функцию, которая принимает массив имен и возвращает новый массив, в котором каждое имя будет иметь приставку "Hello, "

// const names = ['Oksana', 'Ruslan', 'Irina']

// const newNames = names.map(item => {
//     return 'Hello, ' + item;
// })

// console.log(newNames);




// Задание 6
// Напишите функцию, которая принимает массив объектов пользователей и возвращает новый массив, содержащий только их имена.

// const users = [{name: 'Aleks', age: 20}, {name: 'Sara', age: 25}, {name: 'Victor', age: 18}];

// const names = users.map(item => {
//    return item.name; 
// })

// console.log(names);



// Задание 7
// Создайте функцию sumObjectValues, которая будет суммировать все значения свойств, которые являются числами. Сумму чисел необходимо вернуть из функции.
// Проверить работу функции можно на объекте:
// const objectWithNumbers = {
//   a: 10,
//   b: 20,
//   c: 'string',
//   d: 12,
// }

// const objectWithNumbers = {
//     a: 10,
//     b: 20,
//     c: 'string',
//     d: 12,
// }

// const sumObjectValues = (objectWithNumbers) => {
//     objectWithNumbers.forEach(item => {
//         if(item === 'number'){
//             Object.values(item)++;
//         }
//         return item;
//     })
// }

// sumObjectValues(objectWithNumbers)
// console.log(sumObjectValues)
// // не получается


   


// Задание 8
// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом.
// Вам понадобятся методы строк.

// let first = 'str';

// let ucFirst = first[0].toUpperCase() + first.slice(1, 3);


// console.log(ucFirst);




// Задание 9
// Напишите функцию checkSpam(str), возвращающую true, если str содержит 'badWord' или 'XXX', а иначе false.
// Функция должна быть нечувствительна к регистру.

// let spam = 'str';
// let string = 'badWord';
// let string2 = 'XXX';

// spam.toLowerCase();
// string.toLowerCase();
// string2.toLowerCase();

// let checkSpam = spam.includes(string) || spam.includes(string2);   

// console.log(checkSpam);
