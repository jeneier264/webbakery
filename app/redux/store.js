import {configureStore} from '@reduxjs/toolkit';
import sessionReducer from './reducers/sessionSlice.js';
export default configureStore({
    reducer:{
        session: sessionReducer
    }
})