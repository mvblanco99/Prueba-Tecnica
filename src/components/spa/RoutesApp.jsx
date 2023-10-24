import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './Home'
import About from './About'
import { RoutesContext } from './context/RoutesContext'
import { useContext } from 'react'

const RoutesApp = () => {

  const { routesApp } = useContext(RoutesContext);
  const { home, about} = routesApp

  return (
    <Routes>
      <Route path={home} element={<Home/>}></Route>
      <Route path={about} element={<About/>}></Route>
      <Route path='/*' element={<Navigate to={home}/>}></Route>
    </Routes>
  )
}

export default RoutesApp