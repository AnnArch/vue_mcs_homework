//Напишите стрелочную функцию с именем sleep, использующую Promise, которая принимает
//в качестве единственного аргумента количество миллисекунд и возвращает промис,
//который успешно исполнится через количество миллисекунд из аргумента.

/*const sleep = new Promise(resolve =>{
	setTimeout(()=>{
		resolve()
	}, 1000)
})*/

const _sleep = ms => new Promise(resolve =>{
    setTimeout(()=>{
        resolve()
        //console.log('sleep')
    },ms)
})

var i = _sleep(1000).then(()=>{
	console.log('sleep');
})