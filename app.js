const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav_links');
    const navLinks = document.querySelectorAll('.nav_links li');

    burger.addEventListener('click', () => {
        // Toggle nav
        nav.classList.toggle('nav_active')

        // Animate links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 8 + 0.2}s`;
            }
        })

        // Rotate burger
        burger.classList.toggle('rotate');

    });

    // Close nav when a link is clicked
    navLinks.forEach((link, index) => {
        link.addEventListener('click', () => {
            nav.classList.toggle('nav_active')

            navLinks.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = ''
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 8 + 0.2}s`;
                }
            })
        })
    })
}

navSlide();