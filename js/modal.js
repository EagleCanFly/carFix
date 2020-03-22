const modal = document.querySelector('.modal'),
    modalBtn = document.querySelectorAll('.header__redBtn'),
    modalText = document.querySelector('.modal__text'),
    redCross = document.querySelector('.modal__cross');

// получаю все кнопки на странице
for (let i = 0; i < modalBtn.length; i++) {
    modalBtn[i].addEventListener('click', () => {
        modal.style.display = 'block';
    });

}


redCross.addEventListener('click', () => {
    modal.style.display = 'none';
});