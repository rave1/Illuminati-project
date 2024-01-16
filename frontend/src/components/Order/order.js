import React, { useState } from 'react'
import axios from 'axios'
import { useAuth } from '../../context/useAuth'

export const Order = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    street: '',
    house_number: '',
    city: '',
    zip_code: ''
  })
  const { token } = useAuth()

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const orderItems = JSON.parse(localStorage.getItem('orderItems'))
    const orderData = {
      ...formData,
      products_ids: orderItems.map(({ id, quantity }) => ({ id, quantity }))
    }
    try {
      const response = await axios.post(`http://${process.env.REACT_APP_BACKEND}/shop/order/`, orderData, {
        headers: {
          token: token
        }
      })

      console.log('Order placed:', response.data)
      localStorage.removeItem('orderItems')
    } catch (error) {
      console.error('Order placement failed', error)

      if (error.response) {
        console.error('Server responded with:', error.response.data)
      } else if (error.request) {
        console.error('Request was not sent:', error.request)
      } else {
        console.error('Error during request processing:', error.message)
      }
    }
  }

  return (
    <div className='bg-brown h-screen flex items-center text-black justify-center mt-20'>
      <div className='bg-white w-[500px] py-10 mx-auto flex justify-center drop-shadow-2xl rounded-md'>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white shadow-md rounded p-4 grid grid-cols-2 gap-4 mt-4">
          <div>
            <label className="block mb-2" htmlFor="firstName">First Name:</label>
            <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleInputChange} required
              className="w-full px-3 py-2 border bg-white border-gray-300 rounded mb-3 focus:outline-none focus:border-blue-500"
            />

            <label className="block mb-2" htmlFor="phoneNumber">Phone Number:</label>
            <input type="tel" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} required
              className="w-full px-3 py-2 border bg-white  border-gray-300 rounded mb-3 focus:outline-none focus:border-blue-500"
            />

            <label className="block mb-2" htmlFor="city">City:</label>
            <input type="text" id="city" name="city" value={formData.city} onChange={handleInputChange} required
              className="w-full px-3 py-2 border bg-white border-gray-300 rounded mb-3 focus:outline-none focus:border-blue-500"
            />

            <label className="block mb-2" htmlFor="street">Street:</label>
            <input type="text" id="street" name="street" value={formData.street} onChange={handleInputChange} required
              className="w-full px-3 py-2 border bg-white border-gray-300 rounded mb-3 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block mb-2" htmlFor="lastName">Last Name:</label>
            <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleInputChange} required
              className="w-full px-3 py-2 border bg-white border-gray-300 rounded mb-3 focus:outline-none focus:border-blue-500"
            />

            <label className="block mb-2" htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required
              className="w-full px-3 py-2 border bg-white border-gray-300 rounded mb-3 focus:outline-none focus:border-blue-500"
            />

            <label className="block mb-2" htmlFor="postalCode">Zip Code:</label>
            <input type="text" id="zip_code" name="zip_code" value={formData.postalCode} onChange={handleInputChange} required
              className="w-full px-3 py-2 border bg-white border-gray-300 rounded mb-3 focus:outline-none focus:border-blue-500"
            />

            <label className="block mb-2" htmlFor="houseNumber">House Number:</label>
            <input type="text" id="house_number" name="house_number" value={formData.houseNumber} onChange={handleInputChange} required
              className="w-full px-3 py-2 border bg-white border-gray-300 rounded mb-3 focus:outline-none focus:border-blue-500"
            />

          </div>

          <button type="submit" className="w-full bg-amber-300 text-black px-4 py-2 rounded mb-4">Submit</button>
        </form>
      </div>
    </div>
  )
}
