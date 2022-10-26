/*Написать функцию заполнения пользовательскими данными двумерного массива.
Длину основного массива и внутренних массивов задаёт пользователь. 
Значения всех элементов всех массивов задаёт пользователь.*/

function createArray() {
    let arr = [];
    let lenght_1 = prompt("Введіть довжину масиву");
    for(let i = 0; i < lenght_1; i++) {
        arr.push([]);
        let lenght_2 = prompt("Введіть довжину " + (i + 1) + " підмасиву");
        for(let j = 0; j < lenght_2; j++) {
            let item = prompt("Введіть " + (j + 1) + " елемент");
            arr[i].push(item);
        }
    }
    console.log(arr);
}
createArray();