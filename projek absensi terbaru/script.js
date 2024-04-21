// Mendapatkan elemen form dan tabel
const form = document.getElementById('attendanceForm');
const tableBody = document.querySelector('tbody');

// Menambahkan event listener ke form
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah pengiriman form

    // Mengambil nilai nama siswa dari input
    const namaSiswa = document.getElementById('namasiswa').value;
    const nomor = document.getElementById('addnomer').value;
    const nama = document.getElementById('addnama').value;
    const status = document.getElementById('addstatus').value;

    // Memanggil fungsi untuk mengabsen siswa
    if (nomor.trim() !== '' && namaSiswa.trim() !== '' && status.trim() !== '') {
        tambahSiswa(nomor, nama, status);
    } else {
        alert('Mohon isi semua informasi siswa!');
    }
});



// Fungsi untuk mengabsen siswa
function absenSiswa(namaSiswa) {
    // Mencari baris siswa berdasarkan nama
    const rows = tableBody.getElementsByTagName('tr');
    for (let i = 0; i < rows.length; i++) {
        const namaCell = rows[i].getElementsByTagName('td')[1];
        if (namaCell.textContent.trim() === namaSiswa) {
            const statusCell = rows[i].getElementsByTagName('td')[2];
            statusCell.textContent = 'Hadir'; // Mengubah status kehadiran menjadi "Hadir"
            return; // Keluar dari fungsi setelah siswa ditemukan dan diabsen
        }
    }

    // Jika nama siswa tidak ditemukan, tampilkan pesan alert
    alert('Nama siswa tidak ditemukan!');
}
function addsiswa(nomor, nama, status) {
    const tableBody = document.querySelector('tbody'); // Mendapatkan elemen tbody
    const newRow = document.createElement('tr'); // Membuat elemen <tr> baru
    const cell1 = document.createElement('td');
    const cell2 = document.createElement('td');
    const cell3 = document.createElement('td');
    
    cell1.textContent = nomor; // Nomor urut
    cell2.textContent = nama; // Nama siswa
    cell3.textContent = status; // Status

    newRow.appendChild(cell1);
    newRow.appendChild(cell2);
    newRow.appendChild(cell3);

    // Tambahkan baris siswa baru ke dalam tabel
    tableBody.appendChild(newRow);
}


