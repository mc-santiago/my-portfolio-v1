const navSlide = () => {
    const burger = document.querySelector('.burger');
    const navLinks= document.querySelector('.nav-links');
    const navLinksLi= document.querySelectorAll('.nav-links li');

    
    burger.addEventListener('click', () => {
//Toggle Nav
        navLinks.classList.toggle('nav-active');
//Animate Links
        navLinksLi.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 10 + 0.25}s`
            }
        });
//Burger Animation
        burger.classList.toggle('toggle');
    });  
}


    navSlide();

