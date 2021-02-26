let popup = document.querySelector('.popup'); /*поиск формы */
let editButton = document.querySelector('.profile__edit'); /*Кнопка редактирования*/
let closeButton = document.querySelector('.popup__closed'); /*Кнопка закрытия*/
let nameInput = document.querySelector('#input__popup-name'); /* 1 значение  */
let aboutInput = document.querySelector('#input__popup-about'); /*2 значение */
let nameProfile = document.querySelector('.profile__name'); /* поиск имени */
let aboutProfile = document.querySelector('.profile__about'); /* поиск о себе */
let form = document.querySelector('.popup__form') /* попап по форме */

/* Открытие popup */
function openPopup() {
  popup.classList.add('popup_opened');
  nameInput.value = nameProfile.textContent;
  aboutInput.value = aboutProfile.textContent;
}
editButton.addEventListener('click', openPopup);

/* Закрытие popup */
function closePopup() {
  popup.classList.remove('popup_opened');
}
closeButton.addEventListener('click', closePopup);

/* Редактирование */
function formSubmitHandler(evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  aboutProfile.textContent = aboutInput.value;
  closePopup();
}
formElement.addEventListener('submit', formSubmitHandler); 