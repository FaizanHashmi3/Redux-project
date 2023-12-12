import { configureStore } from "@reduxjs/toolkit";
import messageSlice from "./slices/messageSlice";
import noteSlice from "./slices/noteSlice";
import productSlice from "./slices/productSlice";
import cartSlice from "./slices/cartSlice";

export default configureStore({
    reducer:{
        messageReducer:messageSlice,
        noteReducer:noteSlice,
        productReducer:productSlice,
        cartReducer:cartSlice
    }
})