import { HeaderContainer } from './styles'

import imgLogo from '../../assets/logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { ProductsContext } from '../../contexts/ProductsContext'

export function Header() {
  const { cart } = useContext(ProductsContext)

  const cartLength = cart.length

  return (
    <HeaderContainer>
      <NavLink to="/ " title="Pagina inicial" className="nav-link-header">
        <img src={imgLogo} alt="Copo de cafe ao lado escrito Coffee Delivery" />
      </NavLink>
      <div>
        <div>
          <MapPin size={22} weight="fill" />
          <span>Porto Alegre, RS</span>
        </div>
        <NavLink to="/cart" title="Carrinho" className="cart-container">
          <ShoppingCart size={22} weight="fill" />
          <div>
            <span>{cartLength}</span>
          </div>
        </NavLink>
      </div>
    </HeaderContainer>
  )
}
