function calcularIMC() {
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);
    const resultado = document.getElementById("resultado");

    if (peso && altura) {
        const imc = (peso / (altura * altura)).toFixed(2);
        let classificacao = "";

        if (imc < 18.5) classificacao = "Baixo peso";
        else if (imc < 25) classificacao = "Peso normal";
        else if (imc < 30) classificacao = "Sobrepeso";
        else if (imc < 35) classificacao = "Obesidade grau I";
        else if (imc < 40) classificacao = "Obesidade grau II";
        else classificacao = "Obesidade grau III";

        resultado.innerHTML = `<strong>Resultado:</strong><br>IMC: ${imc}<br>Classificação: ${classificacao}`;
    } else {
        resultado.innerHTML = "Por favor, preencha todos os campos.";
    }
}