const anythingToLowerCase = anything => new Promise((resolve, reject) => {

if (!anything) {
return reject("Ошибка")
}


return resolve(String(anything).toLowerCase())}
)

anythingToLowerCase("ТЕСТ").then( result =>{
console.log(result)
})