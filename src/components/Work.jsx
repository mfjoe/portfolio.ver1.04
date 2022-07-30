import React from 'react'
import HappyTails from '../assets/HappyTails.png'
import WeatherAppIMG from '../assets/weather_app.png'
import DisneyQuiz from '../assets/disney_quiz.png'
import UnderConstruction3 from '../assets/disney_quiz.png'
import UnderConstruction4 from '../assets/UnderConstruction4.png'
import UnderConstruction5 from '../assets/UnderConstruction5.png'



const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#272930]' >

        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#F6C86A]'>Work</p>
                <p className='py-6'>// A look at some of my work and projects to come</p>
            </div>

        {/*Container*/}
            <div
            className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                {/*Grid Item*/}
                <div
                style={{ backgroundImage:`url(${HappyTails})` }}
                className='shadow-lg shadow-[#636363] group container rounded-md flex justify-center items-center mx-auto content-div '
                >
                    <div className='opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                        Happy Tails
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="http://www.happy-tails.fun/" target="_blank">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/soojinhwang/happy_tails.git/" target="_blank">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                 <div

                style={{ backgroundImage:`url(${DisneyQuiz})` }}
                className='shadow-lg shadow-[#636363] group container rounded-md flex justify-center items-center mx-auto content-div '
                >
                    <div className='opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                        Who's That Disney Character?
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://main.d3oggay6i6v2u1.amplifyapp.com/" target="_blank">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div

                style={{ backgroundImage:`url(${WeatherAppIMG})` }}
                className='shadow-lg shadow-[#636363] group container rounded-md flex justify-center items-center mx-auto content-div '
                >
                    <div className='opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                        Weather APP
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://weather-app-react-jhb.herokuapp.com/" target="_blank">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div

                style={{ backgroundImage:`url(${UnderConstruction3})` }}
                className='shadow-lg shadow-[#636363] group container rounded-md flex justify-center items-center mx-auto content-div '
                >
                    <div className='opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                        TBC Project
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div

                style={{ backgroundImage:`url(${UnderConstruction4})` }}
                className='shadow-lg shadow-[#636363] group container rounded-md flex justify-center items-center mx-auto content-div '
                >
                    <div className='opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                        TBC Project
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div

                style={{ backgroundImage:`url(${UnderConstruction5})` }}
                className='shadow-lg shadow-[#636363] group container rounded-md flex justify-center items-center mx-auto content-div '
                >
                    <div className='opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                        TBC Project
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Work
