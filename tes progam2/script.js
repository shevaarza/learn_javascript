// Data dummy untuk daftar siswa dan status hadir
let students = [
    { nama: 'Bina', hadir: false },
    { nama: 'Sheva', hadir: false }
];

// Fungsi untuk menampilkan daftar siswa dan status hadir ke dalam tabel
function tampilkanDaftarSiswa() {
    const tableBody = document.querySelector('#attendanceTable tbody');
    tableBody.innerHTML = ''; // Kosongkan tabel sebelum menambahkan data

    students.forEach((student, index) => {
        const row = `<tr id="${student.nama}">
                        <td>${index + 1}</td>
                        <td>${student.nama}</td>
                        <td>${student.hadir ? 'Hadir' : 'Absen'}</td>
                        <td><button onclick="hapusSiswa(${index});">Hapus</button>   <button onclick="absen(${index});">Absen</button></td>
                    </tr>`;
        tableBody.innerHTML += row;
    });
}

// Fungsi untuk menambahkan nama siswa baru ke dalam daftar
function tambahSiswa() {
    const newStudentName = document.getElementById('newStudent').value;
    if (newStudentName.trim() !== '') {
        students.push({ nama: newStudentName, hadir: false });
        tampilkanDaftarSiswa();
    } else {
        alert('Silakan masukkan nama siswa!');
    }
}

// Fungsi untuk menghapus siswa dari daftar
function hapusSiswa(index) {
    students.splice(index, 1);
    tampilkanDaftarSiswa();
    
}

// Fungsi untuk menangani absensi siswa
// Fungsi untuk menangani absensi siswa
function absen(index) {
console.log(students[index]);
 var nama = students[index].nama;

var trnama = document.getElementById(nama).children[2];
    trnama.innerHTML="hadir";
    students[index].hadir = true;

}

// // Fungsi untuk memperbarui teks tombol absen
// function updateTombolAbsen(index) {
   
// }


// Memanggil fungsi untuk menampilkan daftar siswa saat halaman dimuat
window.onload = function() {
    tampilkanDaftarSiswa();
};
