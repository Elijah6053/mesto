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
  _template = document.querySelector('#mesto-template').content;

  constructor (name, link) {
      this._name = name;
      this._link = link;
  }

  _onLike = () => {
    this._card.querySelector('.elements__like-button').classList.toggle('elements__like-button_acitve');
  }

  _onDelete = () => {
    this._card.remove();
  }

  _onPopup = () => {
    const popupView = document.querySelector('.popup_type_view');
    const popupViewName = document.querySelector('.popup__mesto-name');
    const popupViewimg = document.querySelector('.popup__mesto-image'); 
    popupViewimg.alt = this._name;
    popupViewimg.src = this._link;
    popupViewName.textContent = this._name;
    openPopup(popupView)
  }

  _createCard () {
      this._card = this._template.cloneNode(true).children[0];
      this._card.querySelector('.elements__photo').src = this._link;
      this._card.querySelector('.elements__photo').alt = this._name;
      this._card.querySelector('.elements__text').textContent = this._name;

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