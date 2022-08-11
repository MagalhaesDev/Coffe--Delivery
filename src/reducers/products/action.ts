export enum ActionTypes {
  ADD_NEW_PRODUCT = 'ADD_NEW_PRODUCT',
  UPDATE_AMOUNT_CART = 'UPDATE_AMOUNT_CART',
  UPDATE_AMOUNT_PRODUCT = 'UPDATE_AMOUNT_PRODUCT',
  UPDATE_CART = 'UPDATE_CART',
  REMOVE_PRODUCT_CART = 'REMOVE_PRODUCT_CART',
  RESET_CART = 'RESET_CART',
}

export function addNewProductAction(id: number) {
  return {
    type: ActionTypes.ADD_NEW_PRODUCT,
    payload: {
      id,
    },
  }
}

export function updateAmountCart(amount: number, id: number) {
  return {
    type: ActionTypes.UPDATE_AMOUNT_CART,
    payload: {
      amount,
      id,
    },
  }
}

export function updateAmountProductAction(amount: number, id: number) {
  return {
    type: ActionTypes.UPDATE_AMOUNT_PRODUCT,
    payload: {
      amount,
      id,
    },
  }
}

export function updateCartAction(id: number, type: string) {
  return {
    type: ActionTypes.UPDATE_CART,
    payload: {
      type,
      id,
    },
  }
}

export function removeProductCartAction(id: number) {
  return {
    type: ActionTypes.REMOVE_PRODUCT_CART,
    payload: {
      id,
    },
  }
}

export function resetCartAction() {
  return {
    type: ActionTypes.RESET_CART,
  }
}
