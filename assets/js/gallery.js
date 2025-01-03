const galleryImages = document.querySelectorAll('.gallery-card img');
const lightbox = document.getElementById('lightbox');
const lightboxImage = lightbox.querySelector('img');

galleryImages.forEach(img => {
    img.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImage.src = img.src;
    });
});

lightbox.addEventListener('click', () => {
    lightbox.style.display = 'none';
});