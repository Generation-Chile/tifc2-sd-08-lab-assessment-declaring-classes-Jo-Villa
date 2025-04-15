export class Player {
  constructor(name, level) {
    this.name = name;
    this.level = level;
  }

info() {
  console.log(`¡${this.name} ha alcanzado el nivel ${this.level}!`);
  }
}

//Luego, defina un método de objeto compartido info() que imprimirá la siguiente cadena, reemplazando los
// dos marcadores de posición:
//§ <name> has reached Level <level>!
//· Un Player llamado Tara en el nivel 6 debería imprimir " Tara has reached Level 6!" en la consola.