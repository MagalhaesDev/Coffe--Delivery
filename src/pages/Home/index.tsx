import { Presentation } from './components/Presentation'
import { Products } from './components/Products'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Presentation />
      <Products />
    </HomeContainer>
  )
}
