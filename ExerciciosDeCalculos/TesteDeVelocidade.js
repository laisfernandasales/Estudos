const PrimeiroNome = prompt("Qual é o seu primeiro nome?");
const VelocidadeVeiculo1 = prompt("Qual é a velocidade do veículo 1?");
const VelocidadeVeiculo2 = prompt("Qual é a velocidade do veículo 2?");

if ( VelocidadeVeiculo1 > VelocidadeVeiculo2 ) {
  alert(`O veículo 1, dirigido por ${PrimeiroNome}, está mais rápido!`);
} else if ( VelocidadeVeiculo1 < VelocidadeVeiculo2 ) {
  alert(`O veículo 2, dirigido por ${PrimeiroNome}, está mais rápido!`);
}