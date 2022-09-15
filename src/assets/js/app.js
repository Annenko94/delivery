const menu = document.querySelector('.nav')
const menuBtn = document.querySelector('.burger')
const body = document.body
const link = document.querySelector('.menu__link')

if (menu && menuBtn){
    menuBtn.addEventListener('click', () => {
        menu.classList.toggle('active')
        menuBtn.classList.toggle('active')
      
    })

    menu.addEventListener('click', e => {
        if (e.target.classList.contains('nav')){
            menu.classList.remove('active')
            menuBtn.classList.remove('active')
            body.classList.remove('lock')
        }
    })

    menu.querySelectorAll('.nav__link').forEach(link => {
        link.addEventListener('click', () => {
            body.classList.remove('lock')
        })
    })
}


const anchors = document.querySelectorAll('a[href*="#"]');

anchors.forEach(anchor => {
    anchor.addEventListener('click', event =>{
        event.preventDefault();
        const blockID = anchor.getAttribute('href').substring(1)
        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth', 
            block: 'start'
        })
    })

})