import React from 'react'
import Header from './components/header/header'
import Main from './components/Main/main'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AboutUsPage } from './components/AboutUsPage/AboutAsPage.js'
import { ContactUsPage } from './components/ContactUsPage/ContactUsPage.js'
import { PagesPage } from './components/PagesPage/PagesPage.js'
import { ShopPage } from './components/ShopPage/ShopPage.js'

function App () {
  return (
    <div className="App">
      <Router>
        <Routes>
            <Route path='/' element={<Header />}>
              <Route index element={<Main />} />
              <Route path='shop' element={<ShopPage />} />
              <Route path='pages' element={<PagesPage />} />
              <Route path='aboutus' element={<AboutUsPage />} />
              <Route path='contactus' element={<ContactUsPage />} />
            </Route>
        </Routes>
      </Router>
  </div>
  )
}

export default App
