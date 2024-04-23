function emitirAlerta() {
    alert("Olá, Mundo!");
}

function solicitarNome() {
   
    var nome = prompt("Por favor, insira seu nome:");

    
    if (nome != null && nome != "") {
        
        alert("Olá, " + nome + "! Bem-vindo!");
        
        document.getElementById("nomeInserido").innerText = "Nome inserido: " + nome;
    } else {
        
        alert("Olá, visitante! Bem-vindo!");
        
        document.getElementById("nomeInserido").innerText = "Nome inserido: (nenhum)";
    }
}

function dobraNumero(){
    var dobra = parseFloat(document.getElementById('numeroQualquer').value);
    if (!isNaN(dobra)) {
        var resultado = dobra * 2;
        
        document.getElementById("resultado1").innerText = "O dobro do número inserido é: " + resultado;
    } else {
       
        document.getElementById("resultado1").innerText = "Por favor, insira um número válido.";
    }

}

function calcNumero(){
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    if (!isNaN(num1 & num2)) {
        var resuSoma = num1 + num2;
        var resuMult = num1 * num2;
        document.getElementById("resu1").innerText = "O resultado da soma dos dois números é: " + resuSoma;
        document.getElementById("resu2").innerText = "O resultado da multiplicação dos dois números é: " + resuMult;
    } else {
       
        document.getElementById("resu1").innerText = "Por favor, insira um número válido.";
    }

}

function calcMedia() {
    var nota1 = parseFloat(document.getElementById('nota1').value);
    var nota2 = parseFloat(document.getElementById('nota2').value);
    var nota3 = parseFloat(document.getElementById('nota3').value);
    var nota4 = parseFloat(document.getElementById('nota4').value);
    if (!isNaN(nota1 & nota2 & nota3 & nota4)) {
        var calcMedia = (nota1 + nota2 + nota3 + nota4)/4;

        document.getElementById("resuMedia").innerText = "A média das notas informadas: " + calcMedia;
        
    } else {
       
        document.getElementById("resuMedia").innerText = "Por favor, insira um número válido.";
    }

}

function calcular() {

    numero = parseFloat(document.getElementById('numero').value);
            
            if (!isNaN(numero)) {
               
                var raizQuadrada = Math.sqrt(numero);
                
                var raizCubica = Math.cbrt(numero);
                
                var potenciaQuadrada = Math.pow(numero, 2);
               
                var potenciaCubica = Math.pow(numero, 3);

                document.getElementById("resuCalc1").innerText = "Resultado da raiz quadrada: " + raizQuadrada;
                document.getElementById("resuCalc2").innerText = "Resultado da raiz cúbica: " + raizCubica;
                document.getElementById("resuCalc3").innerText = "Resultado da potência ao quadrado: " + potenciaQuadrada;
                document.getElementById("resuCalc4").innerText = "Resultado da potência ao cubo: " + potenciaCubica;
}
            else {
       
                document.getElementById("resuCalc1").innerText = "Por favor, insira um número válido.";
}

}