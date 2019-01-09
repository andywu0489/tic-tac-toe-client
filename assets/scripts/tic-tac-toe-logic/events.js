const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('../store')
// const gameEvents = require('../games/events')

const onSignUp = (event) => {
  event.preventDefault()
  const formData = getFormFields(event.target)

  api.signUp(formData)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)

  $('form').trigger('reset')
}

const onSignIn = (event) => {
  event.preventDefault()
  const formData = getFormFields(event.target)

  api.signIn(formData)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)

  $('form').trigger('reset')
}

const onChangePassword = (event) => {
  event.preventDefault()
  const formData = getFormFields(event.target)

  api.changePassword(formData)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onChangePasswordFailure)

  $('form').trigger('reset')
}

const onSignOut = (event) => {
  event.preventDefault()

  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)

  $('form').trigger('reset')
}

const turns = []
const board = store.board

const resetBoard = () => {
}

const disableClicks = () => {
  $('#box-1').off('click')
  $('#box-2').off('click')
  $('#box-3').off('click')
  $('#box-4').off('click')
  $('#box-5').off('click')
  $('#box-6').off('click')
  $('#box-7').off('click')
  $('#box-8').off('click')
  $('#box-9').off('click')
}

const onInvalidBoxClick = (event) => {
  $('.win-text').html('<p>Invalid Move!</p>')
}

const invalidMessage = () => {
  $('#box-1').on('click', onInvalidBoxClick)
  $('#box-2').on('click', onInvalidBoxClick)
  $('#box-3').on('click', onInvalidBoxClick)
  $('#box-4').on('click', onInvalidBoxClick)
  $('#box-5').on('click', onInvalidBoxClick)
  $('#box-6').on('click', onInvalidBoxClick)
  $('#box-7').on('click', onInvalidBoxClick)
  $('#box-8').on('click', onInvalidBoxClick)
  $('#box-9').on('click', onInvalidBoxClick)
}

const win = () => {
  if (board[0] === 'x' && board[1] === 'x' && board[2] === 'x') {
    $('.win-text').html('<p>Player X Wins!</p>')
    $('.turn').html('<p>Game Over</p>')
    $('.newGame').show()
    disableClicks()
    invalidMessage()
  } else if (board[3] === 'x' && board[4] === 'x' && board[5] === 'x') {
    $('.win-text').html('<p>Player X Wins!</p>')
    $('.turn').html('<p>Game Over</p>')
    $('.newGame').show()
    disableClicks()
    invalidMessage()
  } else if (board[6] === 'x' && board[7] === 'x' && board[8] === 'x') {
    $('.win-text').html('<p>Player X Wins!</p>')
    $('.turn').html('<p>Game Over</p>')
    $('.newGame').show()
    disableClicks()
    invalidMessage()
  } else if (board[0] === 'x' && board[3] === 'x' && board[6] === 'x') {
    $('.win-text').html('<p>Player X Wins!</p>')
    $('.turn').html('<p>Game Over</p>')
    $('.newGame').show()
    disableClicks()
    invalidMessage()
  } else if (board[1] === 'x' && board[4] === 'x' && board[7] === 'x') {
    $('.win-text').html('<p>Player X Wins!</p>')
    $('.turn').html('<p>Game Over</p>')
    $('.newGame').show()
    disableClicks()
    invalidMessage()
  } else if (board[2] === 'x' && board[5] === 'x' && board[8] === 'x') {
    $('.win-text').html('<p>Player X Wins!</p>')
    $('.turn').html('<p>Game Over</p>')
    $('.newGame').show()
    disableClicks()
    invalidMessage()
  } else if (board[0] === 'x' && board[4] === 'x' && board[8] === 'x') {
    $('.win-text').html('<p>Player X Wins!</p>')
    $('.turn').html('<p>Game Over</p>')
    $('.newGame').show()
    disableClicks()
    invalidMessage()
  } else if (board[2] === 'x' && board[4] === 'x' && board[6] === 'x') {
    $('.win-text').html('<p>Player X Wins!</p>')
    $('.turn').html('<p>Game Over</p>')
    $('.newGame').show()
    disableClicks()
    invalidMessage()
  } else if (board[0] === 'o' && board[1] === 'o' && board[2] === 'o') {
    $('.win-text').html('<p>Player O Wins!</p>')
    $('.turn').html('<p>Game Over</p>')
    $('.newGame').show()
    disableClicks()
    invalidMessage()
  } else if (board[3] === 'o' && board[4] === 'o' && board[5] === 'o') {
    $('.win-text').html('<p>Player O Wins!</p>')
    $('.turn').html('<p>Game Over</p>')
    $('.newGame').show()
    disableClicks()
    invalidMessage()
  } else if (board[6] === 'o' && board[7] === 'o' && board[8] === 'o') {
    $('.win-text').html('<p>Player O Wins!</p>')
    $('.turn').html('<p>Game Over</p>')
    $('.newGame').show()
    disableClicks()
    invalidMessage()
  } else if (board[0] === 'o' && board[3] === 'o' && board[6] === 'o') {
    $('.win-text').html('<p>Player O Wins!</p>')
    $('.turn').html('<p>Game Over</p>')
    $('.newGame').show()
    disableClicks()
    invalidMessage()
  } else if (board[1] === 'o' && board[4] === 'o' && board[7] === 'o') {
    $('.win-text').html('<p>Player O Wins!</p>')
    $('.turn').html('<p>Game Over</p>')
    $('.newGame').show()
    disableClicks()
    invalidMessage()
  } else if (board[2] === 'o' && board[5] === 'o' && board[8] === 'o') {
    $('.win-text').html('<p>Player O Wins!</p>')
    $('.turn').html('<p>Game Over</p>')
    $('.newGame').show()
    disableClicks()
    invalidMessage()
  } else if (board[0] === 'o' && board[4] === 'o' && board[8] === 'o') {
    $('.win-text').html('<p>Player O Wins!</p>')
    $('.turn').html('<p>Game Over</p>')
    $('.newGame').show()
    disableClicks()
    invalidMessage()
  } else if (board[2] === 'o' && board[4] === 'o' && board[6] === 'o') {
    $('.win-text').html('<p>Player O Wins!</p>')
    $('.turn').html('<p>Game Over</p>')
    $('.newGame').show()
    disableClicks()
    invalidMessage()
  }
}

const tie = () => {
  if (turns.length === 9) {
    $('.win-text').html('<p>Draw!</p>')
    $('.turn').html('<p>Game Over</p>')
    $('.newGame').show()
  }
}

const onNewGame = () => {
  $('.container').show()
  $('.turn').show()
  $('.win-text').show()
  // $('.container').gameEvents.onCreateGame()
}

if ((turns.length + 1) % 2 === 0) {
  $('.turn').html('<p>Player O turn</p>')
} else if ((turns.length + 1) % 2 === 1) {
  $('.turn').html('<p>Player X turn</p>')
}

const onBoxOneClick = (event) => {
  turns.push(1)
  if (turns.length % 2 === 1) {
    $('<p>X</p>').appendTo('#one')
  } else {
    $('<p>O</p>').appendTo('#one')
  }
  if ((turns.length + 1) % 2 === 1) {
    $('.turn').html('<p>Player X turn</p>')
    board[0] = 'o'
  } else if ((turns.length + 1) % 2 === 0) {
    $('.turn').html('<p>Player O turn</p>')
    board[0] = 'x'
  }
  tie()
  win()
}

const onBoxTwoClick = (event) => {
  turns.push(2)
  if (turns.length % 2 === 1) {
    $('<p>X</p>').appendTo('#two')
  } else {
    $('<p>O</p>').appendTo('#two')
  }
  if ((turns.length + 1) % 2 === 1) {
    $('.turn').html('<p>Player X turn</p>')
    board[1] = 'o'
  } else if ((turns.length + 1) % 2 === 0) {
    $('.turn').html('<p>Player O turn</p>')
    board[1] = 'x'
  }
  tie()
  win()
}
const onBoxThreeClick = (event) => {
  turns.push(3)
  if (turns.length % 2 === 1) {
    $('<p>X</p>').appendTo('#three')
  } else {
    $('<p>O</p>').appendTo('#three')
  }
  if ((turns.length + 1) % 2 === 1) {
    $('.turn').html('<p>Player X turn</p>')
    board[2] = 'o'
  } else if ((turns.length + 1) % 2 === 0) {
    $('.turn').html('<p>Player O turn</p>')
    board[2] = 'x'
  }
  tie()
  win()
}
const onBoxFourClick = (event) => {
  turns.push(4)
  if (turns.length % 2 === 1) {
    $('<p>X</p>').appendTo('#four')
  } else {
    $('<p>O</p>').appendTo('#four')
  }
  if ((turns.length + 1) % 2 === 1) {
    $('.turn').html('<p>Player X turn</p>')
    board[3] = 'o'
  } else if ((turns.length + 1) % 2 === 0) {
    $('.turn').html('<p>Player O turn</p>')
    board[3] = 'x'
  }
  tie()
  win()
}
const onBoxFiveClick = (event) => {
  turns.push(5)
  if (turns.length % 2 === 1) {
    $('<p>X</p>').appendTo('#five')
  } else {
    $('<p>O</p>').appendTo('#five')
  }
  if ((turns.length + 1) % 2 === 1) {
    $('.turn').html('<p>Player X turn</p>')
    board[4] = 'o'
  } else if ((turns.length + 1) % 2 === 0) {
    $('.turn').html('<p>Player O turn</p>')
    board[4] = 'x'
  }
  tie()
  win()
}
const onBoxSixClick = (event) => {
  turns.push(6)
  if (turns.length % 2 === 1) {
    $('<p>X</p>').appendTo('#six')
  } else {
    $('<p>O</p>').appendTo('#six')
  }
  if ((turns.length + 1) % 2 === 1) {
    $('.turn').html('<p>Player X turn</p>')
    board[5] = 'o'
  } else if ((turns.length + 1) % 2 === 0) {
    $('.turn').html('<p>Player O turn</p>')
    board[5] = 'x'
  }
  tie()
  win()
}
const onBoxSevenClick = (event) => {
  turns.push(7)
  if (turns.length % 2 === 1) {
    $('<p>X</p>').appendTo('#seven')
  } else {
    $('<p>O</p>').appendTo('#seven')
  }
  if ((turns.length + 1) % 2 === 1) {
    $('.turn').html('<p>Player X turn</p>')
    board[6] = 'o'
  } else if ((turns.length + 1) % 2 === 0) {
    $('.turn').html('<p>Player O turn</p>')
    board[6] = 'x'
  }
  tie()
  win()
}
const onBoxEightClick = (event) => {
  turns.push(8)
  if (turns.length % 2 === 1) {
    $('<p>X</p>').appendTo('#eight')
  } else {
    $('<p>O</p>').appendTo('#eight')
  }
  if ((turns.length + 1) % 2 === 1) {
    $('.turn').html('<p>Player X turn</p>')
    board[7] = 'o'
  } else if ((turns.length + 1) % 2 === 0) {
    $('.turn').html('<p>Player O turn</p>')
    board[7] = 'x'
  }
  tie()
  win()
}
const onBoxNineClick = (event) => {
  turns.push(9)
  if (turns.length % 2 === 1) {
    $('<p>X</p>').appendTo('#nine')
  } else {
    $('<p>O</p>').appendTo('#nine')
  }
  if ((turns.length + 1) % 2 === 1) {
    $('.turn').html('<p>Player X turn</p>')
    board[8] = 'o'
  } else if ((turns.length + 1) % 2 === 0) {
    $('.turn').html('<p>Player O turn</p>')
    board[8] = 'x'
  }
  tie()
  win()
}


module.exports = {
  onBoxOneClick,
  onBoxTwoClick,
  onBoxThreeClick,
  onBoxFourClick,
  onBoxFiveClick,
  onBoxSixClick,
  onBoxSevenClick,
  onBoxEightClick,
  onBoxNineClick,
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  board,
  onNewGame,
  resetBoard
}
