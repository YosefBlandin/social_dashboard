let checkbox = document.querySelector('.checkbox');
let btn1 = document.querySelectorAll('.btn_disabled');
let container = document.querySelector('.container');
let header_title = document.querySelector('.title')
let card = document.querySelectorAll('.card')
let user_followers = document.getElementsByTagName('h3')
let overview_card = document.querySelectorAll('.overview__cards')
let dark_mode__container = document.querySelector('.dark_mode__container')

checkbox.addEventListener('click', () => {
    let user = Object.values(user_followers);
    console.log(checkbox.checked)
    console.log(checkbox.classList)
    if (checkbox.checked === true) {
        btn1.forEach(e => e.classList.replace('btn_disabled', 'btn_enabled'))
        container.style.background = "white";
        header_title.style.color = "black";
        card.forEach(cards => cards.style.background = "whitesmoke")
        overview_card.forEach(e => e.style.background = "whitesmoke")
        user.forEach(e => e.style.color = "black")
        dark_mode__container.style.border = "3px solid #252a41"

    } else {
         btn1.forEach(e => e.classList.replace('btn_enabled', 'btn_disabled'))
        container.style.background = "#1e202a";
        header_title.style.color = "white";
        overview_card.forEach(e => e.style.background = "#252a41")
        card.forEach(cards => cards.style.background = "#252a41")
        user.forEach(e => e.style.color = "white")
        dark_mode__container.style.border = "3px solid white"
    }

})
