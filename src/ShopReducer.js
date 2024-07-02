//waxa aan manage gareen rabno maxaa waaye waa products iyo total

export const initialState = {

products:[],

total: 0

};

// reducer laba parameters ayuu qaataa midna waa state midna waa action
export const ShopReducer = (state , action) =>{

const {type , payload}=action;

  switch (type) {
// casekeenaa waxaa waaye noogu dar cartiga
   case "ADD_TO_CART" :
    //user markuu dhaho iigu dar cartiga maxaa la qabanaa 
    return{
        ...state,
        products: payload.products
    }
  case "REMOVE_FROM_CART": 
  return{
    ...state,
    products: payload.products
  }

    default: return initialState;

  }


}

export default ShopReducer;



