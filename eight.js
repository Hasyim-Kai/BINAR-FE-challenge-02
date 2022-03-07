const dataPenjualanNovel = [
  {
    idProduct: 'BOOK002421',
    namaProduk: 'Pulang - Pergi',
    penulis: 'Tere Liye',
    hargaBeli: 60000,
    hargaJual: 86000,
    totalTerjual: 150,
    sisaStok: 17,
  },
  {
    idProduct: 'BOOK002351',
    namaProduk: 'Selamat Tinggal',
    penulis: 'Tere Liye',
    hargaBeli: 75000,
    hargaJual: 103000,
    totalTerjual: 171,
    sisaStok: 20,
  },
  {
    idProduct: 'BOOK002941',
    namaProduk: 'Garis Waktu',
    penulis: 'Fiersa Besari',
    hargaBeli: 67000,
    hargaJual: 99000,
    totalTerjual: 213,
    sisaStok: 5,
  },
  {
    idProduct: 'BOOK002941',
    namaProduk: 'Laskar Pelangi',
    penulis: 'Andrea Hirata',
    hargaBeli: 55000,
    hargaJual: 68000,
    totalTerjual: 20,
    sisaStok: 56,
  },
];

const getInfoPenjualan = dataPenjualan => {
  if (dataPenjualan == null) {
    return `Error: input yg diberikan kosong`
  } else if (typeof dataPenjualan != 'object') {
    return `Error: Invalid data type. Parameter type must be object`
  } else if (typeof dataPenjualan == 'object') {
    let totalKeuntungan = 0, totalModal = 0, penulisTerlaris = {}, produkBukuTerlaris = dataPenjualan[0];

    dataPenjualan.forEach(item => {
      totalKeuntungan += (item.hargaJual * item.totalTerjual)
      totalModal += (item.hargaBeli * (item.sisaStok + item.totalTerjual))
      if (produkBukuTerlaris.totalTerjual < item.totalTerjual) { produkBukuTerlaris = item }
      if (item.penulis in penulisTerlaris) {
        penulisTerlaris[item.penulis] = penulisTerlaris[item.penulis] + 1;
      } else {
        penulisTerlaris[`${item.penulis}`] = 1
      }
    });

    const numberToRupiah = (number) => new Intl.NumberFormat(
      "id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0
    }).format(number);
    
    const getKeyByValue = (object, value) => Object.keys(object).find(key => object[key] === value);
    let popularWriterCount = Math.max(...Object.values(penulisTerlaris))
    
    let persentaseKeuntungan = (totalKeuntungan - totalModal) / totalModal * 100 / 100 * 100 + ' %';
    totalKeuntungan = numberToRupiah(totalKeuntungan)
    totalModal = numberToRupiah(totalModal)
    produkBukuTerlaris = produkBukuTerlaris.namaProduk
    penulisTerlaris = getKeyByValue(penulisTerlaris, popularWriterCount)
    return { totalKeuntungan, totalModal, persentaseKeuntungan, produkBukuTerlaris, penulisTerlaris };
  }
}

console.log(getInfoPenjualan(dataPenjualanNovel))