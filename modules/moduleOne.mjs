const sum = (a,b) => a + b // неявный возврат результата 

const myName = () => {
    console.log('Elvin')
}


export {
    sum, 
    myName
}
//  'export default sum' <-- это экспорт по умолчанию позваляет экспортировать только одну переменнуюю

