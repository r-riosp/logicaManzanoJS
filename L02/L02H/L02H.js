alert("O maior entre 5 números.")
let cont = 0
let maior = 0
let menor = 0
while (cont < 5) {
    let numero = parseInt(prompt("Digite um número: "))
    if (cont == 0) {
        maior = numero
        menor = numero
    } else {
        if (numero > maior) {
            maior = numero
        }
        else if (numero < menor) {
            menor = numero
        }
    }
    cont++
}
alert(`O maior número digitado foi: ${maior}`)
alert(`O menor número digitado foi: ${menor}`)