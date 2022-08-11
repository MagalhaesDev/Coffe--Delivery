import styled from 'styled-components'

export const PresentationContainer = styled.section`
  display: flex;
  margin: 5.75rem 0;
  gap: 3.5rem;

  @media (max-width: 1080px) {
    flex-direction: column-reverse;
    align-items: center;
    gap: 2.5rem;
    margin: 3.5rem 0;
  }

  div {
    @media (max-width: 1080px) {
      text-align: center;
    }

    h1 {
      font-family: 'Baloo 2', sans-serif;

      @media (max-width: 768px) {
        font-size: 2rem;
      }
    }
    p {
      font-size: 1.25rem;
      margin-top: 1rem;

      @media (max-width: 768px) {
        font-size: 0.75rem;
      }
    }

    strong {
      font-weight: normal;
    }
  }

  img {
    width: 29.75rem;
    height: 22.5rem;

    @media (max-width: 768px) {
      width: 23.75rem;
      height: 17.5rem;
    }

    @media (max-width: 425px) {
      width: 17rem;
      height: 13rem;
    }
  }
`

export const ItensPresentation = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 1.5rem 2.25rem;

  margin-top: 5.25rem;

  @media (max-width: 1080px) {
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
  }

  div {
    display: flex;
    gap: 0.75rem;
    text-align: center;
    align-items: center;

    span {
      @media (max-width: 768px) {
        font-size: 0.75rem;
      }
    }

    div {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 2rem;
      height: 2rem;

      color: ${(props) => props.theme.white};

      border-radius: 999px;

      &.first {
        background: ${(props) => props.theme['yellow-900']};
      }

      &.second {
        background: ${(props) => props.theme['gray-700']};
      }

      &.third {
        background: ${(props) => props.theme['yellow-500']};
      }

      &.beedrom {
        background: ${(props) => props.theme['purple-500']};
      }
    }
  }
`
