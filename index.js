// 1. Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).

let str = '';
for (let i = 20; i <= 30; i=i+0.5) {
    str += i + ' ';
}
console.log(str);

// 2. Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.

let str_1 = '';
let dollar = 27;
for (let q = 10; q <=100; q=q+10) {
    str_1 += dollar * q + ' ';
}
console.log(str_1);

// 3. Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.

let mainNumbers = '';
const func_1 = function*(n) {
    const limit = Math.min(100, Math.sqrt(n));
    let i = 1;
    while (i <= limit) {
    yield i++;
    }
  }
  let N = 50;
  for (const X of func_1(N)) {
    mainNumbers += X + ' ';
  }
  console.log(mainNumbers);

// 4. Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).

function test_prime(w) {
    if (w===1)  {
      return false;
    }
    else if(w === 2)  {
      return true;
    } else   {
      for(var x = 2; x < w; x++)  {
        if(w % x === 0) {
          return false;
        }
      }
      return true;  
    }
  }
  console.log(test_prime(17));

// 5. Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).

function isNumberOfThree(num) {
    while (num % 3 == 0) {
      num /= 3;
    }
    return num == 1;
  }
console.log(isNumberOfThree(27));