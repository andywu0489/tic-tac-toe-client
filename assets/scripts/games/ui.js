'use strict'
const ticTacToeEvents = require('../tic-tac-toe-logic/events')

const onCreateGameSuccess = (responseData) => {
  $('#user-message').text('Successfully Started Game')
  console.log('responseData is:', responseData)
  $('.container').show()
  $('.turn').show()
  $('.win-text').show()
  ticTacToeEvents.resetBoard()
}

const onCreateGameFailure = (error) => {
  $('#user-message').text('Error on create game')
  console.log(error)
}

const onGetGamesSuccess = (responseData) => {
  $('#user-message').text('Successfully got games')
  console.log('responseData is:', responseData)
  console.log(responseData.games)

  $('#content').html('')

  responseData.games.forEach(games => {
    const gamesHTML = (`
      <h4>ID: ${games.id}</h4>
      <p>Cells: ${games.cells}</p>
      <p>Game Over?: ${games.over}</p>
      <p>Player X's ID: ${games.player_x.id}</p>
      <p>Player X's Email: ${games.player_x.email}</p>
      <br>
    `)
    $('#content').append(gamesHTML)
  })
}

const onGetGamesFailure = (error) => {
  $('#user-message').text('Error on get games')
  console.log(error)
}

const onShowGameSuccess = (responseData) => {
  $('#user-message').text('Successfully got examples')
  console.log('responseData is:', responseData)

  const gamesHTML = (`
    <h4>ID: ${responseData.game.id}</h4>
    <p>Cells: ${responseData.game.cells}</p>
    <p>Game Over?: ${responseData.game.over}</p>
    <p>Player X's ID: ${responseData.game.player_x.id}</p>
    <p>Player X's Email: ${responseData.game.player_x.email}</p>
    <p>Total Games Played: ${responseData.Array.length}</p>
    <br>
  `)

  $('#content').html(gamesHTML)
}

const onShowGameFailure = (error) => {
  $('#user-message').text('Error on get games')
  console.log(error)
}

const onUpdateGameSuccess = (responseData) => {
  $('#user-message').text('Successfully updated game')
  console.log('responseData is:', responseData)
}

const onUpdateGameFailure = (error) => {
  $('#user-message').text('Error on update')
  console.log(error)
}
module.exports = {
  onCreateGameSuccess,
  onCreateGameFailure,
  onGetGamesSuccess,
  onGetGamesFailure,
  onShowGameSuccess,
  onShowGameFailure,
  onUpdateGameSuccess,
  onUpdateGameFailure
}
