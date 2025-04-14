alert("Boas Vindas!")
let contadora = 1
let somatorio = 1
let resultado = 0

do {
    let fatorial = contadora
    if (fatorial % 2 == 1) {
        do {
            somatorio *= fatorial
            fatorial--
        } while (fatorial > 0)
        resultado += somatorio
    }
    somatorio = 1
    contadora++
} while (contadora < 11)

alert(`O somatório dos fatoriais ímpares de 1 a 10 é: ${resultado}`)