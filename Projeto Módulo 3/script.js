function simplificar(){
    var valor1 = document.getElementById('num1').value
    var valor2 = document.getElementById('num2').value
    var resultado = Math.round(valor1/valor2);
    document.getElementById('resultado').value = resultado;
}

function potencia(){
    var valor1 = document.getElementById('n1').value
    var valor2 = document.getElementById('n2').value
    var resultado = Math.pow(valor1,valor2);
    document.getElementById('result').value = resultado;
}

function comprimento(){
    var valor1 = document.getElementById('r').value
   var resultado = 2*3.14*valor1;
    document.getElementById('res').value = resultado;
}
