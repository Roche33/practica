//Fetch API - Async Await

const url = 'https://jsonplaceholder.typicode.com/comments'


// const consultarApi = () => {
//     fetch(url).then( (res) =>{ //then para promises
//         console.log('Respuesta ', res)
//         return res.json()
//     })
//     .then( (res)=> {
//         console.log('Resultado casi listo', res)
        
//         // res.forEach(element => {
//         //     console.log(element)
//         // });
//     }
//     )
// }

const consultarApi = async () => {
    const respuesta = await fetch(url)
    const resultado = await respuesta.json()
    console.log(resultado)

    // resultado.forEach(element => {
    //          console.log(element)
    //       });
    
}

consultarApi()