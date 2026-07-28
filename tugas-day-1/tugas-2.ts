//Buat array minimal 5 object { nama, harga, stok } untuk data produk toko. 
// Gunakan filter untuk menampilkan produk dengan stok < 10, 
// dan map untuk menampilkan daftar nama produk saja.

// array 5 object produk
const produkToko = [
  { nama: "Produk 1", harga: 10000, stok: 9 },
  { nama: "Produk 2", harga: 20000, stok: 11 },
  { nama: "Produk 3", harga: 30000, stok: 8 },
  { nama: "Produk 4", harga: 400000, stok: 12 },
  { nama: "Produk 5", harga: 50000, stok: 1 }
];

// filter untuk produk dengan stok < 10
const stokMenipis = produkToko.filter((produk) => produk.stok < 10);
console.log("Produk dengan stok kurang dari 10:", stokMenipis);

// map untuk menampilkan daftar nama produk saja
const daftarNamaProduk = produkToko.map((produk) => produk.nama);
console.log("Daftar Nama Produk:", daftarNamaProduk);