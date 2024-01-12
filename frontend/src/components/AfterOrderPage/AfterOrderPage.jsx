import React from "react";

export const AfterOrderPage = () => {
    return (
          <div className='h-screen flex items-center justify-center flex-col mt-30'>
             <div className='bg-amber-100 w-[1200px] py-8  mx-auto- flex flex-col items-center justify-center drop-shadow-2xl rounded-md'>
              <table className="rounded-md bg-white text-black drop-shadow-lg overflow-hidden w-[900px] m-2">
                <tbody>
                  <tr className=''>
                    <th className='py-3 px-4 text-center'>
                      <span className='text-black text-md self-start'>Dziękujemy za zamówienie</span>
                    </th>
                  </tr>
                </tbody>
              </table>
              <table className="rounded-md bg-white text-black drop-shadow-lg overflow-hidden w-[900px] m-2">
                <tbody>
                  <tr className=''>
                    <th className='py-3 px-4 text-center'>
                      <span className='text-black text-md self-start'>Zapraszamy ponownie</span>
                    </th>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
    )
  }