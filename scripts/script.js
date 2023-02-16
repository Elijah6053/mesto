let editbutton = document.querySelector('.profile__edit-button');
let form = document.querySelector('.popup');
let closeformbutton = document.querySelector('.popup__close-button');
let saveformbutton = document.querySelector('.popup__save-button');

let profilename = document.querySelector('.profile__name')
let profiledescription = document.querySelector('.profile__job')
let nameInput = document.querySelector('.popup__form-input_name')
let jobInput = document.querySelector('.popup__form-input_job')

nameInput.valueName = 'popup popup_opened'


function openform() {
form.className = 'popup popup_opened'
nameInput.value = profilename.textContent
jobInput.value = profiledescription.textContent
}

function handleFormSubmit (evt) {
    evt.preventDefault();
    profilename.textContent = nameInput.value
    profiledescription.textContent = jobInput.value
    form.className = 'popup'
}



function closeform() {
    form.className = 'popup'
    }

editbutton.addEventListener('click', openform);
closeformbutton.addEventListener('click', closeform);
saveformbutton.addEventListener('click', handleFormSubmit);
form.addEventListener('submit', handleFormSubmit); 