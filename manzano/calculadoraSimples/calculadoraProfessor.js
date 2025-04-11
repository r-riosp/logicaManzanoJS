alert("Calculadora Simples:")
let operacao = prompt("Digite o símbolo correspondente: \n+) Soma \n-) Subtração \n*) Multiplicação \n/) Divisão")
let valor1 = parseFloat(prompt("Informe o primeiro valor:"))
let valor2 = parseFloat(prompt("Informe o segundo valor:"))
let resultado

switch (operacao) {
    case " + ":
        resultado = valor1 + valor2
        alert(`O resultado da soma foi: ${resultado}`)
        break
    case "-":
        resultado = valor1 - valor2
        alert(`O resultado da subtração foi: ${resultado}`)
        break
    case "*":
        resultado = valor1 * valor2
        alert(`O produto da multiplicação foi: ${resultado}`)
        break
    case "/":
        resultado = valor1 / valor2
        alert(`O quociente da divisão foi: ${resultado}`)
        break
    default:
        alert("O valor informado é inválido.")
        break
}