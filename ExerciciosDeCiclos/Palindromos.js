let EscreverPalavra = prompt("Digite uma palavra para ver se ela é um palíndromo: ");

let PalavraInvertida = "";

for (let i = EscreverPalavra.length - 1; i >= 0; i--) {
    PalavraInvertida += EscreverPalavra[i];
}

if (EscreverPalavra === PalavraInvertida) {
    alert("A palavra " + EscreverPalavra + " é um palíndromo!");
} else {
    alert("A palavra " + EscreverPalavra + " e sua palavra invertida " + PalavraInvertida + " não é um palíndromo!");
}