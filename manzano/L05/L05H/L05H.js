function potencia() {
    let expoente = parseInt(document.getElementById('expoente').value)
    let base = parseInt(document.getElementById('base').value)
    let display = document.getElementById('resultado')
    let potencia = 1;

    for (let contadora = 0; contadora < expoente; contadora++) {
        potencia *= base
    }
    display.innerHTML = `<p>O número ${base} elevado a ${expoente} é: <b>${potencia}</b></p>`
}