export default class Card {
  constructor(templateSelector, object){
    this._templateSelector = templateSelector;
    this._object = object;
  }

  //добавляем карточку
 _createCard(){
  const newCard = this._templateSelector.querySelector('.card').cloneNode(true);
  const cardTitle = newCard.querySelector('.card__title');
  const cardPhoto = newCard.querySelector('.card__photo');
  cardTitle.textContent = this._object.name;
  cardPhoto.src = this._object.link;
  cardPhoto.alt = this._object.name;

  bigPopup(cardPhoto);
  addlike(newCard);
  deleteCard(newCard);
  
  return newCard;
}
}