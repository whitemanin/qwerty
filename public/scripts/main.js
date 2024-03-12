let prev = document.querySelector('.prev')
let next = document.querySelector('.next')

let button1 = document.querySelector('#nav_1')
let button2 = document.querySelector('#nav_2')
let button3 = document.querySelector('#nav_3')
let button4 = document.querySelector('#nav_4')
let button5 = document.querySelector('#nav_5')

const menuLinks = document.querySelectorAll('.menu__link[data-goto]')

// Get the button:
let mybutton = document.getElementById("myBtn");



let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides() {
    let slides = document.getElementsByClassName("slide_menu");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 5000);
}


if (menuLinks.length > 0){
    menuLinks.forEach(menuLinks => {
        menuLinks.addEventListener('click', onMenuLinkClick)
    })
    function onMenuLinkClick(e) {
        const menuLink = e.target
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
            const gotoBlock = document.querySelector(menuLink.dataset.goto)
            const  gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('.header').offsetHeight

            window.scrollTo({
                top: gotoBlockValue,
                behavior: 'smooth'
            })
            e.preventDefault()
        }
    }
}

button1.addEventListener('mouseenter', function () {
    this.style.color = '#CFCFCF'
    this.style.borderBottom = '1.5px solid #CFCFCF'
})
button1.addEventListener('mouseleave', function () {
    this.style.color = 'white'
    this.style.borderBottom = '0'
})

button2.addEventListener('mouseenter', function () {
    this.style.color = '#CFCFCF'
    this.style.borderBottom = '1.5px solid #CFCFCF'
})
button2.addEventListener('mouseleave', function () {
    this.style.color = 'white'
    this.style.borderBottom = '0'
})

button3.addEventListener('mouseenter', function () {
    this.style.color = '#CFCFCF'
    this.style.borderBottom = '1.5px solid #CFCFCF'
})
button3.addEventListener('mouseleave', function () {
    this.style.color = 'white'
    this.style.borderBottom = '0'
})


button4.addEventListener('mouseenter', function () {
    this.style.color = '#CFCFCF'
    this.style.borderBottom = '1.5px solid #CFCFCF'
})
button4.addEventListener('mouseleave', function () {
    this.style.color = 'white'
    this.style.borderBottom = '0'
})

button5.addEventListener('mouseenter', function () {
    this.style.color = '#CFCFCF'
    this.style.borderBottom = '1.5px solid #CFCFCF'
})
button5.addEventListener('mouseleave', function () {
    this.style.color = 'white'
    this.style.borderBottom = '0'
})







window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}


function topFunction() {
    document.body.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
    document.documentElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}