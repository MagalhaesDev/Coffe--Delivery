import styled from 'styled-components'

export const CompletedOrderContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6.375rem;

  margin-top: 5rem;

  div {
    width: 100%;
  }

  & > div:last-child {
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 2rem;

    & > div:last-child {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  @media (max-width: 768px) {
    & > div:last-child img {
      width: 25rem;
    }
  }
`

export const MessageOrderContainer = styled.div`
  h2 {
    font-size: 2rem;
    font-weight: bolder;
    line-height: 130%;

    color: ${(props) => props.theme['yellow-900']};
  }

  p {
    font-size: 1.25rem;
    line-height: 130%;

    color: ${(props) => props.theme['gray-800']};
  }

  & > div {
    margin-top: 2.5rem;
    padding: 2.5rem;
    border-radius: 6px 36px 6px 36px;
    position: relative;
    background: ${(props) => props.theme.background};

    display: flex;
    flex-direction: column;
    gap: 2rem;

    &::before {
      content: '';
      position: absolute;
      inset: -1px;
      z-index: -1;
      border-radius: 7px 37px 7px 37px;
      background: linear-gradient(182.89deg, #dbac2c 2.61%, #8047f8 98.76%);
    }
  }
`

type BackgroundVariant = 'purple' | 'yellow500' | 'yellow700'

interface OrderInformationProps {
  variant: BackgroundVariant
}

const backgroundVariants = {
  purple: '#4B2995',
  yellow500: '#DBAC2C',
  yellow700: '#C47F17',
}

export const OrderInformation = styled.div<OrderInformationProps>`
  display: flex;
  gap: 0.75rem;

  & > span {
    border-radius: 9999px;
    width: 2rem;
    height: 2rem;
    padding: 8px;

    display: flex;
    align-items: center;
    justify-content: center;

    color: ${(props) => props.theme.white};
    ${(props) => {
      return `background-color : ${backgroundVariants[props.variant]}`
    }}
  }

  h3 {
    line-height: 130%;
    font-size: 1rem;
    font-weight: 400;

    strong {
      margin-left: 0.25rem;
    }
  }

  div > p {
    font-size: 1rem;
  }
`
