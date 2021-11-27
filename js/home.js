const menuBurger = document.querySelector('.menu-btn')
const navbar = document.querySelector('.navbar')

menuBurger.addEventListener('click', openMenu)
navbar.addEventListener('click', closeMenu)

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

const dataScrollAnimation = document.querySelectorAll('[data-scrollAnimation]')

function activeScrollAnimation(){
    dataScrollAnimation.forEach(element =>{
        if(element.getBoundingClientRect().top < window.innerHeight){
            element.classList.add('animate')
        } else{
            element.classList.remove('animate')
        }
    })
}

window.addEventListener('scroll', activeScrollAnimation)