alert("Entre 1 e 9.")
let numero = parseInt(prompt("Digite um número: "))
if (numero > 0 && numero < 10) {
    alert(`O número ${numero} está na faixa permitida.`)
}
else {
    alert(`O número ${numero} não está na faixa permitida.`)
}