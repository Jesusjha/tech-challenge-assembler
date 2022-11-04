
import './App.css'
import ImgContextProvider from './context/ImgContext'
import Router from './Router/Router'


function App() {

  return (

    <div className="App">
      <ImgContextProvider>
        <Router />
      </ImgContextProvider>
    </div>
  )
}

export default App