import React from 'react'


const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#272930] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#F6C86A]'>
                        About
                    </p>
                </div>
                <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Hi! I'm Joe, nice to meet you, please take a look around.</p>
                    </div>
                    <div>
                        <p>Having transitioned from a successful career in media, where I produced videos for academia and managed multi-client media operations for the likes of BBC, Channel 4 and 5, I now find myself thriving in the dynamic world of software development. Fascinated by coding's limitless learning opportunities and the direct correlation between effort and output, I took the plunge into an intensive bootcamp course with LeWagon. This comprehensive program ignited my passion further and equipped me with the fundamental skills necessary to succeed in this industry. As I continue to grow and adapt in this ever-evolving field, I am excited to unlock my full potential and contribute to shaping the digital landscape.
                        </p>
                        <br/> 
                        <p>I've experience in many languages (listed below), as-well as Web API / RESTful services, Jenkins and Mockbird workflows</p>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default About
