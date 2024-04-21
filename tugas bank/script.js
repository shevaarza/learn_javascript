class bank {
    constructor(no, namarekening, saldo){
        this.no =no;
        this.namarekening= namarekening;
        this.saldo=saldo;
    } 
    tambahsaldo(nominal){
        var hasil = parseInt(this.saldo) + parseInt(nominal);
        this.saldo = hasil ;
    }
    kurangsaldo(nominal){
        var hasil = parseInt(this.saldo) - parseInt(nominal);
        console.log(hasil)
        if(hasil <0){
            alert("nominal terlalu besar untuk di ambil")
            return false;
        }
        console.log(hasil)
        this.saldo = hasil;
        return true;
    }
    getsaldo(){
        return this.saldo;
    }

}
let nama1 = new bank (1, "sheva", 1000) 
let nama2 = new bank (2, "brina", 2000) 
let nama3 = new bank (3, "adam", 1500) 


function tambahsaldo(){
   var namarek = document.getElementById("rekening").value;
   console.log (namarek);
   var nominalinput = document.getElementById("saldo").value;
   var saldosekarang = 0;
   var trsaldo = document.getElementById(namarek).children[2];
    if(namarek == "sheva"){
        nama1.tambahsaldo(nominalinput);
        saldosekarang = nama1.getsaldo();
    }else if (namarek == "brina"){
        nama2.tambahsaldo(nominalinput);
        saldosekarang = nama2.getsaldo();
    }else if (namarek == "adam"){
        nama3.tambahsaldo(nominalinput);
        saldosekarang = nama3.getsaldo();
    }
    trsaldo.innerHTML = saldosekarang;

}

function kurangsaldo() {
    var namarek = document.getElementById("rekening").value;
    var nominalinput = document.getElementById("saldo").value;
    var saldosekarang = 0;
    var trsaldo = document.getElementById(namarek).children[2]
    if(namarek == "sheva"){
        nama1.kurangsaldo(nominalinput);
        saldosekarang = nama1.getsaldo();
    }else if(namarek == "brina"){
        nama2.kurangsaldo(nominalinput);
        saldosekarang = nama2.getsaldo();
    }else if(namarek == "adam"){
        nama3.kurangsaldo(nominalinput);
        saldosekarang= nama3.getsaldo();
    }
    trsaldo.innerHTML =saldosekarang;
}