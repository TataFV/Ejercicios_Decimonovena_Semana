function clickAtacar(heroe, enemigo) {
    var boton = document.getElementById("boton");
    boton.addEventListener('click', (evt) => {
        atacar(heroe, enemigo);
    });
}



function atacar(heroe, enemigo) {
    var ataqueHeroe = heroe.dañoAtaque()
    enemigo.reducirEnergia(ataqueHeroe)
    $('#vidaEnemigo').html(enemigo.getVida)

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
}

function continuarLuchando(nivelHeroe) {
    var respuesta = simple_user_input("¿Quieres continuar la partida? \n1 \n2");
    if (respuesta == "1") {
        var enemigo = generadorEnemigos(nivelHeroe);
        $('#nivelEnemigo').html(enemigo.getNivel);
        $('#vidaEnemigo').html(enemigo.getVida);
        $('#vidaTotalEnemigo').html(enemigo.getVidaTotal);
        return enemigo;
    } else {
        alert("¡Hasta pronto!");

    }
}