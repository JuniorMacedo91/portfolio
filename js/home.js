const menuBurger = document.querySelector('.menu-btn')
const navbar = document.querySelector('.navbar')

let menuToggle = false

function openMenu(){
    if(!menuToggle){
        menuBurger.classList.add('open')
        navbar.style.width = '100%'
        menuToggle = true
    } 
    else{
        menuBurger.classList.remove('open')
        navbar.style.width = '0'
        menuToggle = false
    }
}

function closeMenu(){
    navbar.style.width = '0'
}

menuBurger.addEventListener('click', openMenu)
navbar.addEventListener('click', closeMenu)