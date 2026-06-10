//Fetch API

const url = 'https://jsonplaceholder.typicode.com/comments'

// fetch(url).then( (res) =>{ //then para promises
//     console.log('Respuesta ', res)
//     return res.json()
// })
// .then( (res)=> {
//     console.log('Resultado casi listo', res)
    
//     // res.forEach(element => {
//     //     console.log(element)
//     // });
// }
// )

const consultarApi = () => {
    fetch(url).then( (res) =>{ //then para promises
        console.log('Respuesta ', res)
        return res.json()
    })
    .then( (res)=> {
        console.log('Resultado casi listo', res)
        
        // res.forEach(element => {
        //     console.log(element)
        // });
    }
    )
}

consultarApi()