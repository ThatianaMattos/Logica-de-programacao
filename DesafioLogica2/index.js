// Função para calcular o saldo de partidas ranqueadas
function calcularSaldoRankeadas(vitorias, derrotas) {
    // Calcular o saldo de vitórias
    let saldoVitorias = vitorias - derrotas;
    let nivel = ""; // Variável para armazenar o nível do jogador
  
    // Determinar o nível com base no saldo de vitórias
    if (saldoVitorias < 10) {
      nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
      nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
      nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
      nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
      nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
      nivel = "Lendário";
    } else if (vitorias >= 101) {
      nivel = "Imortal";
    }
  
    // Retorna a mensagem com o saldo e o nível
    return `O Herói tem um saldo de ${saldoVitorias} e está no nível de ${nivel}`;
  }
  
  // Exemplo de uso da função
  let vitoriasThatiana = 30; // Número de vitórias para estar no ranking Prata
  let derrotasThatiana = 10; // Número de derrotas
  
  let resultadoThatiana = calcularSaldoRankeadas(vitoriasThatiana, derrotasThatiana);
  console.log(resultadoThatiana); // "O Herói tem um saldo de 20 e está no nível de Prata"
  