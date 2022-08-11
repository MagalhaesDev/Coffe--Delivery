import { ItensPresentation, PresentationContainer } from './styles'

import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import imgCoffeeDelivery from '../../../../assets/coffee-delivery.png'

export function Presentation() {
  return (
    <PresentationContainer>
      <div>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>
          Com o <strong>Coffee Delivery</strong> você recebe seu café onde
          estiver, a qualquer hora
        </p>

        <ItensPresentation>
          <div>
            <div className="first">
              <ShoppingCart size={16} weight="fill" />
            </div>
            <span>Compra simples e segura</span>
          </div>

          <div>
            <div className="second">
              <Package size={16} weight="fill" />
            </div>
            <span>Embalagem mantém o café intacto</span>
          </div>

          <div>
            <div className="third">
              <Timer size={16} weight="fill" />
            </div>
            <span>Entrega rápida e rastreada</span>
          </div>

          <div>
            <div className="beedrom">
              <Coffee size={16} weight="fill" />
            </div>
            <span>O café chega fresquinho até você</span>
          </div>
        </ItensPresentation>
      </div>
      <img
        src={imgCoffeeDelivery}
        alt="Copo de café com grãos de café ao fundo"
      />
    </PresentationContainer>
  )
}
