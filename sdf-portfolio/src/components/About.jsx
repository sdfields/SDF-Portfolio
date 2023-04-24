import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#c1ff72]'>About Me</p>
                </div>
                <div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm: text-right text-4xl font-bold'>
                        <p>Hi. I'm Spencer, it is so nice to meet you. Please take a look at my portfolio.</p>
                    </div>
                    <div>
                        <p>Mollit mollit occaecat consequat tempor nostrud excepteur minim. Minim aliqua nostrud eiusmod magna dolor dolor ut dolore eiusmod adipisicing. Cupidatat aliqua occaecat consequat deserunt exercitation aute esse dolor commodo aliquip quis. Amet dolor adipisicing in nostrud tempor ullamco. Velit excepteur consectetur et aute.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About