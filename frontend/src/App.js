import React from 'react'
import Header from './components/header/header'
import Main from './components/Main/main'
import ProductComponent from './components/product_component/Product_component.js'
import CoffeeCup from './images/Cup.png'

function App () {
  return (
    <div className="App">
      <Header />
      <Main />
      <ProductComponent name='Kawa' price='14.99' image={CoffeeCup}/>
    </div>
  )
}

export default App
