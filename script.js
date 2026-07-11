// =========================
// SELLER ELSA | BEAUTY GLOW
// =========================

let jumlahKlik = 0;

// Pesan saat halaman dibuka
function selamatDatang() {
    alert("🌸 Selamat Datang di Seller Elsa | Beauty Glow Official 🌸");
}

// Fungsi tombol Belanja Sekarang
function klikIklan() {

    jumlahKlik++;

    document.getElementById("jumlahKlik").innerHTML = jumlahKlik;

    let nama = prompt("Masukkan Nama Pembeli:");

    if (nama == null || nama == "") {
        return;
    }

    let jumlah = parseInt(prompt("Jumlah Produk yang Dibeli:", "1"));

    if (isNaN(jumlah) || jumlah <= 0) {
        jumlah = 1;
    }

    let harga = 132300;

    let total = harga * jumlah;

    let nomor = Math.floor(Math.random() * 900000 + 100000);

    let tanggal = new Date().toLocaleDateString("id-ID");

    let struk =
"========== STRUK PEMBELIAN ==========\n\n" +

"Nomor Pesanan : BG-" + nomor +

"\nTanggal : " + tanggal +

"\nNama Pembeli : " + nama +

"\nProduk : Skintific Brightening Serum" +

"\nHarga : Rp " + harga.toLocaleString("id-ID") +

"\nJumlah : " + jumlah +

"\n--------------------------------------" +

"\nTOTAL : Rp " + total.toLocaleString("id-ID") +

"\n\nTerima kasih telah berbelanja\nSeller Elsa | Beauty Glow Official";

    alert(struk);

    if (confirm("Cetak Struk?")) {

        let halaman = window.open("", "_blank");

        halaman.document.write("<pre style='font-size:18px;font-family:Arial'>" + struk + "</pre>");

        halaman.print();

    }

}

// Smooth Scroll Menu
document.querySelectorAll("nav a").forEach(function(menu){

    menu.addEventListener("click",function(e){

        e.preventDefault();

        let tujuan = document.querySelector(this.getAttribute("href"));

        tujuan.scrollIntoView({

            behavior:"smooth"

        });

    });

});

// Tombol Kembali ke Atas
window.onscroll = function(){

    let tombol = document.getElementById("topBtn");

    if(!tombol) return;

    if(document.documentElement.scrollTop > 300){

        tombol.style.display="block";

    }else{

        tombol.style.display="none";

    }

}

function kembaliKeAtas(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

}