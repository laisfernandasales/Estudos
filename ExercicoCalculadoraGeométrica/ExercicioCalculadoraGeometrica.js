/*Calculadora Geométrica

Escreva um programa em javascript para calcular a área de diferentes formas geométricas. O programa deve iniciar com um menu contendo as diferentes opções de cálculas. As opções devem ser:

área do triângulo: base * altura / 2

área do retângulo: base * altura

área do quadrado: lado²

área do trapézio: (base maior + base menor) * altura / 2

área do círculo: pi * raio² (considere pi = 3.14)

Você deve escrever o programa usando funções sempre que possível para separar os procedimentos. O programa também deve ter uma opção de “Sair” e enquanto ela não for escolhida deverá voltar ao menu. */

function AreaTriangulo() {
    const base = parseFloat(prompt("Digite a base do triângulo: "));
    const altura = parseFloat(prompt("Digite a altura do triângulo: "));
    return base * altura / 2;
}

function AreaRetangulo() {
    const base = parseFloat(prompt("Digite a base do retângulo: "));
    const altura = parseFloat(prompt("Digite a altura do retângulo: "));
    return base * altura;
}

function AreaQuadrado() {
    const lado = parseFloat(prompt("Digite o lado do quadrado: "));
    return lado * lado;
}

function AreaTrapezio() {
    const baseMaior = parseFloat(prompt("Digite a base maior do trapézio: "));
    const baseMenor = parseFloat(prompt("Digite a base menor do trapézio: "));
    const altura = parseFloat(prompt("Digite a altura do trapézio: "));
    return (baseMaior + baseMenor) * altura / 2;
}

function AreaCirculo() {
    const raio = parseFloat(prompt("Digite o raio do círculo: "));
    return 3.14 * raio * raio;
}

function Menu() {
    return prompt(
        "Calculadora Geométrica\n\n" +
        "1 - Área do triângulo\n" +
        "2 - Área do retângulo\n" +
        "3 - Área do quadrado\n" +
        "4 - Área do trapézio\n" +
        "5 - Área do círculo\n" +
        "6 - Sair\n\n"
    );
}

function executar() {
    let opcao = "";

    do {
        opcao = Menu();
        let resultado;

        switch (opcao) {
            case "1":
                resultado = AreaTriangulo();
                break;
            case "2":
                resultado = AreaRetangulo();
                break;
            case "3":
                resultado = AreaQuadrado();
                break;
            case "4":
                resultado = AreaTrapezio();
                break;
            case "5":
                resultado = AreaCirculo();
                break;
            case "6":
                alert("Saindo...");
                break;
            default:
                alert("Opção inválida");
        }

        if (resultado) {
            alert("Resultado: " + resultado);
        }

    } while (opcao !== "6");
}

executar();