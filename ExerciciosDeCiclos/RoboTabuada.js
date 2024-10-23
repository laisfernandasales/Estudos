let NumeroTabuada = prompt("Digite um número para ver a tabuada dele: ");



for ( i = 1; i <= 20; i++) {
    resultado = "";
    resultado += NumeroTabuada + " x " + i + " = " + NumeroTabuada * i + "\n";
    alert(resultado);
}