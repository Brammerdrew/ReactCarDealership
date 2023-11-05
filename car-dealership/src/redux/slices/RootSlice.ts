import { createSlice } from '@reduxjs/toolkit'

const rootSlice = createSlice({
    name: "root",
    initialState: {
        make: "make",
        model: "model",
        year: "year",
        color:  "color",
        price: "price",
        mileage: "mileage",

    },
    reducers: {
        setMake: (state, action) => { state.make = action.payload },
        setModel: (state, action) => { state.model = action.payload },
        setYear: (state, action) => { state.year = action.payload },
        setColor: (state, action) => { state.color = action.payload },
        setPrice: (state, action) => { state.price = action.payload },
        setMileage: (state, action) => { state.mileage = action.payload },
    }
})

export const reducer = rootSlice.reducer;
export const { setColor, setMake, setMileage, setModel, setPrice, setYear} = rootSlice.actions