alert("Boas Vindas ao cálculo da área de cômodos!")
let entrada = ''

do {
    let nome = prompt("Digite o nome do cômodo:")
    let largura = Number(prompt("Digite a largura do cômodo:"))
    let comprimento = Number(prompt("Digite o comprimento do cômodo:"))
    let area = largura * comprimento
    alert(`A área do cômodo ${nome} é: ${area}m².`)
    entrada = prompt("Deseja calcular a área de outro cômodo? (SIM/NAO)").toUpperCase()
} while (entrada != "NAO" && entrada != "NÃO")

alert("Obrigado por usar o nosso programa!")