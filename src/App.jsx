import './App.css'
import RoutesApp from './components/spa/RoutesApp'
import RoutesProvider from './components/spa/context/RoutesProvider'

function App() {

  return (
    <>
      <RoutesProvider>
        <RoutesApp/>
      </RoutesProvider>
      
    </>
  )
}

export default App
