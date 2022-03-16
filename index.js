const monedaOne = document.getElementById("moneda-uno");
const monedaTwo = document.getElementById("moneda-dos");
const cantidadOne = document.getElementById("cantidad-uno");
const cantidadTwo = document.getElementById("cantidad-dos");
const cambioElemento = document.getElementById("cambio");
const tazaElement = document.getElementById("taza");

function calculate() {
  const moneda_one = monedaOne.value;
  const moneda_two = monedaTwo.value;
  fetch(`https://api.exchangerate-api.com/v4/latest/${moneda_one}`)
    .then((res) => res.json())
    .then((data) => {
      const taza = data.rates[moneda_two];
      cambioElemento.innerText = `1${moneda_one} = ${taza} ${moneda_two}`;

      cantidadTwo.value = (cantidadOne.value * taza).toFixed(2);
    });
}
monedaOne.addEventListener("change", calculate);
cantidadOne.addEventListener("input", calculate);
monedaTwo.addEventListener("change", calculate);
cantidadTwo.addEventListener("change", calculate);

taza.addEventListener("click", () => {
  const temporal = monedaOne.value;
  monedaOne.value = monedaTwo.value;
  monedaTwo.value = temporal;
  calculate();
});
calculate();
