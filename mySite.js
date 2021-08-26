var modificador = 1;
function alternar() {
  var imgx = document.getElementById('img1')
  var imgy = document.getElementById('img2')

    if (modificador < 1) {
        modificador = modificador + 1;
    }else {
    modificador = modificador -1;
    }
    if (modificador < 1) {
    imgx.style.visibility = "hidden";
    imgy.style.visibility = "visible";
    }else {
    imgx.style.visibility = "visible";
    imgy.style.visibility = "hidden";
    }
  console.log(modificador);
}
setInterval( alternar, 1500);
