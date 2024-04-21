function klick(event){
    event.preventDefault();
    var nama = "sheva";
    var kelas = "xi";
    var umur = "17 tahun"; 

    var namainput = document.getElementById("nama").value;
    var kelasinput = document.getElementById("kelas").value;
    var umurinput = document.getElementById("umur").value;
    
    if(nama == namainput && kelas==kelasinput && umur==umurinput){
        // var url = "http://wa.me/+6285607324955?text=broo";
        var url = "https://api.whatsapp.com/send?phone=+6281515712889&text=brooo"
        window.open(url,"_blank");
        console.log("masuk lagi");
    }else if(nama!=namainput && kelas!=kelasinput && umur!=umurinput){
        alert("kamu salah , coba lagi");   
    }

    console.log("masuk");
} 
var nama = "sheva";
function coba(angka1,angka2){
    var umur = "umur"
    return angka1 * angka2 ;

}
// console.log(`hasil adalah ${coba(2,3)}`);

var angka = [1,2,3,4,5]

angka.forEach(function(nilai,index,array){
    // console.log(nilai,index,array);
} )
    
var angka = [1,2,3,4,5];

var kali2 = angka.map(function(nilai){
    return nilai *2;
})
// console.log(kali2);

var angka = [1,2,3,4,5];

var jumlah = angka.reduce(function (nilai , angka) {
   console.log(nilai, angka);
    return (nilai > angka)? nilai : angka;
    
}, 0)

console.log(jumlah);




