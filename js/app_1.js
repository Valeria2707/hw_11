/*Написать функцию, которая принимает 1 параметр.
 При первом вызове, она его запоминает, при втором — суммирует переданный параметр с тем, что передали первый раз и тд.
 Всё это с замыканиями, например: sum(3) = 3 sum(5) = 8 sum(20) = 28*/

function sum(){
    let current = 0;
    return function(value){
        return current += value;
    }
}
let sumCounter = sum();

console.log(sumCounter(3));
console.log(sumCounter(5));
console.log(sumCounter(20));
