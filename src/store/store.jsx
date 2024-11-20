import { createStore } from "redux";

const initialState = {
  clickedProducts: [], // Store clicked product details
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return {
        ...state,
        clickedProducts: [...state.clickedProducts, action.payload],
      };
    case "REMOVE_PRODUCT":
      return {
        ...state,
        clickedProducts: state.clickedProducts.filter(
          (product) => product.name !== action.payload
        ),
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
