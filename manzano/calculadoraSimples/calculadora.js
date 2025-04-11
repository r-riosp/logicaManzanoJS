alert("Calculadora Simples!")
let operacao = parseInt(prompt("Digite um número: \n1) Soma \n2) Subtração \n3) Multiplicação \n4) Divisão"))
let numero1 = parseFloat(prompt("Digite o primeiro valor numérico:"))
let numero2 = parseFloat(prompt("Digite o segundo valor numérico:"))
let resultado
switch (operacao) {
    case 1:
        resultado = numero1 + numero2
        alert(`O resultado da soma foi: ${resultado}`)
        break
    case 2:
        resultado = numero1 - numero2
        alert(`O resultado da subtração foi: ${resultado}`)
        break
    case 3:
        resultado = numero1 * numero2
        alert(`O produto da multiplicação foi: ${resultado}`)
        break
    case 4:
        resultado = numero1 / numero2
        alert(`O quociente da divisão foi: ${resultado}`)
        break
    default:
        alert("A operação selecionada não foi reconhecida.")
        break
}