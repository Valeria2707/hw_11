/*Создать функцию, которая убирает из строки все символы, которые мы передали вторым аргументом.
'func("hello world", ['l', 'd'])' вернет нам "heo wor". 
Исходную строку и символы для удаления задаёт пользователь*/

let string = prompt('Введіть строку');
let array = [];
array.length = prompt('Введіть кількість символів для видалення');
for (let i = 0; i < array.length; i++ ){
    array[i] = prompt("Введіть " + (i + 1) + " символ");
}

function func(string, array){
    //return string.replace(new RegExp(`[${array}]`, 'g'), '')
    let str = '';
    for( let i = 0; i < string.length; i++){
        let value = true;
        for(let j = 0;  j < array.length; j++){
            if(string[i] === array[j]){
                value = false;
                break;
            }
        }
        if(value)
        {
            str += string[i];
        }
    }  
    return str;
   }
   
   console.log(func(string, array))






