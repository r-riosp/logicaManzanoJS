alert("Boas vindas!")
let numero = parseInt(prompt("Digite um número para exibir o dia correspondente:"))
let dia

switch (numero) {
    case 0:
        dia = "Domingo"
        break

    case 1:
        dia = "Segunda-Feira"
        break

    case 2:
        dia = "Terça-Feira"
        break

    case 3:
        dia = "Quarta-Feira"
        break

    case 4:
        dia = "Quinta-Feira"
        break

    case 5:
        dia = "Sexta-Feira"
        break

    case 6:
        dia = "Sábado"
        break

    default:
        alert("O número digitado é inválido.")
        break
}

alert(`O Dia da Semana escolhido foi: ${dia}!`)