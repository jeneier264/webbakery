import {createSlice} from '@reduxjs/toolkit';
const sessionSlice = createSlice({
    name: 'session',
    initialState: {
        bakeware: [],
        //shoppingList: []
    },
    reducers: {
        setBakeware: (state, action) => {
            state.bakeware = action.payload
        }
}})

export const {setBakeware} = sessionSlice.actions;
export default sessionSlice.reducer;