let graos = 0
let contagem = 1
let graosPorQuadrado = 1
let teste = 0

while (contagem <= 65) {
    console.log("Teste: " + teste)
    contagem++
    teste = 2 ** (contagem - 1)
}

// do {
//     graos += graosPorQuadrado
//     console.log("Quadrado: " + contagem + " - Grãos: " + graos)
//     contagem++
//     graosPorQuadrado *= 2
// } while (contagem <= 64)
// console.log("\nTotal de Grãos: " + graos)

// console.log("Fim do programa.")

// por que  o número de grãos de trigo é 2^64 - 1?
// porque o número de quadrados é 64 e a contagem começa em 1, então o último quadrado é 2^63
// o número total de grãos é a soma de uma PG de 1 a 2^63, que é 2^64 - 1
// o que é uma PG? é uma progressão geométrica, onde cada termo é o dobro do anterior