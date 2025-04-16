alert("Divisíveis por 2 e 3")
const divisiveis = []
let cont = 0
while (cont < 4) {
    let numero = parseInt(prompt("Digite um número: "))
    if (numero % 2 == 0 && numero % 3 == 0) {
        divisiveis.push(numero)
    }
    cont++
}
alert(`Os números digitados que são divisíveis por 2 e 3 são: ${divisiveis}`)