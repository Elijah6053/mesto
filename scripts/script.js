let editbutton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let form = document.querySelector('.popup__container');
let closeformbutton = document.querySelector('.popup__close-button');

let profilename = document.querySelector('.profile__name')
let profiledescription = document.querySelector('.profile__job')
let nameInput = document.querySelector('.popup__form-input_name')
let jobInput = document.querySelector('.popup__form-input_job')


function openform() {
popup.classList.add('popup_opened')
nameInput.value = profilename.textContent
jobInput.value = profiledescription.textContent
}

function closeform() {
    popup.classList.remove('popup_opened')
}

function handleFormSubmit (evt) {
    evt.preventDefault();
    profilename.textContent = nameInput.value
    profiledescription.textContent = jobInput.value
    closeform();
}


editbutton.addEventListener('click', openform);
closeformbutton.addEventListener('click', closeform);
form.addEventListener('submit', handleFormSubmit); 