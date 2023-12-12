import { createSlice } from "@reduxjs/toolkit";

const noteSlice = createSlice({
    name:"noteSlice",
    initialState:{
        notes:[],

    },
    reducers:{
        addNotes:(state,action)=>
        {
            state.notes.push(action.payload);

        },
        deleteNotes:(state,action)=>
        {
            state.notes= state.notes.filter((note)=>note.id!==action.payload)
        },
        resetNotes:(state,action)=>
        {
            state.notes=[];
        }
    }
})
export default noteSlice.reducer;
export const {addNotes,deleteNotes,resetNotes}=noteSlice.actions;