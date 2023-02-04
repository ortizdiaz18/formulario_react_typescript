import {createSlice, PayloadAction} from '@reduxjs/toolkit'

export interface Texts {
    txt:String[],
    msg:String
}
const initialState:Texts = {
    txt:[],
    msg:''
}
const textSlice = createSlice({
    name:'texts',
    initialState,
    reducers:{
        setTexts:(state, action: PayloadAction<Texts>) =>{
            state.txt= action.payload.txt
            state.msg = action.payload.msg
        }
    }
})

export const {setTexts} = textSlice.actions
export default textSlice.reducer;