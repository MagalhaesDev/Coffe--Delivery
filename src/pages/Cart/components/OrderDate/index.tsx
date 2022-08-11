import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { useFormContext } from 'react-hook-form'
import {
  FormGroup,
  FormPayment,
  InputWrapper,
  OrderDateContainer,
  PaymentMethods,
  ContentContainer,
  PaymentError,
  InputsGroup,
  NumberAndComplementContainer,
  DistrictAndCityContainer,
} from './styles'

interface ErrorsType {
  errors: {
    [key: string]: {
      message: string
    }
  }
}

export function OrderDate() {
  const { register, formState } = useFormContext()

  const { errors } = formState as unknown as ErrorsType

  return (
    <OrderDateContainer>
      <h2>Complete seu pedido</h2>

      <div>
        <FormGroup>
          <div>
            <span>
              <MapPinLine size={22} />
            </span>
            <div>
              <h3>Endereço de Entrega</h3>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </div>

          <InputsGroup>
            <InputWrapper inputInvalid={!!errors.cep?.message}>
              <input
                type="number"
                className="cep"
                placeholder="CEP"
                {...register('cep')}
              />
              {errors.cep?.message && <p>{errors.cep?.message}</p>}
            </InputWrapper>
            <InputWrapper inputInvalid={!!errors.street?.message}>
              <input type="text" placeholder="Rua" {...register('street')} />
              {errors.street?.message && <p>{errors.street?.message}</p>}
            </InputWrapper>
            <NumberAndComplementContainer>
              <InputWrapper inputInvalid={!!errors.number?.message}>
                <input
                  type="number"
                  placeholder="Número"
                  {...register('number')}
                />
                {errors.number?.message && <p>{errors.number?.message}</p>}
              </InputWrapper>

              <InputWrapper inputInvalid={!!errors.complement?.message}>
                <input
                  type="text"
                  placeholder="Completo"
                  {...register('complement')}
                />
                {errors.complement?.message && (
                  <p>{errors.complement?.message}</p>
                )}
              </InputWrapper>
            </NumberAndComplementContainer>
            <DistrictAndCityContainer>
              <InputWrapper inputInvalid={!!errors.district?.message}>
                <input
                  type="text"
                  placeholder="Bairro"
                  {...register('district')}
                />
                {errors.district?.message && <p>{errors.district?.message}</p>}
              </InputWrapper>

              <div>
                <InputWrapper inputInvalid={!!errors.city?.message}>
                  <input
                    type="text"
                    placeholder="Cidade"
                    {...register('city')}
                  />
                  {errors.city?.message && <p>{errors.city?.message}</p>}
                </InputWrapper>

                <InputWrapper inputInvalid={!!errors.uf?.message}>
                  <input type="text" placeholder="UF" {...register('uf')} />
                  {errors.uf?.message && <p>{errors.uf?.message}</p>}
                </InputWrapper>
              </div>
            </DistrictAndCityContainer>
          </InputsGroup>
        </FormGroup>

        <PaymentMethods>
          <div>
            <span>
              <CurrencyDollar size={22} />
            </span>
            <div>
              <h3>Pagamento</h3>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </div>

          {errors.paymentMethod?.message && (
            <PaymentError>{errors.paymentMethod?.message}</PaymentError>
          )}
          <div>
            <FormPayment>
              <input
                {...register('paymentMethod')}
                id="credit"
                type="radio"
                name="paymentMethod"
                value="credit"
              />
              <label htmlFor="credit">
                <ContentContainer>
                  <CreditCard size={16} />
                  <span>CARTÃO DE CRÉDITO</span>
                </ContentContainer>
              </label>
            </FormPayment>

            <FormPayment>
              <input
                {...register('paymentMethod')}
                type="radio"
                id="debit"
                name="paymentMethod"
                value="debit"
              />
              <label htmlFor="debit">
                <ContentContainer>
                  <Bank size={16} />
                  <span>CARTÃO DE DÉBITO</span>
                </ContentContainer>
              </label>
            </FormPayment>
            <FormPayment>
              <input
                {...register('paymentMethod')}
                type="radio"
                id="money"
                name="paymentMethod"
                value="money"
              />
              <label htmlFor="money">
                <ContentContainer>
                  <Money size={16} />
                  <span>DINHEIRO</span>
                </ContentContainer>
              </label>
            </FormPayment>
          </div>
        </PaymentMethods>
      </div>
    </OrderDateContainer>
  )
}
