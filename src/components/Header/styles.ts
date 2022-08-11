import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  margin: 2rem 0;

  @media (max-width: 768px) {
    img {
      width: 5rem;
    }
  }

  .nav-link-header {
    padding: 0.25rem;
    border-radius: 6px;

    :focus {
      outline: 0;
      box-shadow: 0 0 0 2px ${(props) => props.theme['purple-700']};
    }
  }

  div {
    display: flex;
    gap: 0 0.75rem;

    button,
    & > div,
    .cart-container {
      border: 0;
      padding: 0.625rem;
      border-radius: 6px;
      gap: 0 0.25rem;

      display: flex;
      align-items: center;
      justify-content: center;

      &:first-child {
        background: ${(props) => props.theme['purple-200']};
        color: ${(props) => props.theme['purple-500']};

        @media (max-width: 768px) {
          padding: 0.25rem;
          font-size: 0.75rem;
        }

        span {
          color: ${(props) => props.theme['purple-700']};
        }
      }

      &:last-child {
        background: ${(props) => props.theme['yellow-200']};
        color: ${(props) => props.theme['yellow-900']};
        cursor: pointer;

        position: relative;

        div {
          position: absolute;
          top: -0.5rem;
          right: -0.5rem;
          background: ${(props) => props.theme['yellow-900']};

          width: 1.25rem;
          height: 1.25rem;
          border-radius: 1000px;

          display: flex;
          align-items: center;
          justify-content: center;

          span {
            color: ${(props) => props.theme.white};
            font-size: 0.75rem;
            font-weight: bold;
          }
        }
      }

      &:disabled {
        cursor: not-allowed;
        opacity: 0.7;
      }
    }
  }
`
