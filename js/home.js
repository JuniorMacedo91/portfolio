const menuBurger = document.querySelector('.menu-btn')
const navbar = document.querySelector('.navbar')
const dataScrollAnimation = document.querySelectorAll('[data-scrollAnimation]')

menuBurger.addEventListener('click', openMenu)
navbar.addEventListener('click', closeMenu)
window.addEventListener('scroll', activeScrollAnimation)

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


function activeScrollAnimation(){
    dataScrollAnimation.forEach(element =>{
        if(element.getBoundingClientRect().top < (window.innerHeight / 1.6)){
            element.classList.add('animate')
        } else{
            element.classList.remove('animate')
        }
    })
}

