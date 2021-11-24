const menuBurger = document.querySelector('.menu-btn')
const navbar = document.querySelector('.navbar')

let menuToggle = false

menuBurger.addEventListener('click', ()=>{
    if(!menuToggle){
        menuBurger.classList.add('open')
        navbar.style.width = '300px'
        menuToggle = true
    } else{
        menuBurger.classList.remove('open')
        navbar.style.width = '0'
        menuToggle = false
    }
})