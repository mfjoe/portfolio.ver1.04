import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#272930] flex justify-center items-center p-4'>
        <form method='POST' action='https://getform.io/f/d50307f1-fe98-4b58-b2b7-be7e3198fe41' className='flex flex-col max-w-[600px] w-full'>
            <div className='p-3'>
                <p className='text-4xl font-bold inline border-b-4 border-[#F6C86A] text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>// Submit the form below or shoot me an email - josefharebrown@gmail.com</p>
            </div>
            <input className='p-2'type='text' placeholder='Name' name='name'/>
            <input className='my-4 p-4' type='email' placeholder='Email' name='email'/>
            <textarea className='p-2' name='message' rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-[#F6C86A] hover:border-[#F6C86A] px-4 py-3 my-8 mx-auto flex items-center'>Say Hi!</button>
        </form>
        
    </div>
  )
}

export default Contact