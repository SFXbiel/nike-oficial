import { TfiSearch } from 'react-icons/tfi'
import { BsHandbag } from 'react-icons/bs'
import "./header.css"
import {useState} from "react"

export function Header() {
    const [isOpenMenu, setisOpenMenu] = useState(false)

    function toggleMenu() {
      setisOpenMenu(!isOpenMenu)
    }
  return (
    <header className="header">
      <div>
        <img
          className="logo-nike"
          src="image/logo-nike.svg"
          alt="logo da Nike"
        />
        <img 
          onClick={toggleMenu}
          className={isOpenMenu ? "riscos-azul" : ""}
          src="image/logo-azul.svg"
          alt="Riscos azul"
        />
      </div>
      <nav className={isOpenMenu ? "nav open" : "nav"}>
        <span className='navIcon'>
          <TfiSearch />
          <BsHandbag />
        </span>

        <div className='navText'>
          <span>MEN</span>
          <span>WOMEN</span>
          <span>SHOP</span>
          <span>LATEST</span>
        </div>
      </nav>
    </header>
  )
}
