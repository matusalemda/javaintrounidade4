var grupoTarjetas1 = ["🦄", "🍦", "🌈", "👽", "👾", "🤖", "👹", "👺"];
var grupoTarjetas2 = ["😻","🧠","👀","🧐","🥩","🍉","🥑","🥦"];
var grupoTarjetas3 = ["🤡","💩","🎃","🙀","☠️","👾","😽","😼"];

var grupoTarjetas = grupoTarjetas1.concat(grupoTarjetas1, grupoTarjetas2,grupoTarjetas2);
var totalTarjetas = grupoTarjetas;

function barajaTarjetas(){
  //pega a matriz fonte e a reordena aleatoriamente
  var resultado;

  resultado = totalTarjetas.sort(function(){
    return 0.5 - Math.random();
  });

  return resultado;
}

function reparteTarjetas(){
  var mesa = document.querySelector("#mesa"); //acesso ao codigo html
  var tarjetaBarajadas = barajaTarjetas(); //vem da função que randomiza
  mesa.innerHTML = ""; //limpando para deixar em branco

  tarjetaBarajadas.forEach(function(elemento){
    //Nossos trechos de html são inserido aqui no loop
    var tarjeta = document.createElement("div");

    tarjeta.innerHTML = 
      '<div class="tarjeta">' +
      '<div class="tarjeta__contenido">' +
      elemento +
      '</div>' +
      '</div>';
    
    mesa.appendChild(tarjeta); //é aqui que cada nova div é determinada dentro da div#mesa
  });
}

function descubrir(){
  this.classList.add("descubierta"); //descubierta é um pseudo-atributo está no CSS, verifique para entender
}

reparteTarjetas();

document.querySelectorAll(".tarjeta").forEach(function(elemento){
  elemento.addEventListener("click", descubrir);
});

// Event listener for the button to redistribute cards
document.getElementById("btn").addEventListener("click", function() {
  // Remover a classe 'descubierta' de todas as cartas
  document.querySelectorAll(".tarjeta.descubierta").forEach(function(elemento) {
    elemento.classList.remove("descubierta");
  });

  // Redistribuir as cartas
  reparteTarjetas();

  // Associar novamente o evento 'click' às novas cartas
  document.querySelectorAll(".tarjeta").forEach(function(elemento) {
    elemento.addEventListener("click", descubrir);
  });
});



document.getElementById("btn-revira").addEventListener("click", function() {
  // Remover a classe 'descubierta' de todas as cartas sem reembaralhar
  document.querySelectorAll(".tarjeta.descubierta").forEach(function(elemento) {
    elemento.classList.remove("descubierta");
  });

  // Associar novamente o evento 'click' às novas cartas, porque a conexão antiga se perdeu
  document.querySelectorAll(".tarjeta").forEach(function(elemento) {
    elemento.addEventListener("click", descubrir);
  });
});