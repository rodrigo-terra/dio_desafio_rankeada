// Calculadora de partidas Rankeadas

/*
  **O Que deve ser utilizado**
  - Variáveis
  - Operadores
  - Laços de repetição
  - Estruturas de decisões
  - Funções
*/

// Variáveis de vitórias e derrotas
let win = 149
let lose = 87

// Função para calcular o saldo de vitórias
function calcularSaldo(win, lose) {
  return win - lose; 
}

// Função para determinar o nível do herói baseado no saldo de vitórias
function determinarNivel(saldoDeVitoria) {
  if (saldoDeVitoria <= 0) {
    return "Latão";
  } else if (saldoDeVitoria < 10) {
    return "Ferro";
  } else if (saldoDeVitoria < 21) {
    return "Bronze";
  } else if (saldoDeVitoria < 51) {
    return "Prata";
  } else if (saldoDeVitoria < 81) {
    return "Ouro";
  } else if (saldoDeVitoria < 91) {
    return "Diamante";
  } else if (saldoDeVitoria < 101) {
    return "Lendário";
  } else {
    return "Imortal";
  }
}

// Função para exibir o resultado final
function exibirResultado(win, lose) {
  const saldoDeVitoria = calcularSaldo(win, lose);
  const nivel = determinarNivel(saldoDeVitoria);
  console.log(`O Herói tem o saldo de ${saldoDeVitoria} e está no nível de ${nivel}!`);
}

// Exemplo de uso
exibirResultado(win, lose);
