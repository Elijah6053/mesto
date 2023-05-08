import {openPopup} from "./script.js";

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

class ElementsList {
    constructor (containerSelector) {
        this._container = document.querySelector(containerSelector);
    }

    addCard (card) {
      this._container.prepend(card);
    }
}

class ElementsListItem {
  

  constructor (name, link, templateSelector) {
      this._name = name;
      this._link = link;
      this._template = document.querySelector(templateSelector).content;
  }

  _onLike = () => {
    this._likeButton.classList.toggle('elements__like-button_acitve');
  }

  _onDelete = () => {
    this._card.remove();
  }

  _onPopup = () => {
    this._popupView = document.querySelector('.popup_type_view');
    this._popupViewName = document.querySelector('.popup__mesto-name');
    this._popupViewimg = document.querySelector('.popup__mesto-image'); 
    this._popupViewimg.alt = this._name;
    this._popupViewimg.src = this._link;
    this._popupViewName.textContent = this._name;
    openPopup(this._popupView)
  }

  _createCard () {
      this._card = this._template.cloneNode(true).children[0];
      this._card.querySelector('.elements__photo').src = this._link;
      this._card.querySelector('.elements__photo').alt = this._name;
      this._card.querySelector('.elements__text').textContent = this._name;
      this._likeButton = this._card.querySelector('.elements__like-button')

      this._setEventListeners();
  }

  _setEventListeners () {
    this._card.querySelector('.elements__like-button').addEventListener('click', this._onLike);
    this._card.querySelector('.elements__delete-button').addEventListener('click', this._onDelete);
    this._card.querySelector('.elements__photo').addEventListener('click', this._onPopup);
 
  }


  getCard () {
    this._createCard();
    return this._card;
  }
}




export {ElementsListItem, ElementsList};