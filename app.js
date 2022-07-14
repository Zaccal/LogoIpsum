const burger = document.querySelector('#burger')
const burgerMenu = document.querySelector('#burger-menu')

burger.addEventListener('click', () => {
    burgerMenu.classList.toggle('right-minusFull')
    burgerMenu.classList.toggle('right-0')
})


// Dark mode
// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
} else {
    document.documentElement.classList.remove('dark')
}

const modeBtn = document.querySelector('#mode')

modeBtn.addEventListener('click', () => {
    document.querySelector('html').classList.toggle('dark')

    // modeBtn.querySelector('img').setAttribute('src', './img/4489231.png')
})