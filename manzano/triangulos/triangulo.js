alert("Qual o tipo do triângulo?")
let ladoA = parseFloat(prompt("Digite o valor do lado A:"))
let ladoB = parseFloat(prompt("Digite o valor do lado B:"))
let ladoC = parseFloat(prompt("Digite o valor do lado C:"))
let tipoTriangulo
if (ladoA == ladoB && ladoB == ladoC) {
    tipoTriangulo = "Equilátero"
}
else if ((ladoA == ladoB && ladoB != ladoC) || (ladoB == ladoC && ladoC != ladoA) || (ladoA == ladoC && ladoC != ladoB)) {
    tipoTriangulo = "Escaleno"
}
else if (ladoA != ladoB && ladoB != ladoC) {
    tipoTriangulo = "Isóceles"
}
else {
    tipoTriangulo = "Triângulo Indefinido"
}

alert(tipoTriangulo)