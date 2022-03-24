class Heroe extends Personaje {
    constructor(vida, ataque, nombre, nivel, defensa, isDefendiendo) {
        super(vida, ataque, nombre, nivel, defensa, isDefendiendo);
        this.experiencia = 0;
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
    get getExperiencia() {
        return this.experiencia;
    }

    set setExperiencia(_experiencia) {
        this.experiencia = _experiencia;
    }
    //Método compartido con Personaje
    // reducirEnergia(daño) {
    //     this.vida = this.vida - daño;
    // }
    //Método compartido con Personaje
    // confirmarMuerte() {
    //     return this.vida <= 0 ? true : false;
    // }

    aumentarNivel(puntosXp) {
        this.experiencia = puntosXp + this.experiencia
        if (this.experiencia >= 10) {
            this.nivel++
            console.log("Has subido de nivel")
            this.experiencia = 0;
        }
    }
    dañoAtaque() {
        return this.ataque * this.nivel;
    }
}
