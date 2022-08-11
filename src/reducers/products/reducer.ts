import { produce } from 'immer'

import { ActionTypes } from './action'

export interface Product {
  id: number
  title: string
  img: string
  ingredients: string[]
  desc: string
  price: string
  amount: number
  amountCart: number
  stockAmount: number
}

export interface Cart {
  id: number
}

export interface ProductsState {
  products: Product[]
  cart: Cart[]
}

export function productsReducer(state: ProductsState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_PRODUCT: {
      const currentProductIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id,
      )

      if (currentProductIndex >= 0) return state

      return produce(state, (draft) => {
        draft.cart.push({ id: action.payload.id })
      })
    }

    case ActionTypes.UPDATE_AMOUNT_PRODUCT: {
      const currentProductIndex = state.products.findIndex(
        (product) => product.id === action.payload.id,
      )

      if (currentProductIndex < 0) return state

      return produce(state, (draft) => {
        draft.products[currentProductIndex].amount = action.payload.amount
      })
    }

    case ActionTypes.UPDATE_AMOUNT_CART: {
      const currentProductIndex = state.products.findIndex(
        (product) => product.id === action.payload.id,
      )

      if (currentProductIndex < 0) return state

      return produce(state, (draft) => {
        draft.products[currentProductIndex].amountCart += action.payload.amount
        draft.products[currentProductIndex].amount = 1
      })
    }

    case ActionTypes.UPDATE_CART: {
      const currentProductIndex = state.products.findIndex(
        (product) => product.id === action.payload.id,
      )

      if (currentProductIndex < 0) return state

      return produce(state, (draft) => {
        const product = draft.products[currentProductIndex]

        if (action.payload.type === 'add') {
          if (product.amountCart >= product.stockAmount) return state

          product.amountCart += 1
        } else {
          if (product.amountCart === 1) return state

          product.amountCart -= 1
        }
      })
    }

    case ActionTypes.REMOVE_PRODUCT_CART: {
      const currentProductCartIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id,
      )

      const currentProductIndex = state.products.findIndex(
        (product) => product.id === action.payload.id,
      )

      return produce(state, (draft) => {
        if (currentProductCartIndex < 0) return state

        draft.cart.splice(currentProductCartIndex, 1)

        draft.products[currentProductIndex].amountCart = 0
      })
    }

    case ActionTypes.RESET_CART: {
      return produce(state, (draft) => {
        draft.cart = []
        draft.products.map((product) => (product.amountCart = 0))
      })
    }
    default:
      return state
  }
}
