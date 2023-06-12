import React from 'react'
import Slider from 'react-slick'

const Jyotish = () => {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true
  }

  return (
    <div>
      <div className='relative h-[50vh] overflow-hidden'>
        {/* <img className='w-full object-cover h-[50vh] opacity-30' src="/assets/legalv2.png" alt="" /> */}
        <video className='w-full object-cover opacity-50' loop autoPlay muted>
          <source src='/assets/astro.mp4' type="video/mp4" />
        </video>
        <div className='absolute -z-10 top-0 left-0 bg-gradient-to-t from-mainColor to-contentColor w-full h-[50vh]'></div>
        <h2 className='absolute bottom-0 text-3xl bg-mainColor flex items-center justify-center text-white p-1 m-10 w-[20%]'>Bhartiya Jyotish</h2>
      </div>
      <div className='w-[70%] mx-auto'>
        <div className='flex gap-4 items-center justify-center my-10'>
          <div className='flex-1'>
            <h2 className='bottom-0 text-2xl bg-mainColor flex items-center justify-center text-white p-1 my-10 w-[60%]'>Welcome to Bhartiye Jyotish</h2>
            <p className='py-1'>Discover the profound insights of Indian astrology with our expert services. Gain clarity, guidance, and alignment with the cosmic energies to unlock your true potential and lead a fulfilling life</p>
          </div>
          <div className='flex-1 flex items-center justify-center'>
            <img className='w-[70%]' src="/assets/jyotish.jpeg" alt="" />
          </div>
        </div>

        <div className='my-10'>
          <div className='flex flex-col items-center justify-center'>
            <h2 className='bottom-0 text-2xl bg-mainColor flex items-center justify-center text-white p-1 my-10 w-[50%]'>Our Services</h2>
            <p className='py-1'>Explore our comprehensive astrological services designed to provide deep insights, accurate predictions, and personalized guidance. From birth chart analysis to compatibility readings, let our experienced astrologers illuminate your path and empower you to make informed decisions for a harmonious and fulfilling life.</p>
          </div>
        </div>

        <div className='flex items-center justify-center g-4 my-10'>
          <Slider {...settings}>
            <section>
              <img className='' src="/jyotish/1.png" alt="" />
              <p>Numerology</p>
            </section>
            <section>
              <img className='' src="/jyotish/2.png" alt="" />
              <p>Get Horoscope</p>
            </section>
            <section>
              <img className='' src="/jyotish/3.png" alt="" />
              <p>Taro Card</p>
            </section>
            <section>
              <img className='' src="/jyotish/4.png" alt="" />
              <p>Rashi Fal</p>
            </section>
            <section>
              <img className='' src="/jyotish/3.png" alt="" />
              <p>Match Making</p>
            </section>
            <section>
              <img className='' src="/jyotish/3.png" alt="" />
              <p>Guru ji Consultancy</p>
            </section>
          </Slider>
        </div>

        <div className='flex gap-4 items-center justify-center my-10'>
          <div className='flex-1 flex items-center justify-center'>
            <img className='w-[70%]' src="/jyotish/pandit.png" alt="" />
          </div>
          <div className='flex-1'>
            <h2 className='bottom-0 text-2xl bg-mainColor flex items-center justify-center text-white p-1 my-10 w-[50%]'>Guru ji Consultancy</h2>
            <p className='py-1'>Discover the profound insights of Indian astrology with our expert services. Gain clarity, guidance, and alignment with the cosmic energies to unlock your true potential and lead a fulfilling life</p>
          </div>

        </div>

        <div className='flex flex-col gap-4 items-center justify-center my-10'>
          <div className=''>
            <h2 className='bottom-0 text-2xl bg-mainColor flex items-center justify-center text-white p-1 my-10 px-10'>Pooja</h2>
          </div>
          <div className='flex gap-4'>
            <div className='border shadow-lg p-2 rounded-md'>
              <img src="/jyotish/katha.png" alt="" />
              <h2>Katha</h2>
            </div>
            <div className='border shadow-lg p-2 rounded-md'>
              <img src="/jyotish/mantra.png" alt="" />
              <h2>Mantra Jaap</h2>
            </div>
            <div className='border shadow-lg p-2 rounded-md'>
              <img src="/jyotish/sans.png" alt="" />
              <h2>Sanskarshala</h2>
            </div>
            <div className='border shadow-lg p-2 rounded-md'>
              <img src="/jyotish/ram.png" alt="" />
              <h2>Ramnavmi</h2>
            </div>
            <div className='border shadow-lg p-2 rounded-md'>
              <img src="/jyotish/daan.png" alt="" />
              <h2>Gau Daan</h2>
            </div>
          </div>
        </div>

        <div className="flex items-center my-10 gap-5">

          <div className='flex-1 flex flex-col items-left gap-[20px]'>
            <img src="/assets/jyotish.jpeg" alt="" />
          </div>
          <div className="flex-1  object-cover shadow-2xl rounded-md">
            <form className='h-full flex flex-col gap-[10px] p-[10px]'>
              <input type="text" placeholder='Name' />
              <input type="text" placeholder='Mobile Number' />
              <input type="text" placeholder='Location' />
              <textarea cols="30" rows="5" placeholder='Message...'></textarea>
              <input type="Submit" value="Submit" className='text-white bg-mainColor p-1' />

            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Jyotish