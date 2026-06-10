//Submit DOM

const formulario = document.querySelector('#formulario')
formulario.addEventListener('submit', e =>{
    e.preventDefault() //Previeve la accion default, enviar el formulario
    //Hacer validaciones aqui

    const nombre = document.querySelector('.nombre').value
    const password = document.querySelector('.password').value
    console.log(nombre)
    console.log(password)
    
    console.log('enviaste valor')
} )