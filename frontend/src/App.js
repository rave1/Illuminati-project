import React from 'react'
import Header from './components/header/header'
import Main from './components/Main/main'
import AppContainer from './components/product_component/ProductsBox.js'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { AboutUsPage } from './components/AboutUsPage/AboutAsPage.js'
import { ContactUsPage } from './components/ContactUsPage/ContactUsPage.js'
import { PagesPage } from './components/PagesPage/PagesPage.js'
import { ShopPage } from './components/ShopPage/ShopPage.js'
import RegisterForm from './components/RegisterForm/RegisterForm'
import { AuthProvider } from './context/useAuth'
import LoginForm from './components/LoginForm/LoginForm'

function App () {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Routes>
              <Route path='/' element={<Header />}>
                <Route index element={<Main />} />
                <Route path='shop' element={<ShopPage />} />
                <Route path='pages' element={<PagesPage />} />
                <Route path='aboutus' element={<AboutUsPage />} />
                <Route path='contactus' element={<ContactUsPage />} />
              </Route>
              <Route path='/register' element={<RegisterForm />}/>
              <Route path='/login' element={<LoginForm />}/>
          </Routes>
        </Router>
      </AuthProvider>
  </div>
  )
}

export default App
