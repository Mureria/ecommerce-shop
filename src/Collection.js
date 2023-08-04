import React from 'react'
import Popular from './components/Popular'
import Marquee from "react-fast-marquee";
import Slider from './components/Slider';

const Collection = () => {
  return (
    <>
        <div className='w-full text-xl md:text-4xl'>
            <div className='max-w-[1200px} my-4 mx-auto rounded-md'>
                <div className=''>
                    <div>
                        <Popular/>
                        <Popular/>
                        <Popular/>
                        <div className='max-w-[1440px] my-4 mx-auto py-4 px-4 rounded-md shadow-xl'>
                            <Marquee>
                                <Slider/>
                            </Marquee>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </>
  )
}

export default Collection