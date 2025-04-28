let cotacao = parseFloat(prompt("Digite a cotação do dólar: "))
let reais = parseFloat(prompt("Digite o valor em reais: "))
let dolar = reais / cotacao
alert(`O valor em dólar é: $ ${dolar.toFixed(2)}`) // Corrigido para exibir o valor em dólar