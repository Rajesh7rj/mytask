import React, { useState, useEffect } from 'react'
import { ApiContext } from './ApiContext.js'
import axios from 'axios';
function Provider ({children}) {
  const [products, setProducts] = useState([])
  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then((res) => {
        setProducts(res.data)
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])
  return (
    <ApiContext.Provider value={[products, setProducts] }>
      {children}
    </ApiContext.Provider>
  )
}
export default Provider;