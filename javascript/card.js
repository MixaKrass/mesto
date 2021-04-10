// открываем картинку
const popupBig = document.querySelector('#popupbig'); // попак-картинка
const popupImage = document.querySelector('.popup__image'); // изображение в попапе
const popupFigcaption = document.querySelector('.popup__figcaption'); //подпись изображения
const bigClosePopup = document.querySelector('#ClosePopupBig'); // закрываем большой попап

export default class Card {
  constructor(cardTemplate, cardData, openPopup, closePopup){
    this._cardTemplate = cardTemplate;
    this._cardData = cardData;
    this._openPopup = openPopup;
    this._closePopup = closePopup;
  }

  //добавляем карточку
 _createCard(){
  const newCard = this._cardTemplate.querySelector('.card').cloneNode(true);
  const cardTitle = newCard.querySelector('.card__title');
  const cardPhoto = newCard.querySelector('.card__photo');
  cardTitle.textContent = this._cardData.name;
  cardPhoto.src = this._cardData.link;
  cardPhoto.alt = this._cardData.name;
  return newCard;
}

_setEventListeners(){
  //на весь экран
  const photo = this._element.querySelector('.card__photo')
  photo.addEventListener('click', () => {
    popupImage.src = photo.src;
    popupFigcaption.textContent = photo.alt;
    popupImage.alt = photo.alt;
    this._openPopup(popupBig);
  });



// кнопка лайка
  const buttonLike = this._element.querySelector('.card__like');
  buttonLike.addEventListener('click', (e) => {
    e.target.classList.toggle('card__like_active');
  });


//удаление
  const remove = this._element.querySelector('.card__delete');
  remove.addEventListener('click', (evt) => {
    evt.target.closest('.card').remove();
  });
}

getCard(){
this._element = this._createCard();
this._setEventListeners();
return this._element;
}
}