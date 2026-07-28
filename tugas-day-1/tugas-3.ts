//Buat function async bernama simulasiFetchUser(id: number) 
// yang menunggu 1 detik (pakai setTimeout di dalam Promise ) 
// lalu mengembalikan object { id, nama: "User " + id }. 
// Panggil dengan await dan tampilkan hasilnya.

// simulasi
async function simulasiFetchUser(id: number): Promise<{ id: number; nama: string }> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                id: id,
                nama: "User " + id
            });
        }, 1);
    });
}


async function jalankan() {
    console.log("Sedang mengambil data user (tunggu 1 detik)...");
    
    // panggil fungsi dengan await
    const user = await simulasiFetchUser(1);
    
    // hasil
    console.log("Data user berhasil didapatkan:");
    console.log(user);
}

jalankan();

