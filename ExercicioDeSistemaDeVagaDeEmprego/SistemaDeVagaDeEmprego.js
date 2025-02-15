/*Escreva um programa em javascript que simule um sistema de vagas de emprego, onde é possível gerenciar as vagas e adicionar 
candidatos às vagas. Ele deve atender aos seguintes requisitos:

Ter um um menu onde é possível escolher entre as diferentes funcionalidades do sistemaListar vagas disponíveisCriar um nova vagaVisualizar
 uma vagaInscrever um candidato em uma vagaExcluir uma vagaSair

Listar vagas disponíveis

Criar um nova vaga

Visualizar uma vaga

Inscrever um candidato em uma vaga

Excluir uma vaga

Sair

A opção de listar as vagas deve mostrar o índice, o nome e a quantidade de candidatos inscritos de todas as vagas.

A opção de criar uma nova vaga deve pedir um nome para a vaga, uma descrição e uma data limite, e também deve pedir que o usuário confirme as informações
 antes de salvá-las.

A opção de visualizar uma vaga deve pedir o índice da vaga e mostrar todas as informações dela: índice, nome, descrição, data limite, quantidade de candidatos
 e o nome dos candidatos.

A opção de inscrever um candidato em uma vaga de pedir o nome do candidato, o índice da vaga e então uma confirmação exibindo as informações da vaga antes
 de salvar o candidato na vaga.

A opção de excluir uma vaga deve pedir o índice da vaga, mostrar suas informações e pedir que o usuário confirme a exclusão da vaga antes de realmente exclui-la.*/

let vagas = [];

function listarVagas() {
    let mensagem = "Vagas disponíveis:\n";
    vagas.forEach(element => {
        mensagem += `Índice: ${element.indice} \nNome: ${element.nome} \nQuantidade de candidatos: ${element.candidatos.length}\n\n`;
    });
    alert(mensagem);
}

function criarVaga() {
    let nome = prompt("Digite o nome da vaga: ");
    let descricao = prompt("Digite a descrição da vaga: ");
    let dataLimite = prompt("Digite a data limite da vaga: ");
    let confirmacao = prompt(`Confirma a criação da vaga? \nNome: ${nome} \nDescrição: ${descricao} \nData limite: ${dataLimite} \nDigite "sim" para confirmar ou "nao" para cancelar`);
  
    if (confirmacao === "sim") {
        console.log(vagas.push({indice: vagas.length, nome: nome, descricao: descricao, dataLimite: dataLimite, candidatos: []}));
        alert("Vaga criada com sucesso");
    } else {
        alert("Vaga não criada");
    }
    return vagas;
    
}

function visualizarVaga() {
    let indice = parseInt(prompt("Digite o índice da vaga: "));
    let vaga = vagas[indice];
    let mensagem = `Índice: ${vaga.indice} \nNome: ${vaga.nome} \nDescrição: ${vaga.descricao} \nData limite: ${vaga.dataLimite} \nQuantidade de candidatos: ${vaga.candidatos.length} \nCandidatos: \n`;
    vaga.candidatos.forEach(element => {
        mensagem += `${element.nome}\n`;
    });
    alert(mensagem);
}

function inscreverCandidatoVaga() {
    let nome = prompt("Digite o nome do candidato: ");
    vagas.forEach(listarVagas);
    let indice = parseInt(prompt("Digite o índice da vaga: "));
    let confirmacao = prompt(`Confirma a inscrição do candidato? \nNome: ${nome} \nVaga: ${vagas[indice].nome} \nDigite "sim" para confirmar ou "nao" para cancelar`);
    if (confirmacao === "sim") {
        vagas[indice].candidatos.push({nome: nome});
        alert("Candidato inscrito com sucesso");
    } else {
        alert("Candidato não inscrito");
    }
}

function excluirVaga() {
    let indice = parseInt(prompt("Digite o índice da vaga: "));
    let vaga = vagas[indice];
    let confirmacao = prompt(`Confirma a exclusão da vaga? \nNome: ${vaga.nome} \nDescrição: ${vaga.descricao} \nData limite: ${vaga.dataLimite} \nQuantidade de candidatos: ${vaga.candidatos.length} \nDigite "sim" para confirmar ou "nao" para cancelar`);
    if (confirmacao === "sim") {
        vagas.splice(indice, 1);
        alert("Vaga excluída com sucesso");
    } else {
        alert("Vaga não excluída");
    }
}

let opcao;

do {
    opcao = parseInt(prompt("Escolha uma opção: \n1 - Listar vagas disponíveis \n2 - Criar uma nova vaga \n3 - Visualizar uma vaga \n4 - Inscrever um candidato em uma vaga \n5 - Excluir uma vaga \n6 - Sair"));
    switch (opcao) {
        case 1:
            listarVagas();
            break;
        case 2:
            criarVaga();
          break;
        case 3:
            visualizarVaga();
            break;
        case 4:
            inscreverCandidatoVaga();
            break;
        case 5:
            excluirVaga();
            break;

    }

} while (opcao !== 6);

