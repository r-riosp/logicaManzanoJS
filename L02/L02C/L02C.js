alert("Notas Escolares")
let nota1 = parseFloat(prompt("Digite a primeira nota: "))
let nota2 = parseFloat(prompt("Digite a segunda nota: "))
let nota3 = parseFloat(prompt("Digite a terceira nota: "))
let nota4 = parseFloat(prompt("Digite a quarta nota: "))
let media = (nota1 + nota2 + nota3 + nota4) / 4
alert(`A média das notas é: ${media.toFixed(2)}`)
if (media > 4) {
    alert("Aprovado. Parabéns!")
}
else if (media < 5) {
    alert("Reprovado. Estude mais!")
}