//Fetch API - Async Await (Multiples llamados)
const url = 'https://jsonplaceholder.typicode.com/comments'
const url2 = 'https://jsonplaceholder.typicode.com/photos'

const consultarApi = async () => {
    const inicio = performance.now()


    const respuesta = await fetch(url)
    const resultado = await respuesta.json()
    console.log(resultado)

    const respuesta2 = await fetch(url2)
    const resultado2 = await respuesta2.json()
    console.log(resultado2)

    const fin = performance.now()

    console.log('Ejecucion Primer Async ', fin-inicio, ' ms')
    
}

const consultarApi2 = async () => {
    const inicio = performance.now()
    //Arranca los dos
    const [respuesta, respuesta2] = await Promise.all([fetch(url), fetch(url2)])
    const resultado = await respuesta.json()
    const resultado2 = await respuesta2.json()

    const fin = performance.now()

    console.log('Ejecucion Segundo Async ', fin-inicio, ' ms')

}


consultarApi()
consultarApi2()