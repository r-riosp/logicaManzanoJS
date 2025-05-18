const fibonacci = () => {
    let anterior, proximo = 0
    let atual = 1
    let sequencia = []
    let display = document.getElementById('resultado')
    for (let contadora = 0; contadora < 15; contadora++) {
        sequencia.push(atual)
        anterior = proximo
        proximo = atual
        atual += anterior
    }
    display.innerHTML += `<p>Sequência de Fibonacci: ${sequencia}</p>`
}