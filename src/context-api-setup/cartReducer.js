
export const cartAction = {
   ADD_TO_CART : 'ADD_TO_CART' ,
   REMOVE_FROM_CART : 'REMOVE_FROM_CART',
   INC_QTY : 'INC_QTY',
   DEC_QTY : 'DEC_QTY',
   TOTAL_PRICE: 'TOTAL_PRICE',
}



const  cartReducer = (state,action) => {
    switch(action.type){
        case 'ADD_TO_CART':
            return {...state, cartItems: [...state.cartItems,{...action.payload,qty:1,totalAmount:action.payload.price}]}

        case 'REMOVE_FROM_CART' : 
            return { ...state, cartItems:state.cartItems.filter((c) => c.id !== action.payload.id) }

        case 'DEC_QTY' :
            return { ...state, cartItems:state.cartItems.filter((c)=>
                c.id === action.payload.id ?  (c.qty=action.payload.qty-1) : c.qty)}

        case 'INC_QTY' :
            return { ...state, cartItems:state.cartItems.filter((c)=>
                c.id === action.payload.id ? ( c.qty=action.payload.qty+1)  : c.qty )}

        case 'TOTAL_PRICE' : 
             return { ...state , cartItems : state.cartItems.filter((item)=> 
                        item.id === action.payload.id ? (item.totalAmount = parseInt(action.payload.price) * item.qty) : item.totalAmount)}

    default: return state
}
}

export default cartReducer;