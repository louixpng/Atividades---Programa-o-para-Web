const button = document.getElementById("botao");

function rodarDado() {
  var resultado = Math.floor(Math.random() * 6) + 1;
  document.getElementById("resultado").innerHTML = resultado;  
}

botao.onclick=rodarDado;