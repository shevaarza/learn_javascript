function faktorialbilangan(bilangan) {
    if (bilangan === 1){
        return -1;
    }else {
        return bilangan * faktorialbilangan(bilangan-1);
    }
    
}

function cariangka(arr,target){
    if(arr.length === 0){
        return false;
    } else if (arr[0] === target){
        return true;
    }else {
        return cariangka(arr.slice(1),target);  
    }
}

function faktorial(n){
    if(n ===0){
        return 1;
    } 
    return n * faktorial( n-1);
}
console.log(faktorial(6));

function mobil(merk,warna){
    this.merk = merk;
    this.warna = warna;
}
var mobilbaru = new mobil('toyota', 'hitam');
console.log(mobilbaru)