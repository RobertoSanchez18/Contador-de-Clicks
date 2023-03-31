const number = document.querySelector("#number");
const btnIncrementar = document.querySelector("#btn-incrementar");
const btnReset = document.querySelector("#btn-reset");
const btnDecrementar = document.querySelector("#btn-decrementar");

total = 0;

btnIncrementar.addEventListener("click", () => {
  total = total + 1;
  number.textContent = total;
});

btnReset.addEventListener("click", () => {
  total = 0;
  number.textContent = "0";
});

btnDecrementar.addEventListener("click", () => {
  total = total - 1;
  number.textContent = total;
  if (total < 0) {
    total = 0;
    number.textContent = "0";
  }
});
