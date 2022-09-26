export const initialState = {
    cart: [],
};

export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => parseInt(item.price) + amount, 0);

function reducer(state, action) {
    switch (action.type) {
        case "ADD_TO_CART":
            // logic for adding to basket
            return {
                ...state,
                cart: [...state.cart, action.item],
            };
        case "REMOVE_FROM_CART":
            // logic for removing
            let newCart = [...state.cart]; //cloning basket
            const index = state.basket.findIndex(
                (cartItem) => cartItem.id === action.id // getting index of item to be deleted
            );

            if (index >= 0) {
                newCart.splice(index, 1); //remove 1 element after "index"
            } else {
                console.warn(`${action.id} does not exist `);
            }
            return { ...state, cart: newCart };
        default:
            return state;
    }
}

export default reducer;
