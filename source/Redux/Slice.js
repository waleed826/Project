import { createSlice } from "@reduxjs/toolkit";
export const counterSlice = createSlice({
    name: 'Counter',
    initialState: {
        counter: 0
    },
    reducers: {
        increment: (state) => {
            state.counter += 1
        },
        decrement: (state) => {
            state.counter -= 1
        },
        addByValue: (state, action) => {
            console.log("🚀 ~ file: Slice.js:19 ~ action:", action)
            console.log("🚀 ~ file: Slice.js:19 ~ type:", action.type)
            state.counter += action.payload
        }
    }

})

export const {increment,decrement,addByValue} = counterSlice.actions
export const Counts = counterSlice.reducer

export const Darkmode = createSlice({
    name:'DarkMode',
    initialState:{
        value : false
    },
    reducers:{
        toggleMode : (state)=>{
            state.value = !state.value
        }
    }
})

export const {toggleMode} = Darkmode.actions
export const Dark = Darkmode.reducer


export const Contacts = createSlice({
    name:'contacts',
    initialState:{
        contacts : []
    },
    reducers:{
        addContact : (state,action) =>{
            const newContact = [...state.contacts, action.payload]
            state.contacts = newContact
        },
        deleteContact : (state,action) => {
            const updatedContacts = state.contacts.filter((val)=> val.id != action.payload)
            state.contacts = updatedContacts
        }
    }
})