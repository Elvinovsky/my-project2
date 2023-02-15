import {
    sum as sumNumbers, // 'as' ключевое слово! позволяет переименовать переменную из другого модуля
    myName
}   from './moduleOne.mjs'


const res1 = sumNumbers (10,2)
console.log(res1)

const printName = myName()

printName