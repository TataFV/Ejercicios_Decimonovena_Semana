class Personaje {
    constructor(vida, ataque, nombre, nivel, defensa, isDefendiendo) {
        this.vida = vida;
        this.vidaTotal = vida;
        this.ataque = ataque;
        this.nombre = nombre;
        this.nivel = nivel;
        this.defensa = defensa;
        this.isDefendiendo = isDefendiendo;
    }

    get getVida() {
        return this.vida;
    }

    set setVida(_vida) {
        this.vida = _vida;
    }
    get getVidaTotal() {
        return this.vidaTotal;
    }

    set setVidaTotal(_vida) {
        this.vida = _vida;
    }
    get getAtaque() {
        return this.ataque;
    }

    set setAtaque(_ataque) {
        this.vida = _ataque;
    }

    get getNombre() {
        return this.nombre;
    }

    set setNombre(_nombre) {
        this.nombre = _nombre;
    }

    get getNivel() {
        return this.nivel;
    }

    set setNivel(_nivel) {
        this.nivel = _nivel;
    }

    get getDefensa() {
        return this.nivel;
    }

    set setDefensa(_nivel) {
        this.nivel = _nivel;
    }

    get setisDefendiendo() {
        return this.isDefendiendo;
    }

    set setIsDefendiendo(_isDefendiendo) {
        this.isDefendiendo = _isDefendiendo;
    }
    reducirEnergia(daño) {
        if (this.isDefendiendo == true) {
            daño = daño - this.defensa
        }
        if (daño < 0) {
            daño = 0;
        }

        this.vida = this.vida - daño
    }

    confirmarMuerte() {
        return this.vida <= 0 ? true : false;
    }

}
