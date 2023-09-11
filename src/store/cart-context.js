import { createContext } from "react";

const cartContext = createContext({
    items:[],
    totalAmount: 0,
    addItemToCart: (item) => {},
    removeItemFromCart: (id) => {},
})

export default cartContext;