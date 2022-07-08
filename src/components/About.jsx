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
                        <p>My journey into software development is a new one, coming from a media background, creating videos for clients in the academic field such as UCL.
                    I then made my way into broadcast, becoming a multi-client Media Management Operator for the BBC, Channel 4 and 5. Over time however I began to
                    see the appeal of coding and and having a career where there is always something to learn, room to grow, and what you get out reflects what you have put in. 
                    I eventually dived in an an intense but comprehensive bootcamp course with LeWagon, who nurtured this intrigue and taught me the fundemental skills
                    I needed to enter the industry. I'm pretty excited to see what I am capable of. 
                        </p>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default About