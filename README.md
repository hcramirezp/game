# game
Juego Simón Dice, Correspondiente al curso de fundamentos de JavaScript de Platzi

## Versión 1.0
### Comenzando el juego.
Creación del juego Simon (Simón dice), en el que se van iluminando una secuencia de botones que el jugador tendrá que ir repitiendo, si se equivoca volverá a comenzar. El juego tendrá 10 niveles de dificultad, que deberán ser superados para ganar.

Incluye lo siguiente:
* Creación del archivo **index.html**, el cual contiene toda la interfaz de juego del usuario.
* Creación del archivo **styles.css**, que contiene todos los estilos para el html incluidos en el archivo *index.html*.
* Creación del archivo **simondice.js**, que incluye todo el código JavaScript que maneja la funcionalidad del juego.
--------------------------
## Versión 1.0.1
### Generando una secuencia de números.
Para generar la secuencia del juego se utilizará un array con números aleatorios, que representarán el color del botón que se iluminará cada vez. Se usa `new Array()` para crear el arreglo de manera dinámica, y se llama al método **.fill()** para rellenar ese array con ceros y poder luego iterar sobre éste con **map()**.

Incluye lo siguiente:
* Creación del método *generarSecuencia* en la clase ***Juego*** en el cual se crea un array de 10 números. Este array se inicializa con ceros invocando el método *.fill()* y mediante el método *.map()*, se generan los números aleatorios con la función `Math.random` y se multiplican por 4 para que se generen con valores entre 1 y 4. Por tratarse de números que son decimales, se redondean hacia el menor entero mediante la función `Math.floor`.
* En la función ***inicializar*** se crea el atributo `this.nivel` con el valor de 1, que será utilizado para indicar que el usuario iniciara por el nivel 1, ya que ira avanzando a medida que juegue. Por último se agregan los colores del juego al atributo `this.colores` en esta misma función.
