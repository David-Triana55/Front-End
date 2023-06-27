function aleatorio(min, max) {
    return Math.floor(Math.random()* (max - min + 1) + min)
}

function eleccion (jugada) {
    let resultado = ""
    if (jugada == 1) {
    resultado = "Piedra 🪨"
} else if(jugada == 2) {
    resultado = "Papel 🍂"
} else if (jugada == 3) {
    resultado = "Tijeras ✂️"
} else {
    resultado = "Mal jugado"
}
return resultado
}

let jugador = 0
let pc = 0
let perdidas = 0
let triunfos = 0

while (perdidas < 3 && triunfos < 3) {
    pc =  aleatorio(1,3)
    jugador = prompt(" Numero 1 piedra, 2 papel, 3 tijera")
    alert("El jugador eligio: " + eleccion(jugador))
    alert("El pc eligio: " + eleccion(pc))

     // combate
    if (pc == jugador) {
        alert("EMPATE")
    } else if (jugador == 1 && pc == 3 ) {
        alert("GANASTE")
        triunfos = triunfos + 1
    } else if (jugador == 2 && pc == 1) {
        alert("GANASTE")
        triunfos = triunfos + 1
    } else if (jugador == 3 && pc == 2) {
        alert("GANASTE")
        triunfos = triunfos + 1
    } else {
        alert("PERDISTE")
        perdidas = perdidas + 1
    }
}

alert("El numero de veces ganadas fue " + triunfos + " el numero de perdidas fue " + perdidas)

