for (let contadora = 1; contadora < 10; contadora += 2) {
    let fatorial = 1
    for (let numero = contadora; numero >= 1; numero--) {
        fatorial *= numero
    }
    console.log(`Fatorial de ${contadora} = ${fatorial}`)
}