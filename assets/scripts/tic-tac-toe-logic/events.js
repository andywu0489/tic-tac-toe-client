const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('../store')
const gameEvents = require('../games/events')

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

const board = store.board

// Resets for new game
const onNewGame = () => {
  $('#content').html('')
  let turns = []
  turns = []
  const board = store.board
  const onBoxOneClick = (event) => {
    turns.push(1)
    // places x or o in clicked spaces
    $('#box-1').off('click')
    if (turns.length % 2 === 1) {
      $('#one').html('<p>X</p>')
    } else {
      $('#one').html('<p>O</p>')
    }
    // shows turn user message for player after each click
    if ((turns.length + 1) % 2 === 1) {
      $('.turn').html('<p>Player X turn</p>')
      board[0] = 'o'
    } else if ((turns.length + 1) % 2 === 0) {
      $('.turn').html('<p>Player O turn</p>')
      board[0] = 'x'
    }
    const index = 0
    const value = board[0]
    tie()
    win()
    gameEvents.onUpdateGame(index, value)
  }

  const onBoxTwoClick = (event) => {
    turns.push(2)
    $('#box-2').off('click')
    if (turns.length % 2 === 1) {
      $('#two').html('<p>X</p>')
    } else {
      $('#two').html('<p>O</p>')
    }
    if ((turns.length + 1) % 2 === 1) {
      $('.turn').html('<p>Player X turn</p>')
      board[1] = 'o'
    } else if ((turns.length + 1) % 2 === 0) {
      $('.turn').html('<p>Player O turn</p>')
      board[1] = 'x'
    }
    const index = 1
    const value = board[1]
    tie()
    win()
    gameEvents.onUpdateGame(index, value)
  }
  const onBoxThreeClick = (event) => {
    turns.push(3)
    $('#box-3').off('click')
    if (turns.length % 2 === 1) {
      $('#three').html('<p>X</p>')
    } else {
      $('#three').html('<p>O</p>')
    }
    if ((turns.length + 1) % 2 === 1) {
      $('.turn').html('<p>Player X turn</p>')
      board[2] = 'o'
    } else if ((turns.length + 1) % 2 === 0) {
      $('.turn').html('<p>Player O turn</p>')
      board[2] = 'x'
    }
    const index = 2
    const value = board[2]
    tie()
    win()
    gameEvents.onUpdateGame(index, value)
  }
  const onBoxFourClick = (event) => {
    turns.push(4)
    $('#box-4').off('click')
    if (turns.length % 2 === 1) {
      $('#four').html('<p>X</p>')
    } else {
      $('#four').html('<p>O</p>')
    }
    if ((turns.length + 1) % 2 === 1) {
      $('.turn').html('<p>Player X turn</p>')
      board[3] = 'o'
    } else if ((turns.length + 1) % 2 === 0) {
      $('.turn').html('<p>Player O turn</p>')
      board[3] = 'x'
    }
    const index = 3
    const value = board[3]
    tie()
    win()
    gameEvents.onUpdateGame(index, value)
  }
  const onBoxFiveClick = (event) => {
    turns.push(5)
    $('#box-5').off('click')
    if (turns.length % 2 === 1) {
      $('#five').html('<p>X</p>')
    } else {
      $('#five').html('<p>O</p>')
    }
    if ((turns.length + 1) % 2 === 1) {
      $('.turn').html('<p>Player X turn</p>')
      board[4] = 'o'
    } else if ((turns.length + 1) % 2 === 0) {
      $('.turn').html('<p>Player O turn</p>')
      board[4] = 'x'
    }
    const index = 4
    const value = board[4]
    tie()
    win()
    gameEvents.onUpdateGame(index, value)
  }
  const onBoxSixClick = (event) => {
    turns.push(6)
    $('#box-6').off('click')
    if (turns.length % 2 === 1) {
      $('#six').html('<p>X</p>')
    } else {
      $('#six').html('<p>O</p>')
    }
    if ((turns.length + 1) % 2 === 1) {
      $('.turn').html('<p>Player X turn</p>')
      board[5] = 'o'
    } else if ((turns.length + 1) % 2 === 0) {
      $('.turn').html('<p>Player O turn</p>')
      board[5] = 'x'
    }
    const index = 5
    const value = board[5]
    tie()
    win()
    gameEvents.onUpdateGame(index, value)
  }
  const onBoxSevenClick = (event) => {
    turns.push(7)
    $('#box-7').off('click')
    if (turns.length % 2 === 1) {
      $('#seven').html('<p>X</p>')
    } else {
      $('#seven').html('<p>O</p>')
    }
    if ((turns.length + 1) % 2 === 1) {
      $('.turn').html('<p>Player X turn</p>')
      board[6] = 'o'
    } else if ((turns.length + 1) % 2 === 0) {
      $('.turn').html('<p>Player O turn</p>')
      board[6] = 'x'
    }
    const index = 6
    const value = board[6]
    tie()
    win()
    gameEvents.onUpdateGame(index, value)
  }
  const onBoxEightClick = (event) => {
    turns.push(8)
    $('#box-8').off('click')
    if (turns.length % 2 === 1) {
      $('#eight').html('<p>X</p>')
    } else {
      $('#eight').html('<p>O</p>')
    }
    if ((turns.length + 1) % 2 === 1) {
      $('.turn').html('<p>Player X turn</p>')
      board[7] = 'o'
    } else if ((turns.length + 1) % 2 === 0) {
      $('.turn').html('<p>Player O turn</p>')
      board[7] = 'x'
    }
    const index = 7
    const value = board[7]
    tie()
    win()
    gameEvents.onUpdateGame(index, value)
  }
  const onBoxNineClick = (event) => {
    turns.push(9)
    $('#box-9').off('click')
    if (turns.length % 2 === 1) {
      $('#nine').html('<p>X</p>')
    } else {
      $('#nine').html('<p>O</p>')
    }
    if ((turns.length + 1) % 2 === 1) {
      $('.turn').html('<p>Player X turn</p>')
      board[8] = 'o'
    } else if ((turns.length + 1) % 2 === 0) {
      $('.turn').html('<p>Player O turn</p>')
      board[8] = 'x'
    }
    const index = 8
    const value = board[8]
    tie()
    win()
    gameEvents.onUpdateGame(index, value)
  }
  board[0] = ''
  board[1] = ''
  board[2] = ''
  board[3] = ''
  board[4] = ''
  board[5] = ''
  board[6] = ''
  board[7] = ''
  board[8] = ''
  turns.length = 0
  $('.container').show()
  $('.turn').show()
  $('.win-text').show()
  $('.turn').html('<p>Player X turn</p>')
  $('#box-1').on('click', onBoxOneClick)
  $('#box-2').on('click', onBoxTwoClick)
  $('#box-3').on('click', onBoxThreeClick)
  $('#box-4').on('click', onBoxFourClick)
  $('#box-5').on('click', onBoxFiveClick)
  $('#box-6').on('click', onBoxSixClick)
  $('#box-7').on('click', onBoxSevenClick)
  $('#box-8').on('click', onBoxEightClick)
  $('#box-9').on('click', onBoxNineClick)
  $('#one').html('<p></p>')
  $('#two').html('<p></p>')
  $('#three').html('<p></p>')
  $('#four').html('<p></p>')
  $('#five').html('<p></p>')
  $('#six').html('<p></p>')
  $('#seven').html('<p></p>')
  $('#eight').html('<p></p>')
  $('#nine').html('<p></p>')
  $('.win-text').html('<p></p>')
  $('.invalid-text').hide()

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

  const win = () => {
    if (board[0] === 'x' && board[1] === 'x' && board[2] === 'x') {
      $('.win-text').html('<p>Player X Wins!</p>')
      $('.turn').html('<p>Game Over</p>')
      disableClicks()
      // invalidMessage()
      store.game.over = true
    } else if (board[3] === 'x' && board[4] === 'x' && board[5] === 'x') {
      $('.win-text').html('<p>Player X Wins!</p>')
      $('.turn').html('<p>Game Over</p>')
      disableClicks()
      // invalidMessage()
      store.game.over = true
    } else if (board[6] === 'x' && board[7] === 'x' && board[8] === 'x') {
      $('.win-text').html('<p>Player X Wins!</p>')
      $('.turn').html('<p>Game Over</p>')
      disableClicks()
      // invalidMessage()
      store.game.over = true
    } else if (board[0] === 'x' && board[3] === 'x' && board[6] === 'x') {
      $('.win-text').html('<p>Player X Wins!</p>')
      $('.turn').html('<p>Game Over</p>')
      disableClicks()
      // invalidMessage()
      store.game.over = true
    } else if (board[1] === 'x' && board[4] === 'x' && board[7] === 'x') {
      $('.win-text').html('<p>Player X Wins!</p>')
      $('.turn').html('<p>Game Over</p>')
      disableClicks()
      // invalidMessage()
      store.game.over = true
    } else if (board[2] === 'x' && board[5] === 'x' && board[8] === 'x') {
      $('.win-text').html('<p>Player X Wins!</p>')
      $('.turn').html('<p>Game Over</p>')
      disableClicks()
      // invalidMessage()
      store.game.over = true
    } else if (board[0] === 'x' && board[4] === 'x' && board[8] === 'x') {
      $('.win-text').html('<p>Player X Wins!</p>')
      $('.turn').html('<p>Game Over</p>')
      disableClicks()
      // invalidMessage()
      store.game.over = true
    } else if (board[2] === 'x' && board[4] === 'x' && board[6] === 'x') {
      $('.win-text').html('<p>Player X Wins!</p>')
      $('.turn').html('<p>Game Over</p>')
      disableClicks()
      // invalidMessage()
      store.game.over = true
    } else if (board[0] === 'o' && board[1] === 'o' && board[2] === 'o') {
      $('.win-text').html('<p>Player O Wins!</p>')
      $('.turn').html('<p>Game Over</p>')
      disableClicks()
      // invalidMessage()
      store.game.over = true
    } else if (board[3] === 'o' && board[4] === 'o' && board[5] === 'o') {
      $('.win-text').html('<p>Player O Wins!</p>')
      $('.turn').html('<p>Game Over</p>')
      disableClicks()
      // invalidMessage()
      store.game.over = true
    } else if (board[6] === 'o' && board[7] === 'o' && board[8] === 'o') {
      $('.win-text').html('<p>Player O Wins!</p>')
      $('.turn').html('<p>Game Over</p>')
      disableClicks()
      // invalidMessage()
      store.game.over = true
    } else if (board[0] === 'o' && board[3] === 'o' && board[6] === 'o') {
      $('.win-text').html('<p>Player O Wins!</p>')
      $('.turn').html('<p>Game Over</p>')
      disableClicks()
      // invalidMessage()
      store.game.over = true
    } else if (board[1] === 'o' && board[4] === 'o' && board[7] === 'o') {
      $('.win-text').html('<p>Player O Wins!</p>')
      $('.turn').html('<p>Game Over</p>')
      disableClicks()
      // invalidMessage()
      store.game.over = true
    } else if (board[2] === 'o' && board[5] === 'o' && board[8] === 'o') {
      $('.win-text').html('<p>Player O Wins!</p>')
      $('.turn').html('<p>Game Over</p>')
      disableClicks()
      // invalidMessage()
      store.game.over = true
    } else if (board[0] === 'o' && board[4] === 'o' && board[8] === 'o') {
      $('.win-text').html('<p>Player O Wins!</p>')
      $('.turn').html('<p>Game Over</p>')
      disableClicks()
      // invalidMessage()
      store.game.over = true
    } else if (board[2] === 'o' && board[4] === 'o' && board[6] === 'o') {
      $('.win-text').html('<p>Player O Wins!</p>')
      $('.turn').html('<p>Game Over</p>')
      disableClicks()
      // invalidMessage()
      store.game.over = true
    }
  }

  // logic behind tie
  const tie = () => {
    if (board[0] !== '' && board[1] !== '' && board[2] !== '' && board[3] !== '' && board[4] !== '' && board[5] !== '' && board[6] !== '' && board[7] !== '' && board[8] !== '') {
      $('.win-text').html('<p>Draw!</p>')
      $('.turn').html('<p>Game Over</p>')
      store.game.over = true
    }
  }

  // Initial turn message to player on game start
  if ((turns.length + 1) % 2 === 0) {
    $('.turn').html('<p>Player O turn</p>')
  } else if ((turns.length + 1) % 2 === 1) {
    $('.turn').html('<p>Player X turn</p>')
  }

  // const onInvalidBoxClick = (event) => {
  //   $('.invalid-text').show()
  //   $('.invalid-text').html('<p>Invalid Move!</p>')
  // }
  //
  // const invalidMessage = () => {
  //   $('#box-1').one('click', onInvalidBoxClick)
  //   $('#box-2').one('click', onInvalidBoxClick)
  //   $('#box-3').one('click', onInvalidBoxClick)
  //   $('#box-4').one('click', onInvalidBoxClick)
  //   $('#box-5').one('click', onInvalidBoxClick)
  //   $('#box-6').one('click', onInvalidBoxClick)
  //   $('#box-7').one('click', onInvalidBoxClick)
  //   $('#box-8').one('click', onInvalidBoxClick)
  //   $('#box-9').one('click', onInvalidBoxClick)
  // }
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  board,
  onNewGame
}
