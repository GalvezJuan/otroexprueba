import { useState } from 'react'
import './App.css'
import { Search } from './Components/Search'
import { Show } from './Components/Show'
import { History } from './Components/History'

function App() {
  const [country, setCountry] = useState([])
  const [error, setError] =useState(false)

  return (
    <>
      <h1>Buscador de países</h1>
      <Search setCountry={setCountry} setError={setError}/>
      <Show country={country} error={error}/>
      <History country={country.length==1? country[0]: undefined}/>
    </>
  )
}

export default App
