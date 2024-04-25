import React from 'react'

const About = () => {
  return (
  <>
    <div className='w-full '>
    <div className='max-w-[1200px] mx-auto my-4 mb-10 px-4'>
        <h1 className='text-2xl font-bold py-4 md:text-4xl'>
          About us
        </h1>
        <p className='text-[#808080] text-base font-medium py-2'>Step Up Your Shoe Game</p>
        <p className='text-[#707070]'>Welcome to our premium footwear ecommerce platform, where luxury meets comfort and style. At ChosenSoles, we are dedicated to providing discerning customers like you with an unparalleled shopping experience for premium shoes that elevate your style and reflect your unique personality.</p>

        <div className='mt-10 space-y-4'>
          <h1 className='text-xl font-medium text-[#808080]'>Our Mission</h1>
          <div className='flex flex-col-reverse md:grid  md:grid-cols-2 gap-10 text-[#707070] tracking-wide leading-8'>
            <div className='flex '>
              <p>Our mission is simple: to curate a meticulously selected collection of premium footwear from top brands around the world. We believe that every step you take should be a statement of sophistication and quality craftsmanship. With this vision in mind, we scour the globe to bring you the finest shoes that blend timeless elegance with modern trends.</p>
            </div>
            <div>
              <img src='https://images.unsplash.com/photo-1565814636199-ae8133055c1c?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' className='h-[300px] w-full object-cover '/>
            </div>
          </div>
        </div>

        <div className='mt-10 space-y-4'>
          <h1 className='text-xl font-medium text-[rgb(128,128,128)]'>Unparalleled Selection</h1>
          <div className='grid md:grid-cols-2 gap-10  text-[#707070] tracking-wide leading-8'>
            <div>
              <img src='https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHNob2UlMjByYWNrfGVufDB8fDB8fHww' alt=''/>
            </div>
            <div className='flex '>
              <p>Discover a world of possibilities with our extensive selection of premium footwear. Whether you're searching for classic leather loafers, sleek sneakers, elegant heels, or rugged boots, we have something to suit every occasion and style preference. With new arrivals added regularly, there's always something fresh and exciting to explore in our collection.</p>
            </div>
          </div>
        </div>

        <div className='mt-10 space-y-4'>
          <h1 className='text-xl font-medium text-[#808080]'>Personalized Service</h1>
          <div className='flex flex-col-reverse md:grid md:grid-cols-2 gap-10  text-[#707070] tracking-wide leading-8'>
            <div className='flex '>
              <p> Customer satisfaction is our top priority. Our dedicated team is here to assist you every step of the way, from expert styling advice to hassle-free returns. Whether you have questions about sizing, materials, or styling tips, we're always available to provide personalized assistance and ensure that your shopping experience exceeds your expectations.</p>
            </div>
            <div>
              <img src='https://plus.unsplash.com/premium_photo-1661526423654-32fac398cf1a?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt=''/>
            </div>
          </div>
        </div>

        <div className='mt-10 space-y-4'>
          <h1 className='text-xl font-medium text-[#808080]'>Experience Luxury Online Shopping</h1>
          <div className='grid md:grid-cols-2 gap-10  text-[#707070] tracking-wide leading-8'>
            <div>
              <img src='https://plus.unsplash.com/premium_photo-1677995700941-100976883af7?q=80&w=1523&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ' alt=''/>
            </div>
            <div className='flex '>
              <p>Indulge in the luxury of online shopping with our user-friendly interface, seamless navigation, and secure checkout process, you can shop with confidence and convenience from the comfort of your own home. Plus, enjoy fast and reliable shipping to your doorstep, so you can start stepping out in style in no time.</p>
            </div>
          </div>
        </div>

        <div className='mt-10 space-y-4'>
          <h1 className='text-xl font-medium text-[#808080]'>Join Our Community</h1>
          <div className='flex flex-col-reverse md:grid md:grid-cols-2 gap-10  text-[#707070] tracking-wide leading-8'>
            <div className='flex'>
              <p>Become part of our exclusive community of discerning shoppers who appreciate the finer things in life. Follow us on social media for the latest trends, style inspiration, and exclusive offers. Sign up for our newsletter to stay updated on new arrivals, promotions, and events.</p>
            </div>
            <div>
              <img src='https://images.unsplash.com/photo-1579869847557-1f67382cc158?q=80&w=1634&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt=''/>
            </div>
          </div>
        </div>
        <p className='mt-10 text-[#707070] leading-8 tracking-wide'>Experience the difference of premium footwear with Chosensoles. Browse our collection today and discover the perfect pair of shoes to elevate your style and make a lasting impression wherever you go. Welcome to luxury shopping at its finest.</p>
      </div>
    </div>
  </>
  )
}

export default About