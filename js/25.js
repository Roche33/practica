//Eventos DOM inputs

const inputNombre = document.querySelector('.nombre')
const inputPassword = document.querySelector('.password')

inputNombre.addEventListener('input', function (e){
    //console.log('Escribiendo en el input ', inputNombre.value) //No
    console.log('Escribiendo en el input ', e.target.value)
})//keyup, keydown


inputPassword.addEventListener('input', funcionPass)

function funcionPass(e){    
    inputPassword.type = 'text'
    console.log(e.target.value)

    setTimeout(()=> {
        inputPassword.type = 'password'
    }, 1000
    )
}