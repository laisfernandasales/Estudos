const unidadeDeMedida = prompt("Digite a unidade de medida que você deseja converter em metros: "); // Recebe a unidade de medida que o usuário deseja converter
const Escolha = parseFloat(prompt("Digite o valor da unidade de medida que deseja converter: ")); // Recebe o valor da unidade de medida que o usuário deseja converter

switch (unidadeDeMedida) { // Verifica a unidade de medida que o usuário deseja converter
    case "milimetros":
        console.log(Escolha + " milimetros equivale a " + (Escolha / 1000) + " metros");
        break;
    case "centimetros":
        console.log(Escolha + " centimetros equivale a " + (Escolha / 100) + " metros");
        break;
    case "decimetros":
        console.log(Escolha + " decimetros equivale a " + (Escolha / 10) + " metros");
        break;
    case "decametros":
        console.log(Escolha + " decametros equivale a " + (Escolha * 10) + " metros");
        break;
    case "hectometros":
        console.log(Escolha + " hectometros equivale a " + (Escolha * 100) + " metros");
        break;
    case "quilometros":
        console.log(Escolha + " quilometros equivale a " + (Escolha * 1000) + " metros");
        break;
    default:
        console.log("Unidade de medida não reconhecida.");
}