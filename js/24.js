//Eventos DOM clicks

const heading = document.querySelector('.heading')

// heading.addEventListener('click', function(){
//     console.log('Diste click en el heading')
// })


//   heading.addEventListener('click', () => {
//     console.log('Diste click en el heading')
// })

heading.addEventListener('click', clickHeading) //SIN ()

function clickHeading(){
    console.log('Diste click en el heading')
    heading.textContent = "Diste click en el heading"
}

const enlaces = document.querySelectorAll('.navegacion a')

enlaces.forEach(enlace => {
    enlace.addEventListener('click', ()=> {
        console.log('Diste click en un enlace')
    })
})


