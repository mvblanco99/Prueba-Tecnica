import { RoutesContext } from "./RoutesContext";

const routesApp = {
    home : '/',
    about : '/vela',
}

const RoutesProvider = ({children}) => {
  return (
    <RoutesContext.Provider value={{routesApp}}>
        {children}
    </RoutesContext.Provider>
  )
}

export default RoutesProvider