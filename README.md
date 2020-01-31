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
--------------------------
## Versión 1.0.2
### Iluminando la secuencia de colores.
Para iluminar la secuencia de colores primero debe convertirse la secuencia de números generada a los nombres de los colores que componen la interfaz. Luego se procede a iluminar el color correspondiente de acuerdo a la secuencia generada. De acuerdo al nivel en que se encuentre el usuario, se iluminará la secuencia que corresponda a ese nivel.

Incluye lo siguiente:
* Creación de los métodos *siguienteNivel*, *transformarNumeroAColor*, *iluminarSecuencia*, *iluminarColor* y *apagarColor* en la clase ***Juego***.
* La función ***transformarNumeroAColor*** evalúa el número generado en la secuencia y mediante un bloque `switch` y de acuerdo al número retorna el nombre del color.
* La función ***iluminarSecuencia*** recorre el array y de acuerdo al nivel en que se encuentre el usuario, retorna el nombre del color de acuerdo al número almacenado en la posición del arreglo invocando la función *transformarNumeroAColor*. Luego de forma asíncrona ilumina el color retornado haciendo un llamado a la función *iluminarColor*.
* La función ***iluminarColor*** toma el color que se retorna desde el array y lo transforma agregando la clase *light* mediante el método `classList.add`. De igual forma en un tiempo de 350 milisegundos invoca la función *apagarColor*.
* La función ***apagarColor*** retorna el color a su estado original invocando el método `classList.remove` que remueve la clase *light* previamente agregada a la lista de clases del color seleccionado.
* La función ***siguienteNivel*** hace un llamado a la función *iluminarSecuencia*.
--------------------------
## Versión 1.0.3
### Obteniendo el input del usuario.
Para obtener el input del usuario se agrega un manejador para el evento click del mouse usando `addEventListener` para cada uno de los colores del juego. Utilizando la propiedad *target* devuelta por el evento **click** se puede identificar cuál es el botón que ha sido presionado.

Incluye lo siguiente:
* Creación de los métodos *agregarEventosClick* y *elegirColor* en la clase ***Juego***.
* La función ***agregarEventosClick*** permite obtener el input del usuario, con un método para "escuchar eventos" que llama a un método de forma asíncrona. Haciendo esto se pierde el contexto, así que hay que especificar en la llamada al método en contexto de quien es **this** con `.bind(this)` para que tome como referencia a la instancia y no al botón.
* La función ***elegirColor*** permite obtener el color que ha elegido el usuario.
--------------------------
## Versión 1.0.4
### Agregando la verificación del color elegido.
Para agregar atributos al objeto principal en el que está el código, basta con usar this haciendo referencia al contexto de la clase, y agregar los atributos con un punto. Ej: `this.atributo = valor`.

La verificación del color elegido se hará creando y removiendo los eventos del click al pasar el juego a cada nuevo nivel.

Incluye lo siguiente:
* Creación de los métodos *eliminarEventosClick* y *transformarColorANumero* en la clase ***Juego***. Se complementó el método *elegirColor*.
* La función ***eliminarEventosClick*** se utiliza dentro del proceso de reiniciar nuevamente la secuencia cuando el usuario ha pasado al siguiente nivel.
* La función ***transformarColorANumero*** mediante un bloque `switch` y de acuerdo al nombre del color retorna el número correspondiente al color, que es el que se va a evaluar contra la secuencia generada.
* En la función ***elegirColor*** se detalla el proceso de los colores que selecciona el usuario de acuerdo a la secuencia. Si la selección va coincidiendo con la secuencia generada, el usuario va subiendo de nivel en el juego.
--------------------------
## Versión 1.0.5
### Agregando los estados finales del juego.
Se incluye una librería de mensajes con estilos mucho más agradables que el mensaje básico de javascript para mostrar los estados finales del juego al usuario.

Incluye lo siguiente:
* Se incluye la librería ***SweetAlert*** mediante la cual se mejora la presentación de los mensajes que se muestran al usuario cuando gana o pierde el juego.
* En la función *inicializar* se incluye el llamado a la función ***toggleBtnEmpezar*** que se encarga de controlar que se muestre el botón para iniciar un nuevo juego.
* Se crean las función ***ganoElJuego*** en la cual se muestra al usuario el mensaje que indica que ha ganado el juego y vuelve a iniciar el juego una vez se cierra el mensaje mostrado. 
* Se crean las función ***perdioElJuego*** en la cual se muestra al usuario el mensaje que indica que ha perdido el juego, elimina los eventos del click y vuelve a iniciar el juego una vez se cierra el mensaje mostrado. 