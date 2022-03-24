function main() {
    preload()
    $(".enemigo").css({
        'color': 'red',
        'font-size': '16pt',
    });

    $("#container").css({
        'display': 'flex',
        'flex-flow': 'row wrap'
    });
    $('#container > div').css({ 'border': 'solid 2px black', 'margin': '25px', 'padding': '15px' })

    var radio = document.getElementsByClassName("tamTexto");
    for (var i = 0; i < radio.length; i++) {
        radio[i].addEventListener("click", (event) => {
            cambiaTexto(event);
        });
    }
    var textArea = document.getElementById("notas");
    save.addEventListener('click', () => {
        guardarTexto();
    });

    var radioColorFondo = document.getElementsByClassName("colorFondo");
    for (var i = 0; i < radioColorFondo.length; i++) {
        radioColorFondo[i].addEventListener('click', (event) => {
            cambiaColorFondo(event);
        });
    }
    var botonBorrar = document.getElementById("borrar");
    botonBorrar.addEventListener('click', (event) => {
        localStorage.clear();

    });

    var radio = document.getElementsByClassName("colorTexto");
    for (var i = 0; i < radio.length; i++) {
        radio[i].addEventListener("click", (event) => {
            cambiaColorFuente(event);
        });
    }
    var nombreEnemigo = simple_user_input("Introduce un nombre para el enemigo")
    var enemigo = new Enemigo(100, 70, nombreEnemigo, 1, 0, false);
    console.log(enemigo.getVida);
    console.log(enemigo.getAtaque);
    console.log(enemigo.getNombre);
    console.log(enemigo.getNivel);
    $('#nivelEnemigo').html(enemigo.getNivel);
    $('#vidaEnemigo').html(enemigo.getVida);
    $('#vidaTotalEnemigo').html(enemigo.getVidaTotal);


    var nombreHeroe = guardarNombreHeroe();
    var heroe = new Heroe(100, 80, nombreHeroe, 1, 50, false);
    console.log(heroe.getVida);
    console.log(heroe.getAtaque);
    console.log(heroe.getNombre);
    console.log(heroe.getNivel);
    console.log(heroe.getExperiencia);
    $('#nivel').html(heroe.getNivel);
    $('#experiencia').html(heroe.getExperiencia);
    $('#vida').html(heroe.getVida);
    $('#vidaTotal').html(heroe.getVidaTotal);


    //clickAtacar(heroe, enemigo)
    var boton = document.getElementById("boton");
    var defender = document.getElementById("defender");
    boton.addEventListener('click', () => {
        var ataqueHeroe = heroe.dañoAtaque()
        enemigo.reducirEnergia(ataqueHeroe)
        $('#vidaEnemigo').html(enemigo.getVida)
        defender.disabled = false;

        if (!enemigo.confirmarMuerte()) {
            var ataqueEnemigo = enemigo.getAtaque
            heroe.reducirEnergia(ataqueEnemigo)
            $('#vida').html(heroe.getVida)
        }

        if (!heroe.confirmarMuerte() && enemigo.confirmarMuerte()) {
            var experiencia = enemigo.devolverXP(1)
            heroe.aumentarNivel(experiencia);
            $('#nivel').html(heroe.getNivel);
            $('#experiencia').html(heroe.getExperiencia);

            heroe.setVida = heroe.getVidaTotal;
            $('#vida').html(heroe.getVida)
            enemigo = continuarLuchando(heroe.getNivel)
        }
    });
    //Boton defender
    defender.addEventListener('click', () => {
        heroe.setIsDefendiendo = true;
        defender.disabled = true;
    });

    $('#nivel').html(heroe.getNivel)
    $('#experiencia').html(heroe.getExperiencia)
}


function cambiaColorFuente(event) {
    var heroeTexto = document.getElementById("heroe");
    heroeTexto.style.color = event.currentTarget.value;
    console.log(event.currentTarget.value);
    localStorage.setItem("colorFuente", event.currentTarget.value);
}
function guardarNombreHeroe() {
    if (window.nombreHeroe == null || window.nombreHeroe == "null") {
        var nombreHeroe = prompt("Introduce un nombre para el heroe")
        localStorage.setItem("nombre", nombreHeroe)
    } else {
        var nombreHeroe = window.nombreHeroe;
    }
    return nombreHeroe;
}

function guardarTexto() {
    var textArea = document.getElementById("notas");
    localStorage.setItem("textArea", textArea.value);
}

function cambiaTexto(event) {
    /** Función que cambia el tamaño del texto
    *  Cambia el tamaño de todo el body*/
    var cuerpo = document.getElementById("cuerpo");
    cuerpo.style.fontSize = event.currentTarget.value;
    console.log(event.currentTarget.value);
    /**Guarda la selección en la sessión*/
    localStorage.setItem("tamFuente", event.currentTarget.value);
}

function cambiaColorFondo(event) {
    var heroeFondo = document.getElementById("heroe");
    var enemigoFondo = document.getElementById("enemigo");
    heroeFondo.style.backgroundColor = event.currentTarget.value;
    enemigoFondo.style.backgroundColor = event.currentTarget.value;
    console.log(event.currentTarget.value);
    localStorage.setItem('colorBackground', event.currentTarget.value);
}


function generadorEnemigos(nivelHeroe) {
    var enemigos = ['mercenario', 'asesino', 'demonio', 'dragon'];
    var nombreEnemigo = enemigos[Math.floor(enemigos.length * Math.random())];

    var enemigo = new Enemigo(100, 70, nombreEnemigo, nivelHeroe, 0, false);
    return enemigo;
}
main()