let contadora = 0
let somatorio = 0
do {
    if (contadora % 2 == 0) {
        somatorio += contadora
    }
    console.log("Soma dos Valores Pares: " + somatorio)
    contadora++
} while (contadora <= 500)

console.log("\nFim do programa.")