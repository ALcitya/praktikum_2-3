const myForm = document.getElementById('myform');
const confirmation = document.getElementById('confirm');

myForm.addEventListener('submit', function (event) {
    event.preventDefault();

    // Simulasi pengiriman data form (misalnya, dengan AJAX)
    // Di sini, kita hanya menampilkan pesan konfirmasi
    confirmation.classList.remove('hidden');

    // Menghapus pesan konfirmasi setelah beberapa detik (misalnya, 3 detik)
    setTimeout(function () {
        confirmation.classList.add('hidden');
    }, 3000);
});