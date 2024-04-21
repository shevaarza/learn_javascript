document.getElementById('attendanceForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var studentName = document.getElementById('studentName').value;
    if (studentName.trim() !== '') {
        setabsen(studentName);
        document.getElementById('studentName').value = '';
    } else {
        alert('Nama siswa harus diisi!');
    }
});

function setabsen(nama){
   var trnama = document.getElementById(nama).children[2];
   trnama.innerHTML="absen";
    
}   