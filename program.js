// Dasar program 
function hitungNilai(nilaiUjian, nilaiTugas, nilaiProyek) {
    const ujian = 0.6;
    const tugas = 0.2;
    const proyek = 0.2;
  
    const nilaiAkhir = nilaiUjian *ujian + nilaiTugas * tugas + nilaiProyek * proyek;
    return nilaiAkhir;
  }
   
  // penggunaan if, else, dan nested if 
  const nilaiUjian = 85;
  const nilaiTugas = 75;
  const nilaiProyek = 90;
  
  const nilaiAkhir = hitungNilai(nilaiUjian, nilaiTugas, nilaiProyek);
  
  if (nilaiAkhir >= 90) {
    console.log("Nilai Akhir: A");
  } else if (nilaiAkhir >= 80) {
    console.log("Nilai Akhir: B");
  } else if (nilaiAkhir >= 70) {
    console.log("Nilai Akhir: C");
  } else {
    console.log("Nilai Akhir: D");
  }
  
  // penggunaan switch case 
  const hari = "Selasa";
  
  switch (hari) {
    case "Senin":
      console.log("Hari ini adalah Senin.");
      break;
    case "Selasa":
      console.log("Hari ini adalah Selasa.");
      break;
    case "Rabu":
      console.log("Hari ini adalah Rabu.");
      break;
    default:
      console.log("Hari ini adalah hari lain.");
  }
  
  //  penggunaan for statement 
  console.log("Mencetak angka 1-5 dengan for:");
  for (let i = 1; i <= 5; i++) {
    console.log(i);
  }
  
  //  penggunaan while loop 
  console.log("Mencetak angka 1-5 dengan while:");
  let angka = 1;
  while (angka <= 5) {
    console.log(angka);
    angka++;
  }
  
  //  penggunaan do-while loop 
  console.log("Mencetak angka 1-5 dengan do-while:");
  let angka2 = 1;
  do {
    console.log(angka2);
    angka2++;
  } while (angka2 <= 5);
  