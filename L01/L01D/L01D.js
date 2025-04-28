alert("Combustível usado em uma viagem")
let tempo = prompt("Digite o tempo gasto na viagem (em horas): ")
let velocidade = prompt("Digite a velocidade média da viagem (em km/h): ")
let distancia = tempo * velocidade
let combustivelUsado = distancia / 12

alert(`A velocidade média da viagem é: ${velocidade} km/h`)
alert(`O tempo gasto na viagem é: ${tempo} horas`)
alert(`A distância percorrida na viagem é: ${distancia} km`)
alert(`A quantidade de combustível usado na viagem é: ${combustivelUsado} litros`)