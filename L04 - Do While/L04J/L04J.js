alert("Cálculo da divisão inteira!")
let dividendo = parseInt(prompt("Digite o dividendo: "))
let divisor = parseInt(prompt("Digite o divisor: "))
let quociente = 0

do {
    dividendo = dividendo - divisor
    quociente++
} while (dividendo >= divisor)

alert("O quociente da divisão entre os números digitados é: " + quociente)