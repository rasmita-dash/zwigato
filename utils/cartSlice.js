import { createSlice } from "@reduxjs/toolkit";

const cartSlice =createSlice({
    name:'cart',
    initialState:{
        items:[],
    },
    reducers:{
        addItem: (state, action)=>{
            state.items.push(action.payload);
        },
        removeItem: (state, action) =>{
            state.items.removeItem(action.payload);
        },
        clearItem: (state, action) =>{
            state.items.length=0;
        }

    }
})

export const{addItem, removeItem, clearItem} = cartSlice.actions;
export default cartSlice.reducer;