let contadora = 0
let divisivel = 0

do {
    if (contadora % 4 == 0) {
        divisivel = contadora
    }
    contadora++
    console.log("Número Divisível por 4: " + divisivel)
} while (contadora < 200)

console.log("\nFim do programa.")