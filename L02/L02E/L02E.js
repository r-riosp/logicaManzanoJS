let valorA = parseFloat(prompt("Digite o valor de A: "))
while (valorA == 0) {
    alert("O valor de A não pode ser 0.")
    valorA = parseFloat(prompt("Digite o valor de A: "))
}
let valorB = parseFloat(prompt("Digite o valor de B: "))
let valorC = parseFloat(prompt("Digite o valor de C: "))
let delta = valorB * valorB - 4 * valorA * valorC
let raiz1 = ((valorB * -1) + delta ** (1 / 2)) / (2 * valorA)
let raiz2 = ((valorB * -1) - delta ** (1 / 2)) / (2 * valorA)

alert(`As raízes da equação são: ${raiz1} e ${raiz2}`)

// teste de valores
// valorA = 1
// valorB = -3
// valorC = 2
// delta = 1
// raiz1 = 2
// raiz2 = 1
