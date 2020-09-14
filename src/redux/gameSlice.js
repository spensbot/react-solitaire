import { createSlice } from '@reduxjs/toolkit'
import { getRandomGame } from '../util/deckUtils'

export const gameSlice = createSlice({
  name: 'game',
  //initialState: getEmptyGame(),
  initialState: getRandomGame(),
  reducers: {
    startNewGame: state => {
      state = getRandomGame()
    },
    drawNext: state => {
      state.drawStacks[0].faceUp.push(state.drawStacks[0].faceDown.pop())  
    },
    drawReset: state => {
      state.drawStacks[0].faceDown = state.drawStacks[0].faceUp.reverse()
      state.drawStacks[0].faceUp = []
    },
    moveCards: (state, action) => {
      const from = action.payload.from
      const to = action.payload.to
      // const count = action.payload.count
      const cards = action.payload.cards

      console.log(cards)

      for (let i=0 ; i<cards.length ; i++){
        state[from.key][from.stackIndex].faceUp.pop()
        state[to.key][to.stackIndex].faceUp.push(cards[i])
      }

      if (from.key === "playStacks") {
        if (state[from.key][from.stackIndex].faceUp.length === 0){
          if (state[from.key][from.stackIndex].faceDown.length !== 0)
            state[from.key][from.stackIndex].faceUp.push(state[from.key][from.stackIndex].faceDown.pop())
        }
      }
    }
  }
})

export const { startNewGame, drawNext, drawReset, moveCards } = gameSlice.actions

export default gameSlice.reducer