
const navbarToggle = document.getElementById('navbar-toggle');
const navbarLinks = document.getElementById('navbar-links');

navbarToggle.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});

function scrollToSection(section) {
    document.querySelector(section).scrollIntoView({ behavior: 'smooth' });
}

function openLightbox(img) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = img.src;
    lightbox.style.display = 'flex';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
}

function openModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'flex';
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}


document.getElementById('booking-form').addEventListener('submit', function (event) {
    const inputs = this.querySelectorAll('input');
    for (let input of inputs) {
        if (!input.value) {
            alert('Please fill out all fields.');
            event.preventDefault();
            return;
        }
    }
});
