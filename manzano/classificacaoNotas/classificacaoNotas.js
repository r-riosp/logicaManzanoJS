alert("Classificação de Notas")
let nota = parseInt(prompt("Digite uma nota de 0 a 100:"))
let classificacao

if (nota < 21) {
    classificacao = "E"
}
else if (nota < 41) {
    classificacao = "D"
}
else if (nota < 61) {
    classificacao = "C"
}
else if (nota < 81) {
    classificacao = "B"
}
else if (nota < 101) {
    classificacao = "A"
}
else {
    alert("Nota não reconhecida.")
}

alert(`Sua classificação foi: ${classificacao}`)