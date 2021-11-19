var input = document.getElementById('tela'),
  numero = document.querySelectorAll('.numeros div'),
  conta = document.querySelectorAll('.contas div'),
  resultado = document.getElementById('resultado'),
  limpar = document.getElementById('limpar'),
  resultadoEstaMostrado = false;


for (var i = 0; i < numero.length; i++) {
  numero[i].addEventListener("click", function(e) {

   
    var textoNaTela = input.innerHTML;
    var ultimoChar = textoNaTela[textoNaTela.length - 1];

    
    if (resultadoEstaMostrado === false) {
      input.innerHTML += e.target.innerHTML;
    } else if (resultadoEstaMostrado === true && ultimoChar === "+" || ultimoChar === "-" || ultimoChar === "×" || ultimoChar === "÷") {
      
      resultadoEstaMostrado = false;
      input.innerHTML += e.target.innerHTML;
    } else {
     
      resultadoEstaMostrado = false;
      input.innerHTML = "";
      input.innerHTML += e.target.innerHTML;
    }

  });
}


for (var i = 0; i < conta.length; i++) {
  conta[i].addEventListener("click", function(e) {

    
    var textoNaTela = input.innerHTML;
    var ultimoChar = textoNaTela[textoNaTela.length - 1];

    
    if (ultimoChar === "+" || ultimoChar === "-" || ultimoChar === "×" || ultimoChar === "÷") {
      var newString = textoNaTela.substring(0, textoNaTela.length - 1) + e.target.innerHTML;
      input.innerHTML = newString;
    } else if (textoNaTela.length == 0) {
     
      alert("coloque um numero primeiro");
    } else {
     
      input.innerHTML += e.target.innerHTML;
    }

  });
}


resultado.addEventListener("click", function() {

  
  var inputString = input.innerHTML;

  
  var numeros = inputString.split(/\+|\-|\×|\÷/g);

  
  var contas = inputString.replace(/[0-9]|\./g, "").split("");

  
  var divide = contas.indexOf("÷");
  while (divide != -1) {
    numeros.splice(divide, 2, numeros[divide] / numeros[divide + 1]);
    contas.splice(divide, 1);
    divide = contas.indexOf("÷");
  }

  var multiply = contas.indexOf("×");
  while (multiply != -1) {
    numeros.splice(multiply, 2, numeros[multiply] * numeros[multiply + 1]);
    contas.splice(multiply, 1);
    multiply = contas.indexOf("×");
  }

  var subtract = contas.indexOf("-");
  while (subtract != -1) {
    numeros.splice(subtract, 2, numeros[subtract] - numeros[subtract + 1]);
    contas.splice(subtract, 1);
    subtract = contas.indexOf("-");
  }

  var add = contas.indexOf("+");
  while (add != -1) {
    numeros.splice(add, 2, parseFloat(numeros[add]) + parseFloat(numeros[add + 1]));
    contas.splice(add, 1);
    add = contas.indexOf("+");
  }

  input.innerHTML = numeros[0]; 

  resultadoEstaMostrado = true; 
});


limpar.addEventListener("click", function() {
  input.innerHTML = "";
})