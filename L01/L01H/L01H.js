alert("Cálculo do Volume de uma Caixa")
let comprimento = parseFloat(prompt("Digite o comprimento da caixa: "))
let largura = parseFloat(prompt("Digite a largura da caixa: "))
let altura = parseFloat(prompt("Digite a altura da caixa: "))
let volume = comprimento * largura * altura
alert(`O volume da caixa é: ${volume.toFixed(2)} cm³`)