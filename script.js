document.addEventListener("DOMContentLoaded", function () {
    let currentIndex = 0;
    const carousels = document.querySelectorAll(".carousel");
    const totalImages = carousels.length;

    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        const normalLink = document.querySelectorAll('.normal_link');
        const buttonLink = document.querySelector('.button_link');
        if (window.scrollY > 10) {
            header.style.backgroundColor = '#fff';
            buttonLink.style.color = '#fff';
            buttonLink.style.backgroundColor = 'rgba(78,119,3,1)';
            normalLink.forEach((link)=> {
                link.style.color = 'rgba(78,119,3,1)';
            })
        } else {
            header.style.backgroundColor = 'transparent';
            buttonLink.style.color = 'rgba(78,119,3,1)';
            buttonLink.style.backgroundColor = '#fff';
            normalLink.forEach((link)=> {
                link.style.color = '#fff';
            })
        }
    });

    function showNextImage() {
        carousels[currentIndex].classList.remove("active");
        currentIndex = (currentIndex + 1) % totalImages;
        carousels[currentIndex].classList.add("active");
    }

    carousels[currentIndex].classList.add("active");

    setInterval(showNextImage, 3000);
});