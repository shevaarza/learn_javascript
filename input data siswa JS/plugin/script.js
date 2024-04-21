const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })



function inputan(){
    const nama= document.getElementById("nama").value;
    const nis= document.getElementById("nis").value;
    const asalsekolah = document.getElementById("asalsekolah").value;
    let gender = document.querySelector('input[class="gender"]:checked').value;
    console.log([nama,nis,asalsekolah,gender]);
    if(nama == "sheva ahk" && nis == "11201" && asalsekolah == "SMAN 2 mojokerto" && gender == "laki-laki" ){
        window.open("web-profil/index.html")
    } else if (nama != "sheva ahk"&& nis !="11201" && asalsekolah != "SMAN 2 mojokerto" && gender !="laki-laki" ){
        Toast.fire({
            icon: 'error',
            title: 'semua error'
          });
    }
    else if (nis !="11201" && asalsekolah != "SMAN 2 mojokerto" && gender !="laki-laki" ){
        Toast.fire({
            icon: 'error',
            title: 'nis, asal sekolah , gender error'
          });
    }
    else if (asalsekolah != "SMAN 2 mojokerto" && gender !="laki-laki" && nama != "sheva ahk" ){
        Toast.fire({
            icon: 'error',
            title: 'nama, asal sekolah , gender error'
          });
    }
    else if ( gender !="laki-laki" && nama != "sheva ahk" && nis !="11201"){
        Toast.fire({
            icon: 'error',
            title: 'gender,nama ,nis  error'
          });
    } else if (nama != "sheva ahk" && nis !="11201"){
        Toast.fire({
            icon: 'error',
            title: 'nama, nis  kocak'
          });
          
    } else if (nama != "sheva ahk" && asalsekolah != "SMAN 2 mojokerto"){
        Toast.fire({
            icon: 'error',
            title: 'nama , asal kocak'
          });
    } else if (nama != "sheva ahk" && gender !="laki-laki"){
          Toast.fire({
              icon: 'error',
              title: 'nama ,gender kocak'
            });
    } else if (nis !="11201" && asalsekolah != "SMAN 2 mojokerto"){
            Toast.fire({
                icon: 'error',
                title: 'nis, asalkocak'
              });
   } else if (nis !="11201"  && gender !="laki-laki"){
                    Toast.fire({
                        icon: 'error',
                        title: 'nis, gender kocak'
                  });
  } else if (asalsekolah != "SMAN 2 mojokerto" && gender !="laki-laki"){
                    Toast.fire({
                        icon: 'error',
                        title: 'asal,gender salah '
                      });
   } else if (nama != "sheva ahk" ){
            Toast.fire({
                    icon: 'error',
                    title: 'nama salah kocak'
                  });
   } else if ( nis !="11201"){
                Toast.fire({
                    icon: 'error',
                    title: 'nis salah'
                  });
      } else if (asalsekolah != "SMAN 2 mojokerto"){
                    Toast.fire({
                   icon: 'error',
                   title: 'asal salah'
                          });
     } else if (gender !="laki-laki"){
                Toast.fire({
                 icon: 'error',
               title: 'salah kelamin kocak'
                         });
                
        }
}

const checkme = document.getElementById("checkme");
const button = document.getElementById("button");
checkme.addEventListener("click", event =>{
    if(event.target.checked){
        button.removeAttribute("disabled")
    } else {
        button.setAttribute("disabled" ,true)
    }
})