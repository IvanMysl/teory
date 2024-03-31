// Оголошення змінних:
// let - змінна якій в поадльшому можна присвоїти нове значення
// const - змінна, яка має стале значення, не можна переприсвоїти
// var

// let age = 5;
// console.log(age);
// age = 10;
// console.log(age);

// const age = 5;
// console.log(age);
// age = 10;
// console.log(age);

// let username; //невизачена змінна
// console.log(username)

// примітивні типи даних

// Number - цілі числа і числа з плаваючою комою
// String - рядок який починається одинарними ', aбо " лапками
// const string = "string"
// Boolean - логічний тип, має тільки 2 значення true or false
// console.log(true===1);
// null - значення яке означає ніщо.
// undefined - значення не визначене

// оператор typeof - вказує тип даних
// let username;
// console.log(typeof username);

// Виведення даних
// console.log('Виводимо дані в консоль');
// alert('Виводимо дані на екран');

// Отримання даних
// confirm() - виводить модальне вікно з повідомленям і дві копки ok(true) and cancel(false)
// const isComing = confirm("Будь ласка підтвердіть");
// console.log(isComing);
// prompt() = Виводить модальне вікно з полем вводу і кнопками ok(те що ввів користувач) і Cancel(null)

// const value = prompt("Будь ласка введіть номер готелю");
// console.log(typeof value);
// console.log(value);

// Основні оператори
// математичні оператори
// const x = 5;
// const y = 5;
// Додавання
// console.log(x+y);
// Відімання
// console.log(x-y);
// Множення
// console.log(x*y);
// ділення
// console.log(x/y);
// остача
// console.log(x%y);
// x and y - операнди, */+- - оператори

// Оператори порівняння

// a>b i a<b - більше/менше
// a>=b i a=<b - більше/менше або дорівнює
// a==b - рівність
// a!=b - нерівність
// a===b - сувора рівність
// a!==b - сувора нерівність
// console.log(5 == "5");буде true
// console.log(5 === "5");буде false

// числа
// console.log(Number);
// console.log(Number("5"));
// console.log(+"5");
// console.log(Number(+"5 fdd")); /Nan
// console.log(Number.parseInt("5 px")); повертає ціле число з рядка
// console.log(Number.parseFloat("5 px")); повертає дробове число
// const invalidNumber = Number("dfnfn");
// console.log(Number.isNaN(invalidNumber));
// class Math

// console.log(Math.floor(1.7)); повертає найменше ціле число
// console.log(Math.ceil(1.1)); повертає найбільше ціле число
// console.log(Math.round(1.7)); повертає число заокруглене до найближчого цілого (математичне округлення)
// console.log(Math.max(20,30,40,50));поертає найбільше ціле з набору
// console.log(Math.min(20, 30, 40, 50)); найменше з набору
// console.log(Math.pow(2,4));//підносить до степеня
// console.log(Math.sqrt(16)); визначає квадратний корінь
// console.log(Math.random()); повертає випадкове число в діапазоні від 0 до 1
// const random = Math.round(Math.random() * (99 - 70) + 70); - повертає рандомне в діаразоні
// console.log(random);

// рядки
// ------------------12345
// const username = 'Dimon';
// ------------------01234
// const message = "mango" + "is" + "happy";
// console.log(message);
// console.log(1 + "2" + 4);
// console.log(1 + 2 + "4");
// console.log(`Наше сповіщення та змінна зверху ${message}`); - підставляє змінну в рядок

// const userName = "Sophia";
// const roomNumber = 207;

// const greeting = `Доброго дня ${username}, вітаємо в нашому готелі, ваш номер ${roomNumber}`;
// console.log(greeting);
// console.log(greeting.toLowerCase());
// console.log(greeting.toUpperCase);
// console.log(greeting.includes("x"));
// .length - властивість щоб дізнатись довжину рядка
// .toLowerCase() - повертає рядок в нижньому регістрі
// .toUpperCase() - повертає рядок в верхньому регістрі
// .includes() - перевіряє чи міститься підрядок в рядку
// .endsWith - дозволяє визначити чи завершується рядок символами

// Логічні оператори
// and &&, логічне і
// вираз && вираз
// const age = 20;
// console.log(age > 10 && age < 30);
// or ||,
// const age = 40;
// console.log(age<10 || age >30);
// not !
// console.log(!true)

// розгалуження

// if (condition){
// тіло функціїї
// }

// if (condition){
// true
// } else {
// false
// }

// const carYears = 100;
// if (carYears > 10) {
//   console.log("Машина стара");
// } else {
//   console.log("Машина нова");
// }
// carYears>10 ? console.log("машина стара") : console.log("машина нова") тернарний оператор(короткий запис розгалуження)

// let cost;
// const subscription = "premium";
// switch (subscription) {
//   case "free":
//     cost = 0;
//     break;
//   case "pro":
//     cost = 100;
//     break;
//   case "premium":
//     cost = 500;
//     break;
//   case "large":
//     cost = 300;
//     break;
//   default:
//     console.log("Невірна підписка");
//     break;
// }
// console.log(cost);

// const num = 13;
// if (num % 2 === 0) {
//   console.log(`${num} - парне число`);
// } else {
//   console.log(`${num} - непарне число`);
// }
// Область видимості - доступність змінних у певному місті коду
// Глобальна область видимості використовується за замовчуванням,
// кожен має доступ до змінних, оголошених в ній, будь яка конструкція, яка використовує фігурні дужки
// створює нову локальну область видимості
// const global = "global";
// if (true) {
//   const blockA = "blockA";

//   console.log(global); //глобальна змінна
//   console.log(blockA); // локальна область A
//   console.log(blockB); // blockB is not defined
//   console.log(blockC); // blockC is not defined
//   if (true) {
//     const blockB = "block B";
//     console.log(global); //глобальна змінна
//     console.log(blockA); // block A
//     console.log(blockB); //block B
//     console.log(blockC); //blockC is not defined
//   }
// }
// if (true) {
//   const blockC = "block C";
//   console.log(global); //Глобальна змінна
//   console.log(blockC); //block C
//   console.log(blockA); // block A is not defined
//   console.log(blockB); // block B is not defined
// }
// console.log(global); //Глобальна змінна
// console.log(blockA); //block A is not defined
// console.log(blockB); // block B is not defined
// console.log(blockC); // block C is not defined

// цикли
// while(condition){
//     код,тіло циклу
// }
// let counter = 0;
// let counter1 = 0;

// while (counter < 10) {
//   console.log("counter:", counter);
//   counter += 1;
// }

// do{

// }while (condition)
// do {
//   console.log("counter do while:", counter); цикл, де каже робити це, поки. з пост умовою
//   counter1 += 1;
// } while (counter < 10);

// for (initialization; condition; post-expression){
//     statements
// }

// for (let i =0; i<10; i++){
// console.log(i);
// if (i===5){
//     console.log("Знайшли число 5, перериваємо цикл!");
//     break;
// }
// }

// const num = 10;
// for (let i = 0; i < num; i++) {
//   if (i % 2 === 0) {
//     continue;
//   }
//   console.log("Непарне i:", i)
// }

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// const max = 10;
// for (let i = 0; i < max; i++) {
//   console.log(`${max}%${i}=`, max % i);
// }
// const start = 5;
// const end = 134444444;
// let totalSum = 0;
// for (let i = start; i <= end; i++) {
//   if (i % 2 === 0) {
//     totalSum = totalSum + i;
//   }
// }
// console.log(totalSum);
// масив - структура даних для зберігання і маніпулювання колекцією
// індексованих значень даних, наприклад списку курортів, товарів, клєнтів...
// const clients = ["Ivan", "Dima", "Olga"];
// console.log(clients[0]);
// console.log(clients[1]);
// console.log(clients[2]);
// console.log(clients.length); (к-сть елементів)
// ітерація по масиву
// for(let i = 0; i<clients.length; i++){
//     console.log(clients[i]);
// }
// // цикл for ... of
// // for(const variable of iterable)
// for(const client of clients){
// console.log(client);
// }
// // присвоєння за посиланням і за значенням
// let a = 5;
// let b = a;
// console.log(a); //5
// console.log(b);//5
// a = 10;
// console.log(a);//10
// console.log(b);//5

// методи масиву
// split(delinetr) - перетворює рядок в масив, розбиваючи його роздільником деліметр
// якщо роздільник це порожній рядок, то створиться масив окремих символів. Роздільником може бути 1 або декілька символів
// const name = "Banana";
// console.log(name.split(""));
// const message = "Java Script - це цікаво";
// console.log(message.split(" "));
// join(delimiter) об'єднує елементи масиву у рядок
// У рядку елементи будуть розділені символом або групою символів, зазначених у delimiter.
// Тобто ця операція протилежна до методу рядків split(delimiter)
// const words = ["JavaScript", "-", "це", "цікаво"];

// console.log(words.join(""));
// console.log(words.join(" "));
// console.log(words.join("-"));
// const fullName = "Tapac Шевченко";
// const fullName2 = fullName.split(" ");
// const fullName3 = fullName2.reverse();
// console.log(fullName3.join(", "));

// const words = ["JavaScript", "-", "це", "цікаво"];
// метод push() додає один або декілька елементів
// наприкінці масиву, без необхідності зазначати індекси елементів, що додаються
// повертає довжину масиву після додавання елементів
// const item = "string";
// words.push(item);
// console.log(words);

// метод pop() видаляє останній елемент з кінця масиву і повертає видалений елемент.
// Якщо масив порожній, метод повертає undefined
// const carNames = ['Toyota', 'Honda', 'Ford', 'Chevrolet', 'BMW'];
// for(const car of carNames){
// console.log(car);
// }
// const cars = [
//   { brand: "Toyota", model: "Camry", year: 2022 },
//   { brand: "Honda", model: "Accord", year: 2021 },
//   { brand: "Ford", model: "Mustang", year: 2023 },
//   { brand: "Chevrolet", model: "Malibu", year: 2022 },
// ];
// const bmw = { brand: "BMW", model: "x0", year: 1922 };

// cars.push(bmw);
// console.log(cars);
// for (let i = 0; i < cars.length; i++) {
//   console.log(cars[i].model);
// }

// slice(begin,end)-повертає новий масив, який містить копію частини вихідного масиву, не змінюючи його. Копія створюється починаючи від begin і до,але не включно до end
// const carNames = ["Toyota", "Honda", "Ford", "Chevrolet", "BMW"];
// console.log(carNames.slice(3, 5));

// splice(position,num) - position вказує на позицію або на індекс першого елемента для видалення, num визначає к-сть елементів, що видаляються
// Аргумент position вказує початкову позицію в масиві, куди будуть вставлені нові елементи.
// Другий аргумент - це нуль, він говорить методу не видаляти елементи в місці додавання нових.
// Третій, четвертий і всі наступні аргументи - це нові елементи, які додаються в масив.
// Наприклад, у нас є масив з назвами кольорів у вигляді рядків. Додамо новий колір перед елементом з індексом 2.
// // const score = [1, 2, 3, 4, 5];
// // const deletescors = score.splice(0, 3);
// // console.log(deletescors);
// // console.log(score);
// // const newscore= score.splice(1,0,"6","7","8");
// // console.log(newscore);
// const colors = ["red", "green", "blue"];
// colors.splice(2,0,"purple")
// console.log(colors);

// concat - обєднує 2 масива в 1
// const oldcl = ["casha", "petya", "Vacya"];
// const newcl = ["bill", "kate", "bob"];
// const allcl = newcl.concat(oldcl);
// console.log(allcl);

// функції
// функція - підпрограма або незалежна частина коду,
//  призначена для багаторазового виконання конкретної задачі з різним початковим значенням.
// Оголошення функції
// function multiply() {
//   console.log("це лог на момент виклику функції multiply");
// }
// виклик функції multiply
// multiply();
// multiply();
// multiply();

// оголошення параметрів а,b,c
// параметри це локальні змінні, які доступні тільки  у тілі функції. Вони розділяються комами. Їх може бути декілька, або не бути.
// function plus(a,b,c) {
//     console.log(`Результат довання параметрів ${a} ${b} ${c} = ${a+b+c}`);
//   }
// //   передача аргументів а,b,c
// plus(2,3,5);

// function declaration
// function plus(a=2, b=2, c=2) {
//   console.log(`Результат множення параметрів ${a} ${b} ${c} = ${a * b * c}`);
//   return a * b * c;
//   console.log("Лог після ретурн");
// }
// console.log("Лог до виклику функції");
// //   return - передача результатів з тіла функції у зовнішній код. після нього код не виконується
// //   передача аргументів а,b,c
// plus(17, 6, 25);
// console.log("Лог після виклику функції multiply");
// plus();
// function expression оголошення фу
// const multiply = function(a,b,c){
//      console.log(`Результат множення параметрів ${a} ${b} ${c} = ${a * b * c}`);

// }
// multiply()

// область видимості
// область видимості - механізм що визначає доступність змінних у коді, що виконується
// const globalValue = "globalValue";
// console.log(globalValue);
// function foo() {
//   console.log(globalValue);
//   const localValue = "localValue";
//   console.log(localValue);
// }
// foo();
// console.log(localValue);

// const randomNumber = function (min, max) {
//   console.log(Math.round(Math.random() * (max - min) + min));
// };
// randomNumber(10, 10000000);
// console.log(Math.round(Math.random() * (50 - 30) + 30));
// const year = function(a,b){
//     console.log(a-b);
// }
// year(2024   ,2009)
// принцип lifo - останнім пішов першим прийшов

// function fnA() {
//   console.log("Лог всередині функції fnA до виклику функції fnB");
//   fnB();
//   console.log("Лог всередині функції fnA після виклику функції fnB");
// }
// function fnB() {
//   console.log("Лог всередині функції fnB");
// }
// console.log("Лог до виклику fnA")
// fnA()
// console.log("Лог після виклику fnA")

// об'єкти

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornvell",
//   isPublic: true,
//   rating: 8.38,
//   location: {
//     country: "Ukraine",
//     city: "Yakushintsi",
//   },
//   sayName() {
//     console.log(this.title);
//   },
// };
// // console.log(book.sayName())
// book.sayName()
// book.pageCount=836;
// for (const key in book) {
//     console.log(key)
//     console.log(book[key])
// }
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornvell",
//     rating: 8.38,
//   },
//   {
//     title: "Calm Waters",
//     author: "Robert Shekli",
//     rating: 8.38,
//   },
//   {
//     title: "Tichina",
//     author: "qwer",
//     rating: 8.38,
//   },
// ];
// for (const book of books) {
//   console.log(book);
//   console.log(book.title);
//   console.log(book.author);
//   console.log(book.rating);
// }
// const bookAuthors = [];
// const bookNames = [];
// for (const book of books) {
//   let k = book.author;
//   bookAuthors.push(k);
//   console.log(bookAuthors);
// }
// for (const book of books) {
//   let k1 = book.title;
//   bookNames.push(k1);
//   console.log(bookNames);
// }

// function transform(input) {
//   const output = input.toLocaleLowerCase();
//   return output;
// }
// console.log(transform("fgjdfjJHHUUHUHUHUHH"))

// function dif(input1, input2) {
//   let output = input1 - input2;
//   if (output < 0) {
//     output = output * -1;
//   } else {
//     output = output * 1;
//   }
//   return output;
// }
// console.log(dif(-2, -5));

// спред оператор(з'єднує масиви,елементи,об'єкти, розвертає їх)
// const nums1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const nums2 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
// const allNums = [...nums1, ...nums2];
// console.log(allNums);

// const first = {
//   prop1: 5,
//   prop2: "TARAS",
// };
// const second = {
//   propC: false,
// };
// const object = {
//   ...first,
//   ...second,
// };
// console.log(object);

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornvell",
//   rating: 8.38,
//   isPublic: true,
// };
// const accessType = book.isPublic ? "публічному" : "закритому";
// const message = `Книга ${book.title}, автора ${book.author}, з рейтингом ${book.rating} знаходиться в ${accessType} доступі`;
// const { title, rating, author, isPublic } = book; це деструктуризація
// const accessType1 = isPublic ? "публічному" : "закритому";
// const message1 = `Книга ${title}, автора ${author}, з рейтингом ${rating} знаходиться в ${accessType} доступі`;
// console.log(message);
// console.log(message1);

// функція зворотнього виклику callback - це функція яка передається іншій як аргумент, а та в свою чергу викликає передану функцію
// function greet(name) {
//   console.log(`Ласкаво просимо ${name}`);
// }
// // console.log(greet("Апельсин"));
// // console.log(greet);

// // функція вищого порядку - приймає у якості параметрів інші або повертає функцію у якості результату
// function registerGuest(name, callback) {
//   console.log(`Реєструємо гостя ${name}`);
//   callback(name);
// }
// registerGuest("Апельсин", greet);

// const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// num.forEach(function (element, index, array) {
// console.log(`Індекс: ${index}, значення: ${element}`)
// console.log(array)
// });
// поелементно переберає  масив
// викликає колбек функцію до кожного елемента масиву
// нічого не повертає

// function nums(input) {
//     const output = parseInt(input)
//     return output;
// }
// console.log(nums("54563golfgol0px"))
// const nums = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
// let calculateNums = 0;
// nums.forEach(function (number) {
//   calculateNums = calculateNums + number;
// });
// console.log(calculateNums);

// стрілочна функція
// const arrowAdd = (a, b, c) => {
//   return a + b + c;
// };
// console.log(arrowAdd(2, 2, 2));
// const add = (a, b, c) => a + b + c;

// const numbers = [5, 10, 15, 20, 25];

// numbers.forEach((item, index) => {
//   console.log(`Індекс:${index}, значення:${item}`);
// });
// const logMessage = (item, index) => {
//   console.log(`Індекс:${index}, значення:${item}`);
// };
// numbers.forEach(logMessage);
// array.method(item,index,arr)=>{
//     // логіка, яка буде застосовуватись на кожній ітерації(перебір масиву)
// }
// const dub = (a, b) => {
//   return a * b;
// };
// console.log(dub(2, 3));

// метод map (для перебору масиву)поелементно перебирає оригінальний масив, не змінює його,
// результат роботи записує в новий масив
// повертає масив однакової довжини
// const planets = ["Земля", "Марс", "Венера", "Юпітер", "Сатурн"];
// const planetToUpperCase = planets.map((planet, index, arr) => {
//   return planet.toUpperCase();
// });
// console.log(planets);
// console.log(planetToUpperCase);
// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Полі", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Ківі", score: 94 },
//   { name: "Х'юстон", score: 64 },
// ];
// const studentsName = students.map((student) => {
//   return student.name;
// });
// const studentsScore = students.map((student) => {
//   return student.score;
// });
// console.log(studentsName);
// console.log(studentsScore);
// const nums = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
//   24, 25, 26, 27, 28, 29, 30,
// ];
// let sum = 0;
// nums.forEach(function (number) {
//   if (number % 2 === 0) {
//     sum = sum + number;
//   }
// });
// console.log(sum);

// const students = [
//   { name: "Анна", grades: [90, 85, 88] },
//   { name: "Петро", grades: [78, 92, 80] },
//   { name: "Оксана", grades: [85, 87, 92] },
// ];
// let mas = [];
// students.forEach(function (student) {
//   let k = student.grades;
//   let middlescore = 0;
//   k.forEach(function (number) {
//     middlescore = middlescore + number;
//   });
//   middlescore = Math.round(middlescore / k.length);
// mas.push({...student,grades:middlescore})
// });
// console.log(mas)

// flatMap - аналогічний методу map, але застосовується у випадках, коли багатовимірний масив треба розгладити
// const students = [
//   { name: "Анна", grades: [90, 85, 88] },
//   { name: "Петро", grades: [78, 92, 80] },
//   { name: "Оксана", grades: [85, 87, 92] },
// ];
// console.log(students.map((student) => student.grades));
// console.log(students.flatMap((student) => student.grades));

// filter - використовується для єдиної операції - для фільтрації масиву, коли треба вибрати більше 1 елемента з колекції за певним критерієм.
// не змінює оригінальний масив
// перебирає поелементно оригінальний масив
// повертає новий масив
// додає в масив, що повертається елементи, які задовольняють умову кол-бек функції.
// якщо жоден елемент не задовольнив умову, повертає порожній масив.
// const values = [14, -41, 44, 21, -27, , -68, 41, -37];
// const positive = values.filter((value) => value >= 0);
// console.log(positive);
// const negative = values.filter((value) => value < 0);
// console.log(negative);

// find - дозволяє знайти і повернути перший відповідний елемент, після того перебирання масиву припиняється
// не змінює оригінальний масив
// перебирає поелементно оригінальний масив
// повертає перший елемент що задовільняє умову
// якщо жоден елемент не задовольнив умову, повертає undefined
// const values = [14, -41, 44, 21, -27, , -68, 41, -37];
// const positive = values.filter((value) => value >= 0);
// const findValues = positive.find(number=>number===44)
// console.log(findValues)

// findIndex - не змінює оригінальний масив,використовується для пошуку у масивів примітивів, і в масивів об'єктів
// не змінює оригінальний масив
// перебирає поелементно оригінальний масив
// повертає індекс першого елемента, який задовольняє умову
// якщо жоден елемент не задовольнив умову, повертає -1
// const fruits = [
//   {
//     id: 1,
//     name: "banana",
//     color: "yellow",
//   },
//   {
//     id: 2,
//     name: "lemon",
//     color: "yellow",
//   },
//   {
//     id: 3,
//     name: "apple",
//     color: "yellow",
//   },
// ];
// console.log(fruits.find((fruit) => fruit.id === 2));
// console.log(fruits.findIndex((fruit) => fruit.id === 2));

// every - перевіряє, чи проходять всі елементи масиву тест кол-бек функції, повертає true/false
// не змінює оригінальний масив
// перебирає поелементно оригінальний масив
// перебирання масиву припиняється, якщо кол-бек повертає false
// const fruits = [
//   {
//     id: 1,
//     name: "banana",
//     color: "yellow",
//   },
//   {
//     id: 2,
//     name: "lemon",
//     color: "yellow",
//   },
//   {
//     id: 3,
//     name: "apple",
//     color: "yellow",
//   },
// ];
// console.log(fruits.find((fruit) => fruit.id === 2));
// console.log(fruits.findIndex((fruit) => fruit.id === 2));
// console.log(fruits.every((fruit) => fruit.color === "yellow"));

// some - перевіряє чи проходить хоча б 1 елемент масиву тест кол-бек функції
// повертає true/false
// не змінює оригінальний масив
// перебирає поелементно оригінальний масив
// перебирання масиву припиняється, якщо кол-бек повертає true

// reduce
// reduce(callback, initialValue) - приймає кол-бек використовується для послідовної обробки кожного елемента масиву із збереженням проміжного результату, як акумулятор
// не змінює оригінальний масив
// перебирає поелементно оригінальний масив
// повертає все, що завгодно
// робить все, що завгодно
// const array = [];
// array.reduce((prevValue, element, index, array) => {
//   //тіло кол-бек функції
// }, initialValue);
// const fruits = [
//   {
//     id: 1,
//     name: "banana",
//     color: "yellow",
//     price: 990,
//   },
//   {
//     id: 2,
//     name: "lemon",
//     color: "yellow",
//     price: 345,
//   },
//   {
//     id: 3,
//     name: "apple",
//     color: "yellow",
//     price: 234,
//   },
// ];
// const totalPrice = fruits.reduce((prevValue, element) => {
//   return prevValue + element.price;
// }, 0);
// console.log(totalPrice);

// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Полі", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Ківі", score: 94 },
//   { name: "Х'юстон", score: 64 },
// ];
// const scores = students.reduce((score, student) => {
//   return score + student.score;
// }, 0);
// console.log(scores);

// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];
// const likes = tweets.reduce((like, person) => {
//   return like + person.likes;
// }, 0);
// console.log(likes);

// sort
// сортує і змінює вихідний масив
// повертає змінений масив, тобто посилання на відсортований вихідний
// за замовчуванням сортує масив за зростанням
// сортування відбувається шляхом преведення значень до рядка і порівняння порядкових номерів по таблиці юнікод
// const scores = [27, 2, 41, 4, 7, 3, 75];
// scores.sort();
// console.log(scores);
// //array.sort((a,b)=>{
// // тіло колбек функції
// // })
// const sortedScores = [...scores].sort((a, b) => a - b).map(i=>i*10);
// console.log(sortedScores);
// const students = ["Віка", "Андрій", "Олег", "Юля", "Борис", "Дмитро"];
// const sortedStud = students.sort();
// console.log(sortedStud);
// const inAlphabet = [...students].sort((a, b) => a.localeCompare(b));
// console.log(inAlphabet);

// const str1 = "Абрикос";
// const str2 = "Яблуко";
// const result = str1.localeCompare(str2);
// console.log(result);

// this
// через this - звернення до елемента об'єкта
// якщо функція стрілочна - його не використовувати
// const petya={
//   username:"Petya",
//   showName(){
//     console.log(petya.username)
//   }
// }
// petya.showName()

// const petya={
//   username:"Petya",
//   showName(){
//     console.log(this.username)
//   }
// }
// petya.showName()

// const books = {
//   authors: ["Бернард Кроунвел", "Роберт Шеклі"],
//   getAuthors() {
//     return this.authors;
//   },
//   addAuthor(authorName) {
//     this.authors.push(authorName);
//   },
// };
// console.log(books.getAuthors());
// books.addAuthor("Леся Українка");
// console.log(books.getAuthors());

// const employee = {
//   baseSalary: 30000,
//   overtime: 10,
//   rate: 20,
//   getSalary() {
//     return this.baseSalary + this.overtime * this.rate;
//   },
// };
// console.log(employee.getSalary());

// const animal = { legs: 4 };
// const dog = Object.create(animal);
// dog.name = "Шарік";
// console.log(dog);

// класи
// Клас - синтаксис оголошення функції для створення об'єкту
// class User {
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//   }
//   getEmail() {
//     return this.email;
//   }
//   changeEmail(newEmail) {
//     this.email = newEmail;
//   }
// }
// const polly = new User("Polly", "Polly@gmail.com");
// console.log(polly);
// const mango = new User("Mango", "Mango@gmail.com");
// console.log(mango);

// console.log(polly.getEmail());
// polly.changeEmail("newPolly@gmail.com");
// console.log(polly.getEmail());

// DOM - об'єктна модель документа - незалежний від мови програмування інтерфейс
//  для роботи з html документом
// BOM - незалжений від мови інтерфейс для роботи з вкладкою браузера

// Для навігації по цій ієрархії елементи мають наступні властивості.

// elem.parentNode - вибере батьківський elem.
// elem.childNodes - псевдомасив, зберігає всі дочірні елементи, включно з текстовими.
// elem.children - псевдомасив, зберігає тільки дочірні вузли-елементи, тобто ті, що відповідають тегам.
// elem.firstChild - вибере перший дочірній елемент всередині elem, включно з текстовими вузлами.
// elem.firstElementChild - вибере перший дочірній вузол-елемент всередині elem.
// elem.lastChild - вибере останній дочірній елемент всередині elem, включно з текстовими вузлами.
// elem.lastElementChild - вибере останній дочірній вузол-елемент всередині elem.
// elem.previousSibling - вибере елемент «зліва» від elem (його попереднього сусіда).
// elem.previousElementSibling - вибере вузол-елемент «зліва» від elem (його попереднього сусіда).
// elem.nextSibling - вибере елемент «праворуч» від elem (його наступного сусіда)
// elem.nextElementSibling - вибере вузол-елемент «праворуч» від elem (його наступного сусіда).

// querySelector
// const body = document.querySelector("body"); //в кавичках назва тега, айді або класу елемента, що в html
// console.log(body);
// const lishky = document.querySelectorAll(".item");
// console.log(lishky);
// const img = document.querySelector(".img");
// console.log(img);
// console.log(img.src);
// const text = document.querySelector(".text");
// console.log(text);
// console.log(text.textContent);
// const changeText = "Ми змінили текст у параграфі";
// text.textContent = changeText;
// console.log(changeText);
// // classList - Додає клас до списку класів елемента

// const list = document.querySelector(".list");
// console.log(list);
// list.classList.add("active");
// // classList.remove - видаляє клас зі списку класів елемента
// list.classList.remove("active");
// // toggle - якщо нема класа - добавляє, якщо є - видаляє (такий собі перемикач)
// list.classList.toggle("active");
// //contains - перевіряє чи є клас у елемента(повертає true/false)
// list.classList.contains("active");

// //властивість style - редагує стилі елемента через js
// list.style.backgroundColor = "teal";
// const box = document.createElement("div"); //в кавичках - назва тегу, таким чином ми створюємо div
// const heading = document.createElement("h1");
// heading.textContent = "Hello world";
// // метод append додає 1 або декілька елементів після всіх дітей елемента
// body.append(heading); //запихуємо елемент в body
// const image = document.createElement("img");
// image.src =
//   "https://media.istockphoto.com/id/1470130937/photo/young-plants-growing-in-a-crack-on-a-concrete-footpath-conquering-adversity-concept.webp?b=1&s=170667a&w=0&k=20&c=IRaA17rmaWOJkmjU_KD29jZo4E6ZtG0niRpIXQN17fc=";
// image.alt = "picture";
// body.append(image);
// prepend  - додає 1 або декілька елементів на початку сторінки
// after - додає 1 або декілька елементів після елемента (будуть на 1 рівні)
// before - додає 1 або декілька елементів перед елемента (будуть на 1 рівні)

// Дз: добавити до кожної лі тег А, в якому є href, до нього додати #, до А - якийсь текст(методом перебору масиву)
// let lis = document.querySelectorAll(".item")
// console.log(lis)
// // let liA = document.createElement("a");
// lis.forEach(function(li) {
//     let liA = document.createElement("a");

//     // lis.append(liA)
// });

//remove() - видаляє елемента
// const text = document.querySelector(".text");
// text.remove()
//innerHTML - доступна для читання і для запису. Може видавати усе, що є у тегу, може перезаписувати.Використовувати для додавання, коли елемент порожній
// console.log(text.innerHTML); //читання
// const body = document.querySelector("body");
// console.log(body.innerHTML);
// text.innerHTML = "це новий текст який ми помістили"; //запис

//insertAdjacentHTML - вставляє стрінг
// text.insertAdjacentHTML(position, string)
//position приймає 1 з 4 значень: 1 "beforebegin" (помістити string перед елементом) 2 "afterbegin" (вставляє всередині елемента перед усіма дітьми)
// 3 beforeand (вставляє всередині елемента після усіх дітей) 4 afterend (вставляє після елемента) 3 і 4 працюють, коли елемнт в DOM дереві
// const fruitsArray = [
//   { name: "Apple", color: "Red", taste: "Sweet" },
//   { name: "Banana", color: "Yellow", taste: "Sweet" },
//   { name: "Orange", color: "Orange", taste: "Citrusy" },
//   { name: "Grapes", color: "Purple", taste: "Sweet" },
//   { name: "Strawberry", color: "Red", taste: "Sweet" },
//   { name: "Kiwi", color: "Brown", taste: "Tart" },
//   { name: "Mango", color: "Orange", taste: "Sweet" },
//   { name: "Pineapple", color: "Yellow", taste: "Tangy" },
//   { name: "Watermelon", color: "Green", taste: "Juicy" },
//   { name: "Peach", color: "Orange", taste: "Sweet" },
// ];
// const list = document.createElement("ul");
// body.append(list);
// const items = fruitsArray.map((item) => {
//   console.log(item);
//   let color = item.color.toLowerCase();
//   return `<li style="background-color: ${color};"><p>${item.name}</p>
//   <p>${item.taste}</p>
//   </li>`;
// });
// console.log(items.join(""));
// list.innerHTML = items.join("");

// addEventListener - додає слухача подій на елемент
// addEventListener(Event, handler, Option);
// event - імя події, рядок наприклад 'click'
// handler -це колбек функція, яка буде викликана під час настання події
// Option - необовязковий обєкт параметрів, який розширює функції
// const button = document.querySelector(".btn");
// console.log(button);
// button.addEventListener("click", () => {
//   //колбек
//   console.log("тутуту");
// });
// const handleClick = (event) => {
//   event.preventDefault();
//   console.log(event);
//   console.log("нажали кнопку через handleClick");
// };
// button.addEventListener("click", handleClick);
// event.preventDefault(); - скасовує поводження браузера по замовчуванню

// removeEventListener - видаляє слухача подій з елемента
// button.removeEventListener("click", handleClick);

// об'єкт події
//події клавіатури
// keydown і keyup - події при натисканні клавіш

// document.addEventListener("keydown", (event) => {
//   console.log("keydown", event);
// });
// document.addEventListener("keyup", (event) => {
//   console.log("keyup", event);
// });
// document.addEventListener("keydown", (event) => {
//   event.preventDefault();
//   if ((event.ctrlKey || event.metaKey) && event.code === "KeyS") {
//     console.log("ctrl+s");
//   }
// });

// const box = document.querySelector(".box");
// document.addEventListener("keydown", (event) => {
//   if (event.code === "KeyW") {
//     box.style.backgroundColor = "white";
//   } else if (event.code === "KeyY") {
//     box.style.backgroundColor = "yellow";
//   } else if (event.code === "KeyR") {
//     box.style.backgroundColor = "red";
//   } else if (event.code === "KeyG") {
//     box.style.backgroundColor = "grey";
//   } else if (event.code === "KeyB") {
//     box.style.backgroundColor = "beige";
//   }
// });

// const ingredients = [
//   "Potatoes",
//   "Mushrooms",
//   "Garlic",
//   "Tomatos",
//   "Herbs",
//   "Condiments",
// ];
// const ul = document.querySelector(".ingredients")
// ingredients.forEach((ingredient) => {
//   const li = document.createElement("li");

//   li.textContent = ingredient;
//   li.classList.add("item");
//   ul.appendChild(li)

// });
// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.
// const images = [
//   {
//     url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
//     alt: "White and Black Long Fur Cat",
//   },
//   {
//     url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
//     alt: "Orange and White Koi Fish Near Yellow Koi Fish",
//   },
//   {
//     url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
//     alt: "Group of Horses Running",
//   },
// ];

// const ul = document.querySelector(".gallery");
// images.map((image) => {
//   const li = `<li><img src="${image.url} alt="${image.alt} class="img"></li>`;

//   ul.insertAdjacentHTML("afterbegin", li)
// });

// console.log(ul)
// Використовуй масив об'єктів images для створення елементів <img>, вкладених в <li>. Для створення розмітки використовуй шаблонні рядки і метод insertAdjacentHTML().

// Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.
// Додай мінімальне оформлення галереї флексбоксами або грідами через CSS класи.
// const value = document.querySelector(".value")
// const countValue = parseInt(value.innerHTML)
// const dec = document.querySelector(".button1");
// const inc = document.querySelector(".button2");
// const valueSpan = document.querySelector('.value');

// console.log(valueSpan)
// console.log(dec)
// console.log(inc)

// let counterValue = 0;
// dec.addEventListener('click', function() {
//   counterValue -= 1;
//   updateCounter();
// });

// inc.addEventListener('click', function() {
//   counterValue += 1;
//   updateCounter();
// });

// function updateCounter() {
//   valueSpan.textContent = counterValue;
// }

// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

// const span = document.querySelector(".name_output");
// const input = document.querySelector(".name_input");
// input.addEventListener("input", () => {
//   // console.log(input.value)

// input.value===""? span.textContent="Anonymous":span.textContent = input.value;
// });
// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input),
// підставляє його поточне значення в span#name-output.
//  Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

// const input = document.querySelector(".validation-input");
// input.addEventListener("blur", () => {
//   const strLenght = parseInt(input.getAttribute("data-length"));
//   if (strLenght !== input.value.length) {
//     // input.style.borderColor = "red";
//     input.classList.remove("valid");

//     input.classList.add("invalid");
//   } else {
//     // input.style.borderColor = "green";
//     input.classList.remove("invalid");

//     input.classList.add("valid");
//   }
// });
// напиши скрипт, який під час втрати фокусу на інпуті (подія blur),
//  перевіряє його вміст щодо правильної кількості введених символів.
// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів,
//  то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid,
//  які ми вже додали у вихідні файли завдання.

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// // Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль
// // по кліку на button.change-color і виводить значення кольору в span.color.
// const body = document.querySelector("body")
// const button = document.querySelector(".change-color")
// const span = document.querySelector(".color")
// console.log(button)
// button.addEventListener("click",()=>{
//   body.style.backgroundColor = `${getRandomHexColor()}`;
//   span.textContent = `${getRandomHexColor()}`;

// })

// Створи функцію createBoxes(amount), яка приймає один параметр - число.
// Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX.
//  Використовуй готову функцію getRandomHexColor для отримання кольору.
// Створи функцію destroyBoxes(), яка очищає вміст div#boxes,
// у такий спосіб видаляючи всі створені елементи.
// Створи функцію createBoxes(amount), яка приймає один параметр - число.
//  Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX.
// Використовуй готову функцію getRandomHexColor для отримання кольору.
// Створи функцію destroyBoxes(), яка очищає вміст div#boxes,
// у такий спосіб видаляючи всі створені елементи.

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }
// const input = document.querySelector(".number");
// const create = document.querySelector(".create");
// const destroy = document.querySelector(".destroy");
// const boxes = document.querySelector(".boxes")
// function createBoxes(amount) {
//   let size = 30;
//   for (let i = 0; i < amount; i++) {
//     const box = document.createElement("div");
//     box.style.width = `${size}px`;
//     box.style.height = `${size}px`;
//     box.style.backgroundColor = `${getRandomHexColor()}`;
//     boxes.appendChild(box)
//     size=size + 10;
//   }
// }
// function createBoxes(amount) {
//   let size = 30;
//   for (let i = 0; i < amount; i++) {
//     const box = document.createElement("div");
//     box.style.width = `${size}px`;
//     box.style.height = `${size}px`;
//     box.style.backgroundColor = `${getRandomHexColor()}`;
//     boxes.appendChild(box)
//     size=size + 10;
//   }
// }
// function destroyBoxes(){
//   boxes.innerHTML="";
// }

// create.addEventListener("click", () => {
//   if(input.value>200){
//     createBoxes(200)

//   }
// else{
//   createBoxes(input.value)

// }
// });
// destroy.addEventListener("click", () => {
//   destroyBoxes();
// });

// const colorPalette = document.querySelector(".color__palette");
// const output = document.querySelector(".output");
// const getRandomHexColor = () => {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// };
// console.log(getRandomHexColor());
// const createPaletteItems = () => {
//   const items = [];

//   for (let i = 0; i < 60; i++) {
//     const color = getRandomHexColor();
//     const item = document.createElement("button");
//     item.style.backgroundColor = color;
//     item.dataset.color = color;
//     item.classList.add("item");
//     items.push(item);
//   }
//   colorPalette.append(...items);
// };
// createPaletteItems();
// const selectColor = (event) => {
//   if (event.target.nodeName !== "BUTTON") {
//     return;
//   }
//   const selectColor = event.target.dataset.color;
//   output.textContent=`Вибраний колір: ${selectColor}`
//   output.style.color = selectColor;
// };
// colorPalette.addEventListener("click", selectColor);

// локальне сховище - частина браузера
// setItem(key,value) - створює новий або оновлює запис у сховищі
// getItem(key) - повертає зі сховища значення із ключем key
localStorage.setItem("ui-them", "light");
const settings = {
  them: "dark",
  options: [1, 2, 3],
  notification: false,
};
localStorage.setItem("settings", JSON.stringify(settings))
const them = localStorage.getItem("ui-them")
console.log(them)
const settingsData = localStorage.getItem("settings")
console.log(settingsData)
const settingsObject = JSON.parse(settingsData)
console.log(settingsObject)
const mas = ["ququ",1,2,3,"123"]
localStorage.setItem("mas",JSON.stringify(mas) )

