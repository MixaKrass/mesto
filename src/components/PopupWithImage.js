import Popup from "./Popup.js";
export default class PopupWithImage extends Popup{
  constructor (popupSelector, popupCard, popupText) {
    super(popupSelector);
    this._popupCard = popupCard;
    this._popupText = popupText;
  }
  
  open(card){
    super.open()
    this._popupCard.src = card.src;
    this._popupCard.alt = card.alt;
    this._popupText.textContent = card.parentNode.querySelector('.card__title').textContent;
  }
}