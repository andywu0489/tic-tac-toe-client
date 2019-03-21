'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const events = require('./tic-tac-toe-logic/events')
const gamesEvents = require('./games/events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // $('#box-1').on('click', events.onBoxOneClick)
  // $('#box-2').on('click', events.onBoxTwoClick)
  // $('#box-3').on('click', events.onBoxThreeClick)
  // $('#box-4').on('click', events.onBoxFourClick)
  // $('#box-5').on('click', events.onBoxFiveClick)
  // $('#box-6').on('click', events.onBoxSixClick)
  // $('#box-7').on('click', events.onBoxSevenClick)
  // $('#box-8').on('click', events.onBoxEightClick)
  // $('#box-9').on('click', events.onBoxNineClick)
  $('.records').hide()
  $('#home').on('click', events.onHome)
  gamesEvents.addHandlers()
  $('#sign-up').on('submit', events.onSignUp)
  $('#sign-in').on('submit', events.onSignIn)
  $('#change-password').on('submit', events.onChangePassword)
  $('#sign-out').on('click', events.onSignOut)
  $('#create-game').on('click', events.onNewGame)
})
