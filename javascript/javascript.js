const popupProfile = document.querySelector('#popup-profile'); /*поиск формы */
const editButton = document.querySelector('.profile__edit'); /*Кнопка редактирования*/
const closeButton = document.querySelector('#ProfileClosePopup'); /*Кнопка закрытия*/
const nameInput = document.querySelector('#input__popup-name'); /* 1 значение  */
const aboutInput = document.querySelector('#input__popup-about'); /*2 значение */
const nameProfile = document.querySelector('.profile__name'); /* поиск имени */
const aboutProfile = document.querySelector('.profile__about'); /* поиск о себе */
const form = document.querySelector('#form-profile') /* попап по форме */
const saveButton = document.querySelector('#save-popup-profile'); // кнопка сохранения

// форма добавления карточек
const popupCard = document.querySelector('#popup-card'); // форма
const cardOpenButton = document.querySelector('.profile__add'); // кнопка добавления карточки
const cardCloseButton = document.querySelector('#CardClosePopup'); // кнопка закрытия
const inputCardAddName = document.querySelector('#input__popup-CardName'); // 1 значение
const inputCardAddPhoto = document.querySelector('#input__popup-CardImg'); // 2 значение 
const savePopupCard = document.querySelector('#save-popup-card'); // Кнопка сохранения
const formCard = document.querySelector('#form-card');

//template
const cardTemplate = document.querySelector('#templatecard').content; //получаем заготовки для карточек
const cardContainer = document.querySelector('.cards'); //контейнер с карточками

// открываем картинку
const popupBig = document.querySelector('#popupbig'); // попак-картинка
const popupImage = document.querySelector('.popup__image'); // изображение в попапе
const popupFigcaption = document.querySelector('.popup__figcaption'); //подпись изображения

const bigClosePopup = document.querySelector('#ClosePopupBig'); // закрываем большой попап


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

//на весь экран
function bigPopup (photo) {
  photo.addEventListener('click', () => {
    popupImage.src = photo.src;
    popupFigcaption.textContent = photo.alt;
    popupImage.alt = photo.alt;
    openPopup(popupBig);
  });
}

bigClosePopup.addEventListener('click', function () {
  closePopup(popupBig)
})

// открытие попапов
const openPopup = (popup) => {
  popup.classList.add('popup_opened');
  popup.addEventListener('mousedown', closePopupOverlay);
  document.addEventListener('keydown', closePopupEscape);
}

/* Закрытие popup */
const closePopup = (popup) => {
  popup.classList.remove('popup_opened');
  popup.removeEventListener('mousedown', closePopupOverlay);
  document.removeEventListener('keydown', closePopupEscape);
}

editButton.addEventListener('click', function () {
  nameInput.value = nameProfile.textContent;
  aboutInput.value = aboutProfile.textContent;
  openPopup(popupProfile)
})

closeButton.addEventListener('click', function () {
  closePopup(popupProfile)
})

cardOpenButton.addEventListener('click', function () {
  openPopup(popupCard)
})

cardCloseButton.addEventListener('click', function () {
  closePopup(popupCard)
})


// Редактирование 
function formSubmitHandler(evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  aboutProfile.textContent = aboutInput.value;
  closePopup(popupProfile);
}
form.addEventListener('submit', formSubmitHandler); 

// кнопка лайка
function addlike (card) {
  const buttonLike = card.querySelector('.card__like');
  buttonLike.addEventListener('click', (e) => {
    e.target.classList.toggle('card__like_active');
  });
}

//удаление
function deleteCard (card) {
  const remove = card.querySelector('.card__delete');
  remove.addEventListener('click', (evt) => {
    evt.target.closest('.card').remove();
  });
}

//массив карточек
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



//добавляем карточку
function createCard(Card){
  const newCard = cardTemplate.querySelector('.card').cloneNode(true);
  const cardTitle = newCard.querySelector('.card__title');
  const cardPhoto = newCard.querySelector('.card__photo');
  cardTitle.textContent = Card.name;
  cardPhoto.src = Card.link;
  cardPhoto.alt = Card.name;

  bigPopup(cardPhoto);
  addlike(newCard);
  deleteCard(newCard);
  
  return newCard;
}

initialCards.forEach ((item) => {
  addNewCards(
  createCard(item)
  );
  });

//добавляем на страницу
function addNewCards (element) {
  cardContainer.prepend(element)
}


// добавление на страницу новой карточки
function addCardForSumbitHandler (evt) {
  evt.preventDefault();
  const card = createCard({name: inputCardAddName.value, link: inputCardAddPhoto.value});
  addNewCards (card);
  closePopup(popupCard);
  inputCardAddPhoto.value ='';
  inputCardAddName.value ='';
}
formCard.addEventListener('submit', addCardForSumbitHandler); 


const objects = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}  


const hasInvalidInput = (inputlist) => {
  return inputlist.some((inputElement) => {
    return !inputElement.validity.valid
  });
};

const toggleButtonState=(inputlist, buttonElement, inactiveButtonClass) => {
  if (hasInvalidInput(inputlist)) {
    buttonElement.classList.add(inactiveButtonClass);
    buttonElement.setAttribute('disabled', true);
  } else {
    buttonElement.classList.remove(inactiveButtonClass);
    buttonElement.removeAttribute('disabled');
  }
};

const showInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add('inputErrorClass');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('errorClass');
};


const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove('inputErrorClass');
  errorElement.classList.remove(errorClass);
  errorElement.textContent = "";
};

const checkInput = (formElement, inputElement) => {
  if (inputElement.validity.valid) {
    hideInputError (formElement, inputElement);
  } else {
    showInputError (formElement, inputElement);
  }
}

const setInputListeners=(formElement) => {
  const inputlist = Array.from(formElement.querySelectorAll(objects.inputSelector));
  const buttonElement = formElement.querySelector(objects.submitButtonSelector);

  inputlist.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      checkInput(formElement, inputElement);
      toggleButtonState(inputlist, buttonElement);
    });
    toggleButtonState(inputlist, buttonElement);
  }
  );
};


const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll(objects.formSelector));

formList.forEach(formElement => {
  formElement.addEventListener('submit', (event) => {
    event.preventDefault();
  });
  setInputListeners(formElement);
}
);
};

enableValidation (objects);