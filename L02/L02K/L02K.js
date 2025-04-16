alert("Só se for maior que 3!")
let numero = parseInt(prompt("Digite um número: "))
if (numero < 3) {
    alert(`O número digitado foi ${numero}, que é menor que 3.`)
}
else {
    alert(`O número digitado é maior que 3 e não será exibido.`)
}