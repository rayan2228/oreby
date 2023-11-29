import { configureStore } from "@reduxjs/toolkit";
import addToCart from "./slices/addtocart";

export default configureStore({
  reducer: {
    addtocart: addToCart,
  },
});
