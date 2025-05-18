const converteGrau = () => {
    let display = document.querySelector('#resultado')
    display.innerHTML = ''

    for (let contadora = 0, celsius = 10, fahrenheit; contadora < 10; contadora++, celsius += 10) {
        fahrenheit = (9 * celsius + 160) / 5
        let linha = document.createElement('tr')
        linha.innerHTML = `
            <td><p>${celsius}°C</p></td>
            <td><p>${fahrenheit}°F</p></td>
        `
        display.appendChild(linha)
    }
}