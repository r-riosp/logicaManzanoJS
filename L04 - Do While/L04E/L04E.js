alert("Seja bem vindo ao sistema de somatório dos fatoriais!")
let cont = 15
let fatorial = 0
let somatorio = 1
let resultado = 0

do {
    fatorial = parseInt(prompt("Informe o número para calcular o fatorial: "))
    if (fatorial >= 0) {
        while (fatorial > 1) {
            somatorio *= fatorial
            fatorial--
        }
        resultado += somatorio
        somatorio = 1
    }
    else {
        alert("Número inválido!")
    }
    cont--
} while (cont > 0)

alert(`Resultado do somatório dos fatoriais digitados: ${resultado}`)