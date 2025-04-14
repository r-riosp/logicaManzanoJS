
let totalGraos = 0
let quadrado = 1
let graosPorQuadrado = 1

do {
    totalGraos += graosPorQuadrado
    console.log(`Quadrado: ${quadrado} - Grãos: ${graosPorQuadrado}`)
    quadrado++
    graosPorQuadrado *= 2

} while (quadrado <= 64)

totalGraos = 2 ** 64 - 1

console.log("\n\nTotal de Grãos: " + totalGraos)
console.log("Fim do programa.")