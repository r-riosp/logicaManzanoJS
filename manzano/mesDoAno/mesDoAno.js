alert("Qual é o mês do ano?")
let mes = parseInt(prompt("Digite um número para descobrir o mês:"))
let frase = "O mês digitado corresponde a"
switch (mes) {
    case 1:
        alert(`${frase} Janeiro.`)
        break
    case 2:
        alert(`${frase} Fevereiro.`)
        break
    case 3:
        alert(`${frase} Março.`)
        break
    case 4:
        alert(`${frase} Abril.`)
        break
    case 5:
        alert(`${frase} Maio.`)
        break
    case 6:
        alert(`${frase} Junho.`)
        break
    case 7:
        alert(`${frase} Julho.`)
        break
    case 8:
        alert(`${frase} Agosto.`)
        break
    case 9:
        alert(`${frase} Setembro.`)
        break
    case 10:
        alert(`${frase} Outubro.`)
        break
    case 11:
        alert(`${frase} Novembro.`)
        break
    case 12:
        alert(`${frase} Dezembro.`)
        break
    default:
        alert(`O número digitado não corresponde a nenhum mês.`)
        break
}