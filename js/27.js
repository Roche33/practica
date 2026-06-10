//Submit DOM

const formulario = document.querySelector('#formulario')
formulario.addEventListener('submit', e =>{
    e.preventDefault() //Previeve la accion default, enviar el formulario
    //Hacer validaciones aqui

    const nombre = document.querySelector('.nombre').value
    const password = document.querySelector('.password').value
    console.log(nombre)
    console.log(password)

    // const alertaPrevia = document.querySelector('.alerta')
    // if(alertaPrevia){
    //     alertaPrevia.remove()
    // }

    const alerta = document.createElement('DIV')
    alerta.classList.add('alerta') //creado clase

    if(nombre === '' || password ===''){
        alerta.textContent = 'Todos los campos son obligatorios'
        alerta.classList.add('error')
    } else {
        alerta.textContent = 'Todo bien'        
        alerta.classList.add('exito')
    }

    formulario.appendChild(alerta)

    console.log(alerta)        
} )