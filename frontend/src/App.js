import React from 'react'
import Header from './components/header/header'
import ProductComponent from './components/product_component/Product_component.js'
import CoffeeCup from './images/Cup.png'

function App () {
  return (
    <div className="App">
      <Header />
      <ProductComponent name='Kawa' price='14.99' image={CoffeeCup}/>
    </div>
  )
}

export default App
