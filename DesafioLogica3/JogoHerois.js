class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      let ataque;
      switch (this.tipo) {
        case 'mago':
          ataque = 'usou magia';
          break;
        case 'guerreiro':
          ataque = 'usou espada';
          break;
        case 'monge':
          ataque = 'usou artes marciais';
          break;
        case 'ninja':
          ataque = 'usou shuriken';
          break;
        default:
          ataque = '';
      }
      // Agora a mensagem de saída usa o nome do herói
      console.log(`A guerreira ${this.nome} ${ataque}`);
    }
  }
  
  // Agora, quando você cria um novo herói, você pode especificar o nome do herói
  let heroi = new Heroi('Thatiana', 25, 'guerreiro');
  heroi.atacar();  // Saída: A guerreira Thatiana usou espada
  