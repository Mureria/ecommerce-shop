import React from 'react'
import saf from '../assets/mpesa.png'
import airtel from '../assets/airtel.png'
import visa from '../assets/visa.webp'
import lipapay from '../assets/lipapay.webp'
import { useTheme } from '../Theme'

const Partners = () => {
    const { isDarkMode } = useTheme();

  return (
    <div className={`w-full ${isDarkMode ? 'bg-[#141414] text-gray-300  ' : 'bg-slate-100 text-[#2b2b2b]'}`}>
        <div className=' flex flex-col items-center md:items-start max-w-[1200px] py-10 mx-auto px-4 '>
            <h2 className="text-2xl font-bold pb-10 md:text-4xl">Our Partners</h2>
       
            <div className='flex flex-col md:flex-row gap-3 justify-between items-center w-full'>
            <div className='relative w-full md:w-40 h-20 p-2 flex justify-center items-center rounded-sm bg-green-700'>
                <img src={saf} alt='mpesa logo' className='w-[100px] object-contain'/>
            </div>
            <div className='w-full md:w-40 h-20 flex justify-center items-center rounded-sm bg-white'>
                <img src={visa} alt='airtel logo' className='w-[100px] h-full object-contain'/>
            </div>
            < div className='w-full md:w-40 h-20 flex justify-center items-center rounded-sm bg-[#f71212b9]'>
                <img src={airtel} alt='airtel logo' className='w-[100px] h-full object-contain'/>
            </div>

            <div className='w-full md:w-40 h-20 flex justify-center items-center rounded-sm bg-white'>
                <img src={lipapay} alt='lipapay logo' className='w-[100px] h-full object-contain'/>
            </div>
        </div>
       </div>
        
        
    </div>
  )
}

export default Partners