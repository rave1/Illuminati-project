import React from 'react'
import Header from './components/header/header'
import Main from './components/Main/main'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AboutUsPage } from './components/AboutUsPage/AboutUsPage.js'
import { ContactUsPage } from './components/ContactUsPage/ContactUsPage.js'
import { PagesPage } from './components/PagesPage/PagesPage.js'
import { ShopPage } from './components/ShopPage/ShopPage.js'
import { Order } from './components/Order/order'
import CartPage from './components/CartPage/CartPage.js'
import { CartProvider } from './components/cart/CartContext.js'
import RegisterForm from './components/RegisterForm/RegisterForm'
import { AuthProvider } from './context/useAuth'
import LoginForm from './components/LoginForm/LoginForm'
import Dropdown from './components/Dropdown/Dropdown'
import OrderTable from './components/DashboardPage/DashboardPage'



function App () {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Routes>
            <Route path='/' element={<CartProvider><Header /></CartProvider>}>
                <Route index element={<Main />} />
                <Route path='/shop' element={<ShopPage />} />
                <Route path='/pages' element={<PagesPage />} />
                <Route path='/aboutus' element={<AboutUsPage />} />
                <Route path='/contactus' element={<ContactUsPage />} />
                <Route path='/cart' element={<CartPage />} />
                <Route path='/cart/order' element={<Order />} />
                <Route path='/dashboard' element={<OrderTable/>}/>
                <Route path='/register' element={<RegisterForm />}/>
                <Route path='/login' element={<LoginForm />}/>
              </Route>
          </Routes>
        </Router>
      </AuthProvider>
  </div>
  )
}

export default App
