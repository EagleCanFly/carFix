const modal = document.querySelector('.modal'),
    modalBtn = document.querySelectorAll('.header__redBtn'),
    modalText = document.querySelector('.modal__text'),
    redCross = document.querySelectorAll('.modal__cross'),
    thanksBtn = document.querySelectorAll('.thanks-btn'),
    modalThanks = document.querySelector('.modal__thanks'),
    modalCallback = document.querySelector('.modal__callback'),
    callbackBtn = document.querySelectorAll('.callback-btn');


// functions //////////////////////////////////////////////////

const timeout = (delay) => {
    setTimeout(() => {
        modal.style.display = 'none';
    }, delay);
};

const showModal = (buttons, modalBox) => {

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', () => {
            modal.style.display = 'block';
            modalBox.style.display = 'block';
            if (modalBox === modalThanks) {timeout(5000);};
        });

    }
};

const hideModal = (modalBox) => {
    for (let i = 0; i < redCross.length; i++) {
        redCross[i].addEventListener('click', () => {
            modal.style.display = 'none';
            modalBox.style.display = "none";
        })
    }
};

///////////////////////////////////////////////////////////////
showModal(thanksBtn, modalThanks);
showModal(callbackBtn, modalCallback);
hideModal(modalCallback);


