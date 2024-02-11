import './App.css'
import NavBar from './components/NavBar'
import Landing from './pages/Landing'
function App() {

  return (
    <>
      <header className="App-header">
        <NavBar />
      </header>
      <main className="main">
        <Landing />
      </main>
    </>
  )
}

export default App
