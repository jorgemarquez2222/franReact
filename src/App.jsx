import { useState } from 'react';
import SecondComponent from './components/SecondComponent'

function App() {
  let saludo = 'hola';
  const [saludo2, setSaludo2] = useState('hola2')

  const aumentar = (e) => {
    e.preventDefault()
    saludo = 'pepe'
    setSaludo2('HELLO')
  }

  return <>
    {saludo} Franchesco
    <br />
    {saludo2} Franchesco2
    <br />

    <SecondComponent
      saludo={saludo}
      setSaludo2={setSaludo2}
    />
    <br />
    <button onClick={(e) => aumentar(e)}> Aceptar </button>
  </>
}

export default App