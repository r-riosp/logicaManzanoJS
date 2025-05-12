function exibirNumeros() {
    const display = document.getElementById('display');
    display.innerHTML = "";

    for (let contadora = 0; contadora < 101; contadora++) {
        const linha = document.createElement("p");
        linha.innerHTML = `Valor: ${contadora}`;
        display.appendChild(linha);
    }
}