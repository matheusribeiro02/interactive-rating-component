const btnSubmit = document.querySelector('.submit');
const card = document.querySelector('.card');
const cardThankYou = document.querySelector('.card-thank-you');
const backBtn = document.querySelector('.back');
const rating = document.querySelector('.rating');
const rates = document.querySelectorAll('.btn');

var p = document.createElement("p");
p.innerHTML = "Selecione uma opção!"

btnSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    cardThankYou.classList.remove("hidden");
    card.style.display = "none";
});

backBtn.addEventListener('click', (e) => {
    e.preventDefault();
    cardThankYou.classList.add("hidden");
    card.style.display = "block"
});

rates.forEach((rate) => {
    rate.addEventListener('click', (e) => {
        e.preventDefault();
        rating.innerHTML = rate.innerHTML;
    })
});
