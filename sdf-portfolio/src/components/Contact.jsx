import React from 'react'

const Contact = () => {
  return (
    <div name= 'contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-[#c1ff72] text-gray-300'>Contact</p>
            <p className='text-gray-300 py-4'>Submit the form below or email me at spencerdfields@gmail.com</p>
        </div>
        <input type='text' placeholder='Name' name='name' />
        <input type='email' placeholder='Email' name='email' />
        <input type='text' placeholder='Name' name='name' />
        </form>
    </div>
  )
}

export default Contact