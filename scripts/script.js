let popup = document.querySelector('.popup_opened');
 
function hidePopup() {
    popup.classList.remove('popup_opened');
}

popup.addEventListener('click', hidePopup);

let ButEdit = document.querySelector('.profile__editor-button')

function showPopup() {
    let popup = document.querySelector('.popup');
    popup.classList.add('popup_opened');
}

ButEdit.addEventListener('click', showPopup);