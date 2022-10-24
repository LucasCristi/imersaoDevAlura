function soma() {

    let nomeCompleto = document.getElementById('nomeCompleto').value;
    let nota1 = document.getElementById('nota1').value;
    let nota2 = document.getElementById('nota2').value;
    let nota3 = document.getElementById('nota3').value;

    if (nomeCompleto === '') {
        return alert("Informe nome completo")
    } else if (nota1 === '') {

        return alert("Informe a primeira nota")
    } else if (nota2 === '') {

        return alert("Informe segunda nota")
    } else if (nota3 === '') {

        return alert("Informe terceira nota")
    }

    let mediaFinal = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)) / 3;

    if (mediaFinal < 7) {

        document.getElementById('resultado').innerHTML = `${nomeCompleto} sua média é ${mediaFinal.toFixed(3)}, você está reprovado!`

    } else if (mediaFinal <= 7) {
        document.getElementById('resultado').innerHTML = `${nomeCompleto} sua média é ${mediaFinal.toFixed(3)}, você está aprovado!`

    }

    
}

function limpar(){
    nomeCompleto.value = "";
    nota1.value = "";
    nota2.value = "";
    nota3.value = "";
}





