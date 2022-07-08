import React from 'react'
import CSS from "../assets/css.png"
import GitHub from "../assets/github.png"
import HTML from "../assets/html.png"
import ReactImg from "../assets/react.png"
import Ruby from "../assets/ruby.png"
import Rails from "../assets/rails.png"

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#272930] text-gray-300'>
        {/*Container*/}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-[#F6C86A]'>Skills</p>
                <p className='py-4'>// These are the languages I've experience with</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#1c1d22] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={HTML} alt="HTML Icon" />
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#1c1d22] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={GitHub} alt="GitHub Icon" />
                    <p className='my-4'>GitHub</p>
                </div>
                <div className='shadow-md shadow-[#1c1d22] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={ReactImg} alt="React Icon" />
                    <p className='React-icon my-4'>React</p>
                </div>
                <div className='shadow-md shadow-[#1c1d22] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Ruby} alt="Ruby Icon" />
                    <p className='my-4'>Ruby</p>
                </div>
                <div className='shadow-md shadow-[#1c1d22] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Rails} alt="Rails Icon" />
                    <p className='my-4'>Rails</p>
                </div>
                <div className='shadow-md shadow-[#1c1d22] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={CSS} alt="CSS Icon" />
                    <p className='my-4'>CSS</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills
