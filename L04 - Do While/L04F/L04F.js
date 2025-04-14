alert("Boas Vindas!")
let contadora = 0
let valor = 0
let soma = 0

do {
    valor = Number(prompt("Digite um número: "))
    if (valor > 0) {
        soma += valor
        contadora++
    }
} while (valor > 0)

let media = soma / contadora

if (contadora > 0) {
    alert("Soma dos valores positivos: " + soma)
    alert("Média dos valores positivos: " + media)
    alert("Quantidade de números lidos: " + contadora)
    alert("Fim do programa!")
}
else {
    alert("Por favor, reinicie o programa e digite pelo menos um número positivo.")
}