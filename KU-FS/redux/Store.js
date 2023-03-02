import { configureStore , createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
    name:"Slice",
    initialState:{
        Auth:false,
    },
    reducers:{
        setAuth(state,actions){
            state.Auth = actions.payload
        }
    }
});

const Store = configureStore({reducer:slice.reducer});
const Actions = slice.actions;

export { Store, Actions };