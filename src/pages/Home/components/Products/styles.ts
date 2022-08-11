import styled from 'styled-components'

export const ProductsContainer = styled.section`
  margin-top: 3.375rem;
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  @media (max-width: 1440px) {
    gap: 2rem 5rem;
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 1180px) {
    gap: 2rem 7rem;
    grid-template-columns: repeat(2, auto);
  }

  @media (max-width: 850px) {
    gap: 2rem 0;
    grid-template-columns: repeat(1, auto);
  }
`

export const ProductItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: ${(props) => props.theme['gray-200']};

  padding: 0 1.25rem 1.25rem;

  border-radius: 6px 36px;

  @media (max-width: 850px) {
    width: 20rem;
  }

  img {
    position: relative;
    top: -1.25rem;
  }

  div {
    display: flex;
    gap: 0.5rem;

    h5 {
      background: ${(props) => props.theme['yellow-200']};
      font-weight: bold;
      font-size: 0.625rem;
      padding: 0.25rem 0.5rem;
      color: ${(props) => props.theme['yellow-900']};
    }
  }

  h2 {
    margin-top: 1rem;
    font-size: 1.25rem;
    font-family: 'Baloo 2', sans-serif;

    @media (max-width: 1360px) {
      font-size: 1rem;
    }
  }

  small {
    margin-top: 0.5rem;
    text-align: center;
    color: ${(props) => props.theme['gray-600']};
    font-size: 0.875rem;
  }
`
interface OutOfStockProps {
  isTrue: true | false
}

export const OutOfStock = styled.span<OutOfStockProps>`
  color: red;
  position: relative;
  top: 1rem;
  visibility: ${(props) => (props.isTrue ? 'visible' : 'hidden')};
`

export const PriceAndCartContainer = styled.div`
  margin-top: 2rem;

  display: flex;
  gap: 1rem;
  align-items: center;

  p {
    font-size: 0.75rem;

    span {
      font-size: 1.5rem;
      font-weight: bold;
      font-family: 'Baloo 2', sans-serif;

      @media (max-width: 1440px) {
        font-size: 1.25rem;
      }
    }
  }

  div {
    &:nth-child(2) {
      background: ${(props) => props.theme['gray-400']};
      width: 5rem;
      padding: 0 0.5rem;
      border-radius: 6px;

      display: flex;
      align-items: center;
      justify-content: space-evenly;
      gap: 0.25rem;

      span {
        font-size: 1.25rem;
      }

      button {
        background: ${(props) => props.theme['gray-400']};
        color: ${(props) => props.theme['purple-700']};

        border: none;
        height: 2.5rem;

        cursor: pointer;

        :focus {
          outline: 0;
          box-shadow: 0 0 0 2px ${(props) => props.theme['purple-500']};
        }

        &:disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }
      }
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    border: 0;

    background: ${(props) => props.theme['purple-700']};
    transition: background 0.3s;
    color: ${(props) => props.theme.white};

    padding: 0.5rem;
    border-radius: 6px;

    cursor: pointer;

    &:disabled {
      opacity: 0.8;
      cursor: not-allowed;
      background: ${(props) => props.theme['purple-500']};
    }

    :focus {
      outline: 0;
      box-shadow: 0 0 0 2px ${(props) => props.theme['purple-700']};
    }

    &:hover {
      background: ${(props) => props.theme['purple-500']};
    }
  }
`
