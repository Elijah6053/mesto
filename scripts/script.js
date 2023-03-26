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

const editbutton = document.querySelector('.profile__edit-button');
const popupProfile = document.querySelector('.popup_edit-profile');
const editForm = document.querySelector('.popup__form_edit-profile');
const closeformbutton = document.querySelector('.popup__close-button_edit-profile');
const profilename = document.querySelector('.profile__name')
const profiledescription = document.querySelector('.profile__job')
const nameInput = document.querySelector('.popup__form-input_type_name')
const jobInput = document.querySelector('.popup__form-input_type_job')



const addbutton = document.querySelector('.profile__add-button');
const popupadd = document.querySelector('.popup_add-mesto');
const addform = document.querySelector('.popup__form_add-mesto');
const closeaddformbutton = document.querySelector('.popup__close-button_add-mesto');
const mestoNameInput = document.querySelector('.popup__form-input_type_mesto-name')
const mestoUrlInput = document.querySelector('.popup__form-input_type_url')


const elements = document.querySelector('.elements');

const popupView = document.querySelector('.popup_type_view');
const popupViewName = document.querySelector('.popup__mesto-name');
const popupViewimg = document.querySelector('.popup__mesto-image');

// Открытие попапа

function openPopup(modal) {
  modal.classList.add('popup_opened')
}

function closePopup(modal) {
  modal.classList.remove('popup_opened')
}

// функции и листенеры поп апа профиля (работает)

function openPopupProfile() {
openPopup(popupProfile)
nameInput.value = profilename.textContent
jobInput.value = profiledescription.textContent
}

function closePopupProfile() {
  closePopup(popupProfile)
}

function handleFormSubmit (evt) {
    evt.preventDefault();
    profilename.textContent = nameInput.value
    profiledescription.textContent = jobInput.value
    closePopupProfile()
}


editbutton.addEventListener('click', openPopupProfile);
closeformbutton.addEventListener('click', closePopupProfile);
editForm.addEventListener('submit', handleFormSubmit); 



// функции и листенеры поп апа адд 


function openaddform() {
  openPopup(popupadd)
}
    
function closeaddform() {
  closePopup(popupadd)
}
    
addbutton.addEventListener('click', openaddform);
closeaddformbutton.addEventListener('click', closeaddform);
    




// функция добавления мест






// Открытие поп апа просмотра
function openPopupView(mestoName, mestoUrl) {
  popupViewimg.alt = mestoName;
  popupViewimg.src = mestoUrl;
  popupViewName.textContent = mestoName;
  openPopup(popupView)
};

// Закрытие поп апа просмотра

function closePopupView() {
  closePopup(popupView)
};
const viewCloseButton= document.querySelector('.popup__close-button_view');
viewCloseButton.addEventListener('click', closePopupView); 



function createMesto(mestoName, mestoUrl) {
  const mestoTemplate = document.querySelector('#mesto-template').content;
  const mestoElement = mestoTemplate.querySelector('.elements__element').cloneNode(true);


  mestoElement.querySelector('.elements__photo').src = mestoUrl;
  mestoElement.querySelector('.elements__photo').alt = mestoName;
  mestoElement.querySelector('.elements__text').textContent = mestoName;
  // elements.prepend(mestoElement);
  // лайк
    mestoElement.querySelector('.elements__like-button').addEventListener('click', () => {
    mestoElement.querySelector('.elements__like-button').classList.toggle('elements__like-button_acitve');
  });
  // удаление
    mestoElement.querySelector('.elements__delete-button').addEventListener('click', () => {
    mestoElement.remove();
  });
  // открытие попапа
  mestoElement.querySelector('.elements__photo').addEventListener('click', () => {openPopupView(mestoName, mestoUrl)})

  return mestoElement;
}


  

for (let i = 0; i < initialCards.length; i++) {
    elementName = initialCards[i].name;
    elementUrl = initialCards[i].link;
    // let card = createMesto(elementName,elementUrl)
    elements.prepend(createMesto(elementName,elementUrl))
  }

function handleAddFormSubmit (evt) {
  evt.preventDefault();
  elementName = mestoNameInput.value
  elementUrl = mestoUrlInput.value
  elements.prepend(createMesto(elementName,elementUrl))
  closeaddform();
  evt.target.reset()
  // mestoNameInput.value = ''
  // mestoUrlInput.value = ''
}



addform.addEventListener('submit', handleAddFormSubmit); 



