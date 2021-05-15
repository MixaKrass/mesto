export default class Card {
  constructor(cardsTemplate, {myId, name, link, likes, owner, _id}, handleCardClick, 
    removeCard, putLike, removeLike ){
    this._cardTemplate = cardsTemplate;
    this._myId = myId;
    this._name = name;
    this._link = link;
    this._likes = likes;
    this._ownerCardId = owner._id;
    this._cardId = _id;
    this._handleCardClick = handleCardClick;
    this._removeCard = removeCard;
    this._putLike = putLike; 
    this._removeLike = removeLike; 
  }

 

  //добавляем карточку (лайки, корзина, всё для своих)
 _createCard(){
  const cardTemp = this._cardTemplate.querySelector('.card').cloneNode(true);
  const cardTitle = cardTemp.querySelector('.card__title');
  const cardPhoto = cardTemp.querySelector('.card__photo');
  cardTitle.textContent = this._name;
  cardPhoto.src = this._link;
  cardPhoto.alt = this._name;

  // счётчик лайков
  cardTemp.querySelector('.card__likes-container').textContent = this._likes.length
  //отображаем активные лайки
  this._likes.forEach(like => {
    if(like._id === this._myId){
      cardTemp.querySelector('.card__like').classList.add('card__like_active')
    }
  })
  // корзина для своих
  if(this._myId === this._ownerCardId) {
    cardTemp.querySelector('.card__delete').classList.add('card__delete_my')
  }
  return cardTemp;
}

setLikesInfo(info) {
  this._element.querySelector('.card__likes-container').textContent = info;
  this._element.querySelector('.card__like').classList.toggle('card__like_active');
};


_setEventListeners(){ 
  // кнопка лайка 
  const buttonLike = this._element.querySelector('.card__like'); 
  buttonLike.addEventListener('click', () => {
    !buttonLike.classList.contains('card__like_active')
    ? this._putLike(this._cardId, this)
    : this._removeLike(this._cardId, this) }
); 
  
  //на весь экран
  const cardPhoto = this._element.querySelector('.card__photo') 
  cardPhoto.addEventListener('click', () => this._handleCardClick(this._name, this._link)); 
 
//удаление 
  const remove = this._element.querySelector('.card__delete'); 
  remove.addEventListener('click', () => { 
    this._removeCard(this._cardId); 
  }); 
} 

getCard() {
  this._element = this._createCard();
  this._setEventListeners();
  return this._element
}
} 

