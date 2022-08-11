import {
  ProductsContainer,
  ProductItem,
  PriceAndCartContainer,
  OutOfStock,
} from './styles'

import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
import { ProductsContext } from '../../../../contexts/ProductsContext'

export function Products() {
  const { products, addProductCart, updateAmountProduct } =
    useContext(ProductsContext)

  function handleAddProductCart(id: number, amount: number) {
    addProductCart(id, amount)
  }

  function handleIncrementAmountProduct(amount: number, id: number) {
    updateAmountProduct(amount + 1, id)
  }

  function handleDecrementAmountProduct(amount: number, id: number) {
    updateAmountProduct(amount - 1, id)
  }

  return (
    <>
      <h2>Nossos cafés</h2>
      <ProductsContainer>
        {products.map((product) => {
          const amountTotal = product.amount + product.amountCart

          return (
            <ProductItem key={product.id}>
              <img src={product.img} alt="Copo de café" />
              <div>
                {product.ingredients.map((ingredient: any) => (
                  <h5 key={ingredient}>{ingredient}</h5>
                ))}
              </div>
              <h2>{product.title}</h2>
              <small>{product.desc}</small>

              <OutOfStock isTrue={product.amountCart === product.stockAmount}>
                Produto fora de estoque
              </OutOfStock>

              <PriceAndCartContainer>
                <div>
                  <p>
                    R$ <span>{product.price}</span>
                  </p>
                </div>
                <div>
                  <button
                    disabled={product.amount <= 1}
                    onClick={() =>
                      handleDecrementAmountProduct(product.amount, product.id)
                    }
                  >
                    <Minus size={14} />
                  </button>
                  <span>
                    {product.amountCart >= product.stockAmount
                      ? '0'
                      : product.amount}
                  </span>
                  <button
                    onClick={() =>
                      handleIncrementAmountProduct(product.amount, product.id)
                    }
                    disabled={amountTotal >= product.stockAmount}
                  >
                    <Plus size={14} />
                  </button>
                </div>
                <button
                  onClick={() =>
                    handleAddProductCart(product.id, product.amount)
                  }
                  disabled={product.amountCart === product.stockAmount}
                >
                  <ShoppingCart size={22} weight="fill" />
                </button>
              </PriceAndCartContainer>
            </ProductItem>
          )
        })}
      </ProductsContainer>
    </>
  )
}
