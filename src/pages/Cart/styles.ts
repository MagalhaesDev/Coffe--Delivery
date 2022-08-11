import styled from 'styled-components'

export const CartContainer = styled.div`
  margin-top: 2.5rem;
  height: 100vh;

  display: flex;
  justify-content: space-between;
  gap: 2rem;
  section > div > form,
  section > div > div,
  aside > div {
    background: ${(props) => props.theme['gray-200']};
    padding: 2.5rem;

    @media (max-width: 425px) {
      padding: 1rem;
    }
  }
  section > div > form,
  section > div > div {
    margin-top: 1rem;
  }

  @media (max-width: 1440px) {
    flex-direction: column;
  }
`
