/**
 * Jokenpô
 * @author Bruno Politi Romero
 * @link https://github.com/arkenzera-main/jokenpo
 */

function jogar() {
    //validação de campos obrigatórios (radio button)
    if (document.getElementById('pedra').checked === false && document.getElementById('papel').checked === false && document.getElementById('tesoura').checked === false) {
        alert("Selecione uma opção!")

    } else {
        //lógica principal
        let sorteio = Math.floor(Math.random() * 3) // ou 0 ou 1 ou 2
        switch (sorteio) {
            case 0:
                document.getElementById('pc').src = "/img/pcpedra.png"
                break
            case 1:
                document.getElementById('pc').src = "/img/pcpapel.png"
                break
            case 2:
                document.getElementById('pc').src = "/img/pctesoura.png"
                break
        }
        if (sorteio === 0 && document.getElementById('papel').checked === true) {
            document.getElementById('placar').innerHTML = "Você venceu!"

        } else if (sorteio === 1 && document.getElementById('tesoura').checked === true) {
            document.getElementById('placar').innerHTML = "Você venceu!"

        } else if (sorteio === 2 && document.getElementById('pedra').checked === true) {

            document.getElementById('placar').innerHTML = "Você venceu!"
        } else if (sorteio === 0 && document.getElementById('pedra').checked === true || sorteio === 1 && document.getElementById('papel').checked === true || sorteio === 2 && document.getElementById('tesoura').checked === true) {
            document.getElementById('placar').innerHTML = "Empate!"
        } else {
            document.getElementById('placar').innerHTML = "Você perdeu!"
        }

    }


}

function limpar() {
    document.getElementById('placar').innerHTML = ""
    document.getElementById('pc').src = "/img/pc.png"

}

