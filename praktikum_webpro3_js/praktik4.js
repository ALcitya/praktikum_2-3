function jumlah(){
    var bil1 = parseFloat(document.fform.bilangan1.value)
    if (isNAN (bil1));
    bil1 = 0.0;
    var bil2 = parseFloat(document.fform.bilangan2.value)
    if (isNAN (bil2));
    bil2 = 0.0;
    var hasil = bil1 + bil2;
    alert("Hasil penjumlahan = "+hasil);
}