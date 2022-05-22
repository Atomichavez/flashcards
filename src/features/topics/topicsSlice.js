import { createSlice } from '@reduxjs/toolkit'

const initialState = {topics: {}}

export const topicsSlice = createSlice({
  name: 'topics',
  initialState,
  reducers: {
    addTopic: (state, action) => {
      state.topics[action.payload.id] = action.payload
    },
    attachQuiz: (state, action) => {
      state.topics[action.payload.topicId].quizIds.push(action.payload.id)
    }
  }
})

export const selectTopics = (state) => state.topics.topics
export const { addTopic, attachQuiz } = topicsSlice.actions
export default topicsSlice.reducer