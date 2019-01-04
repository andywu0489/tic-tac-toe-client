const turns = ['']

const onBoxOneClick = (event) => {
  console.log('1 clicked')
  turns.push('one')
  if (turns.length % 2 === 0) {
    $('<p>X</p>').appendTo('#one')
  } else {
    $('<p>O</p>').appendTo('#one')
  }
}

const onBoxTwoClick = (event) => {
  console.log('2 clicked')
  turns.push('two')
  if (turns.length % 2 === 0) {
    $('<p>X</p>').appendTo('#two')
  } else {
    $('<p>O</p>').appendTo('#two')
  }
}
const onBoxThreeClick = (event) => {
  console.log('3 clicked')
  turns.push('three')
  if (turns.length % 2 === 0) {
    $('<p>X</p>').appendTo('#three')
  } else {
    $('<p>O</p>').appendTo('#three')
  }
}
const onBoxFourClick = (event) => {
  console.log('4 clicked')
  turns.push('four')
  if (turns.length % 2 === 0) {
    $('<p>X</p>').appendTo('#four')
  } else {
    $('<p>O</p>').appendTo('#four')
  }
}
const onBoxFiveClick = (event) => {
  console.log('5 clicked')
  turns.push('five')
  if (turns.length % 2 === 0) {
    $('<p>X</p>').appendTo('#five')
  } else {
    $('<p>O</p>').appendTo('#five')
  }
}
const onBoxSixClick = (event) => {
  console.log('6 clicked')
  turns.push('six')
  if (turns.length % 2 === 0) {
    $('<p>X</p>').appendTo('#six')
  } else {
    $('<p>O</p>').appendTo('#six')
  }
}
const onBoxSevenClick = (event) => {
  console.log('7 clicked')
  turns.push('seven')
  if (turns.length % 2 === 0) {
    $('<p>X</p>').appendTo('#seven')
  } else {
    $('<p>O</p>').appendTo('#seven')
  }
}
const onBoxEightClick = (event) => {
  console.log('8 clicked')
  turns.push('eight')
  if (turns.length % 2 === 0) {
    $('<p>X</p>').appendTo('#eight')
  } else {
    $('<p>O</p>').appendTo('#eight')
  }
}
const onBoxNineClick = (event) => {
  console.log('9 clicked')
  turns.push('nine')
  if (turns.length % 2 === 0) {
    $('<p>X</p>').appendTo('#nine')
  } else {
    $('<p>O</p>').appendTo('#nine')
  }
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
