import styled from 'styled-components'

export const SelectedItensContainer = styled.aside`
  display: flex;
  flex-direction: column;
`

export const ItensContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin-top: 1rem;
`

export const ItensCoffe = styled.div`
  display: flex;
  gap: 1.25rem;

  @media (max-width: 425px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }

  img {
    width: 4rem;
    height: 4rem;
  }
  & > div {
    display: flex;
    flex-direction: column;
    span {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      height: 100%;

      div,
      button {
        display: flex;
        gap: 0.25rem;
        align-items: center;
        padding: 0.5rem 0.5rem;
        height: 2rem;
        border: none;
        border-radius: 6px;
        background: ${(props) => props.theme['gray-400']};

        @media (max-width: 456px) {
          padding: 0.5rem 0.25rem;
        }

        span {
          color: ${(props) => props.theme['purple-500']};
          transition: color 0.2s;
          cursor: pointer;
          &:hover {
            color: ${(props) => props.theme['purple-700']};
          }
        }
      }
      button {
        cursor: pointer;
        transition: background 0.2s;
        &:hover {
          background: ${(props) => props.theme['gray-500']};
        }
        p {
          color: ${(props) => props.theme['gray-700']};
          font-size: 0.75rem;
        }
      }
    }
  }
  & > span {
    width: 3.5rem;
    font-weight: bold;
  }
`

export const AmountTotalContainer = styled.div`
  & > div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.75rem;
    h3 {
      font-weight: 400;
      font-size: 0.875rem;
    }
  }
  & > div:last-of-type {
    h3,
    p {
      font-size: 1.25rem;
      font-weight: bold;
    }
  }
`

export const ButtonFinished = styled.button`
  margin-top: 1.5rem;
  width: 100%;
  height: 2.875rem;
  border: 1px solid transparent;
  border-radius: 6px;
  cursor: pointer;
  background: ${(props) => props.theme['yellow-500']};
  color: ${(props) => props.theme.white};
  transition: background 0.3s;
  font-size: 0.875rem;
  font-weight: bold;
  &:hover {
    background: ${(props) => props.theme['yellow-900']};
  }
`

export const EmptyCartContainer = styled.div`
  margin-top: 1rem;
  border-radius: 6px;
  width: 25rem;
  color: ${(props) => props.theme['gray-600']};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  @media (max-width: 1440px) {
    width: 100%;
  }
`

interface UpdateProductProps {
  disabledUpdate: true | false
}

export const UpdateProduct = styled.div<UpdateProductProps>`
  ${(props) =>
    props.disabledUpdate ? `cursor: not-allowed` : `cursor: pointer`}
`
