class Enemigo extends Personaje {
    constructor(vida, ataque, nombre, nivel, defensa, isDefendiendo) {
        super(vida, ataque, nombre, nivel, defensa, isDefendiendo);
    }
    //Atributo Vida compartido con Personaje
    // get getVida() {
    //     return this.vida;
    // }

    // set setVida(_vida) {
    //     this.vida = _vida;
    // }
    //Atributo Ataque compartido con Personaje
    // get getAtaque() {
    //     return this.ataque;
    // }

    // set setAtaque(_ataque) {
    //     this.vida = _ataque;
    // }
    //Atributo Nombre compartido con Personaje
    // get getNombre() {
    //     return this.nombre;
    // }

    // set setNombre(_nombre) {
    //     this.nombre = _nombre;
    // }
    //Atributo Nivel compartido con Personaje
    // get getNivel() {
    //     return this.nivel;
    // }

    // set setNivel(_nivel) {
    //     this.nivel = _nivel;
    // }
    //Método compartido con Personaje
    // reducirEnergia(daño) {
    //     this.vida = this.vida - daño;
    // }

    devolverXP(experiencia) {
        return (this.nivel * 5) / experiencia
    }
    //Método compartido con Personaje

    //** 
    confirmarMuerte() {
        return this.vida <= 0 ? true : false
    }
}