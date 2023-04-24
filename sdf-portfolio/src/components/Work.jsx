import React from 'react'
import Notepad from '../assets/cartoon-notepad.jpg'

const Work = () => {
  return (
    <div name= 'experience' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            {/*Experience Header Container*/}
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#c1ff72]'>Experience</p>
                <p className='py-6'>Here is a showcase of some of my work:</p>
            </div>

            {/*Main Container*/}
            <div style= {{backgroundImage: `url(${Notepad})`}} 
                 className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                <div className='shadow-lg shadow-gray-700 group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    
                    {/*Hover*/}
                    <div>
                        <span>
                        
                        </span>
                        <div>
                            <a href="/">
                                <button></button>
                            </a>
                            <a href="/">
                                <button></button>
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