import { configureStore } from "@reduxjs/toolkit";
import { Counts, Dark } from "./Slice";

export const store = configureStore({
   reducer:{
    count : Counts,
    dark : Dark
   }
})