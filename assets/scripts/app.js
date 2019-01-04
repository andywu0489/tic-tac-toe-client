'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const events = require('./tic-tac-toe-logic/events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#box-1').one('click', events.onBoxOneClick)
  $('#box-2').one('click', events.onBoxTwoClick)
  $('#box-3').one('click', events.onBoxThreeClick)
  $('#box-4').one('click', events.onBoxFourClick)
  $('#box-5').one('click', events.onBoxFiveClick)
  $('#box-6').one('click', events.onBoxSixClick)
  $('#box-7').one('click', events.onBoxSevenClick)
  $('#box-8').one('click', events.onBoxEightClick)
  $('#box-9').one('click', events.onBoxNineClick)
})
