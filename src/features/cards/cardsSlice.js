import { createSlice } from '@reduxjs/toolkit'

export const cardsSlice = createSlice({
  name: 'cards',
  initialState: {cards:{}},
  reducers: {
    addCard: (state, action) => {
      state.cards[action.payload.id] = action.payload
    },
    removeCard: (state, action) => {
      delete state.cards[action.payload.id]
    }
  }
})

export const selectCards = state => state.cards
export const {addCard, removeCard} = cardsSlice.actions
export default cardsSlice.reducer
