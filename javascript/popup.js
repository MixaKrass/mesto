export default class Popup {
  constructor (popupSelector) {
    this._popupSelector = popupSelector;
  }

  _handleEscClose (evt) {
    if (evt.key === "Escape") {
      this.close()
  }
  }

  _closePopupOverlay (evt) {
    if (evt.target.classList.contains('popup_opened')) {
      this.close()
    }
  }

  setEventListeners() {
    const buttonClose = this._popupSelector.querySelectorAll('.popup__closed');
    buttonClose.addEventListener('click', this.close);
    document.addEventListener('keydown', this._handleEscClose);
    this._popupSelector.addEventListener('mousedown', this._closePopupOverlay);
  }

  open() {
    this._popupSelector.classlist.add('popup_opened');
  }

  close() {
    this._popupSelector.classlist.remove('popup_opened');
  }
}