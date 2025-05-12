function exibirResultado() {
    const display = document.getElementById("display");
    let somatorio = 0;

    for (let contadora = 1; contadora < 501; contadora++) {

        if (contadora % 2 == 0) {
            somatorio += contadora;
        }
    }
    display.innerHTML = `<p>O valor total da soma dos valores foi: <b>${somatorio}</b></p>`;
}