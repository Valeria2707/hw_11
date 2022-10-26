/*Написать функцию doMath(x, znak, y), которая получает 3 аргумента: числа x и y, строку znak. 
В переменной znak может быть: +, -, *, /, %, ^ (степень).
Вывести результат математического действия, указанного в переменной znak.
 Оба числа и знак получаются от пользователя.*/

 let x = parseFloat(prompt("Введіть перше число"));
 let znak = prompt("Введіть знак");
 let y = parseFloat(prompt("Введіть друге число"));
 function doMath(x, znak, y){
    switch(znak){
        case '+':
            return x + y;
        case '-':
            return x - y;
        case '*':
            return x * y;
        case '/':
            if ( y === 0){
                return 'Error';
            }
            return x / y;
        case '%':
            return x % y;
        case '^':
            return Math.pow(x, y);
    }
}

console.log(doMath(x, znak, y));