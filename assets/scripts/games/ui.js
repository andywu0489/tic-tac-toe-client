'use strict'
const store = require('../store')

const onCreateGameSuccess = (responseData) => {
  $('#user-message').text('Successfully Started Game')
  store.game = responseData.game
  $('#content').html('<p></p>')
}

const onCreateGameFailure = () => {
  $('#user-message').text('Error on create game')
}

const onGetGamesSuccess = (responseData) => {
  // $('#user-message').text('Successfully got games')
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
  if ($('#content').is(':empty')) {
    $('#user-message').text('No Games Played Yet')
  } else {
    $('#user-message').text('Successfully got games')
  }
}

const onGetGamesFailure = () => {
  $('#user-message').text('Error on get games')
}

const onShowGameSuccess = (responseData) => {
  $('#user-message').text('Successfully got examples')

  const gamesHTML = (`
    <h4>ID: ${responseData.game.id}</h4>
    <p>Cells: ${responseData.game.cells}</p>
    <p>Game Over?: ${responseData.game.over}</p>
    <p>Player X's ID: ${responseData.game.player_x.id}</p>
    <p>Player X's Email: ${responseData.game.player_x.email}</p>
    <br>
  `)

  $('#content').html(gamesHTML)
}

const onShowGameFailure = () => {
  $('#user-message').text('Error on get games')
}

const onUpdateGameSuccess = (responseData) => {
  $('#user-message').text('Successfully updated game')
  store.game = responseData.game
}

const onUpdateGameFailure = () => {
  $('#user-message').text('Error on update')
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
