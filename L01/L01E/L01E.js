alert("Cálculo do Valor de uma Prestação")
let valor = parseFloat(prompt("Digite o valor:"))
let tempo = parseInt(prompt("Quanto tempo? (dias)"))
let taxa = parseFloat(prompt("Qual a taxa de juros?"))
let prestacao = valor + (valor * taxa / 100) * tempo
alert(`O valor da prestação é: ${prestacao.toFixed(2)}`)
