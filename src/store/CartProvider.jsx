import { useReducer } from "react"
import cartContext from "./cart-context"

const defaultCartState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (lastState, action) => {
    if (action.type === 'ADD_ITEM') {
        const updatedTotalAmount = lastState.totalAmount + action.item.price * action.item.amount;

        const existingCartItemIndex = lastState.items.findIndex(item => item.id === action.item.id)
        const existingCartItem = lastState.items[existingCartItemIndex]
        let updatedItems;

        if (existingCartItem) {
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            };
            updatedItems = [...lastState.items];
            updatedItems[existingCartItemIndex] = updatedItem
        } else {
            updatedItems = lastState.items.concat(action.item);
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }

    if (action.type === 'REMOVE_ITEM') {
        const existingCartItemIndex = lastState.items.findIndex(item => item.id === action.id)
        const existingCartItem = lastState.items[existingCartItemIndex]
        const updatedTotalAmount = lastState.totalAmount - existingCartItem.price
        let updatedItems;

        if(existingCartItem.amount === 1){
            updatedItems = lastState.items.filter( item => item.id !== action.id );
        }else{
            const updatedItem = {...existingCartItem, amount: existingCartItem.amount - 1};  
            updatedItems = [...lastState.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        }

        return{
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }

    return defaultCartState
}

const CartProvider = ({ children }) => {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)

    const addItemToCart = (item) => {
        dispatchCartAction({ type: 'ADD_ITEM', item: item })
    }

    const removeItemFromCart = (id) => {
        dispatchCartAction({ type: 'REMOVE_ITEM', id: id })
    }

    return (
        <cartContext.Provider
            value={{
                items: cartState.items,
                totalAmount: cartState.totalAmount,
                addItemToCart,
                removeItemFromCart
            }}
        >
            {children}
        </cartContext.Provider>
    )
}

export default CartProvider;