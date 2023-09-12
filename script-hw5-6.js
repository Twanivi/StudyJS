// Задание 10
// Написать функцию, которой на вход подается строка, на выход она дает символы наоборот (разворачивает строку). Пример: «привет, Женя» -> «янеЖ ,тевирп»
// Обратите внимание: метод reverse существует только у массивов.

const string = 'привет, Женя';

const stringReverse = string.split("").reverse().join("");

console.log(stringReverse);



// Задание 11
// Массив содержит строки с информацией о железнодорожных станциях на севере Англии. Строки представляют собой трёхбуквенный код станции, затем некоторые машиночитаемые данные, за которыми следует точка с запятой, а затем название станции, пригодное для чтения человеком. 
// let stations = [
// 'MAN675847583748sjt567654;Manchester Piccadilly',
// 'GNF576746573fhdg4737dh4;Greenfield',
// 'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
// 'SYB4f65hf75f736463;Stalybridge',
// 'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'
// ];
// Необходимо извлечь код станции и имя и поместить их в строку со следующей структурой:
// MAN: Manchester Piccadilly
// Вывести эти строки в консоль
// ПОДСКАЗКА:
// 1. Извлеките трёхбуквенный код станции и сохраните его в новой переменной.
// 2. Найдите номер символьного номера точки с запятой.
// 3. Извлеките название для чтения человеком, используя номер индекса точки с запятой в качестве контрольной точки и сохраните его в новой переменной.
// 4. Объедините две новые переменные и строк

let stations = [
    'MAN675847583748sjt567654;Manchester Piccadilly',
    'GNF576746573fhdg4737dh4;Greenfield',
    'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
    'SYB4f65hf75f736463;Stalybridge',
    'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'
    ];

const readNameStation = (stations) => {
    stations.forEach(item => {
        let code = item.slice(0, 3);

        let name = item.slice(item.indexOf(';') + 1);

        console.log(`${code}: ${name}`);
        })
}

stations.forEach(item => {
    const code = item.slice(0,3);
    const number = item.indexOf(';');
    const station = item.slice(number +1)
})

readNameStation(stations);





// Задание 12
// Напишите функцию unique(arr), которая принимает массив, а возвращает новый массив, содержащий только уникальные элементы arr.
// Пример:
// let strings = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", ":-O"];
// console.log(unique(strings) ); должен вывести "кришна, харе, :-O"
// ПОДСКАЗКА
// - создать новый массив
// - обойти исходный массив, если элемент отсутствует в новом - добавлять его в новый. Таким образом в новый добавятся только уникальные.

let strings = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", ":-O"];

const uniqueStrings = [];

strings.forEach(item => {
    if(!uniqueStrings.includes(item)){ 
        uniqueStrings.push(item);
    }
})

console.log(uniqueStrings);




// Задание 13
// Женя и Юля изучают кошек. Каждая из них узнала у 10 владельцев кошек о возрасте их кошки и сохранила данные в массиве (по одному массиву для каждой девочки). На данный момент им просто интересно узнать, является ли кошка взрослой или котёнком.
// Кошка считается взрослой, если ей не менее 2 лет, и котёнком, если ей менее 2 лет.
// Создайте функцию verifyCats, которая принимает 2 массива возрастов кошек (catsJane и catsJulia) и выполняет следующие действия:
// 1. Женя выяснила, что владельцы первой и последней кошки на самом деле имеют собак, а не кошек! Поэтому удалите возраст собак из Жениного массива.
// 2. Создайте общий массив с данными Жени (исправленными) и Юли.
// 3. Для каждой кошки этого общего массива выведите в консоль текст:
// - если кошка взрослая -  Кошка № 1 взрослая, ей 6 лет
// - если котёнок - Кошка № 2 ещё котёнок
// 4. Вызовите функцию для двух наборов тестовых данных.
// Тестовые данные:
// 1.  Данные Жени [4, 5, 3, 11, 6, 2, 4, 1, 5, 9]
// Данные Юли [2, 4, 5, 1, 13, 2, 15, 8, 3, 7]
// 2.  Данные Жени [3, 5, 9, 14, 1, 2, 6, 8, 3, 10]
// Данные Юли [8, 2, 10, 1, 2, 5, 6, 3, 1, 4]
// В задании необходимо использовать методы массивов: forEach, slice, concat


const verifyCats = (catsJane, catsJulia) => {
    const newCatsJane = catsJane.slice(1, catsJane.length - 1);

    const allCats = newCatsJane.concat(catsJulia);

    allCats.forEach ((item, index) => {
        if(item >= 2){
        console.log(`Кошка № ${index + 1} взрослая, ей ${item} лет`);
        } else {
            console.log(`Кошка № ${index + 1} ещё котёнок`);
        }
    });

}

verifyCats([4, 5, 3, 11, 6, 2, 4, 1, 5, 9], [2, 4, 5, 1, 13, 2, 15, 8, 3, 7]);
verifyCats([3, 5, 9, 14, 1, 2, 6, 8, 3, 10], [8, 2, 10, 1, 2, 5, 6, 3, 1, 4]);



// Задание 14
// Решить 4 задание из прошлой темы, используя метод filter
// Определить массив, например let arr = [5, 4, 3, 8, 0];
// Создать функцию filterFor(arr, a). Функция должна вернуть новый массив из элементов arr, но в нем должны содержаться элементы, которые больше или равны (>=) значения переменной a.
// Например, запуск функции filterFor(arr, 5) дает результат [5,8]
// запуск функции filterFor(arr, 10) дает результат []
// запуск функции filterFor(arr, 3.11) дает результат [4,5,8]

let arr = [5, 4, 3, 8, 0];

const filterFor = (arr, a) => arr.filter(item => item >= a);

console.log(filterFor(arr, 5));
console.log(filterFor(arr, 10));
console.log(filterFor(arr, 3.11));



// Задание 15
// Описать функцию, которая принимает массив строк и возвращает массив, содержащий только строки более 3-х символов. Проверить работу функции на примере:  ['yes', 'hello', 'no', 'easycode', 'what'].

const words = ['yes', 'hello', 'no', 'easycode', 'what'];

const moreThreeLetters = (words) => words.filter(item => item.length > 3);

console.log(moreThreeLetters(words));



// Задание 16
// Отсортируйте массив массивов так, чтобы вначале располагались наименьшие массивы (размер массива определяется его длиной): [ [14, 45], [1], ['a', 'c', 'd'] ] → [ [1], [14, 45], ['a', 'c', 'd'] ]
// ПОДСКАЗКА. Для правильной сортировки метод sort принимает функцию, параметры которой a и b - это элементы массива. В данной задаче элементы массива, то есть параметры a и b, сами являются массивами и обладают всеми свойствами массивов.

const array = [ [14, 45], [1], ['a', 'c', 'd'] ];

const sortedArray = (array) => array.sort((a, b) => a.length - b.length);

console.log(sortedArray(array));




// Задание 17
// Создайте функцию getAverageHumanAge, которая принимает массив возрастов кошек (catAges) и выполняет следующие действия по порядку:
// 1. Рассчитывает человеческий возраст по следующей формуле: если возраст кошки <= 2 года, человеческий возраст = возраст кошки * 10. Если кошке больше 2 лет, человеческий возраст = возраст кошки * 7. (сделать через map)
// 2. Исключает всех кошек младше 18 человеческих лет. (сделать через filter)
// 3. Возвращает средний человеческий возраст для всех взрослых кошек. (сумму для среднего посчитать через reduce)
// Вызовите функцию для обоих наборов тестовых данных.
// Тестовые данные:
// 1: [7 , 3, 2, 4, 1, 15, 8, 1, 9, 2]
// 2: [1, 16, 12, 4, 5, 1, 3, 11, 7, 2]
// В задании необходимо использовать методы массивов: map, filter, reduce



const getAverageHumanAg = catAges => {
    const humanAges = catAges.map(item => item <= 2 ? item * 10 : item * 7);
    
    const bigCats = humanAges.filter(item => item >= 18);
    
    const sum = bigCats.reduce((acc, item) => acc + item, 0);
    
    return (sum / bigCats.length).toFixed();
}

console.log(getAverageHumanAg([7 , 3, 2, 4, 1, 15, 8, 1, 9, 2]));
console.log(getAverageHumanAg([1, 16, 12, 4, 5, 1, 3, 11, 7, 2]));





// Урок 6
// Задание 1
// Примените каждый из этих методов округления к трем числам: 5.4, 5.5, 5.6:
// Math.round(x)
// Math.ceil(x)
// Math.floor(x)
// В комментариях к каждой строке напишите, как работают эти округления.

let x = 5.6;

console.log(Math.round(x)); // 5, 6, 6 - округляет по математическим правилам: до 0,5 в меньшую сторону, после - в большую
console.log(Math.ceil(x));  // 6, 6, 6 - округляет чило в большую сторону, независимо от числа после запятой
console.log(Math.floor(x)); // 5, 5, 5 - округляет чило в меньшую сторону, независимо от числа после запятой



// Задание 2
// Выведите в консоль фразы в 2 строки:
// Сегодня 27 октября 2022 (здесь будет ваша дата) - используйте options для вывода месяца словом
// 19 часов 20 минут (здесь будет ваше время) - используйте шаблонную строку, в которую подставьте значения с помощью методов getHours() и getMinutes()

let now = new Date();

let options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
}

console.log(`Сегодня ${now.toLocaleString('ru-Ru', options)}`);
console.log();

let hours = now.getHours();

let minutes = now.getMinutes();
console.log(`${hours} часов ${minutes} минут`);