//Ahora se te ha pedido que incluyas un método para subir de nivel a un Player, aumentando su número de nivel en uno.
//Modifique la clase Player para que acepte una cadena de name de Player y un número de nivel en dos argumentos separados.
//Luego, defina un método de objeto compartido info()que generará la siguiente cadena:
//<name> has reached Level <level>!

export class Player {
  constructor(name, level) {
    this.name = name;
    this.level = level;
  }

info() {
  console.log(`¡${this.name} ha alcanzado el nivel ${this.level}!`);
  }

  levelUp() {
    this.level += 1;
  }
}