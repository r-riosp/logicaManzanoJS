let valor = parseInt(prompt("Digite um valor: "))
let modulo = valor
if (valor < 0) {
    modulo = -valor
}
alert(`O módulo de |${valor}| é: ${modulo}`)