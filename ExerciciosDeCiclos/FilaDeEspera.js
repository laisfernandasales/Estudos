let EscolherOpcao = parseInt(prompt("Escolha uma opção: 1 - Lista todos os pacientes , 2 - Adicionar novo paciente , 3 - Consultar paciente, 4 - Sair"));
let fila = [];

do {
 let pacientes = "";
 for (let i = 0; i < fila.length; i++) {
   pacientes += ( i + 1 ) + " ª - " + fila[i] + "\n";
 }
 opcao = prompt (
    "Pacientes : \n" + pacientes + "\n" +
    "Escolha " +
    "Escolha uma opção :  1. Novo paciente 2. Consultar paciente 3. Sair"
 )

 switch (opcao) {
    case "1":
        const novoPaciente = prompt("Digite o nome do paciente");
        fila.push(novoPaciente);
        break;
    case "2":
        const pacienteConsultad = fila.shift()
        alert ("Paciente consultado: " + pacienteConsultad);
        break;
    case "3":
        alert("Saindo do sistema");
        break;
    default:
        alert("Opção inválida");
        break;
        

 }
} while ( opcao !== "3")