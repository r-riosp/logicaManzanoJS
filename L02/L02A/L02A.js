alert("Diferença entre o maior e o menor valor lido")
let valor1 = parseFloat(prompt("Digite o primeiro valor: "))
let valor2 = parseFloat(prompt("Digite o segundo valor: "))
if (valor1 > valor2) {
    let diferenca = valor1 - valor2
    alert(`A diferença entre o maior e o menor valor lido é: ${diferenca}`)
}
else if (valor1 < valor2) {
    let diferenca = valor2 - valor1
    alert(`A diferença entre o maior e o menor valor lido é: ${diferenca}`)
}
else {
    alert("Os valores são iguais, não há diferença.")
}