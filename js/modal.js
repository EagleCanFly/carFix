const modal = document.querySelector('.modal'),
    redCross = document.querySelectorAll('.modal__cross'),
    modalThanks = document.querySelector('.modal__thanks'),
    modalCallback = document.querySelector('.modal__callback'),
    modalFastCallback = document.querySelector('.modal__fastCallback'),

    modalBtn = document.querySelectorAll('.header__redBtn'),
    thanksBtn = document.querySelectorAll('.thanks-btn'),
    fastCallbackBtn = document.querySelectorAll('.fast-callback-btn'),
    callbackBtn = document.querySelectorAll('.callback-btn');

let inputAll = document.querySelectorAll('input, textarea');

// functions //////////////////////////////////////////////////

const hideTimer = (delay) => {
    setTimeout(() => {
        modal.style.display = 'none';
        modalThanks.style.display = "none";
    }, delay);
};


const showModal = (buttons, modalBox) => {

    buttons.forEach(element => {
        element.addEventListener('click', () => {
            modal.style.display = 'block';
            modalBox.style.display = 'block';

            inputAll.forEach(elem => {
                elem.value = '';
            });
        });
    });
   
    if (modalBox === modalThanks) { hideTimer(5000); };

};


const hideModal = (modalBox) => {

    redCross.forEach(element => {
        element.addEventListener('click', () => {
            modal.style.display = 'none';
            modalBox.style.display = "none";
        })
    })
};


///////////////////////////////////////////////////////////////
showModal(thanksBtn, modalThanks);
showModal(callbackBtn, modalCallback);
showModal(fastCallbackBtn, modalFastCallback);
hideModal(modalThanks);
hideModal(modalCallback);
hideModal(modalFastCallback);


