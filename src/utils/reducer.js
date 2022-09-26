export const initialState = {
  cart: [], validStatus: false
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => parseInt(item.price) + amount, 0);

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.item],
      };
    case "REMOVE_FROM_CART":
      let newCart = [...state.cart];

      if (action.index >= 0) {
        newCart.splice(action.index, 1); 
      } else {
        console.warn(`${action.index} does not exist `);
      }
      return { ...state, cart: newCart };

    case "SET_PAYMENT_FORM__VALID_STATUS":
      const validStatus = action.validStatus;

      return { ...state, validStatus: validStatus };
    default:
      return state;
  }
}

export default reducer;
