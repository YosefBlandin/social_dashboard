let darkbtn = document.querySelector(".darkmode__button");
let checkbox = document.querySelector(".checkbox");
let header = document.querySelector('.header');
let headerTitle = document.querySelector('.information__title');
let container = document.querySelector('.container');
let card = document.querySelectorAll('.cards__card');
let cardFollowers = document.querySelectorAll('.card__followers');
let overviewCards = document.querySelectorAll('.overview__card')
let overviewFollowers = document.querySelectorAll('.footer__amount')

checkbox.addEventListener('click', () => {
   checkbox.checked === true ? switchON() : switchOFF();
});

function switchON() {
    darkbtn.classList.toggle('darkmode__button--on')
    header.classList.toggle('header--dark')
    headerTitle.classList.toggle('information__title--dark')
    container.classList.toggle('container--dark')
    cardFollowers.forEach(e => e.classList.toggle('card__followers--dark'))
    card.forEach(e => e.classList.toggle('cards__card--dark'))
    overviewCards.forEach(e => e.classList.toggle('overview__card--dark'))
    overviewFollowers.forEach(e => e.classList.toggle('footer__amount--dark'))
}

function switchOFF() {
    darkbtn.classList.remove('darkmode__button--on') 
    header.classList.remove('header--dark')
    headerTitle.classList.remove('information__title--dark')
    container.classList.remove('container--dark')
    cardFollowers.forEach(e => e.classList.remove('card__followers--dark'))
    card.forEach(e => e.classList.remove('cards__card--dark'))
    overviewCards.forEach(e => e.classList.remove('overview__card--dark'))
    overviewFollowers.forEach(e => e.classList.remove('footer__amount--dark'))
}


