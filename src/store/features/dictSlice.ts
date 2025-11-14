import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    appName : '',
}


export const dictSlice = createSlice({
    name:'user',
    initialState,
    reducers: {
        updateAppName:(state,action) => {
            state.appName = action.payload
        },
    }
})

export const {updateAppName} = dictSlice.actions

export default dictSlice.reducer
