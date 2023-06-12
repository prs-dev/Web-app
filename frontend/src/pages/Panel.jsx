import {motion} from 'framer-motion'

const Panel = () => {
  return (
    <div>
      <div className='relative'>
        <img className='w-full object-cover h-[50vh] opacity-30' src="/assets/panel.jpg" alt="" />
        <div className='absolute -z-10 top-0 left-0 bg-gradient-to-t from-mainColor to-contentColor w-full h-[50vh]'></div>
        <h2 className='absolute bottom-0 text-3xl bg-mainColor flex items-center justify-center text-white p-1 m-10 w-[20%]'>Panellist</h2>
      </div>
      <div className='w-[70%] mx-auto'>
        <div className='flex gap-4 my-20'>
          <div className='flex-1 flex flex-col gap-5 border p-2 shadow-lg rounded-md'>
            <h2 className='text-2xl text-mainColor'>Astrology Consultancy</h2>
            <p>Discover the profound insights of Indian astrology with our expert services. Gain clarity, guidance, and alignment with the cosmic energies to unlock your true potential and lead a fulfilling life</p>
            <motion.button whileHover={{scale: 1.05}}className='py-2 bg-mainColor text-white w-[50%] rounded-full'>Book Appointment</motion.button>
          </div>
          <div className='flex-1 flex flex-col gap-5 border p-2 shadow-lg rounded-md'>
            <h2 className='text-2xl text-mainColor'>Legal consultancy</h2>
            <p>Discover the profound insights of Indian astrology with our expert services. Gain clarity, guidance, and alignment with the cosmic energies to unlock your true potential and lead a fulfilling life</p>
            <motion.button whileHover={{scale: 1.05}}className='py-2 bg-mainColor text-white w-[50%] rounded-full'>Book Appointment</motion.button>
          </div>
          <div className='flex-1 flex flex-col gap-5 border p-2 shadow-lg rounded-md'>
            <h2 className='text-2xl text-mainColor'>Wellness Naturopathy</h2>
            <p>Discover the profound insights of Indian astrology with our expert services. Gain clarity, guidance, and alignment with the cosmic energies to unlock your true potential and lead a fulfilling life</p>
            <motion.button whileHover={{scale: 1.05}}className='py-2 bg-mainColor text-white w-[50%] rounded-full'>Book Appointment</motion.button>
          </div>
        </div>

        {/* form */}
        <div className='my-20'>
          <h2 className='bottom-0 text-2xl bg-mainColor flex items-center justify-center text-white p-1 my-10 w-[50%]'>Inquiry Form</h2>
          <p>Yassh Consultancy Services offer Astrology/Legal/Naturopathy Consultancy services through user friendly E- Commerce website/app with seamless functionality. If you are a certified astrologer/Legal/Naturopathy expert with a proven background, then here is the perfect online platform which truly rewards your talents and experience, we invite you to Partner with one of the fastest growing Astrological/Legal/Naturopathy Consultancy platform and experience unlimited growth and assured, secure income. Be a subject matter expert and reach out to a number of people looking for quality Astrology/Legal/Naturopathy consultancy services Services.</p>
        </div>
        <form className='flex flex-col border p-5 rounded-lg shadow-lg my-10 gap-4'>
          <label htmlFor="">Your Name</label>
          <input type="text" className='shadow-md border' />
          <label htmlFor="">User Name</label>
          <input type="text" className='shadow-md border' />
          <label htmlFor="">Gender</label>
          <div className='flex gap-4'>
          <div>
            <input type="radio" name="gender" />
            <label>Male</label>
          </div>
          <div>
            <input type="radio" name="gender" />
            <label>Female</label>
          </div>
          </div>
          <label htmlFor="">Email</label>
          <input type="text" className='shadow-md border' />
          <label htmlFor="">Mobile Number</label>
          <input type="text" className='shadow-md border' />
          <label htmlFor="">Alternate Number</label>
          <input type="text" className='shadow-md border' />
          <label htmlFor="">DOB</label>
          <input type="date" className='shadow-md border'/>
          <label htmlFor="">Experience</label>
          <input type="text" className='shadow-md border' />
          <label htmlFor="">State</label>
          <input type="text" className='shadow-md border' />
          <label htmlFor="">City</label>
          <input type="text" className='shadow-md border' />
          <label htmlFor="">PIN code</label>
          <input type="text" className='shadow-md border' />
          <label htmlFor="">Address</label>
          <input type="text" className='shadow-md border' />
          <label htmlFor="">Expertise</label>
          <input type="text" className='shadow-md border' />
          <label htmlFor="">Select Language</label>
          <select className='shadow-md border'>
            <option value="Hindi">Hindi</option>
            <option value="English">English</option>
          </select>
          <label htmlFor="">Select Skill</label>
          <select className='shadow-md border'>
            <option value="">Astrology</option>
            <option value="">Legal</option>
            <option value="">Natural Wellness</option>
          </select>
          <label htmlFor="">Are you on any other portal</label>
          <div className='flex gap-4'>
          <div>
            <input type="radio" name="confirm" />
            <label>Yes</label>
          </div>
          <div>
            <input type="radio" name="confirm" />
            <label>No</label>
          </div>
          </div>
          <label>Profile Photo</label>
          <input type="file" />
          <label>Id Proof(Upload Aadhar Card in pdf format)</label>
          <input type="file" />
          <input type="submit" value="Submit" className='bg-mainColor text-white p-2 w-[10%] my-5' />
        </form>
      </div>
    </div>
  )
}

export default Panel