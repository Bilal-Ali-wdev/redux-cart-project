import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/cartActions'
const initialState = {
    cartItems: []
};
export const cartReducer=(state=initialState, action) =>{
    if (!state || typeof state !=='object') {
        console.error('Invalid state structure, resetting to initial state');
        return initialState;
    }
    const currentCartItems=Array.isArray(state.cartItems) ? state.cartItems : [];
    switch (action.type){
        case ADD_TO_CART:{
            if(!action.payload || typeof action.payload !== 'object') 
                {
                console.error('ADD_TO_CART: Invalid payload format');
                return { ...state, cartItems: currentCartItems };
            }
            const item=action.payload;
            if (typeof item.id==='undefined') 
                {
                console.error('ADD_TO_CART: Product missing ID');
                return { ...state, cartItems: currentCartItems };
            }
            const existItem=currentCartItems.find(x => 
                x && typeof x === 'object' && x.id === item.id
            );
            if (existItem) 
                {
                return{...state,cartItems: currentCartItems.map(x => {
                        if (!x || typeof x !== 'object') return x;
                        return x.id === existItem.id ? { ...x, qty: (x.qty || 0) + 1 } : x;})
                };
            } else 
                {
                return{...state,cartItems: [...currentCartItems, { ...item, qty: 1 }]};
            }
        }
        case REMOVE_FROM_CART: {
            if (typeof action.payload==='undefined') {
                console.error('REMOVE_FROM_CART: Missing product ID');
                return { ...state, cartItems: currentCartItems };
            }
            return {
                ...state,
                cartItems: currentCartItems.filter(x => 
                    x && typeof x === 'object' && x.id !== action.payload
                )
            };
        } 
        default:
            return state;
    }
};