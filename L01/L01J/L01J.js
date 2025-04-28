let cotacao = parseFloat(prompt("Digite a cotação do dólar: "))
let dolar = parseFloat(prompt("Digite o valor em dólar: "))
let real = dolar * cotacao
alert(`O valor em real é: R$ ${real.toFixed(2)}`)