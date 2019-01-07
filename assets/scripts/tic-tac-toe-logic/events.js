const turns = []
const board = ['', '', '', '', '', '', '', '', '']

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
  $('#winText').html('<p>Invalid Move!</p>')
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
    console.log('X wins')
    $('#winText').html('<p>Player X Wins!</p>')
    disableClicks()
    invalidMessage()
  } else if (board[3] === 'x' && board[4] === 'x' && board[5] === 'x') {
    console.log('X wins')
    $('#winText').html('<p>Player X Wins!</p>')
    disableClicks()
    invalidMessage()
  } else if (board[6] === 'x' && board[7] === 'x' && board[8] === 'x') {
    console.log('X wins')
    $('#winText').html('<p>Player X Wins!</p>')
    disableClicks()
    invalidMessage()
  } else if (board[0] === 'x' && board[3] === 'x' && board[6] === 'x') {
    console.log('X wins')
    $('#winText').html('<p>Player X Wins!</p>')
    disableClicks()
    invalidMessage()
  } else if (board[1] === 'x' && board[4] === 'x' && board[7] === 'x') {
    console.log('X wins')
    $('#winText').html('<p>Player X Wins!</p>')
    disableClicks()
    invalidMessage()
  } else if (board[2] === 'x' && board[5] === 'x' && board[8] === 'x') {
    console.log('X wins')
    $('#winText').html('<p>Player X Wins!</p>')
    disableClicks()
    invalidMessage()
  } else if (board[0] === 'x' && board[4] === 'x' && board[8] === 'x') {
    console.log('X wins')
    $('#winText').html('<p>Player X Wins!</p>')
    disableClicks()
    invalidMessage()
  } else if (board[2] === 'x' && board[4] === 'x' && board[6] === 'x') {
    console.log('X wins')
    $('#winText').html('<p>Player X Wins!</p>')
    disableClicks()
    invalidMessage()
  } else if (board[0] === 'o' && board[1] === 'o' && board[2] === 'o') {
    console.log('O wins')
    $('#winText').html('<p>Player O Wins!</p>')
    disableClicks()
    invalidMessage()
  } else if (board[3] === 'o' && board[4] === 'o' && board[5] === 'o') {
    console.log('O wins')
    $('#winText').html('<p>Player O Wins!</p>')
    disableClicks()
    invalidMessage()
  } else if (board[6] === 'o' && board[7] === 'o' && board[8] === 'o') {
    console.log('O wins')
    $('#winText').html('<p>Player O Wins!</p>')
    disableClicks()
    invalidMessage()
  } else if (board[0] === 'o' && board[3] === 'o' && board[6] === 'o') {
    console.log('O wins')
    $('#winText').html('<p>Player O Wins!</p>')
    disableClicks()
    invalidMessage()
  } else if (board[1] === 'o' && board[4] === 'o' && board[7] === 'o') {
    console.log('O wins')
    $('#winText').html('<p>Player O Wins!</p>')
    disableClicks()
    invalidMessage()
  } else if (board[2] === 'o' && board[5] === 'o' && board[8] === 'o') {
    console.log('O wins')
    $('#winText').html('<p>Player O Wins!</p>')
    disableClicks()
    invalidMessage()
  } else if (board[0] === 'o' && board[4] === 'o' && board[8] === 'o') {
    console.log('O wins')
    $('#winText').html('<p>Player O Wins!</p>')
    disableClicks()
    invalidMessage()
  } else if (board[2] === 'o' && board[4] === 'o' && board[6] === 'o') {
    console.log('O wins')
    $('#winText').html('<p>Player O Wins!</p>')
    disableClicks()
    invalidMessage()
  }
}

if ((turns.length + 1) % 2 === 0) {
  $('#turn').html('<p>Player O turn</p>')
} else if ((turns.length + 1) % 2 === 1) {
  $('#turn').html('<p>Player X turn</p>')
}

const onBoxOneClick = (event) => {
  turns.push(1)
  console.log(turns)
  if (turns.length % 2 === 1) {
    $('<p>X</p>').appendTo('#one')
  } else {
    $('<p>O</p>').appendTo('#one')
  }
  if ((turns.length + 1) % 2 === 1) {
    $('#turn').html('<p>Player X turn</p>')
    board[0] = 'o'
    console.log(board)
  } else if ((turns.length + 1) % 2 === 0) {
    $('#turn').html('<p>Player O turn</p>')
    board[0] = 'x'
    console.log(board)
  }
  console.log(turns)
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
    $('#turn').html('<p>Player X turn</p>')
    board[1] = 'o'
    console.log(board)
  } else if ((turns.length + 1) % 2 === 0) {
    $('#turn').html('<p>Player O turn</p>')
    board[1] = 'x'
    console.log(board)
  }
  console.log(turns)
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
    $('#turn').html('<p>Player X turn</p>')
    board[2] = 'o'
    console.log(board)
  } else if ((turns.length + 1) % 2 === 0) {
    $('#turn').html('<p>Player O turn</p>')
    board[2] = 'x'
    console.log(board)
  }
  console.log(turns)
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
    $('#turn').html('<p>Player X turn</p>')
    board[3] = 'o'
    console.log(board)
  } else if ((turns.length + 1) % 2 === 0) {
    $('#turn').html('<p>Player O turn</p>')
    board[3] = 'x'
    console.log(board)
  }
  console.log(turns)
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
    $('#turn').html('<p>Player X turn</p>')
    board[4] = 'o'
    console.log(board)
  } else if ((turns.length + 1) % 2 === 0) {
    $('#turn').html('<p>Player O turn</p>')
    board[4] = 'x'
    console.log(board)
  }
  console.log(turns)
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
    $('#turn').html('<p>Player X turn</p>')
    board[5] = 'o'
    console.log(board)
  } else if ((turns.length + 1) % 2 === 0) {
    $('#turn').html('<p>Player O turn</p>')
    board[5] = 'x'
    console.log(board)
  }
  console.log(turns)
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
    $('#turn').html('<p>Player X turn</p>')
    board[6] = 'o'
    console.log(board)
  } else if ((turns.length + 1) % 2 === 0) {
    $('#turn').html('<p>Player O turn</p>')
    board[6] = 'x'
    console.log(board)
  }
  console.log(turns)
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
    $('#turn').html('<p>Player X turn</p>')
    board[7] = 'o'
    console.log(board)
  } else if ((turns.length + 1) % 2 === 0) {
    $('#turn').html('<p>Player O turn</p>')
    board[7] = 'x'
    console.log(board)
  }
  console.log(turns)
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
    $('#turn').html('<p>Player X turn</p>')
    board[8] = 'o'
    console.log(board)
  } else if ((turns.length + 1) % 2 === 0) {
    $('#turn').html('<p>Player O turn</p>')
    board[8] = 'x'
    console.log(board)
  }
  console.log(turns)
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
  onBoxNineClick
}
