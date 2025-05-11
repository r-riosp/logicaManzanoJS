
function gerarTabuada() {
    const resultadoDiv = document.getElementById("resultado");
    const numero = parseInt(document.getElementById("numero").value);
    resultadoDiv.innerHTML = '';

    for (let contadora = 0; contadora < 11; contadora++) {
        const linha = document.createElement("p");
        let produto = numero * contadora;
        linha.innerHTML = `${numero} * ${contadora} = ${produto}`;
        resultadoDiv.appendChild(linha);
    }
}