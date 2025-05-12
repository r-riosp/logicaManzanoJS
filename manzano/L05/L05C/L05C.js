function exibirResultado() {
    const display = document.getElementById("display");
    let somatorio = 0;
    for (let contadora = 1; contadora < 101; contadora++) {
        somatorio += contadora;
    }
    display.innerHTML = `<p>O valor total da soma dos valores foi: <b>${somatorio}</b></p>`;
}