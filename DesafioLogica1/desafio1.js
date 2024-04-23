// Variáveis 
const nomeDaHeroina = 'She-Ra_Thatiana'
let xpDaHeroina = 2554;
let nivelHeroina    =null;
let porcentagemNivel = undefined;

// Estrutura de decisão usando switch
switch (true) {
    case (xpDaHeroina < 1000):
        nivelHeroina = "Ferro";
        break;
    case (xpDaHeroina >= 1001 && xpDaHeroina <= 2000):
        nivelHeroina = "Bronze";
        break;
    case (xpDaHeroina >= 2001 && xpDaHeroina <= 5000):
        nivelHeroina = "Prata";
        break;
    case (xpDaHeroina >= 5001 && xpDaHeroina <= 7000):
        nivelHeroina = "Ouro";
        break;
    case (xpDaHeroina >= 7001 && xpDaHeroina <= 8000):
        nivelHeroina = "Platina";
        break;
    case (xpDaHeroina >= 8001 && xpDaHeroina <= 9000):
        nivelHeroina = "Ascendente";
        break;
    case (xpDaHeroina >= 9001 && xpDaHeroina <= 10000):
        nivelHeroina = "Imortal";
        break;
    default:
        nivelHeroina = "Radiante";
}


// Saída
console.log(`A heroína ${nomeDaHeroina} está no nível ${nivelHeroina}`);