let btnDarkMode = document.querySelector('.darkMode__btn');
let btnDarkModeCheck = document.querySelector('.darkMode__btn--check');
let title = document.querySelector('.header__title');
let header = document.querySelector('.header');
let card = document.querySelectorAll('.totalSection__card');
let card__followers = document.querySelectorAll('.card__followers');
let card__subtitle = document.querySelectorAll('.card__subtitle');
let totalSection = document.querySelector('.totalSection');
let overview_title = document.querySelector('.overview__title')
let overview = document.querySelector('.overview');

btnDarkModeCheck.addEventListener('click', () => {
    btnDarkModeCheck.checked === true ? switchOn() : switchOff();
})
switchOn = () => {
    btnDarkMode.classList.toggle('darkMode__btn--on');
    header.classList.toggle('header--dark'); 
    title.classList.toggle("header__title--dark");
    totalSection.classList.toggle('totalSection--dark');
    card.forEach(e => e.classList.toggle('totalSection__card--dark'));
    card__followers.forEach(e => e.classList.toggle('card__followers--dark'));
    card__subtitle.forEach(e => e.classList.toggle('card__subtitle--dark'));
    overview_title.classList.toggle('overview__title--dark');
    overview.classList.toggle('overview--dark');
}
switchOff = () => {
    btnDarkMode.classList.remove('darkMode__btn--on');
    header.classList.remove('header--dark'); 
    title.classList.remove("header__title--dark");
    totalSection.classList.remove('totalSection--dark');
    card.forEach(e => e.classList.remove('totalSection__card--dark'));
    card__followers.forEach(e => e.classList.remove('card__followers--dark'));
    card__subtitle.forEach(e => e.classList.remove('card__subtitle--dark'));
    overview_title.classList.remove('overview__title--dark');
    overview.classList.remove('overview--dark');
}

        

