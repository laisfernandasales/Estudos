const Nome = prompt("Qual é o seu nome?");
let cidades = "" // Cria uma variável vazia para armazenar as cidades ao longo do código
let contagem = 0 // Cria uma variável para contar quantas cidades foram adicionadas

let continuar = prompt("Voce visictou alguma cidade ? (sim/não)")

while ( continuar === "sim"){
    let cidade = prompt("Qual cidade você visitou?") // Pergunta ao usuário qual cidade ele visitou
    cidades += " - " + cidade + "\n" // Adiciona a cidade na variável cidades
    contagem++
    continuar = prompt("Voce visictou alguma cidade ? (sim/não)")
}

alert (`${Nome}, você visitou ${contagem} cidades. Aqui estão elas: \n${cidades}`) // Exibe um alerta com as cidades visitadas