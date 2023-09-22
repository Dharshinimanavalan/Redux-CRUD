import { configureStore } from "@reduxjs/toolkit";
import taskReducer from '../src/slices/taskSlice'

export const store = configureStore({
reducer: {
   tasks:taskReducer
}
}); 

