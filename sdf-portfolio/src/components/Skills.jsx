import React from 'react'
import CSS from '../assets/css.png'
import GitHub from '../assets/github.png'
import HTML from '../assets/html.png'
import JavaScript from '../assets/javascript.png'
import Mongo from '../assets/mongo.png'
import Node from '../assets/node.png'
import ReactImage from '../assets/react.png'
import Tailwind from '../assets/tailwind.png'


const Skills = () => {
  return (
    <div name = 'skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        {/*Main Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-[#c1ff72]'>
                    Skills
                </p>
                    <p className='py-4'>
                    These are the technologies I have used in my studies.
                    </p>
            </div>
            {/*Container for Icons*/}
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-gray-700 hover:scale-110 duration-600'>
                    <img className='w-20 mx-auto' src={CSS} alt = "CSS Image"/>
                    <p>CSS</p>
                </div>
                <div className='shadow-md shadow-gray-700 hover:scale-110 duration-600'>
                    <img className='w-20 mx-auto' src={GitHub} alt = "GitHub Image"/>
                    <p>GitHub</p>
                </div>
                <div className='shadow-md shadow-gray-700 hover:scale-110 duration-600'>
                    <img className='w-20 mx-auto' src={HTML} alt = "HTML Image"/>
                    <p>HTML</p>
                </div>
                <div className='shadow-md shadow-gray-700 hover:scale-110 duration-600'>
                    <img className='w-20 mx-auto' src={JavaScript} alt = "JavaScript Image"/>
                    <p>JavaScript</p>
                </div>
                <div className='shadow-md shadow-gray-700 hover:scale-110 duration-600'>
                    <img className='w-20 mx-auto' src={Mongo} alt = "Mongo Image"/>
                    <p>Mongo</p>
                </div>
                <div className='shadow-md shadow-gray-600 hover:scale-110 duration-600'>
                    <img className='w-20 mx-auto' src={Node} alt = "Node Image"/>
                    <p>Node</p>
                </div>
                <div className='shadow-md shadow-gray-600 hover:scale-110 duration-600'>
                    <img className='w-20 mx-auto' src={ReactImage} alt = "React Image"/>
                    <p>React</p>
                </div>
                <div className='shadow-md shadow-gray-600 hover:scale-110 duration-600'>
                    <img className='w-20 mx-auto' src={Tailwind} alt = "Tailwind Image"/>
                    <p>Tailwind</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills