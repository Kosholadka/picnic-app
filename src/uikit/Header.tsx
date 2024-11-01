import { Link } from 'react-router-dom'

import { Input } from './Input'
import en from '../i18n/en.json'
import { NavMenu } from './NavMenu'
import picnicHeaderLogo from '../assets/picnicHeaderLogo.png'
import { useProductContext } from '../contexts/ProductContext/hook'

export const Header = () => {
  const { setSearchItem } = useProductContext()

  return (
    <header className="flex justify-between items-center bg-header">
      <Link to={`/`} onClick={() => setSearchItem('')}>
        <img className="size-16" src={picnicHeaderLogo} alt={en.header.logoAltText} />
      </Link>
      <Input />
      <NavMenu />
    </header>
  )
}
