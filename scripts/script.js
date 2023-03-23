let editbutton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let form = document.querySelector('.popup__form');
let closeformbutton = document.querySelector('.popup__close-button');

let profilename = document.querySelector('.profile__name')
let profiledescription = document.querySelector('.profile__job')
let nameInput = document.querySelector('.popup__form-input_type_name')
let jobInput = document.querySelector('.popup__form-input_type_job')


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



// Попап адд
let addbutton = document.querySelector('.profile__add-button');
let popupadd = document.querySelector('.popup-add');
let addform = document.querySelector('.popup-add__form');
let closeaddformbutton = document.querySelector('.popup-add__close-button');

let mestoNameInput = document.querySelector('.popup-add__form-input_type_name')
let mestoUrlInput = document.querySelector('.popup-add__form-input_type_job')

function openaddform() {
    popupadd.classList.add('popup-add_opened')
    }
    
function closeaddform() {
    popupadd.classList.remove('popup-add_opened')
}
    

    

addbutton.addEventListener('click', openaddform);
closeaddformbutton.addEventListener('click', closeaddform);
//addform.addEventListener('submit', handleFormSubmit); 


// функция добавления мест

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

let elements = document.querySelector('.elements');

const popupView = document.querySelector('.popup-view');
const popupViewName = document.querySelector('.popup-view__mesto-name');
const popupViewimg = document.querySelector('.popup-view__mesto-image');

function popupViewOpen(mestoName, mestoUrl) {

  popupViewimg.src = mestoUrl;
  popupViewName.textContent = mestoName;
  popupView.classList.add('popup-view_opened');
};

function addMesto(mestoName, mestoUrl) {
    const mestoTemplate = document.querySelector('#mesto-template').content;
    const mestoElement = mestoTemplate.querySelector('.elements__element').cloneNode(true);


    mestoElement.querySelector('.elements__photo').src = mestoUrl;
    mestoElement.querySelector('.elements__text').textContent = mestoName;
    elements.prepend(mestoElement);
    // лайк
      mestoElement.querySelector('.elements__like-button').addEventListener('click', () => {
      mestoElement.querySelector('.elements__like-button').classList.toggle('elements__like-button_acitve');
    });
    // удаление
      mestoElement.querySelector('.elements__delete-button').addEventListener('click', () => {
      mestoElement.remove();
    });
    // открытие попапа
    mestoElement.querySelector('.elements__photo').addEventListener('click', () => {popupViewOpen(mestoName, mestoUrl)})
}


  

for (let i = 0; i < initialCards.length; i++) {
    elementName = initialCards[i].name;
    elementUrl = initialCards[i].link;
    addMesto(elementName,elementUrl)
  }

function handleAddFormSubmit (evt) {
  evt.preventDefault();
  elementName = mestoNameInput.value
  elementUrl = mestoUrlInput.value
  addMesto(elementName, elementUrl)
  closeform();
}

addform.addEventListener('submit', handleAddFormSubmit); 



// Закрытие поп апа просмотра

function closePopupView() {
  popupView.classList.remove('popup-view_opened')
};
const viewCloseButton= document.querySelector('.popup-view__close-button');
viewCloseButton.addEventListener('click', closePopupView); 