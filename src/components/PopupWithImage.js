import Popup from "./Popup.js";
export default class PopupWithImage extends Popup{
  constructor (popupSelector, popupCard, popupText) {
    super(popupSelector);
    this._popupCard = popupCard;
    this._popupText = popupText;
  }
  
  open(title, link){
    super.open()
    this._popupCard.src = link;
    this._popupCard.alt = title;
    this._popupText.textContent = title;
  }
}