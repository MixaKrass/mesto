import './pages/index.css'
import {initialCards} from "./javascript/initial-cards.js"
import PopupWithForm from "./javascript/popupWithForm.js"
import PopupWithImage from "./javascript/popupWithImage.js"
import Section from "./javascript/section.js"
import Card from "./javascript/card.js" 
import FormValidator from "./javascript/validator.js"
import UserInfo from "./javascript/userInfo.js"


const popupProfile = document.querySelector('#popup-profile'); /*поиск формы */
const editButton = document.querySelector('.profile__edit'); /*Кнопка редактирования*/

const nameInput = document.querySelector('#input__popup-name'); /* 1 значение  */
const aboutInput = document.querySelector('#input__popup-about'); /*2 значение */
const nameProfile = document.querySelector('.profile__name'); /* поиск имени */
const aboutProfile = document.querySelector('.profile__about'); /* поиск о себе */
const formEditProfile = document.querySelector('#form-profile') /* попап по форме */

// форма добавления карточек
const popupCard = document.querySelector('#popup-card'); // форма
const openPopupCardButton = document.querySelector('.profile__add'); // кнопка добавления карточки
const formAddCard = document.querySelector('#form-card');

//template
const cardsTemplate = document.querySelector('#templatecard').content; //получаем заготовки для карточек
const cardContainer = document.querySelector('.cards'); //контейнер с карточками

const popupCardSaveButton = document.querySelector('#save-popup-card'); // кнопка сохранения форм
const popupBig = document.querySelector('#popupbig'); // попап-картинка



const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible',
  inputError: '.popup__error'
}  



const userInfo = new UserInfo({nameProfile, aboutProfile,});

const popupBigClass = new PopupWithImage(popupBig);
const popupAdd = new PopupWithForm(popupCard, addCardFormSubmit);
const popupEdit = new PopupWithForm(popupProfile, editProfileFormSubmit);

//Validation
const addCardFormValidator = new FormValidator (validationConfig, formAddCard);
const editProfileFormValidator = new FormValidator (validationConfig, formEditProfile);
editProfileFormValidator.enableValidation();
addCardFormValidator.enableValidation();


//рендер на страницу новой карточки
function addCardFormSubmit (data) {
  const newCard = new Card(cardsTemplate, {name: data['InputNameCard'], link: data['InputImgCard']},  popupBigClass);
  const cardElement = newCard.getCard();
  cardContainer.prepend(cardElement);
  popupAdd.close();
  popupCardSaveButton.classList.add(validationConfig.inactiveButtonClass);
  popupCardSaveButton.setAttribute('disabled', 'disabled');
}

//открывает попап карточки
openPopupCardButton.addEventListener('click', () => {
  formAddCard.reset();
  addCardFormValidator.enableValidation()
  popupCardSaveButton.classList.add(validationConfig.inactiveButtonClass);
  popupCardSaveButton.setAttribute('disabled', 'disabled');
  popupAdd.open();
})




//Section 
const renderCards = new Section ({
  items: initialCards,
  renderer: (item) => {
    const newCard = new Card(cardsTemplate, item, popupBigClass);
    const cardElement = newCard.getCard();
    renderCards.addItem(cardElement)
  }},
  cardContainer)

renderCards.renderItems()

//редактирование профиля
function editProfileFormSubmit (data) {
  userInfo.setUserInfo(data);
  popupEdit.close();
}

// открывает попап профиля
editButton.addEventListener('click', () => {
  const userInformation = userInfo.getUserInfo();
  nameInput.value = userInformation.name;
  aboutInput.value = userInformation.about;
  popupEdit.open();
})
 
popupEdit.setEventListeners();
popupAdd.setEventListeners();
popupBigClass.setEventListeners();
