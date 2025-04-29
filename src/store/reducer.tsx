import { ActionTypes } from "./action-types.interface";
import { GlobalState, IProduct } from "./global-state.interface";

let productsArr:IProduct[] = []

const initialState = {
  products: productsArr,
};

const reducer = (state = initialState, action: ActionTypes): GlobalState => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };
    case "ADD_PRODUCT":
      return {
        ...state,
        products: [...state.products, action.payload],
      };
      case "SEARCH_PRODUCT":
      return {
        ...state
      };
    default:
      return state;
  }
};

export default reducer;
