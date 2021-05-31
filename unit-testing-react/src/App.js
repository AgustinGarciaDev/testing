import React, { useState } from 'react'
import Hijo from './Hijo'

const App = () => {
  const [articulos, setArticulos] = useState([])

  const fetchearApi = async () => {
      fetch('http://apipetshop.herokuapp.com/api/articulos')
      .then(res => res.json())
      .then(data => setArticulos(data.response))
  }

  return (
    <div>
      <h1>Bienvenidos a mi Web</h1>
      {!articulos.length && <h1>NO TENES PRODUCTOS</h1>}
      {articulos && articulos.map(articulo => <li key={Math.random()}>{articulo.nombre}</li>)}
      <button onClick={fetchearApi}>Hacer click</button>
    </div>
  )
}

export default App

