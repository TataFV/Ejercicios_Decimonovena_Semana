function preload() {
    var cuerpo = document.getElementById("cuerpo");
    var tamFuente = localStorage.getItem("tamFuente");
    cuerpo.style.fontSize = tamFuente;
    var radio = document.getElementsByClassName("tamTexto");
    for (var i = 0; i < radio.length; i++) {
        if (radio[i].value == tamFuente) {
            radio[i].checked = true;
        } else {
            radio[i].checked = false;
        }
    }
    var heroeTexto = document.getElementById("heroe");
    var colorFuente = localStorage.getItem("colorFuente");
    heroeTexto.style.color = colorFuente;
    var radioColor = document.getElementsByClassName("colorTexto");
    for (var i = 0; i < radioColor.length; i++) {
        if (radioColor[i].value == colorFuente) {
            radioColor[i].checked = true;
        } else {
            radioColor[i].checked = false;
        }
    }

    var textArea = document.getElementById("notas");
    textArea.value = localStorage.getItem("textArea");


    window.nombreHeroe = localStorage.getItem("nombre");
    if (window.nombreHeroe != null && window.nombreHeroe != "null") {
        var conservarNombre = prompt("Tu personaje se llama " + window.nombreHeroe + ". ¿Quieres conservar dicho nombre \n1- Si\n2- No");
        if (conservarNombre == "2") {
            window.nombreHeroe = null;
        }
    }

    var heroeFondo = document.getElementById("heroe");
    var enemigoFondo = document.getElementById("enemigo");
    var colorBackground = localStorage.getItem("colorBackground");
    heroeFondo.style.backgroundColor = colorBackground;
    enemigoFondo.style.backgroundColor = colorBackground;
    var radioColorFondo = document.getElementsByClassName("colorFondo");
    for (var i = 0; i < radioColor.length; i++) {
        if (radioColorFondo[i].value == colorBackground) {
            radioColorFondo[i].checked = true;
        } else {
            radioColorFondo[i].checked = false;
        }
    }
}

