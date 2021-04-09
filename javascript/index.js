import Card from "./card.js" 
import FormValidator from "./validator.js"



const popupProfile = document.querySelector('#popup-profile'); /*поиск формы */
const editButton = document.querySelector('.profile__edit'); /*Кнопка редактирования*/
const closeEditProfilePopupButton = document.querySelector('#ProfileClosePopup'); /*Кнопка закрытия*/
const nameInput = document.querySelector('#input__popup-name'); /* 1 значение  */
const aboutInput = document.querySelector('#input__popup-about'); /*2 значение */
const nameProfile = document.querySelector('.profile__name'); /* поиск имени */
const aboutProfile = document.querySelector('.profile__about'); /* поиск о себе */
const formEditProfile = document.querySelector('#form-profile') /* попап по форме */

// форма добавления карточек
const popupCard = document.querySelector('#popup-card'); // форма
const openPopupCardButton = document.querySelector('.profile__add'); // кнопка добавления карточки
const closeAddCardPopupButton = document.querySelector('#CardClosePopup'); // кнопка закрытия
const inputCardAddName = document.querySelector('#input__popup-CardName'); // 1 значение
const inputCardAddPhoto = document.querySelector('#input__popup-CardImg'); // 2 значение 
const formAddCard = document.querySelector('#form-card');

//template
const cardTemplate = document.querySelector('#templatecard').content; //получаем заготовки для карточек
const cardContainer = document.querySelector('.cards'); //контейнер с карточками

const popupForm = document.querySelectorAll('.popup__form');

const popupCardSaveButton = document.querySelector('#save-popup-card'); // кнопка сохранения форм

const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}  

const addCardFormValidator = new FormValidator (validationConfig, formAddCard);
const editProfileFormValidator = new FormValidator (validationConfig, formEditProfile);

//удаление ошибок
const deleteErrors = (popup) => {
  const errorsSpan = popup.querySelectorAll('.popup__error_visible')
  const errorsInput = popup.querySelectorAll('.popup__input_type_error')
  errorsSpan.forEach((evt) => evt.textContent = '')
  errorsInput.forEach((evt) => evt.classList.remove('popup__input_type_error'))
}


//закрытие на оверлэй
const closePopupOverlay = (evt) => {
  if (evt.target.classList.contains('popup_opened')) {
    closePopup(evt.target);
  }
}

// закрытие на ESC
const closePopupEscape = (evt) => {
  const openPopup = document.querySelector('.popup_opened');
  if (evt.key === "Escape") {
    closePopup(openPopup);
  }
}

// открытие попапов
const openPopup = (popup) => {
  popup.classList.add('popup_opened');
  popup.addEventListener('mousedown', closePopupOverlay);
  document.addEventListener('keydown', closePopupEscape);
  popupCardSaveButton.setAttribute('disabled', 'disabled');
  popupCardSaveButton.classList.add(validationConfig.inactiveButtonClass);
  editProfileFormValidator.enableValidation();
  addCardFormValidator.enableValidation();
}

/* Закрытие popup */
const closePopup = (popup) => {
  popup.classList.remove('popup_opened');
  popup.removeEventListener('mousedown', closePopupOverlay);
  document.removeEventListener('keydown', closePopupEscape);
  deleteErrors(popup);
  formAddCard.reset();
}

editButton.addEventListener('click', function () {
  nameInput.value = nameProfile.textContent;
  aboutInput.value = aboutProfile.textContent;
  openPopup(popupProfile)
})

closeEditProfilePopupButton.addEventListener('click', function () {
  closePopup(popupProfile)
})

openPopupCardButton.addEventListener('click', function () {
  openPopup(popupCard)
})

closeAddCardPopupButton.addEventListener('click', function () {
  closePopup(popupCard)
})

// Редактирование 
function submitEditProfileForm(evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  aboutProfile.textContent = aboutInput.value;
  closePopup(popupProfile);
}
formEditProfile.addEventListener('submit', submitEditProfileForm); 
 
function createCard (item) {
  const card = new Card(cardTemplate, item, openPopup, closePopup);
  const cardElement = card.getCard();
  return cardElement;
}

 initialCards.forEach(item => {
  const newcard = createCard(item);
  cardContainer.prepend(newcard);
 });

// добавление на страницу новой карточки
function addCardFormSubmitHandler (evt) {
  evt.preventDefault();
  const card = createCard({name: inputCardAddName.value, link: inputCardAddPhoto.value}); 
    cardContainer.prepend(card)
  closePopup(popupCard);
  formAddCard.reset()
}

formAddCard.addEventListener('submit', addCardFormSubmitHandler); 

 
 const formList = Array.from(popupForm);
 formList.forEach((formElement) => {
  new FormValidator(validationConfig, formElement).enableValidation()
 });


 
