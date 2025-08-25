let input = document.getElementById("amout");
let from = document.getElementById("from");
let to = document.getElementById("to");
let pul = document.getElementById("pul");
let btn = document.getElementById("btn");

let API =
  "https://api.currencyapi.com/v3/latest?apikey=cur_live_tNNfQ0oK1Jhard0JRyuK8oP5pZLhw86Hn88ozhwm";


fetch(API)
  .then((res) => res.json())
  .then((ketmon) => {
    for (let code in ketmon.data) {
      from.innerHTML += `<option value=${code}>${code}</option>`;
      to.innerHTML += `<option value=${code}>${code}</option>`;
    }
  });

btn.addEventListener("click", (e) => {
  e.preventDefault();

  let amount = parseFloat(input.value); 
  let fromm = from.value;
  let too = to.value;

  fetch(API)
    .then((res) => res.json())
    .then((tesha) => {
      let data = tesha.data;

      let fromRate = data[fromm].value;
      let toRate = data[too].value;

      let converted = (amount / fromRate) * toRate;
      pul.textContent = `${amount} ${fromm} = ${converted.toFixed(2)} ${too}`;

      console.log(data);
    });
});
