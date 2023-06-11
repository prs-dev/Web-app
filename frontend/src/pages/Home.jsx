import React, { useState, useEffect } from 'react'

const arr = [
    {
        id: 1,
        img: "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id: 2,
        img: "https://images.pexels.com/photos/288477/pexels-photo-288477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id: 3,
        img: "https://images.pexels.com/photos/5668765/pexels-photo-5668765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
]

const Home = () => {
    const [index, setIndex] = useState(1)
    useEffect(() => {
        const interval = () => {
            if (index === 2) {
                setIndex(0)
            } else {
                setIndex(index + 1)
            }
        }
        setTimeout(interval, 5000)
        return () => clearTimeout(interval)
    }, [index])
    return (
        <div>
            <div className="relative h-[calc(100vh-70px)]">
                {arr.map((item, i) => {
                    return index === i ? <img src={item.img} alt="BannerImage" className="absolute h-[calc(100vh-70px)] w-full object-cover object-right opacity-70 transition opacity delay-150" /> : <img src={item.img} alt="BannerImage" className="absolute h-[calc(100vh-70px)] w-full object-cover object-right opacity-0" />
                })}

                <div className="absolute -z-10 bg-gradient-to-t from-[#04c2c2] h-[calc(100vh-70px)] w-full" />
                <div className='absolute flex flex-col gap-[10px] items-center justify-center h-[calc(100vh-70px)] w-full text-[3rem] text-[#ffffff]'>
                    <p>Unlock Your inner happiness with</p>
                    <p className='font-bold text-[4rem] bg-white p-[10px] rounded-md text-[#37e5fc]'>Yash Consultancy Services</p>
                </div>
            </div>

            <div className='px-[20rem] py-[4rem] bg-gradient-to-b from-[#2993a1] flex flex-col gap-[20px]'>
                <h1 className='text-3xl font-bold text-[#dfe2e2]'>Welcome to YCS India</h1>
                <hr className='h-px border-0 dark:bg-[#064255] rounded' />
                <div className="flex items-center gap-[20px]">
                    <p className='w-[50%] flex-1 font-semibold text-white text-justify'>The objective of Yash Consultancy Services India is to provide expert guidance and solutions in the fields of astrology, arbitration, legal consultancy, and natural life care. Our aim is to empower individuals and organizations to overcome challenges, resolve conflicts, and achieve holistic well-being. We strive to deliver high-quality services that are personalized, ethical, and result-oriented. Through our expertise, knowledge, and client-centric approach, we seek to create a positive impact on the lives of our clients, helping them discover their true potential, embrace harmony, and lead fulfilling lives.</p>
                    <div className="flex-1 object-cover h-[20rem] shadow-2xl">
                        <img className='h-[100%] w-[100%] border' src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    </div>
                </div>
                <div className='flex gap-[10px] mt-[20px]'>
                    <div className='flex flex-col border shadow-xl p-[10px] rounded-[10px] flex-1'>
                        <img className='w-[100%] h-[200px]' src="/assets/astrology.png" alt="" />
                        <p className='text-2xl font-semibold text-slate-500 mt-[10px]'>Bhartiye Jyotish</p>
                    </div>
                    <div className='flex flex-col border shadow-xl p-[10px] rounded-[10px] flex-1'>
                        <img className='w-[100%] h-[200px]' src="/assets/natural.jpg" alt="" />
                        <p className='text-2xl font-semibold text-slate-500 mt-[10px]'>Natural Life Care</p>
                    </div>
                    <div className='flex flex-col border shadow-xl p-[10px] rounded-[10px] flex-1'>
                        <img className='w-[100%] h-[200px]' src="/assets/legal.jpg" alt="" />
                        <p className='text-2xl font-semibold text-slate-500
                         mt-[10px]'>Sahay Bhartiya Vidhik</p>
                    </div>
                </div>
            </div>

            <div className='px-[20rem] py-[4rem] bg-white flex flex-col gap-[20px]'>
                <h1 className='text-3xl font-bold self-end text-[#04c2c2]'>
                    Our Mission
                </h1>
                <hr className='h-px border-0 dark:bg-[#064255] rounded' />
                <div className="flex items-center gap-[20px]">
                    <div className="flex-1 object-cover h-[20rem] shadow-2xl">
                        <img className='h-[100%] w-[100%] border' src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    </div>
                    <p className='w-[50%] flex-1 font-semibold text-slate-500 text-justify'>The objective of Yash Consultancy Services India is to provide expert guidance and solutions in the fields of astrology, arbitration, legal consultancy, and natural life care. Our aim is to empower individuals and organizations to overcome challenges, resolve conflicts, and achieve holistic well-being. We strive to deliver high-quality services that are personalized, ethical, and result-oriented. Through our expertise, knowledge, and client-centric approach, we seek to create a positive impact on the lives of our clients, helping them discover their true potential, embrace harmony, and lead fulfilling lives.</p>

                </div>
            </div>

            <div className="relative h-[30vh]">
                {arr.map((item, i) => {
                    return index === i ? <img src={item.img} alt="BannerImage" className="absolute h-[30vh] w-full object-cover object-right opacity-70 transition opacity delay-150" /> : <img src={item.img} alt="BannerImage" className="absolute h-[30vh] w-full object-cover object-right opacity-0" />
                })}
                <div className="absolute -z-10 bg-gradient-to-t from-[#04c2c2] h-[30vh] w-full" />
            </div>

            <div className='px-[20rem] py-[4rem] bg-gradient-to-b from-[#2993a1] flex flex-col gap-[20px]'>
                <h1 className='text-3xl font-bold text-[#dfe2e2]'>Our Services</h1>
                <hr className='h-px border-0 dark:bg-[#064255] rounded' />
                <div className="flex items-center">
                    <div className='flex-[2] flex flex-col items-left gap-[20px]'>
                        <p className='w-[80%] text-3xl font-semibold text-white'>Welcome to Bhartiye Jyotish</p>
                        <p className='w-[80%] font-semibold text-white'>Discover the profound insights of Indian astrology with our expert services. Gain clarity, guidance, and alignment with the cosmic energies to unlock your true potential and lead a fulfilling life</p>
                    </div>
                    <div className="flex-1 object-cover h-[20rem] shadow-2xl rounded-md">
                        <img className='h-[100%] w-[100%] rounded-md border' src="/assets/rishi.jpg" alt="" />
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="flex-1 object-cover h-[20rem] shadow-2xl rounded-md">
                        <img className='h-[100%] w-[100%] rounded-md border' src="/assets/natural.jpg" alt="" />
                    </div>
                    <div className='flex-[2] flex flex-col items-end gap-[20px]'>
                        <p className='w-[80%] text-3xl font-semibold text-slate-600'>Natural Life Care</p>
                        <p className='w-[80%] font-semibold text-slate-600'>The purity and benevolence of nature serve as the wellspring of our strength, and we wholeheartedly embrace organic practices in our therapies. Our commitment to utilizing the purest elements of nature ensures that our treatments are in perfect harmony with the environment. Nestled in a serene and unspoiled setting, we are blessed with the abundance of fresh air, pristine water, untouched soil, ample sunlight, and lush virgin forests, all of which form the backdrop for our therapeutic endeavors.</p>
                    </div>

                </div>
                <div className="flex items-center">

                    <div className='flex-[2] flex flex-col items-left gap-[20px]'>
                        <p className='w-[80%] text-3xl font-semibold text-slate-600'>Sahaya Bhartiye Vidhik</p>
                        <p className='w-[80%] font-semibold text-slate-600'>In today’s complex legal landscape, having access to reliable legal guidance is essential. Synergy Consultancy Services India is a trusted legal consultancy firm that provides expert assistance and guidance in navigating the intricacies of the Indian legal system. With a commitment to excellence and client satisfaction, Synergy Consultancy Services India offers a range of legal consultancy services tailored to meet the diverse needs of individuals and businesses</p>
                    </div>
                    <div className="flex-1 object-cover h-[20rem] shadow-2xl rounded-md">
                        <img className='h-[100%] w-[100%] rounded-md border' src="/assets/legal.jpg" alt="" />
                    </div>
                </div>
            </div>

            <div className='px-[20rem] py-[4rem] bg-gradient-to-b from-[#2993a1] to-slate-500  flex flex-col gap-[20px]'>
                <h1 className='text-3xl font-bold text-[#dfe2e2]'>Center for Excellence</h1>
                <hr className='h-px border-0 dark:bg-[#064255] rounded' />
                <p className='w-[100%] font-semibold text-white text-justify'>Yash Consultancy Services India is proud to establish a Center for Excellence at our headquarters in Lucknow. This center serves as a hub of expertise, innovation, and continuous learning, reinforcing our commitment to delivering exceptional services in the fields of astrology, arbitration, legal consultancy, and naturopathy.

                    The Center for Excellence embodies our vision of providing comprehensive and cutting-edge solutions to our clients. It serves as a platform for our team of experts to enhance their knowledge, skills, and professional development, enabling them to stay at the forefront of their respective fields.

                    Key Features of the Center for Excellence:

                    Knowledge Hub: A dedicated space equipped with extensive research materials and digital resources, fostering a culture of continuous learning and knowledge sharing.

                    Innovation Lab: A state-of-the-art facility where our experts can explore new ideas, develop innovative solutions, and conduct research to address complex challenges in astrology, arbitration, legal consultancy, and natural life care.

                    Collaboration Space: A collaborative environment that encourages cross-functional interactions, brainstorming sessions, and idea exchanges, fostering creativity and synergy among our team members.

                    Technology Integration: The Center for Excellence incorporates the latest technological advancements to support our services, including advanced software, communication tools, and data analytics, ensuring efficient and effective operations.

                    Client Engagement: The center serves as a platform for engaging with our clients for vastu and astrological consultancy, Yoga/Meditation, counselling, hosting seminars, client consultations, and interactive sessions to understand their needs better and provide tailored solutions.

                    Thought Leadership: The Center for Excellence aims to be a thought leader in our service filed by publishing research papers, organizing conferences, and participating in related events, contributing to the advancement and development of our fields of expertise.

                    The establishment of the Center for Excellence at our Lucknow headquarters exemplifies our unwavering commitment to excellence, continuous improvement, and staying ahead of the curve in our service offerings. It enables us to provide superior consultancy services, drive innovation, and empower our clients to achieve their goals with confidence and succes</p>
            </div>

            <div className='px-[20rem] py-[4rem] bg-gradient-to-b from-[#2993a1] to-slate-500  flex flex-col gap-[20px]'>
                <div className="flex items-center">

                    <div className='flex-[2] flex flex-col items-left gap-[20px]'>
                        <p className='w-[80%] text-3xl font-semibold text-white'>Contact Us</p>
                        <p className='w-[80%] font-semibold text-slate-300'>Thank you for your interest in Yash Consultancy Services. We are here to assist you with your queries and provide expert guidance in astrology, arbitration, legal consultancy, and natural Life Care.</p>
                        <span className='flex gap-[10px] text-white'>
                            <i class="fa-solid fa-location-dot"></i>
                            <span>123 Lucknow</span>
                        </span>
                        <span className='flex gap-[10px] text-white'>
                            <i class="fa-solid fa-phone"></i>
                            <span>1234567890</span>
                        </span>
                        <span className='flex gap-[10px] text-white'>
                            <i class="fa-solid fa-envelope"></i>
                            <span>test@gmail.com</span>
                        </span>
                    </div>
                    <div className="flex-1  object-cover shadow-2xl rounded-md">
                        <form className='flex flex-col gap-[10px] p-[10px]'>
                            <input type="text" placeholder='Name' />
                            <input type="text" placeholder='Mobile Number' />
                            <input type="text" placeholder='Location' />
                            <textarea cols="30" rows="5" placeholder='Message...'></textarea>
                            <input type="Submit" value="Submit" className='text-white' />

                        </form>
                    </div>
                </div>
            </div>

            <div className='px-[10rem] py-[4rem] bg-gradient-to-b from-[#2993a1] to-slate-500 flex gap-[20px]'>
                <div className="flex-[2] flex flex-col items-center gap-[10px] justify-center">
                    <img src="/assets/logo.png" alt="" />
                    <p className='w-[80%] font-semibold text-slate-300 text-justify'>Yash Consultancy Services India strives to empower individuals and organizations through expert guidance in astrology, arbitration, legal consultancy, and natural life care. Our objective is to promote holistic well-being, resolve conflicts, and provide personalized solutions for a fulfilling and harmonious life.</p>
                    <div className="flex items-center justify-center gap-[10px]">
                        <i class="fa-brands fa-square-facebook"></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-youtube"></i>
                    </div>
                </div>
                <div className="flex-1 flex flex-col gap-[20px]">
                    <h2 className='text-3xl font-semibold text-white'>Categories</h2>
                    <ul className='text-white'>
                        <li className='underline'>All Pooja</li>
                        <li className='underline'>Festival and other special occasion Pooja</li>
                        <li className='underline'>Pooja</li>
                        <li className='underline'>katha</li>
                        <li className='underline'>Mantra Jaap</li>
                        <li className='underline'>Sanskarshala</li>
                        <li className='underline'>Daan</li>
                    </ul>
                </div>
                <div className="flex-1 flex flex-col gap-[20px]">
                    <h2 className='text-3xl font-semibold text-white'>Useful Links</h2>
                    <ul className='text-white'>
                        <li className='underline'>Home</li>
                        <li className='underline'>About Us</li>
                        <li className='underline'>Services</li>
                        <li className='underline'>Testimonials</li>
                        <li className='underline'>Contact Us</li>
                    </ul>
                </div>
                <div className='flex-[1] flex flex-col items-left gap-[20px]'>
                        <p className='w-[80%] text-3xl font-semibold text-white'>Contact Us</p>
                        <span className='flex gap-[10px] text-white'>
                            <i class="fa-solid fa-location-dot"></i>
                            <span>123 Lucknow</span>
                        </span>
                        <span className='flex gap-[10px] text-white'>
                            <i class="fa-solid fa-phone"></i>
                            <span>1234567890</span>
                        </span>
                        <span className='flex gap-[10px] text-white'>
                            <i class="fa-solid fa-envelope"></i>
                            <span>test@gmail.com</span>
                        </span>
                    </div>
            </div>

            <div className='px-[10rem] items-center justify-center py-[2rem] bg-gradient-to-b from-[#2993a1] to-slate-500 flex gap-[20px] text-white'>
            Copyright © 2023 prs-dev
            </div>

        </div>
    )
}

export default Home