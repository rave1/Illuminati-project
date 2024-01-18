import React from 'react'
import { ContactUsPage } from '../ContactUsPage/ContactUsPage'

export const AboutUsPage = () => {
  return (
        <div className='h-screen flex items-center justify-center flex-col  '>
           <div className='bg-white w-[1200px] py-8  mx-auto- flex justify-center drop-shadow-2xl rounded-md mt-24 mb-10'>
            <table className="rounded-md bg-white text-black drop-shadow-lg overflow-hidden w-[900px]">
              <thead className=''>
                <tr>
                  <th className='bg-amber-100 border text-center px-8 py-4'>
                    <span className='text-black text-md self-start'>O nas</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className=''>
                  <th className='py-3 px-4 text-center'>
                    <span className='text-black text-md self-start'>Witajcie w świecie kawy, gdzie każde ziarno to opowieść 
                    o smaku i aromacie. Jesteśmy pasjonatami, którzy oferują nie tylko kawę, ale prawdziwe doświadczenie 
                    zmysłów. Nasze starannie wyselekcjonowane ziarna są palone z miłością, dostarczając niezapomnianych chwil 
                    relaksu. Wierzymy w zrównoważony rozwój i sprawiedliwe warunki, tworząc etyczną kawową podróż. Dołącz do 
                    nas, odkrywaj różnorodność smaków i ciesz się kawowym rytuałem z nami!</span>
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
          <ContactUsPage/>
        </div>
  )
}
