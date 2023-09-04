// Задание 1
// Задайте в коде переменную n с числовым значением.
// С помощью логического И в условии проверьте, находится ли переменная n в диапазоне чисел от 0 до 100 включительно.

let n = 105;

if (n >= 0 && n <= 100){
    true;
} else {
    false;
}



// Задание 3
// Создать массив из 5 элементов.
// Используя цикл for, вывести каждый второй элемент массива в консоль.

const numbers = [3, 20, 77, 14.5, -8];

for (let i = 1; i < numbers.length; i += 2) {
    console.log(numbers[i]);
}



// Задание 4
// Есть массив произвольных чисел:
// let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70]
// Вывести в консоль значения всех элементов массива и соответствующие им индексы в таком виде:
// Индексу 0 соответствует число 42
// Индексу 1 соответствует число 65
// и т.д.

let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70];

for(let i = 0; i < numbers.length; i++){
    console.log(`Индексу ${i} соответствует число ${numbers[i]}`);
}



// Задание 6
// Есть массив произвольных чисел:
// let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70]
// 1) Вывести в консоль все элементы массива, используя 2 разных цикла: for-of и for со счетчиком
// 2) Посчитать и вывести в консоль сумму элементов в массиве.
// Подсказка: в задачах такого типа нужно заранее предусмотреть переменную (например, sum) и записать в нее начальное значение (в случае с суммой - ноль). Затем уже описать цикл, в котором эта сумма будет считаться (в каждой итерации цикла к ней будет прибавляться следующий элемент массива).
// 3) Посчитать и вывести в консоль сумму только четных чисел в массиве.
// 4) Найти и вывести в консоль максимальное число массива.
// Подсказка: как и в случае с суммой, здесь сначала нужно объявить переменную (например, max), записать в нее первый элемент массива, а затем уже в цикле искать максимальное значение.
// 5) Определить и вывести в консоль индекс максимального числа массива (или индексы, если число встречается более одного раза). Само максимальное число мы уже нашли в прошлой части задачи, повторно его искать не нужно.

let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70];

// 1)
for (let i = 0; i < numbers.length; i++) {
        console.log(numbers[i]);
    }

for (let item of numbers){
        console.log(item);
    }

 // 2)
let sum = 0;

for (let i = 0; i < numbers.length; i++){
    sum += numbers[i];
}

console.log(sum);

// 3)
let sum2 = 0;

for (let i = 0; i < numbers.length; i++){
    if (numbers[i] % 2 === 0) {
        sum2 += numbers[i];
    }
}

console.log(sum2);

// 4)
let max = number[0];

for (let i = 0; i < numbers.length; i++){
    if (max < numbers[i]) {
        max = numbers[i];
    }
    
}   

console.log(max);


// 5)

for (let i = 0; i < numbers.length; i++){
    if (max === numbers[i]) {
       console.log([i]); 
    }
    
}  


// Задание 7
// Определить массив let arr = [5, 4, 3, -3, -10, -1, 8, -20, 0]
// Создать новый массив из элементов массива arr, но в новом должны содержаться только положительные элементы.
// Подсказка. Изначально нужно объявить пустой массив-хранилище (например, let newArr = []). Затем пройтись в цикле по массиву arr, и в каждой итерации, если элемент положительный, добавлять его в массив newArr.

let arr = [5, 4, 3, -3, -10, -1, 8, -20, 0];
let newArr = [];

for(let i = 0; i < arr.length; i++){
    if(arr[i] > 0){
        newArr.push(arr[i]);
    }
}



// Задание 8
// Определить массив, например let nums = [5, 4, 3, 8, 0] и переменную let limit = 5;
// Создать новый пустой массив. В цикле наполнить его элементами nums, но в новом должны содержаться элементы, больше и равные (>=) значению переменной limit.

let nums = [5, 4, 3, 8, 0];

let limit = 5;

let newNums = [];

for(let i = 0; i < nums.length; i++){
    if (nums[i] >= limit){
        newNums.push(nums[i]);
    }
}
