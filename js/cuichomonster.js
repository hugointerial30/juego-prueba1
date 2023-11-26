let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

//Iniciamos funcion para cargar documentacion html
function iniciarJuego(){
 
    let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
    sectionSeleccionarAtaque.style.display = "none"
    
    let sectionReiniciar = document.getElementById("reiniciar")
    sectionReiniciar.style.display = "none"

    let botonMascotaJugador = document.getElementById("boton-mascota")
botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)

    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.addEventListener("click", ataqueFuego)
    let botonAgua = document.getElementById("boton-agua")
    botonAgua.addEventListener("click", ataqueAgua)
    let botonTierra = document.getElementById("boton-tierra")
    botonTierra.addEventListener("click", ataqueTierra)

    let botonReiniciar = document.getElementById("boton-reiniciar")
    botonReiniciar.addEventListener("click",reiniciarJuego)

}

//Iniciamos con las condicionales para opcion de radio
function seleccionarMascotaJugador() {
    let sectionSeleccionarMascota = document.getElementById("seleccionar-mascota")
    sectionSeleccionarMascota.style.display = "none"

   
    let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
    sectionSeleccionarAtaque.style.display = "flex"
    


    let inputNapochon = document.getElementById("Napochon")
    let inputPopeto = document.getElementById("Popeto")
    let inputTopin = document.getElementById("Topin")
    let inputRulas = document.getElementById("Rulas")
    let inputMatafus = document.getElementById("Matafus")
    let inputVergolin = document.getElementById("Vergolin")
    let spanMascotaJugador = document.getElementById("mascota-jugador")

    if (inputNapochon.checked){
        spanMascotaJugador.innerHTML = "Napochon"
        alert("Seleccionaste a Napochon")
    } else if (inputPopeto.checked){
        spanMascotaJugador.innerHTML = "Popeto"
        alert("Seleccionaste a Popeto")
    } else if (inputTopin.checked){
        spanMascotaJugador.innerHTML = "Topin"
        alert("Seleccionaste a Topin")
    } else if(inputRulas.checked){
        spanMascotaJugador.innerHTML = "Rulas"
        alert("Seleccionaste a el Rulas")
    } else if (inputMatafus.checked){
        spanMascotaJugador.innerHTML = "Matafus"
        alert("Seleccionaste a Matafus")
    } else if (inputVergolin.checked){
        spanMascotaJugador.innerHTML = "Vergolin"
        alert("Seleccionaste a Vergolin")
    } else {
        alert("Selecciona una mascota puñetas 😡 ")
    }

    seleccionarMascotaEnemigo()

    }

    function seleccionarMascotaEnemigo() {
        let mascotaAleatoria = aleatorio(1,6)
        let spanMascotaEnemigo = document.getElementById("mascota-enemigo")

        if (mascotaAleatoria == 1){
            //Napochon
            spanMascotaEnemigo.innerHTML = "Napochon"
        } else if (mascotaAleatoria == 2){
            //Popeto
            spanMascotaEnemigo.innerHTML = "Popeto"
        } else if (mascotaAleatoria == 3){
            //Topin
            spanMascotaEnemigo.innerHTML = "Topin"
        } else if (mascotaAleatoria == 4){
            //Rulas
            spanMascotaEnemigo.innerHTML = "Rulas"
        } else if (mascotaAleatoria ==5){
            //Metafus
            spanMascotaEnemigo.innerHTML = "Metafus"
        } else {
            //Vergolin
            spanMascotaEnemigo.innerHTML = "Vergolin"
        }

    }

    function ataqueFuego() {
        ataqueJugador = "FUEGO"
        ataqueAleatorioEnemigo()
    }
    function ataqueAgua() {
        ataqueJugador = "AGUA"
        ataqueAleatorioEnemigo()
    }
    function ataqueTierra() {
        ataqueJugador = "TIERRA"
        ataqueAleatorioEnemigo()
    }

    function ataqueAleatorioEnemigo(){
        let ataqueAleatorio = aleatorio(1,3)

        if(ataqueAleatorio == 1 ) {
            ataqueEnemigo = "FUEGO"
        } else if (ataqueAleatorio == 2){
            ataqueEnemigo = "AGUA"
        }else {
            ataqueEnemigo = "TIERRA"
        }

        combate()
    }

    function combate(){
        let spanVidasJugador = document.getElementById("vidas-jugador")
        let spanVidasEnemigo = document.getElementById("vidas-enemigo")


        if (ataqueEnemigo == ataqueJugador){
            crearMensaje("EMPATE CABRON")
        } else if (ataqueJugador == "FUEGO" && ataqueEnemigo === "TIERRA") {
            crearMensaje("GANASTE HIJO DE PUTA")
            vidasEnemigo --
            spanVidasEnemigo.innerHTML = vidasEnemigo
            
        } else if (ataqueJugador == "AGUA" && ataqueEnemigo == "FUEGO") {
            crearMensaje("GANASTE HIJO DE PUTA")
            vidasEnemigo --
            spanVidasEnemigo.innerHTML = vidasEnemigo
            
        } else if (ataqueJugador =="TIERRA" && ataqueEnemigo == "AGUA") {
            crearMensaje("GANASTE HIJO DE PERRA")
            vidasEnemigo --
            spanVidasEnemigo.innerHTML = vidasEnemigo
            
        } else {
            crearMensaje("PERDISTE MORRO(A) ALV")
            vidasJugador --
            spanVidasJugador.innerHTML = vidasJugador
        }

            revisarVidas()

        }
            
        function revisarVidas(){
            if (vidasEnemigo == 0){
                crearMensajeFinal("FELICITACIONES GANASTE 🥇!!!")

            } else if (vidasJugador == 0){
                crearMensajeFinal("LO SIENTO MORRO(A) PERDISTE 😭 !!!")
                
            }

        }

    function crearMensaje(resultado){
        let sectionMensajes = document.getElementById("resultado")
        let ataquesDelJugador = document.getElementById("ataques-del-jugador")
        let ataquesDelEnemigo = document.getElementById("ataques-del-enemigo")

        let nuevoAtaqueDelJugador = document.createElement("p")
        let nuevoAtaqueDelEnemigo = document.createElement("p")

        sectionMensajes.innerHTML = resultado
        nuevoAtaqueDelJugador.innerHTML = ataqueJugador
        nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo

        ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
        ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
        
    }

    
    function crearMensajeFinal(resultadoFinal){
        let sectionMensajes = document.getElementById("resultado")


        sectionMensajes.innerHTML = resultadoFinal 

        let botonFuego = document.getElementById("boton-fuego")
        botonFuego.disabled = true
        let botonAgua = document.getElementById("boton-agua")
        botonAgua.disabled = true
        let botonTierra = document.getElementById("boton-tierra")
        botonTierra.disabled = true

        let sectionReiniciar = document.getElementById("reiniciar")
    sectionReiniciar.style.display = "block"

    }

    function reiniciarJuego(){
        location.reload()
    }




    function aleatorio(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min )
    }

    window.addEventListener("load", iniciarJuego)