//массив карточек
export const initialCards = [
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

export const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible',
  inputError: '.popup__error'
}  

export const popupProfile = document.querySelector('#popup-profile'); /*поиск формы */
export const editButton = document.querySelector('.profile__edit'); /*Кнопка редактирования*/

export const nameInput = document.querySelector('#input__popup-name'); /* 1 значение  */
export const aboutInput = document.querySelector('#input__popup-about'); /*2 значение */
export const nameProfile = document.querySelector('.profile__name'); /* поиск имени */
export const aboutProfile = document.querySelector('.profile__about'); /* поиск о себе */
export const formEditProfile = document.querySelector('#form-profile') /* попап по форме */

// форма добавления карточек
export const popupCard = document.querySelector('#popup-card'); // форма
export const openPopupCardButton = document.querySelector('.profile__add'); // кнопка добавления карточки
export const formAddCard = document.querySelector('#form-card');

//template
export const cardsTemplate = document.querySelector('#templatecard').content; //получаем заготовки для карточек
export const cardContainer = document.querySelector('.cards'); //контейнер с карточками

export const popupCardSaveButton = document.querySelector('#save-popup-card'); // кнопка сохранения форм
export const popupBig = document.querySelector('#popupbig'); // попап-картинка