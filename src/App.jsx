
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {

  return (
    <>
      <NavBar/>
      <ItemListContainer greeting={"Welcome to Ale Creations store!"}/>
    </>
  )
}

export default App
