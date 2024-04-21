class siswa {
    constructor(sifat){
        this.sifat = sifat;
    }
    jalankan() {
        console.log (" dia sifatnya baik");
    }
}

class karakter extends siswa {
    constructor(sifat,perilaku){
        super(sifat);
        this.perilaku =perilaku ;
        
    }
    jalankan() {
        console.log ("dia " + this.perilaku + "sifatnya baik");
    }
}
let student = new karakter('pintar','sehat');
student.jalankan();



function manusia() {}
manusia.prototype.berbunyi = function() {
    console.log ("tidak memiliki suara")
}

function sera() {}
sera.prototype = Object.create(manusia.prototype)
    sera.prototype.berbunyi = function() {
        console.log("guk guk");
    }
function krisna() {}
krisna.prototype = Object.create(manusia.prototype)
krisna.prototype.berbunyi = function() {
    console.log ("ngik ngik ")
}

var orang = new sera() ;
var orang1 = new krisna();

orang.berbunyi();
orang1.berbunyi();


function buatpenghitung() {
    let angka = 1 ;
    return {
        tambah(){
            angka++;
        }, buathitung(){
            return angka;
        }
    }
}

let jumlah = buatpenghitung();
console.log (jumlah.buathitung());
jumlah.tambah();
console.log (jumlah.buathitung());
