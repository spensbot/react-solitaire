const getSortedDeck = () => {
  const sortedDeck = []
  for (let i=0 ; i<52 ; i++) {
    sortedDeck.push(i)
  }
  return sortedDeck
}

const getRandomInt = (max) => {
  const randFloat = Math.random() * max + 1 // Random float between 0 (inclusive), and max + 1 (exclusive)
  return Math.floor(randFloat) // Random int between 0 (inclusive) and max (inclusive)
}

const getRandomDeck = () => {
  const sortedDeck = getSortedDeck()
  const randomDeck = []

  let length = sortedDeck.length

  while (length > 1) {
    const randomIndex = getRandomInt(length - 1)
    randomDeck.push(sortedDeck[randomIndex])

    sortedDeck.splice(randomIndex, 1)
    length = sortedDeck.length
  }

  randomDeck.push(sortedDeck[0])

  return randomDeck
}

const getRandomDeckDecoded = () => {
  const randomDeck = getRandomDeck()
  return randomDeck.map((encoding) => {
    return decodeCard(encoding)
  })
}

const emptyStack = () => ({
  faceUp: [],
  faceDown: []
})

export const getRandomCardDecoded = () => {
  return decodeCard(getRandomInt(51))
}

export const getEmptyGame = () => {
  const gameState = {
    playStacks: [],
    drawStacks: [emptyStack()],
    endStacks: []
  }

  for (let i=0 ; i<7 ; i++) gameState.playStacks.push(emptyStack())

  for (let i=0 ; i<4 ; i++) gameState.endStacks.push(emptyStack())

  return gameState
}

export const getRandomGame = () => {
  const randomDeck = getRandomDeckDecoded()
  const game = getEmptyGame()

  for (let column=0 ; column<7 ; column++){
    const thisColumn = emptyStack();
    for (let n=0 ; n<column ; n++){
      thisColumn.faceDown.push(randomDeck.pop())
    }
    thisColumn.faceUp.push(randomDeck.pop())

    game.playStacks[column] = thisColumn
  }

  game.drawStacks[0].faceDown = randomDeck

  return game
}

// Cards should be between 0 and 51.
// 0-12 = a, 2, 3, ... Q, K
// Clubs, Spades, Diamonds, Hearts
const decodeCard = encoding => {

  if ( encoding < 0 || encoding > 51 ) return false

  const card = {
    encoding: encoding,
    color: 'red',
    suit: 'clubs'
  }
  
  if (encoding < 26) {
    card.color = 'black'
  }

  const suitN = Math.floor(encoding / 13)
  if (suitN === 1) {
    card.suit = 'spades'
  } else if (suitN === 2) {
    card.suit = 'diamonds'
  } else if (suitN === 3) {
    card.suit = 'hearts'
  }

  const valueN = encoding % 13  
  if (valueN === 0) {
    card.value = 'A'
  } else if (valueN === 10) {
    card.value = 'J'
  } else if (valueN === 11) {
    card.value = 'Q'
  } else if (valueN === 12) {
    card.value = 'K'
  } else {
    card.value = valueN + 1
  }

  return card
}

if (typeof require !== 'undefined' && require.main === module) {
  getRandomDeckDecoded().forEach( card => {
    console.log(card)
  })
  
  console.log(getRandomDeckDecoded().length)

  console.log(getRandomGame())
}