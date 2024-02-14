import { createStore } from "redux";
import cartReducers from "../reducres/cartReducers";


export const store = createStore(cartReducers);