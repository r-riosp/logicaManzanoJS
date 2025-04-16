alert("Notas Escolares e Recuperação")
let nota1 = parseFloat(prompt("Digite a primeira nota: "))
let nota2 = parseFloat(prompt("Digite a segunda nota: "))
let nota3 = parseFloat(prompt("Digite a terceira nota: "))
let nota4 = parseFloat(prompt("Digite a quarta nota: "))
let media = (nota1 + nota2 + nota3 + nota4) / 4
if (media > 6) {
    alert("Aprovado. Parabéns!")
}
else if (media < 7) {
    alert("Você está de recuperação.")
    let notaExame = parseFloat(prompt("Digite a nota do exame de recuperação: "))
    media = (media + notaExame) / 2
    if (media > 4) {
        alert("Aprovado. Parabéns!")
    } else {
        alert("Reprovado. Estude mais!")
    }
}
alert(`A média das notas é: ${media.toFixed(2)}`)