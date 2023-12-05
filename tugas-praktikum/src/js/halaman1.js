const animatedDescription = document.getElementById('animatedDescription');

function showDescription() {
    animatedDescription.classList.add('show');
}

// Panggil showDescription setelah halaman sepenuhnya dimuat
window.addEventListener('load', function() {
    showDescription();
});