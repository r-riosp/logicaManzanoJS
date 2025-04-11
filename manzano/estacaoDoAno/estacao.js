alert("Qual é a estação do ano?")
let numeroEstacao = parseInt(prompt("Digite um número: \n1) Primavera \n2) Verão \n3) Outono \n4) Inverno"))
let estacao

switch (numeroEstacao) {
    case 1:
        estacao = "Primavera"
        break
    case 2:
        estacao = "Verão"
        break
    case 3:
        estacao = "Outono"
        break
    case 4:
        estacao = "Inverno"
        break
    default:
        estacao = "Não identificada"
        break
}

alert(`A estação escolhida foi ${estacao}.`)