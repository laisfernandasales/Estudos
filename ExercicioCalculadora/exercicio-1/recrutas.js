const primeiroNome = prompt('Informe o primeiro nome do recruta')
const sobrenome = prompt('Informe o sobrenome do recruta')
const campoDeEstudo = prompt('Informe o campo de estudo do recruta')
const ano_nascimento = prompt('Informe o ano de nascimento do recruta')

alert(
    'Nome: ' + primeiroNome + '\n' +
    'Sobrenome: '+ sobrenome + '\n' +
    'Campo de estudo: ' + campoDeEstudo + '\n' +
    'Idade: ' + (2024 - ano_nascimento)
)

