import sumOrName from './moduleDefault.mjs'; // <-- impot по умолчанию
import {
    sum as sumNumbers, // 'as' <- ключевое слово! позволяет переименовывать переменную из другого модуля.
    myName
}   from './moduleOne.mjs'

const res1 = sumNumbers (48,2)

const printName = myName()

sumOrName (res1, printName)