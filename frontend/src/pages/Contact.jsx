import React from 'react'

const Contact = () => {
  return (
    <div className=''>
      <div className='relative'>
        <img className='w-full object-contain h-[70vh] opacity-40' src="/assets/contactus.png" alt="" />
        <div className='absolute -z-10 top-0 left-0 bg-gradient-to-t from-[#fff] to-mainColor w-full h-[70vh]'></div>
      </div>
      <div className='w-[60%] mx-auto my-10'>
        <div className='flex flex-col gap-[20px]'>
          <div className="flex items-center">

            <div className='flex-[2] flex flex-col items-left gap-[20px]'>
              <p className='w-[25%] text-3xl font-semibold text-white bg-mainColor p-2 inline'>Contact Us</p>
              <p className='w-[80%] font-semibold text-contentColor'>Thank you for your interest in Sahai Consultancy Services.
                <br />We are here to assist you with your queries and provide expert guidance in astrology, arbitration, legal consultancy, and naturopathy.
                <br />You can reach out to us through the following channels:

                <br /><span className='underline py-2'>Phone:</span> Call us at +91 XXXXXXXXXX to speak directly with our knowledgeable consultants.

                <br /><span className='underline py-2'>Email:</span> Send your inquiries or consultation requests to info@sahaiconsultancy.com.

                <br /><span className='underline py-2'>Website:</span> Visit our website at www.sahaiconsultancy.com to explore our services and fill out the contact form.</p>
            </div>
            <div className="flex-1  object-cover shadow-2xl rounded-md">
              <form className='h-[50vh] flex flex-col justify-between gap-[10px] p-[10px]'>
                <input className='border p-2' type="text" placeholder='Name' />
                <input className='border p-2' type="text" placeholder='Mobile Number' />
                <input className='border p-2' type="text" placeholder='Location' />
                <textarea className='border p-2' cols="30" rows="5" placeholder='Message...'></textarea>
                <input className='border p-2 text-mainColor font-semibold' type="Submit" value="Submit" />

              </form>
            </div>
          </div>
        </div>
      </div>
      {/* map */}
      <div></div>
    </div>
  )
}

export default Contact