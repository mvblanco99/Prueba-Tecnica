import { NavLink, useLocation } from 'react-router-dom'
import './Navigation.css'
import { RoutesContext } from './context/RoutesContext'
import { useContext } from 'react'

const Navigation = () => {

  const { routesApp } = useContext(RoutesContext);
  const { home, about } = routesApp;  
  const location = useLocation();

  const setActive = (ruta) => {
    return ruta === location.pathname ? 'active' : '' 
  }
  
  return (
    <>
        <header className='header'>
            <nav className='nav'>
                <ul>
                    <li className={`element-nav ${setActive(home)}`}> <NavLink to={home}>Home</NavLink> </li>
                    <li className={`element-nav ${setActive(about)}`}><NavLink to={about}>About</NavLink></li>
                </ul>
            </nav>
      </header>
    </>
  )
}

export default Navigation