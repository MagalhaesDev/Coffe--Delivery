import { Minus, Plus, ShoppingCart, Trash } from 'phosphor-react'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'

import { ProductsContext } from '../../../../contexts/ProductsContext'
import {
  ItensCoffe,
  ItensContainer,
  SelectedItensContainer,
  AmountTotalContainer,
  ButtonFinished,
  EmptyCartContainer,
  UpdateProduct,
} from './styles'

export function SelectedItens() {
  const { cart, products, updateCart, removeProductCart } =
    useContext(ProductsContext)

  const filteredProducts = products.filter((prod) =>
    cart.some((item) => item.id === prod.id),
  )

  const amountTotal = filteredProducts.reduce((acc, item) => {
    const value = item.amountCart * Number(item.price)

    return (acc += value)
  }, 0)

  const total = amountTotal + 3.5

  function handleIncrementAmountCart(id: number) {
    updateCart(id, 'add')
  }

  function handleDecrementAmountCart(id: number) {
    updateCart(id, 'output')
  }

  function handleRemoveProductCart(id: number) {
    removeProductCart(id)
  }

  return (
    <SelectedItensContainer>
      <h2>Cafés selecionados </h2>

      {cart.length > 0 ? (
        <>
          <ItensContainer>
            {filteredProducts.map((item) => (
              <ItensCoffe key={item.id}>
                <img src={item.img} alt="Xícara de café" />
                <div>
                  <p>{item.title}</p>
                  <span>
                    <div>
                      <UpdateProduct
                        disabledUpdate={item.amountCart <= 1}
                        onClick={() => handleDecrementAmountCart(item.id)}
                      >
                        <Minus size={14} />
                      </UpdateProduct>
                      <p>{item.amountCart}</p>
                      <UpdateProduct
                        disabledUpdate={item.amountCart >= item.stockAmount}
                        onClick={() => handleIncrementAmountCart(item.id)}
                      >
                        <Plus size={14} />
                      </UpdateProduct>
                    </div>
                    <button onClick={() => handleRemoveProductCart(item.id)}>
                      <span>
                        <Trash size={16} />
                      </span>
                      <p>REMOVER</p>
                    </button>
                  </span>
                </div>
                <span>
                  <p>R$ {item.price}</p>
                </span>
              </ItensCoffe>
            ))}
          </ItensContainer>

          <AmountTotalContainer>
            <div>
              <h3>Total de itens</h3>
              <p>R$ {amountTotal.toFixed(2)}</p>
            </div>

            <div>
              <h3>Entrega</h3>
              <p>R$ 3.50</p>
            </div>

            <div>
              <h3>Total</h3>
              <p>R$ {total.toFixed(2)}</p>
            </div>

            <ButtonFinished type="submit">CONFIRMAR PEDIDO</ButtonFinished>
          </AmountTotalContainer>
        </>
      ) : (
        <EmptyCartContainer>
          <ShoppingCart size={22} weight="fill" />
          <h2>Carrinho vazio</h2>
        </EmptyCartContainer>
      )}
    </SelectedItensContainer>
  )
}
