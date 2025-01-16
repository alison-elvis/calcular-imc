const peso = document.querySelector("#peso");
const altura = document.querySelector("#altura");
const imc = document.querySelector(".result");
const cleanInputs = document.querySelectorAll("#peso, #altura");

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const imcResult = peso.value / Math.pow(altura.value, 2);
  const formattedResult = new Intl.NumberFormat("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(imcResult);
  imc.innerText = formattedResult;
  cleanInputs.forEach(i => i.value = "");
});