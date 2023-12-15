import React, { useState } from 'react';

export const Order = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    street: '',
    houseNumber: '',
    city: '',
    province: '',
    postalCode: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Order placed:', formData);
  };

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

            <label className="block mb-2" htmlFor="postalCode">Postal Code:</label>
            <input type="text" id="postalCode" name="postalCode" value={formData.postalCode} onChange={handleInputChange} required
              className="w-full px-3 py-2 border bg-white border-gray-300 rounded mb-3 focus:outline-none focus:border-blue-500"
            />

            <label className="block mb-2" htmlFor="houseNumber">House Number:</label>
            <input type="text" id="houseNumber" name="houseNumber" value={formData.houseNumber} onChange={handleInputChange} required
              className="w-full px-3 py-2 border bg-white border-gray-300 rounded mb-3 focus:outline-none focus:border-blue-500"
            />


          </div>

          <button type="submit" className="w-full bg-amber-300 text-black px-4 py-2 rounded mb-4">Submit</button>
        </form>
      </div>
    </div>
  );
};
