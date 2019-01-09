'use strict'
const store = require('../store')

const onCreateGameSuccess = (responseData) => {
  $('#user-message').text('Successfully Started Game')
  console.log('responseData is:', responseData)
  $('.container').show()
  $('.turn').show()
  $('.win-text').show()
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
  $('.turn').html('<p>Player X turn</p>')
  // $('#box-1').on('click')
  // $('#box-2').on('click')
  // $('#box-3').on('click')
  // $('#box-4').on('click')
  // $('#box-5').on('click')
  // $('#box-6').on('click')
  // $('#box-7').on('click')
  // $('#box-8').on('click')
  // $('#box-9').on('click')

  store.game = responseData.game
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
  store.game = responseData.game
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
