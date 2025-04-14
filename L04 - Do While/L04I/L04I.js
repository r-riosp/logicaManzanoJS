alert("O menor e o maior número!")
let maior = 0
let menor = 99999999
let numero = 1
do {
    numero = parseInt(prompt("Digite um número:"))
    if (numero > maior) {
        maior = numero
    }
    if (numero > 0) {
        if (numero < menor) {
            menor = numero
        }
    }
} while (numero > 0)

alert(`O menor número digitado foi: ${menor} e o maior número digitado foi: ${maior}`)