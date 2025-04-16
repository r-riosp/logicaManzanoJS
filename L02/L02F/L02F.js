alert("Ordem Crescente")
let A = parseFloat(prompt("Digite o valor de A: "))
let B = parseFloat(prompt("Digite o valor de B: "))
let C = parseFloat(prompt("Digite o valor de C: "))
let maior = 0
let menor = 0
let meio = 0
if (A > B && A > C) {
    maior = A
    if (B > C) {
        meio = B
        menor = C
    }
    else {
        meio = C
        menor = B
    }
}
else if (B > A && B > C) {
    maior = B
    if (A > C) {
        meio = A
        menor = C
    }
    else {
        meio = C
        menor = A
    }
}
else {
    maior = C
    if (A > B) {
        meio = A
        menor = B
    }
    else {
        meio = B
        menor = A
    }
}
alert(`A ordem crescente dos valores lidos é: ${menor}, ${meio} e ${maior}`)