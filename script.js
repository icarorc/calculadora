function clicar() {
    var num1 = document.getElementById("n1").value
    var num2 = document.getElementById("n2").value
    if (document.getElementById("soma").checked) {
        var s = Number(num1) + Number(num2)
        res.innerHTML = `A soma entre ${num1} e ${num2} é igual : <strong>${s}</strong>`
    } else if (document.getElementById("subt").checked) {
        s = Number(num1) - Number(num2)
        res.innerHTML = `A subtração entre ${num1} e ${num2} é igual : <strong>${s}</strong>`
    } else if (document.getElementById("mult").checked) {
        s = Number(num1) * Number(num2)
        res.innerHTML = res.innerHTML = `A Multiplicação entre ${num1} e ${num2} é igual : <strong>${s}</strong>`

    } else if (document.getElementById("divi").checked) {
        s = Number(num1) / Number(num2)
        num2 == 0 ? alert("[ERRO] denominador não pode ser igual a 0") : res.innerHTML = res.innerHTML = `A Divisão entre ${num1} e ${num2} é igual : <strong>${s}</strong>`
        
    }
}