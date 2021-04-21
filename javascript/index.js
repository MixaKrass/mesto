import PopupWithForm from "./popupWithForm.js"
import PopupWithImage from "./popupWithImage.js"
import Section from "./section.js"
import Card from "./card.js" 
import FormValidator from "./validator.js"
import UserInfo from "./userInfo.js"


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
const cardsTemplate = document.querySelector('#templatecard').content; //получаем заготовки для карточек
const cardContainer = document.querySelector('.cards'); //контейнер с карточками

const popupCardSaveButton = document.querySelector('#save-popup-card'); // кнопка сохранения форм
const bigClosePopup = document.querySelector('#ClosePopupBig'); // закрываем большой попап
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
  const newCard = new Card({name: data['input__popup-CardName'], link: data['input__popup-CardImg']}, cardsTemplate, popupBigClass);
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

/* 




const popupAdd = new PopupWithForm(popupCard, inputsValue => {
  const newCard = new Card(cardsTemplate, inputsValue, popupBigClass).getCard()
  renderCards.addItem(newCard)
  popupAdd.close()
})

const popupEdit = new PopupWithForm(popupProfile, inputsValue => {
  userInfo.setUserInfo(inputsValue)
  popupEdit.close()
})



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
}

// состояние кнопки
function buttonCondition() {
  popupCardSaveButton.setAttribute('disabled', 'disabled');
  popupCardSaveButton.classList.add(validationConfig.inactiveButtonClass);
}

// Закрытие popup 
const closePopup = (popup) => {
  popup.classList.remove('popup_opened');
  popup.removeEventListener('mousedown', closePopupOverlay);
  document.removeEventListener('keydown', closePopupEscape);
}



//закрывает попап профиля
closeEditProfilePopupButton.addEventListener('click', function () {
  closePopup(popupProfile)
})



//закрывает попап карточки
closeAddCardPopupButton.addEventListener('click', function () {
  closePopup(popupCard)
})

bigClosePopup.addEventListener('click', function () {
  closePopup(popupBig);
})

// Редактирование 
function submitEditProfileForm(evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  aboutProfile.textContent = aboutInput.value;
  closePopup(popupProfile);
}
formEditProfile.addEventListener('submit', submitEditProfileForm); 

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
  buttonCondition();
  formAddCard.reset()
}

formAddCard.addEventListener('submit', addCardFormSubmitHandler); 

//Card
function createCard (item) {
  const card = new Card(cardTemplate, item, openPopup, closePopup);
  const cardElement = card.getCard();
  return cardElement;
} 

*/