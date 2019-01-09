'use strict'
const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('../store')

const onCreateGame = (event) => {
  event.preventDefault()
  const formData = getFormFields(event.target)

  api.createGame(formData)
    .then(ui.onCreateGameSuccess)
    .catch(ui.onCreateGameFailure)
}

const onGetGames = (event) => {
  event.preventDefault()

  api.getGames()
    .then(ui.onGetGamesSuccess)
    .catch(ui.onGetGamesFailure)
}

const onShowGame = (event) => {
  event.preventDefault()
  const formData = getFormFields(event.target)
  api.showGame(formData)
    .then(ui.onShowGameSuccess)
    .catch(ui.onShowGameFailure)
  $('form').trigger('reset')
}

const onUpdateGame = (index, value) => {
  const data =
{
  'game': {
    'cell': {
      'index': index,
      'value': value
    },
    'over': store.game.over
  }
}
  api.updateGame(data)
    .then(ui.onUpdateGameSuccess)
    .catch(ui.onUpdateGameFailure)
}

const addHandlers = () => {
  $('#create-game').on('submit', onCreateGame)
  $('#get-games').on('submit', onGetGames)
  $('#show-game').on('submit', onShowGame)
}

module.exports = {
  addHandlers,
  onUpdateGame
}
