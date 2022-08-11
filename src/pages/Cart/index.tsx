import { CartContainer } from './styles'
import { OrderDate } from './components/OrderDate'
import { SelectedItens } from './components/SelectedItens'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, FormProvider } from 'react-hook-form'
import * as zod from 'zod'
import { useNavigate } from 'react-router-dom'
import { ProductsContext } from '../../contexts/ProductsContext'
import { useContext } from 'react'

enum PaymentMethods {
  credit = 'credit',
  debit = 'debit',
  money = 'money',
}

const confirmOrderFormValidationSchema = zod.object({
  cep: zod.string().min(1, 'Informe o CEP'),
  street: zod.string().min(1, 'Informe a Rua'),
  number: zod.string().min(1, 'Informe o Número'),
  complement: zod.string(),
  district: zod.string().min(1, 'Informe o Bairro'),
  city: zod.string().min(1, 'Informe a Cidade'),
  uf: zod.string().min(1, 'Informe a UF'),
  paymentMethod: zod.nativeEnum(PaymentMethods, {
    errorMap: () => {
      return { message: 'Informe o método de pagamento' }
    },
  }),
})

export type OrderData = zod.infer<typeof confirmOrderFormValidationSchema>

export type ConfirmOrderFormData = OrderData

export function Cart() {
  const confirmOrderForm = useForm<ConfirmOrderFormData>({
    resolver: zodResolver(confirmOrderFormValidationSchema),
  })

  const { resetCart } = useContext(ProductsContext)

  const { handleSubmit } = confirmOrderForm

  const navigate = useNavigate()

  function handleConfirmOrder(data: ConfirmOrderFormData) {
    resetCart()
    navigate('/finished', { state: data })
  }

  return (
    <FormProvider {...confirmOrderForm}>
      <form onSubmit={handleSubmit(handleConfirmOrder)}>
        <CartContainer>
          <OrderDate />
          <SelectedItens />
        </CartContainer>
      </form>
    </FormProvider>
  )
}
