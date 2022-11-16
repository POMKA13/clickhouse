//menu

function openNav() {
    document.querySelector(".header__menu").style.display = "block";
    console.log('24234')
}

function closeNav() {
    document.querySelector(".header__menu").style.display = 'none'
}

//slider

let slideIndex = 1
showSlides(slideIndex)

function plusSlides(n) {
    showSlides(slideIndex += n)
}

function currentSlide(n) {
    showSlides(slideIndex = n)
}

function showSlides(n) {
    let slides = document.getElementsByClassName("home__slides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none'
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '')
    }

    slides[slideIndex - 1].style.display = 'block'
    dots[slideIndex-1].className += ' active'
}


//COUNTER

function counter(count) {
    let minus = count.querySelector('.products__minus')
    let number = count.querySelector(".products__number");
    let plus = count.querySelector(".products__plus");

    plus.addEventListener('click', function () {
        number.innerText++
    })

    minus.addEventListener('click', function () {
        number.innerText > 0 && number.innerText--
    })
 
}

let counts = document.querySelectorAll(".products__counter");
counts.forEach(counter)