document.getElementById("btnCalcular").addEventListener("click", () => {
    const peso = parseFloat(document.getElementById("inputPeso").value);
    const altura = parseFloat(document.getElementById("inputAltura").value);
    const resultado = document.getElementById("saida");
  
    if (!peso || !altura || altura === 0) {
      resultado.innerHTML = "Preencha os dois campos corretamente.";
      return;
    }
  
    const imc = (peso / (altura * altura)).toFixed(1);
    let nivel = "";
  
    if (imc < 18.5) nivel = "Abaixo do peso";
    else if (imc < 25) nivel = "Peso ideal";
    else if (imc < 30) nivel = "Levemente acima do peso";
    else nivel = "Obesidade";
  
    resultado.innerHTML = `
      <strong>Resultado:</strong><br>
      IMC: ${imc}<br>
      Classificação: ${nivel}
    `;
  });
  