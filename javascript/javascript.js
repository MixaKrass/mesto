let popupProfile = document.querySelector('#popup-profile'); /*поиск формы */
let editButton = document.querySelector('.profile__edit'); /*Кнопка редактирования*/
let closeButton = document.querySelector('.popup__closed'); /*Кнопка закрытия*/
let nameInput = document.querySelector('#input__popup-name'); /* 1 значение  */
let aboutInput = document.querySelector('#input__popup-about'); /*2 значение */
let nameProfile = document.querySelector('.profile__name'); /* поиск имени */
let aboutProfile = document.querySelector('.profile__about'); /* поиск о себе */
let form = document.querySelector('#form-profile') /* попап по форме */
let SaveButton = document.querySelector('#save-popup-profile'); // кнопка сохранения

// форма добавления карточек
let popupCard = document.querySelector('#popup-card'); // форма
let CardOpenButton = document.querySelector('.profile__add'); // кнопка добавления карточки
let CardCloseButton = document.querySelector('.popup__closed'); // кнопка закрытия
let CardInputName = document.querySelector('#input__popup-CardName'); // 1 значение
let CardInputImg = document.querySelector('#input__popup-CardImg'); // 2 значение 
let SavePopupCard = document.querySelector('#save-popup-card'); // Кнопка сохранения
let formCard = document.querySelector('#form-card');
//template


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

СardOpenButton.addEventListener('click', function () {
  openPopup(popupCard)
})

CardCloseButton.addEventListener('click', function () {
  closePopup(popupCard)
})




// функция закрытия новая

/*
editButton.addEventListener('click', editProfile);
CardOpenButton.addEventListener('click', () => openPopup(popupCard));
formCard.addEventListener('sumbit', addcardform);
form.addEventListener('sumbit', formSubmitHandler);


// форма добавления карточки


/*
// кнопка лайка
function like (card) {
  let buttonLike = card.querySelector('.card__like');
  buttonLike.addEventListener('click', (e) => {
    e.target.classList.toggle('card__like_active');
  });
}


 ..Редактирование 
function formSubmitHandler(evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  aboutProfile.textContent = aboutInput.value;
  closePopup();
}
form.addEventListener('submit', formSubmitHandler); 
editButton.addEventListener('click', openPopup); // открытие 
closeButton.addEventListener('click', closePopup); // закрытие 


function crossclosePopup () {
  closeBTN.forEach(function(btn) {
    btn.addEventListener('click', (x) => 
    closePopup(x.target.closest('.popup')));
  });
}
crossclosePopup();


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


// форма добавления карточки
function addcardform (evt) {
  evt.preventDefault();
  const card = createCard({name: CardInputName.value, link: CardInputImg.value});
  cardsContainer.prepend(card);
  closePopup();
  ardInputNam.value ='';
  CardInputImg.value ='';
}



 // Открытие popup profile
function editProfile() {
  nameInput.value = nameProfile.textContent;
  aboutInput.value = aboutProfile.textContent;
  openPopup();
}

*/