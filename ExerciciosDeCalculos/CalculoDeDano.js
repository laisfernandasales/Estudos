const Atacante = prompt("Qual é o nome do personagem Atacante?");
const PoderAtaque = parseFloat(prompt("Insira o poder de ataque do personagem?"));

const Defensor = prompt("Qual é o nome do personagem Defensor?");
let pontosDeVida = parseFloat(prompt("Insira os pontos de vida do personagem?"));
const PoderDefesa = parseFloat(prompt("Insira o poder de defesa do personagem?"));
const possuiEscudo = prompt("O personagem possui escudo? (sim ou não)");

let danoCausado = 0;

if (PoderAtaque > PoderDefesa && possuiEscudo.toLowerCase() === "não") {
  danoCausado = PoderAtaque - PoderDefesa;
} else if (PoderAtaque > PoderDefesa && possuiEscudo.toLowerCase() === "sim") {
  danoCausado = (PoderAtaque - PoderDefesa) / 2;
}

pontosDeVida -= danoCausado;

alert(Atacante + " causou " + danoCausado + " pontos de dano em " + Defensor);
alert(
  Atacante + "\nPoder de ataque: " + PoderAtaque + "\n\n" +
  Defensor + "\nPontos de vida: " + pontosDeVida +
  "\nPoder de defesa: " + PoderDefesa + "\nPossui escudo: " + possuiEscudo
);