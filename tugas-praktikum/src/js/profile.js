const animatedImage = document.getElementById('animated');

function moveImage() {
    // Periksa arah pergerakan
    const currentTransform = animatedImage.style.transform;
    const isMovingRight = currentTransform === 'translateX(100%)';

    // Setel arah pergerakan berdasarkan kondisi sebelumnya
    animatedImage.style.transform = isMovingRight ? 'translateX(0)' : 'translateX(100%)';
}

// Panggil moveImage setelah halaman sepenuhnya dimuat
window.addEventListener('load', function() {
    setInterval(moveImage, 6000);
});