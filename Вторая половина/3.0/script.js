// let username = 'Gafar'
// console.log(username);
// console.log(username.charAt(0));

// console.log(username.length - 1);

// console.log(username[2]);

// console.log(username.at(-1));

// console.log(username.indexOf('G'));


// console.log(username.slice());

// const lorem = 'Lorem ipsum dolor, sit amet consecteturf adipisicing elit. Officia itaqueg ratione nostrum, blanditiis incidunt doloribus aliquam vel numquam consequatur dignissimos.'

// const g = lorem.slice(73, 74)
// const a = lorem.slice(23, 24)
// const f = lorem.slice(39, 40)
// const a2 = lorem.slice(41, 42)
// const r = lorem.slice(2, 3)

// console.log(g + a + f + a2 + r);

// let str = 'Hello World'

// str = str.replace(' ',' No ')

// console.log(str);

// console.log(Math.random());





// string 

// console.log(new String());

// split


// let username = 'aaa!bbb!ccc';
// let arr = username.split('!').join('@').split('@').join('9');
// console.log(arr);

// console.log(username.includes('%'));
// console.log(username.includes('!'));

// console.log(username.concat('Hello World'));

// console.log(username.endsWith('a'));
// console.log(username.endsWith('c'));

// console.log(username.startsWith('a'));
// console.log(username.startsWith('c'));

// console.log(username.repeat(8));


// let a = '';

// == 
// console.log(2 == 3); // false 
// console.log(2 == 2); // true 
// console.log(2 == '2'); // true
// console.log(1 == true); // true
// console.log(0 == false); // true

// // ===
// console.log(2 === 3); // false
// console.log(2 === 2); // true
// console.log(2 === '2'); // false
// console.log(1 === true); // true

// console.log(Number(false));
// console.log(Number('Hello World'));
// console.log(typeof 5);
// console.log(typeof NaN);
// console.log(isNaN(NaN)); // true
// console.log(isNaN(5)); // false

// 0 = false
// '' = false
// false = false
// null, undefined = false

// 1 = true


// <=, >=, <, >
// console.log(5 <= 5); // true
// console.log(6 >= 5); // true

// console.log(5 < 5); // false
// console.log(6 > 5); // true

// // !
// console.log(5 === 5); // true
// console.log(5 !== 5); // false

// console.log(!false); // true
// console.log(!true); // false


// console.log(5 != '5'); // false
// console.log(5 !== '5'); // false


// ||, &&, ??

// // ||
// console.log(5 === 4 || 6 === 3); // false
// console.log(5 === 4 || 6 === 6); // true
// console.log(5 === 5 || 6 === 3); // true
// console.log(5 === 5 || 6 === 6); // true


// // &&
// console.log(5 === 4 && 6 === 3); // false
// console.log(5 === 4 && 6 === 6); // false
// console.log(5 === 5 && 6 === 3); // false
// console.log(5 === 5 && 6 === 6); // true


// console.log(null ?? true); // true





// let name = prompt('Your name');

// if (15 > 16) {
//     console.log(`Hello, ${name} `);

// } else {
//     console.log(`Bye, ${name} `);
    
// }





// const email = prompt('Your email: ');

// if (email.endsWith('@gmail.com') || 
//     email.endsWith('@mail.com') || 
//     email.endsWith('@yandex.ru')) {
//     const password = prompt('Your password: ')
    
//     if (password.length >= 8) {
//         alert('You are welcome!')
//     } else {
//         alert(`password should be at least 8 char. remaining: ${password.length}`)    
//     }

// } else {
//     alert('Email can end with @gmai.com, @mail.ru, @yandex.ru')    
// }


//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\


/* 
===== Классная работа =====
25.02.2025
.
.
.
.
.
const username = prompt('Your name: ');

if (username.startsWith('a') ||
    username.startsWith('A')) {

    const age = prompt('Your age: ');
    if (age.length <= 18) {

        const wallet = prompt('Enter amount: ')
        if ( wallet.length <= 100) {
    
            const people = prompt('How many people want to enter?: ')
            if ( people.length <= 5) {
                alert ('You are welcome')
            } else {
                alert (`Sorry ${username}, but we can't miss that many people.`)
            }

        } else {
            alert ('There is not enough money in your account')
        }
    } else {
        alert ('Entry to minors is prohibited')
    }

 } else {
     alert (`Sorry but we couldn't find you`)
 }

*/



/*

===== Домашняя работа =====
25.02.2025
.
.
.
.
.
let userName = 'Alex';
let accountPassword = 7777;
let balance = 10000;

let enterName = prompt('Введите ваше имя: ')

if (userName == enterName) {

    let enterPassword = prompt('Введите ваш пороль: ')

    if (accountPassword == enterPassword) {

        let yourBalance = prompt('Введите сумму: ')

        if (yourBalance < balance) {

            let theBalance = balance - yourBalance
            alert (`Вы сняли ${yourBalance} на счету осталось ${theBalance}.`)

        } else {
            alert ('Недостаточно средств')
        }

    } else {
        alert (`Пороль указон не правильно`)
    }

} else {
    alert (`Пользователь ${entername} не найден`)
}

*/


//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\

/*
const userName = 'Alex';
const accountPassword = 7777;
const balance = 10000;

const inputName = prompt('Your name: ')

switch (inputName) {
    case userName: 
    const inputPassword = Number(prompt('Your password:'));
    
    switch (inputPassword) {
        case accountPassword:
        const money = Number(prompt('How much do you wanna get: '));
        alert(`Left: ${balance - money}\nGot: ${money}`);
    }
}
*/

//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\

//  Массивы

/*
let names = ['Sunnat', 'Umid', 'Gafar', 'Shokhjahon', 'Islom', 'Muattar'];

let yourName = prompt('Your name: ')

yourName = yourName.charAt(0).toUpperCase() + 
yourName.slice(1).toLowerCase();

if (names.indexOf(yourName) !== -1) {
    alert('Уже есть!');
} else if (yourName.length < 7) {
    alert('Не достаточно символов!')
} else {
    alert(`Вас зовут ${yourName}`)
}
*/


/*
let arr = ['text', 'alex', 'bob', 'adams']

let res = arr.filter((item) => item[0] == 'a');

console.log(res);
*/


/*
let nums = [11, 14, 19, 16]

let odd = nums.filter(item => item % 2 == 0)
let even = nums.filter(item => item % 2 == 1)

console.log(odd);
console.log(even);
*/


/*
let arr = ['Alex', 'Bob', 'John', 'Amir', 'Azizbek', 'Tyler']
let arr2 = ['Davlat', 'Arslan', 'Steve', 32, true, 45]

let newArr = arr.concat(arr2.splice(0, 3)) 

newArr = newArr.filter(item => item[0].toLowerCase() =='a')

console.log(newArr);
*/




/*
const words = ['peach', 'apple', 'grape', 'apricot', 'kiwi', 'orange', 'banana', 'ananas']

// 1:
const newWords = words.filter(words => words[0] == 'a')
console.log(newWords);

// 2:
const sortWords = words.sort()
console.log(sortWords);

// 3:
const promptWords = prompt('Введите слова: ')
if (promptWords) {
    words.push(promptWords)
    console.log(words);
}

let num1 = [6, 18, 23, 3, 2, [22, 59]]
let num2 = [101, 4, 59, 89, 0, 7,31, 12]

let newNum = num1.concat(num2).flat()
console.log(newNum);

let numbers = [42, 'Alex', 'John', 18, 23, 100, 1]
let names = ['Tyler', 'Stark', 'Jake', 'Igor']

let allName = numbers.filter(item => typeof item == 'string')

console.log(numbers.filter(Number));
console.log(names.concat(allName));
*/

/*

let words = ['test', 'hello world', 'Adams', 'text', 'lorem', 'alex']

let newWords = []

words.forEach(item =>{
    if (item[0].toLowerCase() == 'a') {
        newWords.push(item)
    }
})


console.log(newWords);
*/


/*

let total = '';


words.forEach((item) => {
    if (total.length < item.length) {
        total = item;
    }
})
console.log(total);
*/


/*
let arr = [11, 20, 24, 2, 55, 112, 37, 65]
let even = []
let odd = []

arr.forEach((num) => {
    if (num % 2 == 0) {
        even.push(num)
    } else {
        odd.push(num)
    }
})

console.log(even);
console.log(odd);
*/


/*
const words = ['peach', 'apple', 'grape', 'apricot', 'kiwi', 'orange', 'banana', 'ananas']

// 1:
const newWords = words.filter(words => words[0] == 'a')
console.log(newWords);

// 2:
const sortWords = words.sort()
console.log(sortWords);

// 3:
const promptWords = prompt('Введите слова: ')
if (promptWords) {
    words.push(promptWords)
    console.log(words);
}

//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\

let num1 = [6, 18, 23, 3, 2, [22, 59]]
let num2 = [101, 4, 59, 89, 0, 7,31, 12]

let newNum = num1.concat(num2).flat()
console.log(newNum);

//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\

let numbers = [42, 'Alex', 'John', 18, 23, 100, 1]
let names = ['Tyler', 'Stark', 'Jake', 'Igor']

let allName = numbers.filter(item => typeof item == 'string')

console.log(numbers.filter(Number));
console.log(names.concat(allName));
*/

//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\

// let names = ['Alex', 'John', 'Smith', 'Tyler']
// let res =[]

// names.forEach(item => {
//     let test = item.split('').reverse().join('')

//     res.push(test)
// })

// console.log(res)

//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\

/*
let arr = [
    [115, 50, 25],
    [75, 12, 99],
    [34, 36, 55],
];

let resultat = []

arr.forEach((item) =>{
    let total = 0

    item.forEach((num) =>{
        total += num
    })

    resultat.push(total)
})

console.log(resultat)
*/

/*
let price = [15000, 3200, 10200, 455000, 123000, 7000]
let max = price[0];
let min = price[0];

price.forEach(price => {
    if (price > max) max = price;
    if (price < min) min = price;
})
 
console.log(max);
console.log(min);
*/


/*
let nums = [12,3, 57, 34,90, 1, 10, 9]
let odd =[];
let even = [];

nums.forEach (num => {
    if (num % 2== 0) {
        odd.push(num)
    } else even.push(num)
})

console.log(odd);
console.log(even);
*/




// for (let i = 1; i <= 10; i++) {
    
//     for (let a = 1; a <= 10; a++) {
//         console.log(`${i} * ${a} = ${a * i}`);
//     }
// }

// for (let i = 0; i <= 20; i += 2) {
//     console.log(i);   
// }

// let arr = [10, 55.34, 23.01, 52, 102, 1.11]
// let filter = []

// for (let num of arr) {
//     if (num.toString().includes('.')) {
//         filter.push(num)
//     }
// }

// console.log(filter);



//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\

// let cars = [
//     {
//       name: "BMW",
//       color: "white",
//       model: "M4",
//       price: 80000,
//       year: 2020,
//     },
//     {
//       name: "Gentra",
//       color: "black",
//       model: "2",
//       price: 15000,
//       year: 2022,
//     },
//     {
//       name: "Kia",
//       color: "white",
//       model: "K5",
//       price: 42000,
//       year: 2023,
//     },
//     {
//       name: "Matiz",
//       color: "red",
//       model: "best",
//       price: "6000",
//       year: 2011,
//     },
//     {
//       name: "Malibu",
//       color: "gray",
//       model: "2",
//       price: 37000,
//       year: 2021,
//     },
//     {
//       name: "Nexia",
//       color: "blue",
//       model: "3",
//       price: 12000,
//       year: 2011,
//     },
//   ];
  
// let max = cars[0];
// let min = cars[0];
// let total = 0;

// for (let car of cars) {

//   let carPrice = Number(car.price);
//     if (carPrice > max.price) {
//         max = car
//     }
//     if (carPrice < min.price) {
//         min = car
//     }
//     total += carPrice
// }

// // в max сохраняем самую дорогую машину
// console.log(max);

// // в min сохраняем самую дешевую машину
// console.log(min);

// // в total = общая сумма всех машин
// console.log(total);

// // в latest машины последних 5 лет
//   let latest = [];

//   for (let item of cars) {
//     if (item.year >= 2020) {
//         latest.push(item)
//     }
//   }

//   console.log(latest);


//   let arr = [
//     {
//         "userId": 1,
//         "id": 1,
//         "title": "delectus aut au`tem",
//         "completed": false
//     },
//     {
//         "userId": 1,
//         "id": 2,
//         "title": "quis ut nam facilis et officia qui",
//         "completed": false
//     },
//     {
//         "userId": 1,
//         "id": 3,
//         "title": "fugiat veniam minus",
//         "completed": false
//     },
//     {
//         "userId": 1,
//         "id": 4,
//         "title": "et porro tempora",

//         "completed": true
//     },
//     {
//         "userId": 1,
//         "id": 5,
//         "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
//         "completed": false
//     },
//     {
//         "userId": 1,
//         "id": 6,
//         "title": "qui ullam ratione quibusdam voluptatem quia omnis",
//         "completed": false
//     },
//     {
//         "userId": 1,
//         "id": 7,
//         "title": "illo expedita consequatur quia in",
//         "completed": false
//     },
//     {
//         "userId": 1,
//         "id": 8,
//         "title": "quo adipisci enim quam ut ab",
//         "completed": true
//     },
//     {
//         "userId": 1,

//         "id": 9,
//         "title": "molestiae perspiciatis ipsa",
//         "completed": false
//     },
//     {
//         "userId": 1,
//         "id": 10,
//         "title": "illo est ratione doloremque quia maiores aut",
//         "completed": true
//     },
// ]

// let a = {
//     count: 0,
//     arr: []
// }

// let b = {
//     count: 0,
//     arr: []
// }

// for (const task of arr) {
//   if (task.completed) {
//     a.arr.push(task)
//   } else {
//     b.arr.push(task)
//   }
// }

// console.log(a);
// console.log(b);

// let max = companies[0]
// let min = companies[0]

// for (const item of companies) {

//   if (item.spend > max.spend) {
//     max = item
//   } else {
//     min = item
//   }
// }

// console.log(max);
// conso
// le.log(min);
        





/*
const companies = [
  { name: "Apple", income: [10000, 12000, 500], spend: 23000 },
  { name: "Microsoft", income: [10000, 12000, 1500], spend: 17000 },
  { name: "Google", income: [15000, 20000, 4000], spend: 7000 },
  { name: "SpaceX", income: [150000, 62000 2000], spend: 99000 },
  { name: "GM motors", income: [15000, 20000, 4000], spend: 100 },
];

let totalIncome = 0


for (let i = 0; i < companies.length; i++) {
  let incomeSum = 0;
  companies[i].total = 0;

  for (let j = 0; j < companies[i].income.length; j++) {
    incomeSum += companies[i].income[j];
  }

  totalIncome += incomeSum - companies[i].spend
}


console.log(companies);
console.log(totalIncome);
*/



// const user = prompt('Введите одну из предложенных цифр: 1 - Камень, 2 - Ножница, 3 - Бумага.')

// const random = Math.ceil(Math.random() * 3) + 1 

// console.log(random);


 



// for (let item of user) {
//   const random = Math.floor(Math.random() * 3) + 1 
//   console.log(random);

  // if (item < random) {
  //   alert('Ты выиграл')
  // } else if (item = random) {
  //   alert('Ничья')
  // } else {
  //   alert('ТЫ проиграл')
  // }
  
// } 
  
  

// // Сначало хотел сделать с одним словом но решил добавить рандомные слова
// let words = ['world', 'home', 'family']
// let word = words[Math.floor(Math.random() * words.length)].split('');

// // let words = 'world'
// // let word = words.split('')
// let arrFill = Array(word.length).fill('_')
// let used = []

// console.log(used);


// while (arrFill.includes('_')) {
//     let user = prompt(`${arrFill.join(' ')}`).toLowerCase()

//     if (!user || user.length !== 1) {
//         alert('Больше одной буквы нельзя')
//         continue;
//     }

//     if (used.includes(user)) {
//         alert('Эта буква уже есть')
//         continue;
//     }

//     used.push(user) 

//     if (word.includes(user)) {
//     word.forEach((elements, index) => {
//             if (elements == user) {
//                 arrFill[index] = user
//             }
//         });
//     }

//     if (!arrFill.includes('_')) {
//         alert(`Ты угадал слова ${word.join('')}`)
//         break;
//     }
// }





// function getAge(age) {
    
//     if (isNaN(age) || age < 18) {
//         alert ('Ты куда лезишь?')
//     } else {
//         alert('Добро пожаловать')
//         return true;
//     }

// }



// function task(a, b) {

//     alert(`${a + b} \n ${a - b}\n ${a / b} \n ${a * b} \n ${ a ** b} \n ${a % b}`)
    
// }



// function max_name(name1, name2, name3) {
    
//     let longName = name1
//     const names = [name2, name3] 

//     names.forEach(long => {
//         if (long.length > longName.length) {
//             longName = long
//         }
//     })
    
//     return longName;
    
// }



// function min() {
//     let getNum = []

//     for (let num of arguments) {
//         if (typeof num === 'number') {
//             getNum.push(num)
//         } else if (Array.isArray(num)) {
//             getNum.push(...num)
//         } else if (typeof num === 'object' && num !== null) {
//             getNum.push(...Object.values(num))
//         }
//     }

//     return Math.min(...getNum)
// }





// const user = +prompt('Сколько тебе лет?')

// if (getAge(user)) {

//     const v1 = parseFloat(prompt('Введите число a:'))
//     const v2 = parseFloat(prompt('Введите число b:'))

//     if (!isNaN(v1, v2)) {

//         task(v1, v2)

//     } else {
//         alert('Это не число')
//     }

//     console.log(max_name('Alex', 'George', 'Michael'));

//     console.log(min(1, 2));
//     console.log(min([1, 2]));
//     console.log(min({a: 1, b: 2}));
//     console.log(min({a: 1, b: 2}, {a: 11, b: 12}));
// }






// const companies = [
//     { id: 1, name: "Компания А", industry: "IT", employees: 150, revenue: 200000 },
//     { id: 2, name: "Компания Б", industry: "Финансы", employees: 300, revenue: 500000 },
//     { id: 3, name: "Компания В", industry: "Производство", employees: 500, revenue: 750000 },
//     { id: 4, name: "Компания Г", industry: "Ритейл", employees: 50, revenue: 100000 },
//     { id: 5, name: "Компания Д", industry: "IT", employees: 200, revenue: 300000 },
//     { id: 6, name: "Компания Е", industry: "Логистика", employees: 100, revenue: 150000 }
// ];

// // Задача 1: Отфильтровать компании, относящиеся к индустрии IT.


// function it(ind) {
//     for (const comp of companies) {
        
//         if (comp.industry == "IT") {
//             ind.push(comp)
//         }
//     }
// }


// it(industryIt = [])
// console.log(industryIt);

// // Задача 2: Отсортировать компании по доходу в порядке убывания.

//  function rev(companies) {
//     const a = companies.length
//     const arr = [...companies]

//     for (let i = 0; i < a -1; i++) {

//         for (let j = 0; j < a -1 -i; j++) {

//             if (arr[j].revenue < arr[j + 1].revenue) {

//                 let temp = arr[j]
//                 arr[j] = arr[j + 1]
//                 arr[j + 1] = temp

//             }
//         }
//     }
//     return arr;
//  }
 
//  console.log(sort = rev(companies));
 


// // Задача 3: Посчитать общее количество сотрудников во всех компаниях.


//  function totalQuantity() {
//     let total = 0
//     for (let company of companies) {
//         total += company.employees
//     }

//     return total;
//  }

 
//  console.log(totalQuantity());
 





// Повторить все о массивах (объекты, функции)