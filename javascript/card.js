

export default class Card {
  constructor(cardTemplate, cardData, handleCardClick){
    this._cardTemplate = cardTemplate;
    this._cardData = cardData;
    this._handleCardClick = handleCardClick;
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
    this._handleCardClick.open(photo);
    this._handleCardClick.setEventListeners()
    
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