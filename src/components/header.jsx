import { NavBar } from './NavBar'
import logo from '../assets/images/logo.svg'

const Header = () => {
    return (
      <header className="flex place-content-between items-center mb-8 bg-white">
        <img src={logo} alt="Logo" />
        <NavBar /> 
      </header>
    )
  }
  
  export default Header
  