import React from 'react'

const Contact = () => {
  return (
    <div name= 'contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form method='POST' action= "https://getform.io/f/28b77d0c-b1a0-4956-a9dd-c9d8bb3ce935" className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-[#c1ff72] text-gray-300'>Contact</p>
            <p className='text-gray-300 py-4'>Submit the form below or email me at spencerdfields@gmail.com</p>
        </div>
        <input className='p-2 bg-gray-300' type='text' placeholder='Name' name='name' />
        <input className='my-4 p-2 bg-gray-300' type='email' placeholder='Email' name='email' />
        <textarea className='p-2 bg-gray-300' type='text' placeholder='Message' name='message' rows='5' />
        <button className='text-white border-2 hover:bg-[#c1ff72] hover:border-black hover:text-black px-4 py-3 my-8 mx-auto flex items-center'>Submit</button>
        </form>
    </div>
  )
}

export default Contact