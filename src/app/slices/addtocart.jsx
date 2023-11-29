import { createSlice } from "@reduxjs/toolkit";

export const addToCart = createSlice({
  name: "addToCart",
  initialState: {
    cartData: JSON.parse(localStorage.getItem("cartData"))
      ? JSON.parse(localStorage.getItem("cartData"))
      : [],
  },
  reducers: {
    addToCartFun: (state, action) => {
      let findProduct = state.cartData.findIndex(
        (item) => item.id === action.payload.id
      );
      if (findProduct !== -1) {
        state.cartData[findProduct].qun += 1;
        localStorage.setItem("cartData", JSON.stringify(state.cartData));
      } else {
        state.cartData = [...state.cartData, action.payload];
        localStorage.setItem("cartData", JSON.stringify(state.cartData));
      }
    },
    removeToCart: (state, action) => {
      state.cartData.splice(action.payload, 1);
      localStorage.setItem("cartData", JSON.stringify(state.cartData));
    },
    quantityUpdate: (state, action) => {
      if (action.payload[1] === "plus") {
        state.cartData[action.payload[0]].qun += 1;
        localStorage.setItem("cartData", JSON.stringify(state.cartData));
      } else {
        state.cartData[action.payload].qun -= 1;
        localStorage.setItem("cartData", JSON.stringify(state.cartData));
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCartFun, removeToCart, quantityUpdate } = addToCart.actions;

export default addToCart.reducer;
