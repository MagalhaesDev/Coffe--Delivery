import { createContext, ReactNode, useReducer } from 'react'

import imgOne from '../assets/express-one.png'
import imgTwo from '../assets/express-two.png'
import imgThree from '../assets/express-three.png'
import imgFour from '../assets/express-four.png'
import imgFive from '../assets/express-five.png'
import imgSix from '../assets/express-six.png'
import imgSeven from '../assets/express-seven.png'
import imgEight from '../assets/express-eight.png'
import imgNine from '../assets/express-nine.png'
import imgTeen from '../assets/express-teen.png'
import imgEleven from '../assets/express-eleven.png'
import imgTwelve from '../assets/express-twelve.png'
import imgThirteen from '../assets/express-thirteen.png'
import imgFourteen from '../assets/express-fourteen.png'
import {
  addNewProductAction,
  removeProductCartAction,
  resetCartAction,
  updateAmountCart,
  updateAmountProductAction,
  updateCartAction,
} from '../reducers/products/action'
import { Cart, Product, productsReducer } from '../reducers/products/reducer'

export const productsItens: Product[] = [
  {
    id: 1,
    img: imgOne,
    title: 'Expresso Tradicional',
    ingredients: ['TRADICIONAL'],
    desc: 'O tradicional café feito com água quente e grãos moídos',
    price: '9.90',
    amount: 1,
    amountCart: 0,
    stockAmount: 9,
  },
  {
    id: 2,
    img: imgTwo,
    title: 'Expresso Americano',
    ingredients: ['TRADICIONAL'],
    desc: 'Expresso diluído, menos intenso que o tradicional',
    price: '7.50',
    amount: 1,
    amountCart: 0,
    stockAmount: 7,
  },
  {
    id: 3,
    img: imgThree,
    title: 'Expresso Cremoso',
    ingredients: ['TRADICIONAL'],
    desc: 'Café expresso tradicional com espuma cremosa',
    price: '7.50',
    amount: 1,
    amountCart: 0,
    stockAmount: 5,
  },
  {
    id: 4,
    img: imgFour,
    title: 'Expresso Gelado',
    ingredients: ['TRADICIONAL', 'GELADO'],
    desc: 'Bebida preparada com café expresso e cubos de gelo',
    price: '8.50',
    amount: 1,
    amountCart: 0,
    stockAmount: 7,
  },
  {
    id: 5,
    img: imgFive,
    title: 'Café com Leite',
    ingredients: ['TRADICIONAL', 'COM LEITE'],
    desc: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: '9.50',
    amount: 1,
    amountCart: 0,
    stockAmount: 8,
  },
  {
    id: 6,
    img: imgSix,
    title: 'Latte',
    ingredients: ['TRADICIONAL', 'COM LEITE'],
    desc: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: '9.50',
    amount: 1,
    amountCart: 0,
    stockAmount: 8,
  },
  {
    id: 7,
    img: imgSeven,
    title: 'Capuccino',
    ingredients: ['TRADICIONAL', 'COM LEITE'],
    desc: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: '9.00',
    amount: 1,
    amountCart: 0,
    stockAmount: 4,
  },
  {
    id: 8,
    img: imgEight,
    title: 'Macchiato',
    ingredients: ['TRADICIONAL', 'COM LEITE'],
    desc: 'Café expresso misturado com um pouco de leite quente e espuma',
    price: '9.00',
    amount: 1,
    amountCart: 0,
    stockAmount: 6,
  },
  {
    id: 9,
    img: imgNine,
    title: 'Mocaccino',
    ingredients: ['TRADICIONAL', 'COM LEITE'],
    desc: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: '9.00',
    amount: 1,
    amountCart: 0,
    stockAmount: 8,
  },
  {
    id: 10,
    img: imgTeen,
    title: 'Chocolate Quente',
    ingredients: ['ESPECIAL', 'COM LEITE'],
    desc: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: '9.99',
    amount: 1,
    amountCart: 0,
    stockAmount: 8,
  },
  {
    id: 11,
    img: imgEleven,
    title: 'Cubano',
    ingredients: ['ESPECIAL', 'ALCOOLICO', 'GELADO'],
    desc: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: '9.99',
    amount: 1,
    amountCart: 0,
    stockAmount: 8,
  },
  {
    id: 12,
    img: imgTwelve,
    title: 'Havaiano',
    ingredients: ['ESPECIAL'],
    desc: 'Bebida adocicada preparada com café e leite de coco',
    price: '9.99',
    amount: 1,
    amountCart: 0,
    stockAmount: 7,
  },
  {
    id: 13,
    img: imgThirteen,
    title: 'Árabe',
    ingredients: ['ESPECIAL'],
    desc: 'Bebida preparada com grãos de café árabe e especiarias',
    price: '9.99',
    amount: 1,
    amountCart: 0,
    stockAmount: 7,
  },
  {
    id: 14,
    img: imgFourteen,
    title: 'Irlandês',
    ingredients: ['ESPECIAL', 'ALCOOLICO'],
    desc: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: '9.99',
    amount: 1,
    amountCart: 0,
    stockAmount: 5,
  },
]

interface ProductsContextType {
  cart: Cart[]
  products: Product[]
  addProductCart: (id: number, amount: number) => void
  updateAmountProduct: (amount: number, id: number) => void
  updateCart: (id: number, type: string) => void
  removeProductCart: (id: number) => void
  resetCart: () => void
}

export const ProductsContext = createContext({} as ProductsContextType)

interface ProductsContextProviderProps {
  children: ReactNode
}

export function ProductsContextProvider({
  children,
}: ProductsContextProviderProps) {
  const [productsState, dispatch] = useReducer(productsReducer, {
    products: productsItens,
    cart: [],
  })

  const { products, cart } = productsState

  function addProductCart(id: number, amount: number) {
    dispatch(addNewProductAction(id))
    dispatch(updateAmountCart(amount, id))
  }

  function updateAmountProduct(amount: number, id: number) {
    dispatch(updateAmountProductAction(amount, id))
  }

  function updateCart(id: number, type: string) {
    dispatch(updateCartAction(id, type))
  }

  function removeProductCart(id: number) {
    dispatch(removeProductCartAction(id))
  }

  function resetCart() {
    dispatch(resetCartAction())
  }

  return (
    <ProductsContext.Provider
      value={{
        cart,
        products,
        addProductCart,
        updateAmountProduct,
        updateCart,
        removeProductCart,
        resetCart,
      }}
    >
      {children}
    </ProductsContext.Provider>
  )
}
