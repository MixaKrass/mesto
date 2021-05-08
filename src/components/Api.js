export default class Api {
  constructor(confing) {
    this._headers = confing.headers
  }

  //получаем список всех карточек
  getInitialCards() {
    return fetch('https://mesto.nomoreparties.co/v1/cohort-23/cards', {
      method: 'GET',
      headers: this._headers
    })
    .then(res => res.ok 
    ? res.json() 
    : Promise.reject(`Ошибка: ${res.status}`)
    )
  }
 

  //получаем информацию пользователя
  getUserInfo() {
    return fetch('https://mesto.nomoreparties.co/v1/cohort-23/users/me', {
      method: 'GET',
      headers: this._headers
    })
    .then(res => res.ok
      ? res.json()
      :Promise.reject(`Ошибка: ${res.status}`)
      )
  }

  //обновляем аватар 
  newAvatar(avatarUrl) {
    const newConfing = {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: avatarUrl['avatar']
      }),
      
    }
    return fetch(`https://mesto.nomoreparties.co/v1/cohort-23/users/me/avatar`, newConfing)
    .then(res => res.ok
      ? res.json()
      : Promise.reject(`Ошибка: ${res.status}`))  
  }

  // удаляем карточку
  removeCard(cardId) {
    const newConfing = {
      headers: this._headers,
      method: 'DELETE',
    }
    return fetch(`https://mesto.nomoreparties.co/v1/cohort-23/cards/${cardId}`, newConfing)
    .then(res => res.ok
      ? res.json()
      : Promise.reject(`Ошибка: ${res.status}`))  
  }

  // ставим лайк 
  putLike(cardId) {
    const newConfing = {
      headers: this._headers,
      method: 'PUT', 
    }
    return fetch(`https://mesto.nomoreparties.co/v1/cohort-23/cards/likes/${cardId}`, newConfing)
    .then(res => res.ok
      ? res.json()
      : Promise.reject(`Ошибка: ${res.status}`))  
  }

  // удаляем лайк
  removeLike(cardId) {
    const newConfing = {
      headers: this._headers,
      method: 'DELETE', 
    }
    return fetch(`https://mesto.nomoreparties.co/v1/cohort-23/cards/likes/${cardId}`, newConfing)
    .then(res => res.ok
      ? res.json()
      : Promise.reject(`Ошибка: ${res.status}`))
  }

  // отправляем информацию 
  patchProfileInfo(data) {
    const newConfing = {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: data['input-name'],
        about: data['input-about']
      }),
    }
    return fetch('https://mesto.nomoreparties.co/v1/cohort-23/users/me', newConfing)
    .then(res => res.ok
      ? res.json()
      : Promise.reject(`Ошибка: ${res.status}`))
  }

  //отправляем информацию о пользователе на сервер
  patchCard(data) {
    const newConfing = {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: data['InputNameCard'],
        link: data['InputImgCard']
      }),
      
  }
  return fetch('https://mesto.nomoreparties.co/v1/cohort-23/cards', newConfing)
    .then(res => res.ok
      ? res.json()
      : Promise.reject(`Ошибка: ${res.status}`))
}
}


