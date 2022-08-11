import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useLocation } from 'react-router-dom'

import motoboyImg from '../../assets/motoboy.png'
import { OrderData } from '../Cart'
import {
  CompletedOrderContainer,
  MessageOrderContainer,
  OrderInformation,
} from './styles'

interface LocationType {
  state: OrderData
}

export function CompletedOrder() {
  const { state } = useLocation() as unknown as LocationType

  let paymentValue = ''

  switch (state.paymentMethod) {
    case 'credit':
      paymentValue = 'Cartão de Crédito'
      break
    case 'debit':
      paymentValue = 'Cartão de Débito'
      break
    case 'money':
      paymentValue = 'Dinheiro'
      break
  }

  return (
    <CompletedOrderContainer>
      <MessageOrderContainer>
        <h2>Uhu! Pedido confimado</h2>
        <p>Agora é so aguardar que logo o café chegará até você</p>
        <div>
          <OrderInformation variant="purple">
            <span>
              <MapPin size={16} weight="fill" />
            </span>
            <div>
              <h3>
                Entrega em
                <strong>
                  {state.street}, {state.number}
                </strong>
              </h3>
              <p>
                {state.district} - <span>{state.city},</span>{' '}
                <span>{state.uf}</span>
              </p>
            </div>
          </OrderInformation>

          <OrderInformation variant="yellow500">
            <span>
              <Timer size={16} weight="fill" />
            </span>
            <div>
              <h3>Previsão de entrega</h3>
              <strong>20 min - 30 min</strong>
            </div>
          </OrderInformation>

          <OrderInformation variant="yellow700">
            <span>
              <CurrencyDollar size={16} weight="fill" />
            </span>
            <div>
              <h3>Pagamento na entrega</h3>
              <strong>{paymentValue}</strong>
            </div>
          </OrderInformation>
        </div>
      </MessageOrderContainer>
      <div>
        <img src={motoboyImg} alt="Homem em cima de uma moto" />
      </div>
    </CompletedOrderContainer>
  )
}
