function sumFunc(r, n) {
  return r * n;
}
console.log(`jadi hasil sumFunc(4,7) => ${sumFunc(4, 7)}`);

const sumConst = (r, n) => r - n;
console.log(`jadi hasil sumConst(2, 3) adalah  ${sumConst(2, 3)}`);

// esczping string
let nama = "nabila adalah 'perempuan' ";
console.log(nama);

let namadepan = "nabila";
let namaBelakang = "putri";
let namaBaruJuga = namadepan + namaBelakang;
console.log(namaBaruJuga);
console.log(`nama lengkap adlah ${namadepan} ${namaBelakang}`);

let DataString = "abcdshd";
let indexData = DataString.charAt(1);
console.log(`nilai pada index data ke 1 => ${indexData}`);

let namaBaru = nama.replace("nabila", "safira");
console.log(namaBaru);

let namaJuga = nama + " " + namaB;
console.log(namaJuga);
