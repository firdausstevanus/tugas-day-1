//  Buat function cekBilanganPrima(n: number): boolean yang mengembalikan true / false.

// boolean
function cekBilPrima(n: number): boolean {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

// hasil
console.log("Apakah 7 bilangan prima?", cekBilPrima(7));
console.log("Apakah 2 bilangan pria?", cekBilPrima(2));
console.log("4 bil prima?", cekBilPrima(4));
console.log("12456765434524 bilangan prima?", cekBilPrima(12456765434524));

