'use strict'
const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('../store')
// const logicevent = require('../tic-tac-toe-logic/events')

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
// const onUpdateGame = (event) => {
//   event.preventDefault()
//   const id = event.target.id
//   console.log(id)
//   console.log(logicevent.board)
//   if (id === 'box-1') {
//     logicevent.onBoxOneClick()
//   } else if (id === 'box-2') {
//     logicevent.onBoxTwoClick()
//   } else if (id === 'box-3') {
//     logicevent.onBoxThreeClick()
//   } else if (id === 'box-4') {
//     logicevent.onBoxFourClick()
//   } else if (id === 'box-5') {
//     logicevent.onBoxFiveClick()
//   } else if (id === 'box-6') {
//     logicevent.onBoxSixClick()
//   } else if (id === 'box-7') {
//     logicevent.onBoxSevenClick()
//   } else if (id === 'box-8') {
//     logicevent.onBoxEightClick()
//   } else if (id === 'box-9') {
//     logicevent.onBoxNineClick()
//   }
//
//   //   const data =
//   //   {
//   //     'game': {
//   //       'cell': {
//   //         'index':
//   //         'value': "x"
//   //       },
//   //       'over': false
//   //     }
//   // }
//   api.updateGame()
//     .then(ui.onUpdateGameSuccess)
//     .catch(ui.onUpdateGameFailure)
// }

const addHandlers = () => {
  $('#create-game').on('submit', onCreateGame)
  $('#get-games').on('submit', onGetGames)
  $('#show-game').on('submit', onShowGame)
}

module.exports = {
  addHandlers,
  onUpdateGame
}
