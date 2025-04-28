let A = prompt("Digite o valor de A: ")
let B = prompt("Digite o valor de B: ")
alert(`Os valores digitados foram: A = ${A} e B = ${B}`)
let auxiliar = A
A = B
B = auxiliar
alert(`Os valores trocados são: A = ${A} e B = ${B}`)