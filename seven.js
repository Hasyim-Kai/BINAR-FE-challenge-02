const dataPenjualanPakAldi = [
    {
      namaProduct : 'Sepatu Futsal Nike Vapor Academy 8',
      hargaSatuan: 760000,
      kategori : "Sepatu Sport",
      totalTerjual : 90,
    },
    {
      namaProduct : 'Sepatu Warrior Tristan Black Brown High',
      hargaSatuan: 960000,
      kategori : "Sepatu Sneaker",
      totalTerjual : 37,
    },
    {
      namaProduct : 'Sepatu Warrior Tristan Maroon High ',
      kategori : "Sepatu Sneaker",
      hargaSatuan: 360000,
      totalTerjual : 90,
    },
    {
      namaProduct : 'Sepatu Warrior Rainbow Tosca Corduroy',
      hargaSatuan: 120000,
      kategori : "Sepatu Sneaker",
      totalTerjual : 90,
    }
  ]

const getTotalPenjualan = dataPenjualan => {
  if (dataPenjualan == null) {
    return `Error: input yg diberikan kosong`
  } else if (typeof dataPenjualan != 'object') {
    return `Error: Invalid data type. Parameter type must be object`
  } else if (typeof dataPenjualan == 'object') {
    let totalPenjualan = 0
    dataPenjualan.forEach(item => {
        totalPenjualan += item.totalTerjual
    });
    return totalPenjualan
  }
}

console.log(getTotalPenjualan(dataPenjualanPakAldi))