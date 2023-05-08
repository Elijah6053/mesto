import {ElementsListItem, ElementsList} from "./Card.js";
import {FormValidator} from "./FormValidator.js";

const validationConfig = {
  inputSelector: '.popup__form-input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_invalid',
  invalidInputClass: 'popup__form-input_invalid',
}

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const editButton = document.querySelector('.profile__edit-button');
const popupProfile = document.querySelector('.popup_edit-profile');
const editForm = document.querySelector('.popup__form_edit-profile');
const closeFormButton = document.querySelector('.popup__close-button_edit-profile');
const profileName = document.querySelector('.profile__name')
const profileDescription = document.querySelector('.profile__job')
const nameInput = document.querySelector('.popup__form-input_type_name')
const jobInput = document.querySelector('.popup__form-input_type_job')



const addButton = document.querySelector('.profile__add-button');
const popupAdd = document.querySelector('.popup_add-mesto');
const addForm = document.querySelector('.popup__form_add-mesto');
const closeAddFormButton = document.querySelector('.popup__close-button_add-mesto');
const mestoNameInput = document.querySelector('.popup__form-input_type_mesto-name')
const mestoUrlInput = document.querySelector('.popup__form-input_type_url')


// const elements = document.querySelector('.elements');

const popupView = document.querySelector('.popup_type_view');
// const popupViewName = document.querySelector('.popup__mesto-name');
// const popupViewimg = document.querySelector('.popup__mesto-image');

// Открытие попапа

function openPopup(modal) {
  modal.classList.add('popup_opened')
  modal.addEventListener("mousedown", closeViaOverlay);
  document.addEventListener("keydown", closeViaEscape);
}

function closePopup(modal) {
  modal.classList.remove('popup_opened')
  modal.removeEventListener("mousedown", closeViaOverlay);
  document.removeEventListener("keydown", closeViaEscape);
}

function closeViaEscape(evt) {
  if (evt.key === "Escape") {
    const openedModal = document.querySelector(".popup_opened");
    closePopup(openedModal);
  }
}

function closeViaOverlay(evt) {
  if (evt.target === evt.currentTarget) {
    closePopup(evt.currentTarget);
  }
}

// функции и листенеры поп апа профиля (работает)

function openPopupProfile() {
openPopup(popupProfile)
nameInput.value = profileName.textContent
jobInput.value = profileDescription.textContent
}

function closePopupProfile() {
  closePopup(popupProfile)
}

function handleFormSubmit (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value
    profileDescription.textContent = jobInput.value
    closePopupProfile()
}


editButton.addEventListener('click', openPopupProfile);
closeFormButton.addEventListener('click', closePopupProfile);
editForm.addEventListener('submit', handleFormSubmit); 



// функции и листенеры поп апа адд 


function openaddform() {
  openPopup(popupAdd)
}
    
function closeaddform() {
  closePopup(popupAdd)
}
    
addButton.addEventListener('click', openaddform);
closeAddFormButton.addEventListener('click', closeaddform);
    




// функция добавления мест






// Открытие поп апа просмотра
// function openPopupView(mestoName, mestoUrl) {
//   popupViewimg.alt = mestoName;
//   popupViewimg.src = mestoUrl;
//   popupViewName.textContent = mestoName;
//   openPopup(popupView)
// };

// Закрытие поп апа просмотра

function closePopupView() {
  closePopup(popupView)
};
const viewCloseButton= document.querySelector('.popup__close-button_view');
viewCloseButton.addEventListener('click', closePopupView); 



// function createMesto(mestoName, mestoUrl) {
//   const mestoTemplate = document.querySelector('#mesto-template').content;
//   const mestoElement = mestoTemplate.querySelector('.elements__element').cloneNode(true);


//   mestoElement.querySelector('.elements__photo').src = mestoUrl;
//   mestoElement.querySelector('.elements__photo').alt = mestoName;
//   mestoElement.querySelector('.elements__text').textContent = mestoName;
//   // elements.prepend(mestoElement);
//   // лайк
//     mestoElement.querySelector('.elements__like-button').addEventListener('click', () => {
//     mestoElement.querySelector('.elements__like-button').classList.toggle('elements__like-button_acitve');
//   });
//   // удаление
//     mestoElement.querySelector('.elements__delete-button').addEventListener('click', () => {
//     mestoElement.remove();
//   });
//   // открытие попапа
//   mestoElement.querySelector('.elements__photo').addEventListener('click', () => {openPopupView(mestoName, mestoUrl)})

//   return mestoElement;
// }


  
const elementsList = new ElementsList('.elements')

function createCard(elementName, elementUrl, templateSelector) {
  // тут создаете карточку и возвращаете ее
  const card = new ElementsListItem(elementName, elementUrl, templateSelector).getCard();
  return card 
}

for (let i = 0; i < initialCards.length; i++) {
    const elementName = initialCards[i].name;
    const elementUrl = initialCards[i].link;
    // const card = new ElementsListItem(elementName, elementUrl, '#mesto-template').getCard();
    const card = createCard(elementName, elementUrl, '#mesto-template')
    elementsList.addCard(card);
  }

function handleAddFormSubmit (evt) {
  evt.preventDefault();
  const elementName = mestoNameInput.value
  const elementUrl = mestoUrlInput.value
  // const card = new ElementsListItem(elementName, elementUrl, '#mesto-template').getCard();
  const card = createCard(elementName, elementUrl, '#mesto-template')
  elementsList.addCard(card);
  closeaddform();
  evt.target.reset()
}



addForm.addEventListener('submit', handleAddFormSubmit); 

const validationEditForm = new FormValidator(validationConfig, editForm);
validationEditForm.enableValidation()

const validationAddForm = new FormValidator(validationConfig, addForm);
validationAddForm.enableValidation()


export {openPopup};
