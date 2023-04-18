// Constantes para los movimientos que hará el usuario

const ADELANTE = 'ad'
const ATRAS = 'at'
const DERECHA = 'de'
const IZQUIERDA = 'iz'
const SALIR = 'ESC'

// Variables para la dirección que tomará y la pregunta "¿Quién soy?"

let direccion
let quienSoy

// Do While para que el juego inicie mientras el valor que ingrese el usuario sea distinto a "ESC". Dentro del Switch está el condicional if else

do {
    direccion = prompt('Estás en un edificio antiguo, polvoriento, oscuro y que apenas se mantiene en pie. La única fuente de luz se proyecta en una pared desde tu linterna, que nunca te ha fallado... Ojalá no se le ocurra empezar a hacerlo ahora.' + '\n' + '\n' +
        'Miras a tu alrededor y solo tienes 4 caminos para elegir, esperando que alguno de ellos te ayude a escapar...' + '\n' + '\n' +
        'Adelante: "ad"' + '\n' +
        'Atrás: "at"' + '\n' +
        'Derecha: "de"' + '\n' +
        'Izquierda: "iz"' + '\n' +
        'Salir del juego: "ESC"' + '\n' + '\n' +

        '¿Cuál camino quieres tomar?');

    if (direccion != SALIR) {

        switch (direccion) {
            case ADELANTE:
                alert('Apenas avanzas un par de metros, paras en seco, justo en el momento en que tu linterna revela un hoyo profundo que interrumpe el camino. Pateas una piedra hacia el abismo y solo escuchas un eco lejano. Será mejor volver...')
                break
            case ATRAS:
                alert('Un derrumbe te ha dejado atrapad@ en el lugar... No hay opción de volver. Tiene que haber otra forma de escapar. Será mejor volver...')
                break
            case DERECHA:
                alert('Caminas un buen tramo y descubres una nota arrugada y envejecida sobre una mesa que por suerte tu linterna reveló. Con mucho esfuerzo se puede leer lo siguiente:' + '\n' + '\n' + '"Sin mí, no puedes ver la luz del día, pero si me miras directamente, me alejaré. Soy la clave para salir de aquí..."' + '\n' + '\n' + 'No puedes hacer nada con esta información aquí. Será mejor volver...')
                break
            case IZQUIERDA:
                quienSoy = prompt('Atraviesas un pasillo largo y tétrico, tratando de ignorar los sonidos extraños que provienen del alcantarillado. Al final, encuentras un espejo empañado... Alguien acaba de escribir sobre él.' + '\n' + '\n' + 'Parece que quiere una respuesta...' + '\n' + '\n' + '¿Quién soy?')
                if (quienSoy != 'sombra') {
                    alert('No tuvo efecto la palabra que escribiste. Quizás puedas encontrar algo más tomando otro camino o volviendo a revisar la información que tienes ahora.')
                } else {
                    alert('Con un ruido retumbante, las paredes comienzan a temblar, sacudiéndose el polvo. Sientes el movimiento en los pies y, de pronto, el suelo empieza a derrumbarse, llevándote con él quién sabe a dónde...' + '\n' + '\n' + 'Continuará...')
                }
            default:
                alert('¡Vuelve a intentarlo!')
        }
    } else {
        alert('¡Vuelve pronto!');
    }
} while (direccion != SALIR);