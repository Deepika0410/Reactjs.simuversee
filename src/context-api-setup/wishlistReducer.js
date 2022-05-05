 export const wishlistAction ={
    ADD_TO_WISHLIST: 'ADD_TO_WISHLIST',
    REMOVE_FROM_WISHLIST: 'REMOVE_FROM_WISHLIST'
 }

 const wishlistReducer = (state,action) => {
     switch(action.type){
        case 'ADD_TO_WISHLIST' :
            return {...state,copyOfCartItems: [...state.copyOfCartItems , {...action.payload}]}

        case 'REMOVE_FROM_WISHLIST' : 
            return  {...state , copyOfCartItems: state.copyOfCartItems.filter((item) => item.id !==action.payload.id)}
            
     }
 }

 export default wishlistReducer