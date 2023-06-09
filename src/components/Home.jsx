import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import { Helmet } from 'react-helmet'
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#272930]'>
    <Helmet>
    <title>Josef Hare-Brown Portfolio</title>
  </Helmet>
        {/*Container*/}
        <div className='max-w-[1000px] mx-auto px-2 flex flex-col justify-center h-full'>
            <p className='text-[#F6C86A]'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Josef</h1>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Hare-Brown</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Web and Software Developer</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>
I am interested in oppurtunites to expand on these skills to create exceptional digital experiences
and building responsive full-stack applications. I love it</p>
                <div>
                    <Link to="work" spy={true} smooth={true} duration={500} className='text-white group w-[160px] border-2 px-6 py-3 my-2 flex items-center hover:bg-[#F6C86A] hover:border-[#F6C86A] hover:text-black hover:cursor-pointer'>View Work
                        <span className="group-hover:rotate-90 duration-300">
                        <HiArrowNarrowRight className='ml-3' />
                        </span>
                    </Link>
                </div>
        </div>
    </div>
  )
}

export default Home
