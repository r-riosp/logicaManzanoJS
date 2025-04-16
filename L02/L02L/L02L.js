alert("Senhor ou senhora fulana!")
let nome = prompt("Digite o nome: ")
let sexo = prompt("Digite o sexo (M/F): ").toUpperCase()
if (sexo == "M") {
    alert(`Ilmo Sr. ${nome}. Seja bem-vindo!`)
}
else {
    alert(`Ilma Sra. ${nome}. Seja bem-vinda!`)
}