'use strict'
const store = require('../store')

const onSignUpSuccess = (responseData) => {
  console.log(responseData)
  $('#user-message').text('Successfully signed up!')
}

const onSignUpFailure = () => {
  $('#user-message').text('Error on sign up')
}

const onSignInSuccess = (responseData) => {
  console.log('responseData is:', responseData)
  $('#user-message').text('Successfully signed in')
  $('.logged-in').show()
  $('.logged-out').hide()
  store.user = responseData.user
  console.log('Store is:', store)
}

const onSignInFailure = () => {
  $('#user-message').text('Error on sign in')
}

const onChangePasswordSuccess = () => {
  $('#user-message').text('Successfully changed password')
  console.log('Store is:', store)
}

const onChangePasswordFailure = () => {
  $('#user-message').text('Error on change password')
}

const onSignOutSuccess = () => {
  $('#user-message').text('Successfully signed out')
  $('.logged-in').hide()
  $('.logged-out').show()
  $('.container').hide()
  $('.turn').hide()
  $('.win-text').hide()
  console.log('Store is:', store)
  store.user = null
}

const onSignOutFailure = () => {
  $('#user-message').text('Error on sign out')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInFailure,
  onSignInSuccess,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure
}
