let Quantia = prompt('Qual a sua quantia inicial de dinheiro?');
Quantia = parseFloat(Quantia);
let opcao = "";

do {
    opcao = prompt (
        "Saldo disponivel: R$ " + Quantia +
        "\n 1. Adicionar dinheiro " +
        "\n 2. Remover dinheiro " +
        "\n 3. Sair"
    )
    switch (opcao) {
        case "1":
            Quantia += parseFloat(prompt("Informe o valor a ser adicionado") );
            break;
        case "2":
            Quantia -= parseFloat(prompt("Informe o valor a ser removido") );
            break;
        case "3":
            console.log("Programa finalizado");
            break;
        default:
            console.log("Opção inválida");
} } while ( opcao !== "3")