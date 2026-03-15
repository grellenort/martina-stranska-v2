const images = document.querySelectorAll('.gallery-img');
const modalImage = document.getElementById('modalImage');
const modal = new bootstrap.Modal(document.getElementById('imageModal'));

images.forEach(img => {
    img.addEventListener('click', () => {
        modalImage.src = img.src;
        modal.show();
    });
});

const iframe = document.getElementById('videoFrame');



