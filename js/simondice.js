/* Scripts con las funciones que controlan el funcionamiento del juego Simon Dice correspondiente al curso de 
Fundamentos de JavaScript */

const btnEmpezar = document.getElementById('btnEmpezar');
const celeste = document.getElementById('celeste');
const violeta = document.getElementById('violeta');
const naranja = document.getElementById('naranja');
const verde = document.getElementById('verde');

class Juego {
    constructor() {
        this.inicializar();
    }

    inicializar() {
        btnEmpezar.classList.add('hide');
    }
}


function empezarJuego() {
    var juego = new Juego();
}