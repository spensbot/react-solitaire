import { createSlice } from '@reduxjs/toolkit'

export const generalSlice = createSlice({
  name: 'general',
  initialState: {
    isMobile: false
  },
  reducers: {
    setIsMobile: (state, action) => { state.isMobile = action.payload.isMobile }
  }
})

export const { setIsMobile } = generalSlice.actions

export default generalSlice.reducer