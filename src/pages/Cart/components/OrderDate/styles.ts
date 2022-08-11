import styled from 'styled-components'

export const OrderDateContainer = styled.section``

export const FormGroup = styled.div`
  & > div:first-child {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 2rem;
    span {
      color: ${(props) => props.theme['yellow-900']};
    }
    h3 {
      font-weight: normal;
      color: #000000;
    }
    p {
      font-size: 0.875rem;
      color: ${(props) => props.theme['gray-800']};
    }
  }
`

export const PaymentMethods = styled.div`
  & > div:first-child {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 2rem;
    span {
      color: ${(props) => props.theme['purple-500']};
    }
    h3 {
      font-weight: normal;
      color: #000000;
    }
    p {
      font-size: 0.875rem;
      color: ${(props) => props.theme['gray-800']};
    }
  }
  & > div:last-child {
    display: flex;
    justify-content: center;
    gap: 0.75rem;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      gap: 0.25rem;
    }
  }
`

export const InputsGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  input {
    height: 2.625rem;
    border-radius: 4px;
    border: 1px solid ${(props) => props.theme['gray-400']};
    font-size: 0.875rem;
    padding: 0.75rem;
    background: ${(props) => props.theme['gray-300']};
    &::placeholder {
      color: ${(props) => props.theme['gray-600']};
    }
  }

  & > div:first-child {
    width: 12.5rem;

    @media (max-width: 425px) {
      width: 100%;
    }
  }

  & > div {
    display: flex;
    gap: 0.875rem;
    input:last-child {
      width: 100%;
    }
  }
`

export const NumberAndComplementContainer = styled.div`
  display: flex;

  div {
    width: 100%;

    input {
      width: 100%;
    }
  }
`

export const DistrictAndCityContainer = styled.div`
  & > div:first-child {
    input {
      width: 100%;
    }
  }

  div:last-child {
    display: flex;
    gap: 1rem;

    & > div:first-child {
      flex-basis: 80%;

      input {
        width: 100%;
      }
    }

    & > div:last-child {
      flex-basis: 20%;

      input {
        width: 100%;
      }
    }
  }
`

interface InputWrapperProps {
  inputInvalid: true | false
}

export const InputWrapper = styled.div<InputWrapperProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  position: relative;

  input {
    ${(props) =>
      props.inputInvalid ? `border-color: red` : `border-color: transparent`}
  }

  > p {
    color: red;
    font-size: 0.75rem;
  }
`

export const FormPayment = styled.div`
  input {
    visibility: hidden;
    appearance: none;
  }

  input:checked + label div {
    background-color: ${(props) => props.theme['purple-200']};
    border-color: ${(props) => props.theme['purple-700']};

    &:hover {
      background-color: ${(props) => props.theme['purple-200']};
    }
  }
`

export const ContentContainer = styled.div`
  cursor: pointer;
  border-radius: 6px;
  border: 2px solid transparent;
  height: 3.1rem;
  width: 12rem;
  background: ${(props) => props.theme['gray-400']};
  color: ${(props) => props.theme['purple-500']};
  transition: background 0.2s;
  display: flex;
  gap: 0.75rem;
  align-items: center;
  padding: 0 1rem;

  &:hover {
    background: ${(props) => props.theme['gray-500']};
  }

  span {
    font-size: 0.75rem;
    color: ${(props) => props.theme['gray-700']};
  }

  @media (max-width: 1024px) {
    width: 11rem;

    span {
      font-size: 0.7rem;
    }
  }
`

export const PaymentError = styled.p`
  display: flex;
  justify-content: center;
  color: red;
  font-size: 0.875rem;
  margin: -0.5rem 0;
`
