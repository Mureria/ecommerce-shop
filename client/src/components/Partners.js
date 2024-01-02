import React from 'react'
import saf from '../assets/mpesa.png'
import airtel from '../assets/airtel.png'
import visa from '../assets/visa.webp'
import lipapay from '../assets/lipapay.webp'

const Partners = () => {
  return (
    <div className='w-full bg-slate-100'>
        <div className=' flex flex-col justify-between max-w-[1200px] py-16 mx-auto px-4 '>
            <h2 className="text-sm md:text-xl  font-bold mb-6">Our Partners</h2>
       
            <div className='flex justify-between'>
            <div>
                <img src={saf} alt='mpesa logo' className='w-[100px] h-full object-contain'/>
            </div>
            <div>
                <img src={airtel} alt='airtel logo' className='w-[100px] h-full object-contain'/>
            </div>
            <div>
                <img src={lipapay} alt='airtel logo' className='w-[100px] h-full object-contain'/>
            </div>
            <div>
                <img src={visa} alt='airtel logo' className='w-[100px] h-full object-contain'/>
            </div>
            <div>
                <img src={airtel} alt='airtel logo' className='w-[100px] h-full object-contain'/>
            </div>
        </div>
       </div>
        
        
    </div>
  )
}

export default Partners