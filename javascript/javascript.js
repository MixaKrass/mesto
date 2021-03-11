let popupProfile = document.querySelector('#popup-profile'); /*поиск формы */
let editButton = document.querySelector('.profile__edit'); /*Кнопка редактирования*/
let closeButton = document.querySelector('#ProfileClosePopup'); /*Кнопка закрытия*/
let nameInput = document.querySelector('#input__popup-name'); /* 1 значение  */
let aboutInput = document.querySelector('#input__popup-about'); /*2 значение */
let nameProfile = document.querySelector('.profile__name'); /* поиск имени */
let aboutProfile = document.querySelector('.profile__about'); /* поиск о себе */
let form = document.querySelector('#form-profile') /* попап по форме */
let SaveButton = document.querySelector('#save-popup-profile'); // кнопка сохранения

// форма добавления карточек
let popupCard = document.querySelector('#popup-card'); // форма
let CardOpenButton = document.querySelector('.profile__add'); // кнопка добавления карточки
let CardCloseButton = document.querySelector('#CardClosePopup'); // кнопка закрытия
let CardInputName = document.querySelector('#input__popup-CardName'); // 1 значение
let CardInputImg = document.querySelector('#input__popup-CardImg'); // 2 значение 
let SavePopupCard = document.querySelector('#save-popup-card'); // Кнопка сохранения
let formCard = document.querySelector('#form-card');

//template
let cardTemplate = document.querySelector('#templatecard').content; //получаем заготовки для карточек
let cardContainer = document.querySelector('.cards'); //контейнер с карточками



// открытие попапов
function openPopup (popup) {
  popup.classList.add('popup_opened');
}

/* Закрытие popup */
function closePopup (popup) {
  popup.classList.remove('popup_opened');
}

editButton.addEventListener('click', function () {
  nameInput.value = nameProfile.textContent;
  aboutInput.value = aboutProfile.textContent;
  openPopup(popupProfile)
})

closeButton.addEventListener('click', function () {
  closePopup(popupProfile)
})

CardOpenButton.addEventListener('click', function () {
  openPopup(popupCard)
})

CardCloseButton.addEventListener('click', function () {
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
  const Card = createCard({name: inputCardAddName.value, link: inputCardAddPhoto.value});
  addNewCards (Card);
  closePopup(popupCard);
  inputCardAddPhoto.value ='';
  inputCardAddName.value ='';
}
formCard.addEventListener('submit', addCardForSumbitHandler); 


/*
// кнопка лайка
function like (card) {
  let buttonLike = card.querySelector('.card__like');
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







cardContainer.prepend(Card);
*/