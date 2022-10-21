import { HeaderContainer } from './styles'
import { Timer, Scroll } from 'phosphor-react'

import logo from '../../assets/logo.svg'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt=""></img>
      <nav>
        <NavLink to="/" title="Timer" end>
          <Timer size={24} />
        </NavLink>
        <NavLink to="history" title="History" end>
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
