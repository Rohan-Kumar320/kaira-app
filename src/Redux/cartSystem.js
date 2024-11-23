import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
    cart: [],
    quantity : 0
}

export const cartSystem = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart:(state , actions) => {

            let find = state.cart.findIndex((item) => item.id === actions.payload.id)
            if(find >= 0){

                state.cart[find].quantity += 1;
                toast.success('Successfully Increased Quantity!')

            
            }else{

                let tempVar = {...actions.payload, quantity: 1}
                state.cart.push(tempVar)
                console.log(actions.payload)
                toast.success('Successfully Added!')
            }

        }
    }
})

export const {addToCart} = cartSystem.actions;
export default cartSystem.reducer;